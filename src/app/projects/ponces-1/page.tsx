'use client';

import React from 'react';
import Viewer from '@/components/viewer';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        'camera-controls'?: boolean | string;
        'auto-rotate'?: boolean | string;
        'shadow-intensity'?: string;
        'exposure'?: string;
        'environment-image'?: string;
        'camera-orbit'?: string;
        [key: string]: any;
      };
    }
  }
}

export default function PoncesProjectPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-sans selection:bg-[#ff2400] selection:text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* BENTO GRID (12-column layout, 12px gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

          {/* 01. EXECUTIVE SUMMARY & FIELD PROBLEM (8 Cols) */}
          <section className="md:col-span-8 border border-zinc-800 bg-[#0d0d10] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-[#ff2400] tracking-wider uppercase mb-3">
                Appropriate Technology · Field Deployment Report
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-2 leading-none">
                PONCES-1
              </h1>
              <h2 className="text-base md:text-lg font-medium text-zinc-400 mb-6">
                Pedal-Operated Nutrient Circulation Eco-System (Generation 1)
              </h2>
              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed font-sans max-w-3xl">
                <p>
                  Ponces Hamlet in the Menoreh Mountains, Kulon Progo, faces a dual hydrometeorological vulnerability: high landslide susceptibility during the rainy season due to terrain slopes exceeding 40%, alongside acute water scarcity and restricted electrical grid infrastructure during the dry season caused by low andesite aquifer productivity (Hendrayana et al., 2021; Yando et al., 2024). Agricultural land relies strictly on seasonal rainfall, with spring sources situated deep below residential elevations, ruling out conventional grid-dependent electromechanical solutions across local hillside plots.
                </p>
                <p>
                  Concurrently, post-harvest banana stem (<em>Musa sp.</em>) biomass is generated in vast quantities but typically ends up open-burned or left to decompose in uncontrolled field piles. Yet this organic waste contains high biochemical potential: 135 mg phosphorus, 213 mg potassium, and 122 mg calcium per 100 g dry weight, along with a natural moisture content of 92.5% (Santoni et al., 2023).
                </p>
                <p className="text-zinc-400">
                  Previous community efforts to produce liquid organic fertilizer (POC) failed primarily due to the severe physical demands of mandatory periodic manual stirring. Anaerobic digestion drastically elevates fluid viscosity, requiring high shearing torque that quickly fatigues farm workers and leads to abandoned, unstirred batches. PONCES-1 converts downward pedal press into pneumatic fluid circulation, requiring zero grid electricity and eliminating direct physical contact with the digestate.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/80 flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
              <span className="border border-zinc-800 px-2.5 py-1 bg-zinc-900/50">Reciprocating Airlift</span>
              <span className="border border-zinc-800 px-2.5 py-1 bg-zinc-900/50">Grid-Independent</span>
              <span className="border border-zinc-800 px-2.5 py-1 bg-zinc-900/50">Volumetric Eff: 88.1%</span>
              <span className="border border-zinc-800 px-2.5 py-1 bg-zinc-900/50">Substrate Agnostic</span>
            </div>
          </section>

          {/* 02. FLUID KINETICS & PNEUMATIC VALIDATION (4 Cols) */}
          <section className="md:col-span-4 border border-zinc-800 bg-[#0d0d10] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
                Mechanical & Fluid Specifications
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="border-l border-[#ff2400] pl-3">
                  <span className="block text-[10px] text-zinc-500 uppercase">Twin-Cylinder Displacement</span>
                  <span className="text-base font-bold text-white">Bore 42.5 mm · Stroke 80 mm</span>
                  <p className="text-[11px] font-sans text-zinc-400 mt-0.5">
                    V<sub>swept</sub> = 227 cm³ theoretical per full stroke compression cycle.
                  </p>
                </div>

                <div className="border-l border-zinc-700 pl-3">
                  <span className="block text-[10px] text-zinc-500 uppercase">Volumetric Efficiency (η<sub>vol</sub>)</span>
                  <span className="text-base font-bold text-white">88.1% (V<sub>act</sub> ≈ 200 mL)</span>
                  <p className="text-[11px] font-sans text-zinc-400 mt-0.5">
                    Measured via water displacement. The 11.9% delta accounts for clearance volume, line compressibility, and micro-leakage.
                  </p>
                </div>

                <div className="border-l border-zinc-700 pl-3">
                  <span className="block text-[10px] text-zinc-500 uppercase">Diffuser Bubble Diameter (d<sub>b</sub>)</span>
                  <span className="text-base font-bold text-white">2.8 mm (Tate&apos;s Law Model)</span>
                  <p className="text-[11px] font-sans text-zinc-400 mt-0.5">
                    Engineered through 0.5 mm micro-orifices across the Fermat spiral coil.
                  </p>
                </div>

                <div className="border-l border-zinc-700 pl-3">
                  <span className="block text-[10px] text-zinc-500 uppercase">Hydrostatic Threshold</span>
                  <span className="text-sm font-bold text-[#ff2400]">P<sub>pump</sub> &gt; P<sub>atm</sub> + ρgh</span>
                  <p className="text-[11px] font-sans text-zinc-400 mt-0.5">
                    Minimum operational head required to overcome liquid column depth, line friction, and check valve cracking pressure.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
              Flow regime: Pulsating macro-convective loop.
            </div>
          </section>

          {/* 03. 3D ISOMETRIC CAD MODEL (12 Cols) */}
          <section className="md:col-span-12 border border-zinc-800 bg-[#0d0d10] p-4 md:p-6">
            <div className="flex justify-between items-center mb-3 text-xs font-mono text-zinc-500 px-1">
              <span>Interactive 3D CAD Reference // Spatial Architecture</span>
              <span className="text-[#ff2400]">Orbit / Pan / Inspect</span>
            </div>
            <div className="relative w-full aspect-video md:aspect-[21/8] bg-[#070709] border border-zinc-800 overflow-hidden">
              <Viewer modelPath="/ponces-1.glb" />
            </div>
          </section>

          {/* USER IDENTIFICATION (12 Cols) */}
          <section id="user-identifiaction" className="scroll-mt-24 md:col-span-12 border border-zinc-800 bg-[#0d0d10] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-[#ff2400] tracking-wider uppercase mb-2">
                User Identification & Field Observation
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                User Requirements Identification & Design Implications
              </h3>

              <div className="overflow-x-auto border border-zinc-800 mt-4">
                <table className="w-full text-xs text-left font-sans text-zinc-300">
                  <thead className="bg-zinc-950 text-zinc-500 border-b border-zinc-800 uppercase font-mono text-[10px]">
                    <tr>
                      <th className="p-4">Information Source</th>
                      <th className="p-4">Findings / User Requirements</th>
                      <th className="p-4">Design Implications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-850">
                    <tr>
                      <td className="p-4 font-bold text-white align-top w-1/4">
                        Communication with the Head of Ponces Hamlet
                      </td>
                      <td className="p-4 align-top leading-relaxed w-1/3">
                        Farmers' reliance on inorganic fertilisers and minimal literacy regarding independent liquid organic fertiliser (POC) processing technology[cite: 1].
                      </td>
                      <td className="p-4 align-top leading-relaxed text-zinc-400">
                        The system is designed to facilitate semi-anaerobic fermentation processes using a commercial biocatalyst (EM4) as an initial step in introducing organic waste treatment technology[cite: 1].
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white align-top">
                        Communication with the Head of Arum Farma Farmers' Group / Girimulyo PRM
                      </td>
                      <td className="p-4 align-top leading-relaxed">
                        Past failures in POC production caused by negligence in conducting periodic fluid agitation[cite: 1].
                      </td>
                      <td className="p-4 align-top leading-relaxed text-zinc-400">
                        Engineering of an integrated fluid circulation system capable of distributing nutrients and breaking up fluid stratification periodically without physically burdening the user[cite: 1].
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white align-top">
                        Site condition observation
                      </td>
                      <td className="p-4 align-top leading-relaxed">
                        Lack of access to electrical infrastructure in the field area, alongside steep slope topography exceeding 40% which limits the application of conventional circulation pumps[cite: 1].
                      </td>
                      <td className="p-4 align-top leading-relaxed text-zinc-400">
                        Implementation of a human-powered drive mechanism using a pneumatic foot pump unit to eliminate reliance on external electrical energy[cite: 1].
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white align-top">
                        Operational requirements identification
                      </td>
                      <td className="p-4 align-top leading-relaxed">
                        Demand for a device with high ergonomics, ease of operation, and minimal maintenance[cite: 1].
                      </td>
                      <td className="p-4 align-top leading-relaxed text-zinc-400">
                        Selection of simple commercial components, utilisation of push-to-fit pneumatic fittings, and simplification of the system architecture to make it easy for lay users to assemble and disassemble[cite: 1].
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white align-top">
                        Processing observation
                      </td>
                      <td className="p-4 align-top leading-relaxed">
                        High risk of physical workload and hygiene issues due to direct physical contact with the fermentation fluid during manual agitation[cite: 1].
                      </td>
                      <td className="p-4 align-top leading-relaxed text-zinc-400">
                        Substitution of mechanical agitation with an air injection system (airlift mechanism) based on a vertical downward pedal press, to increase biomechanical efficiency and prevent direct fluid exposure[cite: 1].
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-white align-top">
                        Substrate management requirements identification
                      </td>
                      <td className="p-4 align-top leading-relaxed">
                        Risk of scattering and clogging in the air distribution line (diffuser) caused by the accumulation of solid chopped banana stem fibre inside the reactor[cite: 1].
                      </td>
                      <td className="p-4 align-top leading-relaxed text-zinc-400">
                        Implementation of the percolation extraction principle (tea-bag principle) by isolating the solid substrate inside a mesh bag, ensuring fluid circulation continues without disrupting the pneumatic infrastructure[cite: 1].
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 04. MECHANICAL GENESIS & DESIGN PIVOT (7 Cols) */}
          <section className="md:col-span-7 border border-zinc-800 bg-[#0d0d10] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-[#ff2400] tracking-wider uppercase mb-2">
                Kinematics & Engineering Evolution
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Kinematic Evolution: From Speed Bumps to Direct Pneumatics
              </h3>

              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed font-sans">
                <p>
                  Initial biomechanical inspiration stemmed from analyzing the double-bass pedal kinematics used in heavy metal drumming (Chris Adler, Lamb of God), which isolates foot actuation while preserving upper-limb utility. In the fields of Ponces, farmers constantly have their hands occupied carrying scythes or forage bundles. Utilizing a vertical downward foot-press leverages full body weight efficiently without tying up user hands.
                </p>

                <div className="p-4 bg-zinc-950 border border-zinc-800 text-xs text-zinc-300">
                  <span className="text-[#ff2400] font-mono font-bold block mb-1">Concept One Discarded (Four-Bar Linkage):</span>
                  The initial design evaluated a step-over speed-bump mechanism driving a rotating digester drum through a four-bar crank linkage. However, topographical site surveys logged slope inclines between 65% and 72% at multiple farm plots. Placing a 60 kg rotating drum on such acute inclines posed catastrophic structural tipping and runaway hazards. Furthermore, the required reduction gearbox would add prohibitive fabrication complexity and maintenance costs.
                </div>

                <p>
                  <strong>Paradigm Shift:</strong> Rather than rotating an unstable outer vessel, the architecture pivoted to a commercial twin-cylinder foot pump delivering compressed air directly to the vessel floor. The resulting pulsating stream releases fine bubbles that ascend due to Archimedean buoyant force, driving an internal vertical airlift macro-convective loop without moving external parts or user contact.
                </p>
              </div>
            </div>

            <div className="mt-6 p-3 bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-400 overflow-x-auto whitespace-nowrap">
              Foot Pedal → Dual Piston Comp. → Silicone Check Valve → Fermat Spiral Diffuser → Airlift Circulation
            </div>
          </section>

          {/* 05. TOPOGRAPHICAL CONSTRAINTS & GEOLOGY (5 Cols) */}
          <section className="md:col-span-5 border border-zinc-800 bg-[#0d0d10] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-zinc-500 tracking-wider uppercase mb-2">
                Contextual Geography & Hydrogeology
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Site Conditions Dictating Engineering
              </h3>

              <div className="space-y-3 text-sm text-zinc-300 leading-relaxed font-sans mb-6">
                <p>
                  Engineering parameters cannot exist divorced from field geography. Ponces sits within the Menoreh hill tract, characterized by average slopes exceeding 40% and monthly rainfall between 300 mm and 500 mm during wet periods, designated as a high-risk landslide zone (Yando et al., 2024).
                </p>
                <p>
                  Conversely, dry seasons bring severe drought due to dense andesite bedrock possessing negligible hydraulic conductivity and poor transmissivity (Hendrayana et al., 2021). Farming relies entirely on rainfed schedules, while high fuel costs limit motorized water pumping from distant valley floors.
                </p>
                <p>
                  These lithological barriers immediately invalidated sub-surface options like biopore composting pits. The machine had to be lightweight, modular, self-powered, and stable on narrow terrace steps without invasive ground anchoring.
                </p>
              </div>

              {/* Geographic Reference */}
              <div className="p-3 bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400">
                <span className="text-[#ff2400] block mb-1">Geological Reference:</span>
                Yando et al. (2024). <em>Identification of ground movement vulnerability based on slope incline and precipitation in Ponces Hamlet</em>. CE ReForm.
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-zinc-800 text-xs text-zinc-400 font-sans italic">
              Mechanical systems must conform to site hydrometeorology, not theoretical assumptions.
            </div>
          </section>

          {/* 06. 10-DAY FERMENTATION TELEMETRY (6 Cols) */}
          <section className="md:col-span-6 border border-zinc-800 bg-[#0d0d10] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-[#ff2400] tracking-wider uppercase mb-2">
                Biochemical Dynamics · 10-Day Field Log
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                pH Curve & Electrical Conductivity (EC) Telemetry
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-4">
                Biochemical monitoring of banana stem slurry inoculated with EM4 catalyst conducted from August 4 to August 14, 2026, using an EZ9908 multiparameter probe calibrated against standard buffers (pH 4.01 and 6.86):
              </p>

              {/* Data Table */}
              <div className="border border-zinc-800 overflow-x-auto mb-4">
                <table className="w-full font-mono text-xs text-left">
                  <thead className="bg-zinc-950 text-zinc-500 border-b border-zinc-800">
                    <tr>
                      <th className="p-2">Day</th>
                      <th className="p-2">Date</th>
                      <th className="p-2">pH</th>
                      <th className="p-2">EC (µS/cm)</th>
                      <th className="p-2">Decomposition Phase</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-850 text-zinc-300">
                    <tr>
                      <td className="p-2">D-0</td>
                      <td className="p-2">Aug 04</td>
                      <td className="p-2 font-bold text-white">7.00</td>
                      <td className="p-2 text-zinc-600">—</td>
                      <td className="p-2 font-sans text-[11px] text-zinc-400">Baseline neutral well water</td>
                    </tr>
                    <tr>
                      <td className="p-2">D-2</td>
                      <td className="p-2">Aug 06</td>
                      <td className="p-2 font-bold text-white">6.70</td>
                      <td className="p-2 text-zinc-600">—</td>
                      <td className="p-2 font-sans text-[11px] text-zinc-400">Organic acid release initiates</td>
                    </tr>
                    <tr>
                      <td className="p-2">D-4</td>
                      <td className="p-2">Aug 08</td>
                      <td className="p-2 font-bold text-white">4.92</td>
                      <td className="p-2 font-bold text-white">884</td>
                      <td className="p-2 font-sans text-[11px] text-zinc-400">Volatile fatty acid buildup</td>
                    </tr>
                    <tr>
                      <td className="p-2">D-6</td>
                      <td className="p-2">Aug 10</td>
                      <td className="p-2 font-bold text-[#ff2400]">4.72</td>
                      <td className="p-2 text-zinc-600">—</td>
                      <td className="p-2 font-sans text-[11px] text-zinc-400">Peak acidogenic nadir point</td>
                    </tr>
                    <tr>
                      <td className="p-2">D-8</td>
                      <td className="p-2">Aug 12</td>
                      <td className="p-2 font-bold text-white">5.31</td>
                      <td className="p-2 font-bold text-white">1,529</td>
                      <td className="p-2 font-sans text-[11px] text-zinc-400">Mineralization transition</td>
                    </tr>
                    <tr>
                      <td className="p-2">D-10</td>
                      <td className="p-2">Aug 14</td>
                      <td className="p-2 font-bold text-white">6.01</td>
                      <td className="p-2 font-bold text-[#ff2400]">1,630</td>
                      <td className="p-2 font-sans text-[11px] text-zinc-400">Nutrient solubilization stabilization</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                The characteristic U-shaped pH trajectory (sharp drop followed by steady recovery toward neutral) accompanied by an EC climb from 884 to 1,630 µS/cm validates active nutrient dissolution and steady anaerobic digestion without septic spoilage.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
              Note: Secondary laboratory assays are required to quantify absolute N-P-K concentrations.
            </div>
          </section>

          {/* 07. HARDWARE ARCHITECTURE: TEA-BAG & FERMAT SPIRAL (6 Cols) */}
          <section className="md:col-span-6 border border-zinc-800 bg-[#0d0d10] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-zinc-500 tracking-wider uppercase mb-2">
                Component Engineering Details
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Percolation Mesh, Spiral Diffuser, and Airlock Trap
              </h3>

              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed font-sans">
                <div>
                  <h4 className="font-semibold text-white text-xs uppercase font-mono mb-1">
                    1. Percolation Mesh Bag Principle
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Chopped banana stems are isolated inside an open-weave mesh bag secured with stone ballast. Porous mesh boundaries facilitate continuous multi-directional passive nutrient and microbial diffusion while preventing plant fibers from clogging bottom diffuser ports.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white text-xs uppercase font-mono mb-1">
                    2. Fermat Spiral Diffuser Geometry
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Polyurethane (PU) tubing is coiled into a Fermat spiral profile driven through a push-to-fit Y-splitter. Upward-facing laser micro-perforations ensure uniform bubble distribution across the vessel floor, eliminating stagnation zones.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white text-xs uppercase font-mono mb-1">
                    3. Fluid Safety: Silicone Check Valve & Airlock
                  </h4>
                  <p className="text-xs text-zinc-400">
                    An inline silicone check valve blocks slurry backflow into pump pistons during suction strokes. A recycled-bottle water trap on the lid vents anaerobic digestion gases (CO₂ and sulfur compounds) without letting atmospheric oxygen or contaminants infiltrate the vessel.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] font-mono text-[#ff2400]">
              Low component cost, RTV high-temp silicone seals, fully repairable by rural workshops.
            </div>
          </section>

          {/* 08. PLATFORM AGNOSTIC & DUAL PRODUCT (7 Cols) */}
          <section className="md:col-span-7 border border-zinc-800 bg-[#0d0d10] p-6 md:p-8">
            <div className="text-[11px] font-mono text-[#ff2400] tracking-wider uppercase mb-2">
              Platform Agnosticism & Product Utilization
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Biocatalyst-Agnostic Circulation & Dual-Yield Output
            </h3>

            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed font-sans">
              <p>
                PONCES-1 is engineered as a physical fluidics platform that is <strong>completely agnostic to the choice of fermentation activator</strong>. Operators are not tethered to commercial inoculants like EM4; the system functions identically with indigenous microorganisms (IMO/MOL), bamboo root inoculants, coconut coir extracts, or rabbit urine based on seasonal availability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="border border-zinc-800 bg-zinc-950 p-3">
                  <span className="text-[#ff2400] font-bold block mb-1">LIQUID FRACTION (POC)</span>
                  <p className="font-sans text-zinc-400 text-xs">
                    Nutrient-dense liquid rich in solubilized minerals (K, P, Ca), ready for direct foliar spraying or root drenching on horticulture crops.
                  </p>
                </div>
                <div className="border border-zinc-800 bg-zinc-950 p-3">
                  <span className="text-[#ff2400] font-bold block mb-1">SOLID RESIDUE (SOIL CONDITIONER)</span>
                  <p className="font-sans text-zinc-400 text-xs">
                    Digested fiber retaining colonized microflora, extracted via the mesh bag and spread across fields as an organic soil conditioner to rebuild structural porosity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 09. SOCIAL IMPLEMENTATION & ADOPTION (5 Cols) */}
          <section className="md:col-span-5 border border-zinc-800 bg-[#0d0d10] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-zinc-500 tracking-wider uppercase mb-2">
                Community Engagement & Transfer
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Field Handover & Farmer Adoption
              </h3>

              <div className="space-y-3 text-sm text-zinc-300 leading-relaxed font-sans">
                <p>
                  The physical prototype was officially transferred to the <strong>Arum Farma Farmer Group</strong> in Ponces Hamlet through an interactive workshop with 14 farming leaders and village officials.
                </p>
                <p className="text-zinc-400">
                  Initial participant reactions showed hesitation regarding pneumatic airlift physics. However, comprehension took hold rapidly once farmers operated the pedal directly, observing internal circulation currents and live probe shifts on the digital display.
                </p>
                <div className="border-l-2 border-zinc-700 pl-3 py-1 text-xs text-zinc-400 italic">
                  The local codename was simplified to <strong>ROT (Reaktor Organik Tani)</strong> to eliminate linguistic barriers and promote long-term adoption.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
              Field Evaluation: Practical operation overcomes conceptual skepticism.
            </div>
          </section>

          {/* 10. SYSTEM SPECIFICATION MATRIX (12 Cols) */}
          <section className="md:col-span-12 border border-zinc-800 bg-[#0d0d10] p-6 md:p-8">
            <div className="text-[11px] font-mono text-zinc-500 tracking-wider uppercase mb-4">
              Consolidated Technical Specifications
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
              <div className="border border-zinc-800 bg-zinc-950 p-3">
                <span className="text-[10px] text-zinc-500 block mb-1">PROJECT NAME</span>
                <span className="text-white font-semibold">PONCES-1</span>
              </div>
              <div className="border border-zinc-800 bg-zinc-950 p-3">
                <span className="text-[10px] text-zinc-500 block mb-1">LOCAL CODENAME</span>
                <span className="text-white font-semibold">ROT (Reaktor Organik Tani)</span>
              </div>
              <div className="border border-zinc-800 bg-zinc-950 p-3">
                <span className="text-[10px] text-zinc-500 block mb-1">LOCATION & TERRAIN</span>
                <span className="text-white font-semibold">Girimulyo (Slope &gt;40%)</span>
              </div>
              <div className="border border-zinc-800 bg-zinc-950 p-3">
                <span className="text-[10px] text-zinc-500 block mb-1">TARGET COMMUNITY</span>
                <span className="text-white font-semibold">Poktan Arum Farma</span>
              </div>
              <div className="border border-zinc-800 bg-zinc-950 p-3">
                <span className="text-[10px] text-zinc-500 block mb-1">DRIVE MECHANISM</span>
                <span className="text-white font-semibold">Twin Foot Pump (Recip.)</span>
              </div>
              <div className="border border-zinc-800 bg-zinc-950 p-3">
                <span className="text-[10px] text-zinc-500 block mb-1">HARDWARE STATUS</span>
                <span className="text-[#ff2400] font-semibold">Field Deployed / Gen 1.0</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-800/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs text-zinc-400">
              <div>
                <strong className="text-zinc-300">Research & Engineering Lead:</strong> Muhammad Zhifrantino.
              </div>
              <div className="font-mono text-[11px] text-zinc-500">
                Universitas Muhammadiyah Yogyakarta · Community Empowerment Division (2026).
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}