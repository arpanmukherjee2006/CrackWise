// Comprehensive NEET Physics Data
const NEET_PHYSICS_DATA = {
    // MECHANICS CHAPTERS

    "modern-physics": {
        "title": "Modern Physics",
        "weightage": "10–12%",
        "introduction": "Modern Physics deals with the fundamental theories that revolutionized our understanding of the atom and the universe, primarily developed in the early 20th century. It encompasses Quantum Mechanics, which explains the behavior of particles at the atomic and subatomic level, and Relativity. For NEET, this chapter is extremely important as it covers photoelectric effect, atomic models, nuclear physics, and radioactivity, with numerous questions asked every year.",

        "topics": [
            {
                "name": "Dual Nature of Radiation and Matter",
                "description": "This topic establishes the wave-particle duality of light and matter, a cornerstone of quantum mechanics.",
                "subtopics": [
                    {
                        "name": "Photoelectric Effect",
                        "explanation": "The phenomenon where electrons are emitted from a metal surface when light of a certain frequency (above threshold frequency) is incident on it. It provided evidence for the particle nature of light (photons)."
                    },
                    {
                        "name": "Einstein's Photoelectric Equation",
                        "explanation": "K_max = hν - φ, where K_max is the maximum kinetic energy of the emitted photoelectron, hν is the energy of the photon, and φ is the work function of the metal."
                    },
                    {
                        "name": "de Broglie Wavelength",
                        "explanation": "λ = h / p = h / (m v). It proposes that all moving particles have an associated wave character. This wavelength is significant for microscopic particles like electrons."
                    }
                ]
            },
            {
                "name": "Atoms",
                "description": "This section covers the historical development of atomic models, leading to the modern understanding of atomic structure.",
                "subtopics": [
                    {
                        "name": "Rutherford's Alpha-Scattering Experiment",
                        "explanation": "Led to the discovery of the nucleus. Most alpha particles passed through, but a few were deflected at large angles, indicating a small, dense, positively charged nucleus."
                    },
                    {
                        "name": "Bohr's Model of the Hydrogen Atom",
                        "explanation": "Postulates: Electrons revolve in stable, discrete orbits without radiating energy. Angular momentum is quantized: m v r = n h/(2π). The model successfully explains the hydrogen spectrum."
                    },
                    {
                        "name": "Energy Levels and Hydrogen Spectrum",
                        "explanation": "The energy of an electron in the n-th orbit is E_n = - (13.6 / n²) eV. Spectral lines are produced when an electron jumps between these discrete energy levels."
                    }
                ]
            },
            {
                "name": "Nuclei",
                "description": "This topic deals with the structure, properties, and behavior of the atomic nucleus.",
                "subtopics": [
                    {
                        "name": "Composition and Size of Nucleus",
                        "explanation": "The nucleus contains protons and neutrons (collectively nucleons). Its size is of the order of 10⁻¹⁵ m, given by R = R₀ A^(1/3), where A is the mass number."
                    },
                    {
                        "name": "Nuclear Binding Energy",
                        "explanation": "The energy equivalent to the mass defect (Δm) of a nucleus. It is the energy required to break the nucleus into its constituent nucleons. ΔE = Δm c²."
                    },
                    {
                        "name": "Nuclear Forces",
                        "explanation": "The strong, short-range forces that hold the nucleons together in the nucleus, overcoming the electrostatic repulsion between protons."
                    }
                ]
            },
            {
                "name": "Radioactivity",
                "description": "The spontaneous disintegration of an unstable atomic nucleus by emitting radiation.",
                "subtopics": [
                    {
                        "name": "Alpha (α), Beta (β), and Gamma (γ) Decay",
                        "explanation": "α-decay: Emission of a He nucleus (²He⁴). β-decay: Transformation of a neutron into a proton (β⁻) or a proton into a neutron (β⁺), emitting an electron or positron. γ-decay: Emission of electromagnetic radiation from an excited nucleus."
                    },
                    {
                        "name": "Laws of Radioactive Decay",
                        "explanation": "The decay rate (dN/dt) is proportional to the number of undecayed atoms (N): dN/dt = -λN. The solution is N = N₀ e^(-λt), where λ is the decay constant."
                    },
                    {
                        "name": "Half-Life (T₁/₂) and Mean Life (τ)",
                        "explanation": "Half-Life: Time for half the radioactive atoms to decay. T₁/₂ = (ln 2)/λ = 0.693/λ. Mean Life: Average lifetime of a radioactive atom. τ = 1/λ."
                    }
                ]
            },
            {
                "name": "Semiconductor Electronics",
                "description": "The study of materials with electrical conductivity between a conductor and an insulator, forming the basis of modern electronics.",
                "subtopics": [
                    {
                        "name": "Intrinsic and Extrinsic Semiconductors",
                        "explanation": "Intrinsic: Pure semiconductors (e.g., Si, Ge). Extrinsic: Doped semiconductors (n-type: majority carriers are electrons; p-type: majority carriers are holes)."
                    },
                    {
                        "name": "p-n Junction Diode",
                        "explanation": "Formed by joining p-type and n-type semiconductors. It acts as a rectifier, allowing current to flow easily in one direction (forward bias) and blocking it in the other (reverse bias)."
                    }
                ]
            }
        ],

        "formulas": {
            "Photoelectric Effect": [
                {
                    "name": "Einstein's Equation",
                    "expression": "K_max = hν - φ",
                    "description": "The maximum kinetic energy of a photoelectron equals the photon energy minus the work function."
                },
                {
                    "name": "Cut-off Potential (Stopping Potential)",
                    "expression": "e V₀ = K_max = hν - φ",
                    "description": "The stopping potential V₀ measures the maximum kinetic energy of photoelectrons."
                }
            ],
            "Bohr's Model": [
                {
                    "name": "Energy of Electron",
                    "expression": "E_n = - (13.6 Z²) / n² eV",
                    "description": "Energy of an electron in the n-th orbit for a hydrogen-like atom of atomic number Z."
                },
                {
                    "name": "Radius of Orbit",
                    "expression": "r_n = (0.529 n²) / Z Å",
                    "description": "Radius of the n-th Bohr orbit for a hydrogen-like atom."
                }
            ],
            "Radioactivity": [
                {
                    "name": "Decay Law",
                    "expression": "N = N₀ e^(-λt)",
                    "description": "The number of undecayed nuclei decreases exponentially with time."
                },
                {
                    "name": "Half-Life",
                    "expression": "T₁/₂ = ln(2) / λ ≈ 0.693 / λ",
                    "description": "The time taken for half the radioactive nuclei in a sample to decay."
                }
            ],
            "de Broglie Wavelength": [
                {
                    "name": "For a particle",
                    "expression": "λ = h / p = h / (m v)",
                    "description": "The wavelength associated with a moving particle of momentum p."
                }
            ]
        },

        "problems": [
            {
                "problem": "The work function of a metal is 2.0 eV. Calculate the maximum kinetic energy of photoelectrons emitted when light of wavelength 400 nm is incident on it. (h = 4.14 × 10⁻¹⁵ eV s, c = 3 × 10⁸ m/s)",
                "difficulty": "easy",
                "solution": {
                    "given": ["Work function, φ = 2.0 eV", "Wavelength, λ = 400 nm = 400 × 10⁻⁹ m", "h = 4.14 × 10⁻¹⁵ eV s", "c = 3 × 10⁸ m/s"],
                    "find": "Maximum kinetic energy, K_max",
                    "formula": "K_max = hν - φ, where ν = c/λ",
                    "steps": [
                        {
                            "step": "Calculate frequency (ν) or directly find energy of photon (hν)",
                            "work": "hν = h c / λ = (4.14e-15 * 3e8) / (400e-9) = (1242 eV nm) / 400 nm = 3.105 eV",
                            "result": "K_max = hν - φ = 3.105 - 2.0 = 1.105 eV"
                        }
                    ],
                    "answer": "1.105 eV",
                    "concept": "Photoelectric Effect: Einstein's photoelectric equation"
                }
            },
            {
                "problem": "Calculate the de Broglie wavelength associated with an electron accelerated through a potential difference of 100 V. (Mass of electron = 9.1 × 10⁻³¹ kg, h = 6.63 × 10⁻³⁴ J s, charge of electron = 1.6 × 10⁻¹⁹ C)",
                "difficulty": "easy",
                "solution": {
                    "given": ["Potential difference, V = 100 V", "m_e = 9.1e-31 kg", "h = 6.63e-34 J s", "e = 1.6e-19 C"],
                    "find": "de Broglie wavelength, λ",
                    "formula": "For an electron accelerated by potential V, its kinetic energy K = e V. Momentum p = √(2 m K). λ = h / p.",
                    "steps": [
                        {
                            "step": "Find momentum p",
                            "work": "K = e V = 1.6e-19 * 100 = 1.6e-17 J. p = √(2 * 9.1e-31 * 1.6e-17) = √(2.912e-47) ≈ 1.706e-23 kg m/s",
                            "result": "λ = h / p = 6.63e-34 / 1.706e-23 ≈ 1.227 Å (or 1.227 × 10⁻¹⁰ m)"
                        }
                    ],
                    "answer": "1.227 Å",
                    "concept": "Dual Nature: de Broglie wavelength for an electron"
                }
            },
            {
                "problem": "The half-life of a radioactive substance is 20 days. What is the time taken for the substance to decay to 1/8th of its original amount?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Half-life, T₁/₂ = 20 days", "Final amount, N = N₀/8"],
                    "find": "Time taken, t",
                    "formula": "Use the relation between the number of half-lives and the fraction remaining. (1/2)^n = N/N₀.",
                    "steps": [
                        {
                            "step": "Find the number of half-lives (n)",
                            "work": "(1/2)^n = 1/8 = (1/2)^3 ⇒ n = 3",
                            "result": "Time taken, t = n × T₁/₂ = 3 × 20 = 60 days"
                        }
                    ],
                    "answer": "60 days",
                    "concept": "Radioactivity: calculating time using half-life"
                }
            },
            {
                "problem": "The energy of an electron in the ground state of hydrogen atom is -13.6 eV. What is its kinetic and potential energy in the same state?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Total energy in ground state, E = -13.6 eV", "For hydrogen atom, n=1"],
                    "find": "Kinetic energy (K) and Potential energy (U)",
                    "formula": "For Bohr's model, in any orbit: K = -E and U = 2E.",
                    "steps": [
                        {
                            "step": "Apply the relations",
                            "work": "Kinetic Energy, K = -E = -(-13.6) = +13.6 eV",
                            "result": "Potential Energy, U = 2E = 2 × (-13.6) = -27.2 eV"
                        }
                    ],
                    "answer": "Kinetic Energy = 13.6 eV, Potential Energy = -27.2 eV",
                    "concept": "Bohr's Model: energy relations in an orbit"
                }
            },
            {
                "problem": "A radioactive isotope has a half-life of 5 years. After how many years will its activity reduce to 3.125% of its original activity?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Half-life, T₁/₂ = 5 years", "Activity reduced to 3.125% = 3.125/100 = 1/32 of original"],
                    "find": "Time, t",
                    "formula": "Activity is proportional to the number of atoms (A ∝ N). Find n such that (1/2)^n = 1/32.",
                    "steps": [
                        {
                            "step": "Find number of half-lives, n",
                            "work": "(1/2)^n = 1/32 ⇒ (1/2)^n = (1/2)^5 ⇒ n = 5",
                            "result": "t = n × T₁/₂ = 5 × 5 = 25 years"
                        }
                    ],
                    "answer": "25 years",
                    "concept": "Radioactivity: decay of activity with time"
                }
            },
            {
                "problem": "The nucleus of an atom is ²³⁸U₉₂. Find the number of protons and neutrons in its nucleus.",
                "difficulty": "easy",
                "solution": {
                    "given": ["Nucleus: ²³⁸U₉₂", "The subscript is the atomic number Z, the superscript is the mass number A."],
                    "find": "Number of protons and neutrons",
                    "formula": "Number of protons = Z. Number of neutrons = A - Z.",
                    "steps": [
                        {
                            "step": "Identify Z and A",
                            "work": "Z = 92 (atomic number), A = 238 (mass number)",
                            "result": "Protons = 92, Neutrons = 238 - 92 = 146"
                        }
                    ],
                    "answer": "Protons = 92, Neutrons = 146",
                    "concept": "Nuclei: composition (protons and neutrons)"
                }
            },
            {
                "problem": "The threshold frequency for a metal is 6 × 10¹⁴ Hz. Calculate its work function. (h = 6.63 × 10⁻³⁴ J s)",
                "difficulty": "easy",
                "solution": {
                    "given": ["Threshold frequency, ν₀ = 6 × 10¹⁴ Hz", "h = 6.63 × 10⁻³⁴ J s"],
                    "find": "Work function, φ",
                    "formula": "Work function φ = h ν₀",
                    "steps": [
                        {
                            "step": "Calculate φ",
                            "work": "φ = 6.63e-34 × 6e14 = 3.978 × 10⁻¹⁹ J",
                            "result": "Convert to eV: 1 eV = 1.6e-19 J, so φ = 3.978e-19 / 1.6e-19 ≈ 2.486 eV"
                        }
                    ],
                    "answer": "2.486 eV",
                    "concept": "Photoelectric Effect: work function from threshold frequency"
                }
            },
            {
                "problem": "An electron in a hydrogen atom makes a transition from n=4 to n=2 energy level. Calculate the wavelength of the emitted photon. (R = 1.097 × 10⁷ m⁻¹)",
                "difficulty": "medium",
                "solution": {
                    "given": ["Transition: n=4 to n=2", "Rydberg constant, R = 1.097 × 10⁷ m⁻¹"],
                    "find": "Wavelength, λ",
                    "formula": "Using Rydberg formula: 1/λ = R (1/n₁² - 1/n₂²), where n₁ < n₂. Here, n₁=2, n₂=4.",
                    "steps": [
                        {
                            "step": "Apply Rydberg formula",
                            "work": "1/λ = 1.097e7 × (1/2² - 1/4²) = 1.097e7 × (1/4 - 1/16) = 1.097e7 × (3/16)",
                            "result": "1/λ = 2.056875e6 m⁻¹ ⇒ λ = 1 / 2.056875e6 ≈ 4.86 × 10⁻⁷ m = 486 nm (Visible region, Balmer series)"
                        }
                    ],
                    "answer": "486 nm",
                    "concept": "Bohr's Model: wavelength of emitted spectral line"
                }
            },
            {
                "problem": "The binding energy per nucleon for ⁵⁶Fe is 8.8 MeV. Calculate the total binding energy of the ⁵⁶Fe nucleus.",
                "difficulty": "easy",
                "solution": {
                    "given": ["Binding energy per nucleon = 8.8 MeV/nucleon", "Nucleus: ⁵⁶Fe. Mass number A = 56"],
                    "find": "Total binding energy, B.E.",
                    "formula": "Total B.E. = (B.E. per nucleon) × (Number of nucleons A)",
                    "steps": [
                        {
                            "step": "Calculate total binding energy",
                            "work": "B.E. = 8.8 MeV/nucleon × 56 nucleons",
                            "result": "492.8 MeV"
                        }
                    ],
                    "answer": "492.8 MeV",
                    "concept": "Nuclear Physics: total binding energy"
                }
            },
            {
                "problem": "A radioactive sample has an initial activity of 800 disintegrations per minute. Its activity falls to 100 disintegrations per minute in 30 minutes. Calculate its half-life.",
                "difficulty": "medium",
                "solution": {
                    "given": ["Initial activity, A₀ = 800 dpm", "Final activity, A = 100 dpm", "Time, t = 30 min"],
                    "find": "Half-life, T₁/₂",
                    "formula": "Activity follows the same decay law: A = A₀ e^(-λt). Find λ, then T₁/₂ = ln(2)/λ.",
                    "steps": [
                        {
                            "step": "Find the decay constant λ first",
                            "work": "A = A₀ e^(-λt) ⇒ 100 = 800 e^(-λ×30) ⇒ 1/8 = e^(-30λ) ⇒ ln(1/8) = -30λ ⇒ -ln(8) = -30λ ⇒ λ = ln(8)/30",
                            "result": "ln(8) = ln(2³)=3ln(2)≈3*0.693=2.079. So λ ≈ 2.079/30 ≈ 0.0693 per min. T₁/₂ = 0.693/λ = 0.693/0.0693 ≈ 10 minutes."
                        }
                    ],
                    "answer": "10 minutes",
                    "concept": "Radioactivity: calculating half-life from activity change"
                }
            },
            {
                "problem": "A photon of wavelength 300 nm is incident on a metal with a work function of 2.5 eV. Will photoelectric emission occur? Justify your answer. (h = 4.14 × 10⁻¹⁵ eV s, c = 3 × 10⁸ m/s)",
                "difficulty": "easy",
                "solution": {
                    "given": ["Wavelength, λ = 300 nm = 300 × 10⁻⁹ m", "Work function, φ = 2.5 eV", "h = 4.14 × 10⁻¹⁵ eV s", "c = 3 × 10⁸ m/s"],
                    "find": "Whether photoelectric emission will occur",
                    "formula": "Emission occurs if photon energy hν > work function φ. Calculate hν and compare.",
                    "steps": [
                        {
                            "step": "Calculate photon energy hν = h c / λ",
                            "work": "hν = (4.14e-15 * 3e8) / (300e-9) = (1242 eV nm) / 300 nm = 4.14 eV",
                            "result": "Since 4.14 eV > 2.5 eV, photoelectric emission will occur."
                        }
                    ],
                    "answer": "Yes, because photon energy (4.14 eV) is greater than the work function (2.5 eV).",
                    "concept": "Photoelectric Effect: threshold condition for emission"
                }
            },
            {
                "problem": "Calculate the frequency of the photon emitted when an electron in a hydrogen atom jumps from the second excited state to the ground state. (R = 1.097 × 10⁷ m⁻¹, c = 3 × 10⁸ m/s)",
                "difficulty": "medium",
                "solution": {
                    "given": ["Transition: n=3 (second excited) to n=1 (ground state)", "R = 1.097 × 10⁷ m⁻¹", "c = 3 × 10⁸ m/s"],
                    "find": "Frequency, ν",
                    "formula": "First find wavelength using Rydberg formula: 1/λ = R (1/n₁² - 1/n₂²), then ν = c/λ.",
                    "steps": [
                        {
                            "step": "Apply Rydberg formula with n₁=1, n₂=3",
                            "work": "1/λ = 1.097e7 × (1/1² - 1/3²) = 1.097e7 × (1 - 1/9) = 1.097e7 × (8/9) ≈ 9.751e6 m⁻¹",
                            "result": "λ ≈ 1/9.751e6 ≈ 1.025e-7 m. Then ν = c/λ = 3e8 / 1.025e-7 ≈ 2.927 × 10¹⁵ Hz"
                        }
                    ],
                    "answer": "2.927 × 10¹⁵ Hz",
                    "concept": "Bohr's Model: frequency of emitted photon"
                }
            },
            {
                "problem": "The half-life of a radioactive element is 10 hours. What fraction of the original number of atoms will remain after 30 hours?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Half-life, T₁/₂ = 10 hours", "Time elapsed, t = 30 hours"],
                    "find": "Fraction of atoms remaining, N/N₀",
                    "formula": "Number of half-lives n = t / T₁/₂. Fraction remaining = (1/2)^n.",
                    "steps": [
                        {
                            "step": "Calculate number of half-lives",
                            "work": "n = 30 / 10 = 3",
                            "result": "Fraction remaining = (1/2)³ = 1/8"
                        }
                    ],
                    "answer": "1/8",
                    "concept": "Radioactivity: fraction remaining after n half-lives"
                }
            },
            {
                "problem": "An α-particle and a proton are accelerated from rest through the same potential difference. Find the ratio of their de Broglie wavelengths. (Assume masses: m_α = 4 m_p, charge: q_α = 2 q_p)",
                "difficulty": "hard",
                "solution": {
                    "given": ["Same potential difference V", "m_α = 4 m_p", "q_α = 2 q_p", "Both start from rest"],
                    "find": "λ_α : λ_p",
                    "formula": "For a charged particle accelerated by V: K = q V, p = √(2 m K) = √(2 m q V), λ = h/p = h/√(2 m q V)",
                    "steps": [
                        {
                            "step": "Write wavelength for each particle",
                            "work": "λ ∝ 1/√(m q). So λ_α / λ_p = √(m_p q_p / m_α q_α) = √(1 * 1 / 4 * 2) = √(1/8) = 1/(2√2)",
                            "result": "λ_α : λ_p = 1 : 2√2"
                        }
                    ],
                    "answer": "1 : 2√2",
                    "concept": "Dual Nature: de Broglie wavelength for different particles"
                }
            },
            {
                "problem": "The radius of the first Bohr orbit of hydrogen atom is 0.53 Å. What is the radius of the third Bohr orbit?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Radius of first orbit, r₁ = 0.53 Å", "For hydrogen, Z=1"],
                    "find": "Radius of third orbit, r₃",
                    "formula": "Radius of n-th orbit, r_n ∝ n²",
                    "steps": [
                        {
                            "step": "r_n = r₁ * n²",
                            "work": "r₃ = 0.53 × (3)² = 0.53 × 9",
                            "result": "4.77 Å"
                        }
                    ],
                    "answer": "4.77 Å",
                    "concept": "Bohr's Model: radius of orbits"
                }
            },
            {
                "problem": "A radioactive element decays to form a stable nuclide. The half-life of the radioactive element is 2 hours. How much time will it take for 7/8th of the element to decay?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Half-life, T₁/₂ = 2 hours", "Fraction decayed = 7/8, so fraction remaining = 1/8"],
                    "find": "Time taken, t",
                    "formula": "Fraction remaining = (1/2)^n = 1/8, find n, then t = n × T₁/₂",
                    "steps": [
                        {
                            "step": "Find number of half-lives",
                            "work": "(1/2)^n = 1/8 ⇒ n = 3",
                            "result": "t = 3 × 2 = 6 hours"
                        }
                    ],
                    "answer": "6 hours",
                    "concept": "Radioactivity: time for a certain fraction to decay"
                }
            },
            {
                "problem": "The stopping potential for photoelectrons emitted from a surface is 3V. What is the maximum kinetic energy of the photoelectrons?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Stopping potential, V₀ = 3 V"],
                    "find": "Maximum kinetic energy, K_max",
                    "formula": "K_max = e V₀",
                    "steps": [
                        {
                            "step": "K_max = e × 3 V = 3 eV",
                            "work": "",
                            "result": "3 eV"
                        }
                    ],
                    "answer": "3 eV",
                    "concept": "Photoelectric Effect: kinetic energy from stopping potential"
                }
            },
            {
                "problem": "The mass number of a nucleus is 64. Its binding energy per nucleon is 8.5 MeV. Calculate its total binding energy and mass defect. (1 u = 931 MeV/c²)",
                "difficulty": "medium",
                "solution": {
                    "given": ["Mass number, A = 64", "B.E. per nucleon = 8.5 MeV", "1 u = 931 MeV/c²"],
                    "find": "Total B.E. and mass defect (Δm)",
                    "formula": "Total B.E. = (B.E. per nucleon) × A. Mass defect Δm = Total B.E. / c².",
                    "steps": [
                        {
                            "step": "Calculate total binding energy",
                            "work": "Total B.E. = 8.5 × 64 = 544 MeV",
                            "result": "Δm = Total B.E. / c² = 544 MeV / 931 MeV/u ≈ 0.584 u"
                        }
                    ],
                    "answer": "Total Binding Energy = 544 MeV, Mass Defect ≈ 0.584 u",
                    "concept": "Nuclear Physics: binding energy and mass defect"
                }
            },
            {
                "problem": "An electron is moving with a kinetic energy of 100 eV. Calculate its de Broglie wavelength. (m_e = 9.1 × 10⁻³¹ kg, h = 6.63 × 10⁻³⁴ J s, 1 eV = 1.6 × 10⁻¹⁹ J)",
                "difficulty": "medium",
                "solution": {
                    "given": ["Kinetic energy, K = 100 eV = 100 × 1.6 × 10⁻¹⁹ J = 1.6 × 10⁻¹⁷ J", "m_e = 9.1 × 10⁻³¹ kg", "h = 6.63 × 10⁻³⁴ J s"],
                    "find": "de Broglie wavelength, λ",
                    "formula": "λ = h / p = h / √(2 m K)",
                    "steps": [
                        {
                            "step": "Calculate momentum p = √(2 m K)",
                            "work": "p = √(2 × 9.1e-31 × 1.6e-17) = √(2.912e-47) ≈ 5.396e-24 kg m/s",
                            "result": "λ = h / p = 6.63e-34 / 5.396e-24 ≈ 1.229 × 10⁻¹⁰ m = 1.229 Å"
                        }
                    ],
                    "answer": "1.229 Å",
                    "concept": "Dual Nature: de Broglie wavelength from kinetic energy"
                }
            },
            {
                "problem": "The activity of a radioactive sample reduces from 1600 Bq to 100 Bq in 5 hours. Calculate its decay constant and half-life.",
                "difficulty": "hard",
                "solution": {
                    "given": ["Initial activity, A₀ = 1600 Bq", "Final activity, A = 100 Bq", "Time, t = 5 hours"],
                    "find": "Decay constant (λ) and half-life (T₁/₂)",
                    "formula": "Use A = A₀ e^(-λt) to find λ, then T₁/₂ = ln(2)/λ.",
                    "steps": [
                        {
                            "step": "Solve for λ: 100 = 1600 e^(-λ×5) ⇒ 1/16 = e^(-5λ) ⇒ ln(1/16) = -5λ ⇒ -ln(16) = -5λ",
                            "work": "ln(16) = ln(2⁴)=4ln(2)≈4×0.693=2.772. So λ = 2.772/5 ≈ 0.5544 per hour.",
                            "result": "T₁/₂ = 0.693 / 0.5544 ≈ 1.25 hours"
                        }
                    ],
                    "answer": "Decay constant ≈ 0.554 per hour, Half-life ≈ 1.25 hours",
                    "concept": "Radioactivity: calculating decay constant from activity"
                }
            },
            {
                "problem": "A photon of energy 10 eV is incident on a metal surface. The maximum kinetic energy of the emitted photoelectron is 6 eV. What is the work function of the metal?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Photon energy, hν = 10 eV", "Max kinetic energy, K_max = 6 eV"],
                    "find": "Work function, φ",
                    "formula": "From Einstein's equation: K_max = hν - φ",
                    "steps": [
                        {
                            "step": "φ = hν - K_max",
                            "work": "φ = 10 - 6 = 4 eV",
                            "result": "4 eV"
                        }
                    ],
                    "answer": "4 eV",
                    "concept": "Photoelectric Effect: finding work function"
                }
            },
            {
                "problem": "Calculate the energy of an electron in the n=2 state of a hydrogen atom in eV.",
                "difficulty": "easy",
                "solution": {
                    "given": ["For hydrogen, Z=1", "n=2"],
                    "find": "Energy E₂",
                    "formula": "E_n = -13.6 / n² eV",
                    "steps": [
                        {
                            "step": "E₂ = -13.6 / (2)² = -13.6 / 4",
                            "work": "-3.4 eV",
                            "result": "-3.4 eV"
                        }
                    ],
                    "answer": "-3.4 eV",
                    "concept": "Bohr's Model: energy of specific orbit"
                }
            },
            {
                "problem": "The decay constant of a radioactive substance is 1.5 × 10⁻⁵ per second. Calculate its half-life and mean life.",
                "difficulty": "easy",
                "solution": {
                    "given": ["Decay constant, λ = 1.5 × 10⁻⁵ s⁻¹"],
                    "find": "Half-life (T₁/₂) and mean life (τ)",
                    "formula": "T₁/₂ = ln(2)/λ, τ = 1/λ",
                    "steps": [
                        {
                            "step": "T₁/₂ = 0.693 / 1.5e-5 ≈ 46200 seconds",
                            "work": "τ = 1 / 1.5e-5 ≈ 66667 seconds",
                            "result": "T₁/₂ ≈ 46200 s, τ ≈ 66667 s"
                        }
                    ],
                    "answer": "Half-life ≈ 46200 s, Mean life ≈ 66667 s",
                    "concept": "Radioactivity: half-life and mean life from decay constant"
                }
            },
            {
                "problem": "A proton and an alpha particle have the same de Broglie wavelength. Which one has more kinetic energy? Find the ratio of their kinetic energies. (m_α = 4 m_p)",
                "difficulty": "hard",
                "solution": {
                    "given": ["λ_p = λ_α", "m_α = 4 m_p"],
                    "find": "Which has more K.E. and ratio K_p : K_α",
                    "formula": "λ = h/√(2 m K) ⇒ for same λ, K ∝ 1/m",
                    "steps": [
                        {
                            "step": "Since λ is same, √(m K) is constant. So m_p K_p = m_α K_α ⇒ K_p / K_α = m_α / m_p = 4",
                            "work": "K_p = 4 K_α. The proton has more kinetic energy.",
                            "result": "Proton has more kinetic energy. Ratio K_p : K_α = 4 : 1"
                        }
                    ],
                    "answer": "The proton has more kinetic energy. Ratio K_p : K_α = 4 : 1",
                    "concept": "Dual Nature: kinetic energy for same de Broglie wavelength"
                }
            },
            {
                "problem": "The half-life of ²³⁸U is 4.5 × 10⁹ years. How long will it take for 25% of the sample to remain unchanged?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Half-life, T₁/₂ = 4.5 × 10⁹ years", "Fraction remaining = 25% = 1/4"],
                    "find": "Time, t",
                    "formula": "Fraction remaining = (1/2)^n = 1/4 ⇒ n=2. Then t = n × T₁/₂.",
                    "steps": [
                        {
                            "step": "n = 2 half-lives",
                            "work": "t = 2 × 4.5e9 = 9 × 10⁹ years",
                            "result": "9 billion years"
                        }
                    ],
                    "answer": "9 × 10⁹ years",
                    "concept": "Radioactivity: time for a specific fraction to remain"
                }
            },
            {
                "problem": "The work function of cesium is 2.14 eV. Find the maximum wavelength of light that can cause photoelectric emission from cesium. (h = 4.14 × 10⁻¹⁵ eV s, c = 3 × 10⁸ m/s)",
                "difficulty": "medium",
                "solution": {
                    "given": ["Work function, φ = 2.14 eV", "h = 4.14e-15 eV s", "c = 3e8 m/s"],
                    "find": "Threshold wavelength, λ₀",
                    "formula": "At threshold, hν₀ = φ. So λ₀ = h c / φ.",
                    "steps": [
                        {
                            "step": "λ₀ = h c / φ = (4.14e-15 * 3e8) / 2.14 = (1242 eV nm) / 2.14",
                            "work": "≈ 580.37 nm",
                            "result": "580 nm (approximately)"
                        }
                    ],
                    "answer": "580 nm",
                    "concept": "Photoelectric Effect: threshold wavelength"
                }
            },
            {
                "problem": "An electron in the ground state of hydrogen atom is given 12.1 eV of energy. To which energy level will it jump?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Initial state: n=1 (ground state, E₁ = -13.6 eV)", "Energy absorbed = 12.1 eV"],
                    "find": "Final energy level, n",
                    "formula": "Energy after absorption: E_f = E₁ + ΔE. Then find n from E_n = -13.6/n².",
                    "steps": [
                        {
                            "step": "E_f = -13.6 + 12.1 = -1.5 eV",
                            "work": "E_n = -13.6/n² = -1.5 ⇒ n² = 13.6/1.5 ≈ 9.066 ⇒ n ≈ 3",
                            "result": "It will jump to n=3."
                        }
                    ],
                    "answer": "n = 3",
                    "concept": "Bohr's Model: transition due to energy absorption"
                }
            },
            {
                "problem": "The binding energy per nucleon for ⁴He is 7 MeV. Calculate the total binding energy and the mass defect for an alpha particle. (1 u = 931 MeV/c²)",
                "difficulty": "medium",
                "solution": {
                    "given": ["Nucleus: ⁴He (alpha particle), A=4", "B.E. per nucleon = 7 MeV", "1 u = 931 MeV/c²"],
                    "find": "Total B.E. and mass defect Δm",
                    "formula": "Total B.E. = 7 × 4 = 28 MeV. Δm = Total B.E. / c².",
                    "steps": [
                        {
                            "step": "Δm = 28 MeV / 931 MeV/u ≈ 0.03008 u",
                            "work": "",
                            "result": "Total B.E. = 28 MeV, Mass defect ≈ 0.0301 u"
                        }
                    ],
                    "answer": "Total Binding Energy = 28 MeV, Mass Defect ≈ 0.0301 u",
                    "concept": "Nuclear Physics: binding energy for alpha particle"
                }
            },
            {
                "problem": "A radioactive sample has a half-life of 5 days. What is the probability that a nucleus will decay in the next 10 days?",
                "difficulty": "hard",
                "solution": {
                    "given": ["Half-life, T₁/₂ = 5 days", "Time interval, t = 10 days"],
                    "find": "Probability of decay in next 10 days",
                    "formula": "Probability of decay = 1 - Probability of survival = 1 - e^(-λt). First find λ = ln(2)/T₁/₂.",
                    "steps": [
                        {
                            "step": "λ = 0.693/5 = 0.1386 per day. Then probability of decay = 1 - e^(-0.1386×10) = 1 - e^(-1.386)",
                            "work": "e^(-1.386) ≈ 0.25. So probability = 1 - 0.25 = 0.75 or 75%",
                            "result": "75%"
                        }
                    ],
                    "answer": "75%",
                    "concept": "Radioactivity: probability of decay"
                }
            },
            {
                "problem": "The de Broglie wavelength of an electron is 1 Å. Calculate the potential difference through which it must be accelerated to attain this wavelength. (m_e = 9.1 × 10⁻³¹ kg, h = 6.63 × 10⁻³⁴ J s, e = 1.6 × 10⁻¹⁹ C)",
                "difficulty": "hard",
                "solution": {
                    "given": ["de Broglie wavelength, λ = 1 Å = 1 × 10⁻¹⁰ m", "m_e, h, e as given"],
                    "find": "Potential difference, V",
                    "formula": "For electron: λ = h / √(2 m e V) ⇒ V = h² / (2 m e λ²)",
                    "steps": [
                        {
                            "step": "Calculate V",
                            "work": "V = (6.63e-34)² / (2 × 9.1e-31 × 1.6e-19 × (1e-10)²) = 4.396e-67 / (2.912e-69) ≈ 150.96 V",
                            "result": "Approximately 151 V"
                        }
                    ],
                    "answer": "151 V",
                    "concept": "Dual Nature: potential difference for given de Broglie wavelength"
                }
            }
        ]
    },


    "electrostatics": {
        "title": "Electrostatics",
        "weightage": "	6–8%",
        "introduction": "Electrostatics is the branch of physics that deals with the phenomena and properties of stationary or slow-moving electric charges. This chapter covers Coulomb's law, electric fields, electric potential, capacitors, and dielectrics. A strong grasp of these concepts is crucial for understanding current electricity and electromagnetism, making it one of the most important chapters for competitive exams.",

        "topics": [
            {
                "name": "Electric Charges and Coulomb's Law",
                "description": "Fundamental concepts of electric charge and the force between two point charges.",
                "subtopics": [
                    {
                        "name": "Properties of Electric Charge",
                        "explanation": "Charge is quantized, conserved, and additive. Like charges repel, unlike charges attract."
                    },
                    {
                        "name": "Coulomb's Law",
                        "explanation": "The force between two point charges is directly proportional to the product of their charges and inversely proportional to the square of the distance between them. F = k(q₁q₂)/r², where k = 1/(4πε₀)."
                    }
                ]
            },
            {
                "name": "Electric Field and Potential",
                "description": "Concepts of electric field as force per unit charge and electric potential as work done per unit charge.",
                "subtopics": [
                    {
                        "name": "Electric Field",
                        "explanation": "The electric field at a point is the force experienced by a unit positive test charge placed at that point. E = F/q₀. It's a vector quantity."
                    },
                    {
                        "name": "Electric Potential",
                        "explanation": "The electric potential at a point is the work done in bringing a unit positive charge from infinity to that point. V = W/q₀. It's a scalar quantity."
                    },
                    {
                        "name": "Relation between E and V",
                        "explanation": "E = -dV/dr. The electric field is the negative gradient of electric potential."
                    }
                ]
            },
            {
                "name": "Gauss's Law and Applications",
                "description": "A fundamental law relating the electric flux through a closed surface to the charge enclosed.",
                "subtopics": [
                    {
                        "name": "Electric Flux",
                        "explanation": "The number of electric field lines passing through a given area. Φ = ∫E·dA. For uniform E and flat surface, Φ = E·A = EAcosθ."
                    },
                    {
                        "name": "Gauss's Law",
                        "explanation": "The total electric flux through any closed surface is equal to 1/ε₀ times the net charge enclosed by the surface. ∮E·dA = Q_enclosed/ε₀."
                    }
                ]
            },
            {
                "name": "Capacitors and Dielectrics",
                "description": "Devices that store electrical energy and the effect of insulating materials on capacitance.",
                "subtopics": [
                    {
                        "name": "Capacitance",
                        "explanation": "The ability of a conductor to store charge. C = Q/V. For a parallel plate capacitor, C = ε₀A/d."
                    },
                    {
                        "name": "Energy Stored in Capacitor",
                        "explanation": "U = ½QV = ½CV² = Q²/(2C). The energy is stored in the electric field between the plates."
                    },
                    {
                        "name": "Dielectrics",
                        "explanation": "Insulating materials that increase capacitance when inserted between capacitor plates. C = κC₀, where κ is dielectric constant."
                    }
                ]
            }
        ],

        "formulas": {
            "Coulomb's Law": [
                {
                    "name": "Force between two point charges",
                    "expression": "F = k(q₁q₂)/r² where k = 9 × 10⁹ Nm²/C²",
                    "description": "The electrostatic force between two point charges separated by distance r."
                }
            ],
            "Electric Field": [
                {
                    "name": "Due to point charge",
                    "expression": "E = kq/r²",
                    "description": "Electric field at distance r from a point charge q."
                }
            ],
            "Electric Potential": [
                {
                    "name": "Due to point charge",
                    "expression": "V = kq/r",
                    "description": "Electric potential at distance r from a point charge q."
                }
            ],
            "Capacitance": [
                {
                    "name": "Parallel plate capacitor",
                    "expression": "C = ε₀A/d",
                    "description": "Capacitance of parallel plate capacitor with area A and plate separation d."
                }
            ]
        },

        "problems": [
            {
                "problem": "Two point charges of +2 μC and +3 μC are placed 10 cm apart in air. Calculate the force between them.",
                "difficulty": "easy",
                "solution": {
                    "given": ["q₁ = +2 μC = 2 × 10⁻⁶ C", "q₂ = +3 μC = 3 × 10⁻⁶ C", "r = 10 cm = 0.1 m", "k = 9 × 10⁹ Nm²/C²"],
                    "find": "Electrostatic force, F",
                    "formula": "Coulomb's Law: F = k(q₁q₂)/r²",
                    "steps": [
                        {
                            "step": "Substitute the values",
                            "work": "F = (9 × 10⁹ × 2 × 10⁻⁶ × 3 × 10⁻⁶)/(0.1)² = (54 × 10⁻³)/(0.01)",
                            "result": "F = 5.4 N (repulsive since both charges are positive)"
                        }
                    ],
                    "answer": "5.4 N (repulsive)",
                    "concept": "Coulomb's Law: force between two point charges"
                }
            },
            {
                "problem": "Calculate the electric field intensity at a point 30 cm from a point charge of 5 μC in vacuum.",
                "difficulty": "easy",
                "solution": {
                    "given": ["q = 5 μC = 5 × 10⁻⁶ C", "r = 30 cm = 0.3 m", "k = 9 × 10⁹ Nm²/C²"],
                    "find": "Electric field intensity, E",
                    "formula": "E = kq/r²",
                    "steps": [
                        {
                            "step": "Substitute the values",
                            "work": "E = (9 × 10⁹ × 5 × 10⁻⁶)/(0.3)² = (45 × 10³)/(0.09)",
                            "result": "E = 5 × 10⁵ N/C (away from the charge since it's positive)"
                        }
                    ],
                    "answer": "5 × 10⁵ N/C",
                    "concept": "Electric Field: due to point charge"
                }
            },
            {
                "problem": "Two point charges of +4 μC and -6 μC are placed 20 cm apart. Calculate the force between them and state whether it's attractive or repulsive.",
                "difficulty": "easy",
                "solution": {
                    "given": ["q₁ = +4 μC = 4 × 10⁻⁶ C", "q₂ = -6 μC = -6 × 10⁻⁶ C", "r = 20 cm = 0.2 m", "k = 9 × 10⁹ Nm²/C²"],
                    "find": "Electrostatic force, F",
                    "formula": "Coulomb's Law: F = k(q₁q₂)/r²",
                    "steps": [
                        {
                            "step": "Substitute the values",
                            "work": "F = (9 × 10⁹ × 4 × 10⁻⁶ × -6 × 10⁻⁶)/(0.2)² = (-216 × 10⁻³)/(0.04)",
                            "result": "F = -5.4 N (negative sign indicates attractive force)"
                        }
                    ],
                    "answer": "5.4 N (attractive)",
                    "concept": "Coulomb's Law: force between unlike charges"
                }
            },
            {
                "problem": "A parallel plate capacitor has plates of area 0.2 m² separated by 2 mm. Calculate its capacitance. (ε₀ = 8.85 × 10⁻¹² C²/Nm²)",
                "difficulty": "easy",
                "solution": {
                    "given": ["A = 0.2 m²", "d = 2 mm = 2 × 10⁻³ m", "ε₀ = 8.85 × 10⁻¹² C²/Nm²"],
                    "find": "Capacitance, C",
                    "formula": "C = ε₀A/d",
                    "steps": [
                        {
                            "step": "Substitute the values",
                            "work": "C = (8.85 × 10⁻¹² × 0.2)/(2 × 10⁻³) = (1.77 × 10⁻¹²)/(2 × 10⁻³)",
                            "result": "C = 8.85 × 10⁻¹⁰ F = 885 pF"
                        }
                    ],
                    "answer": "885 pF",
                    "concept": "Capacitance: parallel plate capacitor"
                }
            },
            {
                "problem": "Calculate the work done in moving a charge of 5 μC between two points having a potential difference of 20 V.",
                "difficulty": "easy",
                "solution": {
                    "given": ["q = 5 μC = 5 × 10⁻⁶ C", "ΔV = 20 V"],
                    "find": "Work done, W",
                    "formula": "W = qΔV",
                    "steps": [
                        {
                            "step": "Substitute the values",
                            "work": "W = 5 × 10⁻⁶ × 20",
                            "result": "W = 10⁻⁴ J = 0.1 mJ"
                        }
                    ],
                    "answer": "0.1 mJ",
                    "concept": "Electric Potential: work done in moving charge"
                }
            },
            {
                "problem": "Three charges of +2 μC, +3 μC, and -4 μC are placed at the vertices of an equilateral triangle of side 10 cm. Calculate the net force on the +3 μC charge.",
                "difficulty": "medium",
                "solution": {
                    "given": ["q₁ = +2 μC", "q₂ = +3 μC", "q₃ = -4 μC", "Side of triangle = 10 cm = 0.1 m"],
                    "find": "Net force on q₂",
                    "formula": "Calculate forces using Coulomb's law and add them vectorially.",
                    "steps": [
                        {
                            "step": "Force on q₂ due to q₁: F₂₁ = k(q₂q₁)/r² = (9×10⁹×3×10⁻⁶×2×10⁻⁶)/(0.1)² = 5.4 N (repulsive, away from q₁)",
                            "work": "Force on q₂ due to q₃: F₂₃ = k(q₂q₃)/r² = (9×10⁹×3×10⁻⁶×4×10⁻⁶)/(0.1)² = 10.8 N (attractive, toward q₃)",
                            "result": "Since it's equilateral triangle, angle between forces is 60°. Use vector addition: F_net = √(F₂₁² + F₂₃² + 2F₂₁F₂₃cos60°) = √(5.4² + 10.8² + 2×5.4×10.8×0.5) ≈ 14.7 N"
                        }
                    ],
                    "answer": "14.7 N",
                    "concept": "Coulomb's Law: force due to multiple charges"
                }
            },
            {
                "problem": "A capacitor of 10 μF is charged to a potential difference of 100 V. Calculate the energy stored in it.",
                "difficulty": "easy",
                "solution": {
                    "given": ["C = 10 μF = 10 × 10⁻⁶ F", "V = 100 V"],
                    "find": "Energy stored, U",
                    "formula": "U = ½CV²",
                    "steps": [
                        {
                            "step": "Substitute the values",
                            "work": "U = ½ × 10 × 10⁻⁶ × (100)² = ½ × 10⁻⁵ × 10⁴",
                            "result": "U = 0.05 J = 50 mJ"
                        }
                    ],
                    "answer": "50 mJ",
                    "concept": "Capacitors: energy stored"
                }
            },
            {
                "problem": "Two point charges of +5 μC and -3 μC are placed 15 cm apart in air. At what point on the line joining them is the electric potential zero?",
                "difficulty": "medium",
                "solution": {
                    "given": ["q₁ = +5 μC", "q₂ = -3 μC", "Distance between them = 15 cm = 0.15 m"],
                    "find": "Point where electric potential is zero",
                    "formula": "V = kq₁/r₁ + kq₂/r₂ = 0. Also r₁ + r₂ = 0.15 m for points between them.",
                    "steps": [
                        {
                            "step": "Let the point be at distance x from q₁. Then k(5×10⁻⁶)/x + k(-3×10⁻⁶)/(0.15-x) = 0",
                            "work": "5/x - 3/(0.15-x) = 0 ⇒ 5/x = 3/(0.15-x) ⇒ 5(0.15-x) = 3x ⇒ 0.75 - 5x = 3x ⇒ 0.75 = 8x ⇒ x = 0.09375 m = 9.375 cm from q₁",
                            "result": "9.375 cm from the +5 μC charge"
                        }
                    ],
                    "answer": "9.375 cm from the +5 μC charge",
                    "concept": "Electric Potential: zero potential point"
                }
            },
            {
                "problem": "A parallel plate capacitor has a capacitance of 100 pF. If the distance between plates is halved and the area is doubled, what will be the new capacitance?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Initial C = 100 pF", "d becomes d/2", "A becomes 2A"],
                    "find": "New capacitance, C'",
                    "formula": "C = ε₀A/d, so C' = ε₀(2A)/(d/2) = 4(ε₀A/d) = 4C",
                    "steps": [
                        {
                            "step": "C' = 4 × 100 pF",
                            "work": "= 400 pF",
                            "result": "400 pF"
                        }
                    ],
                    "answer": "400 pF",
                    "concept": "Capacitance: effect of changing plate separation and area"
                }
            },
            {
                "problem": "Calculate the electric potential at the center of a square of side 10 cm with charges +2 μC, +3 μC, -4 μC, and +5 μC at its four corners.",
                "difficulty": "hard",
                "solution": {
                    "given": ["Square side = 10 cm = 0.1 m", "Charges: +2 μC, +3 μC, -4 μC, +5 μC", "Distance from center to corner = diagonal/2 = (0.1√2)/2 = 0.0707 m"],
                    "find": "Electric potential at center",
                    "formula": "V = kΣ(q_i/r_i). Since all corners are equidistant from center, V = (k/r)Σq_i",
                    "steps": [
                        {
                            "step": "Σq_i = 2 + 3 - 4 + 5 = 6 μC = 6 × 10⁻⁶ C",
                            "work": "r = 0.0707 m, k = 9 × 10⁹ Nm²/C²",
                            "result": "V = (9 × 10⁹ × 6 × 10⁻⁶)/0.0707 ≈ 7.64 × 10⁵ V"
                        }
                    ],
                    "answer": "7.64 × 10⁵ V",
                    "concept": "Electric Potential: due to multiple point charges"
                }
            },
            {
                "problem": "Two point charges of +4 μC and -9 μC are placed 20 cm apart in air. Find the point on the line joining them where the electric field is zero.",
                "difficulty": "medium",
                "solution": {
                    "given": ["q₁ = +4 μC", "q₂ = -9 μC", "Distance between them = 20 cm = 0.2 m"],
                    "find": "Point where electric field is zero",
                    "formula": "For electric field to be zero, E₁ = E₂ in magnitude. The point must be outside the charges, closer to the smaller charge.",
                    "steps": [
                        {
                            "step": "Let the point be at distance x from q₁. Then k(4×10⁻⁶)/x² = k(9×10⁻⁶)/(x+0.2)²",
                            "work": "4/x² = 9/(x+0.2)² ⇒ 2/x = 3/(x+0.2) ⇒ 2(x+0.2) = 3x ⇒ 2x+0.4 = 3x ⇒ x = 0.4 m from q₁",
                            "result": "0.4 m from the +4 μC charge (outside the two charges)"
                        }
                    ],
                    "answer": "0.4 m from the +4 μC charge",
                    "concept": "Electric Field: zero field point between unlike charges"
                }
            },
            {
                "problem": "A capacitor of 20 μF is charged to 200 V and then connected to an uncharged capacitor of 30 μF. Calculate the common potential and loss of energy.",
                "difficulty": "hard",
                "solution": {
                    "given": ["C₁ = 20 μF, V₁ = 200 V", "C₂ = 30 μF, V₂ = 0 V"],
                    "find": "Common potential (V) and energy loss",
                    "formula": "Common potential V = (C₁V₁ + C₂V₂)/(C₁+C₂). Energy loss = ½C₁V₁² - ½(C₁+C₂)V²",
                    "steps": [
                        {
                            "step": "Calculate common potential",
                            "work": "V = (20×10⁻⁶×200 + 30×10⁻⁶×0)/(20×10⁻⁶+30×10⁻⁶) = 4000×10⁻⁶/50×10⁻⁶ = 80 V",
                            "result": "Energy loss = ½×20×10⁻⁶×(200)² - ½×50×10⁻⁶×(80)² = 0.4 - 0.16 = 0.24 J"
                        }
                    ],
                    "answer": "Common potential = 80 V, Energy loss = 0.24 J",
                    "concept": "Capacitors: sharing of charge and energy loss"
                }
            },
            {
                "problem": "Calculate the electric flux through a spherical surface of radius 10 cm that encloses a point charge of 2 μC.",
                "difficulty": "easy",
                "solution": {
                    "given": ["Radius = 10 cm = 0.1 m", "Charge enclosed, q = 2 μC = 2 × 10⁻⁶ C", "ε₀ = 8.85 × 10⁻¹² C²/Nm²"],
                    "find": "Electric flux, Φ",
                    "formula": "By Gauss's law, Φ = q/ε₀",
                    "steps": [
                        {
                            "step": "Φ = (2 × 10⁻⁶)/(8.85 × 10⁻¹²)",
                            "work": "= 2.26 × 10⁵ Nm²/C",
                            "result": "2.26 × 10⁵ Nm²/C"
                        }
                    ],
                    "answer": "2.26 × 10⁵ Nm²/C",
                    "concept": "Gauss's Law: electric flux through closed surface"
                }
            },
            {
                "problem": "Two capacitors of 6 μF and 12 μF are connected in series across a 120 V battery. Calculate the charge on each capacitor and the potential difference across each.",
                "difficulty": "medium",
                "solution": {
                    "given": ["C₁ = 6 μF", "C₂ = 12 μF", "V_total = 120 V", "Series connection"],
                    "find": "Charge (Q) and potential difference across each capacitor",
                    "formula": "In series, Q is same for both. Equivalent capacitance C_eq = C₁C₂/(C₁+C₂). Q = C_eqV_total.",
                    "steps": [
                        {
                            "step": "C_eq = (6×12)/(6+12) = 72/18 = 4 μF",
                            "work": "Q = C_eqV = 4×10⁻⁶×120 = 480 μC",
                            "result": "V₁ = Q/C₁ = 480/6 = 80 V, V₂ = Q/C₂ = 480/12 = 40 V"
                        }
                    ],
                    "answer": "Charge = 480 μC on each, V₁ = 80 V, V₂ = 40 V",
                    "concept": "Capacitors: series combination"
                }
            },
            {
                "problem": "An electron is placed in a uniform electric field of intensity 1000 N/C. Calculate the force experienced by the electron and its acceleration. (mass of electron = 9.1 × 10⁻³¹ kg, charge = 1.6 × 10⁻¹⁹ C)",
                "difficulty": "easy",
                "solution": {
                    "given": ["E = 1000 N/C", "q = -1.6 × 10⁻¹⁹ C", "m = 9.1 × 10⁻³¹ kg"],
                    "find": "Force (F) and acceleration (a)",
                    "formula": "F = qE, F = ma",
                    "steps": [
                        {
                            "step": "F = (1.6 × 10⁻¹⁹) × 1000 = 1.6 × 10⁻¹⁶ N (direction opposite to E)",
                            "work": "a = F/m = (1.6 × 10⁻¹⁶)/(9.1 × 10⁻³¹) = 1.76 × 10¹⁴ m/s²",
                            "result": "F = 1.6 × 10⁻¹⁶ N, a = 1.76 × 10¹⁴ m/s²"
                        }
                    ],
                    "answer": "Force = 1.6 × 10⁻¹⁶ N, Acceleration = 1.76 × 10¹⁴ m/s²",
                    "concept": "Electric Field: force on charge and acceleration"
                }
            },
            {
                "problem": "A parallel plate capacitor has plates of area 0.5 m² separated by 1 mm. What is its capacitance when the space is filled with a dielectric of constant 5? (ε₀ = 8.85 × 10⁻¹² C²/Nm²)",
                "difficulty": "easy",
                "solution": {
                    "given": ["A = 0.5 m²", "d = 1 mm = 0.001 m", "κ = 5", "ε₀ = 8.85 × 10⁻¹² C²/Nm²"],
                    "find": "Capacitance, C",
                    "formula": "C = κε₀A/d",
                    "steps": [
                        {
                            "step": "C = (5 × 8.85 × 10⁻¹² × 0.5)/0.001",
                            "work": "= (22.125 × 10⁻¹²)/0.001 = 22.125 × 10⁻⁹ F",
                            "result": "22.125 nF"
                        }
                    ],
                    "answer": "22.125 nF",
                    "concept": "Capacitors: with dielectric"
                }
            },
            {
                "problem": "Three charges of +2 μC, +3 μC, and +4 μC are placed at the vertices of an equilateral triangle of side 20 cm. Calculate the net force on the +3 μC charge.",
                "difficulty": "hard",
                "solution": {
                    "given": ["q₁ = +2 μC", "q₂ = +3 μC", "q₃ = +4 μC", "Side = 20 cm = 0.2 m"],
                    "find": "Net force on q₂",
                    "formula": "Calculate forces using Coulomb's law and add them vectorially (angle between forces = 60°).",
                    "steps": [
                        {
                            "step": "F₂₁ = k(3×2×10⁻¹²)/(0.2)² = (9×10⁹×6×10⁻¹²)/0.04 = 1.35 N (repulsive, away from q₁)",
                            "work": "F₂₃ = k(3×4×10⁻¹²)/(0.2)² = (9×10⁹×12×10⁻¹²)/0.04 = 2.7 N (repulsive, away from q₃)",
                            "result": "F_net = √(F₂₁² + F₂₃² + 2F₂₁F₂₃cos60°) = √(1.35² + 2.7² + 2×1.35×2.7×0.5) = √(1.8225 + 7.29 + 3.645) = √12.7575 ≈ 3.57 N"
                        }
                    ],
                    "answer": "3.57 N",
                    "concept": "Coulomb's Law: force due to multiple like charges"
                }
            },
            {
                "problem": "A charged particle of mass 2 mg and charge 1 μC is suspended in air between two horizontal parallel plates 2 cm apart. Calculate the potential difference between the plates. (g = 10 m/s²)",
                "difficulty": "medium",
                "solution": {
                    "given": ["m = 2 mg = 2 × 10⁻⁶ kg", "q = 1 μC = 10⁻⁶ C", "d = 2 cm = 0.02 m", "g = 10 m/s²"],
                    "find": "Potential difference, V",
                    "formula": "For equilibrium: weight = electric force ⇒ mg = qE = q(V/d)",
                    "steps": [
                        {
                            "step": "mg = qV/d ⇒ V = mgd/q",
                            "work": "V = (2 × 10⁻⁶ × 10 × 0.02)/10⁻⁶ = 0.4 V",
                            "result": "0.4 V"
                        }
                    ],
                    "answer": "0.4 V",
                    "concept": "Electric Field: equilibrium of charged particle"
                }
            },
            {
                "problem": "Calculate the work done in moving a charge of 10 μC from a point at potential 100 V to another point at potential 200 V.",
                "difficulty": "easy",
                "solution": {
                    "given": ["q = 10 μC = 10⁻⁵ C", "V₁ = 100 V", "V₂ = 200 V"],
                    "find": "Work done, W",
                    "formula": "W = q(V₂ - V₁)",
                    "steps": [
                        {
                            "step": "W = 10⁻⁵ × (200 - 100) = 10⁻⁵ × 100",
                            "work": "= 10⁻³ J = 1 mJ",
                            "result": "1 mJ"
                        }
                    ],
                    "answer": "1 mJ",
                    "concept": "Electric Potential: work done in moving charge"
                }
            },
            {
                "problem": "A capacitor of 50 μF is charged to 100 V. The charging battery is disconnected and the capacitor is connected to another capacitor of 100 μF. Calculate the final charge on each capacitor.",
                "difficulty": "medium",
                "solution": {
                    "given": ["C₁ = 50 μF, initial charge Q = C₁V = 50×10⁻⁶×100 = 5×10⁻³ C", "C₂ = 100 μF, initial charge = 0"],
                    "find": "Final charge on each capacitor",
                    "formula": "Charge is conserved. Common potential V = Q_total/(C₁+C₂). Then Q₁ = C₁V, Q₂ = C₂V.",
                    "steps": [
                        {
                            "step": "Q_total = 5 × 10⁻³ C",
                            "work": "V = (5×10⁻³)/(150×10⁻⁶) = 100/3 V ≈ 33.33 V",
                            "result": "Q₁ = 50×10⁻⁶×(100/3) ≈ 1.667×10⁻³ C, Q₂ = 100×10⁻⁶×(100/3) ≈ 3.333×10⁻³ C"
                        }
                    ],
                    "answer": "Q₁ ≈ 1.667 mC, Q₂ ≈ 3.333 mC",
                    "concept": "Capacitors: charge distribution when connected"
                }
            },
            {
                "problem": "Two point charges of +10 μC and -20 μC are placed 30 cm apart. Calculate the electrostatic force between them and state if it's attractive or repulsive.",
                "difficulty": "easy",
                "solution": {
                    "given": ["q₁ = +10 μC = 10⁻⁵ C", "q₂ = -20 μC = -2×10⁻⁵ C", "r = 30 cm = 0.3 m", "k = 9×10⁹ Nm²/C²"],
                    "find": "Electrostatic force, F",
                    "formula": "F = k(q₁q₂)/r²",
                    "steps": [
                        {
                            "step": "F = (9×10⁹ × 10⁻⁵ × -2×10⁻⁵)/(0.3)² = (-1.8×10⁻¹)/(0.09)",
                            "work": "= -20 N",
                            "result": "20 N (attractive, since force is negative)"
                        }
                    ],
                    "answer": "20 N (attractive)",
                    "concept": "Coulomb's Law: force between unlike charges"
                }
            },
            {
                "problem": "A charged particle of charge 2 μC and mass 1 g is moving with velocity 100 m/s perpendicular to a uniform electric field of intensity 500 N/C. Calculate the acceleration and the deflection after 0.1 seconds.",
                "difficulty": "hard",
                "solution": {
                    "given": ["q = 2 μC = 2×10⁻⁶ C", "m = 1 g = 10⁻³ kg", "v = 100 m/s", "E = 500 N/C", "t = 0.1 s"],
                    "find": "Acceleration (a) and deflection (y)",
                    "formula": "a = qE/m (perpendicular to initial velocity). Deflection y = ½at².",
                    "steps": [
                        {
                            "step": "a = (2×10⁻⁶×500)/10⁻³ = 1 m/s²",
                            "work": "y = ½ × 1 × (0.1)² = 0.005 m = 5 mm",
                            "result": "a = 1 m/s², deflection = 5 mm"
                        }
                    ],
                    "answer": "Acceleration = 1 m/s², Deflection = 5 mm",
                    "concept": "Electric Field: motion of charged particle"
                }
            },
            {
                "problem": "Calculate the equivalent capacitance between points A and B for three capacitors: 2 μF, 3 μF, and 6 μF connected in parallel.",
                "difficulty": "easy",
                "solution": {
                    "given": ["C₁ = 2 μF", "C₂ = 3 μF", "C₃ = 6 μF", "Parallel connection"],
                    "find": "Equivalent capacitance, C_eq",
                    "formula": "For parallel combination: C_eq = C₁ + C₂ + C₃",
                    "steps": [
                        {
                            "step": "C_eq = 2 + 3 + 6",
                            "work": "= 11 μF",
                            "result": "11 μF"
                        }
                    ],
                    "answer": "11 μF",
                    "concept": "Capacitors: parallel combination"
                }
            },
            {
                "problem": "A point charge of 5 μC is placed at the center of a cube of side 10 cm. Calculate the electric flux through one face of the cube.",
                "difficulty": "hard",
                "solution": {
                    "given": ["q = 5 μC = 5×10⁻⁶ C", "Cube side = 10 cm = 0.1 m", "ε₀ = 8.85×10⁻¹² C²/Nm²"],
                    "find": "Flux through one face, Φ_face",
                    "formula": "By symmetry, flux through each face is equal. Total flux Φ_total = q/ε₀. For cube, Φ_face = Φ_total/6.",
                    "steps": [
                        {
                            "step": "Φ_total = (5×10⁻⁶)/(8.85×10⁻¹²) ≈ 5.65×10⁵ Nm²/C",
                            "work": "Φ_face = 5.65×10⁵/6 ≈ 9.42×10⁴ Nm²/C",
                            "result": "9.42×10⁴ Nm²/C"
                        }
                    ],
                    "answer": "9.42×10⁴ Nm²/C",
                    "concept": "Gauss's Law: flux through symmetric surfaces"
                }
            },
            {
                "problem": "Two capacitors of 4 μF and 6 μF are connected in series across a 60 V battery. Calculate the energy stored in each capacitor.",
                "difficulty": "medium",
                "solution": {
                    "given": ["C₁ = 4 μF", "C₂ = 6 μF", "V_total = 60 V", "Series connection"],
                    "find": "Energy stored in each capacitor (U₁, U₂)",
                    "formula": "In series, charge Q is same. First find Q = C_eqV, then U = Q²/(2C) for each.",
                    "steps": [
                        {
                            "step": "C_eq = (4×6)/(4+6) = 24/10 = 2.4 μF",
                            "work": "Q = C_eqV = 2.4×10⁻⁶×60 = 144 μC",
                            "result": "U₁ = (144×10⁻⁶)²/(2×4×10⁻⁶) = 2.592×10⁻³ J, U₂ = (144×10⁻⁶)²/(2×6×10⁻⁶) = 1.728×10⁻³ J"
                        }
                    ],
                    "answer": "U₁ = 2.592 mJ, U₂ = 1.728 mJ",
                    "concept": "Capacitors: energy storage in series combination"
                }
            },
            {
                "problem": "A charged particle of mass 5 mg and charge 10 μC is accelerated from rest through a potential difference of 500 V. Calculate its final kinetic energy and velocity.",
                "difficulty": "medium",
                "solution": {
                    "given": ["m = 5 mg = 5×10⁻⁶ kg", "q = 10 μC = 10⁻⁵ C", "ΔV = 500 V", "Initial velocity = 0"],
                    "find": "Kinetic energy (K) and final velocity (v)",
                    "formula": "K = qΔV, K = ½mv²",
                    "steps": [
                        {
                            "step": "K = 10⁻⁵ × 500 = 5×10⁻³ J",
                            "work": "½mv² = 5×10⁻³ ⇒ ½×5×10⁻⁶×v² = 5×10⁻³ ⇒ v² = 2×10³ ⇒ v = √2000 ≈ 44.72 m/s",
                            "result": "K = 5 mJ, v = 44.72 m/s"
                        }
                    ],
                    "answer": "Kinetic energy = 5 mJ, Velocity = 44.72 m/s",
                    "concept": "Energy: charged particle accelerated by potential difference"
                }
            },
            {
                "problem": "Calculate the electric field intensity at a distance of 20 cm from an infinitely long straight wire with linear charge density 5 μC/m.",
                "difficulty": "hard",
                "solution": {
                    "given": ["r = 20 cm = 0.2 m", "λ = 5 μC/m = 5×10⁻⁶ C/m", "k = 9×10⁹ Nm²/C²"],
                    "find": "Electric field intensity, E",
                    "formula": "For infinite line charge: E = 2kλ/r",
                    "steps": [
                        {
                            "step": "E = (2 × 9×10⁹ × 5×10⁻⁶)/0.2",
                            "work": "= (90×10³)/0.2 = 4.5×10⁵ N/C",
                            "result": "4.5×10⁵ N/C (radially outward)"
                        }
                    ],
                    "answer": "4.5×10⁵ N/C",
                    "concept": "Electric Field: due to infinite line charge"
                }
            },
            {
                "problem": "A parallel plate capacitor has capacitance 10 μF in air. When a dielectric slab of constant 4 is inserted between the plates, calculate the new capacitance.",
                "difficulty": "easy",
                "solution": {
                    "given": ["C_air = 10 μF", "κ = 4"],
                    "find": "New capacitance, C",
                    "formula": "C = κC_air",
                    "steps": [
                        {
                            "step": "C = 4 × 10",
                            "work": "= 40 μF",
                            "result": "40 μF"
                        }
                    ],
                    "answer": "40 μF",
                    "concept": "Capacitors: effect of dielectric"
                }
            },
            {
                "problem": "Two point charges of +8 μC and -2 μC are placed 40 cm apart. Calculate the electrostatic potential energy of the system.",
                "difficulty": "medium",
                "solution": {
                    "given": ["q₁ = +8 μC = 8×10⁻⁶ C", "q₂ = -2 μC = -2×10⁻⁶ C", "r = 40 cm = 0.4 m", "k = 9×10⁹ Nm²/C²"],
                    "find": "Electrostatic potential energy, U",
                    "formula": "U = k(q₁q₂)/r",
                    "steps": [
                        {
                            "step": "U = (9×10⁹ × 8×10⁻⁶ × -2×10⁻⁶)/0.4",
                            "work": "= (-144×10⁻³)/0.4 = -0.36 J",
                            "result": "-0.36 J"
                        }
                    ],
                    "answer": "-0.36 J",
                    "concept": "Electrostatic Potential Energy: system of two charges"
                }
            },
            {
                "problem": "A capacitor of 100 μF is charged to 50 V. Calculate the charge stored and the energy stored.",
                "difficulty": "easy",
                "solution": {
                    "given": ["C = 100 μF = 10⁻⁴ F", "V = 50 V"],
                    "find": "Charge (Q) and energy stored (U)",
                    "formula": "Q = CV, U = ½CV²",
                    "steps": [
                        {
                            "step": "Q = 10⁻⁴ × 50 = 5×10⁻³ C = 5 mC",
                            "work": "U = ½ × 10⁻⁴ × (50)² = ½ × 10⁻⁴ × 2500 = 0.125 J",
                            "result": "Q = 5 mC, U = 0.125 J"
                        }
                    ],
                    "answer": "Charge = 5 mC, Energy = 0.125 J",
                    "concept": "Capacitors: charge and energy storage"
                }
            },
            {
                "problem": "Calculate the electric field intensity at the center of a uniformly charged ring of radius 20 cm having total charge 10 μC.",
                "difficulty": "hard",
                "solution": {
                    "given": ["R = 20 cm = 0.2 m", "Q = 10 μC = 10⁻⁵ C", "k = 9×10⁹ Nm²/C²"],
                    "find": "Electric field at center, E",
                    "formula": "For a charged ring, electric field at center is zero due to symmetry.",
                    "steps": [
                        {
                            "step": "By symmetry, all components cancel out",
                            "work": "E = 0",
                            "result": "0 N/C"
                        }
                    ],
                    "answer": "0 N/C",
                    "concept": "Electric Field: symmetry in charged ring"
                }
            }
        ]
    },


    "current_electricity": {
        "title": "Current Electricity",
        "weightage": "	6–7%",
        "introduction": "Current Electricity deals with the study of moving electric charges, primarily in conductors. It forms the basis for understanding electric circuits, power transmission, and electronic devices. This chapter covers electric current, resistance, Ohm's Law, electrical energy and power, EMF, internal resistance, and the laws governing complex circuits (Kirchhoff's Laws). A strong grasp of this topic is essential for electromagnetism and modern physics.",

        "topics": [
            {
                "name": "Electric Current, Drift Velocity, and Resistance",
                "description": "Fundamental concepts defining the flow of charge and the opposition to it.",
                "subtopics": [
                    {
                        "name": "Electric Current (I)",
                        "explanation": "The rate of flow of electric charge through a conductor. I = Q/t. Measured in Amperes (A). Conventional current direction is opposite to electron flow."
                    },
                    {
                        "name": "Drift Velocity (v_d)",
                        "explanation": "The average velocity acquired by free electrons in a conductor under an applied electric field. It is very small (~10⁻⁴ m/s)."
                    },
                    {
                        "name": "Ohm's Law and Resistance (R)",
                        "explanation": "For a constant temperature, the current through a conductor is directly proportional to the potential difference across it. V = IR. Resistance R = V/I is measured in Ohms (Ω)."
                    },
                    {
                        "name": "Resistivity (ρ)",
                        "explanation": "An intrinsic property of a material that quantifies how strongly it opposes electric current. R = ρL/A. Measured in Ωm. It depends on temperature."
                    }
                ]
            },
            {
                "name": "Electrical Energy, Power, and Heating Effects",
                "description": "Concepts related to the consumption and dissipation of electrical energy.",
                "subtopics": [
                    {
                        "name": "Electrical Power (P)",
                        "explanation": "The rate at which electrical energy is consumed or converted into other forms. P = VI = I²R = V²/R. Measured in Watts (W)."
                    },
                    {
                        "name": "Joule's Law of Heating",
                        "explanation": "The heat (H) produced in a resistor is directly proportional to the square of the current (I), its resistance (R), and the time (t) for which it flows. H = I²Rt Joules."
                    },
                    {
                        "name": "Kilowatt-hour (kWh)",
                        "explanation": "The commercial unit of electrical energy. 1 kWh is the energy consumed by a 1 kW device in 1 hour. 1 kWh = 3.6 × 10⁶ J."
                    }
                ]
            },
            {
                "name": "Combination of Resistors",
                "description": "Methods to calculate the equivalent resistance of networks of resistors.",
                "subtopics": [
                    {
                        "name": "Series Combination",
                        "explanation": "Resistors are connected end-to-end. The same current flows through each resistor. Equivalent resistance is the sum: R_s = R₁ + R₂ + R₃ + ..."
                    },
                    {
                        "name": "Parallel Combination",
                        "explanation": "Resistors are connected between the same two common points. The same voltage is across each resistor. Reciprocal of equivalent resistance is the sum of reciprocals: 1/R_p = 1/R₁ + 1/R₂ + 1/R₃ + ..."
                    }
                ]
            },
            {
                "name": "Electromotive Force (EMF) and Internal Resistance",
                "description": "Understanding the real-world behavior of power sources like cells and batteries.",
                "subtopics": [
                    {
                        "name": "Electromotive Force (ε)",
                        "explanation": "The total energy supplied by a source per unit charge to drive it around a complete circuit. It is the potential difference across the cell when NO current is drawn (open circuit)."
                    },
                    {
                        "name": "Internal Resistance (r)",
                        "explanation": "The resistance offered by the electrolyte inside a cell. It causes a voltage drop within the cell when current flows."
                    },
                    {
                        "name": "Terminal Voltage (V)",
                        "explanation": "The voltage available across the terminals of a cell when current is being drawn. It is given by V = ε - Ir, where I is the current."
                    }
                ]
            },
            {
                "name": "Kirchhoff's Laws",
                "description": "Fundamental laws used to analyze complex circuits that cannot be simplified using series/parallel rules.",
                "subtopics": [
                    {
                        "name": "Kirchhoff's Current Law (KCL)",
                        "explanation": "The algebraic sum of currents meeting at any junction in a circuit is zero. ΣI_in = ΣI_out. It is based on the conservation of charge."
                    },
                    {
                        "name": "Kirchhoff's Voltage Law (KVL)",
                        "explanation": "The algebraic sum of the potential differences (voltage drops/emfs) around any closed loop in a circuit is zero. ΣΔV = 0. It is based on the conservation of energy."
                    }
                ]
            }
        ],

        "formulas": {
            "Current and Resistance": [
                {
                    "name": "Electric Current",
                    "expression": "I = Q / t",
                    "description": "Current is charge flowing per unit time."
                },
                {
                    "name": "Ohm's Law",
                    "expression": "V = IR",
                    "description": "Relationship between voltage, current, and resistance."
                },
                {
                    "name": "Resistance and Resistivity",
                    "expression": "R = ρL / A",
                    "description": "Resistance of a conductor depends on its material (ρ) and geometry (L, A)."
                }
            ],
            "Power and Energy": [
                {
                    "name": "Electrical Power",
                    "expression": "P = VI = I²R = V²/R",
                    "description": "Different formulas for calculating power dissipation."
                },
                {
                    "name": "Joule's Heating",
                    "expression": "H = I²Rt",
                    "description": "Heat energy produced in a resistor over time t."
                }
            ],
            "EMF and Circuits": [
                {
                    "name": "Terminal Voltage",
                    "expression": "V = ε - Ir",
                    "description": "Voltage output of a cell with internal resistance r when delivering current I."
                },
                {
                    "name": "Equivalent Resistance (Series)",
                    "expression": "R_s = R₁ + R₂ + R₃ + ...",
                    "description": "Total resistance for resistors in series."
                },
                {
                    "name": "Equivalent Resistance (Parallel)",
                    "expression": "1/R_p = 1/R₁ + 1/R₂ + 1/R₃ + ...",
                    "description": "Total resistance for resistors in parallel."
                }
            ]
        },

        "problems": [
            {
                "problem": "A current of 0.5 A is flowing through a conductor. Calculate the charge passing through it in 2 minutes.",
                "difficulty": "easy",
                "solution": {
                    "given": ["I = 0.5 A", "t = 2 min = 120 s"],
                    "find": "Charge, Q",
                    "formula": "I = Q / t",
                    "steps": [
                        {
                            "step": "Rearrange formula: Q = I × t",
                            "work": "Q = 0.5 A × 120 s",
                            "result": "Q = 60 C"
                        }
                    ],
                    "answer": "60 C",
                    "concept": "Definition of electric current"
                }
            },
            {
                "problem": "A 100 W, 240 V light bulb is connected to a 240 V power supply. Calculate (a) the current through the bulb, and (b) its resistance.",
                "difficulty": "easy",
                "solution": {
                    "given": ["P = 100 W", "V = 240 V"],
                    "find": ["Current, I", "Resistance, R"],
                    "formula": ["P = V I", "V = I R (Ohm's Law)"],
                    "steps": [
                        {
                            "step": "(a) Find I using P = VI",
                            "work": "I = P / V = 100 W / 240 V",
                            "result": "I ≈ 0.4167 A"
                        },
                        {
                            "step": "(b) Find R using V = IR",
                            "work": "R = V / I = 240 V / 0.4167 A",
                            "result": "R ≈ 576 Ω (Alternatively, R = V²/P = (240)²/100 = 576 Ω)"
                        }
                    ],
                    "answer": ["I ≈ 0.417 A", "R = 576 Ω"],
                    "concept": "Electrical power and Ohm's Law"
                }
            },
            {
                "problem": "Three resistors of 2 Ω, 3 Ω, and 6 Ω are connected in parallel. Calculate their equivalent resistance.",
                "difficulty": "easy",
                "solution": {
                    "given": ["R₁ = 2 Ω", "R₂ = 3 Ω", "R₃ = 6 Ω"],
                    "find": "Equivalent Resistance, R_p",
                    "formula": "1/R_p = 1/R₁ + 1/R₂ + 1/R₃",
                    "steps": [
                        {
                            "step": "Substitute the values",
                            "work": "1/R_p = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1",
                            "result": "R_p = 1 Ω"
                        }
                    ],
                    "answer": "1 Ω",
                    "concept": "Parallel combination of resistors"
                }
            },
            {
                "problem": "A cell of EMF 1.5 V and internal resistance 0.5 Ω is connected to a 2.5 Ω resistor. Calculate the current in the circuit and the terminal voltage of the cell.",
                "difficulty": "medium",
                "solution": {
                    "given": ["ε = 1.5 V", "r = 0.5 Ω", "R = 2.5 Ω"],
                    "find": ["Current, I", "Terminal Voltage, V"],
                    "formula": ["I = ε / (R + r)", "V = ε - I r = I R"],
                    "steps": [
                        {
                            "step": "Find total circuit resistance",
                            "work": "R_total = R + r = 2.5 Ω + 0.5 Ω = 3.0 Ω",
                            "result": ""
                        },
                        {
                            "step": "Find current I",
                            "work": "I = ε / R_total = 1.5 V / 3.0 Ω",
                            "result": "I = 0.5 A"
                        },
                        {
                            "step": "Find terminal voltage V",
                            "work": "V = I R = 0.5 A × 2.5 Ω = 1.25 V (or V = ε - Ir = 1.5 - (0.5)(0.5) = 1.25 V)",
                            "result": "V = 1.25 V"
                        }
                    ],
                    "answer": ["I = 0.5 A", "V = 1.25 V"],
                    "concept": "EMF, internal resistance, and terminal voltage"
                }
            },
            {
                "problem": "Two electric bulbs are rated 60 W, 220 V and 100 W, 220 V. Which one has a higher resistance?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Bulb A: 60 W, 220 V", "Bulb B: 100 W, 220 V"],
                    "find": "Which bulb has higher resistance?",
                    "formula": "P = V² / R, therefore R = V² / P",
                    "steps": [
                        {
                            "step": "Resistance of Bulb A (60 W)",
                            "work": "R_A = (220)² / 60 = 48400 / 60 ≈ 806.67 Ω",
                            "result": ""
                        },
                        {
                            "step": "Resistance of Bulb B (100 W)",
                            "work": "R_B = (220)² / 100 = 48400 / 100 = 484 Ω",
                            "result": ""
                        },
                        {
                            "step": "Compare R_A and R_B",
                            "work": "806.67 Ω > 484 Ω",
                            "result": "The 60 W bulb has a higher resistance."
                        }
                    ],
                    "answer": "The 60 W bulb has a higher resistance.",
                    "concept": "Relationship between power, voltage, and resistance"
                }
            },
            {
                "problem": "Calculate the equivalent resistance between points A and B in the given circuit: A 3 Ω and a 6 Ω resistor are in parallel, and this combination is in series with a 2 Ω resistor.",
                "difficulty": "medium",
                "solution": {
                    "given": ["R₁ = 3 Ω", "R₂ = 6 Ω (in parallel)", "R₃ = 2 Ω (in series with the combination)"],
                    "find": "Equivalent Resistance, R_AB",
                    "formula": ["Parallel: 1/R_p = 1/R₁ + 1/R₂", "Series: R_s = R_p + R₃"],
                    "steps": [
                        {
                            "step": "Find equivalent of parallel combination (R_p)",
                            "work": "1/R_p = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 ∴ R_p = 2 Ω",
                            "result": ""
                        },
                        {
                            "step": "Add the series resistor R₃",
                            "work": "R_AB = R_p + R₃ = 2 Ω + 2 Ω",
                            "result": "R_AB = 4 Ω"
                        }
                    ],
                    "answer": "4 Ω",
                    "concept": "Series-Parallel combination of resistors"
                }
            },
            {
                "problem": "An electric heater has a resistance of 50 Ω and is connected to a 220 V supply. Calculate the cost of using it for 5 hours daily for 30 days, if the cost of 1 kWh is ₹5.",
                "difficulty": "medium",
                "solution": {
                    "given": ["R = 50 Ω", "V = 220 V", "Time = 5 hours/day × 30 days = 150 hours", "Cost = ₹5 per kWh"],
                    "find": "Total Cost",
                    "formula": ["Power P = V² / R", "Energy E = P × t (in kWh)", "Cost = E × (Rate)"],
                    "steps": [
                        {
                            "step": "Calculate power P",
                            "work": "P = (220 V)² / 50 Ω = 48400 / 50 = 968 W = 0.968 kW",
                            "result": ""
                        },
                        {
                            "step": "Calculate total energy consumed E",
                            "work": "E = P × t = 0.968 kW × 150 h = 145.2 kWh",
                            "result": ""
                        },
                        {
                            "step": "Calculate total cost",
                            "work": "Cost = 145.2 kWh × ₹5/kWh = ₹726",
                            "result": "₹726"
                        }
                    ],
                    "answer": "₹726",
                    "concept": "Electrical energy, power, and commercial unit (kWh)"
                }
            },
            {
                "problem": "A wire has a resistance of 10 Ω. It is stretched to double its length. Calculate its new resistance, assuming the volume remains constant.",
                "difficulty": "medium",
                "solution": {
                    "given": ["Initial resistance R₁ = 10 Ω", "New length L₂ = 2L₁", "Volume constant: A₂ = A₁/2"],
                    "find": "New resistance R₂",
                    "formula": "R = ρL/A",
                    "steps": [
                        {
                            "step": "Initial resistance: R₁ = ρL₁/A₁",
                            "work": "10 = ρL₁/A₁",
                            "result": ""
                        },
                        {
                            "step": "New resistance: R₂ = ρL₂/A₂ = ρ(2L₁)/(A₁/2) = 4(ρL₁/A₁)",
                            "work": "R₂ = 4 × R₁ = 4 × 10 Ω",
                            "result": "R₂ = 40 Ω"
                        }
                    ],
                    "answer": "40 Ω",
                    "concept": "Effect of dimensions on resistance"
                }
            },
            {
                "problem": "A copper wire has a resistance of 6 Ω at 20°C. Calculate its resistance at 80°C. (Temperature coefficient of copper = 0.004 /°C)",
                "difficulty": "medium",
                "solution": {
                    "given": ["R₀ = 6 Ω", "T₀ = 20°C", "T = 80°C", "α = 0.004 /°C"],
                    "find": "Resistance at 80°C, R",
                    "formula": "R = R₀[1 + α(T - T₀)]",
                    "steps": [
                        {
                            "step": "Calculate temperature difference ΔT = T - T₀",
                            "work": "ΔT = 80°C - 20°C = 60°C",
                            "result": ""
                        },
                        {
                            "step": "Substitute values into formula",
                            "work": "R = 6[1 + (0.004)(60)] = 6[1 + 0.24] = 6 × 1.24",
                            "result": "R = 7.44 Ω"
                        }
                    ],
                    "answer": "7.44 Ω",
                    "concept": "Temperature dependence of resistance"
                }
            },
            {
                "problem": "Calculate the drift velocity of electrons in a copper wire of cross-sectional area 1 mm² carrying a current of 1 A. (Number of free electrons per m³ in copper = 8.5 × 10²⁸)",
                "difficulty": "hard",
                "solution": {
                    "given": ["I = 1 A", "A = 1 mm² = 10⁻⁶ m²", "n = 8.5 × 10²⁸ electrons/m³", "e = 1.6 × 10⁻¹⁹ C"],
                    "find": "Drift velocity, v_d",
                    "formula": "I = nAev_d",
                    "steps": [
                        {
                            "step": "Rearrange formula: v_d = I/(nAe)",
                            "work": "v_d = 1/(8.5 × 10²⁸ × 10⁻⁶ × 1.6 × 10⁻¹⁹)",
                            "result": "v_d = 1/(13.6 × 10³) ≈ 7.35 × 10⁻⁵ m/s"
                        }
                    ],
                    "answer": "7.35 × 10⁻⁵ m/s",
                    "concept": "Drift velocity and current relationship"
                }
            },
            {
                "problem": "Three resistors of 4 Ω, 6 Ω, and 12 Ω are connected in parallel to a 24 V battery. Calculate the total current drawn from the battery.",
                "difficulty": "medium",
                "solution": {
                    "given": ["R₁ = 4 Ω", "R₂ = 6 Ω", "R₃ = 12 Ω", "V = 24 V"],
                    "find": "Total current, I",
                    "formula": ["1/R_p = 1/R₁ + 1/R₂ + 1/R₃", "I = V/R_p"],
                    "steps": [
                        {
                            "step": "Find equivalent resistance R_p",
                            "work": "1/R_p = 1/4 + 1/6 + 1/12 = 3/12 + 2/12 + 1/12 = 6/12 = 1/2 ∴ R_p = 2 Ω",
                            "result": ""
                        },
                        {
                            "step": "Calculate total current",
                            "work": "I = V/R_p = 24/2",
                            "result": "I = 12 A"
                        }
                    ],
                    "answer": "12 A",
                    "concept": "Parallel resistance and Ohm's Law"
                }
            },
            {
                "problem": "A potentiometer wire of length 10 m has a resistance of 20 Ω. It is connected in series with a battery of EMF 3 V and a resistance of 10 Ω. Calculate the potential gradient along the wire.",
                "difficulty": "hard",
                "solution": {
                    "given": ["L = 10 m", "R_wire = 20 Ω", "ε = 3 V", "R_series = 10 Ω"],
                    "find": "Potential gradient, k",
                    "formula": ["k = V/L", "V = I × R_wire", "I = ε/(R_total)"],
                    "steps": [
                        {
                            "step": "Calculate total resistance R_total = R_wire + R_series",
                            "work": "R_total = 20 + 10 = 30 Ω",
                            "result": ""
                        },
                        {
                            "step": "Calculate current I",
                            "work": "I = 3/30 = 0.1 A",
                            "result": ""
                        },
                        {
                            "step": "Calculate voltage across wire V",
                            "work": "V = I × R_wire = 0.1 × 20 = 2 V",
                            "result": ""
                        },
                        {
                            "step": "Calculate potential gradient k",
                            "work": "k = V/L = 2/10 = 0.2 V/m",
                            "result": "k = 0.2 V/m"
                        }
                    ],
                    "answer": "0.2 V/m",
                    "concept": "Potentiometer and potential gradient"
                }
            },
            {
                "problem": "A 12 V battery is connected to two resistors of 3 Ω and 6 Ω in parallel. Calculate the current through each resistor and the total current.",
                "difficulty": "medium",
                "solution": {
                    "given": ["V = 12 V", "R₁ = 3 Ω", "R₂ = 6 Ω"],
                    "find": ["Current through R₁, I₁", "Current through R₂, I₂", "Total current, I"],
                    "formula": ["I = V/R", "I = I₁ + I₂"],
                    "steps": [
                        {
                            "step": "Current through 3Ω resistor",
                            "work": "I₁ = V/R₁ = 12/3 = 4 A",
                            "result": ""
                        },
                        {
                            "step": "Current through 6Ω resistor",
                            "work": "I₂ = V/R₂ = 12/6 = 2 A",
                            "result": ""
                        },
                        {
                            "step": "Total current",
                            "work": "I = I₁ + I₂ = 4 + 2 = 6 A",
                            "result": "I = 6 A"
                        }
                    ],
                    "answer": ["I₁ = 4 A", "I₂ = 2 A", "I = 6 A"],
                    "concept": "Parallel circuit analysis"
                }
            },
            {
                "problem": "A Wheatstone bridge is balanced when P = 2 Ω, Q = 3 Ω, and R = 6 Ω. Calculate the value of the unknown resistance S.",
                "difficulty": "medium",
                "solution": {
                    "given": ["P = 2 Ω", "Q = 3 Ω", "R = 6 Ω"],
                    "find": "Unknown resistance S",
                    "formula": "P/Q = R/S (for balanced bridge)",
                    "steps": [
                        {
                            "step": "Rearrange formula: S = R × Q/P",
                            "work": "S = 6 × 3/2 = 18/2",
                            "result": "S = 9 Ω"
                        }
                    ],
                    "answer": "9 Ω",
                    "concept": "Wheatstone bridge principle"
                }
            },
            {
                "problem": "A cell of EMF 2 V and internal resistance 1 Ω is connected to a resistance of 9 Ω. Calculate the terminal voltage and the power dissipated in the external resistor.",
                "difficulty": "medium",
                "solution": {
                    "given": ["ε = 2 V", "r = 1 Ω", "R = 9 Ω"],
                    "find": ["Terminal voltage V", "Power P"],
                    "formula": ["I = ε/(R + r)", "V = IR", "P = I²R"],
                    "steps": [
                        {
                            "step": "Calculate current I",
                            "work": "I = 2/(9 + 1) = 2/10 = 0.2 A",
                            "result": ""
                        },
                        {
                            "step": "Calculate terminal voltage V",
                            "work": "V = IR = 0.2 × 9 = 1.8 V",
                            "result": ""
                        },
                        {
                            "step": "Calculate power P",
                            "work": "P = I²R = (0.2)² × 9 = 0.04 × 9 = 0.36 W",
                            "result": "P = 0.36 W"
                        }
                    ],
                    "answer": ["V = 1.8 V", "P = 0.36 W"],
                    "concept": "EMF, internal resistance, and power calculation"
                }
            },
            {
                "problem": "Two cells of EMF 1.5 V and 2 V with internal resistances 0.5 Ω and 1 Ω respectively are connected in parallel. Calculate the equivalent EMF and internal resistance of the combination.",
                "difficulty": "hard",
                "solution": {
                    "given": ["ε₁ = 1.5 V, r₁ = 0.5 Ω", "ε₂ = 2 V, r₂ = 1 Ω"],
                    "find": ["Equivalent EMF ε_eq", "Equivalent internal resistance r_eq"],
                    "formula": ["ε_eq = (ε₁/r₁ + ε₂/r₂)/(1/r₁ + 1/r₂)", "1/r_eq = 1/r₁ + 1/r₂"],
                    "steps": [
                        {
                            "step": "Calculate equivalent EMF",
                            "work": "ε_eq = (1.5/0.5 + 2/1)/(1/0.5 + 1/1) = (3 + 2)/(2 + 1) = 5/3 ≈ 1.667 V",
                            "result": ""
                        },
                        {
                            "step": "Calculate equivalent internal resistance",
                            "work": "1/r_eq = 1/0.5 + 1/1 = 2 + 1 = 3 ∴ r_eq = 1/3 ≈ 0.333 Ω",
                            "result": "r_eq ≈ 0.333 Ω"
                        }
                    ],
                    "answer": ["ε_eq ≈ 1.667 V", "r_eq ≈ 0.333 Ω"],
                    "concept": "Parallel combination of cells"
                }
            },
            {
                "problem": "A 220 V, 100 W bulb is connected to a 110 V supply. Calculate the power consumed by the bulb.",
                "difficulty": "medium",
                "solution": {
                    "given": ["Rated: 220 V, 100 W", "Actual: V = 110 V"],
                    "find": "Power consumed P",
                    "formula": ["R = V_rated²/P_rated", "P_actual = V_actual²/R"],
                    "steps": [
                        {
                            "step": "Calculate resistance of bulb",
                            "work": "R = (220)²/100 = 48400/100 = 484 Ω",
                            "result": ""
                        },
                        {
                            "step": "Calculate actual power consumed",
                            "work": "P = (110)²/484 = 12100/484 = 25 W",
                            "result": "P = 25 W"
                        }
                    ],
                    "answer": "25 W",
                    "concept": "Power consumption at different voltages"
                }
            },
            {
                "problem": "A wire of resistance 5 Ω is bent into a circle. Calculate the equivalent resistance between two diametrically opposite points.",
                "difficulty": "hard",
                "solution": {
                    "given": ["Total resistance R = 5 Ω"],
                    "find": "Resistance between diametrically opposite points",
                    "formula": "Parallel combination of two equal resistances",
                    "steps": [
                        {
                            "step": "When bent into circle, each half has resistance R/2 = 2.5 Ω",
                            "work": "The two halves are in parallel between diametrically opposite points",
                            "result": ""
                        },
                        {
                            "step": "Equivalent resistance R_eq = (R₁ × R₂)/(R₁ + R₂)",
                            "work": "R_eq = (2.5 × 2.5)/(2.5 + 2.5) = 6.25/5 = 1.25 Ω",
                            "result": "R_eq = 1.25 Ω"
                        }
                    ],
                    "answer": "1.25 Ω",
                    "concept": "Equivalent resistance of special configurations"
                }
            },
            {
                "problem": "A capacitor of 100 μF is charged to 200 V. Calculate the energy stored in it.",
                "difficulty": "easy",
                "solution": {
                    "given": ["C = 100 μF = 100 × 10⁻⁶ F", "V = 200 V"],
                    "find": "Energy stored U",
                    "formula": "U = ½CV²",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "U = ½ × 100 × 10⁻⁶ × (200)² = ½ × 100 × 10⁻⁶ × 40000",
                            "result": "U = 2 J"
                        }
                    ],
                    "answer": "2 J",
                    "concept": "Energy stored in capacitor"
                }
            },
            {
                "problem": "A 12 V battery is connected to a combination of three resistors: 2 Ω, 3 Ω, and 4 Ω in series. Calculate the potential difference across the 3 Ω resistor.",
                "difficulty": "easy",
                "solution": {
                    "given": ["V = 12 V", "R₁ = 2 Ω", "R₂ = 3 Ω", "R₃ = 4 Ω (all in series)"],
                    "find": "Potential difference across 3 Ω resistor, V₂",
                    "formula": ["R_total = R₁ + R₂ + R₃", "I = V/R_total", "V₂ = IR₂"],
                    "steps": [
                        {
                            "step": "Calculate total resistance",
                            "work": "R_total = 2 + 3 + 4 = 9 Ω",
                            "result": ""
                        },
                        {
                            "step": "Calculate current I",
                            "work": "I = 12/9 = 4/3 ≈ 1.333 A",
                            "result": ""
                        },
                        {
                            "step": "Calculate voltage across 3Ω resistor",
                            "work": "V₂ = IR₂ = (4/3) × 3 = 4 V",
                            "result": "V₂ = 4 V"
                        }
                    ],
                    "answer": "4 V",
                    "concept": "Series circuit analysis"
                }
            },
            {
                "problem": "A heating element operates at 220 V and has a resistance of 88 Ω. Calculate the cost of operating it for 3 hours if electricity costs ₹7 per kWh.",
                "difficulty": "medium",
                "solution": {
                    "given": ["V = 220 V", "R = 88 Ω", "t = 3 h", "Cost = ₹7/kWh"],
                    "find": "Total cost",
                    "formula": ["P = V²/R", "Energy E = P × t", "Cost = E × rate"],
                    "steps": [
                        {
                            "step": "Calculate power P",
                            "work": "P = (220)²/88 = 48400/88 = 550 W = 0.55 kW",
                            "result": ""
                        },
                        {
                            "step": "Calculate energy consumed",
                            "work": "E = 0.55 × 3 = 1.65 kWh",
                            "result": ""
                        },
                        {
                            "step": "Calculate cost",
                            "work": "Cost = 1.65 × 7 = ₹11.55",
                            "result": "₹11.55"
                        }
                    ],
                    "answer": "₹11.55",
                    "concept": "Electrical energy cost calculation"
                }
            },
            {
                "problem": "A potentiometer wire of length 4 m has a resistance of 8 Ω. It is connected to a 2 V battery. Calculate the potential gradient along the wire.",
                "difficulty": "medium",
                "solution": {
                    "given": ["L = 4 m", "R = 8 Ω", "V = 2 V"],
                    "find": "Potential gradient k",
                    "formula": ["k = V/L"],
                    "steps": [
                        {
                            "step": "Since the entire voltage is across the wire",
                            "work": "k = 2/4 = 0.5 V/m",
                            "result": "k = 0.5 V/m"
                        }
                    ],
                    "answer": "0.5 V/m",
                    "concept": "Potential gradient in potentiometer"
                }
            },
            {
                "problem": "A network of resistors is arranged with three 6 Ω resistors in a delta formation. Calculate the equivalent star resistance.",
                "difficulty": "hard",
                "solution": {
                    "given": ["Three resistors R = 6 Ω in delta formation"],
                    "find": "Equivalent star resistance for each arm",
                    "formula": "R_star = (R_delta₁ × R_delta₂)/(R_delta₁ + R_delta₂ + R_delta₃)",
                    "steps": [
                        {
                            "step": "For identical delta resistors, each star resistance is R/3",
                            "work": "R_star = 6/3 = 2 Ω",
                            "result": "Each star resistance = 2 Ω"
                        }
                    ],
                    "answer": "2 Ω",
                    "concept": "Delta-Star transformation"
                }
            },
            {
                "problem": "A cell of EMF 1.8 V and internal resistance 0.2 Ω is connected to a resistor of 3.8 Ω. Calculate the current in the circuit and the terminal voltage.",
                "difficulty": "medium",
                "solution": {
                    "given": ["ε = 1.8 V", "r = 0.2 Ω", "R = 3.8 Ω"],
                    "find": ["Current I", "Terminal voltage V"],
                    "formula": ["I = ε/(R + r)", "V = IR"],
                    "steps": [
                        {
                            "step": "Calculate current I",
                            "work": "I = 1.8/(3.8 + 0.2) = 1.8/4 = 0.45 A",
                            "result": ""
                        },
                        {
                            "step": "Calculate terminal voltage V",
                            "work": "V = IR = 0.45 × 3.8 = 1.71 V",
                            "result": "V = 1.71 V"
                        }
                    ],
                    "answer": ["I = 0.45 A", "V = 1.71 V"],
                    "concept": "EMF and internal resistance"
                }
            },
            {
                "problem": "A 60 W bulb and a 100 W bulb are designed to operate at 220 V. Which bulb has a thicker filament?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Bulb A: 60 W, 220 V", "Bulb B: 100 W, 220 V"],
                    "find": "Which bulb has thicker filament?",
                    "formula": ["R = V²/P", "R ∝ 1/A (for same material and length)"],
                    "steps": [
                        {
                            "step": "Calculate resistance of 60W bulb",
                            "work": "R₆₀ = (220)²/60 = 48400/60 ≈ 806.67 Ω",
                            "result": ""
                        },
                        {
                            "step": "Calculate resistance of 100W bulb",
                            "work": "R₁₀₀ = (220)²/100 = 48400/100 = 484 Ω",
                            "result": ""
                        },
                        {
                            "step": "Compare resistances",
                            "work": "R₆₀ > R₁₀₀, so 60W bulb has thinner filament (higher resistance means smaller cross-sectional area)",
                            "result": "The 100W bulb has a thicker filament."
                        }
                    ],
                    "answer": "The 100W bulb has a thicker filament.",
                    "concept": "Relationship between power, resistance, and filament thickness"
                }
            },
            {
                "problem": "A wire of resistivity 1.7 × 10⁻⁸ Ωm has a resistance of 0.34 Ω. If its length is 2 m, calculate its cross-sectional area.",
                "difficulty": "easy",
                "solution": {
                    "given": ["ρ = 1.7 × 10⁻⁸ Ωm", "R = 0.34 Ω", "L = 2 m"],
                    "find": "Cross-sectional area A",
                    "formula": "R = ρL/A",
                    "steps": [
                        {
                            "step": "Rearrange formula: A = ρL/R",
                            "work": "A = (1.7 × 10⁻⁸ × 2)/0.34 = (3.4 × 10⁻⁸)/0.34",
                            "result": "A = 10⁻⁷ m² = 0.1 mm²"
                        }
                    ],
                    "answer": "10⁻⁷ m² (0.1 mm²)",
                    "concept": "Resistivity and resistance relationship"
                }
            },
            {
                "problem": "A battery of EMF 12 V and internal resistance 1 Ω is connected to a variable resistor. Calculate the maximum power that can be delivered to the resistor.",
                "difficulty": "hard",
                "solution": {
                    "given": ["ε = 12 V", "r = 1 Ω"],
                    "find": "Maximum power P_max",
                    "formula": "Maximum power transfer occurs when R = r, and P_max = ε²/(4r)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "P_max = (12)²/(4 × 1) = 144/4",
                            "result": "P_max = 36 W"
                        }
                    ],
                    "answer": "36 W",
                    "concept": "Maximum power transfer theorem"
                }
            },
            {
                "problem": "A circuit contains two resistors of 4 Ω and 6 Ω in parallel, connected in series with a 5 Ω resistor. The combination is connected to a 12 V battery. Calculate the current through the 5 Ω resistor.",
                "difficulty": "medium",
                "solution": {
                    "given": ["R₁ = 4 Ω", "R₂ = 6 Ω (parallel)", "R₃ = 5 Ω (series)", "V = 12 V"],
                    "find": "Current through R₃, I",
                    "formula": ["1/R_p = 1/R₁ + 1/R₂", "R_total = R_p + R₃", "I = V/R_total"],
                    "steps": [
                        {
                            "step": "Calculate parallel equivalent resistance",
                            "work": "1/R_p = 1/4 + 1/6 = 3/12 + 2/12 = 5/12 ∴ R_p = 12/5 = 2.4 Ω",
                            "result": ""
                        },
                        {
                            "step": "Calculate total resistance",
                            "work": "R_total = 2.4 + 5 = 7.4 Ω",
                            "result": ""
                        },
                        {
                            "step": "Calculate current",
                            "work": "I = 12/7.4 ≈ 1.62 A",
                            "result": "I ≈ 1.62 A"
                        }
                    ],
                    "answer": "1.62 A",
                    "concept": "Series-parallel circuit analysis"
                }
            },
            {
                "problem": "A galvanometer of resistance 20 Ω shows full-scale deflection for 1 mA current. Calculate the shunt resistance required to convert it into an ammeter of range 0-1 A.",
                "difficulty": "hard",
                "solution": {
                    "given": ["G = 20 Ω", "I_g = 1 mA = 0.001 A", "I = 1 A"],
                    "find": "Shunt resistance S",
                    "formula": "S = (I_g × G)/(I - I_g)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "S = (0.001 × 20)/(1 - 0.001) = 0.02/0.999 ≈ 0.02002 Ω",
                            "result": "S ≈ 0.02 Ω"
                        }
                    ],
                    "answer": "0.02 Ω",
                    "concept": "Conversion of galvanometer to ammeter"
                }
            },
            {
                "problem": "A wire of resistance 8 Ω is stretched to double its length while keeping volume constant. Calculate its new resistance.",
                "difficulty": "medium",
                "solution": {
                    "given": ["R₁ = 8 Ω", "L₂ = 2L₁", "Volume constant: A₂ = A₁/2"],
                    "find": "New resistance R₂",
                    "formula": "R = ρL/A",
                    "steps": [
                        {
                            "step": "New resistance R₂ = ρL₂/A₂ = ρ(2L₁)/(A₁/2) = 4(ρL₁/A₁)",
                            "work": "R₂ = 4 × R₁ = 4 × 8",
                            "result": "R₂ = 32 Ω"
                        }
                    ],
                    "answer": "32 Ω",
                    "concept": "Effect of stretching on resistance"
                }
            },
            {
                "problem": "A battery of EMF 6 V and internal resistance 0.5 Ω is connected to a resistor of 3.5 Ω. Calculate the terminal voltage and the power dissipated in the external resistor.",
                "difficulty": "medium",
                "solution": {
                    "given": ["ε = 6 V", "r = 0.5 Ω", "R = 3.5 Ω"],
                    "find": ["Terminal voltage V", "Power P"],
                    "formula": ["I = ε/(R + r)", "V = IR", "P = I²R"],
                    "steps": [
                        {
                            "step": "Calculate current I",
                            "work": "I = 6/(3.5 + 0.5) = 6/4 = 1.5 A",
                            "result": ""
                        },
                        {
                            "step": "Calculate terminal voltage V",
                            "work": "V = IR = 1.5 × 3.5 = 5.25 V",
                            "result": ""
                        },
                        {
                            "step": "Calculate power P",
                            "work": "P = I²R = (1.5)² × 3.5 = 2.25 × 3.5 = 7.875 W",
                            "result": "P = 7.875 W"
                        }
                    ],
                    "answer": ["V = 5.25 V", "P = 7.875 W"],
                    "concept": "EMF, internal resistance, and power calculation"
                }
            },
            {
                "problem": "A potentiometer wire of length 5 m has a resistance of 10 Ω. It is connected to a 4 V battery. Calculate the potential gradient along the wire.",
                "difficulty": "medium",
                "solution": {
                    "given": ["L = 5 m", "R = 10 Ω", "V = 4 V"],
                    "find": "Potential gradient k",
                    "formula": "k = V/L",
                    "steps": [
                        {
                            "step": "Since the entire voltage is across the wire",
                            "work": "k = 4/5 = 0.8 V/m",
                            "result": "k = 0.8 V/m"
                        }
                    ],
                    "answer": "0.8 V/m",
                    "concept": "Potential gradient in potentiometer"
                }
            },
            {
                "problem": "Two resistors of 3 Ω and 6 Ω are connected in parallel, and this combination is connected in series with a 4 Ω resistor. The entire circuit is connected to a 12 V battery. Calculate the current through the 4 Ω resistor.",
                "difficulty": "medium",
                "solution": {
                    "given": ["R₁ = 3 Ω", "R₂ = 6 Ω (parallel)", "R₃ = 4 Ω (series)", "V = 12 V"],
                    "find": "Current through R₃, I",
                    "formula": ["1/R_p = 1/R₁ + 1/R₂", "R_total = R_p + R₃", "I = V/R_total"],
                    "steps": [
                        {
                            "step": "Calculate parallel equivalent resistance",
                            "work": "1/R_p = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 ∴ R_p = 2 Ω",
                            "result": ""
                        },
                        {
                            "step": "Calculate total resistance",
                            "work": "R_total = 2 + 4 = 6 Ω",
                            "result": ""
                        },
                        {
                            "step": "Calculate current",
                            "work": "I = 12/6 = 2 A",
                            "result": "I = 2 A"
                        }
                    ],
                    "answer": "2 A",
                    "concept": "Series-parallel circuit analysis"
                }
            },
            {
                "problem": "A galvanometer of resistance 50 Ω shows full-scale deflection for 2 mA current. Calculate the series resistance required to convert it into a voltmeter of range 0-10 V.",
                "difficulty": "hard",
                "solution": {
                    "given": ["G = 50 Ω", "I_g = 2 mA = 0.002 A", "V = 10 V"],
                    "find": "Series resistance R",
                    "formula": "R = (V/I_g) - G",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "R = (10/0.002) - 50 = 5000 - 50 = 4950 Ω",
                            "result": "R = 4950 Ω"
                        }
                    ],
                    "answer": "4950 Ω",
                    "concept": "Conversion of galvanometer to voltmeter"
                }
            },
            {
                "problem": "A wire of resistance 12 Ω is bent into an equilateral triangle. Calculate the equivalent resistance between any two vertices.",
                "difficulty": "hard",
                "solution": {
                    "given": ["Total resistance R = 12 Ω"],
                    "find": "Resistance between two vertices",
                    "formula": "Parallel combination of two resistances",
                    "steps": [
                        {
                            "step": "Each side has resistance R/3 = 4 Ω",
                            "work": "Between two vertices: one path is one side (4 Ω), other path is two sides in series (8 Ω)",
                            "result": ""
                        },
                        {
                            "step": "Equivalent resistance R_eq = (4 × 8)/(4 + 8) = 32/12 ≈ 2.67 Ω",
                            "work": "",
                            "result": "R_eq ≈ 2.67 Ω"
                        }
                    ],
                    "answer": "2.67 Ω",
                    "concept": "Equivalent resistance of special configurations"
                }
            },
            {
                "problem": "A battery of EMF 9 V and internal resistance 1 Ω is connected to a resistor of 8 Ω. Calculate the terminal voltage and the power dissipated in the external resistor.",
                "difficulty": "medium",
                "solution": {
                    "given": ["ε = 9 V", "r = 1 Ω", "R = 8 Ω"],
                    "find": ["Terminal voltage V", "Power P"],
                    "formula": ["I = ε/(R + r)", "V = IR", "P = I²R"],
                    "steps": [
                        {
                            "step": "Calculate current I",
                            "work": "I = 9/(8 + 1) = 9/9 = 1 A",
                            "result": ""
                        },
                        {
                            "step": "Calculate terminal voltage V",
                            "work": "V = IR = 1 × 8 = 8 V",
                            "result": ""
                        },
                        {
                            "step": "Calculate power P",
                            "work": "P = I²R = (1)² × 8 = 8 W",
                            "result": "P = 8 W"
                        }
                    ],
                    "answer": ["V = 8 V", "P = 8 W"],
                    "concept": "EMF, internal resistance, and power calculation"
                }
            }

        ]
    },

    "thermodynamics_and_heat": {
        "title": "Thermodynamics and Heat",
        "weightage": "7–9%",
        "introduction": "Thermodynamics is the branch of physics that deals with heat, work, temperature, and their relation to energy, radiation, and physical properties of matter. This chapter covers the laws of thermodynamics, heat transfer mechanisms, thermal properties of matter, and kinetic theory of gases. A strong understanding of thermodynamics is crucial for fields ranging from engineering to meteorology and is essential for competitive exams like NEET.",

        "topics": [
            {
                "name": "Temperature and Heat",
                "description": "Fundamental concepts of temperature, heat transfer, and thermal expansion.",
                "subtopics": [
                    {
                        "name": "Temperature Scales",
                        "explanation": "Conversion between Celsius, Fahrenheit, and Kelvin scales. Absolute zero = -273.15°C = 0K."
                    },
                    {
                        "name": "Heat Transfer",
                        "explanation": "Conduction (through material), convection (through fluid movement), and radiation (through electromagnetic waves)."
                    },
                    {
                        "name": "Thermal Expansion",
                        "explanation": "Linear expansion: ΔL = αLΔT, Area expansion: ΔA = βAΔT, Volume expansion: ΔV = γVΔT, where β = 2α and γ = 3α."
                    }
                ]
            },
            {
                "name": "Calorimetry",
                "description": "Measurement of heat transfer and specific heat capacities.",
                "subtopics": [
                    {
                        "name": "Specific Heat Capacity",
                        "explanation": "Amount of heat required to raise the temperature of unit mass by 1°C. Q = mcΔT."
                    },
                    {
                        "name": "Latent Heat",
                        "explanation": "Heat required for phase change without temperature change. Q = mL, where L is latent heat of fusion/vaporization."
                    },
                    {
                        "name": "Principle of Calorimetry",
                        "explanation": "Heat lost by hot body = Heat gained by cold body (assuming no heat loss to surroundings)."
                    }
                ]
            },
            {
                "name": "Kinetic Theory of Gases",
                "description": "Microscopic explanation of gas behavior based on molecular motion.",
                "subtopics": [
                    {
                        "name": "Ideal Gas Equation",
                        "explanation": "PV = nRT, where P is pressure, V is volume, n is number of moles, R is gas constant, and T is temperature."
                    },
                    {
                        "name": "RMS Speed",
                        "explanation": "Root mean square speed of gas molecules: v_rms = √(3RT/M) = √(3P/ρ), where M is molar mass and ρ is density."
                    },
                    {
                        "name": "Mean Free Path",
                        "explanation": "Average distance traveled by a molecule between successive collisions: λ = 1/(√2πd²n), where d is molecular diameter and n is number density."
                    }
                ]
            },
            {
                "name": "Laws of Thermodynamics",
                "description": "Fundamental principles governing energy transfer and conversion.",
                "subtopics": [
                    {
                        "name": "Zeroth Law",
                        "explanation": "If two systems are in thermal equilibrium with a third system, they are in thermal equilibrium with each other. Defines temperature."
                    },
                    {
                        "name": "First Law",
                        "explanation": "ΔU = Q - W, where ΔU is change in internal energy, Q is heat supplied, and W is work done by the system."
                    },
                    {
                        "name": "Second Law",
                        "explanation": "Heat cannot spontaneously flow from a colder to a hotter body. Entropy of an isolated system never decreases."
                    }
                ]
            },
            {
                "name": "Thermodynamic Processes",
                "description": "Different paths by which a system can change its state.",
                "subtopics": [
                    {
                        "name": "Isobaric Process",
                        "explanation": "Constant pressure process. Work done W = PΔV."
                    },
                    {
                        "name": "Isochoric Process",
                        "explanation": "Constant volume process. Work done W = 0."
                    },
                    {
                        "name": "Isothermal Process",
                        "explanation": "Constant temperature process. For ideal gas: PV = constant."
                    },
                    {
                        "name": "Adiabatic Process",
                        "explanation": "No heat exchange with surroundings. For ideal gas: PV^γ = constant, where γ = C_p/C_v."
                    }
                ]
            },
            {
                "name": "Heat Engines and Refrigerators",
                "description": "Devices that convert heat to work and vice versa.",
                "subtopics": [
                    {
                        "name": "Carnot Engine",
                        "explanation": "The most efficient heat engine operating between two temperatures. Efficiency η = 1 - T₂/T₁, where T₁ > T₂ are reservoir temperatures in Kelvin."
                    },
                    {
                        "name": "Refrigerator",
                        "explanation": "Device that transfers heat from cold to hot reservoir with work input. Coefficient of performance COP = Q₂/W = T₂/(T₁ - T₂)."
                    }
                ]
            }
        ],

        "formulas": {
            "Thermal Expansion": [
                {
                    "name": "Linear Expansion",
                    "expression": "ΔL = αLΔT",
                    "description": "Change in length due to temperature change, where α is coefficient of linear expansion."
                },
                {
                    "name": "Volume Expansion",
                    "expression": "ΔV = γVΔT",
                    "description": "Change in volume due to temperature change, where γ is coefficient of volume expansion (γ = 3α)."
                }
            ],
            "Calorimetry": [
                {
                    "name": "Heat Transfer",
                    "expression": "Q = mcΔT",
                    "description": "Heat required to change temperature, where m is mass, c is specific heat capacity."
                },
                {
                    "name": "Latent Heat",
                    "expression": "Q = mL",
                    "description": "Heat required for phase change, where L is latent heat of fusion/vaporization."
                }
            ],
            "Kinetic Theory": [
                {
                    "name": "Ideal Gas Law",
                    "expression": "PV = nRT",
                    "description": "Relationship between pressure, volume, temperature for ideal gas, where R = 8.314 J/mol·K."
                },
                {
                    "name": "RMS Speed",
                    "expression": "v_rms = √(3RT/M)",
                    "description": "Root mean square speed of gas molecules, where M is molar mass."
                }
            ],
            "Thermodynamics": [
                {
                    "name": "First Law",
                    "expression": "ΔU = Q - W",
                    "description": "Conservation of energy principle for thermodynamic systems."
                },
                {
                    "name": "Work Done",
                    "expression": "W = ∫PdV",
                    "description": "Work done in a thermodynamic process."
                },
                {
                    "name": "Carnot Efficiency",
                    "expression": "η = 1 - T₂/T₁",
                    "description": "Maximum possible efficiency for a heat engine operating between two temperatures."
                }
            ]
        },

        "problems": [
            {
                "problem": "Convert 98.6°F to Celsius and Kelvin scales.",
                "difficulty": "easy",
                "solution": {
                    "given": ["T_F = 98.6°F"],
                    "find": ["Temperature in Celsius", "Temperature in Kelvin"],
                    "formula": ["°C = (5/9)(°F - 32)", "K = °C + 273.15"],
                    "steps": [
                        {
                            "step": "Convert to Celsius",
                            "work": "°C = (5/9)(98.6 - 32) = (5/9)(66.6) = 37°C",
                            "result": ""
                        },
                        {
                            "step": "Convert to Kelvin",
                            "work": "K = 37 + 273.15 = 310.15 K",
                            "result": "310.15 K"
                        }
                    ],
                    "answer": ["37°C", "310.15 K"],
                    "concept": "Temperature scale conversion"
                }
            },
            {
                "problem": "A steel rail of length 30 m is laid at 20°C. Calculate its length on a hot day when the temperature is 40°C. (α_steel = 1.2 × 10⁻⁵ /°C)",
                "difficulty": "easy",
                "solution": {
                    "given": ["L = 30 m", "T₁ = 20°C", "T₂ = 40°C", "α = 1.2 × 10⁻⁵ /°C"],
                    "find": "New length L'",
                    "formula": "ΔL = αLΔT",
                    "steps": [
                        {
                            "step": "Calculate temperature difference",
                            "work": "ΔT = 40 - 20 = 20°C",
                            "result": ""
                        },
                        {
                            "step": "Calculate change in length",
                            "work": "ΔL = (1.2 × 10⁻⁵) × 30 × 20 = 7.2 × 10⁻³ m = 7.2 mm",
                            "result": ""
                        },
                        {
                            "step": "Calculate new length",
                            "work": "L' = L + ΔL = 30 + 0.0072 = 30.0072 m",
                            "result": "30.0072 m"
                        }
                    ],
                    "answer": "30.0072 m",
                    "concept": "Linear thermal expansion"
                }
            },
            {
                "problem": "Calculate the amount of heat required to convert 500 g of ice at -10°C to steam at 120°C. (c_ice = 2100 J/kg·K, c_water = 4186 J/kg·K, c_steam = 2010 J/kg·K, L_f = 3.34 × 10⁵ J/kg, L_v = 2.26 × 10⁶ J/kg)",
                "difficulty": "hard",
                "solution": {
                    "given": ["m = 500 g = 0.5 kg", "T_initial = -10°C", "T_final = 120°C", "c_ice = 2100 J/kg·K", "c_water = 4186 J/kg·K", "c_steam = 2010 J/kg·K", "L_f = 3.34 × 10⁵ J/kg", "L_v = 2.26 × 10⁶ J/kg"],
                    "find": "Total heat required Q_total",
                    "formula": ["Q = mcΔT", "Q = mL"],
                    "steps": [
                        {
                            "step": "Heat ice from -10°C to 0°C",
                            "work": "Q₁ = 0.5 × 2100 × 10 = 10,500 J",
                            "result": ""
                        },
                        {
                            "step": "Melt ice at 0°C",
                            "work": "Q₂ = 0.5 × 3.34 × 10⁵ = 167,000 J",
                            "result": ""
                        },
                        {
                            "step": "Heat water from 0°C to 100°C",
                            "work": "Q₃ = 0.5 × 4186 × 100 = 209,300 J",
                            "result": ""
                        },
                        {
                            "step": "Vaporize water at 100°C",
                            "work": "Q₄ = 0.5 × 2.26 × 10⁶ = 1,130,000 J",
                            "result": ""
                        },
                        {
                            "step": "Heat steam from 100°C to 120°C",
                            "work": "Q₅ = 0.5 × 2010 × 20 = 20,100 J",
                            "result": ""
                        },
                        {
                            "step": "Total heat required",
                            "work": "Q_total = Q₁ + Q₂ + Q₃ + Q₄ + Q₅ = 10,500 + 167,000 + 209,300 + 1,130,000 + 20,100 = 1,536,900 J",
                            "result": "1,536.9 kJ"
                        }
                    ],
                    "answer": "1,536.9 kJ",
                    "concept": "Calorimetry and phase changes"
                }
            },
            {
                "problem": "A gas occupies 2.0 L at 27°C and 1.0 atm pressure. Calculate its volume at 127°C and 2.0 atm pressure.",
                "difficulty": "medium",
                "solution": {
                    "given": ["V₁ = 2.0 L", "T₁ = 27°C = 300 K", "P₁ = 1.0 atm", "T₂ = 127°C = 400 K", "P₂ = 2.0 atm"],
                    "find": "Volume V₂",
                    "formula": "P₁V₁/T₁ = P₂V₂/T₂ (Combined Gas Law)",
                    "steps": [
                        {
                            "step": "Rearrange formula",
                            "work": "V₂ = (P₁V₁T₂)/(P₂T₁)",
                            "result": ""
                        },
                        {
                            "step": "Substitute values",
                            "work": "V₂ = (1.0 × 2.0 × 400)/(2.0 × 300) = 800/600 = 1.333 L",
                            "result": "1.333 L"
                        }
                    ],
                    "answer": "1.333 L",
                    "concept": "Ideal gas law applications"
                }
            },
            {
                "problem": "Calculate the RMS speed of oxygen molecules at 27°C. (Molar mass of O₂ = 32 g/mol, R = 8.314 J/mol·K)",
                "difficulty": "medium",
                "solution": {
                    "given": ["T = 27°C = 300 K", "M = 32 g/mol = 0.032 kg/mol", "R = 8.314 J/mol·K"],
                    "find": "RMS speed v_rms",
                    "formula": "v_rms = √(3RT/M)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "v_rms = √(3 × 8.314 × 300 / 0.032) = √(7482.6 / 0.032) = √(233,831.25)",
                            "result": "v_rms = 483.6 m/s"
                        }
                    ],
                    "answer": "483.6 m/s",
                    "concept": "Kinetic theory of gases"
                }
            },
            {
                "problem": "A system absorbs 500 J of heat and does 200 J of work on its surroundings. Calculate the change in its internal energy.",
                "difficulty": "easy",
                "solution": {
                    "given": ["Q = 500 J", "W = 200 J"],
                    "find": "Change in internal energy ΔU",
                    "formula": "ΔU = Q - W (First Law of Thermodynamics)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "ΔU = 500 - 200 = 300 J",
                            "result": "ΔU = 300 J"
                        }
                    ],
                    "answer": "300 J",
                    "concept": "First law of thermodynamics"
                }
            },
            {
                "problem": "A Carnot engine operates between 227°C and 27°C. Calculate its efficiency.",
                "difficulty": "medium",
                "solution": {
                    "given": ["T₁ = 227°C = 500 K", "T₂ = 27°C = 300 K"],
                    "find": "Efficiency η",
                    "formula": "η = 1 - T₂/T₁",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "η = 1 - 300/500 = 1 - 0.6 = 0.4",
                            "result": "η = 40%"
                        }
                    ],
                    "answer": "40%",
                    "concept": "Carnot engine efficiency"
                }
            },
            {
                "problem": "One mole of an ideal gas expands isothermally at 27°C from 2 L to 4 L. Calculate the work done by the gas. (R = 8.314 J/mol·K)",
                "difficulty": "hard",
                "solution": {
                    "given": ["n = 1 mol", "T = 27°C = 300 K", "V₁ = 2 L", "V₂ = 4 L", "R = 8.314 J/mol·K"],
                    "find": "Work done W",
                    "formula": "W = nRT ln(V₂/V₁) (for isothermal process)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "W = 1 × 8.314 × 300 × ln(4/2) = 2494.2 × ln(2) = 2494.2 × 0.6931",
                            "result": "W = 1729 J"
                        }
                    ],
                    "answer": "1729 J",
                    "concept": "Work done in isothermal process"
                }
            },
            {
                "problem": "A refrigerator operates between -3°C and 27°C. Calculate its coefficient of performance.",
                "difficulty": "hard",
                "solution": {
                    "given": ["T₂ = -3°C = 270 K", "T₁ = 27°C = 300 K"],
                    "find": "Coefficient of performance COP",
                    "formula": "COP = T₂/(T₁ - T₂)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "COP = 270/(300 - 270) = 270/30 = 9",
                            "result": "COP = 9"
                        }
                    ],
                    "answer": "9",
                    "concept": "Refrigerator performance"
                }
            },
            {
                "problem": "A copper rod of length 1.5 m and cross-sectional area 2 cm² is heated from 20°C to 80°C. Calculate the force required to prevent its expansion. (α_copper = 1.7 × 10⁻⁵ /°C, Y_copper = 1.1 × 10¹¹ N/m²)",
                "difficulty": "hard",
                "solution": {
                    "given": ["L = 1.5 m", "A = 2 cm² = 2 × 10⁻⁴ m²", "ΔT = 60°C", "α = 1.7 × 10⁻⁵ /°C", "Y = 1.1 × 10¹¹ N/m²"],
                    "find": "Force F required",
                    "formula": ["ΔL = αLΔT", "Stress = Y × Strain", "F = A × Stress"],
                    "steps": [
                        {
                            "step": "Calculate thermal strain",
                            "work": "Strain = αΔT = 1.7 × 10⁻⁵ × 60 = 1.02 × 10⁻³",
                            "result": ""
                        },
                        {
                            "step": "Calculate stress required",
                            "work": "Stress = Y × Strain = 1.1 × 10¹¹ × 1.02 × 10⁻³ = 1.122 × 10⁸ N/m²",
                            "result": ""
                        },
                        {
                            "step": "Calculate force required",
                            "work": "F = A × Stress = 2 × 10⁻⁴ × 1.122 × 10⁸ = 22,440 N",
                            "result": "F = 22,440 N"
                        }
                    ],
                    "answer": "22,440 N",
                    "concept": "Thermal stress and strain"
                }
            },
            {
                "problem": "A copper sphere of radius 10 cm is heated from 20°C to 120°C. Calculate the increase in its surface area. (α_copper = 1.7 × 10⁻⁵ /°C)",
                "difficulty": "medium",
                "solution": {
                    "given": ["r = 10 cm = 0.1 m", "T₁ = 20°C", "T₂ = 120°C", "α = 1.7 × 10⁻⁵ /°C"],
                    "find": "Increase in surface area ΔA",
                    "formula": ["ΔA = βAΔT", "β = 2α", "A = 4πr²"],
                    "steps": [
                        {
                            "step": "Calculate temperature difference",
                            "work": "ΔT = 120 - 20 = 100°C",
                            "result": ""
                        },
                        {
                            "step": "Calculate initial surface area",
                            "work": "A = 4π(0.1)² = 0.04π m²",
                            "result": ""
                        },
                        {
                            "step": "Calculate area coefficient β",
                            "work": "β = 2α = 3.4 × 10⁻⁵ /°C",
                            "result": ""
                        },
                        {
                            "step": "Calculate increase in area",
                            "work": "ΔA = βAΔT = 3.4 × 10⁻⁵ × 0.04π × 100 = 4.27 × 10⁻⁴ m²",
                            "result": "ΔA = 4.27 cm²"
                        }
                    ],
                    "answer": "4.27 cm²",
                    "concept": "Area thermal expansion"
                }
            },
            {
                "problem": "Calculate the amount of heat required to convert 200 g of ice at -10°C to water at 20°C. (c_ice = 2100 J/kg·K, c_water = 4186 J/kg·K, L_f = 3.34 × 10⁵ J/kg)",
                "difficulty": "medium",
                "solution": {
                    "given": ["m = 200 g = 0.2 kg", "T_initial = -10°C", "T_final = 20°C", "c_ice = 2100 J/kg·K", "c_water = 4186 J/kg·K", "L_f = 3.34 × 10⁵ J/kg"],
                    "find": "Total heat required Q_total",
                    "formula": ["Q = mcΔT", "Q = mL"],
                    "steps": [
                        {
                            "step": "Heat ice from -10°C to 0°C",
                            "work": "Q₁ = 0.2 × 2100 × 10 = 4200 J",
                            "result": ""
                        },
                        {
                            "step": "Melt ice at 0°C",
                            "work": "Q₂ = 0.2 × 3.34 × 10⁵ = 66,800 J",
                            "result": ""
                        },
                        {
                            "step": "Heat water from 0°C to 20°C",
                            "work": "Q₃ = 0.2 × 4186 × 20 = 16,744 J",
                            "result": ""
                        },
                        {
                            "step": "Total heat required",
                            "work": "Q_total = Q₁ + Q₂ + Q₃ = 4200 + 66,800 + 16,744 = 87,744 J",
                            "result": "87.744 kJ"
                        }
                    ],
                    "answer": "87.744 kJ",
                    "concept": "Calorimetry and phase changes"
                }
            },
            {
                "problem": "A gas at 27°C occupies 5.0 L volume at 2.0 atm pressure. Calculate the number of moles of gas. (R = 0.0821 L·atm/mol·K)",
                "difficulty": "easy",
                "solution": {
                    "given": ["T = 27°C = 300 K", "V = 5.0 L", "P = 2.0 atm", "R = 0.0821 L·atm/mol·K"],
                    "find": "Number of moles n",
                    "formula": "PV = nRT",
                    "steps": [
                        {
                            "step": "Rearrange formula",
                            "work": "n = PV/RT",
                            "result": ""
                        },
                        {
                            "step": "Substitute values",
                            "work": "n = (2.0 × 5.0)/(0.0821 × 300) = 10/24.63 = 0.406 mol",
                            "result": "n = 0.406 mol"
                        }
                    ],
                    "answer": "0.406 mol",
                    "concept": "Ideal gas law"
                }
            },
            {
                "problem": "Calculate the RMS speed of nitrogen molecules at 127°C. (Molar mass of N₂ = 28 g/mol, R = 8.314 J/mol·K)",
                "difficulty": "medium",
                "solution": {
                    "given": ["T = 127°C = 400 K", "M = 28 g/mol = 0.028 kg/mol", "R = 8.314 J/mol·K"],
                    "find": "RMS speed v_rms",
                    "formula": "v_rms = √(3RT/M)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "v_rms = √(3 × 8.314 × 400 / 0.028) = √(9976.8 / 0.028) = √(356,314.3)",
                            "result": "v_rms = 597.0 m/s"
                        }
                    ],
                    "answer": "597.0 m/s",
                    "concept": "Kinetic theory of gases"
                }
            },
            {
                "problem": "A system undergoes a process where it absorbs 800 J of heat and its internal energy increases by 500 J. Calculate the work done by the system.",
                "difficulty": "easy",
                "solution": {
                    "given": ["Q = 800 J", "ΔU = 500 J"],
                    "find": "Work done W",
                    "formula": "ΔU = Q - W",
                    "steps": [
                        {
                            "step": "Rearrange formula",
                            "work": "W = Q - ΔU",
                            "result": ""
                        },
                        {
                            "step": "Substitute values",
                            "work": "W = 800 - 500 = 300 J",
                            "result": "W = 300 J"
                        }
                    ],
                    "answer": "300 J",
                    "concept": "First law of thermodynamics"
                }
            },
            {
                "problem": "A Carnot engine has an efficiency of 40%. If the temperature of the sink is 27°C, calculate the temperature of the source.",
                "difficulty": "medium",
                "solution": {
                    "given": ["η = 40% = 0.4", "T₂ = 27°C = 300 K"],
                    "find": "Temperature of source T₁",
                    "formula": "η = 1 - T₂/T₁",
                    "steps": [
                        {
                            "step": "Rearrange formula",
                            "work": "T₁ = T₂/(1 - η)",
                            "result": ""
                        },
                        {
                            "step": "Substitute values",
                            "work": "T₁ = 300/(1 - 0.4) = 300/0.6 = 500 K = 227°C",
                            "result": "227°C"
                        }
                    ],
                    "answer": "227°C",
                    "concept": "Carnot engine efficiency"
                }
            },
            {
                "problem": "One mole of an ideal gas is compressed adiabatically. The initial temperature and volume are 27°C and 4.0 L respectively. If the final volume is 1.0 L, calculate the final temperature. (γ = 1.4)",
                "difficulty": "hard",
                "solution": {
                    "given": ["n = 1 mol", "T₁ = 27°C = 300 K", "V₁ = 4.0 L", "V₂ = 1.0 L", "γ = 1.4"],
                    "find": "Final temperature T₂",
                    "formula": "T₁V₁^(γ-1) = T₂V₂^(γ-1) (for adiabatic process)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "300 × (4.0)^(0.4) = T₂ × (1.0)^(0.4)",
                            "result": "300 × 1.741 = T₂ × 1"
                        },
                        {
                            "step": "Calculate T₂",
                            "work": "T₂ = 300 × 1.741 = 522.3 K = 249.3°C",
                            "result": "249.3°C"
                        }
                    ],
                    "answer": "249.3°C",
                    "concept": "Adiabatic process"
                }
            },
            {
                "problem": "A refrigerator has a coefficient of performance of 5. If it extracts 2000 J of heat from the cold reservoir, calculate the work done and heat rejected to the hot reservoir.",
                "difficulty": "medium",
                "solution": {
                    "given": ["COP = 5", "Q₂ = 2000 J"],
                    "find": ["Work done W", "Heat rejected Q₁"],
                    "formula": ["COP = Q₂/W", "Q₁ = Q₂ + W"],
                    "steps": [
                        {
                            "step": "Calculate work done",
                            "work": "W = Q₂/COP = 2000/5 = 400 J",
                            "result": ""
                        },
                        {
                            "step": "Calculate heat rejected",
                            "work": "Q₁ = Q₂ + W = 2000 + 400 = 2400 J",
                            "result": "Q₁ = 2400 J"
                        }
                    ],
                    "answer": ["W = 400 J", "Q₁ = 2400 J"],
                    "concept": "Refrigerator performance"
                }
            },
            {
                "problem": "A steel bridge is 500 m long at 20°C. Calculate the change in its length when the temperature drops to -10°C. (α_steel = 1.2 × 10⁻⁵ /°C)",
                "difficulty": "easy",
                "solution": {
                    "given": ["L = 500 m", "T₁ = 20°C", "T₂ = -10°C", "α = 1.2 × 10⁻⁵ /°C"],
                    "find": "Change in length ΔL",
                    "formula": "ΔL = αLΔT",
                    "steps": [
                        {
                            "step": "Calculate temperature difference",
                            "work": "ΔT = -10 - 20 = -30°C",
                            "result": ""
                        },
                        {
                            "step": "Calculate change in length",
                            "work": "ΔL = 1.2 × 10⁻⁵ × 500 × (-30) = -0.18 m",
                            "result": "ΔL = -18 cm (contraction)"
                        }
                    ],
                    "answer": "-18 cm",
                    "concept": "Linear thermal expansion"
                }
            },
            {
                "problem": "Calculate the mean free path of oxygen molecules at STP. (Molecular diameter = 3.6 × 10⁻¹⁰ m, Boltzmann constant = 1.38 × 10⁻²³ J/K)",
                "difficulty": "hard",
                "solution": {
                    "given": ["T = 273 K", "P = 1.013 × 10⁵ Pa", "d = 3.6 × 10⁻¹⁰ m", "k = 1.38 × 10⁻²³ J/K"],
                    "find": "Mean free path λ",
                    "formula": "λ = kT/(√2πd²P)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "λ = (1.38 × 10⁻²³ × 273)/(√2 × π × (3.6 × 10⁻¹⁰)² × 1.013 × 10⁵)",
                            "result": "λ = (3.77 × 10⁻²¹)/(1.414 × 3.1416 × 1.296 × 10⁻¹⁹ × 1.013 × 10⁵) = 6.4 × 10⁻⁸ m"
                        }
                    ],
                    "answer": "6.4 × 10⁻⁸ m",
                    "concept": "Mean free path"
                }
            },
            {
                "problem": "A gas expands from 2.0 L to 5.0 L at constant pressure of 3.0 atm. Calculate the work done by the gas.",
                "difficulty": "medium",
                "solution": {
                    "given": ["V₁ = 2.0 L", "V₂ = 5.0 L", "P = 3.0 atm"],
                    "find": "Work done W",
                    "formula": "W = PΔV (for isobaric process)",
                    "steps": [
                        {
                            "step": "Calculate volume change",
                            "work": "ΔV = 5.0 - 2.0 = 3.0 L",
                            "result": ""
                        },
                        {
                            "step": "Convert to SI units",
                            "work": "P = 3.0 atm = 3.04 × 10⁵ Pa, ΔV = 3.0 × 10⁻³ m³",
                            "result": ""
                        },
                        {
                            "step": "Calculate work done",
                            "work": "W = 3.04 × 10⁵ × 3.0 × 10⁻³ = 912 J",
                            "result": "W = 912 J"
                        }
                    ],
                    "answer": "912 J",
                    "concept": "Work done in isobaric process"
                }
            },
            {
                "problem": "A 500 g piece of copper at 100°C is dropped into 200 g of water at 20°C. Calculate the final temperature. (c_copper = 385 J/kg·K, c_water = 4186 J/kg·K)",
                "difficulty": "medium",
                "solution": {
                    "given": ["m_copper = 500 g = 0.5 kg", "T_copper = 100°C", "m_water = 200 g = 0.2 kg", "T_water = 20°C", "c_copper = 385 J/kg·K", "c_water = 4186 J/kg·K"],
                    "find": "Final temperature T_f",
                    "formula": "Heat lost by copper = Heat gained by water",
                    "steps": [
                        {
                            "step": "Set up equation",
                            "work": "0.5 × 385 × (100 - T_f) = 0.2 × 4186 × (T_f - 20)",
                            "result": "192.5(100 - T_f) = 837.2(T_f - 20)"
                        },
                        {
                            "step": "Solve for T_f",
                            "work": "19250 - 192.5T_f = 837.2T_f - 16744",
                            "result": "19250 + 16744 = 837.2T_f + 192.5T_f"
                        },
                        {
                            "step": "Final calculation",
                            "work": "35994 = 1029.7T_f ⇒ T_f = 34.96°C",
                            "result": "T_f = 35.0°C"
                        }
                    ],
                    "answer": "35.0°C",
                    "concept": "Calorimetry principle"
                }
            },
            {
                "problem": "A gas undergoes a cyclic process ABCA. Calculate the net work done and heat transferred. (Process AB: 2J heat absorbed, 3J work done; Process BC: 5J heat rejected; Process CA: 4J work done on system)",
                "difficulty": "hard",
                "solution": {
                    "given": ["Process AB: Q = +2J, W = +3J", "Process BC: Q = -5J", "Process CA: W = -4J"],
                    "find": ["Net work done W_net", "Net heat transferred Q_net"],
                    "formula": ["For cyclic process: ΔU = 0", "Q_net = W_net"],
                    "steps": [
                        {
                            "step": "Calculate net work done",
                            "work": "W_net = W_AB + W_BC + W_CA = 3 + 0 + (-4) = -1J",
                            "result": ""
                        },
                        {
                            "step": "Calculate net heat transferred",
                            "work": "Q_net = Q_AB + Q_BC + Q_CA = 2 + (-5) + 0 = -3J",
                            "result": "Inconsistency: Q_net ≠ W_net, check problem statement"
                        }
                    ],
                    "answer": "Problem statement inconsistent",
                    "concept": "Cyclic processes and first law"
                }
            },
            {
                "problem": "Calculate the efficiency of a heat engine that absorbs 2000 J of heat and rejects 1200 J to the sink.",
                "difficulty": "easy",
                "solution": {
                    "given": ["Q₁ = 2000 J", "Q₂ = 1200 J"],
                    "find": "Efficiency η",
                    "formula": "η = 1 - Q₂/Q₁",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "η = 1 - 1200/2000 = 1 - 0.6 = 0.4",
                            "result": "η = 40%"
                        }
                    ],
                    "answer": "40%",
                    "concept": "Heat engine efficiency"
                }
            },
            {
                "problem": "A gas at 27°C has a volume of 2.0 L. Calculate its volume at 127°C at constant pressure.",
                "difficulty": "easy",
                "solution": {
                    "given": ["T₁ = 27°C = 300 K", "V₁ = 2.0 L", "T₂ = 127°C = 400 K"],
                    "find": "Volume V₂",
                    "formula": "V₁/T₁ = V₂/T₂ (Charles' Law)",
                    "steps": [
                        {
                            "step": "Rearrange formula",
                            "work": "V₂ = V₁T₂/T₁",
                            "result": ""
                        },
                        {
                            "step": "Substitute values",
                            "work": "V₂ = 2.0 × 400/300 = 2.667 L",
                            "result": "V₂ = 2.667 L"
                        }
                    ],
                    "answer": "2.667 L",
                    "concept": "Charles' Law"
                }
            },
            {
                "problem": "Calculate the work done when 2 moles of an ideal gas expand isothermally at 27°C from 1.0 L to 3.0 L. (R = 8.314 J/mol·K)",
                "difficulty": "medium",
                "solution": {
                    "given": ["n = 2 mol", "T = 27°C = 300 K", "V₁ = 1.0 L", "V₂ = 3.0 L", "R = 8.314 J/mol·K"],
                    "find": "Work done W",
                    "formula": "W = nRT ln(V₂/V₁)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "W = 2 × 8.314 × 300 × ln(3) = 4988.4 × 1.0986",
                            "result": "W = 5480 J"
                        }
                    ],
                    "answer": "5480 J",
                    "concept": "Work done in isothermal process"
                }
            },
            {
                "problem": "A Carnot refrigerator operates between -13°C and 27°C. Calculate its coefficient of performance.",
                "difficulty": "medium",
                "solution": {
                    "given": ["T₂ = -13°C = 260 K", "T₁ = 27°C = 300 K"],
                    "find": "Coefficient of performance COP",
                    "formula": "COP = T₂/(T₁ - T₂)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "COP = 260/(300 - 260) = 260/40 = 6.5",
                            "result": "COP = 6.5"
                        }
                    ],
                    "answer": "6.5",
                    "concept": "Refrigerator performance"
                }
            },
            {
                "problem": "Calculate the change in internal energy when 1 mole of monatomic ideal gas is heated from 27°C to 127°C at constant volume.",
                "difficulty": "medium",
                "solution": {
                    "given": ["n = 1 mol", "T₁ = 27°C = 300 K", "T₂ = 127°C = 400 K", "C_v = 3/2 R (for monatomic gas)"],
                    "find": "Change in internal energy ΔU",
                    "formula": "ΔU = nC_vΔT",
                    "steps": [
                        {
                            "step": "Calculate temperature difference",
                            "work": "ΔT = 400 - 300 = 100 K",
                            "result": ""
                        },
                        {
                            "step": "Calculate ΔU",
                            "work": "ΔU = 1 × (3/2 × 8.314) × 100 = 1247.1 J",
                            "result": "ΔU = 1247 J"
                        }
                    ],
                    "answer": "1247 J",
                    "concept": "Internal energy of ideal gas"
                }
            },
            {
                "problem": "A gas is compressed adiabatically to half its volume. If the initial temperature was 27°C, calculate the final temperature. (γ = 1.4)",
                "difficulty": "hard",
                "solution": {
                    "given": ["V₂ = V₁/2", "T₁ = 27°C = 300 K", "γ = 1.4"],
                    "find": "Final temperature T₂",
                    "formula": "T₁V₁^(γ-1) = T₂V₂^(γ-1)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "300 × V₁^(0.4) = T₂ × (V₁/2)^(0.4)",
                            "result": "300 = T₂ × (1/2)^(0.4)"
                        },
                        {
                            "step": "Calculate (1/2)^(0.4)",
                            "work": "(1/2)^(0.4) = 0.7579",
                            "result": ""
                        },
                        {
                            "step": "Calculate T₂",
                            "work": "T₂ = 300/0.7579 = 395.8 K = 122.8°C",
                            "result": "122.8°C"
                        }
                    ],
                    "answer": "122.8°C",
                    "concept": "Adiabatic process"
                }
            },
            {
                "problem": "Calculate the heat required to raise the temperature of 100 g of water from 20°C to 80°C. (c_water = 4186 J/kg·K)",
                "difficulty": "easy",
                "solution": {
                    "given": ["m = 100 g = 0.1 kg", "T₁ = 20°C", "T₂ = 80°C", "c = 4186 J/kg·K"],
                    "find": "Heat required Q",
                    "formula": "Q = mcΔT",
                    "steps": [
                        {
                            "step": "Calculate temperature difference",
                            "work": "ΔT = 80 - 20 = 60°C = 60 K",
                            "result": ""
                        },
                        {
                            "step": "Calculate heat required",
                            "work": "Q = 0.1 × 4186 × 60 = 25,116 J",
                            "result": "Q = 25.116 kJ"
                        }
                    ],
                    "answer": "25.116 kJ",
                    "concept": "Specific heat capacity"
                }
            }
        ]
    },

    "oscillations_and_waves": {
        "title": "Oscillations and Waves",
        "weightage": "6–7%",
        "introduction": "Oscillations and Waves is a fundamental chapter dealing with periodic motion and wave phenomena. This topic covers simple harmonic motion, wave properties, sound waves, and wave optics. Understanding oscillations and waves is crucial for various fields including acoustics, optics, and quantum mechanics, making it essential for competitive exams like NEET",

        "topics": [
            {
                "name": "Simple Harmonic Motion (SHM)",
                "description": "Periodic motion where restoring force is proportional to displacement from equilibrium position.",
                "subtopics": [
                    {
                        "name": "Basic Equations",
                        "explanation": "Displacement: x = A sin(ωt + φ), Velocity: v = Aω cos(ωt + φ), Acceleration: a = -Aω² sin(ωt + φ) = -ω²x"
                    },
                    {
                        "name": "Energy in SHM",
                        "explanation": "Total energy E = ½mω²A², Kinetic energy K = ½mω²(A² - x²), Potential energy U = ½mω²x²"
                    },
                    {
                        "name": "Spring-Mass System",
                        "explanation": "Time period T = 2π√(m/k), where k is spring constant and m is mass"
                    },
                    {
                        "name": "Simple Pendulum",
                        "explanation": "Time period T = 2π√(l/g), where l is length and g is acceleration due to gravity"
                    }
                ]
            },
            {
                "name": "Wave Motion",
                "description": "Propagation of disturbances through a medium without permanent displacement of particles.",
                "subtopics": [
                    {
                        "name": "Wave Equation",
                        "explanation": "y(x,t) = A sin(kx - ωt + φ), where k = 2π/λ is wave number, ω = 2πf is angular frequency"
                    },
                    {
                        "name": "Wave Speed",
                        "explanation": "v = fλ = ω/k, For string waves: v = √(T/μ), where T is tension and μ is linear mass density"
                    },
                    {
                        "name": "Superposition Principle",
                        "explanation": "When two or more waves meet, resultant displacement is vector sum of individual displacements"
                    }
                ]
            },
            {
                "name": "Sound Waves",
                "description": "Longitudinal mechanical waves that propagate through elastic media.",
                "subtopics": [
                    {
                        "name": "Speed of Sound",
                        "explanation": "In gases: v = √(γRT/M), In solids: v = √(Y/ρ), In liquids: v = √(B/ρ)"
                    },
                    {
                        "name": "Doppler Effect",
                        "explanation": "Apparent change in frequency due to relative motion between source and observer: f' = f(v ± v₀)/(v ∓ vₛ)"
                    },
                    {
                        "name": "Beats",
                        "explanation": "Periodic variation in intensity due to superposition of two waves of slightly different frequencies: f_beat = |f₁ - f₂|"
                    }
                ]
            },
            {
                "name": "Wave Optics",
                "description": "Study of wave nature of light and related phenomena.",
                "subtopics": [
                    {
                        "name": "Interference",
                        "explanation": "Young's double slit: Path difference Δx = d sinθ, Phase difference δ = (2π/λ)Δx, Intensity I = 4I₀cos²(δ/2)"
                    },
                    {
                        "name": "Diffraction",
                        "explanation": "Single slit: Angular width of central maximum = 2λ/a, where a is slit width"
                    },
                    {
                        "name": "Polarization",
                        "explanation": "Malus' Law: I = I₀cos²θ, where θ is angle between polarizer and analyzer"
                    }
                ]
            }
        ],

        "formulas": {
            "Simple Harmonic Motion": [
                {
                    "name": "Displacement",
                    "expression": "x = A sin(ωt + φ)",
                    "description": "Displacement as function of time, where A is amplitude, ω is angular frequency, φ is phase constant"
                },
                {
                    "name": "Time Period - Spring",
                    "expression": "T = 2π√(m/k)",
                    "description": "Time period of spring-mass system"
                },
                {
                    "name": "Time Period - Pendulum",
                    "expression": "T = 2π√(l/g)",
                    "description": "Time period of simple pendulum"
                },
                {
                    "name": "Total Energy",
                    "expression": "E = ½mω²A²",
                    "description": "Total mechanical energy in SHM"
                }
            ],
            "Wave Motion": [
                {
                    "name": "Wave Equation",
                    "expression": "y(x,t) = A sin(kx - ωt + φ)",
                    "description": "General equation for progressive wave"
                },
                {
                    "name": "Wave Speed",
                    "expression": "v = fλ = ω/k",
                    "description": "Relationship between wave parameters"
                },
                {
                    "name": "String Wave Speed",
                    "expression": "v = √(T/μ)",
                    "description": "Speed of wave on stretched string"
                }
            ],
            "Sound Waves": [
                {
                    "name": "Doppler Effect",
                    "expression": "f' = f(v ± v₀)/(v ∓ vₛ)",
                    "description": "Apparent frequency when source or observer is moving"
                },
                {
                    "name": "Beat Frequency",
                    "expression": "f_beat = |f₁ - f₂|",
                    "description": "Beat frequency from two close frequencies"
                },
                {
                    "name": "Sound Intensity",
                    "expression": "I = P/4πr²",
                    "description": "Intensity of sound wave at distance r from point source"
                }
            ],
            "Wave Optics": [
                {
                    "name": "Young's Double Slit",
                    "expression": "Δx = d sinθ = nλ (bright), = (n+½)λ (dark)",
                    "description": "Path difference for interference fringes"
                },
                {
                    "name": "Single Slit Diffraction",
                    "expression": "a sinθ = nλ (dark)",
                    "description": "Condition for minima in single slit diffraction"
                },
                {
                    "name": "Malus' Law",
                    "expression": "I = I₀cos²θ",
                    "description": "Intensity of polarized light after passing through analyzer"
                }
            ]
        },

        "problems": [
            {
                "problem": "A particle executes SHM with amplitude 5 cm and time period 2 seconds. Calculate its maximum velocity and maximum acceleration.",
                "difficulty": "medium",
                "solution": {
                    "given": ["A = 5 cm = 0.05 m", "T = 2 s"],
                    "find": ["Maximum velocity v_max", "Maximum acceleration a_max"],
                    "formula": ["ω = 2π/T", "v_max = Aω", "a_max = Aω²"],
                    "steps": [
                        {
                            "step": "Calculate angular frequency",
                            "work": "ω = 2π/2 = π rad/s",
                            "result": ""
                        },
                        {
                            "step": "Calculate maximum velocity",
                            "work": "v_max = 0.05 × π = 0.157 m/s",
                            "result": ""
                        },
                        {
                            "step": "Calculate maximum acceleration",
                            "work": "a_max = 0.05 × π² = 0.493 m/s²",
                            "result": "a_max = 0.493 m/s²"
                        }
                    ],
                    "answer": ["v_max = 0.157 m/s", "a_max = 0.493 m/s²"],
                    "concept": "SHM basic equations"
                }
            },
            {
                "problem": "A simple pendulum has time period 2 seconds on Earth. What will be its time period on a planet where acceleration due to gravity is one-fourth that on Earth?",
                "difficulty": "easy",
                "solution": {
                    "given": ["T_earth = 2 s", "g_planet = g_earth/4"],
                    "find": "Time period on planet T_planet",
                    "formula": "T = 2π√(l/g)",
                    "steps": [
                        {
                            "step": "Since length is same, T ∝ 1/√g",
                            "work": "T_planet/T_earth = √(g_earth/g_planet) = √4 = 2",
                            "result": ""
                        },
                        {
                            "step": "Calculate T_planet",
                            "work": "T_planet = 2 × 2 = 4 s",
                            "result": "T_planet = 4 s"
                        }
                    ],
                    "answer": "4 s",
                    "concept": "Simple pendulum time period"
                }
            },
            {
                "problem": "A wave is described by y = 0.02 sin(4πx - 8πt). Calculate its amplitude, wavelength, frequency, and wave speed.",
                "difficulty": "medium",
                "solution": {
                    "given": ["y = 0.02 sin(4πx - 8πt)"],
                    "find": ["Amplitude A", "Wavelength λ", "Frequency f", "Wave speed v"],
                    "formula": ["Compare with y = A sin(kx - ωt)", "k = 2π/λ", "ω = 2πf", "v = fλ"],
                    "steps": [
                        {
                            "step": "Amplitude",
                            "work": "A = 0.02 m",
                            "result": ""
                        },
                        {
                            "step": "Wave number k",
                            "work": "k = 4π m⁻¹ ⇒ λ = 2π/k = 2π/4π = 0.5 m",
                            "result": ""
                        },
                        {
                            "step": "Angular frequency ω",
                            "work": "ω = 8π rad/s ⇒ f = ω/2π = 8π/2π = 4 Hz",
                            "result": ""
                        },
                        {
                            "step": "Wave speed",
                            "work": "v = fλ = 4 × 0.5 = 2 m/s",
                            "result": "v = 2 m/s"
                        }
                    ],
                    "answer": ["A = 0.02 m", "λ = 0.5 m", "f = 4 Hz", "v = 2 m/s"],
                    "concept": "Wave parameters from equation"
                }
            },
            {
                "problem": "A train moving at 30 m/s blows a whistle of frequency 500 Hz. Calculate the frequency heard by a stationary observer (a) when train approaches, (b) when train recedes. (Speed of sound = 340 m/s)",
                "difficulty": "medium",
                "solution": {
                    "given": ["v_s = 30 m/s", "f = 500 Hz", "v = 340 m/s", "v₀ = 0"],
                    "find": ["Frequency when approaching f'₁", "Frequency when receding f'₂"],
                    "formula": ["Approaching: f' = f(v)/(v - v_s)", "Receding: f' = f(v)/(v + v_s)"],
                    "steps": [
                        {
                            "step": "When approaching",
                            "work": "f'₁ = 500 × 340/(340 - 30) = 500 × 340/310 = 548.4 Hz",
                            "result": ""
                        },
                        {
                            "step": "When receding",
                            "work": "f'₂ = 500 × 340/(340 + 30) = 500 × 340/370 = 459.5 Hz",
                            "result": "f'₂ = 459.5 Hz"
                        }
                    ],
                    "answer": ["f'₁ = 548.4 Hz", "f'₂ = 459.5 Hz"],
                    "concept": "Doppler effect for sound"
                }
            },
            {
                "problem": "In Young's double slit experiment, the slit separation is 0.5 mm and the screen is 2 m away. If the wavelength of light is 600 nm, calculate the fringe width.",
                "difficulty": "medium",
                "solution": {
                    "given": ["d = 0.5 mm = 5 × 10⁻⁴ m", "D = 2 m", "λ = 600 nm = 6 × 10⁻⁷ m"],
                    "find": "Fringe width β",
                    "formula": "β = λD/d",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "β = (6 × 10⁻⁷ × 2)/(5 × 10⁻⁴) = 12 × 10⁻⁷/5 × 10⁻⁴ = 2.4 × 10⁻³ m",
                            "result": "β = 2.4 mm"
                        }
                    ],
                    "answer": "2.4 mm",
                    "concept": "Young's double slit interference"
                }
            },
            {
                "problem": "Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. Calculate the beat frequency and time interval between successive beats.",
                "difficulty": "easy",
                "solution": {
                    "given": ["f₁ = 256 Hz", "f₂ = 260 Hz"],
                    "find": ["Beat frequency f_beat", "Time interval between beats Δt"],
                    "formula": ["f_beat = |f₁ - f₂|", "Δt = 1/f_beat"],
                    "steps": [
                        {
                            "step": "Calculate beat frequency",
                            "work": "f_beat = |256 - 260| = 4 Hz",
                            "result": ""
                        },
                        {
                            "step": "Calculate time interval",
                            "work": "Δt = 1/4 = 0.25 s",
                            "result": "Δt = 0.25 s"
                        }
                    ],
                    "answer": ["f_beat = 4 Hz", "Δt = 0.25 s"],
                    "concept": "Beats"
                }
            },
            {
                "problem": "A spring-mass system has mass 0.5 kg and spring constant 200 N/m. Calculate its time period and total energy if amplitude is 0.1 m.",
                "difficulty": "medium",
                "solution": {
                    "given": ["m = 0.5 kg", "k = 200 N/m", "A = 0.1 m"],
                    "find": ["Time period T", "Total energy E"],
                    "formula": ["T = 2π√(m/k)", "E = ½kA²"],
                    "steps": [
                        {
                            "step": "Calculate time period",
                            "work": "T = 2π√(0.5/200) = 2π√(0.0025) = 2π × 0.05 = 0.314 s",
                            "result": ""
                        },
                        {
                            "step": "Calculate total energy",
                            "work": "E = ½ × 200 × (0.1)² = 100 × 0.01 = 1 J",
                            "result": "E = 1 J"
                        }
                    ],
                    "answer": ["T = 0.314 s", "E = 1 J"],
                    "concept": "Spring-mass system"
                }
            },
            {
                "problem": "A string of length 2 m and mass 0.02 kg is under tension of 80 N. Calculate the speed of wave on the string and its fundamental frequency.",
                "difficulty": "hard",
                "solution": {
                    "given": ["L = 2 m", "m = 0.02 kg", "T = 80 N"],
                    "find": ["Wave speed v", "Fundamental frequency f"],
                    "formula": ["v = √(T/μ)", "μ = m/L", "f = v/2L"],
                    "steps": [
                        {
                            "step": "Calculate linear mass density",
                            "work": "μ = 0.02/2 = 0.01 kg/m",
                            "result": ""
                        },
                        {
                            "step": "Calculate wave speed",
                            "work": "v = √(80/0.01) = √8000 = 89.44 m/s",
                            "result": ""
                        },
                        {
                            "step": "Calculate fundamental frequency",
                            "work": "f = 89.44/(2 × 2) = 89.44/4 = 22.36 Hz",
                            "result": "f = 22.36 Hz"
                        }
                    ],
                    "answer": ["v = 89.44 m/s", "f = 22.36 Hz"],
                    "concept": "Waves on strings"
                }
            },
            {
                "problem": "In a single slit diffraction experiment, the slit width is 0.2 mm and wavelength is 600 nm. Calculate the angular width of the central maximum.",
                "difficulty": "medium",
                "solution": {
                    "given": ["a = 0.2 mm = 2 × 10⁻⁴ m", "λ = 600 nm = 6 × 10⁻⁷ m"],
                    "find": "Angular width of central maximum 2θ",
                    "formula": "θ = sin⁻¹(λ/a) for first minimum",
                    "steps": [
                        {
                            "step": "Calculate sinθ for first minimum",
                            "work": "sinθ = λ/a = 6 × 10⁻⁷/2 × 10⁻⁴ = 0.003",
                            "result": ""
                        },
                        {
                            "step": "Since θ is small, θ ≈ sinθ ≈ 0.003 rad",
                            "work": "Angular width = 2θ = 2 × 0.003 = 0.006 rad",
                            "result": "2θ = 0.006 rad"
                        }
                    ],
                    "answer": "0.006 rad",
                    "concept": "Single slit diffraction"
                }
            },
            {
                "problem": "A particle executing SHM has velocity 4 m/s when displacement is 3 cm and velocity 3 m/s when displacement is 4 cm. Calculate its amplitude and time period.",
                "difficulty": "hard",
                "solution": {
                    "given": ["v₁ = 4 m/s at x₁ = 0.03 m", "v₂ = 3 m/s at x₂ = 0.04 m"],
                    "find": ["Amplitude A", "Time period T"],
                    "formula": ["v = ω√(A² - x²)", "T = 2π/ω"],
                    "steps": [
                        {
                            "step": "Set up equations",
                            "work": "4 = ω√(A² - 0.0009) and 3 = ω√(A² - 0.0016)",
                            "result": ""
                        },
                        {
                            "step": "Divide equations",
                            "work": "4/3 = √[(A² - 0.0009)/(A² - 0.0016)]",
                            "result": "16/9 = (A² - 0.0009)/(A² - 0.0016)"
                        },
                        {
                            "step": "Solve for A²",
                            "work": "16(A² - 0.0016) = 9(A² - 0.0009) ⇒ 16A² - 0.0256 = 9A² - 0.0081 ⇒ 7A² = 0.0175 ⇒ A² = 0.0025",
                            "result": "A = 0.05 m"
                        },
                        {
                            "step": "Calculate ω from first equation",
                            "work": "4 = ω√(0.0025 - 0.0009) = ω√0.0016 = 0.04ω ⇒ ω = 100 rad/s",
                            "result": ""
                        },
                        {
                            "step": "Calculate time period",
                            "work": "T = 2π/100 = 0.0628 s",
                            "result": "T = 0.0628 s"
                        }
                    ],
                    "answer": ["A = 0.05 m", "T = 0.0628 s"],
                    "concept": "SHM velocity-displacement relationship"
                }
            },
            {
                "problem": "A police car moving at 30 m/s chases a thief moving at 20 m/s in the same direction. If the police siren frequency is 1000 Hz and speed of sound is 340 m/s, calculate the frequency heard by the thief.",
                "difficulty": "hard",
                "solution": {
                    "given": ["v_s = 30 m/s", "v₀ = 20 m/s", "f = 1000 Hz", "v = 340 m/s"],
                    "find": "Apparent frequency f'",
                    "formula": "f' = f(v - v₀)/(v - v_s)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "f' = 1000 × (340 - 20)/(340 - 30) = 1000 × 320/310 = 1032.3 Hz",
                            "result": "f' = 1032.3 Hz"
                        }
                    ],
                    "answer": "1032.3 Hz",
                    "concept": "Doppler effect - both source and observer moving"
                }
            },
            {
                "problem": "In Young's double slit experiment, the intensity at a point where the path difference is λ/3 is I. Calculate the maximum intensity.",
                "difficulty": "hard",
                "solution": {
                    "given": ["Path difference = λ/3", "Intensity = I"],
                    "find": "Maximum intensity I_max",
                    "formula": ["I = 4I₀cos²(δ/2)", "δ = (2π/λ) × path difference", "I_max = 4I₀"],
                    "steps": [
                        {
                            "step": "Calculate phase difference",
                            "work": "δ = (2π/λ) × (λ/3) = 2π/3",
                            "result": ""
                        },
                        {
                            "step": "Set up equation",
                            "work": "I = 4I₀cos²(π/3) = 4I₀ × (0.5)² = 4I₀ × 0.25 = I₀",
                            "result": "I = I₀"
                        },
                        {
                            "step": "Find maximum intensity",
                            "work": "I_max = 4I₀ = 4I",
                            "result": "I_max = 4I"
                        }
                    ],
                    "answer": "4I",
                    "concept": "Interference intensity variation"
                }
            },
            {
                "problem": "A pendulum clock loses 10 seconds per day at 20°C and gains 15 seconds per day at 35°C. Calculate the coefficient of linear expansion of the pendulum material.",
                "difficulty": "hard",
                "solution": {
                    "given": ["Loss = 10 s/day at 20°C", "Gain = 15 s/day at 35°C", "Time period T ∝ √l"],
                    "find": "Coefficient of linear expansion α",
                    "formula": ["ΔT/T = ½αΔθ", "Time error ∝ ΔT/T"],
                    "steps": [
                        {
                            "step": "Set up equations",
                            "work": "At 20°C: -10 = k × ½α(20 - θ₀)   At 35°C: +15 = k × ½α(35 - θ₀)",
                            "result": ""
                        },
                        {
                            "step": "Divide equations",
                            "work": "-10/15 = (20 - θ₀)/(35 - θ₀) ⇒ -2/3 = (20 - θ₀)/(35 - θ₀)",
                            "result": "-2(35 - θ₀) = 3(20 - θ₀)"
                        },
                        {
                            "step": "Solve for θ₀",
                            "work": "-70 + 2θ₀ = 60 - 3θ₀ ⇒ 5θ₀ = 130 ⇒ θ₀ = 26°C",
                            "result": ""
                        },
                        {
                            "step": "Substitute back to find α",
                            "work": "-10 = k × ½α(20 - 26) ⇒ -10 = k × ½α(-6) ⇒ α = 10/(3k)",
                            "result": "Need additional information to find exact value"
                        }
                    ],
                    "answer": "Requires additional information for exact calculation",
                    "concept": "Temperature effect on pendulum"
                }
            },
            {
                "problem": "A wave pulse travels 20 m along a string in 0.5 seconds. If the tension in the string is 100 N, calculate the linear mass density of the string.",
                "difficulty": "medium",
                "solution": {
                    "given": ["Distance = 20 m", "Time = 0.5 s", "Tension T = 100 N"],
                    "find": "Linear mass density μ",
                    "formula": ["v = distance/time", "v = √(T/μ)"],
                    "steps": [
                        {
                            "step": "Calculate wave speed",
                            "work": "v = 20/0.5 = 40 m/s",
                            "result": ""
                        },
                        {
                            "step": "Calculate linear mass density",
                            "work": "40 = √(100/μ) ⇒ 1600 = 100/μ ⇒ μ = 100/1600 = 0.0625 kg/m",
                            "result": "μ = 0.0625 kg/m"
                        }
                    ],
                    "answer": "0.0625 kg/m",
                    "concept": "Wave speed on strings"
                }
            },
            {
                "problem": "A sound wave has intensity 10⁻⁶ W/m². Calculate the sound intensity level in decibels. (I₀ = 10⁻¹² W/m²)",
                "difficulty": "easy",
                "solution": {
                    "given": ["I = 10⁻⁶ W/m²", "I₀ = 10⁻¹² W/m²"],
                    "find": "Sound intensity level β",
                    "formula": "β = 10 log₁₀(I/I₀)",
                    "steps": [
                        {
                            "step": "Calculate intensity ratio",
                            "work": "I/I₀ = 10⁻⁶/10⁻¹² = 10⁶",
                            "result": ""
                        },
                        {
                            "step": "Calculate sound level",
                            "work": "β = 10 log₁₀(10⁶) = 10 × 6 = 60 dB",
                            "result": "β = 60 dB"
                        }
                    ],
                    "answer": "60 dB",
                    "concept": "Sound intensity level"
                }
            },
            {
                "problem": "A particle is executing SHM with amplitude A. Calculate the time taken to go from x = 0 to x = A/2.",
                "difficulty": "hard",
                "solution": {
                    "given": ["x = A/2", "Initial condition: x = 0 at t = 0"],
                    "find": "Time taken t",
                    "formula": "x = A sin(ωt)",
                    "steps": [
                        {
                            "step": "Set up equation",
                            "work": "A/2 = A sin(ωt) ⇒ sin(ωt) = 1/2",
                            "result": "ωt = π/6"
                        },
                        {
                            "step": "Calculate time",
                            "work": "t = (π/6)/ω = π/(6ω) = T/12",
                            "result": "t = T/12"
                        }
                    ],
                    "answer": "T/12",
                    "concept": "SHM time calculation"
                }
            },
            {
                "problem": "Two identical springs of spring constant k each are connected in series and a mass m is attached. Calculate the time period of oscillation.",
                "difficulty": "medium",
                "solution": {
                    "given": ["Two springs in series", "Spring constant of each = k", "Mass = m"],
                    "find": "Time period T",
                    "formula": ["Equivalent spring constant k_eq for series: 1/k_eq = 1/k + 1/k", "T = 2π√(m/k_eq)"],
                    "steps": [
                        {
                            "step": "Calculate equivalent spring constant",
                            "work": "1/k_eq = 1/k + 1/k = 2/k ⇒ k_eq = k/2",
                            "result": ""
                        },
                        {
                            "step": "Calculate time period",
                            "work": "T = 2π√(m/(k/2)) = 2π√(2m/k)",
                            "result": "T = 2π√(2m/k)"
                        }
                    ],
                    "answer": "2π√(2m/k)",
                    "concept": "Spring combinations"
                }
            },
            {
                "problem": "A train moving at 40 m/s crosses a platform. The engine driver sounds a whistle of frequency 600 Hz. Calculate the frequency heard by a person on the platform. (Speed of sound = 340 m/s)",
                "difficulty": "medium",
                "solution": {
                    "given": ["v_s = 40 m/s", "f = 600 Hz", "v = 340 m/s", "v₀ = 0"],
                    "find": "Apparent frequency f'",
                    "formula": "f' = f(v)/(v - v_s)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "f' = 600 × 340/(340 - 40) = 600 × 340/300 = 680 Hz",
                            "result": "f' = 680 Hz"
                        }
                    ],
                    "answer": "680 Hz",
                    "concept": "Doppler effect - moving source"
                }
            },
            {
                "problem": "In a resonance tube experiment, the first resonance occurs at 20 cm and second resonance at 62 cm. Calculate the end correction and wavelength of sound.",
                "difficulty": "hard",
                "solution": {
                    "given": ["l₁ = 20 cm", "l₂ = 62 cm"],
                    "find": ["End correction e", "Wavelength λ"],
                    "formula": ["l₁ + e = λ/4", "l₂ + e = 3λ/4"],
                    "steps": [
                        {
                            "step": "Subtract equations",
                            "work": "(l₂ + e) - (l₁ + e) = 3λ/4 - λ/4 ⇒ l₂ - l₁ = λ/2",
                            "result": "62 - 20 = λ/2 ⇒ λ = 84 cm"
                        },
                        {
                            "step": "Calculate end correction",
                            "work": "l₁ + e = λ/4 ⇒ 20 + e = 84/4 = 21 ⇒ e = 1 cm",
                            "result": "e = 1 cm"
                        }
                    ],
                    "answer": ["e = 1 cm", "λ = 84 cm"],
                    "concept": "Resonance tube experiment"
                }
            },
            {
                "problem": "A wave is represented by y = 2 sin(4πt - 0.02πx). Calculate its frequency, wavelength, and wave speed.",
                "difficulty": "medium",
                "solution": {
                    "given": ["y = 2 sin(4πt - 0.02πx)"],
                    "find": ["Frequency f", "Wavelength λ", "Wave speed v"],
                    "formula": ["Compare with y = A sin(ωt - kx)", "ω = 2πf", "k = 2π/λ", "v = fλ"],
                    "steps": [
                        {
                            "step": "Identify parameters",
                            "work": "A = 2 m, ω = 4π rad/s, k = 0.02π m⁻¹",
                            "result": ""
                        },
                        {
                            "step": "Calculate frequency",
                            "work": "f = ω/2π = 4π/2π = 2 Hz",
                            "result": ""
                        },
                        {
                            "step": "Calculate wavelength",
                            "work": "λ = 2π/k = 2π/0.02π = 100 m",
                            "result": ""
                        },
                        {
                            "step": "Calculate wave speed",
                            "work": "v = fλ = 2 × 100 = 200 m/s",
                            "result": "v = 200 m/s"
                        }
                    ],
                    "answer": ["f = 2 Hz", "λ = 100 m", "v = 200 m/s"],
                    "concept": "Wave parameters from equation"
                }
            },
            {
                "problem": "A particle executes SHM along a straight line. When its displacement is 3 cm from mean position, velocity is 4 cm/s, and when displacement is 4 cm, velocity is 3 cm/s. Calculate the period of oscillation.",
                "difficulty": "hard",
                "solution": {
                    "given": ["x₁ = 3 cm, v₁ = 4 cm/s", "x₂ = 4 cm, v₂ = 3 cm/s"],
                    "find": "Time period T",
                    "formula": ["v = ω√(A² - x²)", "T = 2π/ω"],
                    "steps": [
                        {
                            "step": "Set up equations",
                            "work": "4 = ω√(A² - 9) and 3 = ω√(A² - 16)",
                            "result": ""
                        },
                        {
                            "step": "Square both equations and divide",
                            "work": "16/9 = (A² - 9)/(A² - 16)",
                            "result": "16(A² - 16) = 9(A² - 9)"
                        },
                        {
                            "step": "Solve for A²",
                            "work": "16A² - 256 = 9A² - 81 ⇒ 7A² = 175 ⇒ A² = 25",
                            "result": "A = 5 cm"
                        },
                        {
                            "step": "Find ω from first equation",
                            "work": "4 = ω√(25 - 9) = ω√16 = 4ω ⇒ ω = 1 rad/s",
                            "result": ""
                        },
                        {
                            "step": "Calculate period",
                            "work": "T = 2π/ω = 2π seconds",
                            "result": "T = 6.283 s"
                        }
                    ],
                    "answer": "6.283 s",
                    "concept": "SHM velocity-displacement relationship"
                }
            },
            {
                "problem": "A spring-block system oscillates with amplitude A. When the block is at x = A/2 from mean position, calculate the ratio of kinetic to potential energy.",
                "difficulty": "medium",
                "solution": {
                    "given": ["x = A/2"],
                    "find": "Ratio K/U",
                    "formula": ["K = ½mω²(A² - x²)", "U = ½mω²x²"],
                    "steps": [
                        {
                            "step": "Calculate energies",
                            "work": "K = ½mω²(A² - A²/4) = ½mω²(3A²/4)  U = ½mω²(A²/4)",
                            "result": ""
                        },
                        {
                            "step": "Find ratio",
                            "work": "K/U = (3A²/4)/(A²/4) = 3",
                            "result": "K:U = 3:1"
                        }
                    ],
                    "answer": "3:1",
                    "concept": "Energy distribution in SHM"
                }
            },
            {
                "problem": "Two sound sources emitting waves of wavelength λ are separated by distance d = 3λ. How many points exist on the line joining them where constructive interference occurs?",
                "difficulty": "hard",
                "solution": {
                    "given": ["d = 3λ"],
                    "find": "Number of constructive interference points",
                    "formula": ["Path difference Δ = nλ for constructive interference"],
                    "steps": [
                        {
                            "step": "Maximum path difference = d = 3λ",
                            "work": "n can vary from -3 to +3",
                            "result": "n = -3, -2, -1, 0, 1, 2, 3"
                        },
                        {
                            "step": "Count possible values",
                            "work": "7 integer values between -3 and +3",
                            "result": "7 points"
                        }
                    ],
                    "answer": "7 points",
                    "concept": "Interference and path difference"
                }
            },
            {
                "problem": "A Doppler radar operating at 10 GHz detects a frequency shift of 5 kHz when measuring the speed of a car. Calculate the car's speed. (Speed of light = 3 × 10⁸ m/s)",
                "difficulty": "hard",
                "solution": {
                    "given": ["f = 10 GHz = 10¹⁰ Hz", "Δf = 5 kHz = 5000 Hz", "c = 3 × 10⁸ m/s"],
                    "find": "Car speed v",
                    "formula": ["Δf/f = 2v/c for radar Doppler effect"],
                    "steps": [
                        {
                            "step": "Rearrange formula",
                            "work": "v = (c × Δf)/(2f)",
                            "result": ""
                        },
                        {
                            "step": "Substitute values",
                            "work": "v = (3 × 10⁸ × 5000)/(2 × 10¹⁰) = (1.5 × 10¹²)/(2 × 10¹⁰) = 75 m/s",
                            "result": "v = 270 km/h"
                        }
                    ],
                    "answer": "270 km/h",
                    "concept": "Doppler effect in radar"
                }
            },
            {
                "problem": "A damped oscillator loses 5% of its energy per cycle. Calculate the percentage decrease in amplitude after 10 cycles.",
                "difficulty": "hard",
                "solution": {
                    "given": ["Energy loss per cycle = 5%", "Number of cycles = 10"],
                    "find": "Percentage decrease in amplitude",
                    "formula": ["E ∝ A²", "Energy remaining after n cycles = (0.95)ⁿ"],
                    "steps": [
                        {
                            "step": "Calculate energy after 10 cycles",
                            "work": "E₁₀/E₀ = (0.95)¹⁰ ≈ 0.5987",
                            "result": "59.87% energy remaining"
                        },
                        {
                            "step": "Find amplitude ratio",
                            "work": "A₁₀/A₀ = √(E₁₀/E₀) = √0.5987 ≈ 0.7738",
                            "result": ""
                        },
                        {
                            "step": "Calculate percentage decrease",
                            "work": "Decrease = (1 - 0.7738) × 100 = 22.62%",
                            "result": "22.62% decrease"
                        }
                    ],
                    "answer": "22.62%",
                    "concept": "Damped oscillations"
                }
            },
            {
                "problem": "A sonometer wire of length 50 cm vibrates in its fundamental mode with frequency 200 Hz. When the length is increased to 60 cm under same tension, calculate the new fundamental frequency.",
                "difficulty": "medium",
                "solution": {
                    "given": ["L₁ = 50 cm", "f₁ = 200 Hz", "L₂ = 60 cm", "Tension constant"],
                    "find": "New frequency f₂",
                    "formula": ["f ∝ 1/L for constant tension and linear density"],
                    "steps": [
                        {
                            "step": "Use proportionality",
                            "work": "f₂/f₁ = L₁/L₂",
                            "result": ""
                        },
                        {
                            "step": "Calculate new frequency",
                            "work": "f₂ = 200 × (50/60) = 200 × 5/6 ≈ 166.67 Hz",
                            "result": "f₂ = 166.7 Hz"
                        }
                    ],
                    "answer": "166.7 Hz",
                    "concept": "Sonometer frequency-length relationship"
                }
            },
            {
                "problem": "In a Quincke's tube experiment, the sound intensity becomes minimum when the path difference is 8.5 cm. If the speed of sound is 340 m/s, calculate the frequency of the sound wave.",
                "difficulty": "medium",
                "solution": {
                    "given": ["Path difference for minimum = 8.5 cm = 0.085 m", "v = 340 m/s"],
                    "find": "Frequency f",
                    "formula": ["Minimum intensity when Δ = (2n+1)λ/2", "For first minimum, n=0, Δ = λ/2"],
                    "steps": [
                        {
                            "step": "Calculate wavelength",
                            "work": "λ/2 = 0.085 ⇒ λ = 0.17 m",
                            "result": ""
                        },
                        {
                            "step": "Calculate frequency",
                            "work": "f = v/λ = 340/0.17 = 2000 Hz",
                            "result": "f = 2 kHz"
                        }
                    ],
                    "answer": "2 kHz",
                    "concept": "Quincke's tube experiment"
                }
            },
            {
                "problem": "A particle is subjected to two SHMs of same frequency but phase difference π/2 along perpendicular directions. The amplitudes are 3 cm and 4 cm. Calculate the path traced by the particle.",
                "difficulty": "hard",
                "solution": {
                    "given": ["A_x = 3 cm", "A_y = 4 cm", "Phase difference = π/2"],
                    "find": "Path traced by particle",
                    "formula": ["x = A_x sin(ωt)", "y = A_y sin(ωt + π/2) = A_y cos(ωt)"],
                    "steps": [
                        {
                            "step": "Write equations",
                            "work": "x/3 = sin(ωt), y/4 = cos(ωt)",
                            "result": ""
                        },
                        {
                            "step": "Square and add",
                            "work": "(x/3)² + (y/4)² = sin²(ωt) + cos²(ωt) = 1",
                            "result": "x²/9 + y²/16 = 1"
                        },
                        {
                            "step": "Identify path",
                            "work": "Equation of ellipse with semi-axes 3 cm and 4 cm",
                            "result": "Elliptical path"
                        }
                    ],
                    "answer": "Elliptical path: x²/9 + y²/16 = 1",
                    "concept": "Superposition of perpendicular SHMs"
                }
            },
            {
                "problem": "A wave pulse on a string takes 0.2 seconds to travel from point A to point B. If the tension in the string is quadrupled, calculate the new time taken for the pulse to travel the same distance.",
                "difficulty": "medium",
                "solution": {
                    "given": ["t₁ = 0.2 s", "T₂ = 4T₁", "Distance constant"],
                    "find": "New time t₂",
                    "formula": ["v = √(T/μ)", "t = d/v"],
                    "steps": [
                        {
                            "step": "Find velocity ratio",
                            "work": "v₂/v₁ = √(T₂/T₁) = √4 = 2",
                            "result": "v₂ = 2v₁"
                        },
                        {
                            "step": "Calculate new time",
                            "work": "t₂ = d/v₂ = d/(2v₁) = t₁/2 = 0.1 s",
                            "result": "t₂ = 0.1 s"
                        }
                    ],
                    "answer": "0.1 s",
                    "concept": "Wave speed dependence on tension"
                }
            },
            {
                "problem": "In a Melde's experiment, 4 antinodes are formed when the string vibrates under a tension of 9 N. Calculate the tension required to produce 6 antinodes with the same tuning fork.",
                "difficulty": "hard",
                "solution": {
                    "given": ["p₁ = 4 antinodes", "T₁ = 9 N", "p₂ = 6 antinodes", "Frequency constant"],
                    "find": "New tension T₂",
                    "formula": ["f ∝ p√T", "Therefore p√T = constant"],
                    "steps": [
                        {
                            "step": "Set up equation",
                            "work": "p₁√T₁ = p₂√T₂",
                            "result": "4√9 = 6√T₂"
                        },
                        {
                            "step": "Solve for T₂",
                            "work": "4 × 3 = 6√T₂ ⇒ 12 = 6√T₂ ⇒ √T₂ = 2 ⇒ T₂ = 4 N",
                            "result": "T₂ = 4 N"
                        }
                    ],
                    "answer": "4 N",
                    "concept": "Melde's experiment"
                }
            }
        ]
    },

    "optics": {
        "title": "Optics",
        "weightage": "7–8%",
        "introduction": "Optics is the branch of physics that studies the behavior and properties of light, including its interactions with matter and the construction of instruments that use or detect it. This chapter covers ray optics (reflection, refraction, lenses, mirrors) and wave optics (interference, diffraction, polarization). A strong understanding of optics is essential for fields like astronomy, engineering, and medicine, and is crucial for competitive exams like NEET",

        "topics": [
            {
                "name": "Ray Optics: Reflection and Refraction",
                "description": "Study of light as rays and its behavior at interfaces between different media.",
                "subtopics": [
                    {
                        "name": "Laws of Reflection",
                        "explanation": "Angle of incidence equals angle of reflection. Incident ray, reflected ray, and normal lie in the same plane."
                    },
                    {
                        "name": "Laws of Refraction (Snell's Law)",
                        "explanation": "n₁sinθ₁ = n₂sinθ₂, where n is refractive index and θ is angle with normal."
                    },
                    {
                        "name": "Total Internal Reflection",
                        "explanation": "When light travels from denser to rarer medium, if angle of incidence exceeds critical angle, all light reflects back."
                    }
                ]
            },
            {
                "name": "Spherical Mirrors",
                "description": "Study of reflection from curved mirror surfaces.",
                "subtopics": [
                    {
                        "name": "Mirror Formula",
                        "explanation": "1/f = 1/v + 1/u, where f is focal length, v is image distance, u is object distance."
                    },
                    {
                        "name": "Magnification",
                        "explanation": "m = -v/u = hᵢ/hₒ, where hᵢ is image height and hₒ is object height."
                    },
                    {
                        "name": "Sign Convention",
                        "explanation": "Object distance (u) negative, focal length (f) negative for concave mirrors, positive for convex mirrors."
                    }
                ]
            },
            {
                "name": "Lenses",
                "description": "Study of refraction through curved transparent surfaces.",
                "subtopics": [
                    {
                        "name": "Lens Maker's Formula",
                        "explanation": "1/f = (n-1)(1/R₁ - 1/R₂), where n is refractive index, R₁ and R₂ are radii of curvature."
                    },
                    {
                        "name": "Thin Lens Formula",
                        "explanation": "1/f = 1/v - 1/u (with sign convention)."
                    },
                    {
                        "name": "Power of Lens",
                        "explanation": "P = 1/f (in meters), measured in diopters (D)."
                    }
                ]
            },
            {
                "name": "Wave Optics",
                "description": "Study of light as waves and related phenomena.",
                "subtopics": [
                    {
                        "name": "Interference",
                        "explanation": "Young's double slit: Path difference = d sinθ, Fringe width β = λD/d."
                    },
                    {
                        "name": "Diffraction",
                        "explanation": "Single slit: Angular width of central maximum = 2λ/a, where a is slit width."
                    },
                    {
                        "name": "Polarization",
                        "explanation": "Malus' Law: I = I₀cos²θ, Brewster's Law: tanθₚ = n."
                    }
                ]
            },
            {
                "name": "Optical Instruments",
                "description": "Devices that use lenses and/or mirrors to form images.",
                "subtopics": [
                    {
                        "name": "Microscope",
                        "explanation": "Magnifying power: M = (vₒ/uₒ)(D/fₑ) for compound microscope."
                    },
                    {
                        "name": "Telescope",
                        "explanation": "Magnifying power: M = fₒ/fₑ for astronomical telescope."
                    },
                    {
                        "name": "Human Eye",
                        "explanation": "Accommodation: Ability to focus at different distances, near point = 25 cm, far point = ∞."
                    }
                ]
            }
        ],

        "formulas": {
            "Mirrors": [
                {
                    "name": "Mirror Formula",
                    "expression": "1/f = 1/v + 1/u",
                    "description": "Relationship between focal length, object distance and image distance"
                },
                {
                    "name": "Magnification",
                    "expression": "m = -v/u = hᵢ/hₒ",
                    "description": "Linear magnification produced by mirrors"
                }
            ],
            "Lenses": [
                {
                    "name": "Lens Formula",
                    "expression": "1/f = 1/v - 1/u",
                    "description": "Relationship for thin lenses with sign convention"
                },
                {
                    "name": "Lens Maker's Formula",
                    "expression": "1/f = (n-1)(1/R₁ - 1/R₂)",
                    "description": "Formula for focal length based on geometry and refractive index"
                },
                {
                    "name": "Power of Lens",
                    "expression": "P = 1/f (in meters)",
                    "description": "Measured in diopters (D)"
                }
            ],
            "Wave Optics": [
                {
                    "name": "Young's Double Slit",
                    "expression": "β = λD/d",
                    "description": "Fringe width in interference pattern"
                },
                {
                    "name": "Single Slit Diffraction",
                    "expression": "a sinθ = nλ",
                    "description": "Condition for minima in single slit diffraction"
                },
                {
                    "name": "Malus' Law",
                    "expression": "I = I₀cos²θ",
                    "description": "Intensity of polarized light after passing through analyzer"
                }
            ],
            "Refraction": [
                {
                    "name": "Snell's Law",
                    "expression": "n₁sinθ₁ = n₂sinθ₂",
                    "description": "Law of refraction at interface between two media"
                },
                {
                    "name": "Critical Angle",
                    "expression": "sinθ_c = n₂/n₁",
                    "description": "Angle for total internal reflection (n₁ > n₂)"
                }
            ]
        },

        "problems": [
            {
                "problem": "An object is placed 30 cm in front of a concave mirror of focal length 20 cm. Calculate the position and nature of the image formed.",
                "difficulty": "medium",
                "solution": {
                    "given": ["u = -30 cm", "f = -20 cm (concave mirror)"],
                    "find": ["Image distance v", "Nature of image"],
                    "formula": "1/f = 1/v + 1/u",
                    "steps": [
                        {
                            "step": "Apply mirror formula",
                            "work": "1/(-20) = 1/v + 1/(-30)",
                            "result": "-1/20 = 1/v - 1/30"
                        },
                        {
                            "step": "Solve for v",
                            "work": "1/v = -1/20 + 1/30 = (-3 + 2)/60 = -1/60",
                            "result": "v = -60 cm"
                        },
                        {
                            "step": "Analyze nature",
                            "work": "v is negative ⇒ real image, m = -v/u = -(-60)/(-30) = -2 ⇒ magnified and inverted",
                            "result": "Real, inverted, magnified image at 60 cm"
                        }
                    ],
                    "answer": ["v = -60 cm", "Real, inverted, magnified image"],
                    "concept": "Concave mirror image formation"
                }
            },
            {
                "problem": "A convex lens of focal length 15 cm is placed 20 cm from an object. Calculate the position and magnification of the image.",
                "difficulty": "medium",
                "solution": {
                    "given": ["f = +15 cm (convex lens)", "u = -20 cm"],
                    "find": ["Image distance v", "Magnification m"],
                    "formula": "1/f = 1/v - 1/u",
                    "steps": [
                        {
                            "step": "Apply lens formula",
                            "work": "1/15 = 1/v - 1/(-20) ⇒ 1/15 = 1/v + 1/20",
                            "result": "1/v = 1/15 - 1/20 = (4 - 3)/60 = 1/60"
                        },
                        {
                            "step": "Solve for v",
                            "work": "v = +60 cm",
                            "result": ""
                        },
                        {
                            "step": "Calculate magnification",
                            "work": "m = v/u = 60/(-20) = -3",
                            "result": "m = -3 (real, inverted, magnified)"
                        }
                    ],
                    "answer": ["v = +60 cm", "m = -3"],
                    "concept": "Convex lens image formation"
                }
            },
            {
                "problem": "Calculate the critical angle for light traveling from glass (n = 1.5) to air (n = 1.0).",
                "difficulty": "easy",
                "solution": {
                    "given": ["n₁ = 1.5", "n₂ = 1.0"],
                    "find": "Critical angle θ_c",
                    "formula": "sinθ_c = n₂/n₁",
                    "steps": [
                        {
                            "step": "Apply formula",
                            "work": "sinθ_c = 1.0/1.5 = 2/3 ≈ 0.6667",
                            "result": "θ_c = sin⁻¹(2/3) ≈ 41.81°"
                        }
                    ],
                    "answer": "41.81°",
                    "concept": "Total internal reflection"
                }
            },
            {
                "problem": "In Young's double slit experiment, the slit separation is 0.5 mm and the screen is 2 m away. If the distance between consecutive bright fringes is 2 mm, calculate the wavelength of light used.",
                "difficulty": "medium",
                "solution": {
                    "given": ["d = 0.5 mm = 5 × 10⁻⁴ m", "D = 2 m", "β = 2 mm = 2 × 10⁻³ m"],
                    "find": "Wavelength λ",
                    "formula": "β = λD/d",
                    "steps": [
                        {
                            "step": "Rearrange formula",
                            "work": "λ = βd/D",
                            "result": ""
                        },
                        {
                            "step": "Substitute values",
                            "work": "λ = (2 × 10⁻³ × 5 × 10⁻⁴)/2 = 5 × 10⁻⁷ m",
                            "result": "λ = 500 nm"
                        }
                    ],
                    "answer": "500 nm",
                    "concept": "Young's double slit interference"
                }
            },
            {
                "problem": "A compound microscope has an objective of focal length 2 cm and eyepiece of focal length 5 cm. The object is placed 2.2 cm from the objective. If the final image is at infinity, calculate the tube length and magnifying power. (D = 25 cm)",
                "difficulty": "hard",
                "solution": {
                    "given": ["fₒ = 2 cm", "fₑ = 5 cm", "uₒ = -2.2 cm", "D = 25 cm", "Final image at infinity"],
                    "find": ["Tube length L", "Magnifying power M"],
                    "formula": ["1/fₒ = 1/vₒ - 1/uₒ", "L = vₒ + fₑ", "M = (vₒ/uₒ)(D/fₑ)"],
                    "steps": [
                        {
                            "step": "Find image distance for objective",
                            "work": "1/2 = 1/vₒ - 1/(-2.2) ⇒ 1/vₒ = 1/2 - 1/2.2 = (1.1 - 1)/2.2 = 0.1/2.2",
                            "result": "vₒ = 22 cm"
                        },
                        {
                            "step": "Calculate tube length",
                            "work": "L = vₒ + fₑ = 22 + 5 = 27 cm",
                            "result": ""
                        },
                        {
                            "step": "Calculate magnification",
                            "work": "M = (22/2.2) × (25/5) = 10 × 5 = 50",
                            "result": "M = 50"
                        }
                    ],
                    "answer": ["L = 27 cm", "M = 50"],
                    "concept": "Compound microscope"
                }
            },
            {
                "problem": "A light ray enters a glass slab (n = 1.5) from air at an angle of incidence 45°. Calculate the lateral displacement if the thickness of the slab is 10 cm.",
                "difficulty": "hard",
                "solution": {
                    "given": ["n = 1.5", "i = 45°", "t = 10 cm = 0.1 m", "n_air = 1"],
                    "find": "Lateral displacement d",
                    "formula": "d = t sin(i - r)/cos r, where sin r = sin i/n",
                    "steps": [
                        {
                            "step": "Find angle of refraction",
                            "work": "sin r = sin45°/1.5 = 0.7071/1.5 = 0.4714 ⇒ r = sin⁻¹(0.4714) ≈ 28.13°",
                            "result": ""
                        },
                        {
                            "step": "Calculate lateral displacement",
                            "work": "d = 0.1 × sin(45° - 28.13°)/cos28.13° = 0.1 × sin16.87°/cos28.13°",
                            "result": "d = 0.1 × 0.2903/0.8829 ≈ 0.0329 m = 3.29 cm"
                        }
                    ],
                    "answer": "3.29 cm",
                    "concept": "Refraction through glass slab"
                }
            },
            {
                "problem": "A person with myopia has a far point of 2 m. Calculate the power of the lens required to correct this defect.",
                "difficulty": "medium",
                "solution": {
                    "given": ["Far point = 2 m"],
                    "find": "Power of corrective lens P",
                    "formula": "P = -1/f, where f = far point",
                    "steps": [
                        {
                            "step": "For myopia, concave lens needed",
                            "work": "f = -far point = -2 m",
                            "result": ""
                        },
                        {
                            "step": "Calculate power",
                            "work": "P = 1/f = 1/(-2) = -0.5 D",
                            "result": "P = -0.5 diopters"
                        }
                    ],
                    "answer": "-0.5 D",
                    "concept": "Correction of myopia"
                }
            },
            {
                "problem": "In a single slit diffraction experiment, the width of the central maximum is 4 mm on a screen 2 m away. If the wavelength is 600 nm, calculate the slit width.",
                "difficulty": "medium",
                "solution": {
                    "given": ["Width of central maximum = 4 mm = 0.004 m", "D = 2 m", "λ = 600 nm = 6 × 10⁻⁷ m"],
                    "find": "Slit width a",
                    "formula": "Width of central maximum = 2λD/a",
                    "steps": [
                        {
                            "step": "Rearrange formula",
                            "work": "a = 2λD/(width of central maximum)",
                            "result": ""
                        },
                        {
                            "step": "Substitute values",
                            "work": "a = (2 × 6 × 10⁻⁷ × 2)/0.004 = (24 × 10⁻⁷)/0.004 = 6 × 10⁻⁴ m",
                            "result": "a = 0.6 mm"
                        }
                    ],
                    "answer": "0.6 mm",
                    "concept": "Single slit diffraction"
                }
            },
            {
                "problem": "A convex mirror has a radius of curvature of 60 cm. An object is placed 20 cm in front of it. Calculate the position and nature of the image.",
                "difficulty": "medium",
                "solution": {
                    "given": ["R = 60 cm", "u = -20 cm", "Convex mirror ⇒ f = +R/2 = +30 cm"],
                    "find": ["Image distance v", "Nature of image"],
                    "formula": "1/f = 1/v + 1/u",
                    "steps": [
                        {
                            "step": "Apply mirror formula",
                            "work": "1/30 = 1/v + 1/(-20) ⇒ 1/v = 1/30 + 1/20 = (2 + 3)/60 = 5/60",
                            "result": "v = +12 cm"
                        },
                        {
                            "step": "Analyze nature",
                            "work": "v is positive ⇒ virtual image, m = -v/u = -12/(-20) = +0.6 ⇒ diminished and erect",
                            "result": "Virtual, erect, diminished image at 12 cm behind mirror"
                        }
                    ],
                    "answer": ["v = +12 cm", "Virtual, erect, diminished image"],
                    "concept": "Convex mirror image formation"
                }
            },
            {
                "problem": "Light of wavelength 500 nm is incident normally on a diffraction grating with 5000 lines/cm. Calculate the highest order spectrum that can be observed.",
                "difficulty": "hard",
                "solution": {
                    "given": ["λ = 500 nm = 5 × 10⁻⁷ m", "N = 5000 lines/cm = 5 × 10⁵ lines/m"],
                    "find": "Highest order m_max",
                    "formula": "d sinθ = mλ, where d = 1/N, and |sinθ| ≤ 1",
                    "steps": [
                        {
                            "step": "Calculate grating element",
                            "work": "d = 1/N = 1/(5 × 10⁵) = 2 × 10⁻⁶ m",
                            "result": ""
                        },
                        {
                            "step": "Find maximum m",
                            "work": "m_max ≤ d/λ = (2 × 10⁻⁶)/(5 × 10⁻⁷) = 4",
                            "result": "m_max = 4"
                        }
                    ],
                    "answer": "4",
                    "concept": "Diffraction grating"
                }
            },
            {
                "problem": "A biconvex lens made of glass (n = 1.5) has radii of curvature 20 cm and 30 cm. Calculate its focal length in air.",
                "difficulty": "medium",
                "solution": {
                    "given": ["n = 1.5", "R₁ = +20 cm (convex)", "R₂ = -30 cm (concave)", "Air: n_medium = 1"],
                    "find": "Focal length f",
                    "formula": "1/f = (n - 1)(1/R₁ - 1/R₂)",
                    "steps": [
                        {
                            "step": "Apply Lens Maker's Formula",
                            "work": "1/f = (1.5 - 1)(1/20 - 1/(-30)) = 0.5(1/20 + 1/30)",
                            "result": "1/f = 0.5(3/60 + 2/60) = 0.5(5/60) = 2.5/60"
                        },
                        {
                            "step": "Calculate focal length",
                            "work": "f = 60/2.5 = 24 cm",
                            "result": "f = 24 cm"
                        }
                    ],
                    "answer": "24 cm",
                    "concept": "Lens Maker's Formula"
                }
            },
            {
                "problem": "A light ray passes from air (n=1) into a transparent medium at an angle of incidence 45°. If the angle of refraction is 30°, calculate the refractive index of the medium and the speed of light in it. (c = 3 × 10⁸ m/s)",
                "difficulty": "medium",
                "solution": {
                    "given": ["i = 45°", "r = 30°", "n_air = 1", "c = 3 × 10⁸ m/s"],
                    "find": ["Refractive index n", "Speed v in medium"],
                    "formula": ["n = sin i/sin r", "n = c/v"],
                    "steps": [
                        {
                            "step": "Calculate refractive index",
                            "work": "n = sin45°/sin30° = (0.7071)/(0.5) = 1.414",
                            "result": ""
                        },
                        {
                            "step": "Calculate speed in medium",
                            "work": "v = c/n = 3 × 10⁸/1.414 = 2.12 × 10⁸ m/s",
                            "result": "v = 2.12 × 10⁸ m/s"
                        }
                    ],
                    "answer": ["n = 1.414", "v = 2.12 × 10⁸ m/s"],
                    "concept": "Snell's Law and refractive index"
                }
            },
            {
                "problem": "A compound microscope has an objective of focal length 1.5 cm and eyepiece of focal length 5 cm. The object is placed 1.6 cm from the objective. If the final image is formed at the near point (25 cm), calculate the magnifying power.",
                "difficulty": "hard",
                "solution": {
                    "given": ["fₒ = 1.5 cm", "fₑ = 5 cm", "uₒ = -1.6 cm", "D = 25 cm", "Final image at near point"],
                    "find": "Magnifying power M",
                    "formula": ["1/fₒ = 1/vₒ - 1/uₒ", "M = (vₒ/uₒ)(1 + D/fₑ)"],
                    "steps": [
                        {
                            "step": "Find image distance for objective",
                            "work": "1/1.5 = 1/vₒ - 1/(-1.6) ⇒ 1/vₒ = 1/1.5 - 1/1.6 = (1.6 - 1.5)/(2.4) = 0.1/2.4",
                            "result": "vₒ = 24 cm"
                        },
                        {
                            "step": "Calculate magnification",
                            "work": "M = (24/1.6)(1 + 25/5) = 15 × (1 + 5) = 15 × 6 = 90",
                            "result": "M = 90"
                        }
                    ],
                    "answer": "90",
                    "concept": "Compound microscope magnification"
                }
            },
            {
                "problem": "A prism of angle 60° produces a minimum deviation of 40°. Calculate the refractive index of the prism material.",
                "difficulty": "medium",
                "solution": {
                    "given": ["A = 60°", "δ_m = 40°"],
                    "find": "Refractive index n",
                    "formula": "n = sin[(A + δ_m)/2]/sin(A/2)",
                    "steps": [
                        {
                            "step": "Apply formula",
                            "work": "n = sin[(60° + 40°)/2]/sin(60°/2) = sin50°/sin30°",
                            "result": "n = 0.7660/0.5 = 1.532"
                        }
                    ],
                    "answer": "1.532",
                    "concept": "Prism minimum deviation"
                }
            },
            {
                "problem": "A person with hypermetropia has a near point of 1 m. Calculate the power of the lens required to read a book at 25 cm.",
                "difficulty": "medium",
                "solution": {
                    "given": ["Near point = 1 m = 100 cm", "Desired distance = 25 cm"],
                    "find": "Power of lens P",
                    "formula": "1/f = 1/v - 1/u, with sign convention",
                    "steps": [
                        {
                            "step": "For hypermetropia, convex lens needed",
                            "work": "u = -25 cm, v = -100 cm (virtual image at near point)",
                            "result": ""
                        },
                        {
                            "step": "Apply lens formula",
                            "work": "1/f = 1/(-100) - 1/(-25) = -1/100 + 1/25 = (-1 + 4)/100 = 3/100",
                            "result": "f = 100/3 ≈ 33.33 cm = 0.333 m"
                        },
                        {
                            "step": "Calculate power",
                            "work": "P = 1/f = 1/0.333 = +3 D",
                            "result": "P = +3 diopters"
                        }
                    ],
                    "answer": "+3 D",
                    "concept": "Correction of hypermetropia"
                }
            },
            {
                "problem": "In a Newton's rings experiment, the diameter of the 10th dark ring is 0.5 cm. If the radius of curvature of the lens is 2 m, calculate the wavelength of light used.",
                "difficulty": "hard",
                "solution": {
                    "given": ["n = 10 (dark ring)", "D_n = 0.5 cm = 0.005 m", "R = 2 m"],
                    "find": "Wavelength λ",
                    "formula": "D_n² = 4nλR (for dark rings)",
                    "steps": [
                        {
                            "step": "Rearrange formula",
                            "work": "λ = D_n²/(4nR)",
                            "result": ""
                        },
                        {
                            "step": "Substitute values",
                            "work": "λ = (0.005)²/(4 × 10 × 2) = 25 × 10⁻⁶/80 = 3.125 × 10⁻⁷ m",
                            "result": "λ = 312.5 nm"
                        }
                    ],
                    "answer": "312.5 nm",
                    "concept": "Newton's rings"
                }
            },
            {
                "problem": "A telescope has an objective of focal length 100 cm and eyepiece of focal length 5 cm. Calculate its magnifying power when the final image is formed at infinity.",
                "difficulty": "medium",
                "solution": {
                    "given": ["fₒ = 100 cm", "fₑ = 5 cm", "Final image at infinity"],
                    "find": "Magnifying power M",
                    "formula": "M = fₒ/fₑ",
                    "steps": [
                        {
                            "step": "Apply formula",
                            "work": "M = 100/5 = 20",
                            "result": "M = 20"
                        }
                    ],
                    "answer": "20",
                    "concept": "Telescope magnification"
                }
            },
            {
                "problem": "Light of wavelength 600 nm is incident normally on a single slit of width 0.2 mm. Calculate the angular width of the central maximum.",
                "difficulty": "medium",
                "solution": {
                    "given": ["λ = 600 nm = 6 × 10⁻⁷ m", "a = 0.2 mm = 2 × 10⁻⁴ m"],
                    "find": "Angular width of central maximum 2θ",
                    "formula": "θ = sin⁻¹(λ/a) for first minimum",
                    "steps": [
                        {
                            "step": "Calculate sinθ for first minimum",
                            "work": "sinθ = λ/a = 6 × 10⁻⁷/2 × 10⁻⁴ = 0.003",
                            "result": ""
                        },
                        {
                            "step": "Since θ is small, θ ≈ sinθ ≈ 0.003 rad",
                            "work": "Angular width = 2θ = 2 × 0.003 = 0.006 rad",
                            "result": "2θ = 0.006 rad"
                        }
                    ],
                    "answer": "0.006 rad",
                    "concept": "Single slit diffraction"
                }
            },
            {
                "problem": "A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 30 cm. Calculate the power of the combination.",
                "difficulty": "medium",
                "solution": {
                    "given": ["f₁ = +20 cm = +0.2 m (convex)", "f₂ = -30 cm = -0.3 m (concave)"],
                    "find": "Power of combination P",
                    "formula": "P = P₁ + P₂, where P = 1/f",
                    "steps": [
                        {
                            "step": "Calculate individual powers",
                            "work": "P₁ = 1/0.2 = +5 D, P₂ = 1/(-0.3) = -3.33 D",
                            "result": ""
                        },
                        {
                            "step": "Calculate combined power",
                            "work": "P = 5 + (-3.33) = +1.67 D",
                            "result": "P = +1.67 D"
                        }
                    ],
                    "answer": "+1.67 D",
                    "concept": "Combination of lenses"
                }
            },
            {
                "problem": "In a biprism experiment, the distance between the virtual sources is 0.2 mm and the screen is 1 m away. If the wavelength of light is 500 nm, calculate the fringe width.",
                "difficulty": "medium",
                "solution": {
                    "given": ["d = 0.2 mm = 2 × 10⁻⁴ m", "D = 1 m", "λ = 500 nm = 5 × 10⁻⁷ m"],
                    "find": "Fringe width β",
                    "formula": "β = λD/d",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "β = (5 × 10⁻⁷ × 1)/(2 × 10⁻⁴) = 5 × 10⁻⁷/2 × 10⁻⁴ = 2.5 × 10⁻³ m",
                            "result": "β = 2.5 mm"
                        }
                    ],
                    "answer": "2.5 mm",
                    "concept": "Biprism interference"
                }
            },
            {
                "problem": "A glass slab (n = 1.5) of thickness 6 cm is placed over a mark on paper. Calculate the apparent depth of the mark when viewed normally from above.",
                "difficulty": "easy",
                "solution": {
                    "given": ["n = 1.5", "Real depth = 6 cm"],
                    "find": "Apparent depth",
                    "formula": "Apparent depth = Real depth/n",
                    "steps": [
                        {
                            "step": "Apply formula",
                            "work": "Apparent depth = 6/1.5 = 4 cm",
                            "result": "4 cm"
                        }
                    ],
                    "answer": "4 cm",
                    "concept": "Apparent depth"
                }
            },
            {
                "problem": "A polarizer and analyzer are oriented such that the intensity of transmitted light is 25% of the original intensity. Calculate the angle between their transmission axes.",
                "difficulty": "medium",
                "solution": {
                    "given": ["I/I₀ = 0.25"],
                    "find": "Angle θ between transmission axes",
                    "formula": "I = I₀cos²θ (Malus' Law)",
                    "steps": [
                        {
                            "step": "Apply Malus' Law",
                            "work": "0.25 = cos²θ ⇒ cosθ = √0.25 = 0.5",
                            "result": "θ = cos⁻¹(0.5) = 60°"
                        }
                    ],
                    "answer": "60°",
                    "concept": "Malus' Law"
                }
            },
            {
                "problem": "A concave mirror forms a real image twice the size of the object. If the image is 30 cm from the mirror, calculate the focal length.",
                "difficulty": "medium",
                "solution": {
                    "given": ["m = -2 (real, inverted)", "v = -30 cm"],
                    "find": "Focal length f",
                    "formula": ["m = -v/u", "1/f = 1/v + 1/u"],
                    "steps": [
                        {
                            "step": "Find object distance",
                            "work": "-2 = -(-30)/u ⇒ -2 = 30/u ⇒ u = -15 cm",
                            "result": ""
                        },
                        {
                            "step": "Apply mirror formula",
                            "work": "1/f = 1/(-30) + 1/(-15) = -1/30 - 2/30 = -3/30 = -1/10",
                            "result": "f = -10 cm"
                        }
                    ],
                    "answer": "-10 cm",
                    "concept": "Concave mirror with magnification"
                }
            },
            {
                "problem": "Light of wavelength 400 nm and 600 nm is used simultaneously in a double slit experiment with slit separation 0.5 mm. Calculate the distance from the central maximum where the bright fringes of both wavelengths coincide. (D = 2 m)",
                "difficulty": "hard",
                "solution": {
                    "given": ["λ₁ = 400 nm", "λ₂ = 600 nm", "d = 0.5 mm = 5 × 10⁻⁴ m", "D = 2 m"],
                    "find": "Distance y where fringes coincide",
                    "formula": "y = nλD/d",
                    "steps": [
                        {
                            "step": "Set up condition for coincidence",
                            "work": "n₁λ₁ = n₂λ₂ ⇒ n₁/n₂ = λ₂/λ₁ = 600/400 = 3/2",
                            "result": "n₁ = 3, n₂ = 2 (smallest integers)"
                        },
                        {
                            "step": "Calculate distance for λ₁",
                            "work": "y = (3 × 400 × 10⁻⁹ × 2)/(5 × 10⁻⁴) = (2400 × 10⁻⁹)/(5 × 10⁻⁴) = 4.8 × 10⁻³ m",
                            "result": "y = 4.8 mm"
                        }
                    ],
                    "answer": "4.8 mm",
                    "concept": "Double slit with multiple wavelengths"
                }
            },
            {
                "problem": "A glass prism (n = 1.5) has a refracting angle of 60°. Calculate the angle of incidence for which the ray undergoes minimum deviation.",
                "difficulty": "medium",
                "solution": {
                    "given": ["n = 1.5", "A = 60°"],
                    "find": "Angle of incidence i for minimum deviation",
                    "formula": "i = (A + δ_m)/2, where sin[(A + δ_m)/2] = n sin(A/2)",
                    "steps": [
                        {
                            "step": "First find δ_m using n = sin[(A + δ_m)/2]/sin(A/2)",
                            "work": "1.5 = sin[(60 + δ_m)/2]/sin30° ⇒ 1.5 = sin[(60 + δ_m)/2]/0.5",
                            "result": "sin[(60 + δ_m)/2] = 0.75"
                        },
                        {
                            "step": "Solve for δ_m",
                            "work": "(60 + δ_m)/2 = sin⁻¹(0.75) ≈ 48.59° ⇒ 60 + δ_m = 97.18° ⇒ δ_m = 37.18°",
                            "result": ""
                        },
                        {
                            "step": "Find angle of incidence",
                            "work": "i = (60 + 37.18)/2 = 48.59°",
                            "result": "i ≈ 48.6°"
                        }
                    ],
                    "answer": "48.6°",
                    "concept": "Prism minimum deviation conditions"
                }
            },
            {
                "problem": "A convex lens of focal length 15 cm is used to form an image of the sun. Calculate the size of the image if the angular diameter of the sun is 0.5°.",
                "difficulty": "hard",
                "solution": {
                    "given": ["f = 15 cm", "Angular diameter α = 0.5°"],
                    "find": "Size of image h",
                    "formula": "h = f × α (in radians)",
                    "steps": [
                        {
                            "step": "Convert angle to radians",
                            "work": "α = 0.5° = 0.5 × π/180 = π/360 radians",
                            "result": ""
                        },
                        {
                            "step": "Calculate image size",
                            "work": "h = 15 × π/360 = 15π/360 = π/24 ≈ 0.131 cm",
                            "result": "h = 1.31 mm"
                        }
                    ],
                    "answer": "1.31 mm",
                    "concept": "Image formation of extended object"
                }
            },
            {
                "problem": "In a Michelson interferometer, moving one mirror by 0.1 mm causes 400 fringes to cross the field of view. Calculate the wavelength of light used.",
                "difficulty": "hard",
                "solution": {
                    "given": ["Δd = 0.1 mm = 10⁻⁴ m", "Number of fringes N = 400"],
                    "find": "Wavelength λ",
                    "formula": "Δd = Nλ/2",
                    "steps": [
                        {
                            "step": "Rearrange formula",
                            "work": "λ = 2Δd/N",
                            "result": ""
                        },
                        {
                            "step": "Substitute values",
                            "work": "λ = 2 × 10⁻⁴/400 = 5 × 10⁻⁷ m",
                            "result": "λ = 500 nm"
                        }
                    ],
                    "answer": "500 nm",
                    "concept": "Michelson interferometer"
                }
            },
            {
                "problem": "A thin converging lens forms a real image of an object. The image distance is twice the object distance. Calculate the magnification and focal length in terms of object distance.",
                "difficulty": "medium",
                "solution": {
                    "given": ["v = 2u (for real image, both negative)"],
                    "find": ["Magnification m", "Focal length f in terms of u"],
                    "formula": ["m = -v/u", "1/f = 1/v - 1/u"],
                    "steps": [
                        {
                            "step": "Calculate magnification",
                            "work": "m = -(-2u)/(-u) = -2 (real, inverted, magnified)",
                            "result": ""
                        },
                        {
                            "step": "Apply lens formula",
                            "work": "1/f = 1/(-2u) - 1/(-u) = -1/2u + 1/u = 1/2u",
                            "result": "f = 2u"
                        }
                    ],
                    "answer": ["m = -2", "f = 2u"],
                    "concept": "Lens formula with magnification"
                }
            },
            {
                "problem": "Light is incident at Brewster's angle on a glass surface (n = 1.5). Calculate the angle of incidence and the angle between reflected and refracted rays.",
                "difficulty": "hard",
                "solution": {
                    "given": ["n = 1.5"],
                    "find": ["Brewster's angle θ_p", "Angle between reflected and refracted rays"],
                    "formula": ["tanθ_p = n", "At Brewster's angle, reflected and refracted rays are perpendicular"],
                    "steps": [
                        {
                            "step": "Calculate Brewster's angle",
                            "work": "θ_p = tan⁻¹(1.5) ≈ 56.31°",
                            "result": ""
                        },
                        {
                            "step": "Angle between rays",
                            "work": "At Brewster's angle, reflected ⊥ refracted, so angle = 90°",
                            "result": "90°"
                        }
                    ],
                    "answer": ["θ_p = 56.31°", "Angle between rays = 90°"],
                    "concept": "Brewster's Law"
                }
            },
            {
                "problem": "A compound microscope has a tube length of 20 cm. The objective has focal length 1 cm and the eyepiece has focal length 5 cm. Calculate the distance of the object from the objective when the final image is formed at infinity.",
                "difficulty": "hard",
                "solution": {
                    "given": ["L = 20 cm", "fₒ = 1 cm", "fₑ = 5 cm", "Final image at infinity"],
                    "find": "Object distance uₒ",
                    "formula": ["L = vₒ + fₑ", "1/fₒ = 1/vₒ - 1/uₒ"],
                    "steps": [
                        {
                            "step": "Find image distance for objective",
                            "work": "vₒ = L - fₑ = 20 - 5 = 15 cm",
                            "result": ""
                        },
                        {
                            "step": "Apply lens formula for objective",
                            "work": "1/1 = 1/15 - 1/uₒ ⇒ 1/uₒ = 1/15 - 1 = (1 - 15)/15 = -14/15",
                            "result": "uₒ = -15/14 ≈ -1.071 cm"
                        }
                    ],
                    "answer": "-1.071 cm",
                    "concept": "Compound microscope setup"
                }
            }
        ]
    },

    "mechanics": {
        "title": "Mechanics",
        "weightage": "15–18%",
        "introduction": "Mechanics is the branch of physics that deals with the motion of objects and the forces that cause this motion. It is the foundation upon which all other branches of physics are built. This unit covers kinematics (description of motion), dynamics (causes of motion), energy, momentum, rotational motion, gravitation, and the properties of matter. A deep understanding of mechanics is absolutely essential for success in competitive exams like NEET, as it interlinks with almost every other topic.",

        "topics": [
            {
                "name": "Kinematics",
                "description": "The study of motion without considering the forces that cause it. It is purely about describing an object's position, velocity, and acceleration over time.",
                "subtopics": [
                    {
                        "name": "Rectilinear Motion",
                        "explanation": "Motion along a straight line. For constant acceleration, we use the three equations of motion: 1) v = u + at, 2) s = ut + ½at², 3) v² = u² + 2as, where u is initial velocity, v is final velocity, a is acceleration, t is time, and s is displacement."
                    },
                    {
                        "name": "Projectile Motion",
                        "explanation": "The motion of an object thrown into the air, subject only to gravity. It follows a parabolic path. Key results: Time of Flight (T) = 2u sinθ / g, Maximum Height (H) = u² sin²θ / (2g), Horizontal Range (R) = u² sin(2θ) / g."
                    },
                    {
                        "name": "Relative Motion",
                        "explanation": "The calculation of the motion of an object with respect to a different frame of reference. The velocity of object A relative to object B is given by: V_AB = V_A - V_B."
                    }
                ]
            },
            {
                "name": "Laws of Motion (Dynamics)",
                "description": "The study of the forces that cause motion. This is governed by Newton's three fundamental laws.",
                "subtopics": [
                    {
                        "name": "Newton's First Law (Law of Inertia)",
                        "explanation": "An object at rest will remain at rest, and an object in motion will continue in motion with a constant velocity (same speed and same direction), unless acted upon by an unbalanced external force. This law defines the property of 'inertia' – the natural tendency of objects to resist changes to their state of motion."
                    },
                    {
                        "name": "Newton's Second Law (The Central Law)",
                        "explanation": "The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. The direction of the acceleration is in the direction of the net force. Formula: F_net = m * a. This is the most powerful law as it allows us to calculate the motion of an object if we know the forces acting on it."
                    },
                    {
                        "name": "Newton's Third Law (Action-Reaction)",
                        "explanation": "If body A exerts a force on body B (F_AB, the 'action' force), then body B simultaneously exerts a force on body A (F_BA, the 'reaction' force). These two forces are equal in magnitude, opposite in direction, and act on two different bodies. Formula: F_AB = - F_BA. It is crucial to remember that these two forces never cancel each other out because they act on different objects."
                    },
                    {
                        "name": "Friction",
                        "explanation": "A force that opposes the relative motion or the tendency of relative motion between two surfaces in contact. Static Friction (f_s ≤ μ_s * N) opposes the start of motion. Kinetic Friction (f_k = μ_k * N) opposes existing motion, where μ is the coefficient of friction and N is the normal force."
                    }
                ]
            },
            {
                "name": "Work, Energy, and Power",
                "description": "Alternative perspectives to analyze motion, often simplifying complex force problems.",
                "subtopics": [
                    {
                        "name": "Work-Energy Theorem",
                        "explanation": "The net work done by all forces acting on an object is equal to the change in its kinetic energy. Formula: W_net = ΔK = (1/2)mv² - (1/2)mu². This is a scalar theorem that is often easier to use than Newton's second law for problems involving changing speeds and positions."
                    },
                    {
                        "name": "Conservation of Mechanical Energy",
                        "explanation": "The total mechanical energy (Kinetic Energy + Potential Energy) of a system remains constant if only conservative forces (like gravity, spring force) do work. Non-conservative forces (like friction) cause a change in the total mechanical energy. Formula: K_i + U_i = K_f + U_f (if no non-conservative forces)."
                    },
                    {
                        "name": "Power",
                        "explanation": "The rate at which work is done or energy is transferred. It indicates how quickly a force can change the energy of a system. Formula: Average Power = Work / Time, Instantaneous Power = Force * Velocity (P = F * v)."
                    }
                ]
            },
            {
                "name": "Rotational Motion",
                "description": "The study of the motion of objects that rotate about a fixed axis. It has direct analogs to linear motion.",
                "subtopics": [
                    {
                        "name": "Torque (τ)",
                        "explanation": "The rotational analog of force. It is the measure of a force's ability to cause an object to rotate about an axis. Formula: τ = r * F * sinθ. It depends on the magnitude of the force, the point of application (lever arm 'r'), and the angle between them. Net torque causes angular acceleration."
                    },
                    {
                        "name": "Moment of Inertia (I)",
                        "explanation": "The rotational analog of mass. It is a measure of an object's resistance to changes in its rotational motion. It depends on the mass of the object and how that mass is distributed relative to the axis of rotation. Formula for a point mass: I = m*r²."
                    },
                    {
                        "name": "Angular Momentum (L)",
                        "explanation": "The rotational analog of linear momentum. It is a measure of the 'quantity of rotational motion'. Formula: L = I * ω. The Law of Conservation of Angular Momentum states that if the net external torque on a system is zero, the total angular momentum of the system remains constant."
                    }
                ]
            },
            {
                "name": "Gravitation",
                "description": "The study of the force of attraction that exists between all objects with mass.",
                "subtopics": [
                    {
                        "name": "Newton's Law of Universal Gravitation",
                        "explanation": "Every particle in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers. Formula: F = G * (m₁ * m₂) / r², where G is the Universal Gravitational Constant."
                    },
                    {
                        "name": "Kepler's Laws of Planetary Motion",
                        "explanation": "1) Law of Orbits: Planets move in elliptical orbits with the Sun at one focus. 2) Law of Areas: A line joining a planet and the Sun sweeps out equal areas in equal intervals of time. 3) Law of Periods: The square of the orbital period (T) of a planet is directly proportional to the cube of the semi-major axis (a) of its orbit. (T² ∝ a³)."
                    },
                    {
                        "name": "Gravitational Potential Energy",
                        "explanation": "The energy stored in an object due to its position in a gravitational field. For two masses separated by distance r: U = - (G * m₁ * m₂) / r. The negative sign signifies that the force is attractive."
                    }
                ]
            },
            {
                "name": "Properties of Matter",
                "description": "The study of the behavior of solids and fluids under the action of forces.",
                "subtopics": [
                    {
                        "name": "Elasticity",
                        "explanation": "The property of a material to regain its original shape and size after the deforming force is removed. Stress = Force / Area. Strain = Change in Dimension / Original Dimension. Hooke's Law: Stress ∝ Strain (within elastic limit). The constant of proportionality is Modulus of Elasticity (e.g., Young's Modulus Y = Tensile Stress / Tensile Strain for solids)."
                    },
                    {
                        "name": "Fluid Mechanics",
                        "explanation": "The study of fluids (liquids and gases) at rest and in motion. Key concepts include: Pascal's Law (pressure transmission in fluids), Archimedes' Principle (buoyant force), Bernoulli's Principle (relationship between pressure and fluid speed), and Viscosity (internal friction in fluids)."
                    }
                ]
            }
        ],

        "formulas": {
            "Kinematics": [
                {
                    "name": "First Equation of Motion",
                    "expression": "v = u + a*t",
                    "description": "Relates final velocity (v) to initial velocity (u), acceleration (a), and time (t)."
                },
                {
                    "name": "Projectile Range",
                    "expression": "R = (u² * sin(2θ)) / g",
                    "description": "The horizontal distance covered by a projectile launched with speed u at an angle θ."
                }
            ],
            "Dynamics": [
                {
                    "name": "Newton's Second Law",
                    "expression": "F_net = m * a",
                    "description": "The net force on an object equals its mass times its acceleration."
                },
                {
                    "name": "Kinetic Friction",
                    "expression": "f_k = μ_k * N",
                    "description": "The force of kinetic friction, where μ_k is the coefficient and N is the normal force."
                }
            ],
            "Work, Energy & Power": [
                {
                    "name": "Work-Energy Theorem",
                    "expression": "W_net = (1/2)mv_f² - (1/2)mv_i²",
                    "description": "The net work done on an object equals its change in kinetic energy."
                },
                {
                    "name": "Gravitational Potential Energy",
                    "expression": "U_g = m * g * h",
                    "description": "The energy an object possesses due to its height in a uniform gravitational field."
                }
            ],
            "Rotational Motion": [
                {
                    "name": "Torque",
                    "expression": "τ = I * α",
                    "description": "The rotational analog of F=ma. Net torque equals moment of inertia times angular acceleration."
                },
                {
                    "name": "Angular Momentum",
                    "expression": "L = I * ω",
                    "description": "The rotational analog of linear momentum (p=mv)."
                }
            ],
            "Gravitation": [
                {
                    "name": "Universal Law",
                    "expression": "F = G * (m₁ * m₂) / r²",
                    "description": "The force of attraction between any two point masses in the universe."
                },
                {
                    "name": "Orbital Velocity",
                    "expression": "v_orbital = √(G * M / r)",
                    "description": "The constant speed needed for an object to maintain a stable circular orbit around a planet/mass M."
                }
            ],
            "Properties of Matter": [
                {
                    "name": "Young's Modulus",
                    "expression": "Y = (F * L) / (A * ΔL)",
                    "description": "A measure of the stiffness of a solid material (Tensile Stress / Tensile Strain)."
                },
                {
                    "name": "Bernoulli's Equation",
                    "expression": "P + (1/2)ρv² + ρgh = constant",
                    "description": "For an ideal, incompressible fluid in steady flow, the sum of pressure, kinetic, and potential energy per unit volume is constant along a streamline."
                }
            ]
        },

        "problems": [
            {
                "problem": "A car accelerates uniformly from rest and covers a distance of 100 m in 10 seconds. Calculate its acceleration and final velocity.",
                "difficulty": "easy",
                "solution": {
                    "given": ["u = 0 m/s", "s = 100 m", "t = 10 s"],
                    "find": ["Acceleration (a)", "Final velocity (v)"],
                    "formula": ["s = ut + ½at²", "v = u + at"],
                    "steps": [
                        {
                            "step": "Find acceleration using s = ut + ½at²",
                            "work": "100 = 0*10 + ½*a*(10)² => 100 = 50a => a = 2 m/s²",
                            "result": ""
                        },
                        {
                            "step": "Find final velocity using v = u + at",
                            "work": "v = 0 + 2*10 = 20 m/s",
                            "result": "v = 20 m/s"
                        }
                    ],
                    "answer": ["a = 2 m/s²", "v = 20 m/s"],
                    "concept": "Equations of motion with constant acceleration"
                }
            },
            {
                "problem": "A 5 kg block rests on a horizontal surface. The coefficients of static and kinetic friction are 0.6 and 0.4 respectively. Calculate the maximum static frictional force and the acceleration if a horizontal force of 25 N is applied.",
                "difficulty": "medium",
                "solution": {
                    "given": ["m = 5 kg", "μ_s = 0.6", "μ_k = 0.4", "F_applied = 25 N", "g = 10 m/s²"],
                    "find": ["Max static friction (f_s_max)", "Acceleration (a)"],
                    "formula": ["N = mg", "f_s_max = μ_s * N", "f_k = μ_k * N", "F_net = F_applied - f_k = m*a"],
                    "steps": [
                        {
                            "step": "Calculate Normal force (N)",
                            "work": "N = 5 * 10 = 50 N",
                            "result": ""
                        },
                        {
                            "step": "Calculate maximum static friction",
                            "work": "f_s_max = 0.6 * 50 = 30 N",
                            "result": "f_s_max = 30 N"
                        },
                        {
                            "step": "Check if applied force overcomes static friction",
                            "work": "F_applied (25 N) < f_s_max (30 N). ∴ Block does NOT move. Acceleration a = 0.",
                            "result": "a = 0 m/s²"
                        }
                    ],
                    "answer": ["f_s_max = 30 N", "a = 0 m/s² (block does not move)"],
                    "concept": "Static vs. Kinetic Friction & Newton's Second Law"
                }
            },
            {
                "problem": "A ball of mass 0.5 kg is dropped from a height of 20 m. Neglecting air resistance, calculate its speed just before it hits the ground using the work-energy theorem. (g = 10 m/s²)",
                "difficulty": "easy",
                "solution": {
                    "given": ["m = 0.5 kg", "h = 20 m", "u = 0 m/s", "g = 10 m/s²"],
                    "find": "Final speed before impact (v)",
                    "formula": "Work-Energy Theorem: ΔK = W_gravity => ½mv² - ½mu² = mgh",
                    "steps": [
                        {
                            "step": "Apply the Work-Energy Theorem",
                            "work": "Initial K.E. = 0. Final K.E. = ½ * 0.5 * v². Work by gravity = 0.5 * 10 * 20 = 100 J.",
                            "result": "½ * 0.5 * v² = 100"
                        },
                        {
                            "step": "Solve for v",
                            "work": "0.25v² = 100 => v² = 400 => v = 20 m/s",
                            "result": "v = 20 m/s"
                        }
                    ],
                    "answer": "20 m/s",
                    "concept": "Work-Energy Theorem and Conservation of Energy"
                }
            },
            {
                "problem": "A solid sphere of mass 2 kg and radius 0.2 m is rotating about an axis through its center with an angular velocity of 10 rad/s. Calculate its moment of inertia and angular momentum. (I_sphere = 2/5 MR²)",
                "difficulty": "medium",
                "solution": {
                    "given": ["M = 2 kg", "R = 0.2 m", "ω = 10 rad/s", "I = (2/5)MR²"],
                    "find": ["Moment of Inertia (I)", "Angular Momentum (L)"],
                    "formula": ["I = (2/5)MR²", "L = Iω"],
                    "steps": [
                        {
                            "step": "Calculate Moment of Inertia (I)",
                            "work": "I = (2/5) * 2 * (0.2)² = (2/5)*2*0.04 = (0.8)*0.04 = 0.032 kg⋅m²",
                            "result": ""
                        },
                        {
                            "step": "Calculate Angular Momentum (L)",
                            "work": "L = I * ω = 0.032 * 10 = 0.32 kg⋅m²/s",
                            "result": "L = 0.32 kg⋅m²/s"
                        }
                    ],
                    "answer": ["I = 0.032 kg⋅m²", "L = 0.32 kg⋅m²/s"],
                    "concept": "Moment of Inertia and Angular Momentum"
                }
            },
            {
                "problem": "Calculate the force of gravitation between the Earth and the Sun. (Mass of Earth = 6 × 10²⁴ kg, Mass of Sun = 2 × 10³⁰ kg, Average Distance = 1.5 × 10¹¹ m, G = 6.67 × 10⁻¹¹ Nm²/kg²)",
                "difficulty": "medium",
                "solution": {
                    "given": ["M_earth = 6e24 kg", "M_sun = 2e30 kg", "r = 1.5e11 m", "G = 6.67e-11 Nm²/kg²"],
                    "find": "Gravitational Force (F)",
                    "formula": "F = G * (M_earth * M_sun) / r²",
                    "steps": [
                        {
                            "step": "Substitute values into the formula",
                            "work": "F = (6.67e-11) * (6e24) * (2e30) / (1.5e11)²",
                            "result": "F = (6.67e-11 * 1.2e55) / (2.25e22) = (8.004e44) / (2.25e22)"
                        },
                        {
                            "step": "Calculate the final value",
                            "work": "F = 3.557e22 N",
                            "result": "F ≈ 3.56 × 10²² N"
                        }
                    ],
                    "answer": "3.56 × 10²² N",
                    "concept": "Newton's Law of Universal Gravitation"
                }
            },
            {
                "problem": "A projectile is launched with velocity 50 m/s at 37° to the horizontal. Calculate its time of flight, maximum height, and horizontal range. (g = 10 m/s², sin37° = 0.6, cos37° = 0.8)",
                "difficulty": "medium",
                "solution": {
                    "given": ["u = 50 m/s", "θ = 37°", "g = 10 m/s²", "sin37° = 0.6", "cos37° = 0.8"],
                    "find": ["Time of flight T", "Maximum height H", "Horizontal range R"],
                    "formula": ["T = 2u sinθ/g", "H = u² sin²θ/2g", "R = u² sin2θ/g"],
                    "steps": [
                        {
                            "step": "Calculate time of flight",
                            "work": "T = 2 × 50 × 0.6 / 10 = 60/10 = 6 s",
                            "result": ""
                        },
                        {
                            "step": "Calculate maximum height",
                            "work": "H = (50)² × (0.6)² / (2 × 10) = 2500 × 0.36 / 20 = 900/20 = 45 m",
                            "result": ""
                        },
                        {
                            "step": "Calculate horizontal range",
                            "work": "R = (50)² × sin74° / 10 = 2500 × 0.9613 / 10 ≈ 240.3 m",
                            "result": "R ≈ 240.3 m"
                        }
                    ],
                    "answer": ["T = 6 s", "H = 45 m", "R ≈ 240.3 m"],
                    "concept": "Projectile motion parameters"
                }
            },
            {
                "problem": "A block of mass 10 kg is pulled along a horizontal surface by a force of 50 N at 30° to the horizontal. If the coefficient of kinetic friction is 0.2, calculate the acceleration of the block. (g = 10 m/s²)",
                "difficulty": "hard",
                "solution": {
                    "given": ["m = 10 kg", "F = 50 N", "θ = 30°", "μ_k = 0.2", "g = 10 m/s²"],
                    "find": "Acceleration a",
                    "formula": ["F_net = ma", "F_horizontal = F cosθ", "F_vertical = F sinθ", "N = mg - F sinθ", "f_k = μ_k N"],
                    "steps": [
                        {
                            "step": "Calculate horizontal component",
                            "work": "F_x = 50 × cos30° = 50 × 0.866 = 43.3 N",
                            "result": ""
                        },
                        {
                            "step": "Calculate vertical component",
                            "work": "F_y = 50 × sin30° = 50 × 0.5 = 25 N",
                            "result": ""
                        },
                        {
                            "step": "Calculate normal force",
                            "work": "N = mg - F_y = 10 × 10 - 25 = 100 - 25 = 75 N",
                            "result": ""
                        },
                        {
                            "step": "Calculate kinetic friction",
                            "work": "f_k = 0.2 × 75 = 15 N",
                            "result": ""
                        },
                        {
                            "step": "Apply Newton's second law",
                            "work": "F_net = F_x - f_k = 43.3 - 15 = 28.3 N",
                            "result": "a = F_net/m = 28.3/10 = 2.83 m/s²"
                        }
                    ],
                    "answer": "2.83 m/s²",
                    "concept": "Newton's second law with friction and angled force"
                }
            },
            {
                "problem": "A spring with spring constant 200 N/m is compressed by 0.1 m. Calculate the maximum speed it can impart to a 0.5 kg mass when released.",
                "difficulty": "medium",
                "solution": {
                    "given": ["k = 200 N/m", "x = 0.1 m", "m = 0.5 kg"],
                    "find": "Maximum speed v_max",
                    "formula": "Conservation of energy: ½kx² = ½mv²",
                    "steps": [
                        {
                            "step": "Apply energy conservation",
                            "work": "½ × 200 × (0.1)² = ½ × 0.5 × v²",
                            "result": "100 × 0.01 = 0.25 × v²"
                        },
                        {
                            "step": "Solve for v",
                            "work": "1 = 0.25v² ⇒ v² = 4 ⇒ v = 2 m/s",
                            "result": "v_max = 2 m/s"
                        }
                    ],
                    "answer": "2 m/s",
                    "concept": "Energy conservation in spring-mass system"
                }
            },
            {
                "problem": "A car of mass 1000 kg moving at 20 m/s collides with a stationary truck of mass 2000 kg. If they stick together after collision, calculate their common velocity.",
                "difficulty": "medium",
                "solution": {
                    "given": ["m₁ = 1000 kg", "u₁ = 20 m/s", "m₂ = 2000 kg", "u₂ = 0 m/s"],
                    "find": "Common velocity v",
                    "formula": "Conservation of momentum: m₁u₁ + m₂u₂ = (m₁ + m₂)v",
                    "steps": [
                        {
                            "step": "Apply momentum conservation",
                            "work": "1000 × 20 + 2000 × 0 = (1000 + 2000)v",
                            "result": "20000 = 3000v"
                        },
                        {
                            "step": "Solve for v",
                            "work": "v = 20000/3000 = 6.67 m/s",
                            "result": "v = 6.67 m/s"
                        }
                    ],
                    "answer": "6.67 m/s",
                    "concept": "Conservation of momentum in inelastic collision"
                }
            },
            {
                "problem": "A satellite is in circular orbit 500 km above Earth's surface. Calculate its orbital period. (R_earth = 6400 km, g = 9.8 m/s²)",
                "difficulty": "hard",
                "solution": {
                    "given": ["h = 500 km = 5 × 10⁵ m", "R = 6400 km = 6.4 × 10⁶ m", "g = 9.8 m/s²"],
                    "find": "Orbital period T",
                    "formula": ["T = 2π√(r³/GM)", "GM = gR²", "r = R + h"],
                    "steps": [
                        {
                            "step": "Calculate orbital radius",
                            "work": "r = 6.4 × 10⁶ + 5 × 10⁵ = 6.9 × 10⁶ m",
                            "result": ""
                        },
                        {
                            "step": "Calculate GM",
                            "work": "GM = gR² = 9.8 × (6.4 × 10⁶)² = 9.8 × 4.096 × 10¹³ = 4.014 × 10¹⁴",
                            "result": ""
                        },
                        {
                            "step": "Calculate orbital period",
                            "work": "T = 2π√((6.9 × 10⁶)³/(4.014 × 10¹⁴)) = 2π√(3.284 × 10²⁰/4.014 × 10¹⁴) = 2π√(8.18 × 10⁵)",
                            "result": "T = 2π × 904.4 = 5683 s ≈ 94.7 min"
                        }
                    ],
                    "answer": "94.7 minutes",
                    "concept": "Satellite orbital mechanics"
                }
            },
            {
                "problem": "A solid cylinder of mass 2 kg and radius 0.1 m rolls without slipping down an incline of 30°. Calculate its acceleration. (g = 10 m/s², I_cylinder = ½mr²)",
                "difficulty": "hard",
                "solution": {
                    "given": ["m = 2 kg", "r = 0.1 m", "θ = 30°", "g = 10 m/s²", "I = ½mr²"],
                    "find": "Linear acceleration a",
                    "formula": "a = g sinθ / (1 + I/mr²)",
                    "steps": [
                        {
                            "step": "Calculate the denominator",
                            "work": "1 + I/mr² = 1 + (½mr²)/mr² = 1 + ½ = 1.5",
                            "result": ""
                        },
                        {
                            "step": "Calculate acceleration",
                            "work": "a = (10 × sin30°)/1.5 = (10 × 0.5)/1.5 = 5/1.5 = 3.33 m/s²",
                            "result": "a = 3.33 m/s²"
                        }
                    ],
                    "answer": "3.33 m/s²",
                    "concept": "Rolling motion on inclined plane"
                }
            },
            {
                "problem": "A wire of length 2 m and cross-sectional area 10⁻⁶ m² stretches by 1 mm under a load of 100 N. Calculate Young's modulus of the material.",
                "difficulty": "medium",
                "solution": {
                    "given": ["L = 2 m", "A = 10⁻⁶ m²", "ΔL = 1 mm = 10⁻³ m", "F = 100 N"],
                    "find": "Young's modulus Y",
                    "formula": "Y = (F × L)/(A × ΔL)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "Y = (100 × 2)/(10⁻⁶ × 10⁻³) = 200/10⁻⁹ = 2 × 10¹¹ N/m²",
                            "result": "Y = 2 × 10¹¹ Pa"
                        }
                    ],
                    "answer": "2 × 10¹¹ Pa",
                    "concept": "Young's modulus and elasticity"
                }
            },
            {
                "problem": "A man of mass 60 kg is in a lift that is accelerating upward at 2 m/s². Calculate the apparent weight. (g = 10 m/s²)",
                "difficulty": "medium",
                "solution": {
                    "given": ["m = 60 kg", "a = 2 m/s² upward", "g = 10 m/s²"],
                    "find": "Apparent weight N",
                    "formula": "N - mg = ma (for upward acceleration)",
                    "steps": [
                        {
                            "step": "Apply Newton's second law",
                            "work": "N = m(g + a) = 60 × (10 + 2) = 60 × 12",
                            "result": "N = 720 N"
                        }
                    ],
                    "answer": "720 N",
                    "concept": "Apparent weight in accelerating lift"
                }
            },
            {
                "problem": "A bullet of mass 20 g is fired into a wooden block of mass 2 kg with velocity 400 m/s. If the block rises to a height of 0.2 m, calculate the energy lost in the collision. (g = 10 m/s²)",
                "difficulty": "hard",
                "solution": {
                    "given": ["m_b = 0.02 kg", "m_w = 2 kg", "u = 400 m/s", "h = 0.2 m", "g = 10 m/s²"],
                    "find": "Energy lost ΔE",
                    "formula": ["Initial energy = ½m_bu²", "Final energy = (m_b + m_w)gh", "ΔE = Initial - Final"],
                    "steps": [
                        {
                            "step": "Calculate initial energy",
                            "work": "E_i = ½ × 0.02 × (400)² = 0.01 × 160000 = 1600 J",
                            "result": ""
                        },
                        {
                            "step": "Calculate final energy",
                            "work": "E_f = (2 + 0.02) × 10 × 0.2 = 2.02 × 2 = 4.04 J",
                            "result": ""
                        },
                        {
                            "step": "Calculate energy lost",
                            "work": "ΔE = 1600 - 4.04 = 1595.96 J",
                            "result": "ΔE ≈ 1596 J"
                        }
                    ],
                    "answer": "1596 J",
                    "concept": "Energy conservation and loss in inelastic collisions"
                }
            },
            {
                "problem": "A particle moves in a circle of radius 2 m with constant speed 10 m/s. Calculate its centripetal acceleration and angular velocity.",
                "difficulty": "easy",
                "solution": {
                    "given": ["r = 2 m", "v = 10 m/s"],
                    "find": ["Centripetal acceleration a_c", "Angular velocity ω"],
                    "formula": ["a_c = v²/r", "ω = v/r"],
                    "steps": [
                        {
                            "step": "Calculate centripetal acceleration",
                            "work": "a_c = (10)²/2 = 100/2 = 50 m/s²",
                            "result": ""
                        },
                        {
                            "step": "Calculate angular velocity",
                            "work": "ω = 10/2 = 5 rad/s",
                            "result": "ω = 5 rad/s"
                        }
                    ],
                    "answer": ["a_c = 50 m/s²", "ω = 5 rad/s"],
                    "concept": "Uniform circular motion"
                }
            },
            {
                "problem": "A force F = (3x² + 2x) N acts on a particle. Calculate the work done in moving from x = 0 to x = 2 m.",
                "difficulty": "hard",
                "solution": {
                    "given": ["F = 3x² + 2x N", "x_i = 0 m", "x_f = 2 m"],
                    "find": "Work done W",
                    "formula": "W = ∫F dx from x_i to x_f",
                    "steps": [
                        {
                            "step": "Set up the integral",
                            "work": "W = ∫₀² (3x² + 2x) dx",
                            "result": ""
                        },
                        {
                            "step": "Evaluate the integral",
                            "work": "W = [x³ + x²]₀² = (8 + 4) - (0 + 0) = 12 J",
                            "result": "W = 12 J"
                        }
                    ],
                    "answer": "12 J",
                    "concept": "Work done by variable force"
                }
            },
            {
                "problem": "A simple pendulum of length 1 m has a period of 2 seconds on Earth. Calculate its period on a planet where g is one-fourth that of Earth.",
                "difficulty": "medium",
                "solution": {
                    "given": ["L = 1 m", "T_earth = 2 s", "g_planet = g_earth/4"],
                    "find": "Period on planet T_planet",
                    "formula": "T = 2π√(L/g)",
                    "steps": [
                        {
                            "step": "Find relationship between periods",
                            "work": "T ∝ 1/√g ⇒ T_planet/T_earth = √(g_earth/g_planet) = √4 = 2",
                            "result": ""
                        },
                        {
                            "step": "Calculate new period",
                            "work": "T_planet = 2 × T_earth = 2 × 2 = 4 s",
                            "result": "T_planet = 4 s"
                        }
                    ],
                    "answer": "4 s",
                    "concept": "Simple pendulum period dependence on g"
                }
            },
            {
                "problem": "A car negotiates a banked curve of radius 100 m at a speed of 72 km/h. Calculate the banking angle required for no friction. (g = 10 m/s²)",
                "difficulty": "hard",
                "solution": {
                    "given": ["r = 100 m", "v = 72 km/h = 20 m/s", "g = 10 m/s²"],
                    "find": "Banking angle θ",
                    "formula": "tanθ = v²/rg",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "tanθ = (20)²/(100 × 10) = 400/1000 = 0.4",
                            "result": "θ = tan⁻¹(0.4) ≈ 21.8°"
                        }
                    ],
                    "answer": "21.8°",
                    "concept": "Banking of roads"
                }
            },
            {
                "problem": "A pump lifts 1000 kg of water per minute from a well 20 m deep. Calculate the power of the pump. (g = 10 m/s²)",
                "difficulty": "medium",
                "solution": {
                    "given": ["m = 1000 kg", "t = 60 s", "h = 20 m", "g = 10 m/s²"],
                    "find": "Power P",
                    "formula": "P = mgh/t",
                    "steps": [
                        {
                            "step": "Calculate work done per minute",
                            "work": "W = 1000 × 10 × 20 = 2 × 10⁵ J",
                            "result": ""
                        },
                        {
                            "step": "Calculate power",
                            "work": "P = 2 × 10⁵ / 60 = 3333.3 W",
                            "result": "P = 3.33 kW"
                        }
                    ],
                    "answer": "3.33 kW",
                    "concept": "Power calculation"
                }
            },
            {
                "problem": "A particle of mass 0.1 kg is subjected to a force F = -10x N. Calculate its angular frequency and period of oscillation.",
                "difficulty": "hard",
                "solution": {
                    "given": ["m = 0.1 kg", "F = -10x N"],
                    "find": ["Angular frequency ω", "Period T"],
                    "formula": ["F = -mω²x", "T = 2π/ω"],
                    "steps": [
                        {
                            "step": "Compare with SHM force equation",
                            "work": "-10x = -mω²x ⇒ 10 = 0.1 × ω²",
                            "result": "ω² = 100 ⇒ ω = 10 rad/s"
                        },
                        {
                            "step": "Calculate period",
                            "work": "T = 2π/10 = 0.628 s",
                            "result": "T = 0.628 s"
                        }
                    ],
                    "answer": ["ω = 10 rad/s", "T = 0.628 s"],
                    "concept": "Simple harmonic motion from force law"
                }
            },
            {
                "problem": "A man throws a ball vertically upward with velocity 20 m/s from a moving train at 10 m/s. Calculate the initial velocity of the ball relative to ground.",
                "difficulty": "medium",
                "solution": {
                    "given": ["v_ball,train = 20 m/s upward", "v_train,ground = 10 m/s horizontal"],
                    "find": "Initial velocity relative to ground v_ball,ground",
                    "formula": "v_ball,ground = v_ball,train + v_train,ground (vector addition)",
                    "steps": [
                        {
                            "step": "The velocities are perpendicular",
                            "work": "v = √(20² + 10²) = √(400 + 100) = √500 = 22.36 m/s",
                            "result": ""
                        },
                        {
                            "step": "Find direction",
                            "work": "θ = tan⁻¹(20/10) = tan⁻¹(2) = 63.4° to horizontal",
                            "result": "22.36 m/s at 63.4° to horizontal"
                        }
                    ],
                    "answer": "22.36 m/s at 63.4° to horizontal",
                    "concept": "Relative motion and vector addition"
                }
            },
            {
                "problem": "A block of mass 2 kg is pushed against a spring (k = 500 N/m) compressing it by 0.1 m. When released, it moves on a rough surface (μ_k = 0.2). Calculate the distance it travels before stopping. (g = 10 m/s²)",
                "difficulty": "hard",
                "solution": {
                    "given": ["m = 2 kg", "k = 500 N/m", "x = 0.1 m", "μ_k = 0.2", "g = 10 m/s²"],
                    "find": "Distance traveled s",
                    "formula": "Work-energy theorem: ½kx² = μ_k mg s",
                    "steps": [
                        {
                            "step": "Apply work-energy theorem",
                            "work": "½ × 500 × (0.1)² = 0.2 × 2 × 10 × s",
                            "result": "2.5 = 4s"
                        },
                        {
                            "step": "Solve for s",
                            "work": "s = 2.5/4 = 0.625 m",
                            "result": "s = 0.625 m"
                        }
                    ],
                    "answer": "0.625 m",
                    "concept": "Work-energy theorem with friction"
                }
            },
            {
                "problem": "A particle moves with position vector r = (3t²)i + (4t³)j. Calculate its velocity and acceleration at t = 2 s.",
                "difficulty": "medium",
                "solution": {
                    "given": ["r = 3t² i + 4t³ j", "t = 2 s"],
                    "find": ["Velocity v", "Acceleration a"],
                    "formula": ["v = dr/dt", "a = dv/dt"],
                    "steps": [
                        {
                            "step": "Differentiate to find velocity",
                            "work": "v = d(3t²)/dt i + d(4t³)/dt j = 6t i + 12t² j",
                            "result": "At t=2: v = 12 i + 48 j m/s"
                        },
                        {
                            "step": "Differentiate to find acceleration",
                            "work": "a = d(6t)/dt i + d(12t²)/dt j = 6 i + 24t j",
                            "result": "At t=2: a = 6 i + 48 j m/s²"
                        }
                    ],
                    "answer": ["v = 12i + 48j m/s", "a = 6i + 48j m/s²"],
                    "concept": "Kinematics using calculus"
                }
            },
            {
                "problem": "A uniform ladder of length 5 m and mass 20 kg rests against a smooth wall. If the coefficient of friction with ground is 0.4, calculate the maximum angle before slipping occurs. (g = 10 m/s²)",
                "difficulty": "hard",
                "solution": {
                    "given": ["L = 5 m", "m = 20 kg", "μ = 0.4", "g = 10 m/s²", "Wall is smooth"],
                    "find": "Maximum angle θ with vertical",
                    "formula": ["For equilibrium: ΣF_x = 0, ΣF_y = 0, Στ = 0", "f = μN at ground"],
                    "steps": [
                        {
                            "step": "Set up equations",
                            "work": "N_wall = f = μmg, mg = N_ground",
                            "result": "Take torque about ground contact: mg(L/2)sinθ = N_wall L cosθ"
                        },
                        {
                            "step": "Solve for θ",
                            "work": "mg sinθ/2 = μmg cosθ ⇒ tanθ = 2μ = 0.8",
                            "result": "θ = tan⁻¹(0.8) ≈ 38.7°"
                        }
                    ],
                    "answer": "38.7° with vertical",
                    "concept": "Static equilibrium and friction"
                }
            },
            {
                "problem": "A particle of mass 0.5 kg is moving with velocity 4 m/s. A force of 2 N acts on it for 3 seconds in the direction of motion. Calculate the final kinetic energy.",
                "difficulty": "easy",
                "solution": {
                    "given": ["m = 0.5 kg", "u = 4 m/s", "F = 2 N", "t = 3 s"],
                    "find": "Final kinetic energy K_f",
                    "formula": ["v = u + at", "a = F/m", "K = ½mv²"],
                    "steps": [
                        {
                            "step": "Calculate acceleration",
                            "work": "a = 2/0.5 = 4 m/s²",
                            "result": ""
                        },
                        {
                            "step": "Calculate final velocity",
                            "work": "v = 4 + 4 × 3 = 16 m/s",
                            "result": ""
                        },
                        {
                            "step": "Calculate final kinetic energy",
                            "work": "K_f = ½ × 0.5 × (16)² = 0.25 × 256 = 64 J",
                            "result": "K_f = 64 J"
                        }
                    ],
                    "answer": "64 J",
                    "concept": "Kinematics and kinetic energy"
                }
            },
            {
                "problem": "A circular disc of mass 5 kg and radius 0.5 m is rotating about its axis at 10 rad/s. Calculate its angular momentum and rotational kinetic energy. (I_disc = ½mr²)",
                "difficulty": "medium",
                "solution": {
                    "given": ["m = 5 kg", "r = 0.5 m", "ω = 10 rad/s", "I = ½mr²"],
                    "find": ["Angular momentum L", "Rotational KE K_rot"],
                    "formula": ["L = Iω", "K_rot = ½Iω²"],
                    "steps": [
                        {
                            "step": "Calculate moment of inertia",
                            "work": "I = ½ × 5 × (0.5)² = 2.5 × 0.25 = 0.625 kg·m²",
                            "result": ""
                        },
                        {
                            "step": "Calculate angular momentum",
                            "work": "L = 0.625 × 10 = 6.25 kg·m²/s",
                            "result": ""
                        },
                        {
                            "step": "Calculate rotational KE",
                            "work": "K_rot = ½ × 0.625 × (10)² = 0.3125 × 100 = 31.25 J",
                            "result": "K_rot = 31.25 J"
                        }
                    ],
                    "answer": ["L = 6.25 kg·m²/s", "K_rot = 31.25 J"],
                    "concept": "Rotational dynamics"
                }
            },
            {
                "problem": "A body is projected from the surface of Earth with escape velocity. Calculate its speed when it reaches a height equal to Earth's radius. (R_earth = 6400 km, g = 10 m/s²)",
                "difficulty": "hard",
                "solution": {
                    "given": ["Initial speed = v_escape = √(2gR)", "Final height = R", "R = 6.4 × 10⁶ m", "g = 10 m/s²"],
                    "find": "Speed at height R",
                    "formula": "Conservation of energy: ½mv² - GMm/r = constant",
                    "steps": [
                        {
                            "step": "Initial energy at surface",
                            "work": "E_i = ½m(2gR) - GMm/R = mgR - mgR = 0",
                            "result": ""
                        },
                        {
                            "step": "Final energy at height R",
                            "work": "E_f = ½mv² - GMm/2R = ½mv² - ½mgR",
                            "result": "Set E_f = E_i = 0"
                        },
                        {
                            "step": "Solve for v",
                            "work": "½mv² = ½mgR ⇒ v² = gR ⇒ v = √(10 × 6.4 × 10⁶) = 8000 m/s",
                            "result": "v = 8 km/s"
                        }
                    ],
                    "answer": "8 km/s",
                    "concept": "Gravitational potential energy and escape velocity"
                }
            },
            {
                "problem": "A force of 10 N acts on a particle of mass 2 kg initially at rest. Calculate the work done in the first 4 seconds.",
                "difficulty": "medium",
                "solution": {
                    "given": ["F = 10 N", "m = 2 kg", "u = 0 m/s", "t = 4 s"],
                    "find": "Work done W",
                    "formula": ["W = F × s", "s = ut + ½at²", "a = F/m"],
                    "steps": [
                        {
                            "step": "Calculate acceleration",
                            "work": "a = 10/2 = 5 m/s²",
                            "result": ""
                        },
                        {
                            "step": "Calculate displacement",
                            "work": "s = 0 + ½ × 5 × (4)² = 2.5 × 16 = 40 m",
                            "result": ""
                        },
                        {
                            "step": "Calculate work done",
                            "work": "W = 10 × 40 = 400 J",
                            "result": "W = 400 J"
                        }
                    ],
                    "answer": "400 J",
                    "concept": "Work done by constant force"
                }
            },
            {
                "problem": "A particle is executing SHM with amplitude 0.1 m and frequency 5 Hz. Calculate its maximum acceleration and velocity.",
                "difficulty": "medium",
                "solution": {
                    "given": ["A = 0.1 m", "f = 5 Hz"],
                    "find": ["Maximum acceleration a_max", "Maximum velocity v_max"],
                    "formula": ["ω = 2πf", "a_max = Aω²", "v_max = Aω"],
                    "steps": [
                        {
                            "step": "Calculate angular frequency",
                            "work": "ω = 2π × 5 = 10π rad/s",
                            "result": ""
                        },
                        {
                            "step": "Calculate maximum acceleration",
                            "work": "a_max = 0.1 × (10π)² = 0.1 × 100π² = 10π² m/s² ≈ 98.7 m/s²",
                            "result": ""
                        },
                        {
                            "step": "Calculate maximum velocity",
                            "work": "v_max = 0.1 × 10π = π m/s ≈ 3.14 m/s",
                            "result": "v_max = 3.14 m/s"
                        }
                    ],
                    "answer": ["a_max ≈ 98.7 m/s²", "v_max ≈ 3.14 m/s"],
                    "concept": "Simple harmonic motion parameters"
                }
            },
            {
                "problem": "A man of mass 70 kg is standing on a weighing machine in a lift. If the machine reads 630 N, calculate the acceleration and direction of the lift. (g = 10 m/s²)",
                "difficulty": "medium",
                "solution": {
                    "given": ["m = 70 kg", "N = 630 N", "g = 10 m/s²"],
                    "find": ["Acceleration a", "Direction of motion"],
                    "formula": "N - mg = ma (for upward acceleration)",
                    "steps": [
                        {
                            "step": "Apply Newton's second law",
                            "work": "630 - 70 × 10 = 70a ⇒ 630 - 700 = 70a ⇒ -70 = 70a",
                            "result": "a = -1 m/s²"
                        },
                        {
                            "step": "Interpret result",
                            "work": "Negative acceleration means lift is accelerating downward at 1 m/s²",
                            "result": "Downward acceleration of 1 m/s²"
                        }
                    ],
                    "answer": ["a = 1 m/s² downward", "Lift is accelerating downward"],
                    "concept": "Apparent weight in accelerating lift"
                }
            },
            {
                "problem": "A bullet of mass 10 g is fired with velocity 500 m/s into a wooden block of mass 2 kg suspended by a string. Calculate the maximum height reached by the system. (g = 10 m/s²)",
                "difficulty": "hard",
                "solution": {
                    "given": ["m_b = 0.01 kg", "u_b = 500 m/s", "m_w = 2 kg", "g = 10 m/s²"],
                    "find": "Maximum height h",
                    "formula": ["Conservation of momentum for collision", "Conservation of energy for swing"],
                    "steps": [
                        {
                            "step": "Find common velocity after collision",
                            "work": "m_b u_b = (m_b + m_w)v ⇒ 0.01 × 500 = 2.01v ⇒ v = 5/2.01 ≈ 2.49 m/s",
                            "result": ""
                        },
                        {
                            "step": "Apply energy conservation",
                            "work": "½(m_b + m_w)v² = (m_b + m_w)gh ⇒ h = v²/2g = (2.49)²/20 = 6.2/20 = 0.31 m",
                            "result": "h = 0.31 m"
                        }
                    ],
                    "answer": "0.31 m",
                    "concept": "Ballistic pendulum - momentum and energy conservation"
                }
            }
        ]
    },

    "magnetic_effects_of_current_and_magnetism": {
        "title": "Magnetic Effects of Current and Magnetism",
        "weightage": "6-8%",
        "introduction": "This chapter deals with the magnetic fields produced by electric currents and the behavior of magnets and magnetic materials. It covers Biot-Savart law, Ampere's circuital law, force on current-carrying conductors, moving charges in magnetic fields, electromagnetic induction, and properties of magnetic materials. Understanding these concepts is crucial for applications ranging from electric motors to transformers and is essential for competitive exams.",

        "topics": [
            {
                "name": "Magnetic Field and Force",
                "description": "Study of magnetic fields and forces on moving charges and current-carrying conductors.",
                "subtopics": [
                    {
                        "name": "Biot-Savart Law",
                        "explanation": "dB = (μ₀/4π) * (Idl × r̂)/r², gives magnetic field due to small current element."
                    },
                    {
                        "name": "Force on Moving Charge",
                        "explanation": "F = q(v × B), Lorentz force on charged particle moving in magnetic field."
                    },
                    {
                        "name": "Force on Current Conductor",
                        "explanation": "F = I(l × B), force on straight current-carrying conductor in magnetic field."
                    }
                ]
            },
            {
                "name": "Ampere's Circuital Law",
                "description": "Relates magnetic field around a closed loop to current passing through the loop.",
                "subtopics": [
                    {
                        "name": "Ampere's Law",
                        "explanation": "∮B·dl = μ₀I_enc, integral form relating magnetic field to enclosed current."
                    },
                    {
                        "name": "Applications",
                        "explanation": "Used to find magnetic field of straight wire, solenoid, and toroid."
                    }
                ]
            },
            {
                "name": "Electromagnetic Induction",
                "description": "Study of induced EMF due to changing magnetic flux.",
                "subtopics": [
                    {
                        "name": "Faraday's Law",
                        "explanation": "ε = -dΦ_B/dt, induced EMF equals negative rate of change of magnetic flux."
                    },
                    {
                        "name": "Lenz's Law",
                        "explanation": "Direction of induced current opposes the change in magnetic flux that produced it."
                    },
                    {
                        "name": "Self Induction",
                        "explanation": "ε = -L(dI/dt), EMF induced in coil due to change in its own current."
                    }
                ]
            },
            {
                "name": "Magnetic Properties of Materials",
                "description": "Classification of materials based on their magnetic behavior.",
                "subtopics": [
                    {
                        "name": "Diamagnetic Materials",
                        "explanation": "Weakly repelled by magnets, χ < 0, μ_r < 1 (e.g., water, copper)."
                    },
                    {
                        "name": "Paramagnetic Materials",
                        "explanation": "Weakly attracted by magnets, χ > 0, μ_r > 1 (e.g., aluminum, oxygen)."
                    },
                    {
                        "name": "Ferromagnetic Materials",
                        "explanation": "Strongly attracted by magnets, χ >> 0, μ_r >> 1 (e.g., iron, cobalt, nickel)."
                    }
                ]
            },
            {
                "name": "AC Circuits",
                "description": "Behavior of circuits with alternating current and electromagnetic devices.",
                "subtopics": [
                    {
                        "name": "Transformer",
                        "explanation": "V_s/V_p = N_s/N_p = I_p/I_s, device for changing AC voltage levels."
                    },
                    {
                        "name": "LC Oscillations",
                        "explanation": "Energy exchange between capacitor and inductor in oscillatory circuit."
                    }
                ]
            }
        ],

        "formulas": {
            "Magnetic Field": [
                {
                    "name": "Straight Wire",
                    "expression": "B = μ₀I/2πr",
                    "description": "Magnetic field at distance r from long straight current-carrying wire."
                },
                {
                    "name": "Circular Loop",
                    "expression": "B = μ₀I/2R (center)",
                    "description": "Magnetic field at center of circular loop of radius R."
                },
                {
                    "name": "Solenoid",
                    "expression": "B = μ₀nI",
                    "description": "Magnetic field inside long solenoid with n turns per unit length."
                }
            ],
            "Magnetic Force": [
                {
                    "name": "Moving Charge",
                    "expression": "F = q(v × B)",
                    "description": "Force on charged particle moving in magnetic field."
                },
                {
                    "name": "Current Element",
                    "expression": "F = I(l × B)",
                    "description": "Force on straight current-carrying conductor in magnetic field."
                }
            ],
            "Electromagnetic Induction": [
                {
                    "name": "Faraday's Law",
                    "expression": "ε = -dΦ_B/dt",
                    "description": "Induced EMF equals negative rate of change of magnetic flux."
                },
                {
                    "name": "Motional EMF",
                    "expression": "ε = Bvl",
                    "description": "EMF induced in conductor of length l moving with velocity v perpendicular to B."
                }
            ],
            "AC Circuits": [
                {
                    "name": "Transformer",
                    "expression": "V_s/V_p = N_s/N_p = I_p/I_s",
                    "description": "Voltage and current transformation ratios in ideal transformer."
                }
            ]
        },

        "problems": [
            {
                "problem": "A long straight wire carries a current of 5 A. Calculate the magnetic field at a point 10 cm away from the wire. (μ₀ = 4π × 10⁻⁷ Tm/A)",
                "difficulty": "easy",
                "solution": {
                    "given": ["I = 5 A", "r = 10 cm = 0.1 m", "μ₀ = 4π × 10⁻⁷ Tm/A"],
                    "find": "Magnetic field B",
                    "formula": "B = μ₀I/2πr",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "B = (4π × 10⁻⁷ × 5)/(2π × 0.1) = (20π × 10⁻⁷)/(0.2π)",
                            "result": "B = 10⁻⁵ T = 10 μT"
                        }
                    ],
                    "answer": "10 μT",
                    "concept": "Magnetic field due to straight current-carrying wire"
                }
            },
            {
                "problem": "A proton moves with velocity 3 × 10⁶ m/s perpendicular to a magnetic field of 0.5 T. Calculate the force on the proton. (q = 1.6 × 10⁻¹⁹ C)",
                "difficulty": "easy",
                "solution": {
                    "given": ["v = 3 × 10⁶ m/s", "B = 0.5 T", "q = 1.6 × 10⁻¹⁹ C", "θ = 90°"],
                    "find": "Force F",
                    "formula": "F = qvB sinθ",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "F = 1.6 × 10⁻¹⁹ × 3 × 10⁶ × 0.5 × sin90°",
                            "result": "F = 2.4 × 10⁻¹³ N"
                        }
                    ],
                    "answer": "2.4 × 10⁻¹³ N",
                    "concept": "Force on moving charge in magnetic field"
                }
            },
            {
                "problem": "A circular coil of 50 turns and radius 10 cm carries a current of 2 A. Calculate the magnetic field at its center. (μ₀ = 4π × 10⁻⁷ Tm/A)",
                "difficulty": "medium",
                "solution": {
                    "given": ["N = 50 turns", "R = 10 cm = 0.1 m", "I = 2 A", "μ₀ = 4π × 10⁻⁷ Tm/A"],
                    "find": "Magnetic field B at center",
                    "formula": "B = μ₀NI/2R",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "B = (4π × 10⁻⁷ × 50 × 2)/(2 × 0.1) = (4π × 10⁻⁷ × 100)/(0.2)",
                            "result": "B = 2π × 10⁻⁴ T ≈ 6.28 × 10⁻⁴ T"
                        }
                    ],
                    "answer": "6.28 × 10⁻⁴ T",
                    "concept": "Magnetic field at center of circular coil"
                }
            },
            {
                "problem": "A straight conductor of length 0.5 m carrying current 4 A is placed perpendicular to a magnetic field of 0.8 T. Calculate the force on the conductor.",
                "difficulty": "easy",
                "solution": {
                    "given": ["l = 0.5 m", "I = 4 A", "B = 0.8 T", "θ = 90°"],
                    "find": "Force F",
                    "formula": "F = BIl sinθ",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "F = 0.8 × 4 × 0.5 × sin90° = 0.8 × 4 × 0.5 × 1",
                            "result": "F = 1.6 N"
                        }
                    ],
                    "answer": "1.6 N",
                    "concept": "Force on current-carrying conductor"
                }
            },
            {
                "problem": "A solenoid of length 50 cm has 400 turns and carries current 3 A. Calculate the magnetic field inside the solenoid. (μ₀ = 4π × 10⁻⁷ Tm/A)",
                "difficulty": "medium",
                "solution": {
                    "given": ["L = 50 cm = 0.5 m", "N = 400 turns", "I = 3 A", "μ₀ = 4π × 10⁻⁷ Tm/A"],
                    "find": "Magnetic field B",
                    "formula": "B = μ₀nI, where n = N/L",
                    "steps": [
                        {
                            "step": "Calculate turns per unit length",
                            "work": "n = 400/0.5 = 800 turns/m",
                            "result": ""
                        },
                        {
                            "step": "Calculate magnetic field",
                            "work": "B = 4π × 10⁻⁷ × 800 × 3 = 4π × 10⁻⁷ × 2400",
                            "result": "B = 3.016 × 10⁻³ T ≈ 3.02 mT"
                        }
                    ],
                    "answer": "3.02 mT",
                    "concept": "Magnetic field inside solenoid"
                }
            },
            {
                "problem": "A charged particle enters a uniform magnetic field perpendicular to its direction. If the magnetic field is 0.4 T and the radius of curvature is 0.2 m, calculate the momentum of the particle. (q = 1.6 × 10⁻¹⁹ C)",
                "difficulty": "medium",
                "solution": {
                    "given": ["B = 0.4 T", "r = 0.2 m", "q = 1.6 × 10⁻¹⁹ C", "θ = 90°"],
                    "find": "Momentum p",
                    "formula": "r = p/qB (for perpendicular motion)",
                    "steps": [
                        {
                            "step": "Rearrange formula",
                            "work": "p = qBr",
                            "result": ""
                        },
                        {
                            "step": "Substitute values",
                            "work": "p = 1.6 × 10⁻¹⁹ × 0.4 × 0.2 = 1.28 × 10⁻²⁰ kg·m/s",
                            "result": "p = 1.28 × 10⁻²⁰ kg·m/s"
                        }
                    ],
                    "answer": "1.28 × 10⁻²⁰ kg·m/s",
                    "concept": "Circular motion in magnetic field"
                }
            },
            {
                "problem": "A rectangular loop of sides 10 cm and 5 cm is placed perpendicular to a magnetic field of 0.2 T. If the field decreases to zero in 0.1 seconds, calculate the average induced EMF.",
                "difficulty": "medium",
                "solution": {
                    "given": ["a = 10 cm = 0.1 m", "b = 5 cm = 0.05 m", "B_i = 0.2 T", "B_f = 0 T", "Δt = 0.1 s", "θ = 0°"],
                    "find": "Average induced EMF ε",
                    "formula": "ε = -dΦ_B/dt = -A dB/dt (for constant area)",
                    "steps": [
                        {
                            "step": "Calculate area",
                            "work": "A = a × b = 0.1 × 0.05 = 0.005 m²",
                            "result": ""
                        },
                        {
                            "step": "Calculate rate of change of flux",
                            "work": "dΦ_B/dt = A dB/dt = 0.005 × (0 - 0.2)/0.1 = 0.005 × (-2) = -0.01 Wb/s",
                            "result": ""
                        },
                        {
                            "step": "Calculate EMF",
                            "work": "ε = -(-0.01) = 0.01 V",
                            "result": "ε = 10 mV"
                        }
                    ],
                    "answer": "10 mV",
                    "concept": "Faraday's law of electromagnetic induction"
                }
            },
            {
                "problem": "A transformer has 200 turns in primary and 50 turns in secondary. If primary voltage is 240 V, calculate secondary voltage and current if primary current is 2 A (assume ideal transformer).",
                "difficulty": "easy",
                "solution": {
                    "given": ["N_p = 200", "N_s = 50", "V_p = 240 V", "I_p = 2 A"],
                    "find": ["Secondary voltage V_s", "Secondary current I_s"],
                    "formula": ["V_s/V_p = N_s/N_p", "I_s/I_p = N_p/N_s"],
                    "steps": [
                        {
                            "step": "Calculate secondary voltage",
                            "work": "V_s = V_p × (N_s/N_p) = 240 × (50/200) = 240 × 0.25 = 60 V",
                            "result": ""
                        },
                        {
                            "step": "Calculate secondary current",
                            "work": "I_s = I_p × (N_p/N_s) = 2 × (200/50) = 2 × 4 = 8 A",
                            "result": "I_s = 8 A"
                        }
                    ],
                    "answer": ["V_s = 60 V", "I_s = 8 A"],
                    "concept": "Transformer principle"
                }
            },
            {
                "problem": "A wire of length 1 m is moving perpendicular to its length with velocity 5 m/s in a magnetic field of 0.4 T. Calculate the motional EMF induced in the wire.",
                "difficulty": "easy",
                "solution": {
                    "given": ["l = 1 m", "v = 5 m/s", "B = 0.4 T", "θ = 90°"],
                    "find": "Motional EMF ε",
                    "formula": "ε = Bvl sinθ",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "ε = 0.4 × 5 × 1 × sin90° = 0.4 × 5 × 1 × 1",
                            "result": "ε = 2 V"
                        }
                    ],
                    "answer": "2 V",
                    "concept": "Motional EMF"
                }
            },
            {
                "problem": "Two long parallel wires 20 cm apart carry currents of 10 A and 15 A in the same direction. Calculate the force per unit length between them. (μ₀ = 4π × 10⁻⁷ Tm/A)",
                "difficulty": "hard",
                "solution": {
                    "given": ["d = 20 cm = 0.2 m", "I₁ = 10 A", "I₂ = 15 A", "μ₀ = 4π × 10⁻⁷ Tm/A"],
                    "find": "Force per unit length F/l",
                    "formula": "F/l = μ₀I₁I₂/2πd",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "F/l = (4π × 10⁻⁷ × 10 × 15)/(2π × 0.2) = (600π × 10⁻⁷)/(0.4π)",
                            "result": "F/l = 1.5 × 10⁻⁴ N/m"
                        }
                    ],
                    "answer": "1.5 × 10⁻⁴ N/m",
                    "concept": "Force between parallel current-carrying wires"
                }
            },
            {
                "problem": "A coil of 100 turns and area 0.01 m² is rotated in a magnetic field of 0.5 T. If it rotates at 60 rpm, calculate the maximum induced EMF.",
                "difficulty": "hard",
                "solution": {
                    "given": ["N = 100 turns", "A = 0.01 m²", "B = 0.5 T", "f = 60 rpm = 1 Hz"],
                    "find": "Maximum EMF ε_max",
                    "formula": "ε_max = NBAω, where ω = 2πf",
                    "steps": [
                        {
                            "step": "Calculate angular frequency",
                            "work": "ω = 2π × 1 = 2π rad/s",
                            "result": ""
                        },
                        {
                            "step": "Calculate maximum EMF",
                            "work": "ε_max = 100 × 0.5 × 0.01 × 2π = 100 × 0.5 × 0.01 × 6.283",
                            "result": "ε_max = 3.14 V"
                        }
                    ],
                    "answer": "3.14 V",
                    "concept": "EMF in rotating coil"
                }
            },
            {
                "problem": "A proton is accelerated through 1000 V and enters a magnetic field of 0.1 T perpendicular to its velocity. Calculate the radius of its path. (m_p = 1.67 × 10⁻²⁷ kg, q = 1.6 × 10⁻¹⁹ C)",
                "difficulty": "hard",
                "solution": {
                    "given": ["V = 1000 V", "B = 0.1 T", "m_p = 1.67 × 10⁻²⁷ kg", "q = 1.6 × 10⁻¹⁹ C", "θ = 90°"],
                    "find": "Radius r",
                    "formula": ["r = mv/qB", "½mv² = qV"],
                    "steps": [
                        {
                            "step": "Find velocity from energy",
                            "work": "½mv² = qV ⇒ v = √(2qV/m) = √(2 × 1.6 × 10⁻¹⁹ × 1000/1.67 × 10⁻²⁷)",
                            "result": "v = √(3.2 × 10⁻¹⁶/1.67 × 10⁻²⁷) = √(1.916 × 10¹¹) = 4.38 × 10⁵ m/s"
                        },
                        {
                            "step": "Calculate radius",
                            "work": "r = mv/qB = (1.67 × 10⁻²⁷ × 4.38 × 10⁵)/(1.6 × 10⁻¹⁹ × 0.1)",
                            "result": "r = (7.31 × 10⁻²²)/(1.6 × 10⁻²⁰) = 0.0457 m = 4.57 cm"
                        }
                    ],
                    "answer": "4.57 cm",
                    "concept": "Charged particle in magnetic field after acceleration"
                }
            },
            {
                "problem": "A toroid has 1000 turns and carries current 2 A. If its mean radius is 20 cm, calculate the magnetic field inside it. (μ₀ = 4π × 10⁻⁷ Tm/A)",
                "difficulty": "medium",
                "solution": {
                    "given": ["N = 1000 turns", "I = 2 A", "r = 20 cm = 0.2 m", "μ₀ = 4π × 10⁻⁷ Tm/A"],
                    "find": "Magnetic field B",
                    "formula": "B = μ₀NI/2πr",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "B = (4π × 10⁻⁷ × 1000 × 2)/(2π × 0.2) = (8π × 10⁻⁴)/(0.4π)",
                            "result": "B = 2 × 10⁻³ T = 2 mT"
                        }
                    ],
                    "answer": "2 mT",
                    "concept": "Magnetic field inside toroid"
                }
            },
            {
                "problem": "A square loop of side 0.1 m carrying current 5 A is placed in a uniform magnetic field of 0.3 T with its plane at 60° to the field. Calculate the torque on the loop.",
                "difficulty": "hard",
                "solution": {
                    "given": ["a = 0.1 m", "I = 5 A", "B = 0.3 T", "θ = 60°"],
                    "find": "Torque τ",
                    "formula": "τ = NIAB sinθ, where A = a²",
                    "steps": [
                        {
                            "step": "Calculate area",
                            "work": "A = (0.1)² = 0.01 m²",
                            "result": ""
                        },
                        {
                            "step": "Calculate torque",
                            "work": "τ = 1 × 5 × 0.01 × 0.3 × sin60° = 0.015 × 0.866",
                            "result": "τ = 0.013 N·m"
                        }
                    ],
                    "answer": "0.013 N·m",
                    "concept": "Torque on current loop in magnetic field"
                }
            },
            {
                "problem": "A coil has self-inductance 0.2 H. If the current changes from 0 to 5 A in 0.1 seconds, calculate the average induced EMF.",
                "difficulty": "medium",
                "solution": {
                    "given": ["L = 0.2 H", "ΔI = 5 A", "Δt = 0.1 s"],
                    "find": "Average EMF ε",
                    "formula": "ε = -L ΔI/Δt",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "ε = -0.2 × (5)/0.1 = -0.2 × 50",
                            "result": "ε = -10 V"
                        }
                    ],
                    "answer": "10 V (magnitude)",
                    "concept": "Self-induction and induced EMF"
                }
            },
            {
                "problem": "An electron moves in a circular path perpendicular to a magnetic field of 10⁻³ T. Calculate its time period. (m_e = 9.1 × 10⁻³¹ kg, q = 1.6 × 10⁻¹⁹ C)",
                "difficulty": "medium",
                "solution": {
                    "given": ["B = 10⁻³ T", "m_e = 9.1 × 10⁻³¹ kg", "q = 1.6 × 10⁻¹⁹ C"],
                    "find": "Time period T",
                    "formula": "T = 2πm/qB",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "T = (2π × 9.1 × 10⁻³¹)/(1.6 × 10⁻¹⁹ × 10⁻³) = (5.72 × 10⁻³⁰)/(1.6 × 10⁻²²)",
                            "result": "T = 3.575 × 10⁻⁸ s"
                        }
                    ],
                    "answer": "35.75 ns",
                    "concept": "Time period of charged particle in magnetic field"
                }
            },
            {
                "problem": "A galvanometer has resistance 20 Ω and gives full-scale deflection for 1 mA current. Calculate the shunt resistance required to convert it into an ammeter of range 0-1 A.",
                "difficulty": "hard",
                "solution": {
                    "given": ["G = 20 Ω", "I_g = 1 mA = 0.001 A", "I = 1 A"],
                    "find": "Shunt resistance S",
                    "formula": "S = (I_g G)/(I - I_g)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "S = (0.001 × 20)/(1 - 0.001) = 0.02/0.999",
                            "result": "S = 0.02002 Ω ≈ 0.02 Ω"
                        }
                    ],
                    "answer": "0.02 Ω",
                    "concept": "Conversion of galvanometer to ammeter"
                }
            },
            {
                "problem": "A wire is bent into a semicircle of radius 0.2 m and carries current 3 A. Calculate the magnetic field at the center. (μ₀ = 4π × 10⁻⁷ Tm/A)",
                "difficulty": "hard",
                "solution": {
                    "given": ["R = 0.2 m", "I = 3 A", "μ₀ = 4π × 10⁻⁷ Tm/A"],
                    "find": "Magnetic field at center B",
                    "formula": "B = μ₀I/4R (for semicircular wire)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "B = (4π × 10⁻⁷ × 3)/(4 × 0.2) = (12π × 10⁻⁷)/(0.8)",
                            "result": "B = 4.71 × 10⁻⁶ T = 4.71 μT"
                        }
                    ],
                    "answer": "4.71 μT",
                    "concept": "Magnetic field due to semicircular current"
                }
            },
            {
                "problem": "A charged particle with kinetic energy 2 keV moves perpendicular to a magnetic field of 0.5 T. Calculate the radius of its path. (m_p = 1.67 × 10⁻²⁷ kg, q = 1.6 × 10⁻¹⁹ C)",
                "difficulty": "hard",
                "solution": {
                    "given": ["K = 2 keV = 3200 × 10⁻¹⁹ J", "B = 0.5 T", "m_p = 1.67 × 10⁻²⁷ kg", "q = 1.6 × 10⁻¹⁹ C"],
                    "find": "Radius r",
                    "formula": ["r = mv/qB", "K = ½mv²"],
                    "steps": [
                        {
                            "step": "Find momentum",
                            "work": "p = √(2mK) = √(2 × 1.67 × 10⁻²⁷ × 3200 × 10⁻¹⁹) = √(1.0688 × 10⁻⁴²)",
                            "result": "p = 1.034 × 10⁻²¹ kg·m/s"
                        },
                        {
                            "step": "Calculate radius",
                            "work": "r = p/qB = 1.034 × 10⁻²¹/(1.6 × 10⁻¹⁹ × 0.5) = 1.034 × 10⁻²¹/(8 × 10⁻²⁰)",
                            "result": "r = 0.0129 m = 1.29 cm"
                        }
                    ],
                    "answer": "1.29 cm",
                    "concept": "Radius of charged particle path from kinetic energy"
                }
            },
            {
                "problem": "Two concentric circular coils have radii 10 cm and 20 cm and carry currents 2 A and 3 A respectively in opposite directions. Calculate the magnetic field at the common center. (μ₀ = 4π × 10⁻⁷ Tm/A)",
                "difficulty": "hard",
                "solution": {
                    "given": ["R₁ = 10 cm = 0.1 m", "I₁ = 2 A", "R₂ = 20 cm = 0.2 m", "I₂ = 3 A", "μ₀ = 4π × 10⁻⁷ Tm/A", "Currents in opposite directions"],
                    "find": "Net magnetic field at center B_net",
                    "formula": "B = μ₀I/2R (for each coil)",
                    "steps": [
                        {
                            "step": "Calculate field due to first coil",
                            "work": "B₁ = (4π × 10⁻⁷ × 2)/(2 × 0.1) = (8π × 10⁻⁷)/(0.2) = 4π × 10⁻⁶ T",
                            "result": ""
                        },
                        {
                            "step": "Calculate field due to second coil",
                            "work": "B₂ = (4π × 10⁻⁷ × 3)/(2 × 0.2) = (12π × 10⁻⁷)/(0.4) = 3π × 10⁻⁶ T",
                            "result": ""
                        },
                        {
                            "step": "Find net field (opposite directions)",
                            "work": "B_net = B₁ - B₂ = 4π × 10⁻⁶ - 3π × 10⁻⁶ = π × 10⁻⁶ T",
                            "result": "B_net = 3.14 × 10⁻⁶ T"
                        }
                    ],
                    "answer": "3.14 μT",
                    "concept": "Magnetic field due to multiple current loops"
                }
            },
            {
                "problem": "A charged particle with specific charge (q/m) = 10⁷ C/kg enters a magnetic field of 0.1 T perpendicularly. Calculate the time period of its circular motion.",
                "difficulty": "medium",
                "solution": {
                    "given": ["q/m = 10⁷ C/kg", "B = 0.1 T", "θ = 90°"],
                    "find": "Time period T",
                    "formula": "T = 2πm/qB = 2π/((q/m)B)",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "T = 2π/(10⁷ × 0.1) = 2π/10⁶",
                            "result": "T = 6.28 × 10⁻⁶ s = 6.28 μs"
                        }
                    ],
                    "answer": "6.28 μs",
                    "concept": "Time period of charged particle in magnetic field using specific charge"
                }
            },
            {
                "problem": "A Helmholtz coil consists of two identical circular coils each of 100 turns and radius 20 cm, placed coaxially 20 cm apart. Calculate the magnetic field at the midpoint when carrying current 2 A. (μ₀ = 4π × 10⁻⁷ Tm/A)",
                "difficulty": "hard",
                "solution": {
                    "given": ["N = 100 turns per coil", "R = 20 cm = 0.2 m", "d = 20 cm = 0.2 m", "I = 2 A", "μ₀ = 4π × 10⁻⁷ Tm/A"],
                    "find": "Magnetic field at midpoint B",
                    "formula": "For Helmholtz coils: B = (8μ₀NI)/(5√5 R) at center",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "B = (8 × 4π × 10⁻⁷ × 100 × 2)/(5√5 × 0.2) = (64π × 10⁻⁵)/(5 × 2.236 × 0.2)",
                            "result": "B = (2.01 × 10⁻³)/(2.236) = 9 × 10⁻⁴ T = 0.9 mT"
                        }
                    ],
                    "answer": "0.9 mT",
                    "concept": "Magnetic field of Helmholtz coils"
                }
            },
            {
                "problem": "A square loop of side 20 cm carrying current 5 A is placed in a magnetic field of 0.5 T such that the normal to the loop makes 30° with the field. Calculate the torque on the loop.",
                "difficulty": "medium",
                "solution": {
                    "given": ["a = 20 cm = 0.2 m", "I = 5 A", "B = 0.5 T", "θ = 30°"],
                    "find": "Torque τ",
                    "formula": "τ = NIAB sinθ, where A = a²",
                    "steps": [
                        {
                            "step": "Calculate area",
                            "work": "A = (0.2)² = 0.04 m²",
                            "result": ""
                        },
                        {
                            "step": "Calculate torque",
                            "work": "τ = 1 × 5 × 0.04 × 0.5 × sin30° = 0.1 × 0.5",
                            "result": "τ = 0.05 N·m"
                        }
                    ],
                    "answer": "0.05 N·m",
                    "concept": "Torque on current loop"
                }
            },
            {
                "problem": "A proton and an alpha particle are accelerated through the same potential difference and enter perpendicularly into the same magnetic field. Calculate the ratio of their radii of curvature. (m_alpha = 4m_p, q_alpha = 2q_p)",
                "difficulty": "hard",
                "solution": {
                    "given": ["m_α = 4m_p", "q_α = 2q_p", "Same V", "Same B"],
                    "find": "Ratio r_α/r_p",
                    "formula": ["r = mv/qB", "½mv² = qV ⇒ v = √(2qV/m)"],
                    "steps": [
                        {
                            "step": "Express radius in terms of V and B",
                            "work": "r = (m/qB) × √(2qV/m) = (1/B)√(2mV/q)",
                            "result": "r ∝ √(m/q)"
                        },
                        {
                            "step": "Calculate ratio",
                            "work": "r_α/r_p = √[(m_α/q_α)/(m_p/q_p)] = √[(4m_p/2q_p)/(m_p/q_p)] = √[2]",
                            "result": "r_α/r_p = √2 ≈ 1.414"
                        }
                    ],
                    "answer": "√2 : 1",
                    "concept": "Ratio of radii for different particles in magnetic field"
                }
            },
            {
                "problem": "A current I flows through a wire bent into the shape of an equilateral triangle of side a. Calculate the magnetic field at the centroid. (μ₀ = 4π × 10⁻⁷ Tm/A)",
                "difficulty": "hard",
                "solution": {
                    "given": ["Shape: equilateral triangle", "Side = a", "Current = I", "μ₀ = 4π × 10⁻⁷ Tm/A"],
                    "find": "Magnetic field at centroid B",
                    "formula": "For straight wire: B = μ₀I/4πd (sinθ₁ + sinθ₂), where d is perpendicular distance",
                    "steps": [
                        {
                            "step": "For equilateral triangle, d = a√3/6 at centroid",
                            "work": "Each side contributes equally: B_side = μ₀I/4πd (sin60° + sin60°) = μ₀I/4πd (√3/2 + √3/2) = μ₀I√3/4πd",
                            "result": ""
                        },
                        {
                            "step": "Total field from 3 sides",
                            "work": "B_total = 3 × μ₀I√3/4πd = 3μ₀I√3/4π × 6/a√3 = 9μ₀I/2πa",
                            "result": "B = 9μ₀I/2πa"
                        }
                    ],
                    "answer": "9μ₀I/2πa",
                    "concept": "Magnetic field due to current in triangular loop"
                }
            },
            {
                "problem": "A galvanometer of resistance 50 Ω gives full scale deflection for 2 mA current. Calculate the series resistance required to convert it into a voltmeter of range 0-10 V.",
                "difficulty": "medium",
                "solution": {
                    "given": ["G = 50 Ω", "I_g = 2 mA = 0.002 A", "V = 10 V"],
                    "find": "Series resistance R",
                    "formula": "R = V/I_g - G",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "R = 10/0.002 - 50 = 5000 - 50",
                            "result": "R = 4950 Ω"
                        }
                    ],
                    "answer": "4950 Ω",
                    "concept": "Conversion of galvanometer to voltmeter"
                }
            },
            {
                "problem": "A charged particle is moving in a combined electric and magnetic field. If E = 1000 V/m and B = 0.1 T are perpendicular to each other, calculate the velocity for which the particle moves undeflected.",
                "difficulty": "medium",
                "solution": {
                    "given": ["E = 1000 V/m", "B = 0.1 T", "Fields perpendicular"],
                    "find": "Velocity v for no deflection",
                    "formula": "For no deflection: qE = qvB ⇒ v = E/B",
                    "steps": [
                        {
                            "step": "Substitute values",
                            "work": "v = 1000/0.1 = 10000 m/s",
                            "result": "v = 10 km/s"
                        }
                    ],
                    "answer": "10 km/s",
                    "concept": "Velocity selector - crossed electric and magnetic fields"
                }
            },
            {
                "problem": "A circular loop of radius 10 cm and resistance 2 Ω is placed perpendicular to a magnetic field that changes at rate 0.5 T/s. Calculate the induced current in the loop.",
                "difficulty": "medium",
                "solution": {
                    "given": ["R = 10 cm = 0.1 m", "Resistance = 2 Ω", "dB/dt = 0.5 T/s", "θ = 0°"],
                    "find": "Induced current I",
                    "formula": ["ε = dΦ/dt = A dB/dt", "I = ε/R"],
                    "steps": [
                        {
                            "step": "Calculate area",
                            "work": "A = πR² = π(0.1)² = 0.01π m²",
                            "result": ""
                        },
                        {
                            "step": "Calculate EMF",
                            "work": "ε = 0.01π × 0.5 = 0.005π V",
                            "result": ""
                        },
                        {
                            "step": "Calculate current",
                            "work": "I = 0.005π/2 = 0.0025π A ≈ 0.00785 A",
                            "result": "I = 7.85 mA"
                        }
                    ],
                    "answer": "7.85 mA",
                    "concept": "Induced current from changing magnetic field"
                }
            },
            {
                "problem": "A long straight wire and a circular loop lie in the same plane. The wire carries current 10 A and the loop has radius 0.1 m and carries current 5 A in the opposite direction. Calculate the net magnetic field at the center of the loop. (μ₀ = 4π × 10⁻⁷ Tm/A)",
                "difficulty": "hard",
                "solution": {
                    "given": ["I_wire = 10 A", "I_loop = 5 A (opposite direction)", "R = 0.1 m", "μ₀ = 4π × 10⁻⁷ Tm/A", "Wire and loop coplanar"],
                    "find": "Net magnetic field at center B_net",
                    "formula": ["B_wire = μ₀I/2πR", "B_loop = μ₀I/2R"],
                    "steps": [
                        {
                            "step": "Calculate field due to wire",
                            "work": "B_wire = (4π × 10⁻⁷ × 10)/(2π × 0.1) = (4 × 10⁻⁶)/(0.2) = 2 × 10⁻⁵ T",
                            "result": ""
                        },
                        {
                            "step": "Calculate field due to loop",
                            "work": "B_loop = (4π × 10⁻⁷ × 5)/(2 × 0.1) = (2π × 10⁻⁶)/(0.2) = π × 10⁻⁵ T",
                            "result": ""
                        },
                        {
                            "step": "Find net field (opposite directions)",
                            "work": "B_net = B_loop - B_wire = π × 10⁻⁵ - 2 × 10⁻⁵ = (3.14 - 2) × 10⁻⁵ = 1.14 × 10⁻⁵ T",
                            "result": "B_net = 11.4 μT"
                        }
                    ],
                    "answer": "11.4 μT",
                    "concept": "Superposition of magnetic fields from different configurations"
                }
            },
            {
                "problem": "A particle of charge q and mass m is projected with velocity v at an angle θ to a uniform magnetic field B. Show that its path is helical and calculate the pitch of the helix.",
                "difficulty": "hard",
                "solution": {
                    "given": ["Charge = q", "Mass = m", "Velocity = v", "Angle = θ", "Magnetic field = B"],
                    "find": "Pitch of helical path p",
                    "formula": ["v_∥ = v cosθ (parallel component)", "v_⊥ = v sinθ (perpendicular component)", "T = 2πm/qB", "p = v_∥ T"],
                    "steps": [
                        {
                            "step": "Calculate parallel component",
                            "work": "v_∥ = v cosθ",
                            "result": ""
                        },
                        {
                            "step": "Calculate time period",
                            "work": "T = 2πm/qB",
                            "result": ""
                        },
                        {
                            "step": "Calculate pitch",
                            "work": "p = v cosθ × 2πm/qB",
                            "result": "p = (2πmv cosθ)/(qB)"
                        }
                    ],
                    "answer": "p = (2πmv cosθ)/(qB)",
                    "concept": "Helical motion in magnetic field and pitch calculation"
                }
            }
        ]
    },

}
// Export the data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NEET_PHYSICS_DATA;
}














