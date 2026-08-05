/* ================= 2. Publications ================= */
const PUBS = [
 /* --- Journals --- */
 {t:"Smart and Flexible Metasurface-Inspired Wraps as \u201cAdd-ons\u201d for Enhanced Magnetic Resonance Imaging",a:"J. Gupta, A. B. Dey, S. Kanagaraj, R. Bhattacharjee, D. Sikdar",v:"Applied Physics A, 132(1), 149",y:2026,k:"journal",g:"MRI metasurfaces",q:"Q2",first:true,u:"https://link.springer.com/article/10.1007/s00339-026-09305-8",d:"10.1007/s00339-026-09305-8"},
 {t:"Flexible and Wearable Metasurfaces of Spiral Quartet Arrays for Boosting SNR of 1.5T Magnetic Resonance Imaging",a:"J. Gupta, R. Bhattacharjee, S. Kanagaraj, D. Sikdar",v:"Advanced Engineering Materials, 27(16), 202500155",y:2025,k:"journal",g:"MRI metasurfaces",q:"Q1",first:true,u:"https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adem.202500155",d:"10.1002/adem.202500155"},
 {t:"Improving Signal-to-Noise Ratio of 1.5T MRI Scans using High-Q Resonators based on Coupled Octa-Spirals",a:"J. Gupta, R. Bhattacharjee, S. Kanagaraj, D. Sikdar",v:"Advanced Theory and Simulations, 8(2), 2400848",y:2025,k:"journal",g:"MRI metasurfaces",q:"Q1",first:true,u:"https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adts.202400848",d:"10.1002/adts.202400848"},
 {t:"Resonating Sub-Wavelength Metallic Wires based Pads for Boosting Signal-to-Noise Ratio of Birdcage Head Coils at 1.5T MRI",a:"J. Gupta, P. Das, R. Bhattacharjee, D. Sikdar",v:"Results in Physics, 53, 106972",y:2023,k:"journal",g:"RF coils",q:"Q1",first:true,u:"https://www.sciencedirect.com/science/article/pii/S2211379723007659",d:"10.1016/j.rinp.2023.106972"},
 {t:"Enhancing Signal-to-Noise Ratio of Clinical MRIs using RF Metasurface-Inspired Flexible Wraps",a:"J. Gupta, P. Das, R. Bhattacharjee, D. Sikdar",v:"Applied Physics A, 129(10), 725",y:2023,k:"journal",g:"MRI metasurfaces",q:"Q2",first:true,u:"https://link.springer.com/article/10.1007/s00339-023-06962-x",d:"10.1007/s00339-023-06962-x"},
 {t:"Conformal Metasurface with Nested Resonant Structures to Enhance SNR in 1.5T MRI Scans",a:"A. B. Dey, J. Gupta, G. Kumar, S. Kanagaraj, R. Bhattacharjee, D. Sikdar",v:"IEEE J. Electromagnetics, RF and Microwaves in Medicine and Biology",y:2026,k:"journal",g:"MRI metasurfaces",q:"Q1",rev:true,u:""},
 {t:"A Smart Metasurface for Scanning Deep Brain Tissues at 1.5T MRI",a:"P. Das, J. Gupta, D. Sikdar, R. Bhattacharjee",v:"Current Applied Physics, 53, 172\u2013180",y:2023,k:"journal",g:"MRI metasurfaces",q:"Q2",u:"https://www.sciencedirect.com/science/article/pii/S1567173923001578"},
 {t:"A Non-Linear Triangular Split-Ring based Metaresonator for Targeted Scanning at 1.5T MRI",a:"P. Das, J. Gupta, D. Sikdar, R. Bhattacharjee",v:"Physica Scripta, 98, 065004",y:2023,k:"journal",g:"MRI metasurfaces",q:"Q2",u:"https://iopscience.iop.org/article/10.1088/1402-4896/accf49/meta",d:"10.1088/1402-4896/accf49"},
 {t:"Aperture-Patch Sandwich Metasurface for Magnetic Field Enhancement in 1.5T MRI",a:"P. Das, J. Gupta, D. Sikdar, R. Bhattacharjee",v:"Magnetic Resonance Imaging, 100, 1\u20139",y:2023,k:"journal",g:"MRI metasurfaces",q:"Q2",u:"https://www.sciencedirect.com/science/article/pii/S0730725X23000528"},
 {t:"Electro-tunable Metasurface for Tri-State Dynamic Polarization Switching at Near-Infrared Wavelengths",a:"T. Bhowmik, J. Gupta, D. Sikdar",v:"Journal of Physics: Condensed Matter, 35(39), 395701",y:2023,k:"journal",g:"Nanophotonics",q:"Q2",u:"https://iopscience.iop.org/article/10.1088/1361-648X/ace01b/meta",d:"10.1088/1361-648X/ace01b"},
 {t:"A Thin Metallo-Dielectric Stacked Metamaterial as Add-on for Magnetic Field Enhancement in Clinical MRI",a:"P. Das, J. Gupta, D. Sikdar, R. Bhattacharjee",v:"Journal of Applied Physics, 132, 114901",y:2022,k:"journal",g:"MRI metasurfaces",q:"Q2",u:"https://pubs.aip.org/aip/jap/article/132/11/114901/2837478"},
 {t:"Energy-Saving All-Weather Window based on Selective Filtering of Solar Spectral Radiation",a:"A. K. Chowdhary, T. Bhowmik, J. Gupta, D. Sikdar",v:"Applied Optics, 60(5), 1315\u20131325",y:2021,k:"journal",g:"Nanophotonics",q:"Q1",u:"https://opg.optica.org/ao/fulltext.cfm?uri=ao-60-5-1315&id=447482"},
 {t:"Simulation and Comprehensive Analysis of Fluoride Fiber SPR Sensor with Multilayer Variants of 2D Materials (Graphene and MoS\u2082) under Optimum Radiation Damping in NIR",a:"A. K. Sharma, J. Gupta",v:"IEEE Sensors Journal, 19, 8775\u20138780",y:2019,k:"journal",g:"Plasmonic sensing",q:"Q1",u:"https://ieeexplore.ieee.org/abstract/document/8736250"},
 {t:"Fluoride Fiber Plasmonic Sensor with Multilayer Variants of Tungsten Disulfide (WS\u2082): Seeking Enhanced Figure-of-Merit via Thermo-Optic Tuning of Radiation Damping",a:"A. K. Sharma, J. Gupta",v:"Optical Fiber Technology, 53, 102037",y:2019,k:"journal",g:"Plasmonic sensing",q:"Q2",u:"https://www.sciencedirect.com/science/article/pii/S1068520019302251",d:"10.1016/j.yofte.2019.102037"},

 /* --- Conferences --- */
 {t:"Boosting Performance of 1.5T MRI using Switchable Metasurface Wraps Composed of Interconnected Rectangular Windings",a:"J. Gupta, A. B. Dey, T. Bhowmik, R. Bhattacharjee, S. Kanagaraj, D. Sikdar",v:"IEEE Guwahati Subsection Conference (GCON), Itanagar, India",y:2025,k:"conference",g:"MRI metasurfaces",first:true,award:"Best Paper",u:"https://ieeexplore.ieee.org/xpl/conhome/10183386/proceeding"},
 {t:"Improving SNR of 1.5T MRI using Flexible Magnetic Metasurfaces based on Rectangular Windings",a:"J. Gupta, R. Bhattacharjee, S. Kanagaraj, R. Nair, D. Sikdar",v:"NUSOD, New Delhi, India",y:2024,k:"conference",g:"MRI metasurfaces",first:true,u:"https://ieeexplore.ieee.org/abstract/document/10723662"},
 {t:"Magneto-active Metamaterials for 1.5T MRI: An Intelligent Approach to Boost the Signal-to-Noise Ratio of a Scan",a:"J. Gupta, R. Bhattacharjee, S. Kanagaraj, R. Nair, D. Sikdar",v:"NUSOD, New Delhi, India",y:2024,k:"conference",g:"MRI metasurfaces",first:true,u:"https://ieeexplore.ieee.org/abstract/document/10723549"},
 {t:"Complementary-Bowtie-Aperture Inspired Wearable Metasurfaces for Boosting SNR in 1.5T MRI Systems",a:"J. Gupta, R. Bhattacharjee, S. Kanagaraj, R. Harsh, D. Sikdar",v:"IEEE Guwahati Subsection Conference (GCON), Guwahati, India",y:2023,k:"conference",g:"MRI metasurfaces",first:true,u:"https://ieeexplore.ieee.org/abstract/document/10183478"},
 {t:"Flexible Metasurface-Based Wraps for Improving Magnetic Field Enhancement in 1.5T MRI",a:"J. Gupta, P. Das, R. Bhattacharjee, D. Sikdar",v:"CLEO, San Jose, CA, USA",y:2023,k:"conference",g:"MRI metasurfaces",first:true,u:"https://opg.optica.org/abstract.cfm?uri=CLEO_AT-2023-JTu2A.2"},
 {t:"Capacitively-loaded Spiral Array based RF Metasurfaces for Boosting the Performance of 1.5T MRI",a:"J. Gupta, P. Das, R. Bhattacharjee, D. Sikdar",v:"International Electrical Engineering Congress (iEECON), Krabi, Thailand",y:2023,k:"conference",g:"MRI metasurfaces",first:true,award:"Best Paper",u:"https://ieeexplore.ieee.org/abstract/document/10126619"},
 {t:"Boosting Received Magnetic Field Strength using Wearable Metasurface-based Add-ons for 1.5T MRI",a:"J. Gupta, T. Bhowmik, R. Bhattacharjee, D. Sikdar",v:"META \u2014 Metamaterials, Photonic Crystals and Plasmonics, Paris, France",y:2023,k:"conference",g:"MRI metasurfaces",first:true,u:"https://drive.google.com/file/d/1pl66WMLMpllTlJqq0xJ0qFV5uA6kLCg2/view?usp=sharing"},
 {t:"RF Metasurface Based \u2018Add-Ons\u2019 for Boosting Signal-to-Noise Ratio of 1.5T MRI Scans",a:"J. Gupta, P. Das, T. Bhowmik, R. Bhattacharjee, D. Sikdar",v:"National Conference on Communications (NCC), Guwahati, India",y:2023,k:"conference",g:"MRI metasurfaces",first:true,u:"https://ieeexplore.ieee.org/abstract/document/10067982"},
 {t:"Thin-Wire Array based Resonator for Targeted Clinical 1.5T Magnetic Resonance Imaging",a:"J. Gupta, P. Das, A. K. Chowdhary, R. Bhattacharjee, D. Sikdar",v:"IEEE Photonics Conference (IPC), Vancouver, BC, Canada",y:2022,k:"conference",g:"MRI metasurfaces",first:true,u:"https://ieeexplore.ieee.org/abstract/document/9975742"},
 {t:"Metamaterial-inspired Orthogonally Aligned Shifted Ring Resonator Array (SRRA) for Enhancing Signal-to-Noise Ratio of 1.5T MRI Scans",a:"A. B. Dey, J. Gupta, G. Kumar, S. Kanagaraj, R. Bhattacharjee, D. Sikdar",v:"IEEE Guwahati Subsection Conference (GCON), Itanagar, India",y:2025,k:"conference",g:"MRI metasurfaces",u:"https://ieeexplore.ieee.org/abstract/document/11173416"},
 {t:"Design and Analysis of Metasurfaces Comprising Dumbbell-Shaped Cross-Grids for Magnetic Field Enhancement in MRI",a:"G. Kumar, J. Gupta, A. B. Dey, D. Biswas, R. Bhattacharjee, D. Sikdar",v:"IEEE Guwahati Subsection Conference (GCON), Itanagar, India",y:2025,k:"conference",g:"MRI metasurfaces",u:"https://ieeexplore.ieee.org/abstract/document/11173403"},
 {t:"Quadra-Ring SRR Metamaterials: A Novel Design for Enhancement of Magnetic Field in 1.5T MRI Scans",a:"A. B. Dey, J. Gupta, G. Kumar, S. Kanagaraj, R. Bhattacharjee, D. Sikdar",v:"IEEE Silchar Subsection Conference (SILCON), Agartala, India",y:2024,k:"conference",g:"MRI metasurfaces",u:"https://ieeexplore.ieee.org/abstract/document/10910553"},
 {t:"Development and Benchmark Analysis of a Birdcage-Based Volume Coil for Dedicated Knee Scanning at 1.5T",a:"G. Kumar, A. B. Dey, J. Gupta, S. Kanagaraj, R. Bhattacharjee, D. Sikdar",v:"IEEE Silchar Subsection Conference (SILCON), Agartala, India",y:2024,k:"conference",g:"RF coils",u:"https://ieeexplore.ieee.org/abstract/document/10910709"},
 {t:"Interdigitated Metasurfaces for Enabling Homogeneously Boosted Magnetic Fields during 1.5T MRI Scans",a:"T. S. Konda, J. Gupta, A. B. Dey, R. Bhattacharjee, D. Sikdar",v:"NUSOD, New Delhi, India",y:2024,k:"conference",g:"MRI metasurfaces",u:"https://ieeexplore.ieee.org/abstract/document/10723399"},
 {t:"Mirrored-Twin Rectangular SRR Based Metamaterial for Improving Signal-to-Noise Ratio of 1.5T MRI",a:"P. Das, J. Gupta, D. Sikdar, R. Bhattacharjee",v:"CLEO, San Jose, CA, USA",y:2023,k:"conference",g:"MRI metasurfaces",u:"https://opg.optica.org/abstract.cfm?uri=cleo_at-2023-AM4Q.1"},
 {t:"Gap-plasmon Resonance based Energy-efficient Electro-tunable Metasurface for Polarization-independent Optical Intensity Modulation",a:"T. Bhowmik, J. Gupta, D. Sikdar",v:"META, Paris, France",y:2023,k:"conference",g:"Nanophotonics",u:"https://drive.google.com/file/d/1EjXW8h8V3adnrPLYaGQP3WhhadpCU5EB/view?usp=sharing"},
 {t:"Tunable Metasurface based Polarization-insensitive Electro-Optic Amplitude Modulator for Nanophotonic Systems",a:"T. Bhowmik, J. Gupta, B. Chakraborty, A. K. Chowdhary, D. Sikdar",v:"IEEE Guwahati Subsection Conference (GCON), Guwahati, India",y:2023,k:"conference",g:"Nanophotonics",u:"https://ieeexplore.ieee.org/abstract/document/10183590"},
 {t:"Metasurface based Polarization-insensitive Reflection-mode Band-reject Filters for 6G Applications",a:"S. Das, J. Gupta, T. Bhowmik, B. Chakraborty, D. Sikdar",v:"IEEE Guwahati Subsection Conference (GCON), Guwahati, India",y:2023,k:"conference",g:"6G",u:"https://ieeexplore.ieee.org/abstract/document/10183550"},
 {t:"Design and Analysis of a Thin Metamaterial for Magnetic Field Enhancement in 1.5T MRI",a:"P. Das, J. Gupta, D. Sikdar, R. Bhattacharjee",v:"IEEE Photonics Conference (IPC), Vancouver, BC, Canada",y:2022,k:"conference",g:"MRI metasurfaces",u:"https://ieeexplore.ieee.org/abstract/document/9975761"},
 {t:"Magnetic Metasurface Add-ons \u2014 A Route Towards Making MRI More Efficient, Affordable and Accessible",a:"P. Das, J. Gupta, D. Sikdar, R. Bhattacharjee",v:"IEEE Silchar Subsection Conference (SILCON), Silchar, India",y:2022,k:"conference",g:"MRI metasurfaces",u:"https://ieeexplore.ieee.org/abstract/document/10028836"},
 {t:"Analysis of SNR Enhancement in 1.5T MRI by Using Metasurfaces",a:"P. Das, J. Gupta, D. Sikdar, R. Bhattacharjee",v:"IEEE Microwaves, Antennas and Propagation Conference (MAPCON), Bangalore, India",y:2022,k:"conference",g:"MRI metasurfaces",u:"https://ieeexplore.ieee.org/abstract/document/10046946"}
];

