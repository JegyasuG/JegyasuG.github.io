#!/usr/bin/env python3
"""
Refresh metrics.json from a Google Scholar profile.

Scholar has no public API and rate-limits automated traffic, so this will fail
on some runs. When it does, the script exits cleanly WITHOUT touching
metrics.json, so the site keeps showing the last known-good numbers.
"""
import json, os, re, sys, urllib.request

PROFILE = "https://scholar.google.com/citations?user=ivT6MMMAAAAJ&hl=en"
OUT     = os.path.join(os.path.dirname(__file__), "..", "metrics.json")
UA      = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
           "(KHTML, like Gecko) Chrome/125.0 Safari/537.36")

def fail(msg):
    print("::warning::Scholar refresh skipped -- " + msg)
    sys.exit(0)          # exit 0 so the workflow does not show as failing

try:
    req  = urllib.request.Request(PROFILE, headers={"User-Agent": UA,
                                                    "Accept-Language": "en-US,en;q=0.9"})
    html = urllib.request.urlopen(req, timeout=45).read().decode("utf-8", "replace")
except Exception as e:
    fail("could not reach Scholar (%s)" % e)

if "gsc_rsb_std" not in html:
    fail("Scholar returned a page without the metrics table (likely a captcha)")

# The summary table is: citations(all, recent), h-index(all, recent), i10(all, recent)
nums = [int(n) for n in re.findall(r'gsc_rsb_std">(\d+)<', html)]
if len(nums) < 6:
    fail("found %d numbers in the metrics table, expected 6" % len(nums))

citations, h_index, i10 = nums[0], nums[2], nums[4]

# sanity checks -- never write an implausible value over a good one
with open(OUT) as f:
    old = json.load(f)
if citations < 1 or h_index < 1:
    fail("parsed zero values")
if citations < old["citations"] * 0.7:
    fail("parsed %d citations, a suspicious drop from %d" % (citations, old["citations"]))

if (citations, h_index, i10) == (old["citations"], old["h_index"], old["i10_index"]):
    print("No change: %d citations, h=%d, i10=%d" % (citations, h_index, i10))
    sys.exit(0)

import datetime
old.update({"citations": citations, "h_index": h_index, "i10_index": i10,
            "updated": datetime.date.today().isoformat()})
with open(OUT, "w") as f:
    json.dump(old, f, indent=2)
    f.write("\n")
print("Updated: %d citations, h=%d, i10=%d" % (citations, h_index, i10))
