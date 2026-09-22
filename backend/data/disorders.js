// Neurological disorders reference data
// Each: slug, name, category, severity tag, overview, whatHappens, symptoms[], causes[], riskFactors[], whenToSeek

const disorders = [
  {
    slug: "alzheimers-disease",
    name: "Alzheimer's Disease",
    category: "Neurodegenerative",
    overview:
      "Alzheimer's disease is a progressive neurodegenerative disorder and the most common cause of dementia, gradually eroding memory, reasoning, and eventually the ability to carry out daily tasks.",
    whatHappens:
      "Two abnormal protein structures accumulate in the brain: amyloid-beta plaques build up between neurons, and tau protein forms tangles inside them. Over years, this disrupts communication between neurons, triggers inflammation, and ultimately causes neurons to die. The hippocampus and surrounding memory-related structures are typically affected earliest, which is why short-term memory loss is usually the first sign, followed by a spreading decline in language, spatial orientation, judgment, and personality as damage progresses to wider areas of the cortex.",
    symptoms: [
      "Increasing difficulty remembering recent conversations or events",
      "Repeating questions or stories",
      "Getting lost in familiar places",
      "Difficulty finding words or following conversations",
      "Poor judgment or decision-making",
      "Withdrawal from work or social activities",
      "Mood and personality changes",
    ],
    causes: [
      "A combination of amyloid and tau protein accumulation with progressive neuronal loss",
      "Genetic risk factors, including the APOE-e4 gene variant",
      "Age is the single strongest risk factor",
    ],
    riskFactors: [
      "Age over 65",
      "Family history of Alzheimer's or dementia",
      "Cardiovascular risk factors (high blood pressure, diabetes, high cholesterol)",
      "Head injury history",
      "Low cognitive or social engagement",
    ],
    whenToSeek:
      "See a doctor if memory lapses start interfering with daily life — missed bills, getting lost on familiar routes, or repeated questions noticed by family — rather than the ordinary forgetfulness of aging.",
  },
  {
    slug: "parkinsons-disease",
    name: "Parkinson's Disease",
    category: "Neurodegenerative",
    overview:
      "Parkinson's disease is a progressive movement disorder caused by the loss of dopamine-producing neurons deep in the brain, leading to tremor, stiffness, and slowed movement.",
    whatHappens:
      "Neurons in the substantia nigra, a small structure within the basal ganglia, produce dopamine that normally keeps the brain's movement-control circuits balanced. In Parkinson's disease, these neurons progressively die off — often related to the abnormal buildup of a protein called alpha-synuclein into clumps known as Lewy bodies. As dopamine levels fall, the circuits that normally allow smooth, well-timed movement become imbalanced, producing rigidity, slowness, and tremor. Because dopamine also plays a role in mood and non-motor systems, many patients also experience non-movement symptoms.",
    symptoms: [
      "Resting tremor, often starting in one hand",
      "Muscle rigidity and stiffness",
      "Slowness of movement (bradykinesia)",
      "Shuffling gait and reduced arm swing",
      "Stooped posture and balance problems",
      "Soft or slurred speech",
      "Loss of sense of smell",
      "Sleep disturbances and mood changes",
    ],
    causes: [
      "Progressive loss of dopamine-producing neurons in the substantia nigra",
      "Abnormal accumulation of alpha-synuclein protein (Lewy bodies)",
      "A small proportion of cases have identified genetic mutations",
    ],
    riskFactors: [
      "Age over 60",
      "Male sex (somewhat higher incidence)",
      "Family history of Parkinson's disease",
      "Certain pesticide or toxin exposures",
    ],
    whenToSeek:
      "See a doctor for evaluation if you notice a persistent tremor at rest, new stiffness, or a change in handwriting or gait — early diagnosis allows treatment to begin while it can be most effective.",
  },
  {
    slug: "epilepsy",
    name: "Epilepsy",
    category: "Seizure Disorders",
    overview:
      "Epilepsy is a tendency toward recurrent, unprovoked seizures caused by bursts of abnormal, excessive electrical activity in the brain.",
    whatHappens:
      "Normally, neurons fire in a coordinated, regulated pattern balanced by excitatory and inhibitory signaling. In epilepsy, a group of neurons — sometimes localized to one region (focal seizures), sometimes involving the whole brain at once (generalized seizures) — fires in an abnormal, synchronized burst. This electrical storm temporarily disrupts normal brain function, producing effects that range from a brief lapse in awareness to full-body convulsions, depending on which brain regions are involved and how the abnormal activity spreads.",
    symptoms: [
      "Brief staring spells with loss of awareness (absence seizures)",
      "Uncontrolled jerking movements of arms and legs",
      "Sudden stiffening of the body",
      "Loss of consciousness or falling",
      "Temporary confusion after a seizure",
      "Unusual sensations, smells, or emotions preceding a seizure (aura)",
    ],
    causes: [
      "Structural brain abnormalities from stroke, tumor, or head injury",
      "Genetic and inherited forms",
      "Brain infections, such as meningitis or encephalitis",
      "In many cases, no clear cause is ever identified",
    ],
    riskFactors: [
      "Family history of epilepsy",
      "History of head trauma",
      "Stroke or other brain injury",
      "Brain infections",
      "Developmental disorders present from birth",
    ],
    whenToSeek:
      "Seek emergency care for a first-time seizure, a seizure lasting more than five minutes, or repeated seizures without recovery in between — these require immediate medical attention.",
  },
  {
    slug: "multiple-sclerosis",
    name: "Multiple Sclerosis",
    category: "Autoimmune",
    overview:
      "Multiple sclerosis (MS) is an autoimmune disease in which the immune system attacks the protective myelin sheath around nerve fibers in the brain and spinal cord.",
    whatHappens:
      "Myelin is a fatty insulating layer that wraps around axons and allows electrical signals to travel quickly and efficiently along them. In MS, the immune system mistakenly attacks myelin, causing inflammation and scarring (sclerosis) at multiple sites in the central nervous system. Without intact myelin, nerve signals slow down or fail to transmit properly, producing a wide and often unpredictable range of neurological symptoms that can flare, partially recover, and flare again over years — a pattern known as relapsing-remitting disease in most patients, which can evolve into a more steadily progressive form over time.",
    symptoms: [
      "Numbness or tingling in the limbs or face",
      "Vision problems, including blurred or double vision",
      "Muscle weakness or spasticity",
      "Fatigue disproportionate to activity",
      "Balance and coordination problems",
      "Bladder and bowel dysfunction",
      "Cognitive changes, including slowed processing or memory difficulty",
    ],
    causes: [
      "An autoimmune attack on myelin, likely triggered by a combination of genetic susceptibility and environmental factors",
      "Possible links to prior viral infection, including Epstein-Barr virus",
      "Low vitamin D and reduced sun exposure have been associated with increased risk",
    ],
    riskFactors: [
      "Age between 20 and 40 at onset",
      "Female sex (roughly two to three times more common)",
      "Family history of MS",
      "Living farther from the equator in early life",
      "Smoking",
    ],
    whenToSeek:
      "See a doctor promptly for new or unexplained neurological symptoms — especially vision loss in one eye, sudden numbness, or weakness — that last more than a day or two.",
  },
  {
    slug: "migraine",
    name: "Migraine",
    category: "Headache Disorders",
    overview:
      "Migraine is a neurological disorder that causes recurrent, often severe headaches, frequently accompanied by nausea, sensory sensitivity, and, in some people, visual or sensory 'aura' symptoms.",
    whatHappens:
      "Migraine involves abnormal activity in brainstem pathways that regulate pain signaling, along with a wave of altered electrical and chemical activity that spreads across the surface of the brain, known as cortical spreading depression — believed to underlie the aura symptoms some people experience. This activity activates the trigeminal nerve system, which supplies sensation to the head and face, releasing inflammatory molecules around blood vessels in the brain's covering and producing the throbbing pain characteristic of a migraine attack.",
    symptoms: [
      "Throbbing or pulsing pain, often on one side of the head",
      "Nausea or vomiting",
      "Sensitivity to light and sound",
      "Visual disturbances such as flashing lights or zigzag lines (aura)",
      "Tingling or numbness in the face or hands (in some cases)",
      "Attacks lasting from several hours to a few days",
    ],
    causes: [
      "A combination of genetic predisposition and nervous system sensitivity",
      "Triggered by factors such as stress, hormonal changes, certain foods, sleep disruption, or sensory stimuli",
    ],
    riskFactors: [
      "Family history of migraine",
      "Female sex (roughly three times more common)",
      "Age under 40 at onset",
      "Hormonal fluctuations, including menstruation",
    ],
    whenToSeek:
      "Seek urgent evaluation for a headache described as 'the worst of your life,' one that comes on suddenly and severely, or one accompanied by fever, stiff neck, confusion, or weakness — these can signal a more serious underlying cause.",
  },
  {
    slug: "stroke",
    name: "Stroke",
    category: "Cerebrovascular",
    overview:
      "A stroke occurs when blood flow to part of the brain is interrupted, depriving neurons of oxygen and glucose and causing them to die within minutes if flow is not restored.",
    whatHappens:
      "Most strokes (ischemic strokes) occur when a blood clot blocks an artery supplying the brain, often due to underlying atherosclerosis or a clot traveling from the heart. Without blood flow, neurons in the affected area rapidly run out of energy and begin to die, with damage spreading outward from the core over the following hours if circulation is not restored. A smaller proportion of strokes (hemorrhagic strokes) occur when a blood vessel ruptures, causing bleeding into or around brain tissue, which damages neurons directly and raises pressure inside the skull. Because different brain regions control different functions, the specific symptoms of a stroke depend entirely on which artery and brain territory is affected.",
    symptoms: [
      "Sudden numbness or weakness, especially on one side of the body",
      "Sudden confusion or trouble speaking or understanding speech",
      "Sudden vision loss or double vision",
      "Sudden severe headache with no known cause",
      "Sudden trouble walking, dizziness, or loss of balance and coordination",
      "Facial drooping, often noticeable on one side",
    ],
    causes: [
      "Blood clot blocking a brain artery (ischemic stroke)",
      "Ruptured blood vessel causing bleeding in the brain (hemorrhagic stroke)",
      "Atherosclerosis, atrial fibrillation, and other cardiovascular disease",
    ],
    riskFactors: [
      "High blood pressure",
      "Atrial fibrillation and other heart conditions",
      "Diabetes",
      "Smoking",
      "High cholesterol",
      "Prior stroke or transient ischemic attack",
    ],
    whenToSeek:
      "Stroke is a medical emergency. Call emergency services immediately if you notice sudden facial drooping, arm weakness, or speech difficulty — every minute of delay increases the risk of permanent brain damage. Remember the acronym FAST: Face drooping, Arm weakness, Speech difficulty, Time to call for help.",
  },
  {
    slug: "als",
    name: "ALS (Amyotrophic Lateral Sclerosis)",
    category: "Neurodegenerative",
    overview:
      "ALS is a progressive disease that attacks the motor neurons controlling voluntary muscle movement, gradually leading to muscle weakness, paralysis, and eventually loss of the ability to breathe unassisted.",
    whatHappens:
      "ALS causes the progressive degeneration of both upper motor neurons in the brain and lower motor neurons in the spinal cord and brainstem that carry signals to muscles. As these neurons die, the muscles they control lose their nerve supply and gradually weaken and waste away, while cognition and the senses are typically preserved in most cases. The disease usually begins focally — in one limb or in speech and swallowing muscles — and spreads progressively to involve most voluntary muscles, including those needed for breathing.",
    symptoms: [
      "Muscle weakness in a hand, arm, leg, or in speech, starting focally",
      "Muscle twitching (fasciculations) and cramping",
      "Slurred speech or difficulty swallowing",
      "Progressive muscle wasting",
      "Increasing difficulty with everyday tasks like buttoning a shirt or climbing stairs",
      "Eventually, difficulty breathing as respiratory muscles are affected",
    ],
    causes: [
      "In most cases, the specific trigger is unknown (sporadic ALS)",
      "About 5–10% of cases are inherited, linked to specific gene mutations such as SOD1 and C9orf72",
    ],
    riskFactors: [
      "Age between 40 and 70 at onset",
      "Family history of ALS or frontotemporal dementia",
      "Military veterans have a modestly increased incidence for reasons not fully understood",
    ],
    whenToSeek:
      "See a neurologist for evaluation of unexplained, progressive muscle weakness or twitching that persists over weeks, particularly if it is localized and worsening rather than fluctuating.",
  },
  {
    slug: "huntingtons-disease",
    name: "Huntington's Disease",
    category: "Neurodegenerative",
    overview:
      "Huntington's disease is an inherited disorder that causes the progressive breakdown of neurons in the basal ganglia, producing involuntary movements, cognitive decline, and psychiatric symptoms.",
    whatHappens:
      "Huntington's disease is caused by an inherited expansion of a repeated DNA sequence in the huntingtin gene, which produces an abnormal, toxic version of the huntingtin protein. This misfolded protein accumulates and progressively damages neurons, especially within the basal ganglia structures that normally help suppress unwanted movement. As these regulatory neurons die, movement escapes its normal restraint, producing the involuntary, dance-like movements called chorea, alongside progressive difficulties with thinking and emotional regulation as the disease spreads to affect the cortex as well.",
    symptoms: [
      "Involuntary, jerky, dance-like movements (chorea)",
      "Difficulty with coordination and balance",
      "Slurred speech and difficulty swallowing",
      "Cognitive decline, including impaired planning and judgment",
      "Personality changes, irritability, or depression",
      "Progressive difficulty with voluntary movement in later stages",
    ],
    causes: [
      "An inherited expansion of a CAG repeat sequence in the huntingtin gene",
      "Passed from parent to child in an autosomal dominant pattern — each child of an affected parent has a 50% chance of inheriting it",
    ],
    riskFactors: [
      "A parent with Huntington's disease",
      "Symptoms typically emerge between ages 30 and 50, though juvenile forms exist",
    ],
    whenToSeek:
      "Genetic counseling is recommended for anyone with a family history of Huntington's disease, and a neurologist should evaluate any new, unexplained involuntary movements or a decline in coordination and cognition.",
  },
  {
    slug: "peripheral-neuropathy",
    name: "Peripheral Neuropathy",
    category: "Nerve Disorders",
    overview:
      "Peripheral neuropathy refers to damage to the peripheral nerves — those outside the brain and spinal cord — most often causing numbness, tingling, and pain in the hands and feet.",
    whatHappens:
      "Peripheral nerves carry sensory and motor signals between the central nervous system and the rest of the body. Damage can affect the nerve's insulating myelin sheath, the axon itself, or both, disrupting the accurate transmission of sensory information and motor commands. Because the longest nerve fibers are the most metabolically vulnerable, symptoms classically begin in the feet and hands and can spread upward over time — a pattern often described as a 'stocking-glove' distribution.",
    symptoms: [
      "Numbness or reduced sensation, often starting in the feet",
      "Tingling or a 'pins and needles' sensation",
      "Burning or sharp, shooting pain",
      "Muscle weakness in affected limbs",
      "Loss of coordination or balance",
      "Increased sensitivity to touch",
    ],
    causes: [
      "Diabetes is the most common cause worldwide",
      "Chronic alcohol use",
      "Certain chemotherapy drugs and other medications",
      "Vitamin deficiencies, particularly B12",
      "Autoimmune diseases and some infections",
    ],
    riskFactors: [
      "Diabetes, especially if poorly controlled",
      "Heavy alcohol use",
      "Certain chemotherapy treatments",
      "Family history of neuropathy",
      "Age over 65",
    ],
    whenToSeek:
      "See a doctor if numbness, tingling, or pain in the hands or feet is new, worsening, or interfering with daily activities — especially if you have diabetes, since early management can slow progression.",
  },
  {
    slug: "bells-palsy",
    name: "Bell's Palsy",
    category: "Nerve Disorders",
    overview:
      "Bell's palsy is a sudden, usually temporary weakness or paralysis of the muscles on one side of the face, caused by dysfunction of the facial nerve.",
    whatHappens:
      "The facial nerve controls the muscles of facial expression on each side of the face. In Bell's palsy, this nerve becomes inflamed and swollen — most often thought to follow reactivation of a dormant herpes virus — as it passes through a narrow bony canal in the skull. The swelling compresses the nerve within this tight space, disrupting its ability to transmit signals and causing sudden, one-sided facial weakness that typically peaks within 48 to 72 hours.",
    symptoms: [
      "Sudden weakness or drooping on one side of the face",
      "Difficulty closing one eye",
      "Drooling from one side of the mouth",
      "Loss of taste on the front two-thirds of the tongue",
      "Increased sensitivity to sound in one ear",
      "Pain around the jaw or behind the ear on the affected side",
    ],
    causes: [
      "Believed to most often follow reactivation of herpes simplex virus within the facial nerve",
      "Can also follow other viral infections",
    ],
    riskFactors: [
      "Pregnancy, particularly the third trimester",
      "Diabetes",
      "Upper respiratory infections",
      "Family history of Bell's palsy",
    ],
    whenToSeek:
      "Seek prompt medical evaluation for any sudden facial drooping — a doctor needs to rule out stroke first, since the two can look similar early on, and early treatment for Bell's palsy improves the chances of full recovery.",
  },
  {
    slug: "trigeminal-neuralgia",
    name: "Trigeminal Neuralgia",
    category: "Nerve Disorders",
    overview:
      "Trigeminal neuralgia causes sudden, severe, electric-shock-like facial pain along the distribution of the trigeminal nerve, often triggered by ordinary activities like chewing or touching the face.",
    whatHappens:
      "The trigeminal nerve carries sensation from the face to the brain. In most cases, trigeminal neuralgia occurs when a blood vessel compresses the nerve near where it exits the brainstem, gradually wearing away its protective myelin coating. This exposes the nerve fibers, which can then misfire and generate intense pain signals in response to even light stimulation of the face, rather than only in response to a genuinely painful stimulus.",
    symptoms: [
      "Sudden episodes of severe, stabbing facial pain, often described as electric shock-like",
      "Pain triggered by touching the face, chewing, speaking, or brushing teeth",
      "Pain typically confined to one side of the face",
      "Episodes lasting from seconds to a couple of minutes, sometimes occurring in clusters",
      "Periods of remission between flare-ups that can last months",
    ],
    causes: [
      "Compression of the trigeminal nerve by a nearby blood vessel",
      "Less commonly, compression from a tumor or nerve damage from multiple sclerosis",
    ],
    riskFactors: [
      "Age over 50",
      "Female sex (somewhat more common)",
      "Multiple sclerosis",
      "High blood pressure",
    ],
    whenToSeek:
      "See a doctor or neurologist if you experience sudden, severe facial pain episodes — effective treatments exist, and the specific pattern of pain helps distinguish this condition from dental problems or other headache disorders.",
  },
  {
    slug: "myasthenia-gravis",
    name: "Myasthenia Gravis",
    category: "Autoimmune",
    overview:
      "Myasthenia gravis is an autoimmune disorder that disrupts communication between nerves and muscles, causing fluctuating muscle weakness that worsens with activity and improves with rest.",
    whatHappens:
      "At the neuromuscular junction — the specialized synapse where a motor neuron meets a muscle fiber — the neurotransmitter acetylcholine normally binds to receptors on the muscle to trigger contraction. In myasthenia gravis, the immune system produces antibodies that attack and block or destroy these acetylcholine receptors. With fewer functioning receptors available, muscle fibers respond less reliably to nerve signals, especially with repeated or sustained use, producing the characteristic pattern of weakness that worsens through the day or with exertion and improves with rest.",
    symptoms: [
      "Drooping eyelids (ptosis)",
      "Double vision",
      "Weakness that worsens with repeated use and improves with rest",
      "Difficulty chewing or swallowing",
      "Slurred speech",
      "Weakness in the arms, legs, or neck",
      "In severe cases, difficulty breathing (myasthenic crisis)",
    ],
    causes: [
      "Autoimmune production of antibodies against acetylcholine receptors at the neuromuscular junction",
      "Associated with abnormalities of the thymus gland in many patients",
    ],
    riskFactors: [
      "Women under 40 and men over 60 are most commonly affected",
      "Other autoimmune conditions",
      "Thymus gland abnormalities, including thymoma",
    ],
    whenToSeek:
      "See a doctor for evaluation of new drooping eyelids, double vision, or muscle weakness that fluctuates or worsens with activity. Seek emergency care immediately if breathing or swallowing becomes difficult.",
  },
];

module.exports = disorders;