(function(){
  const list = document.getElementById('publist');
  const count = document.getElementById('pubcount');
  const search = document.getElementById('pubsearch');
  const chips = Array.from(document.querySelectorAll('#filters .chip'));
  let filter = 'all', q = '';

  function esc(s){ return s.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }
  function bold(authors){ return esc(authors).replace(/J\. Gupta/g, '<mark>J. Gupta</mark>'); }

  function match(p){
    let ok = true;
    if(filter === 'journal' || filter === 'conference') ok = (p.k === filter);
    else if(filter === 'first') ok = !!p.first;
    else if(filter !== 'all') ok = (p.g === filter);
    if(ok && q){
      const hay = (p.t + ' ' + p.a + ' ' + p.v + ' ' + p.y + ' ' + p.g).toLowerCase();
      ok = hay.indexOf(q) !== -1;
    }
    return ok;
  }

  function render(){
    const rows = PUBS.filter(match);
    if(!rows.length){
      list.innerHTML = '<p class="empty">No publications match that filter. Try clearing the search.</p>';
    } else {
      list.innerHTML = rows.map(function(p){
        const title = p.u
          ? '<a href="' + p.u + '" target="_blank" rel="noopener">' + esc(p.t) + '</a>'
          : esc(p.t);
        let meta = '<span class="venue">' + esc(p.v) + '</span><span>' + p.y + '</span>';
        meta += '<span class="tag">' + esc(p.g) + '</span>';
        if(p.q) meta += '<span class="tag ' + (p.q === 'Q1' ? 'q1' : '') + '">' + p.q + '</span>';
        if(p.award) meta += '<span class="tag award">' + p.award + '</span>';
        if(p.rev) meta += '<span class="tag rev">Under review</span>';
        if(p.d && CITES[p.d] != null && CITES[p.d] > 0)
          meta += '<span class="tag cited">Cited ' + CITES[p.d] + '&times;</span>';
        return '<article class="pub"><h3 class="pub-t">' + title + '</h3>'
             + '<p class="pub-a">' + bold(p.a) + '</p>'
             + '<div class="pub-m">' + meta + '</div></article>';
      }).join('');
    }
    count.textContent = rows.length + ' of ' + PUBS.length + ' shown';
  }

  /* ---- live citation counts from Crossref (free, no API key) ----
     One batched request for every DOI we hold; results are cached for the
     session. Papers without a DOI simply show no badge.                */
  var CITES = {};
  (function(){
    var dois = PUBS.filter(function(p){ return p.d; }).map(function(p){ return p.d; });
    if(!dois.length) return;

    try {
      var cached = sessionStorage.getItem('cites');
      if(cached){ CITES = JSON.parse(cached); render(); return; }
    } catch(e){}

    var url = 'https://api.crossref.org/works'
            + '?filter=' + dois.map(function(d){ return 'doi:' + d; }).join(',')
            + '&select=DOI,is-referenced-by-count&rows=100'
            + '&mailto=jegyasu@mdc-berlin.de';

    fetch(url)
      .then(function(r){ if(!r.ok) throw 0; return r.json(); })
      .then(function(j){
        (j.message.items || []).forEach(function(it){
          CITES[it.DOI.toLowerCase()] = it['is-referenced-by-count'];
        });
        // DOIs are case-insensitive; index both ways so lookups always hit
        PUBS.forEach(function(p){
          if(p.d && CITES[p.d] == null && CITES[p.d.toLowerCase()] != null)
            CITES[p.d] = CITES[p.d.toLowerCase()];
        });
        try { sessionStorage.setItem('cites', JSON.stringify(CITES)); } catch(e){}
        render();
      })
      .catch(function(){ /* no badges; the list is unaffected */ });
  })();

  chips.forEach(function(c){
    c.addEventListener('click', function(){
      chips.forEach(function(o){ o.setAttribute('aria-pressed', String(o === c)); });
      filter = c.dataset.f;
      render();
    });
  });
  search.addEventListener('input', function(){ q = search.value.trim().toLowerCase(); render(); });
  render();
})();
