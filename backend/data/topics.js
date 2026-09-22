// Neuroscience Library — core reference topics
// Each topic: slug, title, category, summary, sections[{heading, body}], keyFacts[]

const topics = [
  {
    slug: "the-neuron",
    title: "The Neuron",
    category: "Cells & Signaling",
    readTime: "6 min",
    summary:
      "The neuron is the basic signaling unit of the nervous system — a specialized cell built to receive, integrate, and pass on electrical and chemical information.",
    keyFacts: [
      "The adult human brain contains roughly 86 billion neurons.",
      "A single neuron can form thousands of connections with other cells.",
      "Neurons are post-mitotic: most do not divide once mature.",
    ],
    sections: [
      {
        heading: "Structure",
        body:
          "A neuron has four working regions. Dendrites branch out from the cell body and receive incoming signals from other neurons through specialized junctions called synapses. The soma (cell body) houses the nucleus and the machinery that keeps the cell alive, and integrates the signals arriving from the dendrites. The axon is a single long projection — from a fraction of a millimeter to over a meter in the case of motor neurons reaching the feet — that carries the neuron's output signal away from the soma. At its far end, the axon divides into axon terminals, which release chemical messengers onto the next cell in the circuit.",
      },
      {
        heading: "The resting and action potential",
        body:
          "A neuron at rest holds an electrical charge across its membrane of about -70 millivolts, maintained by ion pumps that keep sodium ions concentrated outside the cell and potassium ions concentrated inside. When enough excitatory input pushes the membrane potential past a threshold, voltage-gated sodium channels snap open, sodium rushes in, and the inside of the cell briefly flips to a positive charge — this is the action potential, or 'spike.' Potassium channels then open to restore the negative resting state, and the pulse travels down the axon as a self-regenerating wave rather than fading like a signal in a wire.",
      },
      {
        heading: "Types of neurons",
        body:
          "Neurons are broadly classed by function. Sensory neurons carry information from the body's receptors — skin, eyes, ears, muscles — toward the central nervous system. Motor neurons carry commands from the brain and spinal cord out to muscles and glands. Interneurons, which make up the vast majority of neurons in the brain, connect other neurons to each other, forming the local circuits that process, filter, and combine information.",
      },
      {
        heading: "Why it matters for disease",
        body:
          "Many neurological disorders trace back to problems at the level of the neuron itself: the misfolded proteins that accumulate inside neurons in Alzheimer's disease, the loss of dopamine-producing neurons in Parkinson's disease, or the degeneration of the neurons that control voluntary movement in ALS. Understanding the neuron's basic biology is the foundation for understanding almost every condition described elsewhere in this library.",
      },
    ],
  },
  {
    slug: "synaptic-transmission",
    title: "Synaptic Transmission",
    category: "Cells & Signaling",
    readTime: "5 min",
    summary:
      "The synapse is the junction where one neuron passes a signal to the next — mostly through chemical messengers rather than direct electrical contact.",
    keyFacts: [
      "Most synapses in the human brain are chemical, not electrical.",
      "Synaptic transmission takes roughly half a millisecond.",
      "Synapses can strengthen or weaken with use — the cellular basis of learning.",
    ],
    sections: [
      {
        heading: "Crossing the gap",
        body:
          "At a chemical synapse, the sending (presynaptic) neuron and the receiving (postsynaptic) neuron are separated by a gap of about 20 nanometers called the synaptic cleft. When an action potential reaches the axon terminal, it triggers voltage-gated calcium channels to open. The resulting influx of calcium causes small membrane-bound sacs called synaptic vesicles to fuse with the terminal's membrane and release their contents — neurotransmitter molecules — into the cleft.",
      },
      {
        heading: "Receiving the message",
        body:
          "Neurotransmitter molecules diffuse across the cleft and bind to receptor proteins on the postsynaptic membrane. Depending on the neurotransmitter and receptor type, this binding either opens ion channels directly (ionotropic receptors, producing a fast effect) or triggers a longer chemical cascade inside the receiving cell (metabotropic receptors, producing a slower, more sustained effect). The result is either a small excitatory nudge toward firing or an inhibitory push away from it.",
      },
      {
        heading: "Summation and decision-making",
        body:
          "A single neuron typically receives thousands of synaptic inputs at once, some excitatory and some inhibitory. The soma sums these inputs continuously; only when the net effect pushes the membrane past threshold does the neuron fire its own action potential. This constant weighing of competing signals is the basic computation that underlies everything from a reflex to a decision.",
      },
      {
        heading: "Clearing the signal",
        body:
          "For a synapse to reset, the neurotransmitter must be removed from the cleft — either broken down by enzymes, reabsorbed by the presynaptic neuron through reuptake transporters, or taken up by nearby glial cells. Many psychiatric and neurological medications work by adjusting this clearance step; SSRIs, for example, block the reuptake of serotonin to prolong its effect at the synapse.",
      },
    ],
  },
  {
    slug: "neurotransmitters",
    title: "Neurotransmitters",
    category: "Cells & Signaling",
    readTime: "6 min",
    summary:
      "Neurotransmitters are the chemical vocabulary of the nervous system — a relatively small set of molecules whose balance shapes mood, movement, memory, and alertness.",
    keyFacts: [
      "Over 100 neurotransmitters and neuromodulators have been identified.",
      "The same neurotransmitter can be excitatory in one circuit and inhibitory in another.",
      "Imbalances in neurotransmitter systems are implicated in Parkinson's, depression, and epilepsy.",
    ],
    sections: [
      {
        heading: "The major players",
        body:
          "Glutamate is the primary excitatory neurotransmitter in the brain and is central to learning and memory. GABA (gamma-aminobutyric acid) is the primary inhibitory neurotransmitter, acting as a brake that keeps neural circuits from firing out of control. Dopamine is closely tied to movement, motivation, and reward, and its loss in a specific brain region produces the motor symptoms of Parkinson's disease. Serotonin regulates mood, sleep, and appetite. Acetylcholine drives muscle contraction at the junction between nerve and muscle, and also supports attention and memory in the brain. Norepinephrine governs arousal and the fight-or-flight response.",
      },
      {
        heading: "Excitation, inhibition, and modulation",
        body:
          "Fast neurotransmitters like glutamate and GABA act on a timescale of milliseconds and directly open ion channels. Neuromodulators like dopamine, serotonin, and norepinephrine act more slowly, often over seconds to minutes, adjusting how responsive a circuit is to other inputs rather than driving it directly. This is why a shift in neuromodulator levels can change mood or motivation broadly, rather than triggering a single specific action.",
      },
      {
        heading: "When the balance shifts",
        body:
          "Neurological and psychiatric disease frequently involves a disruption to one of these systems: reduced dopamine in the basal ganglia in Parkinson's disease, excessive or poorly regulated glutamate signaling contributing to seizures in epilepsy, and altered serotonin and norepinephrine signaling associated with mood disorders. Many neurological medications — dopamine replacement therapy, anti-seizure drugs, antidepressants — work by nudging these chemical systems back toward balance rather than repairing the underlying structural cause.",
      },
    ],
  },
  {
    slug: "cerebral-cortex",
    title: "The Cerebral Cortex",
    category: "Brain Anatomy",
    readTime: "6 min",
    summary:
      "The cerebral cortex is the wrinkled outer layer of the brain responsible for higher-order functions: perception, language, reasoning, and voluntary action.",
    keyFacts: [
      "The cortex is only about 2–4 millimeters thick but covers a surface area of roughly 2,500 square centimeters when unfolded.",
      "Its folds (gyri and sulci) allow this large surface area to fit inside the skull.",
      "The cortex is organized into four lobes per hemisphere: frontal, parietal, temporal, and occipital.",
    ],
    sections: [
      {
        heading: "The four lobes",
        body:
          "The frontal lobe handles planning, decision-making, voluntary movement, and much of personality and impulse control. The parietal lobe integrates sensory information — touch, temperature, spatial orientation — and helps coordinate movement in response to it. The temporal lobe processes sound and language comprehension and, together with structures beneath it, supports memory formation. The occipital lobe, at the back of the brain, is dedicated almost entirely to processing visual information.",
      },
      {
        heading: "Lateralization",
        body:
          "The cortex is split into left and right hemispheres connected by a thick bundle of fibers called the corpus callosum. In most people, the left hemisphere is dominant for language production and analytical sequencing, while the right hemisphere contributes more to spatial reasoning and aspects of emotional processing — though the popular idea of people being strictly 'left-brained' or 'right-brained' oversimplifies what is, in reality, a highly interconnected system.",
      },
      {
        heading: "Motor and sensory maps",
        body:
          "A strip of cortex just in front of the central groove (the primary motor cortex) and a parallel strip just behind it (the primary somatosensory cortex) each contain an organized map of the opposite side of the body, with the amount of cortical territory devoted to a body part reflecting how finely it can be controlled or sensed — hands and lips take up disproportionately large regions compared to the torso.",
      },
      {
        heading: "Relevance to injury and disease",
        body:
          "Because cortical functions are regionally organized, damage to a specific area — from stroke, trauma, or tumor — tends to produce a recognizable pattern of deficits: damage to the language areas of the left frontal and temporal lobes can impair speech production or comprehension, while damage to the occipital lobe can cause specific visual field loss.",
      },
    ],
  },
  {
    slug: "limbic-system",
    title: "The Limbic System",
    category: "Brain Anatomy",
    readTime: "5 min",
    summary:
      "The limbic system is a group of interconnected structures beneath the cortex that governs emotion, motivation, and the formation of long-term memories.",
    keyFacts: [
      "The hippocampus is essential for converting short-term experiences into long-term memories.",
      "The amygdala assigns emotional significance to sensory experience, especially fear and threat.",
      "Limbic structures are heavily involved in epilepsy, PTSD, and depression.",
    ],
    sections: [
      {
        heading: "Core structures",
        body:
          "The hippocampus, shaped like a curled seahorse, is central to forming new episodic memories — it does not store memories permanently but helps consolidate them for longer-term storage elsewhere in the cortex. The amygdala, an almond-shaped cluster of nuclei, evaluates incoming sensory information for emotional and threat-related significance and can trigger rapid physiological responses before conscious awareness catches up. The hypothalamus links the nervous system to the endocrine system, regulating hunger, thirst, body temperature, and the release of stress hormones. The cingulate cortex contributes to emotional regulation and conflict monitoring.",
      },
      {
        heading: "Memory and emotion are linked",
        body:
          "Because the hippocampus and amygdala sit side by side and are densely interconnected, emotionally charged events tend to be remembered more vividly than neutral ones — a mechanism that is adaptive in general but can become maladaptive when it entrenches traumatic memories too strongly, as seen in post-traumatic stress disorder.",
      },
      {
        heading: "Clinical relevance",
        body:
          "The hippocampus is one of the earliest and most severely affected structures in Alzheimer's disease, which explains why short-term memory loss is often the first noticeable symptom. Temporal lobe epilepsy frequently originates in or near the hippocampus, and limbic structures are a common focus of research into mood disorders and anxiety.",
      },
    ],
  },
  {
    slug: "basal-ganglia",
    title: "The Basal Ganglia",
    category: "Brain Anatomy",
    readTime: "5 min",
    summary:
      "The basal ganglia are a set of deep brain structures that select and refine voluntary movement — and their dysfunction is central to Parkinson's and Huntington's disease.",
    keyFacts: [
      "The basal ganglia rely heavily on dopamine to regulate movement.",
      "Parkinson's disease results from the loss of dopamine-producing neurons in the substantia nigra, part of the basal ganglia circuit.",
      "The basal ganglia work as a 'gatekeeper,' suppressing unwanted movements until one is selected.",
    ],
    sections: [
      {
        heading: "What they do",
        body:
          "Rather than initiating movement directly, the basal ganglia act as a filter that sits between the cortex, which proposes many possible actions, and the final motor output. Through a balance of excitatory and inhibitory loops, the basal ganglia suppress competing, unwanted movements and allow the selected one through smoothly — a process that also applies to habit formation and some aspects of reward-based learning.",
      },
      {
        heading: "The dopamine connection",
        body:
          "A key node in this circuit, the substantia nigra, supplies dopamine that keeps the basal ganglia's excitatory and inhibitory pathways in balance. When these dopamine-producing neurons die off, as happens progressively in Parkinson's disease, the balance shifts toward excessive inhibition of movement, producing slowness, rigidity, and tremor.",
      },
      {
        heading: "When the circuit breaks down",
        body:
          "Damage or degeneration in different parts of the basal ganglia produces strikingly different movement disorders: too little dopamine produces the slowed, rigid movement of Parkinson's disease, while degeneration of a different basal ganglia pathway in Huntington's disease releases movement from its normal restraint, producing involuntary, jerky motions called chorea.",
      },
    ],
  },
  {
    slug: "cerebellum",
    title: "The Cerebellum",
    category: "Brain Anatomy",
    readTime: "4 min",
    summary:
      "Tucked beneath the cerebral hemispheres, the cerebellum fine-tunes movement for balance, timing, and precision, and contributes to some aspects of cognition.",
    keyFacts: [
      "The cerebellum contains more neurons than the rest of the brain combined, despite being about 10% of total brain volume.",
      "Cerebellar damage produces uncoordinated movement (ataxia) without paralysis.",
      "It compares intended movement to actual movement in real time and corrects the difference.",
    ],
    sections: [
      {
        heading: "A predictive comparator",
        body:
          "The cerebellum receives a copy of the motor commands sent out by the cortex alongside real-time sensory feedback from muscles and joints. By continuously comparing what movement was intended with what is actually happening, it can make rapid corrective adjustments — the basis of smooth, well-timed movement, from walking to playing an instrument.",
      },
      {
        heading: "Beyond movement",
        body:
          "While classically associated purely with motor coordination, the cerebellum also participates in some aspects of language processing, attention, and emotional regulation, reflecting its extensive connections to non-motor regions of the cortex.",
      },
      {
        heading: "Clinical signs of cerebellar damage",
        body:
          "Damage to the cerebellum — from stroke, alcohol-related degeneration, tumors, or genetic ataxias — classically produces a wide-based, unsteady gait, overshooting or undershooting when reaching for an object, slurred speech, and rhythmic tremor that worsens during voluntary movement, in contrast to the resting tremor typical of Parkinson's disease.",
      },
    ],
  },
  {
    slug: "blood-brain-barrier",
    title: "The Blood–Brain Barrier",
    category: "Systems & Support",
    readTime: "4 min",
    summary:
      "A specialized layer of tightly sealed blood vessel cells that protects the brain from toxins and pathogens circulating in the blood — while also complicating drug delivery.",
    keyFacts: [
      "Formed by tightly joined endothelial cells lining brain capillaries.",
      "Blocks most large molecules, bacteria, and many drugs from entering the brain.",
      "Its breakdown is implicated in multiple sclerosis, stroke, and some infections.",
    ],
    sections: [
      {
        heading: "How it works",
        body:
          "Unlike blood vessels elsewhere in the body, the endothelial cells lining brain capillaries are fused together by tight junctions, leaving no gaps for molecules to slip through passively. Only small, fat-soluble molecules, along with substances actively transported by specific proteins — such as glucose, the brain's primary fuel — can cross efficiently.",
      },
      {
        heading: "A double-edged shield",
        body:
          "This barrier is essential for protecting delicate neural tissue from toxins, hormonal fluctuations, and pathogens that circulate in the bloodstream. But it also blocks the majority of otherwise promising drugs from reaching the brain, which is one of the central challenges in developing treatments for brain tumors, neurodegenerative disease, and some infections.",
      },
      {
        heading: "When it breaks down",
        body:
          "In multiple sclerosis, immune cells breach the blood-brain barrier and attack the protective myelin sheath around neurons. After a stroke, barrier breakdown contributes to swelling and secondary damage in the surrounding tissue. Barrier integrity is an active area of research for both understanding disease and improving drug delivery to the brain.",
      },
    ],
  },
  {
    slug: "neuroplasticity",
    title: "Neuroplasticity",
    category: "Systems & Support",
    readTime: "5 min",
    summary:
      "The brain's capacity to reorganize its structure and function throughout life — the basis of learning, memory, and recovery after injury.",
    keyFacts: [
      "Synaptic strength can change within seconds; new synapses can form within hours to days.",
      "Plasticity is highest in early development but continues throughout adulthood.",
      "Rehabilitation therapies after stroke are built on deliberately driving plasticity.",
    ],
    sections: [
      {
        heading: "Synaptic plasticity",
        body:
          "At the level of individual connections, repeated, correlated activity between two neurons strengthens the synapse between them — often summarized as 'neurons that fire together, wire together.' This process, called long-term potentiation, is considered the cellular basis of learning and memory. The reverse process, long-term depression, weakens rarely used connections, allowing the brain to prune inefficient circuits.",
      },
      {
        heading: "Structural and functional reorganization",
        body:
          "Beyond individual synapses, the brain can reroute function across larger regions. If a specific area is damaged, neighboring or connected regions can sometimes take over parts of its role, particularly in younger brains, though adult brains retain meaningful capacity for this kind of reorganization as well.",
      },
      {
        heading: "Why it matters clinically",
        body:
          "Neuroplasticity underlies both the promise and the strategy behind stroke rehabilitation, where intensive, repetitive practice of an impaired movement can help remaining or nearby brain tissue take over lost function. It is also the target of therapies for conditions like tinnitus and some forms of chronic pain, where maladaptive plastic changes may worsen symptoms over time.",
      },
    ],
  },
  {
    slug: "autonomic-nervous-system",
    title: "The Autonomic Nervous System",
    category: "Systems & Support",
    readTime: "5 min",
    summary:
      "The autonomic nervous system runs the body's background processes — heart rate, digestion, breathing — without conscious control.",
    keyFacts: [
      "Divided into sympathetic ('fight or flight') and parasympathetic ('rest and digest') branches.",
      "Regulates heart rate, blood pressure, digestion, pupil size, and sweating.",
      "Dysfunction is a hallmark of several neurodegenerative conditions, including Parkinson's disease.",
    ],
    sections: [
      {
        heading: "Two branches, opposite jobs",
        body:
          "The sympathetic branch prepares the body for exertion or threat: it speeds the heart, redirects blood flow to muscles, dilates the pupils, and suppresses digestion. The parasympathetic branch does the opposite, slowing the heart and promoting digestion and recovery during rest. In a healthy nervous system, these two branches are in constant, dynamic balance depending on circumstances.",
      },
      {
        heading: "The vagus nerve",
        body:
          "The vagus nerve is the primary highway of the parasympathetic system, running from the brainstem down through the neck and chest to the abdomen, influencing heart rate, digestion, and even aspects of mood and inflammation regulation along the way.",
      },
      {
        heading: "When it fails",
        body:
          "Autonomic dysfunction can cause a drop in blood pressure on standing (orthostatic hypotension), abnormal sweating, and digestive problems. It is a frequent, often under-recognized feature of Parkinson's disease and some peripheral neuropathies, sometimes appearing years before the classic motor symptoms.",
      },
    ],
  },
];

module.exports = topics;
