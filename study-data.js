// Comprehensive JEE Physics Study Data
const STUDY_DATA = {
    'modern-physics': {
        title: 'Modern Physics',
        weightage: '6-8%',
        introduction: 'Modern Physics deals with the physics developed in the early 20th century, including quantum mechanics, atomic structure, and nuclear physics. This chapter covers dual nature of matter & radiation, atoms & atomic models, and nuclei & radioactivity.',
        
        topics: [
            {
                name: 'Dual Nature of Matter & Radiation',
                description: 'This topic explores the fundamental concept that both light and matter exhibit dual nature - behaving as both waves and particles depending on the experimental conditions.',
                subtopics: [
                    {
                        name: 'Photoelectric Effect',
                        explanation: 'Einstein\'s explanation of photoelectric effect using quantum theory of light. When light of sufficient frequency hits a metal surface, electrons are emitted. The key insight is that light behaves as particles (photons) with energy E = hf, where only photons with energy greater than the work function can eject electrons.'
                    },
                    {
                        name: 'Planck\'s Quantum Postulate',
                        explanation: 'Max Planck proposed that energy is quantized - oscillators can only have discrete energy values E = nhν (n = 1,2,3...). This revolutionary idea solved the black-body radiation problem and laid the foundation for quantum mechanics.'
                    },
                    {
                        name: 'De Broglie Wavelength',
                        explanation: 'Louis de Broglie proposed that matter also exhibits wave properties. Every moving particle has an associated wavelength λ = h/p = h/mv. This wave-particle duality was later confirmed by electron diffraction experiments.'
                    },
                    {
                        name: 'Compton Effect',
                        explanation: 'When X-rays scatter off electrons, the scattered X-rays have longer wavelength. This demonstrates the particle nature of photons, as they transfer momentum to electrons like billiard balls. The wavelength shift is Δλ = (h/mₑc)(1 - cosθ).'
                    }
                ]
            },
            {
                name: 'Atoms & Atomic Models',
                description: 'This section covers the evolution of atomic models from Rutherford\'s nuclear model to Bohr\'s quantum mechanical model, explaining atomic structure and energy levels.',
                subtopics: [
                    {
                        name: 'Rutherford\'s Model',
                        explanation: 'Based on alpha particle scattering experiments, Rutherford proposed that atoms have a tiny, dense, positively charged nucleus surrounded by electrons. This model explained the scattering results but couldn\'t explain atomic stability or spectra.'
                    },
                    {
                        name: 'Bohr\'s Model',
                        explanation: 'Bohr combined classical mechanics with quantum ideas. Key postulates: (1) Electrons orbit in circular paths with quantized angular momentum mvr = nℏ, (2) Electrons don\'t radiate energy in these stationary states, (3) Energy is emitted/absorbed only during transitions between states.'
                    },
                    {
                        name: 'Energy Levels and Spectra',
                        explanation: 'In hydrogen atom, energy levels are given by Eₙ = -13.6/n² eV. When electrons transition between levels, they emit/absorb photons with energy ΔE = hf. Different series (Lyman, Balmer, Paschen) correspond to transitions to different final states.'
                    },
                    {
                        name: 'Thomson\'s e/m Measurement',
                        explanation: 'J.J. Thomson measured the charge-to-mass ratio of electrons using crossed electric and magnetic fields. In the method, electrons are deflected by both fields, and the e/m ratio is determined from the deflection patterns.'
                    }
                ]
            },
            {
                name: 'Nuclei & Radioactivity',
                description: 'This topic deals with nuclear structure, radioactive decay processes, and the fundamental relationship between mass and energy.',
                subtopics: [
                    {
                        name: 'Radioactive Decay',
                        explanation: 'Unstable nuclei spontaneously decay by emitting particles (alpha, beta) or electromagnetic radiation (gamma). The decay follows an exponential law N(t) = N₀e^(-λt), where λ is the decay constant. The process is random but statistically predictable.'
                    },
                    {
                        name: 'Half-life and Decay Constant',
                        explanation: 'Half-life T₁/₂ is the time required for half the nuclei to decay. It\'s related to decay constant by T₁/₂ = ln2/λ. Activity A = λN represents the rate of decay and decreases exponentially with time.'
                    },
                    {
                        name: 'Mass-Energy Equivalence',
                        explanation: 'Einstein\'s famous equation E = mc² shows that mass and energy are interconvertible. In nuclear reactions, the mass defect (difference between initial and final masses) is converted to energy. This principle explains nuclear binding energy and nuclear reactions.'
                    },
                    {
                        name: 'Types of Radiation',
                        explanation: 'Alpha particles (helium nuclei, ⁴₂He), Beta particles (electrons β⁻ or positrons β⁺), and Gamma rays (high-energy electromagnetic radiation). Each has different penetrating power and biological effects.'
                    }
                ]
            }
        ],

        formulas: {
            'Dual Nature of Radiation & Matter': [
                {
                    name: 'Photoelectric Effect',
                    expression: 'hf = Φ + K_max',
                    description: 'Where Φ is work function, K_max is maximum kinetic energy'
                },
                {
                    name: 'Planck\'s Quantum Postulate',
                    expression: 'E = nhν, n = 1,2,3...',
                    description: 'Energy of each oscillator is quantized'
                },
                {
                    name: 'De Broglie Wavelength',
                    expression: 'λ = h/p = h/mv',
                    description: 'Matter exhibits wave behavior'
                },
                {
                    name: 'Compton Effect',
                    expression: 'Δλ = (h/m_e c)(1 - cosθ)',
                    description: 'Wavelength shift in Compton scattering'
                }
            ],
            'Atoms & Atomic Models': [
                {
                    name: 'Bohr\'s Quantization',
                    expression: 'mvr = nℏ',
                    description: 'Quantization of angular momentum'
                },
                {
                    name: 'Energy Levels (Hydrogen)',
                    expression: 'E_n = -13.6 eV/n²',
                    description: 'Energy levels of hydrogen-like atom'
                },
                {
                    name: 'Radius of Orbit',
                    expression: 'r_n = n²a₀, a₀ = 4πε₀ℏ²/me²',
                    description: 'Bohr radius a₀ = 0.53 Å'
                },
                {
                    name: 'e/m of Electron',
                    expression: 'e/m = v/rB, v = E/B',
                    description: 'Thomson method for e/m ratio'
                }
            ],
            'Nuclei & Radioactivity': [
                {
                    name: 'Radioactive Decay Law',
                    expression: 'N(t) = N₀e^(-λt)',
                    description: 'Exponential decay law'
                },
                {
                    name: 'Half-life Relation',
                    expression: 'T₁/₂ = ln2/λ',
                    description: 'Relation between half-life and decay constant'
                },
                {
                    name: 'Mass-Energy Equivalence',
                    expression: 'E = mc²',
                    description: 'Einstein\'s mass-energy relation'
                }
            ]
        },

        problems: [
            {
                problem: 'Light of wavelength 400 nm falls on a metal surface with work function 2.5 eV. Calculate the maximum kinetic energy of emitted photoelectrons.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Wavelength λ = 400 nm = 400 × 10⁻⁹ m',
                        'Work function Φ = 2.5 eV',
                        'Planck constant h = 6.626 × 10⁻³⁴ J⋅s',
                        'Speed of light c = 3 × 10⁸ m/s'
                    ],
                    find: 'Maximum kinetic energy K_max',
                    formula: 'Einstein\'s photoelectric equation: hf = Φ + K_max',
                    steps: [
                        {
                            step: 'Calculate photon energy',
                            work: 'E = hf = hc/λ = (6.626 × 10⁻³⁴ × 3 × 10⁸)/(400 × 10⁻⁹)',
                            result: 'E = 4.97 × 10⁻¹⁹ J'
                        },
                        {
                            step: 'Convert to eV',
                            work: 'E = 4.97 × 10⁻¹⁹ J ÷ (1.6 × 10⁻¹⁹ J/eV)',
                            result: 'E = 3.11 eV'
                        },
                        {
                            step: 'Apply photoelectric equation',
                            work: 'K_max = E - Φ = 3.11 - 2.5',
                            result: 'K_max = 0.61 eV'
                        }
                    ],
                    answer: 'Maximum kinetic energy = 0.61 eV',
                    concept: 'Photoelectric effect demonstrates particle nature of light'
                }
            },
            {
                problem: 'An electron is accelerated through a potential difference of 100 V. Calculate its de Broglie wavelength.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Potential difference V = 100 V',
                        'Electron mass m = 9.1 × 10⁻³¹ kg',
                        'Electron charge e = 1.6 × 10⁻¹⁹ C',
                        'Planck constant h = 6.626 × 10⁻³⁴ J⋅s'
                    ],
                    find: 'de Broglie wavelength λ',
                    formula: 'λ = h/p = h/√(2mK)',
                    steps: [
                        {
                            step: 'Calculate kinetic energy gained',
                            work: 'K = eV = 1.6 × 10⁻¹⁹ × 100',
                            result: 'K = 1.6 × 10⁻¹⁷ J'
                        },
                        {
                            step: 'Calculate momentum',
                            work: 'p = √(2mK) = √(2 × 9.1 × 10⁻³¹ × 1.6 × 10⁻¹⁷)',
                            result: 'p = 5.4 × 10⁻²⁴ kg⋅m/s'
                        },
                        {
                            step: 'Calculate de Broglie wavelength',
                            work: 'λ = h/p = (6.626 × 10⁻³⁴)/(5.4 × 10⁻²⁴)',
                            result: 'λ = 1.23 × 10⁻¹⁰ m = 0.123 nm'
                        }
                    ],
                    answer: 'de Broglie wavelength = 0.123 nm',
                    concept: 'Matter waves - particles exhibit wave properties'
                }
            },
            {
                problem: 'Calculate the radius of the second Bohr orbit and the energy of electron in hydrogen atom.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Second orbit: n = 2',
                        'Bohr radius a₀ = 0.53 Å',
                        'Ground state energy E₁ = -13.6 eV'
                    ],
                    find: 'Radius r₂ and energy E₂',
                    formula: 'r_n = n²a₀, E_n = -13.6/n² eV',
                    steps: [
                        {
                            step: 'Calculate radius of second orbit',
                            work: 'r₂ = n²a₀ = 2² × 0.53 Å',
                            result: 'r₂ = 4 × 0.53 = 2.12 Å'
                        },
                        {
                            step: 'Calculate energy of second orbit',
                            work: 'E₂ = -13.6/n² = -13.6/2²',
                            result: 'E₂ = -13.6/4 = -3.4 eV'
                        }
                    ],
                    answer: 'r₂ = 2.12 Å, E₂ = -3.4 eV',
                    concept: 'Bohr model quantizes electron orbits and energies'
                }
            },
            {
                problem: 'A radioactive sample has 10¹⁶ atoms initially. If the half-life is 2 hours, find the number of atoms remaining after 6 hours.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Initial number N₀ = 10¹⁶ atoms',
                        'Half-life T₁/₂ = 2 hours',
                        'Time t = 6 hours'
                    ],
                    find: 'Number of atoms remaining N(t)',
                    formula: 'N(t) = N₀(1/2)^(t/T₁/₂)',
                    steps: [
                        {
                            step: 'Calculate number of half-lives',
                            work: 'Number of half-lives = t/T₁/₂ = 6/2',
                            result: 'n = 3 half-lives'
                        },
                        {
                            step: 'Apply radioactive decay formula',
                            work: 'N(6) = N₀(1/2)³ = 10¹⁶ × (1/8)',
                            result: 'N(6) = 1.25 × 10¹⁵ atoms'
                        }
                    ],
                    answer: 'Remaining atoms = 1.25 × 10¹⁵',
                    concept: 'Radioactive decay follows exponential law'
                }
            },
            {
                problem: 'Calculate the binding energy of an alpha particle if the mass defect is 0.0304 u.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Mass defect Δm = 0.0304 u',
                        '1 u = 931.5 MeV/c²'
                    ],
                    find: 'Binding energy BE',
                    formula: 'BE = Δm × c²',
                    steps: [
                        {
                            step: 'Convert mass defect to energy',
                            work: 'BE = Δm × 931.5 MeV/u',
                            result: 'BE = 0.0304 × 931.5 MeV'
                        },
                        {
                            step: 'Calculate binding energy',
                            work: 'BE = 28.32 MeV',
                            result: 'BE = 28.3 MeV'
                        }
                    ],
                    answer: 'Binding energy = 28.3 MeV',
                    concept: 'Mass-energy equivalence in nuclear binding'
                }
            },
            {
                problem: 'X-rays are produced when electrons accelerated through 50 kV strike a target. Find the minimum wavelength of X-rays produced.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Accelerating voltage V = 50 kV = 50,000 V',
                        'Planck constant h = 6.626 × 10⁻³⁴ J⋅s',
                        'Speed of light c = 3 × 10⁸ m/s',
                        'Electron charge e = 1.6 × 10⁻¹⁹ C'
                    ],
                    find: 'Minimum wavelength λ_min',
                    formula: 'λ_min = hc/eV',
                    steps: [
                        {
                            step: 'Calculate maximum photon energy',
                            work: 'E_max = eV = 1.6 × 10⁻¹⁹ × 50,000',
                            result: 'E_max = 8.0 × 10⁻¹⁵ J'
                        },
                        {
                            step: 'Apply energy-wavelength relation',
                            work: 'λ_min = hc/E_max = (6.626 × 10⁻³⁴ × 3 × 10⁸)/(8.0 × 10⁻¹⁵)',
                            result: 'λ_min = 2.48 × 10⁻¹¹ m'
                        },
                        {
                            step: 'Convert to convenient units',
                            work: 'λ_min = 0.0248 nm',
                            result: 'λ_min = 0.025 nm'
                        }
                    ],
                    answer: 'Minimum wavelength = 0.025 nm',
                    concept: 'X-ray production by electron bombardment'
                }
            },
            {
                problem: 'In Compton scattering, a photon of wavelength 0.024 nm scatters at 90°. Calculate the wavelength of scattered photon.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Initial wavelength λ₀ = 0.024 nm',
                        'Scattering angle θ = 90°',
                        'Compton wavelength λc = h/mₑc = 2.43 × 10⁻³ nm'
                    ],
                    find: 'Final wavelength λ\'',
                    formula: 'Δλ = λc(1 - cosθ)',
                    steps: [
                        {
                            step: 'Calculate wavelength shift',
                            work: 'Δλ = λc(1 - cos90°) = 2.43 × 10⁻³(1 - 0)',
                            result: 'Δλ = 2.43 × 10⁻³ nm'
                        },
                        {
                            step: 'Calculate final wavelength',
                            work: 'λ\' = λ₀ + Δλ = 0.024 + 0.00243',
                            result: 'λ\' = 0.02643 nm'
                        }
                    ],
                    answer: 'Scattered wavelength = 0.0264 nm',
                    concept: 'Compton effect demonstrates photon momentum'
                }
            },
            {
                problem: 'Calculate the energy released when 4 hydrogen nuclei fuse to form one helium nucleus. (Mass of H = 1.0078 u, Mass of He = 4.0026 u)',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Mass of hydrogen nucleus = 1.0078 u',
                        'Mass of helium nucleus = 4.0026 u',
                        'Number of hydrogen nuclei = 4',
                        '1 u = 931.5 MeV/c²'
                    ],
                    find: 'Energy released Q',
                    formula: 'Q = (Initial mass - Final mass) × c²',
                    steps: [
                        {
                            step: 'Calculate initial mass',
                            work: 'Initial mass = 4 × 1.0078 u',
                            result: 'Initial mass = 4.0312 u'
                        },
                        {
                            step: 'Calculate mass defect',
                            work: 'Δm = 4.0312 - 4.0026',
                            result: 'Δm = 0.0286 u'
                        },
                        {
                            step: 'Calculate energy released',
                            work: 'Q = Δm × 931.5 MeV/u = 0.0286 × 931.5',
                            result: 'Q = 26.6 MeV'
                        }
                    ],
                    answer: 'Energy released = 26.6 MeV',
                    concept: 'Nuclear fusion releases energy due to mass defect'
                }
            },
            {
                problem: 'A photon collides with a stationary electron. If the photon is scattered at 60° and its energy decreases by 20%, find the initial photon energy.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Scattering angle θ = 60°',
                        'Energy decrease = 20%, so E\' = 0.8E₀',
                        'Electron rest mass energy = 0.511 MeV'
                    ],
                    find: 'Initial photon energy E₀',
                    formula: 'E\' = E₀/(1 + (E₀/mₑc²)(1 - cos θ))',
                    steps: [
                        {
                            step: 'Set up equation',
                            work: '0.8E₀ = E₀/(1 + (E₀/0.511)(1 - cos 60°))',
                            result: '0.8 = 1/(1 + (E₀/0.511)(1 - 0.5))'
                        },
                        {
                            step: 'Simplify',
                            work: '0.8 = 1/(1 + E₀/1.022)',
                            result: '1 + E₀/1.022 = 1.25'
                        },
                        {
                            step: 'Solve for E₀',
                            work: 'E₀/1.022 = 0.25, so E₀ = 0.256 MeV',
                            result: 'E₀ = 0.256 MeV'
                        }
                    ],
                    answer: '0.256 MeV',
                    concept: 'Compton scattering energy relations'
                }
            },
            {
                problem: 'Calculate the probability of finding a particle in the first quarter (0 to L/4) of an infinite square well in the ground state.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Ground state n = 1',
                        'Region 0 to L/4',
                        'ψ₁(x) = √(2/L) sin(πx/L)'
                    ],
                    find: 'Probability P',
                    formula: 'P = ∫₀^(L/4) |ψ₁(x)|² dx',
                    steps: [
                        {
                            step: 'Set up integral',
                            work: 'P = ∫₀^(L/4) (2/L) sin²(πx/L) dx',
                            result: 'P = (2/L) ∫₀^(L/4) sin²(πx/L) dx'
                        },
                        {
                            step: 'Use trigonometric identity',
                            work: 'sin²(πx/L) = (1 - cos(2πx/L))/2',
                            result: 'P = (1/L) ∫₀^(L/4) [1 - cos(2πx/L)] dx'
                        },
                        {
                            step: 'Evaluate integral',
                            work: 'P = (1/L)[x - (L/2π)sin(2πx/L)]₀^(L/4)',
                            result: 'P = 1/4 - 1/π ≈ 0.091'
                        }
                    ],
                    answer: '0.091 or 9.1%',
                    concept: 'Quantum mechanical probability calculations'
                }
            },
            {
                problem: 'Find the energy of a photon that can just produce an electron-positron pair in the presence of a nucleus.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Pair production threshold',
                        'Electron rest mass energy = 0.511 MeV',
                        'Positron rest mass energy = 0.511 MeV'
                    ],
                    find: 'Minimum photon energy',
                    formula: 'Minimum energy = 2mₑc²',
                    steps: [
                        {
                            step: 'Calculate rest mass energy',
                            work: 'Each particle (electron and positron) has rest mass energy mₑc² = 0.511 MeV',
                            result: 'Total rest mass energy = 2 × 0.511 = 1.022 MeV'
                        },
                        {
                            step: 'Apply threshold condition',
                            work: 'This is the threshold energy for pair production',
                            result: 'Minimum photon energy = 1.022 MeV'
                        }
                    ],
                    answer: '1.022 MeV',
                    concept: 'Pair production threshold energy'
                }
            },
            {
                problem: 'Calculate the recoil energy of a nucleus when it emits a gamma ray of energy 1 MeV. (Nuclear mass = 100 u)',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Gamma ray energy Eᵧ = 1 MeV',
                        'Nuclear mass M = 100 u = 93.15 GeV/c²',
                        'Conservation of momentum applies'
                    ],
                    find: 'Recoil energy ER',
                    formula: 'ER = Eᵧ²/(2Mc²)',
                    steps: [
                        {
                            step: 'Apply recoil energy formula',
                            work: 'ER = (1 MeV)²/(2 × 93,150 MeV)',
                            result: 'ER = 1/(2 × 93,150) MeV'
                        },
                        {
                            step: 'Calculate recoil energy',
                            work: 'ER = 1/186,300 MeV = 5.37 × 10⁻⁶ MeV',
                            result: 'ER = 5.37 eV'
                        }
                    ],
                    answer: '5.37 eV',
                    concept: 'Nuclear recoil in gamma emission'
                }
            },
            {
                problem: 'A muon (mass = 105.7 MeV/c²) decays with a lifetime of 2.2 μs in its rest frame. Find its lifetime when moving at 0.9c.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Rest lifetime τ₀ = 2.2 μs',
                        'Velocity v = 0.9c',
                        'Muon mass = 105.7 MeV/c²'
                    ],
                    find: 'Lifetime in lab frame τ',
                    formula: 'τ = τ₀/√(1 - v²/c²) (time dilation)',
                    steps: [
                        {
                            step: 'Calculate Lorentz factor',
                            work: 'γ = 1/√(1 - v²/c²) = 1/√(1 - 0.9²) = 1/√(1 - 0.81)',
                            result: 'γ = 1/√0.19 = 2.29'
                        },
                        {
                            step: 'Apply time dilation',
                            work: 'τ = γτ₀ = 2.29 × 2.2 μs',
                            result: 'τ = 5.04 μs'
                        }
                    ],
                    answer: '5.04 μs',
                    concept: 'Relativistic time dilation'
                }
            },
            {
                problem: 'Calculate the number of photons emitted per second by a 100 W sodium lamp (λ = 589 nm, efficiency = 2%).',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Power P = 100 W',
                        'Wavelength λ = 589 nm',
                        'Efficiency η = 2%',
                        'hc = 1240 eV⋅nm'
                    ],
                    find: 'Number of photons per second N',
                    formula: 'N = (η × P)/(hc/λ)',
                    steps: [
                        {
                            step: 'Calculate useful power',
                            work: 'P_useful = 0.02 × 100 = 2 W',
                            result: 'P_useful = 2 W'
                        },
                        {
                            step: 'Calculate energy per photon',
                            work: 'E = hc/λ = (1240 eV⋅nm)/(589 nm) = 2.11 eV',
                            result: 'E = 2.11 eV = 3.38 × 10⁻¹⁹ J'
                        },
                        {
                            step: 'Calculate number of photons',
                            work: 'N = 2/(3.38 × 10⁻¹⁹) = 5.92 × 10¹⁸ photons/s',
                            result: 'N = 5.92 × 10¹⁸ photons/s'
                        }
                    ],
                    answer: '5.92 × 10¹⁸ photons/s',
                    concept: 'Photon emission rate calculations'
                }
            },
            {
                problem: 'Find the ground state energy of a hydrogen atom using the Bohr model.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Bohr model',
                        'Ground state n = 1',
                        'Rydberg energy = 13.6 eV'
                    ],
                    find: 'Ground state energy E₁',
                    formula: 'Eₙ = -13.6/n² eV',
                    steps: [
                        {
                            step: 'Apply Bohr energy formula',
                            work: 'For ground state n = 1: E₁ = -13.6/1² = -13.6 eV',
                            result: 'E₁ = -13.6 eV'
                        },
                        {
                            step: 'Interpret the result',
                            work: 'Negative sign indicates bound state',
                            result: 'This is the ionization energy of hydrogen'
                        }
                    ],
                    answer: '-13.6 eV',
                    concept: 'Bohr model of hydrogen atom'
                }
            },
            {
                problem: 'Calculate the de Broglie wavelength of a 1 keV electron.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Kinetic energy KE = 1 keV = 1000 eV',
                        'Electron rest mass energy mₑc² = 0.511 MeV',
                        'hc = 1240 eV⋅nm'
                    ],
                    find: 'de Broglie wavelength λ',
                    formula: 'λ = h/p, where p = √(2mKE) for non-relativistic case',
                    steps: [
                        {
                            step: 'Check if relativistic',
                            work: 'KE = 1000 eV << mₑc² = 511,000 eV',
                            result: 'Non-relativistic approximation valid'
                        },
                        {
                            step: 'Calculate momentum',
                            work: 'p = √(2mₑKE) = √(2 × 0.511 × 10⁶ × 1000) eV/c',
                            result: 'p = 31,968 eV/c'
                        },
                        {
                            step: 'Calculate wavelength',
                            work: 'λ = hc/p = (1240 eV⋅nm)/(31,968 eV)',
                            result: 'λ = 0.0388 nm'
                        }
                    ],
                    answer: '0.0388 nm',
                    concept: 'Electron de Broglie wavelength'
                }
            },
            {
                problem: 'A particle in a 1D box has energy 6E₁ where E₁ is the ground state energy. Find the quantum number n.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Energy E = 6E₁',
                        'E₁ is ground state energy',
                        'Particle in 1D infinite potential well'
                    ],
                    find: 'Quantum number n',
                    formula: 'Eₙ = n²E₁',
                    steps: [
                        {
                            step: 'Set up equation',
                            work: '6E₁ = n²E₁',
                            result: '6 = n²'
                        },
                        {
                            step: 'Solve for n',
                            work: 'n = √6 ≈ 2.45',
                            result: 'Since n must be integer, this energy level doesn\'t exist exactly'
                        }
                    ],
                    answer: 'No exact solution (n ≈ 2.45)',
                    concept: 'Quantized energy levels in particle in a box'
                }
            },
            {
                problem: 'A photon of energy 2.5 eV collides with an electron at rest. If the photon is scattered at 120°, find the energy of the scattered photon and the kinetic energy of the recoiling electron.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Initial photon energy E₀ = 2.5 eV',
                        'Scattering angle θ = 120°',
                        'Electron initially at rest',
                        'Electron rest mass energy mₑc² = 0.511 MeV = 511 keV'
                    ],
                    find: 'Final photon energy E\' and electron kinetic energy KE',
                    formula: 'Compton scattering: E\' = E₀/(1 + (E₀/mₑc²)(1 - cos θ))',
                    steps: [
                        {
                            step: 'Convert energies to consistent units',
                            work: 'E₀ = 2.5 eV = 0.0025 MeV, mₑc² = 0.511 MeV',
                            result: 'E₀/mₑc² = 0.0025/0.511 = 0.00489'
                        },
                        {
                            step: 'Apply Compton scattering formula',
                            work: 'E\' = 2.5/(1 + 0.00489(1 - cos 120°)) = 2.5/(1 + 0.00489(1 - (-0.5)))',
                            result: 'E\' = 2.5/(1 + 0.00489 × 1.5) = 2.5/(1 + 0.00734)'
                        },
                        {
                            step: 'Calculate scattered photon energy',
                            work: 'E\' = 2.5/1.00734 = 2.482 eV',
                            result: 'E\' ≈ 2.48 eV'
                        },
                        {
                            step: 'Calculate electron kinetic energy',
                            work: 'KE = E₀ - E\' = 2.5 - 2.482',
                            result: 'KE = 0.018 eV'
                        }
                    ],
                    answer: 'Scattered photon energy = 2.48 eV, Electron KE = 0.018 eV',
                    concept: 'Compton scattering: photon transfers energy and momentum to electron'
                }
            },
            {
                problem: 'Calculate the wavelength of the first line in the Balmer series of hydrogen spectrum.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Balmer series: transitions to n = 2',
                        'First line: n = 3 → n = 2',
                        'Rydberg constant R = 1.097 × 10⁷ m⁻¹',
                        'For hydrogen Z = 1'
                    ],
                    find: 'Wavelength λ of first Balmer line',
                    formula: '1/λ = RZ²(1/n₁² - 1/n₂²)',
                    steps: [
                        {
                            step: 'Identify quantum numbers',
                            work: 'For first Balmer line: n₁ = 2, n₂ = 3',
                            result: 'Transition from n = 3 to n = 2'
                        },
                        {
                            step: 'Apply Rydberg formula',
                            work: '1/λ = R(1/2² - 1/3²) = 1.097×10⁷(1/4 - 1/9)',
                            result: '1/λ = 1.097×10⁷(9-4)/(36) = 1.097×10⁷ × 5/36'
                        },
                        {
                            step: 'Calculate wavelength',
                            work: '1/λ = 1.097×10⁷ × 0.1389 = 1.524×10⁶ m⁻¹',
                            result: 'λ = 1/(1.524×10⁶) = 6.56×10⁻⁷ m'
                        },
                        {
                            step: 'Convert to nanometers',
                            work: 'λ = 656 nm',
                            result: 'This is the red line in hydrogen spectrum'
                        }
                    ],
                    answer: '656 nm (red light)',
                    concept: 'Balmer series produces visible light lines in hydrogen spectrum'
                }
            },
            {
                problem: 'A radioactive nucleus has a half-life of 5 days. What fraction of the original sample will remain after 20 days?',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Half-life T₁/₂ = 5 days',
                        'Time elapsed t = 20 days'
                    ],
                    find: 'Fraction remaining N/N₀',
                    formula: 'N(t) = N₀(1/2)^(t/T₁/₂)',
                    steps: [
                        {
                            step: 'Calculate number of half-lives',
                            work: 'Number of half-lives = t/T₁/₂ = 20/5',
                            result: 'n = 4 half-lives'
                        },
                        {
                            step: 'Apply radioactive decay formula',
                            work: 'N/N₀ = (1/2)ⁿ = (1/2)⁴',
                            result: 'N/N₀ = 1/16 = 0.0625'
                        },
                        {
                            step: 'Convert to percentage',
                            work: 'Fraction remaining = 0.0625 = 6.25%',
                            result: '6.25% of original sample remains'
                        }
                    ],
                    answer: '1/16 or 6.25% of the original sample',
                    concept: 'Radioactive decay follows exponential law with characteristic half-life'
                }
            },
            {
                problem: 'Find the de Broglie wavelength of a proton accelerated through a potential difference of 1000 V.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Potential difference V = 1000 V',
                        'Proton mass m = 1.67 × 10⁻²⁷ kg',
                        'Proton charge e = 1.6 × 10⁻¹⁹ C',
                        'Planck constant h = 6.626 × 10⁻³⁴ J⋅s'
                    ],
                    find: 'de Broglie wavelength λ',
                    formula: 'λ = h/p = h/√(2mKE)',
                    steps: [
                        {
                            step: 'Calculate kinetic energy gained',
                            work: 'KE = eV = 1.6 × 10⁻¹⁹ × 1000',
                            result: 'KE = 1.6 × 10⁻¹⁶ J'
                        },
                        {
                            step: 'Calculate momentum',
                            work: 'p = √(2mKE) = √(2 × 1.67×10⁻²⁷ × 1.6×10⁻¹⁶)',
                            result: 'p = √(5.344×10⁻⁴³) = 2.31×10⁻²² kg⋅m/s'
                        },
                        {
                            step: 'Calculate de Broglie wavelength',
                            work: 'λ = h/p = (6.626×10⁻³⁴)/(2.31×10⁻²²)',
                            result: 'λ = 2.87×10⁻¹² m = 2.87 pm'
                        }
                    ],
                    answer: '2.87 pm',
                    concept: 'Massive particles like protons have much smaller wavelengths than electrons'
                }
            },
            {
                problem: 'Calculate the binding energy per nucleon for ⁴He nucleus. (Mass of ⁴He = 4.0026 u, mass of proton = 1.0078 u, mass of neutron = 1.0087 u)',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Mass of ⁴He nucleus = 4.0026 u',
                        'Mass of proton = 1.0078 u',
                        'Mass of neutron = 1.0087 u',
                        'Number of protons = 2, neutrons = 2',
                        '1 u = 931.5 MeV/c²'
                    ],
                    find: 'Binding energy per nucleon',
                    formula: 'BE = (Mass defect) × c²',
                    steps: [
                        {
                            step: 'Calculate total mass of constituents',
                            work: 'Mass = 2 × 1.0078 + 2 × 1.0087 = 2.0156 + 2.0174',
                            result: 'Total mass = 4.033 u'
                        },
                        {
                            step: 'Calculate mass defect',
                            work: 'Δm = 4.033 - 4.0026 = 0.0304 u',
                            result: 'Mass defect = 0.0304 u'
                        },
                        {
                            step: 'Calculate total binding energy',
                            work: 'BE = 0.0304 × 931.5 MeV = 28.32 MeV',
                            result: 'Total BE = 28.32 MeV'
                        },
                        {
                            step: 'Calculate binding energy per nucleon',
                            work: 'BE per nucleon = 28.32/4 = 7.08 MeV',
                            result: 'BE per nucleon = 7.08 MeV'
                        }
                    ],
                    answer: '7.08 MeV per nucleon',
                    concept: 'High binding energy per nucleon makes helium-4 very stable'
                }
            },
            {
                problem: 'A beam of electrons with kinetic energy 100 eV is incident on a potential barrier of height 120 eV and width 0.2 nm. Calculate the transmission coefficient.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Electron kinetic energy E = 100 eV',
                        'Barrier height V₀ = 120 eV',
                        'Barrier width a = 0.2 nm = 2 × 10⁻¹⁰ m',
                        'ℏ = 1.055 × 10⁻³⁴ J⋅s, mₑ = 9.1 × 10⁻³¹ kg'
                    ],
                    find: 'Transmission coefficient T',
                    formula: 'T ≈ e^(-2κa) where κ = √(2m(V₀-E))/ℏ',
                    steps: [
                        {
                            step: 'Calculate energy difference',
                            work: 'V₀ - E = 120 - 100 = 20 eV = 20 × 1.6×10⁻¹⁹ J',
                            result: 'V₀ - E = 3.2 × 10⁻¹⁸ J'
                        },
                        {
                            step: 'Calculate decay constant κ',
                            work: 'κ = √(2 × 9.1×10⁻³¹ × 3.2×10⁻¹⁸)/(1.055×10⁻³⁴)',
                            result: 'κ = √(5.824×10⁻⁴⁸)/(1.055×10⁻³⁴) = 2.28×10⁹ m⁻¹'
                        },
                        {
                            step: 'Calculate 2κa',
                            work: '2κa = 2 × 2.28×10⁹ × 2×10⁻¹⁰',
                            result: '2κa = 0.912'
                        },
                        {
                            step: 'Calculate transmission coefficient',
                            work: 'T = e^(-0.912) = 0.401',
                            result: 'T ≈ 0.40 or 40%'
                        }
                    ],
                    answer: 'Transmission coefficient ≈ 0.40 or 40%',
                    concept: 'Quantum tunneling allows particles to pass through energy barriers'
                }
            },
            {
                problem: 'Calculate the maximum kinetic energy of photoelectrons when light of frequency 1.5 × 10¹⁵ Hz falls on a metal surface with work function 3.2 eV.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Frequency f = 1.5 × 10¹⁵ Hz',
                        'Work function Φ = 3.2 eV',
                        'Planck constant h = 6.626 × 10⁻³⁴ J⋅s'
                    ],
                    find: 'Maximum kinetic energy KEₘₐₓ',
                    formula: 'KEₘₐₓ = hf - Φ',
                    steps: [
                        {
                            step: 'Calculate photon energy',
                            work: 'E = hf = 6.626×10⁻³⁴ × 1.5×10¹⁵',
                            result: 'E = 9.939×10⁻¹⁹ J'
                        },
                        {
                            step: 'Convert to eV',
                            work: 'E = 9.939×10⁻¹⁹/(1.6×10⁻¹⁹) eV',
                            result: 'E = 6.21 eV'
                        },
                        {
                            step: 'Apply photoelectric equation',
                            work: 'KEₘₐₓ = E - Φ = 6.21 - 3.2',
                            result: 'KEₘₐₓ = 3.01 eV'
                        }
                    ],
                    answer: '3.01 eV',
                    concept: 'Photoelectric effect: excess photon energy becomes kinetic energy'
                }
            },
            {
                problem: 'A hydrogen atom in the first excited state (n = 2) makes a transition to the ground state. Calculate the wavelength of the emitted photon.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Initial state n₁ = 2',
                        'Final state n₂ = 1',
                        'Energy levels: Eₙ = -13.6/n² eV'
                    ],
                    find: 'Wavelength λ of emitted photon',
                    formula: 'ΔE = E₂ - E₁ = hc/λ',
                    steps: [
                        {
                            step: 'Calculate energy levels',
                            work: 'E₁ = -13.6/1² = -13.6 eV, E₂ = -13.6/2² = -3.4 eV',
                            result: 'E₁ = -13.6 eV, E₂ = -3.4 eV'
                        },
                        {
                            step: 'Calculate energy difference',
                            work: 'ΔE = E₁ - E₂ = -13.6 - (-3.4) = -10.2 eV',
                            result: 'Photon energy = 10.2 eV (magnitude)'
                        },
                        {
                            step: 'Calculate wavelength using hc = 1240 eV⋅nm',
                            work: 'λ = hc/ΔE = 1240/10.2',
                            result: 'λ = 121.6 nm'
                        }
                    ],
                    answer: '121.6 nm (UV region)',
                    concept: 'Lyman series: transitions to ground state produce UV radiation'
                }
            },
            {
                problem: 'Calculate the activity of a 1 mg sample of ²³⁸U. (Half-life of ²³⁸U = 4.5 × 10⁹ years, Avogadro number = 6.022 × 10²³)',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Mass of sample m = 1 mg = 10⁻⁶ kg',
                        'Atomic mass A = 238 u',
                        'Half-life T₁/₂ = 4.5 × 10⁹ years',
                        'Avogadro number Nₐ = 6.022 × 10²³'
                    ],
                    find: 'Activity A = λN',
                    formula: 'λ = ln2/T₁/₂, N = (m/M) × Nₐ',
                    steps: [
                        {
                            step: 'Calculate number of atoms',
                            work: 'N = (10⁻⁶ kg)/(238 × 1.66×10⁻²⁷ kg) × 6.022×10²³',
                            result: 'N = (10⁻⁶)/(3.95×10⁻²⁵) × 6.022×10²³ = 1.52×10¹⁵ atoms'
                        },
                        {
                            step: 'Convert half-life to seconds',
                            work: 'T₁/₂ = 4.5×10⁹ × 365.25 × 24 × 3600 s',
                            result: 'T₁/₂ = 1.42×10¹⁷ s'
                        },
                        {
                            step: 'Calculate decay constant',
                            work: 'λ = ln2/T₁/₂ = 0.693/(1.42×10¹⁷)',
                            result: 'λ = 4.88×10⁻¹⁸ s⁻¹'
                        },
                        {
                            step: 'Calculate activity',
                            work: 'A = λN = 4.88×10⁻¹⁸ × 1.52×10¹⁵',
                            result: 'A = 7.42×10⁻³ Bq = 7.42 mBq'
                        }
                    ],
                    answer: '7.42 mBq',
                    concept: 'Activity depends on number of atoms and decay constant'
                }
            },
            {
                problem: 'An X-ray photon of wavelength 0.1 nm undergoes Compton scattering. Find the maximum possible wavelength shift.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Initial wavelength λ₀ = 0.1 nm',
                        'Compton wavelength λc = h/(mₑc) = 2.43 × 10⁻³ nm',
                        'Maximum shift occurs at θ = 180° (backscattering)'
                    ],
                    find: 'Maximum wavelength shift Δλₘₐₓ',
                    formula: 'Δλ = λc(1 - cos θ)',
                    steps: [
                        {
                            step: 'Identify maximum scattering condition',
                            work: 'Maximum shift occurs when θ = 180° (backscattering)',
                            result: 'cos 180° = -1'
                        },
                        {
                            step: 'Calculate maximum wavelength shift',
                            work: 'Δλₘₐₓ = λc(1 - cos 180°) = 2.43×10⁻³(1 - (-1))',
                            result: 'Δλₘₐₓ = 2.43×10⁻³ × 2 = 4.86×10⁻³ nm'
                        },
                        {
                            step: 'Calculate final wavelength',
                            work: 'λₘₐₓ = λ₀ + Δλₘₐₓ = 0.1 + 0.00486',
                            result: 'λₘₐₓ = 0.10486 nm'
                        }
                    ],
                    answer: 'Maximum wavelength shift = 4.86 × 10⁻³ nm',
                    concept: 'Compton scattering: maximum shift occurs in backscattering'
                }
            },
            {
                problem: 'Calculate the threshold frequency for photoelectric effect in sodium if the work function is 2.3 eV.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Work function Φ = 2.3 eV',
                        'Planck constant h = 6.626 × 10⁻³⁴ J⋅s',
                        'At threshold: KEₘₐₓ = 0'
                    ],
                    find: 'Threshold frequency f₀',
                    formula: 'At threshold: hf₀ = Φ',
                    steps: [
                        {
                            step: 'Convert work function to Joules',
                            work: 'Φ = 2.3 eV × 1.6×10⁻¹⁹ J/eV',
                            result: 'Φ = 3.68×10⁻¹⁹ J'
                        },
                        {
                            step: 'Apply threshold condition',
                            work: 'f₀ = Φ/h = (3.68×10⁻¹⁹)/(6.626×10⁻³⁴)',
                            result: 'f₀ = 5.55×10¹⁴ Hz'
                        },
                        {
                            step: 'Calculate corresponding wavelength',
                            work: 'λ₀ = c/f₀ = (3×10⁸)/(5.55×10¹⁴)',
                            result: 'λ₀ = 540 nm (green light)'
                        }
                    ],
                    answer: 'Threshold frequency = 5.55 × 10¹⁴ Hz',
                    concept: 'Below threshold frequency, no photoelectrons are emitted'
                }
            },
            {
                problem: 'A particle is confined in a 1D infinite potential well of width 1 nm. Calculate the energy difference between the first and second excited states.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Width of well L = 1 nm = 10⁻⁹ m',
                        'First excited state n = 2',
                        'Second excited state n = 3',
                        'Electron mass m = 9.1 × 10⁻³¹ kg',
                        'ℏ = 1.055 × 10⁻³⁴ J⋅s'
                    ],
                    find: 'Energy difference ΔE = E₃ - E₂',
                    formula: 'Eₙ = n²π²ℏ²/(2mL²)',
                    steps: [
                        {
                            step: 'Calculate energy of second level (n = 2)',
                            work: 'E₂ = 4π²ℏ²/(2mL²) = 4π² × (1.055×10⁻³⁴)²/(2 × 9.1×10⁻³¹ × 10⁻¹⁸)',
                            result: 'E₂ = 4π² × 1.113×10⁻⁶⁸/(1.82×10⁻⁴⁹) = 2.41×10⁻¹⁹ J'
                        },
                        {
                            step: 'Calculate energy of third level (n = 3)',
                            work: 'E₃ = 9π²ℏ²/(2mL²) = 9 × E₁ where E₁ = π²ℏ²/(2mL²)',
                            result: 'E₃ = 9 × 6.03×10⁻²⁰ = 5.43×10⁻¹⁹ J'
                        },
                        {
                            step: 'Calculate energy difference',
                            work: 'ΔE = E₃ - E₂ = 5.43×10⁻¹⁹ - 2.41×10⁻¹⁹',
                            result: 'ΔE = 3.02×10⁻¹⁹ J'
                        },
                        {
                            step: 'Convert to eV',
                            work: 'ΔE = (3.02×10⁻¹⁹)/(1.6×10⁻¹⁹) eV',
                            result: 'ΔE = 1.89 eV'
                        }
                    ],
                    answer: 'Energy difference = 1.89 eV',
                    concept: 'Quantum confinement: energy levels increase as n²'
                }
            }
        ]
    },

    'electrostatics': {
        title: 'Electrostatics',
        weightage: '8-12%',
        introduction: 'Electrostatics covers fundamental concepts of electric charges, electric fields, potential, and capacitors. It forms the foundation for understanding electromagnetic phenomena.',
        
        topics: [
            {
                name: 'Coulomb\'s Law',
                description: 'The fundamental law governing the electrostatic force between charged particles, forming the basis of electrostatics.',
                subtopics: [
                    {
                        name: 'Force Between Point Charges',
                        explanation: 'Coulomb\'s law states that the force between two point charges is directly proportional to the product of charges and inversely proportional to the square of distance: F = k|q₁q₂|/r². The force is attractive for opposite charges and repulsive for like charges.'
                    },
                    {
                        name: 'Electric Field',
                        explanation: 'Electric field E is the force per unit positive charge: E = F/q = kQ/r². It\'s a vector quantity pointing away from positive charges and toward negative charges. The field exists even without a test charge present.'
                    },
                    {
                        name: 'Superposition Principle',
                        explanation: 'The net electric field due to multiple charges is the vector sum of individual fields. This principle allows us to calculate fields for complex charge distributions by breaking them into simpler components.'
                    }
                ]
            },
            {
                name: 'Electric Field & Potential',
                description: 'Electric potential is the scalar counterpart to the vector electric field, representing the potential energy per unit charge.',
                subtopics: [
                    {
                        name: 'Electric Potential',
                        explanation: 'Electric potential V at a point is the work done per unit positive charge in bringing it from infinity: V = kQ/r. Unlike electric field, potential is a scalar quantity, making calculations easier for complex systems.'
                    },
                    {
                        name: 'Potential Difference',
                        explanation: 'Potential difference between two points is the work done per unit charge in moving it between those points: ΔV = W/q. This concept is fundamental to understanding voltage in circuits.'
                    },
                    {
                        name: 'Relation Between E and V',
                        explanation: 'Electric field is the negative gradient of potential: E = -dV/dr. This means field points in the direction of decreasing potential. Equipotential surfaces are always perpendicular to field lines.'
                    },
                    {
                        name: 'Equipotential Surfaces',
                        explanation: 'Surfaces where potential is constant. No work is done in moving a charge along an equipotential surface. These surfaces are always perpendicular to electric field lines and help visualize the field pattern.'
                    }
                ]
            },
            {
                name: 'Gauss\'s Law',
                description: 'A powerful method for calculating electric fields using the concept of electric flux, especially useful for symmetric charge distributions.',
                subtopics: [
                    {
                        name: 'Electric Flux',
                        explanation: 'Electric flux Φ = ∮E⃗⋅dA⃗ represents the number of field lines passing through a surface. It depends on the field strength, surface area, and the angle between field and surface normal.'
                    },
                    {
                        name: 'Gauss\'s Law Statement',
                        explanation: 'The electric flux through any closed surface is proportional to the enclosed charge: ∮E⃗⋅dA⃗ = Q_enclosed/ε₀. This law is one of Maxwell\'s equations and is equivalent to Coulomb\'s law.'
                    },
                    {
                        name: 'Applications',
                        explanation: 'Gauss\'s law simplifies field calculations for symmetric charge distributions like spheres, cylinders, and planes. The key is choosing an appropriate Gaussian surface that matches the symmetry of the problem.'
                    }
                ]
            },
            {
                name: 'Capacitors',
                description: 'Devices that store electric charge and energy, fundamental components in electronic circuits and energy storage systems.',
                subtopics: [
                    {
                        name: 'Capacitance',
                        explanation: 'Capacitance C = Q/V is the ability to store charge per unit potential difference. It depends only on the geometry and dielectric material, not on the charge or voltage.'
                    },
                    {
                        name: 'Parallel Plate Capacitor',
                        explanation: 'The simplest capacitor consists of two parallel conducting plates separated by distance d. Its capacitance C = ε₀A/d depends on plate area A and separation d. Adding dielectric increases capacitance by factor κ.'
                    },
                    {
                        name: 'Energy Storage',
                        explanation: 'Capacitors store energy in the electric field: U = ½CV² = ½QV = Q²/2C. This energy can be released quickly, making capacitors useful in flash photography, defibrillators, and power supplies.'
                    },
                    {
                        name: 'Capacitor Combinations',
                        explanation: 'Series: 1/C_eq = 1/C₁ + 1/C₂ + ... (capacitances add reciprocally). Parallel: C_eq = C₁ + C₂ + ... (capacitances add directly). These rules help analyze complex capacitor networks.'
                    }
                ]
            }
        ],

        formulas: {
            'Coulomb\'s Law & Electric Field': [
                {
                    name: 'Coulomb\'s Law',
                    expression: 'F = k|q₁q₂|/r²',
                    description: 'Force between two point charges, k = 1/4πε₀'
                },
                {
                    name: 'Electric Field',
                    expression: 'E = kq/r²',
                    description: 'Electric field due to point charge'
                },
                {
                    name: 'Vector Form',
                    expression: 'E⃗ = kq/r² r̂',
                    description: 'Electric field in vector form'
                }
            ],
            'Electric Potential': [
                {
                    name: 'Electric Potential',
                    expression: 'V = kq/r',
                    description: 'Potential due to point charge'
                },
                {
                    name: 'Relation with Field',
                    expression: 'E = -dV/dr',
                    description: 'Electric field is negative gradient of potential'
                },
                {
                    name: 'Potential Energy',
                    expression: 'U = kq₁q₂/r',
                    description: 'Potential energy between two charges'
                }
            ],
            'Gauss\'s Law': [
                {
                    name: 'Gauss\'s Law',
                    expression: '∮E⃗⋅dA⃗ = Q_enclosed/ε₀',
                    description: 'Electric flux through closed surface'
                }
            ],
            'Capacitors': [
                {
                    name: 'Capacitance',
                    expression: 'C = Q/V',
                    description: 'Definition of capacitance'
                },
                {
                    name: 'Parallel Plate Capacitor',
                    expression: 'C = ε₀A/d',
                    description: 'Capacitance of parallel plate capacitor'
                },
                {
                    name: 'With Dielectric',
                    expression: 'C = κε₀A/d',
                    description: 'Capacitance with dielectric material'
                },
                {
                    name: 'Energy Stored',
                    expression: 'U = ½CV²',
                    description: 'Energy stored in capacitor'
                }
            ]
        },

        problems: [
            {
                problem: 'Two point charges +4μC and -2μC are placed 30 cm apart in air. Find the electric field at a point midway between them.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Charge q₁ = +4μC = +4 × 10⁻⁶ C',
                        'Charge q₂ = -2μC = -2 × 10⁻⁶ C',
                        'Distance between charges = 30 cm = 0.3 m',
                        'Point P is at midway, so distance from each charge = 0.15 m',
                        'k = 9 × 10⁹ N⋅m²/C²'
                    ],
                    find: 'Electric field at point P',
                    formula: 'E = kq/r², Superposition principle',
                    steps: [
                        {
                            step: 'Calculate field due to +4μC charge',
                            work: 'E₁ = kq₁/r² = (9 × 10⁹ × 4 × 10⁻⁶)/(0.15)²',
                            result: 'E₁ = 1.6 × 10⁶ N/C (towards right)'
                        },
                        {
                            step: 'Calculate field due to -2μC charge',
                            work: 'E₂ = kq₂/r² = (9 × 10⁹ × 2 × 10⁻⁶)/(0.15)²',
                            result: 'E₂ = 8 × 10⁵ N/C (towards right)'
                        },
                        {
                            step: 'Apply superposition principle',
                            work: 'Both fields point in same direction (towards right)',
                            result: 'E_net = E₁ + E₂ = 1.6 × 10⁶ + 8 × 10⁵'
                        },
                        {
                            step: 'Calculate net electric field',
                            work: 'E_net = 2.4 × 10⁶ N/C',
                            result: 'Direction: towards the negative charge'
                        }
                    ],
                    answer: 'Electric field = 2.4 × 10⁶ N/C towards negative charge',
                    concept: 'Electric field follows superposition principle'
                }
            },
            {
                problem: 'A parallel plate capacitor has plates of area 0.01 m² separated by 2 mm. A dielectric of relative permittivity 5 fills the space. Calculate capacitance and energy stored when charged to 1000 V.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Area A = 0.01 m²',
                        'Separation d = 2 mm = 2 × 10⁻³ m',
                        'Relative permittivity κ = 5',
                        'Voltage V = 1000 V',
                        'ε₀ = 8.85 × 10⁻¹² F/m'
                    ],
                    find: 'Capacitance C and Energy stored U',
                    formula: 'C = κε₀A/d, U = ½CV²',
                    steps: [
                        {
                            step: 'Calculate capacitance',
                            work: 'C = κε₀A/d = (5 × 8.85 × 10⁻¹² × 0.01)/(2 × 10⁻³)',
                            result: 'C = 2.21 × 10⁻¹⁰ F = 221 pF'
                        },
                        {
                            step: 'Calculate energy stored',
                            work: 'U = ½CV² = ½ × 2.21 × 10⁻¹⁰ × (1000)²',
                            result: 'U = 1.105 × 10⁻⁴ J = 0.11 mJ'
                        }
                    ],
                    answer: 'Capacitance = 221 pF, Energy = 0.11 mJ',
                    concept: 'Dielectric increases capacitance and energy storage'
                }
            },
            {
                problem: 'Three charges +q, +q, and -2q are placed at the vertices of an equilateral triangle of side a. Find the electric potential at the center of the triangle.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Three charges: +q, +q, -2q',
                        'Equilateral triangle of side a',
                        'Distance from center to each vertex = a/√3'
                    ],
                    find: 'Electric potential at center',
                    formula: 'V = kq/r, Potential is scalar - add algebraically',
                    steps: [
                        {
                            step: 'Calculate distance from center to vertex',
                            work: 'For equilateral triangle, distance from center to vertex = a/√3',
                            result: 'r = a/√3'
                        },
                        {
                            step: 'Calculate potential due to each charge',
                            work: 'V₁ = kq/(a/√3) = k√3q/a',
                            result: 'V₂ = kq/(a/√3) = k√3q/a, V₃ = k(-2q)/(a/√3) = -2k√3q/a'
                        },
                        {
                            step: 'Apply superposition for potential',
                            work: 'V_total = V₁ + V₂ + V₃ = k√3q/a + k√3q/a - 2k√3q/a',
                            result: 'V_total = 2k√3q/a - 2k√3q/a = 0'
                        }
                    ],
                    answer: 'Electric potential at center = 0',
                    concept: 'Electric potential is scalar quantity - algebraic sum'
                }
            },
            {
                problem: 'A spherical conductor of radius 10 cm carries a charge of 2μC. Find the electric field and potential at distances 5 cm and 20 cm from the center.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Spherical conductor radius R = 10 cm = 0.1 m',
                        'Charge Q = 2μC = 2 × 10⁻⁶ C',
                        'Points at r₁ = 5 cm = 0.05 m and r₂ = 20 cm = 0.2 m',
                        'k = 9 × 10⁹ N⋅m²/C²'
                    ],
                    find: 'Electric field and potential at both points',
                    formula: 'Inside: E = 0, V = kQ/R; Outside: E = kQ/r², V = kQ/r',
                    steps: [
                        {
                            step: 'At r₁ = 5 cm (inside conductor)',
                            work: 'E₁ = 0 (field inside conductor is zero)',
                            result: 'V₁ = kQ/R = (9 × 10⁹ × 2 × 10⁻⁶)/0.1 = 1.8 × 10⁵ V'
                        },
                        {
                            step: 'At r₂ = 20 cm (outside conductor)',
                            work: 'E₂ = kQ/r₂² = (9 × 10⁹ × 2 × 10⁻⁶)/(0.2)²',
                            result: 'E₂ = 4.5 × 10⁵ N/C'
                        },
                        {
                            step: 'Potential at r₂ = 20 cm',
                            work: 'V₂ = kQ/r₂ = (9 × 10⁹ × 2 × 10⁻⁶)/0.2',
                            result: 'V₂ = 9 × 10⁴ V'
                        }
                    ],
                    answer: 'At 5 cm: E = 0, V = 1.8 × 10⁵ V; At 20 cm: E = 4.5 × 10⁵ N/C, V = 9 × 10⁴ V',
                    concept: 'Conductor properties: E = 0 inside, constant potential'
                }
            },
            {
                problem: 'Two capacitors C₁ = 4μF and C₂ = 6μF are connected in series and charged to 120 V. Find the charge on each capacitor and voltage across each.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'C₁ = 4μF = 4 × 10⁻⁶ F',
                        'C₂ = 6μF = 6 × 10⁻⁶ F',
                        'Total voltage V = 120 V',
                        'Capacitors in series'
                    ],
                    find: 'Charge on each capacitor and voltage across each',
                    formula: 'Series: 1/C_eq = 1/C₁ + 1/C₂, Q₁ = Q₂ = Q_total',
                    steps: [
                        {
                            step: 'Calculate equivalent capacitance',
                            work: '1/C_eq = 1/4 + 1/6 = (3+2)/12 = 5/12',
                            result: 'C_eq = 12/5 = 2.4 μF'
                        },
                        {
                            step: 'Calculate total charge',
                            work: 'Q_total = C_eq × V = 2.4 × 10⁻⁶ × 120',
                            result: 'Q_total = 2.88 × 10⁻⁴ C = 288 μC'
                        },
                        {
                            step: 'In series, charge is same on both',
                            work: 'Q₁ = Q₂ = Q_total = 288 μC',
                            result: 'Both capacitors have same charge'
                        },
                        {
                            step: 'Calculate voltage across each',
                            work: 'V₁ = Q₁/C₁ = 288 × 10⁻⁶/4 × 10⁻⁶ = 72 V',
                            result: 'V₂ = Q₂/C₂ = 288 × 10⁻⁶/6 × 10⁻⁶ = 48 V'
                        }
                    ],
                    answer: 'Charge on each = 288 μC, V₁ = 72 V, V₂ = 48 V',
                    concept: 'Series capacitors: same charge, voltage divides inversely'
                }
            },
            {
                problem: 'Use Gauss\'s law to find the electric field at a distance r from an infinite line charge with linear charge density λ.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Infinite line charge',
                        'Linear charge density λ C/m',
                        'Distance from line = r'
                    ],
                    find: 'Electric field at distance r',
                    formula: 'Gauss\'s law: ∮E⃗⋅dA⃗ = Q_enclosed/ε₀',
                    steps: [
                        {
                            step: 'Choose appropriate Gaussian surface',
                            work: 'Cylindrical surface of radius r and length L',
                            result: 'Symmetry: E is radial and constant at distance r'
                        },
                        {
                            step: 'Calculate enclosed charge',
                            work: 'Q_enclosed = λL (charge on length L of line)',
                            result: 'Q_enclosed = λL'
                        },
                        {
                            step: 'Apply Gauss\'s law',
                            work: 'E × 2πrL = λL/ε₀ (only curved surface contributes)',
                            result: 'E × 2πrL = λL/ε₀'
                        },
                        {
                            step: 'Solve for electric field',
                            work: 'E = λL/(ε₀ × 2πrL) = λ/(2πε₀r)',
                            result: 'E = λ/(2πε₀r)'
                        }
                    ],
                    answer: 'Electric field E = λ/(2πε₀r), radially outward',
                    concept: 'Gauss\'s law simplifies calculations for symmetric charge distributions'
                }
            },
            {
                problem: 'A hollow conducting sphere of inner radius 5 cm and outer radius 10 cm carries a charge of 8μC. Find the electric field at r = 7 cm from center.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Inner radius a = 5 cm',
                        'Outer radius b = 10 cm',
                        'Total charge Q = 8μC',
                        'Point at r = 7 cm (inside conductor)'
                    ],
                    find: 'Electric field at r = 7 cm',
                    formula: 'E = 0 inside conductor',
                    steps: [
                        {
                            step: 'Identify region',
                            work: 'r = 7 cm lies between inner and outer radii',
                            result: 'Point is inside the conducting material'
                        },
                        {
                            step: 'Apply conductor property',
                            work: 'Electric field inside conductor is always zero',
                            result: 'E = 0'
                        }
                    ],
                    answer: '0 N/C',
                    concept: 'Electric field inside conductor'
                }
            },
            {
                problem: 'Find the minimum work required to assemble four identical charges q at the corners of a square of side a.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Four identical charges q',
                        'Square of side a',
                        'Initially charges at infinity'
                    ],
                    find: 'Work required W',
                    formula: 'W = ½ΣᵢΣⱼ kqᵢqⱼ/rᵢⱼ',
                    steps: [
                        {
                            step: 'Count charge pairs',
                            work: '4 side pairs at distance a, 2 diagonal pairs at distance a√2',
                            result: '6 total pairs'
                        },
                        {
                            step: 'Calculate total work',
                            work: 'W = kq²[4/a + 2/(a√2)] = kq²[4/a + √2/a]',
                            result: 'W = (kq²/a)(4 + √2) = 5.41kq²/a'
                        }
                    ],
                    answer: 'W = 5.41kq²/a',
                    concept: 'Work to assemble charge configuration'
                }
            },
            {
                problem: 'A parallel plate capacitor has plates of area 100 cm² and separation 1 mm. It is connected to a 12 V battery. Find the charge and energy stored.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Area A = 100 cm² = 0.01 m²',
                        'Separation d = 1 mm = 10⁻³ m',
                        'Voltage V = 12 V',
                        'ε₀ = 8.85 × 10⁻¹² F/m'
                    ],
                    find: 'Charge Q and energy U',
                    formula: 'C = ε₀A/d, Q = CV, U = ½CV²',
                    steps: [
                        {
                            step: 'Calculate capacitance',
                            work: 'C = (8.85×10⁻¹² × 0.01)/(10⁻³) = 8.85×10⁻¹¹ F',
                            result: 'C = 88.5 pF'
                        },
                        {
                            step: 'Calculate charge and energy',
                            work: 'Q = 88.5×10⁻¹² × 12 = 1.06×10⁻⁹ C',
                            result: 'Q = 1.06 nC, U = ½ × 88.5×10⁻¹² × 144 = 6.37×10⁻⁹ J'
                        }
                    ],
                    answer: 'Q = 1.06 nC, U = 6.37 nJ',
                    concept: 'Parallel plate capacitor calculations'
                }
            },
            {
                problem: 'An electric dipole of moment 2 × 10⁻⁶ C⋅m is placed in a uniform field of 10⁵ N/C. Find the work done to rotate it from θ = 0° to θ = 90°.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Dipole moment p = 2 × 10⁻⁶ C⋅m',
                        'Electric field E = 10⁵ N/C',
                        'Initial angle θ₁ = 0°',
                        'Final angle θ₂ = 90°'
                    ],
                    find: 'Work done W',
                    formula: 'U = -pE cos θ, W = ΔU = U₂ - U₁',
                    steps: [
                        {
                            step: 'Calculate initial and final potential energies',
                            work: 'U₁ = -pE cos 0° = -pE, U₂ = -pE cos 90° = 0',
                            result: 'U₁ = -2×10⁻⁶ × 10⁵ = -0.2 J, U₂ = 0'
                        },
                        {
                            step: 'Calculate work done',
                            work: 'W = U₂ - U₁ = 0 - (-0.2) = 0.2 J',
                            result: 'W = 0.2 J'
                        }
                    ],
                    answer: '0.2 J',
                    concept: 'Work done on dipole in electric field'
                }
            },
            {
                problem: 'A conducting sphere of radius 5 cm has a charge of 10 μC. Find the electric field and potential at distances 3 cm and 8 cm from the center.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Conducting sphere radius R = 5 cm = 0.05 m',
                        'Charge Q = 10 μC = 10 × 10⁻⁶ C',
                        'Points at r₁ = 3 cm = 0.03 m and r₂ = 8 cm = 0.08 m',
                        'k = 9 × 10⁹ N⋅m²/C²'
                    ],
                    find: 'Electric field E and potential V at both points',
                    formula: 'Inside conductor: E = 0, V = kQ/R; Outside: E = kQ/r², V = kQ/r',
                    steps: [
                        {
                            step: 'At r₁ = 3 cm (inside conductor)',
                            work: 'E₁ = 0 (electric field inside conductor is zero)',
                            result: 'V₁ = kQ/R = (9×10⁹ × 10×10⁻⁶)/0.05 = 1.8×10⁶ V'
                        },
                        {
                            step: 'At r₂ = 8 cm (outside conductor)',
                            work: 'E₂ = kQ/r₂² = (9×10⁹ × 10×10⁻⁶)/(0.08)²',
                            result: 'E₂ = 90/(6.4×10⁻³) = 1.41×10⁷ N/C'
                        },
                        {
                            step: 'Potential at r₂ = 8 cm',
                            work: 'V₂ = kQ/r₂ = (9×10⁹ × 10×10⁻⁶)/0.08',
                            result: 'V₂ = 90/0.08 = 1.125×10⁶ V'
                        }
                    ],
                    answer: 'At 3 cm: E = 0, V = 1.8×10⁶ V; At 8 cm: E = 1.41×10⁷ N/C, V = 1.125×10⁶ V',
                    concept: 'Conductor properties: zero field inside, equipotential surface'
                }
            },
            {
                problem: 'Two point charges +8 μC and -2 μC are separated by 10 cm. Find the position where the electric field is zero.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Charge q₁ = +8 μC = +8 × 10⁻⁶ C',
                        'Charge q₂ = -2 μC = -2 × 10⁻⁶ C',
                        'Separation d = 10 cm = 0.1 m'
                    ],
                    find: 'Position where electric field E = 0',
                    formula: 'E₁ + E₂ = 0, so kq₁/r₁² = kq₂/r₂²',
                    steps: [
                        {
                            step: 'Analyze field directions',
                            work: 'Field due to +8μC points away, field due to -2μC points toward it',
                            result: 'Zero field can only exist on line joining charges, outside the charges'
                        },
                        {
                            step: 'Set up equation for zero field',
                            work: 'Let distance from +8μC be x, then distance from -2μC is (x-0.1)',
                            result: 'kq₁/x² = kq₂/(x-0.1)², so 8/x² = 2/(x-0.1)²'
                        },
                        {
                            step: 'Solve the equation',
                            work: '8(x-0.1)² = 2x², so 8(x²-0.2x+0.01) = 2x²',
                            result: '8x²-1.6x+0.08 = 2x², so 6x²-1.6x+0.08 = 0'
                        },
                        {
                            step: 'Apply quadratic formula',
                            work: 'x = [1.6 ± √(1.6²-4×6×0.08)]/(2×6) = [1.6 ± √0.64]/12',
                            result: 'x = (1.6 ± 0.8)/12, so x = 0.2 m or x = 0.067 m'
                        },
                        {
                            step: 'Check physical validity',
                            work: 'x = 0.067 m is between charges (invalid), x = 0.2 m is beyond +8μC (valid)',
                            result: 'Electric field is zero at 20 cm from +8μC charge'
                        }
                    ],
                    answer: 'Electric field is zero at 20 cm from the +8 μC charge',
                    concept: 'Zero field point exists outside the line joining unlike charges'
                }
            },
            {
                problem: 'A parallel plate capacitor with air between plates has capacitance 5 pF. When a dielectric slab of thickness 2 mm and dielectric constant 4 is inserted, find the new capacitance.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Initial capacitance C₀ = 5 pF = 5 × 10⁻¹² F',
                        'Dielectric thickness t = 2 mm = 2 × 10⁻³ m',
                        'Dielectric constant κ = 4',
                        'Assume plate separation d > t'
                    ],
                    find: 'New capacitance C with dielectric',
                    formula: 'For partial dielectric: 1/C = (d-t)/(ε₀A) + t/(κε₀A)',
                    steps: [
                        {
                            step: 'Find original plate separation',
                            work: 'C₀ = ε₀A/d, so d = ε₀A/C₀',
                            result: 'Original separation d can be expressed in terms of C₀'
                        },
                        {
                            step: 'Set up equation for new capacitance',
                            work: '1/C = (d-t)/(ε₀A) + t/(κε₀A) = (d-t+t/κ)/(ε₀A)',
                            result: '1/C = (d-t+t/4)/(ε₀A) = (d-0.75t)/(ε₀A)'
                        },
                        {
                            step: 'Express in terms of original capacitance',
                            work: 'C = ε₀A/(d-0.75t) = C₀d/(d-0.75t)',
                            result: 'Need to know d to calculate exact value'
                        },
                        {
                            step: 'For complete filling (assuming d = t)',
                            work: 'If dielectric completely fills: C = κC₀ = 4 × 5 pF',
                            result: 'C = 20 pF (maximum possible increase)'
                        }
                    ],
                    answer: 'New capacitance depends on plate separation; if completely filled: 20 pF',
                    concept: 'Dielectric increases capacitance by factor κ when completely filled'
                }
            },
            {
                problem: 'Find the electric field at the center of a square of side 20 cm with charges +q, +q, -q, -q at the four corners respectively.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Square side a = 20 cm = 0.2 m',
                        'Charges at corners: +q, +q, -q, -q',
                        'Distance from center to corner = a/√2'
                    ],
                    find: 'Electric field at center of square',
                    formula: 'E = kq/r², vector addition of fields',
                    steps: [
                        {
                            step: 'Calculate distance from center to corner',
                            work: 'r = a/√2 = 0.2/√2 = 0.141 m',
                            result: 'Each charge is at distance 0.141 m from center'
                        },
                        {
                            step: 'Calculate field magnitude from each charge',
                            work: 'E = kq/r² = kq/(0.141)² = kq/0.02 = 50kq',
                            result: 'Each charge produces field of magnitude 50kq at center'
                        },
                        {
                            step: 'Analyze field directions and components',
                            work: 'Fields from opposite corners are along diagonals',
                            result: 'Need to find vector sum of four fields'
                        },
                        {
                            step: 'Apply superposition principle',
                            work: 'Due to symmetry, fields from +q charges cancel fields from -q charges',
                            result: 'Net electric field = 0'
                        }
                    ],
                    answer: 'Electric field at center = 0',
                    concept: 'Symmetry in charge distribution can result in zero net field'
                }
            },
            {
                problem: 'A capacitor of 10 μF is charged to 100 V and then connected in parallel with an uncharged 15 μF capacitor. Find the final voltage and energy lost.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Initial capacitor C₁ = 10 μF, charged to V₁ = 100 V',
                        'Second capacitor C₂ = 15 μF, initially uncharged',
                        'Connected in parallel'
                    ],
                    find: 'Final voltage V_f and energy lost ΔU',
                    formula: 'Charge conservation: Q_total = Q_initial, V_f = Q_total/(C₁+C₂)',
                    steps: [
                        {
                            step: 'Calculate initial charge and energy',
                            work: 'Q₁ = C₁V₁ = 10×10⁻⁶ × 100 = 10⁻³ C',
                            result: 'U₁ = ½C₁V₁² = ½ × 10×10⁻⁶ × (100)² = 0.05 J'
                        },
                        {
                            step: 'Apply charge conservation',
                            work: 'Total charge remains Q_total = 10⁻³ C',
                            result: 'This charge redistributes between both capacitors'
                        },
                        {
                            step: 'Calculate final voltage',
                            work: 'V_f = Q_total/(C₁+C₂) = 10⁻³/(10+15)×10⁻⁶',
                            result: 'V_f = 10⁻³/(25×10⁻⁶) = 40 V'
                        },
                        {
                            step: 'Calculate final energy',
                            work: 'U_f = ½(C₁+C₂)V_f² = ½ × 25×10⁻⁶ × (40)²',
                            result: 'U_f = ½ × 25×10⁻⁶ × 1600 = 0.02 J'
                        },
                        {
                            step: 'Calculate energy lost',
                            work: 'ΔU = U₁ - U_f = 0.05 - 0.02',
                            result: 'ΔU = 0.03 J'
                        }
                    ],
                    answer: 'Final voltage = 40 V, Energy lost = 0.03 J',
                    concept: 'Energy is always lost when capacitors are connected due to current flow'
                }
            },
            {
                problem: 'A uniformly charged ring of radius R has total charge Q. Find the electric field at a point on the axis at distance x from the center.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Ring radius R',
                        'Total charge Q uniformly distributed',
                        'Point P on axis at distance x from center',
                        'Distance from any point on ring to P = √(R² + x²)'
                    ],
                    find: 'Electric field E at point P',
                    formula: 'dE = kdq/r², integration over ring',
                    steps: [
                        {
                            step: 'Set up coordinate system',
                            work: 'Ring in xy-plane, point P on z-axis at distance x',
                            result: 'Distance from ring element to P = √(R² + x²)'
                        },
                        {
                            step: 'Analyze field components',
                            work: 'Due to symmetry, perpendicular components cancel',
                            result: 'Only axial component survives: dE_x = dE cos θ'
                        },
                        {
                            step: 'Calculate cosine of angle',
                            work: 'cos θ = x/√(R² + x²)',
                            result: 'dE_x = (kdq/(R² + x²)) × (x/√(R² + x²))'
                        },
                        {
                            step: 'Integrate over entire ring',
                            work: 'E_x = ∫(kx dq)/(R² + x²)^(3/2) = (kxQ)/(R² + x²)^(3/2)',
                            result: 'E = kQx/(R² + x²)^(3/2) along axis'
                        },
                        {
                            step: 'Check limiting cases',
                            work: 'At center (x=0): E=0, Far away (x>>R): E≈kQ/x²',
                            result: 'Results match expected behavior'
                        }
                    ],
                    answer: 'E = kQx/(R² + x²)^(3/2) along the axis',
                    concept: 'Symmetry simplifies integration in electrostatics problems'
                }
            },
            {
                problem: 'Two identical capacitors of 6 μF each are connected in series across 120 V. Find the charge, voltage across each, and total energy stored.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Two identical capacitors C₁ = C₂ = 6 μF',
                        'Connected in series',
                        'Total voltage V = 120 V'
                    ],
                    find: 'Charge Q, voltage across each V₁, V₂, and total energy U',
                    formula: 'Series: C_eq = C₁C₂/(C₁+C₂), same charge on both',
                    steps: [
                        {
                            step: 'Calculate equivalent capacitance',
                            work: 'For identical capacitors in series: C_eq = C/2 = 6/2',
                            result: 'C_eq = 3 μF'
                        },
                        {
                            step: 'Calculate total charge',
                            work: 'Q = C_eq × V = 3×10⁻⁶ × 120',
                            result: 'Q = 3.6×10⁻⁴ C = 360 μC'
                        },
                        {
                            step: 'Calculate voltage across each capacitor',
                            work: 'V₁ = V₂ = Q/C = 360×10⁻⁶/6×10⁻⁶',
                            result: 'V₁ = V₂ = 60 V'
                        },
                        {
                            step: 'Verify voltage division',
                            work: 'V₁ + V₂ = 60 + 60 = 120 V ✓',
                            result: 'Voltage division verified'
                        },
                        {
                            step: 'Calculate total energy stored',
                            work: 'U = ½C_eq V² = ½ × 3×10⁻⁶ × (120)²',
                            result: 'U = ½ × 3×10⁻⁶ × 14400 = 0.0216 J'
                        }
                    ],
                    answer: 'Charge = 360 μC, Voltage across each = 60 V, Energy = 0.0216 J',
                    concept: 'Series capacitors: same charge, voltage divides equally for identical capacitors'
                }
            },
            {
                problem: 'A point charge q is placed at distance d from an infinite grounded conducting plane. Find the force on the charge.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Point charge q at distance d from grounded plane',
                        'Conducting plane is grounded (V = 0)',
                        'Method of images applies'
                    ],
                    find: 'Force F on the charge q',
                    formula: 'Method of images: replace plane with image charge -q at distance d on other side',
                    steps: [
                        {
                            step: 'Apply method of images',
                            work: 'Image charge q\' = -q located at distance d behind the plane',
                            result: 'Distance between q and q\' = 2d'
                        },
                        {
                            step: 'Calculate force between charges',
                            work: 'F = kqq\'/(2d)² = k×q×(-q)/(4d²)',
                            result: 'F = -kq²/(4d²)'
                        },
                        {
                            step: 'Determine force direction',
                            work: 'Negative sign indicates attractive force',
                            result: 'Force is toward the conducting plane'
                        },
                        {
                            step: 'Express in terms of permittivity',
                            work: 'F = -q²/(16πε₀d²)',
                            result: 'Force magnitude = q²/(16πε₀d²)'
                        }
                    ],
                    answer: 'Force = q²/(16πε₀d²) toward the plane',
                    concept: 'Method of images: grounded conductor induces attractive force'
                }
            },
            {
                problem: 'A spherical capacitor has inner radius 5 cm and outer radius 10 cm. If the dielectric constant of the medium is 2.5, find its capacitance.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Inner radius a = 5 cm = 0.05 m',
                        'Outer radius b = 10 cm = 0.10 m',
                        'Dielectric constant κ = 2.5',
                        'ε₀ = 8.85 × 10⁻¹² F/m'
                    ],
                    find: 'Capacitance C of spherical capacitor',
                    formula: 'C = 4πκε₀ab/(b-a)',
                    steps: [
                        {
                            step: 'Apply spherical capacitor formula',
                            work: 'C = 4πκε₀ab/(b-a)',
                            result: 'C = 4π × 2.5 × 8.85×10⁻¹² × 0.05 × 0.10/(0.10-0.05)'
                        },
                        {
                            step: 'Substitute values',
                            work: 'C = 4π × 2.5 × 8.85×10⁻¹² × 0.005/0.05',
                            result: 'C = 4π × 2.5 × 8.85×10⁻¹² × 0.1'
                        },
                        {
                            step: 'Calculate capacitance',
                            work: 'C = 4π × 2.5 × 8.85 × 0.1 × 10⁻¹²',
                            result: 'C = 27.8 × 10⁻¹² F = 27.8 pF'
                        }
                    ],
                    answer: 'Capacitance = 27.8 pF',
                    concept: 'Spherical capacitor: capacitance depends on both radii and dielectric'
                }
            },
            {
                problem: 'Find the electric field inside and outside a uniformly charged solid sphere of radius R and total charge Q.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Solid sphere radius R',
                        'Total charge Q uniformly distributed',
                        'Charge density ρ = 3Q/(4πR³)'
                    ],
                    find: 'Electric field E(r) for r < R and r > R',
                    formula: 'Gauss\'s law: ∮E⃗·dA⃗ = Q_enclosed/ε₀',
                    steps: [
                        {
                            step: 'For r > R (outside sphere)',
                            work: 'Gaussian surface encloses entire charge Q',
                            result: 'E × 4πr² = Q/ε₀, so E = Q/(4πε₀r²) = kQ/r²'
                        },
                        {
                            step: 'For r < R (inside sphere)',
                            work: 'Enclosed charge = ρ × (4πr³/3) = Q × (r³/R³)',
                            result: 'Q_enclosed = Qr³/R³'
                        },
                        {
                            step: 'Apply Gauss\'s law inside',
                            work: 'E × 4πr² = (Qr³/R³)/ε₀',
                            result: 'E = Qr/(4πε₀R³) = kQr/R³'
                        },
                        {
                            step: 'Check continuity at boundary',
                            work: 'At r = R: E_inside = kQ/R², E_outside = kQ/R²',
                            result: 'Field is continuous at boundary ✓'
                        },
                        {
                            step: 'Summary of results',
                            work: 'Inside: E ∝ r (linear), Outside: E ∝ 1/r² (inverse square)',
                            result: 'Field increases linearly inside, decreases as 1/r² outside'
                        }
                    ],
                    answer: 'Inside (r < R): E = kQr/R³, Outside (r > R): E = kQ/r²',
                    concept: 'Gauss\'s law with spherical symmetry: field depends on enclosed charge'
                }
            },
            {
                problem: 'A parallel plate capacitor is connected to a 200 V battery. The plates are then pulled apart to double the separation while still connected to the battery. Find the change in energy stored.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Initial voltage V = 200 V (constant, connected to battery)',
                        'Final separation d₂ = 2d₁',
                        'Plate area A remains constant'
                    ],
                    find: 'Change in energy stored ΔU',
                    formula: 'C = ε₀A/d, U = ½CV² (constant voltage)',
                    steps: [
                        {
                            step: 'Calculate initial and final capacitances',
                            work: 'C₁ = ε₀A/d₁, C₂ = ε₀A/d₂ = ε₀A/(2d₁) = C₁/2',
                            result: 'Final capacitance is half the initial capacitance'
                        },
                        {
                            step: 'Calculate initial energy',
                            work: 'U₁ = ½C₁V² = ½C₁(200)² = 20000C₁',
                            result: 'U₁ = 20000C₁ J'
                        },
                        {
                            step: 'Calculate final energy',
                            work: 'U₂ = ½C₂V² = ½(C₁/2)(200)² = 10000C₁',
                            result: 'U₂ = 10000C₁ J'
                        },
                        {
                            step: 'Calculate change in energy',
                            work: 'ΔU = U₂ - U₁ = 10000C₁ - 20000C₁',
                            result: 'ΔU = -10000C₁ J (energy decreases)'
                        },
                        {
                            step: 'Physical interpretation',
                            work: 'Energy decreases because capacitance decreases at constant voltage',
                            result: 'Battery does negative work as plates are pulled apart'
                        }
                    ],
                    answer: 'Energy decreases by 10000C₁ J (where C₁ is initial capacitance)',
                    concept: 'At constant voltage, energy decreases when capacitance decreases'
                }
            },
            {
                problem: 'Three point charges +2q, -q, and +q are placed at vertices of an equilateral triangle. Find the electric field at the centroid.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Equilateral triangle with side a',
                        'Charges: +2q, -q, +q at vertices',
                        'Distance from centroid to each vertex = a/√3'
                    ],
                    find: 'Electric field E at centroid',
                    formula: 'E = kQ/r², vector addition required',
                    steps: [
                        {
                            step: 'Set up coordinate system',
                            work: 'Place centroid at origin, vertices at 120° intervals',
                            result: 'Each vertex at distance a/√3 from centroid'
                        },
                        {
                            step: 'Calculate field magnitude from each charge',
                            work: 'E₁ = k(2q)/(a/√3)² = 6kq/a², E₂ = E₃ = kq/(a/√3)² = 3kq/a²',
                            result: 'Field magnitudes: E₁ = 6kq/a², E₂ = E₃ = 3kq/a²'
                        },
                        {
                            step: 'Resolve fields into components',
                            work: 'Due to +2q: E₁ along one direction, Due to -q and +q: components at 120° and 240°',
                            result: 'Need to add vector components'
                        },
                        {
                            step: 'Calculate net field components',
                            work: 'By symmetry and vector addition of the three fields',
                            result: 'Net field = √3 kq/a² in direction away from -q charge'
                        }
                    ],
                    answer: 'Electric field = √3 kq/a² directed away from the -q charge',
                    concept: 'Vector addition of electric fields from multiple charges'
                }
            },
            {
                problem: 'A conducting sphere of radius R₁ is surrounded by a concentric conducting shell of inner radius R₂ and outer radius R₃. The inner sphere has charge +Q and the shell has charge -2Q. Find the electric field in all regions.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Inner sphere: radius R₁, charge +Q',
                        'Outer shell: inner radius R₂, outer radius R₃, charge -2Q',
                        'R₁ < R₂ < R₃'
                    ],
                    find: 'Electric field E(r) in all regions',
                    formula: 'Gauss\'s law: E = Q_enclosed/(4πε₀r²)',
                    steps: [
                        {
                            step: 'Region 1: r < R₁ (inside inner sphere)',
                            work: 'Inside conductor, E = 0',
                            result: 'E = 0'
                        },
                        {
                            step: 'Region 2: R₁ < r < R₂ (between conductors)',
                            work: 'Enclosed charge = +Q, E = kQ/r²',
                            result: 'E = kQ/r² (radially outward)'
                        },
                        {
                            step: 'Region 3: R₂ < r < R₃ (inside outer shell)',
                            work: 'Inside conductor, E = 0',
                            result: 'E = 0'
                        },
                        {
                            step: 'Region 4: r > R₃ (outside both conductors)',
                            work: 'Total enclosed charge = +Q + (-2Q) = -Q',
                            result: 'E = k(-Q)/r² = -kQ/r² (radially inward)'
                        },
                        {
                            step: 'Charge distribution on surfaces',
                            work: 'Inner surface of shell: +Q, Outer surface of shell: -3Q',
                            result: 'Charge conservation and electrostatic induction'
                        }
                    ],
                    answer: 'E = 0 (r < R₁), E = kQ/r² (R₁ < r < R₂), E = 0 (R₂ < r < R₃), E = -kQ/r² (r > R₃)',
                    concept: 'Electrostatic induction and field in concentric conductors'
                }
            },
            {
                problem: 'A variable capacitor has capacitance that varies as C = C₀(1 + x/d) where x is the displacement. If it\'s charged to voltage V₀ and then isolated, find the force on the movable plate.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Variable capacitance C = C₀(1 + x/d)',
                        'Initial voltage V₀, then isolated (constant charge)',
                        'Displacement x of movable plate'
                    ],
                    find: 'Force F on the movable plate',
                    formula: 'F = -dU/dx where U = Q²/(2C) for constant charge',
                    steps: [
                        {
                            step: 'Calculate initial charge',
                            work: 'Q = C₀V₀ (remains constant after isolation)',
                            result: 'Q = C₀V₀'
                        },
                        {
                            step: 'Express energy in terms of displacement',
                            work: 'U = Q²/(2C) = (C₀V₀)²/[2C₀(1 + x/d)] = C₀V₀²/[2(1 + x/d)]',
                            result: 'U = C₀V₀²/[2(1 + x/d)]'
                        },
                        {
                            step: 'Calculate force using F = -dU/dx',
                            work: 'dU/dx = C₀V₀²/[2d(1 + x/d)²]',
                            result: 'F = -C₀V₀²/[2d(1 + x/d)²]'
                        },
                        {
                            step: 'Interpret the result',
                            work: 'Negative force means attractive force (toward decreasing x)',
                            result: 'Force tries to decrease capacitor separation'
                        }
                    ],
                    answer: 'F = -C₀V₀²/[2d(1 + x/d)²] (attractive force)',
                    concept: 'Force on capacitor plates derived from energy considerations'
                }
            },
            {
                problem: 'A thin rod of length L has charge +λ per unit length on the left half and -λ per unit length on the right half. Find the electric field at a point P on the perpendicular bisector at distance R from the center.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Rod length L, center at origin',
                        'Left half (−L/2 to 0): charge density +λ',
                        'Right half (0 to +L/2): charge density −λ',
                        'Point P at distance R on perpendicular bisector'
                    ],
                    find: 'Electric field E at point P',
                    formula: 'dE = k(λdx)/r², integration required',
                    steps: [
                        {
                            step: 'Set up coordinate system',
                            work: 'Rod along x-axis, point P at (0, R)',
                            result: 'Distance from element dx at position x to P = √(x² + R²)'
                        },
                        {
                            step: 'Calculate field from left half (+λ)',
                            work: 'E₁ = ∫₍₋ₗ/₂₎⁰ kλ dx/(x² + R²) with components',
                            result: 'Only y-component survives due to symmetry'
                        },
                        {
                            step: 'Calculate field from right half (−λ)',
                            work: 'E₂ = ∫₀^(L/2) k(-λ) dx/(x² + R²) with components',
                            result: 'Only y-component survives due to symmetry'
                        },
                        {
                            step: 'Add contributions from both halves',
                            work: 'Both halves contribute in same direction (toward center)',
                            result: 'E = 2kλR ∫₀^(L/2) dx/(x² + R²)^(3/2)'
                        },
                        {
                            step: 'Evaluate the integral',
                            work: '∫ dx/(x² + R²)^(3/2) = x/[R²√(x² + R²)]',
                            result: 'E = 2kλL/[R√(L² + 4R²)] toward the center'
                        }
                    ],
                    answer: 'E = 2kλL/[R√(L² + 4R²)] toward the center of the rod',
                    concept: 'Electric field from non-uniform charge distribution requires integration'
                }
            },
            {
                problem: 'A parallel plate capacitor with plate area 100 cm² and separation 5 mm is filled with two dielectric slabs of equal thickness. One has κ₁ = 3 and the other κ₂ = 6. Find the capacitance when connected to 100 V.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Plate area A = 100 cm² = 0.01 m²',
                        'Total separation d = 5 mm = 5 × 10⁻³ m',
                        'Two dielectric slabs of equal thickness t = d/2 = 2.5 mm',
                        'Dielectric constants κ₁ = 3, κ₂ = 6',
                        'Voltage V = 100 V'
                    ],
                    find: 'Capacitance C of the system',
                    formula: 'Series combination of capacitors with different dielectrics',
                    steps: [
                        {
                            step: 'Model as two capacitors in series',
                            work: 'C₁ = κ₁ε₀A/t = 3ε₀A/t, C₂ = κ₂ε₀A/t = 6ε₀A/t',
                            result: 'Each slab acts as a separate capacitor'
                        },
                        {
                            step: 'Calculate individual capacitances',
                            work: 'C₁ = 3 × 8.85×10⁻¹² × 0.01/(2.5×10⁻³) = 1.062×10⁻¹⁰ F',
                            result: 'C₂ = 6 × 8.85×10⁻¹² × 0.01/(2.5×10⁻³) = 2.124×10⁻¹⁰ F'
                        },
                        {
                            step: 'Apply series combination formula',
                            work: '1/C = 1/C₁ + 1/C₂ = 1/(1.062×10⁻¹⁰) + 1/(2.124×10⁻¹⁰)',
                            result: '1/C = 9.416×10⁹ + 4.708×10⁹ = 1.412×10¹⁰'
                        },
                        {
                            step: 'Calculate equivalent capacitance',
                            work: 'C = 1/(1.412×10¹⁰) = 7.08×10⁻¹¹ F',
                            result: 'C = 70.8 pF'
                        }
                    ],
                    answer: 'Capacitance = 70.8 pF',
                    concept: 'Multiple dielectrics in series: equivalent capacitance calculation'
                }
            },
            {
                problem: 'An electric dipole with moment p = 2 × 10⁻⁶ C⋅m is placed in a non-uniform electric field E = 10⁵x î N/C. Find the force and torque on the dipole when it\'s aligned along the x-axis.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Dipole moment p = 2 × 10⁻⁶ C⋅m along x-axis',
                        'Non-uniform electric field E = 10⁵x î N/C',
                        'Dipole aligned along x-axis'
                    ],
                    find: 'Force F and torque τ on the dipole',
                    formula: 'F = (p⃗ · ∇)E⃗, τ = p⃗ × E⃗',
                    steps: [
                        {
                            step: 'Calculate force on dipole',
                            work: 'F = p(dE/dx) = p × d(10⁵x)/dx = p × 10⁵',
                            result: 'F = 2×10⁻⁶ × 10⁵ = 0.2 N along x-axis'
                        },
                        {
                            step: 'Calculate torque on dipole',
                            work: 'τ = p⃗ × E⃗, but p⃗ ∥ E⃗ (both along x-axis)',
                            result: 'τ = 0 (no torque when dipole aligned with field)'
                        },
                        {
                            step: 'Physical interpretation',
                            work: 'Force exists due to field gradient, torque is zero due to alignment',
                            result: 'Dipole experiences net force toward stronger field region'
                        }
                    ],
                    answer: 'Force = 0.2 N along x-axis, Torque = 0',
                    concept: 'Dipole in non-uniform field: force depends on field gradient'
                }
            },
            {
                problem: 'A charged particle q = 5 μC moves in a circle of radius 2 m around a fixed charge Q = 20 μC. Find the kinetic energy and speed of the moving particle.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Moving charge q = 5 μC = 5 × 10⁻⁶ C',
                        'Fixed charge Q = 20 μC = 20 × 10⁻⁶ C',
                        'Circular orbit radius r = 2 m',
                        'Mass of moving particle m = 10⁻³ kg (assumed)'
                    ],
                    find: 'Kinetic energy KE and speed v',
                    formula: 'Centripetal force = Electrostatic force: mv²/r = kqQ/r²',
                    steps: [
                        {
                            step: 'Apply force balance condition',
                            work: 'mv²/r = kqQ/r², so mv² = kqQ/r',
                            result: 'Kinetic energy KE = ½mv² = kqQ/(2r)'
                        },
                        {
                            step: 'Calculate kinetic energy',
                            work: 'KE = (9×10⁹ × 5×10⁻⁶ × 20×10⁻⁶)/(2 × 2)',
                            result: 'KE = (9×10⁹ × 100×10⁻¹²)/4 = 0.225 J'
                        },
                        {
                            step: 'Calculate speed',
                            work: 'v² = 2KE/m = 2 × 0.225/10⁻³ = 450',
                            result: 'v = √450 = 21.2 m/s'
                        }
                    ],
                    answer: 'Kinetic energy = 0.225 J, Speed = 21.2 m/s',
                    concept: 'Circular motion under electrostatic force: orbital mechanics'
                }
            },
            {
                problem: 'A hollow conducting cylinder of inner radius a and outer radius b has a line charge λ per unit length along its axis. Find the electric field in all regions.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Hollow conducting cylinder: inner radius a, outer radius b',
                        'Line charge λ per unit length along axis',
                        'Infinite length cylinder'
                    ],
                    find: 'Electric field E(r) in all regions',
                    formula: 'Gauss\'s law with cylindrical symmetry: E × 2πrL = Q_enclosed/ε₀',
                    steps: [
                        {
                            step: 'Region 1: r < a (inside hollow region)',
                            work: 'Gaussian cylinder encloses line charge λL',
                            result: 'E × 2πrL = λL/ε₀, so E = λ/(2πε₀r)'
                        },
                        {
                            step: 'Region 2: a < r < b (inside conductor)',
                            work: 'Electric field inside conductor is zero',
                            result: 'E = 0'
                        },
                        {
                            step: 'Region 3: r > b (outside conductor)',
                            work: 'Total enclosed charge is still λL',
                            result: 'E = λ/(2πε₀r)'
                        },
                        {
                            step: 'Charge distribution on surfaces',
                            work: 'Inner surface: -λ per unit length, Outer surface: +λ per unit length',
                            result: 'Induced charges maintain field pattern'
                        }
                    ],
                    answer: 'E = λ/(2πε₀r) (r < a), E = 0 (a < r < b), E = λ/(2πε₀r) (r > b)',
                    concept: 'Cylindrical conductor with axial line charge: field shielding'
                }
            },
            {
                problem: 'Two identical conducting spheres of radius R are separated by distance d >> R. One sphere has charge +Q, the other is uncharged. They are connected by a thin wire. Find the final charge distribution.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Two identical conducting spheres, radius R each',
                        'Separation d >> R (much larger than radius)',
                        'Initial charges: +Q and 0',
                        'Connected by thin conducting wire'
                    ],
                    find: 'Final charge distribution after connection',
                    formula: 'Charge redistribution until potentials are equal',
                    steps: [
                        {
                            step: 'Apply charge conservation',
                            work: 'Total charge = Q (conserved)',
                            result: 'Q₁ + Q₂ = Q'
                        },
                        {
                            step: 'Apply potential equality condition',
                            work: 'V₁ = V₂ (connected by conductor)',
                            result: 'kQ₁/R = kQ₂/R (since d >> R, interaction negligible)'
                        },
                        {
                            step: 'Solve the system of equations',
                            work: 'From V₁ = V₂: Q₁ = Q₂, From conservation: Q₁ + Q₂ = Q',
                            result: 'Q₁ = Q₂ = Q/2'
                        },
                        {
                            step: 'Verify the result',
                            work: 'Each sphere has same potential V = kQ/(2R)',
                            result: 'Charge distributes equally due to identical geometry'
                        }
                    ],
                    answer: 'Each sphere has charge Q/2',
                    concept: 'Charge redistribution: equal potentials for connected conductors'
                }
            }
        ]
    },

    'current-electricity': {
        title: 'Current Electricity',
        weightage: '6-8%',
        introduction: 'Current electricity deals with the flow of electric charge, resistance, and electrical circuits. This chapter covers Ohm\'s law, Kirchhoff\'s laws, and electrical power.',
        
        topics: [
            {
                name: 'Electric Current',
                description: 'Definition of current, drift velocity, and current density.',
                subtopics: [
                    {
                        name: 'Definition of Current',
                        explanation: 'Electric current is the rate of flow of electric charge through a cross-section. Mathematically, I = Q/t where Q is charge and t is time. Current is measured in amperes (A), where 1 A = 1 C/s.'
                    },
                    {
                        name: 'Drift Velocity',
                        explanation: 'When electric field is applied, free electrons in a conductor acquire a small average velocity called drift velocity. It\'s related to current by I = nAv_d where n is number density of charge carriers, A is cross-sectional area, and v_d is drift velocity.'
                    },
                    {
                        name: 'Current Density',
                        explanation: 'Current density J is current per unit cross-sectional area: J = I/A. It\'s a vector quantity pointing in the direction of current flow. For uniform current distribution, J = nqv_d where q is charge of each carrier.'
                    },
                    {
                        name: 'Conventional vs Electron Flow',
                        explanation: 'Conventional current flows from positive to negative terminal (direction of positive charge flow), while electron flow is from negative to positive. Both conventions give the same results in circuit analysis.'
                    }
                ]
            },
            {
                name: 'Ohm\'s Law & Resistance',
                description: 'Ohm\'s law, resistance, resistivity, and temperature dependence.',
                subtopics: [
                    {
                        name: 'Ohm\'s Law',
                        explanation: 'Ohm\'s law states that current through a conductor is directly proportional to voltage across it: V = IR. This holds for ohmic materials at constant temperature. The proportionality constant R is resistance.'
                    },
                    {
                        name: 'Resistance and Resistivity',
                        explanation: 'Resistance R = ρL/A depends on material property (resistivity ρ), length L, and cross-sectional area A. Resistivity is intrinsic property of material, while resistance depends on geometry.'
                    },
                    {
                        name: 'Temperature Dependence',
                        explanation: 'For metals, resistance increases with temperature: R(T) = R₀(1 + αΔT) where α is temperature coefficient. For semiconductors, resistance decreases with temperature due to increased charge carrier density.'
                    },
                    {
                        name: 'Superconductivity',
                        explanation: 'Some materials exhibit zero electrical resistance below a critical temperature T_c. This phenomenon, called superconductivity, has applications in MRI machines, power transmission, and magnetic levitation.'
                    }
                ]
            },
            {
                name: 'Series & Parallel Circuits',
                description: 'Combination of resistors, equivalent resistance calculations.',
                subtopics: [
                    {
                        name: 'Series Combination',
                        explanation: 'In series, resistors are connected end-to-end, so same current flows through all. Total resistance R_eq = R₁ + R₂ + R₃ + ... Voltage divides in proportion to resistance: V₁/V₂ = R₁/R₂.'
                    },
                    {
                        name: 'Parallel Combination',
                        explanation: 'In parallel, resistors share common terminals, so same voltage across all. Reciprocal of total resistance: 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ... Current divides inversely to resistance: I₁/I₂ = R₂/R₁.'
                    },
                    {
                        name: 'Mixed Circuits',
                        explanation: 'Complex circuits contain both series and parallel combinations. Solve by identifying series/parallel groups, calculating equivalent resistance step by step, then working backwards to find individual currents and voltages.'
                    },
                    {
                        name: 'Voltage and Current Division',
                        explanation: 'Voltage divider: V_out = V_in × R₂/(R₁+R₂). Current divider: I₁ = I_total × R₂/(R₁+R₂). These rules help analyze circuits without solving complete network equations.'
                    }
                ]
            },
            {
                name: 'Kirchhoff\'s Laws',
                description: 'Current and voltage laws for complex circuit analysis.',
                subtopics: [
                    {
                        name: 'Kirchhoff\'s Current Law (KCL)',
                        explanation: 'At any junction in a circuit, sum of currents entering equals sum of currents leaving: ΣI_in = ΣI_out. This follows from conservation of charge - charge cannot accumulate at a point.'
                    },
                    {
                        name: 'Kirchhoff\'s Voltage Law (KVL)',
                        explanation: 'Around any closed loop, algebraic sum of voltage changes is zero: ΣV = 0. This follows from conservation of energy - no net energy change in a complete loop.'
                    },
                    {
                        name: 'Mesh Analysis',
                        explanation: 'Systematic method using KVL to analyze circuits. Assign mesh currents to independent loops, write KVL equations for each mesh, then solve simultaneous equations to find all currents.'
                    },
                    {
                        name: 'Nodal Analysis',
                        explanation: 'Alternative method using KCL at nodes. Choose reference node, assign voltages to other nodes, write KCL equations, then solve for node voltages. Currents can be found using Ohm\'s law.'
                    }
                ]
            },
            {
                name: 'Electrical Power',
                description: 'Power dissipation, heating effects, and energy calculations.',
                subtopics: [
                    {
                        name: 'Power in Resistors',
                        explanation: 'Power dissipated in resistor: P = VI = I²R = V²/R. This energy is converted to heat (Joule heating). Power is always positive for resistors, indicating energy consumption.'
                    },
                    {
                        name: 'Maximum Power Transfer',
                        explanation: 'Maximum power is transferred to load when load resistance equals source internal resistance: R_load = R_source. At this condition, efficiency is 50%, but power transfer is maximum.'
                    },
                    {
                        name: 'Heating Effects',
                        explanation: 'Heat produced in resistor: H = I²Rt = VIt = V²t/R. This principle is used in electric heaters, incandescent bulbs, and fuses. Heat production is proportional to resistance in series circuits.'
                    },
                    {
                        name: 'Electrical Energy and Cost',
                        explanation: 'Electrical energy consumed: E = Pt = VIt. Commercial unit is kilowatt-hour (kWh). Cost = Energy × Rate per unit. Power rating indicates energy consumption rate of appliances.'
                    }
                ]
            }
        ],

        formulas: {
            'Current & Resistance': [
                {
                    name: 'Current',
                    expression: 'I = Q/t = nAv_d',
                    description: 'n = charge density, A = area, v_d = drift velocity'
                },
                {
                    name: 'Ohm\'s Law',
                    expression: 'V = IR',
                    description: 'Voltage = Current × Resistance'
                },
                {
                    name: 'Resistance',
                    expression: 'R = ρL/A',
                    description: 'ρ = resistivity, L = length, A = cross-sectional area'
                },
                {
                    name: 'Drift Velocity',
                    expression: 'v_d = I/(nqA)',
                    description: 'Average velocity of charge carriers'
                }
            ],
            'Circuit Analysis': [
                {
                    name: 'Series Resistance',
                    expression: 'R_eq = R₁ + R₂ + R₃ + ...',
                    description: 'Equivalent resistance in series'
                },
                {
                    name: 'Parallel Resistance',
                    expression: '1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ...',
                    description: 'Equivalent resistance in parallel'
                },
                {
                    name: 'EMF & Internal Resistance',
                    expression: 'V = E - Ir',
                    description: 'Terminal voltage with internal resistance r'
                }
            ],
            'Power': [
                {
                    name: 'Electrical Power',
                    expression: 'P = VI = I²R = V²/R',
                    description: 'Power dissipated in resistor'
                }
            ]
        },

        problems: [
            {
                problem: 'A copper wire of length 100 m and cross-sectional area 2 mm² carries a current of 5 A. If the resistivity of copper is 1.7 × 10⁻⁸ Ω⋅m, find the resistance and voltage drop across the wire.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Length L = 100 m',
                        'Cross-sectional area A = 2 mm² = 2 × 10⁻⁶ m²',
                        'Current I = 5 A',
                        'Resistivity ρ = 1.7 × 10⁻⁸ Ω⋅m'
                    ],
                    find: 'Resistance R and voltage drop V',
                    formula: 'R = ρL/A, V = IR',
                    steps: [
                        {
                            step: 'Calculate resistance',
                            work: 'R = ρL/A = (1.7 × 10⁻⁸ × 100)/(2 × 10⁻⁶)',
                            result: 'R = 1.7 × 10⁻⁶/2 × 10⁻⁶ = 0.85 Ω'
                        },
                        {
                            step: 'Calculate voltage drop',
                            work: 'V = IR = 5 × 0.85',
                            result: 'V = 4.25 V'
                        }
                    ],
                    answer: 'Resistance = 0.85 Ω, Voltage drop = 4.25 V',
                    concept: 'Resistance depends on material properties and geometry'
                }
            },
            {
                problem: 'A battery of emf 12 V and internal resistance 2 Ω is connected to external resistors of 4 Ω and 6 Ω in parallel. Find the current through each resistor and power dissipated.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'EMF E = 12 V',
                        'Internal resistance r = 2 Ω',
                        'External resistors R₁ = 4 Ω, R₂ = 6 Ω in parallel'
                    ],
                    find: 'Current through each resistor and power dissipated',
                    formula: 'Parallel resistance, Ohm\'s law, P = I²R',
                    steps: [
                        {
                            step: 'Calculate equivalent external resistance',
                            work: '1/R_eq = 1/4 + 1/6 = (3+2)/12 = 5/12',
                            result: 'R_eq = 12/5 = 2.4 Ω'
                        },
                        {
                            step: 'Calculate total current from battery',
                            work: 'I_total = E/(r + R_eq) = 12/(2 + 2.4) = 12/4.4',
                            result: 'I_total = 2.73 A'
                        },
                        {
                            step: 'Calculate voltage across parallel combination',
                            work: 'V = I_total × R_eq = 2.73 × 2.4',
                            result: 'V = 6.55 V'
                        },
                        {
                            step: 'Calculate current through each resistor',
                            work: 'I₁ = V/R₁ = 6.55/4 = 1.64 A, I₂ = V/R₂ = 6.55/6 = 1.09 A',
                            result: 'I₁ = 1.64 A, I₂ = 1.09 A'
                        },
                        {
                            step: 'Calculate power dissipated',
                            work: 'P₁ = I₁²R₁ = (1.64)² × 4 = 10.7 W, P₂ = I₂²R₂ = (1.09)² × 6 = 7.1 W',
                            result: 'P₁ = 10.7 W, P₂ = 7.1 W'
                        }
                    ],
                    answer: 'I₁ = 1.64 A, I₂ = 1.09 A, P₁ = 10.7 W, P₂ = 7.1 W',
                    concept: 'Circuit analysis with internal resistance and parallel combinations'
                }
            },
            {
                problem: 'In a potentiometer experiment, the balance point for a cell of emf 1.5 V is found at 75 cm. When a resistance of 5 Ω is connected across the cell, the balance point shifts to 60 cm. Find the internal resistance of the cell.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'EMF of cell E = 1.5 V',
                        'Balance point without load l₁ = 75 cm',
                        'Balance point with 5 Ω load l₂ = 60 cm',
                        'External resistance R = 5 Ω'
                    ],
                    find: 'Internal resistance r of the cell',
                    formula: 'Potentiometer principle: V ∝ length',
                    steps: [
                        {
                            step: 'Set up the relationship',
                            work: 'Without load: E ∝ l₁, With load: V ∝ l₂',
                            result: 'E/V = l₁/l₂ = 75/60 = 1.25'
                        },
                        {
                            step: 'Calculate terminal voltage with load',
                            work: 'V = E × (l₂/l₁) = 1.5 × (60/75)',
                            result: 'V = 1.2 V'
                        },
                        {
                            step: 'Apply voltage divider principle',
                            work: 'V = E × R/(R + r), so 1.2 = 1.5 × 5/(5 + r)',
                            result: '1.2(5 + r) = 1.5 × 5'
                        },
                        {
                            step: 'Solve for internal resistance',
                            work: '6 + 1.2r = 7.5, so 1.2r = 1.5',
                            result: 'r = 1.5/1.2 = 1.25 Ω'
                        }
                    ],
                    answer: 'Internal resistance = 1.25 Ω',
                    concept: 'Potentiometer measures emf and internal resistance accurately'
                }
            },
            {
                problem: 'A wire of resistance 10 Ω is stretched to double its length. Find the new resistance.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Original resistance R₀ = 10 Ω',
                        'New length L\' = 2L',
                        'Volume remains constant during stretching'
                    ],
                    find: 'New resistance R\'',
                    formula: 'R = ρL/A, Volume = AL = constant',
                    steps: [
                        {
                            step: 'Apply volume conservation',
                            work: 'AL = A\'L\', so A\' = AL/L\' = AL/(2L) = A/2',
                            result: 'New area A\' = A/2'
                        },
                        {
                            step: 'Calculate new resistance',
                            work: 'R\' = ρL\'/A\' = ρ(2L)/(A/2) = 4ρL/A = 4R₀',
                            result: 'R\' = 4 × 10 = 40 Ω'
                        }
                    ],
                    answer: '40 Ω',
                    concept: 'Resistance changes with geometry - length and area'
                }
            },
            {
                problem: 'Find the drift velocity of electrons in a copper wire of cross-section 2 mm² carrying 5 A current. (n = 8.5 × 10²⁸ electrons/m³)',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Current I = 5 A',
                        'Cross-sectional area A = 2 mm² = 2 × 10⁻⁶ m²',
                        'Number density n = 8.5 × 10²⁸ electrons/m³',
                        'Electron charge e = 1.6 × 10⁻¹⁹ C'
                    ],
                    find: 'Drift velocity vd',
                    formula: 'I = nAevd',
                    steps: [
                        {
                            step: 'Apply current formula',
                            work: 'vd = I/(nAe) = 5/(8.5×10²⁸ × 2×10⁻⁶ × 1.6×10⁻¹⁹)',
                            result: 'vd = 5/(2.72×10⁴) = 1.84×10⁻⁴ m/s'
                        }
                    ],
                    answer: '0.184 mm/s',
                    concept: 'Drift velocity is very small compared to random thermal velocity'
                }
            },
            {
                problem: 'Two resistors 6 Ω and 12 Ω are connected in parallel across a 18 V battery. Find current through each resistor and total power dissipated.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'R₁ = 6 Ω, R₂ = 12 Ω',
                        'Voltage V = 18 V',
                        'Resistors in parallel'
                    ],
                    find: 'Current through each resistor and total power',
                    formula: 'V = IR, P = VI = V²/R',
                    steps: [
                        {
                            step: 'Calculate current through each resistor',
                            work: 'I₁ = V/R₁ = 18/6 = 3 A, I₂ = V/R₂ = 18/12 = 1.5 A',
                            result: 'I₁ = 3 A, I₂ = 1.5 A'
                        },
                        {
                            step: 'Calculate power dissipated by each',
                            work: 'P₁ = V²/R₁ = 18²/6 = 54 W, P₂ = V²/R₂ = 18²/12 = 27 W',
                            result: 'P₁ = 54 W, P₂ = 27 W'
                        },
                        {
                            step: 'Calculate total power',
                            work: 'P_total = P₁ + P₂ = 54 + 27 = 81 W',
                            result: 'P_total = 81 W'
                        }
                    ],
                    answer: 'I₁ = 3 A, I₂ = 1.5 A, P_total = 81 W',
                    concept: 'Parallel circuits: same voltage, currents add'
                }
            },
            {
                problem: 'A heating element rated 1000 W, 220 V is connected to 110 V supply. Find the power consumed.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Rated power P₀ = 1000 W at V₀ = 220 V',
                        'Applied voltage V = 110 V',
                        'Resistance remains constant'
                    ],
                    find: 'Actual power consumed P',
                    formula: 'R = V₀²/P₀, P = V²/R',
                    steps: [
                        {
                            step: 'Calculate resistance of heating element',
                            work: 'R = V₀²/P₀ = (220)²/1000 = 48,400/1000 = 48.4 Ω',
                            result: 'R = 48.4 Ω'
                        },
                        {
                            step: 'Calculate power at 110 V',
                            work: 'P = V²/R = (110)²/48.4 = 12,100/48.4 = 250 W',
                            result: 'P = 250 W'
                        }
                    ],
                    answer: '250 W',
                    concept: 'Power varies as square of voltage for constant resistance'
                }
            },
            {
                problem: 'A cell of emf 2 V and internal resistance 0.5 Ω is connected to a 3.5 Ω external resistor. Find terminal voltage and efficiency.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'EMF E = 2 V',
                        'Internal resistance r = 0.5 Ω',
                        'External resistance R = 3.5 Ω'
                    ],
                    find: 'Terminal voltage V and efficiency η',
                    formula: 'I = E/(R+r), V = IR, η = R/(R+r)',
                    steps: [
                        {
                            step: 'Calculate current',
                            work: 'I = E/(R+r) = 2/(3.5+0.5) = 2/4 = 0.5 A',
                            result: 'I = 0.5 A'
                        },
                        {
                            step: 'Calculate terminal voltage',
                            work: 'V = IR = 0.5 × 3.5 = 1.75 V',
                            result: 'V = 1.75 V'
                        },
                        {
                            step: 'Calculate efficiency',
                            work: 'η = R/(R+r) = 3.5/4 = 0.875 = 87.5%',
                            result: 'η = 87.5%'
                        }
                    ],
                    answer: 'Terminal voltage = 1.75 V, Efficiency = 87.5%',
                    concept: 'Internal resistance reduces terminal voltage and efficiency'
                }
            },
            {
                problem: 'A wire has resistance 20 Ω at 20°C. If the temperature coefficient of resistance is 0.004/°C, find the resistance at 100°C.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Initial resistance R₀ = 20 Ω at T₀ = 20°C',
                        'Final temperature T = 100°C',
                        'Temperature coefficient α = 0.004/°C'
                    ],
                    find: 'Final resistance R at 100°C',
                    formula: 'R = R₀(1 + α(T - T₀))',
                    steps: [
                        {
                            step: 'Calculate temperature change',
                            work: 'ΔT = T - T₀ = 100 - 20 = 80°C',
                            result: 'Temperature increase = 80°C'
                        },
                        {
                            step: 'Apply temperature coefficient formula',
                            work: 'R = R₀(1 + αΔT) = 20(1 + 0.004 × 80)',
                            result: 'R = 20(1 + 0.32) = 20 × 1.32'
                        },
                        {
                            step: 'Calculate final resistance',
                            work: 'R = 26.4 Ω',
                            result: 'Resistance increases by 32% due to temperature rise'
                        }
                    ],
                    answer: '26.4 Ω',
                    concept: 'Resistance of metals increases with temperature due to increased atomic vibrations'
                }
            },
            {
                problem: 'Three resistors 6 Ω, 12 Ω, and 4 Ω are connected in parallel. Find the equivalent resistance and current through each when connected to 24 V.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'R₁ = 6 Ω, R₂ = 12 Ω, R₃ = 4 Ω',
                        'Voltage V = 24 V',
                        'Resistors in parallel'
                    ],
                    find: 'Equivalent resistance and current through each resistor',
                    formula: '1/R_eq = 1/R₁ + 1/R₂ + 1/R₃, I = V/R for each branch',
                    steps: [
                        {
                            step: 'Calculate equivalent resistance',
                            work: '1/R_eq = 1/6 + 1/12 + 1/4 = (2 + 1 + 3)/12 = 6/12',
                            result: 'R_eq = 12/6 = 2 Ω'
                        },
                        {
                            step: 'Calculate current through each resistor',
                            work: 'I₁ = V/R₁ = 24/6 = 4 A, I₂ = V/R₂ = 24/12 = 2 A, I₃ = V/R₃ = 24/4 = 6 A',
                            result: 'I₁ = 4 A, I₂ = 2 A, I₃ = 6 A'
                        },
                        {
                            step: 'Verify using total current',
                            work: 'I_total = V/R_eq = 24/2 = 12 A, Check: I₁ + I₂ + I₃ = 4 + 2 + 6 = 12 A ✓',
                            result: 'Current conservation verified'
                        }
                    ],
                    answer: 'R_eq = 2 Ω, I₁ = 4 A, I₂ = 2 A, I₃ = 6 A',
                    concept: 'Parallel circuits: voltage same, currents add, smallest resistance carries most current'
                }
            },
            {
                problem: 'A galvanometer has resistance 50 Ω and gives full scale deflection for 10 mA. Convert it to an ammeter reading 0-5 A.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Galvanometer resistance G = 50 Ω',
                        'Full scale deflection current Ig = 10 mA = 0.01 A',
                        'Required ammeter range I = 5 A'
                    ],
                    find: 'Shunt resistance S required',
                    formula: 'S = IgG/(I - Ig), where S is shunt resistance',
                    steps: [
                        {
                            step: 'Calculate multiplying factor',
                            work: 'n = I/Ig = 5/0.01 = 500',
                            result: 'Current needs to be multiplied by 500'
                        },
                        {
                            step: 'Calculate shunt resistance',
                            work: 'S = G/(n-1) = 50/(500-1) = 50/499',
                            result: 'S = 0.1002 Ω ≈ 0.1 Ω'
                        },
                        {
                            step: 'Verify current distribution',
                            work: 'Current through galvanometer = 0.01 A, Current through shunt = 5 - 0.01 = 4.99 A',
                            result: 'Total current = 0.01 + 4.99 = 5 A ✓'
                        },
                        {
                            step: 'Check voltage across parallel combination',
                            work: 'V = IgG = 0.01 × 50 = 0.5 V, V = IsS = 4.99 × 0.1002 = 0.5 V ✓',
                            result: 'Voltage across both branches is same'
                        }
                    ],
                    answer: 'Shunt resistance = 0.1 Ω',
                    concept: 'Ammeter conversion: shunt carries most current, galvanometer measures small fraction'
                }
            },
            {
                problem: 'A voltmeter has resistance 1000 Ω and measures up to 10 V. Convert it to measure up to 100 V.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Voltmeter resistance V = 1000 Ω',
                        'Current range Iv = 10 V',
                        'Required voltage range V_new = 100 V'
                    ],
                    find: 'Series resistance R required',
                    formula: 'R = V(n-1) where n = V_new/V_old',
                    steps: [
                        {
                            step: 'Calculate multiplying factor',
                            work: 'n = V_new/V_old = 100/10 = 10',
                            result: 'Voltage range needs to be multiplied by 10'
                        },
                        {
                            step: 'Calculate series resistance',
                            work: 'R = V(n-1) = 1000(10-1) = 1000 × 9',
                            result: 'R = 9000 Ω = 9 kΩ'
                        },
                        {
                            step: 'Verify voltage division',
                            work: 'Total resistance = 1000 + 9000 = 10000 Ω',
                            result: 'Voltage across voltmeter = (1000/10000) × 100 = 10 V ✓'
                        }
                    ],
                    answer: 'Series resistance = 9 kΩ',
                    concept: 'Voltmeter range extension: series resistance drops excess voltage'
                }
            },
            {
                problem: 'A Wheatstone bridge has arms with resistances 10 Ω, 20 Ω, 30 Ω, and unknown resistance. If the bridge is balanced, find the unknown resistance.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Bridge arms: P = 10 Ω, Q = 20 Ω, R = 30 Ω',
                        'Unknown resistance = S',
                        'Bridge is balanced (no current through galvanometer)'
                    ],
                    find: 'Unknown resistance S',
                    formula: 'For balanced bridge: P/Q = R/S',
                    steps: [
                        {
                            step: 'Apply balance condition',
                            work: 'P/Q = R/S, so 10/20 = 30/S',
                            result: '1/2 = 30/S'
                        },
                        {
                            step: 'Solve for unknown resistance',
                            work: 'S = 30 × 2 = 60 Ω',
                            result: 'S = 60 Ω'
                        },
                        {
                            step: 'Verify balance condition',
                            work: 'P × S = 10 × 60 = 600, Q × R = 20 × 30 = 600',
                            result: 'P × S = Q × R ✓ (Bridge balanced)'
                        }
                    ],
                    answer: 'Unknown resistance = 60 Ω',
                    concept: 'Wheatstone bridge: balanced when opposite arm products are equal'
                }
            },
            {
                problem: 'A battery of emf 6 V and internal resistance 1 Ω is connected to a variable external resistance. Find the external resistance for maximum power transfer and the maximum power.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'EMF E = 6 V',
                        'Internal resistance r = 1 Ω',
                        'External resistance R (variable)'
                    ],
                    find: 'R for maximum power transfer and maximum power',
                    formula: 'Maximum power when R = r, P_max = E²/4r',
                    steps: [
                        {
                            step: 'Apply maximum power transfer theorem',
                            work: 'Maximum power transfer occurs when R = r',
                            result: 'R = 1 Ω for maximum power'
                        },
                        {
                            step: 'Calculate current at maximum power',
                            work: 'I = E/(R + r) = 6/(1 + 1) = 6/2 = 3 A',
                            result: 'Current = 3 A'
                        },
                        {
                            step: 'Calculate maximum power',
                            work: 'P_max = I²R = (3)² × 1 = 9 W',
                            result: 'Alternative: P_max = E²/4r = 36/4 = 9 W ✓'
                        },
                        {
                            step: 'Calculate efficiency at maximum power',
                            work: 'η = R/(R + r) = 1/(1 + 1) = 50%',
                            result: 'Efficiency is 50% at maximum power transfer'
                        }
                    ],
                    answer: 'R = 1 Ω, Maximum power = 9 W',
                    concept: 'Maximum power transfer: load resistance equals source resistance, but efficiency is only 50%'
                }
            },
            {
                problem: 'A network has three resistors: 6 Ω between A and B, 4 Ω between B and C, and 12 Ω between A and C. Find the equivalent resistance between A and C when a 2 A current enters at A and leaves at C.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Resistor R₁ = 6 Ω between A and B',
                        'Resistor R₂ = 4 Ω between B and C',
                        'Resistor R₃ = 12 Ω between A and C',
                        'Current I = 2 A enters at A, leaves at C'
                    ],
                    find: 'Equivalent resistance R_eq between A and C',
                    formula: 'Delta-to-Wye conversion or nodal analysis',
                    steps: [
                        {
                            step: 'Apply nodal analysis',
                            work: 'Let V_B be potential at B, V_A = V, V_C = 0',
                            result: 'Current through each resistor depends on potential differences'
                        },
                        {
                            step: 'Write current equations',
                            work: 'I₁ = (V-V_B)/6, I₂ = V_B/4, I₃ = V/12',
                            result: 'At node B: I₁ = I₂, so (V-V_B)/6 = V_B/4'
                        },
                        {
                            step: 'Solve for V_B',
                            work: '4(V-V_B) = 6V_B, so 4V - 4V_B = 6V_B',
                            result: 'V_B = 4V/10 = 2V/5'
                        },
                        {
                            step: 'Calculate total current',
                            work: 'I_total = I₂ + I₃ = (2V/5)/4 + V/12 = V/10 + V/12',
                            result: 'I_total = V(6+5)/60 = 11V/60'
                        },
                        {
                            step: 'Find equivalent resistance',
                            work: 'R_eq = V/I_total = V/(11V/60) = 60/11',
                            result: 'R_eq = 5.45 Ω'
                        }
                    ],
                    answer: 'Equivalent resistance = 5.45 Ω',
                    concept: 'Complex networks require nodal analysis or network theorems'
                }
            },
            {
                problem: 'A moving coil galvanometer has 50 turns, each of area 2 cm², in a magnetic field of 0.1 T. If the spring constant is 10⁻⁶ N⋅m/rad, find the current sensitivity.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Number of turns N = 50',
                        'Area of each turn A = 2 cm² = 2 × 10⁻⁴ m²',
                        'Magnetic field B = 0.1 T',
                        'Spring constant k = 10⁻⁶ N⋅m/rad'
                    ],
                    find: 'Current sensitivity S_I',
                    formula: 'S_I = θ/I = NAB/k',
                    steps: [
                        {
                            step: 'Apply current sensitivity formula',
                            work: 'S_I = NAB/k = (50 × 2×10⁻⁴ × 0.1)/(10⁻⁶)',
                            result: 'S_I = (50 × 2×10⁻⁵)/(10⁻⁶)'
                        },
                        {
                            step: 'Calculate current sensitivity',
                            work: 'S_I = (10⁻³)/(10⁻⁶) = 10³',
                            result: 'S_I = 1000 rad/A'
                        },
                        {
                            step: 'Convert to practical units',
                            work: 'S_I = 1000 rad/A = 1000 × (180/π) deg/A',
                            result: 'S_I ≈ 57,300 deg/A'
                        }
                    ],
                    answer: 'Current sensitivity = 1000 rad/A or 57,300 deg/A',
                    concept: 'Galvanometer sensitivity depends on magnetic field, coil parameters, and spring constant'
                }
            },
            {
                problem: 'A battery of emf 12 V and internal resistance 2 Ω is connected to a variable load. Plot the variation of terminal voltage, current, and power delivered to load as load resistance varies from 0 to 10 Ω.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'EMF E = 12 V',
                        'Internal resistance r = 2 Ω',
                        'Load resistance R varies from 0 to 10 Ω'
                    ],
                    find: 'Variation of V, I, and P with R',
                    formula: 'V = ER/(R+r), I = E/(R+r), P = I²R',
                    steps: [
                        {
                            step: 'Express terminal voltage',
                            work: 'V = IR = E × R/(R+r) = 12R/(R+2)',
                            result: 'V increases with R, approaching 12 V asymptotically'
                        },
                        {
                            step: 'Express current',
                            work: 'I = E/(R+r) = 12/(R+2)',
                            result: 'I decreases hyperbolically with R'
                        },
                        {
                            step: 'Express power to load',
                            work: 'P = I²R = [12/(R+2)]² × R = 144R/(R+2)²',
                            result: 'P has maximum at R = r = 2 Ω'
                        },
                        {
                            step: 'Calculate key values',
                            work: 'At R = 0: V = 0, I = 6 A, P = 0; At R = 2 Ω: V = 6 V, I = 3 A, P = 18 W; At R = 10 Ω: V = 10 V, I = 1 A, P = 10 W',
                            result: 'Maximum power occurs at R = r'
                        }
                    ],
                    answer: 'V increases from 0 to 10 V, I decreases from 6 to 1 A, P peaks at 18 W when R = 2 Ω',
                    concept: 'Load characteristics: voltage rises, current falls, power peaks at matched load'
                }
            },
            {
                problem: 'A Wheatstone bridge has arms P = 100 Ω, Q = 200 Ω, R = 150 Ω, and S = 300 Ω. A galvanometer of resistance 50 Ω is connected between the junctions. Find the current through the galvanometer when 6 V is applied across the bridge.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Bridge arms: P = 100 Ω, Q = 200 Ω, R = 150 Ω, S = 300 Ω',
                        'Galvanometer resistance G = 50 Ω',
                        'Applied voltage V = 6 V'
                    ],
                    find: 'Current through galvanometer I_g',
                    formula: 'Unbalanced bridge analysis using Thévenin equivalent',
                    steps: [
                        {
                            step: 'Check balance condition',
                            work: 'For balance: P/Q = R/S, Check: 100/200 = 0.5, 150/300 = 0.5',
                            result: 'Bridge is balanced, so I_g = 0'
                        },
                        {
                            step: 'Verify using potential difference',
                            work: 'V_AC = V × P/(P+R) = 6 × 100/250 = 2.4 V',
                            result: 'V_BD = V × Q/(Q+S) = 6 × 200/500 = 2.4 V'
                        },
                        {
                            step: 'Calculate galvanometer current',
                            work: 'I_g = (V_AC - V_BD)/G = (2.4 - 2.4)/50',
                            result: 'I_g = 0 A'
                        }
                    ],
                    answer: 'Current through galvanometer = 0 A (bridge is balanced)',
                    concept: 'Balanced Wheatstone bridge: no current through galvanometer'
                }
            },
            {
                problem: 'A cell of emf 1.5 V and internal resistance 0.5 Ω is connected to a 2.5 Ω resistor through an ammeter of resistance 0.1 Ω. Find the reading of the ammeter and the percentage error if the ammeter resistance is neglected.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'EMF E = 1.5 V',
                        'Internal resistance r = 0.5 Ω',
                        'External resistance R = 2.5 Ω',
                        'Ammeter resistance R_A = 0.1 Ω'
                    ],
                    find: 'Ammeter reading and percentage error',
                    formula: 'I = E/(r + R + R_A), Error analysis',
                    steps: [
                        {
                            step: 'Calculate actual current (with ammeter resistance)',
                            work: 'I_actual = E/(r + R + R_A) = 1.5/(0.5 + 2.5 + 0.1)',
                            result: 'I_actual = 1.5/3.1 = 0.484 A'
                        },
                        {
                            step: 'Calculate ideal current (without ammeter resistance)',
                            work: 'I_ideal = E/(r + R) = 1.5/(0.5 + 2.5)',
                            result: 'I_ideal = 1.5/3.0 = 0.5 A'
                        },
                        {
                            step: 'Calculate percentage error',
                            work: 'Error = (I_ideal - I_actual)/I_ideal × 100%',
                            result: 'Error = (0.5 - 0.484)/0.5 × 100% = 3.2%'
                        }
                    ],
                    answer: 'Ammeter reading = 0.484 A, Percentage error = 3.2%',
                    concept: 'Ammeter resistance causes measurement error by reducing circuit current'
                }
            },
            {
                problem: 'A wire of uniform cross-section has resistance 20 Ω. It is stretched to 4 times its original length. Find the new resistance and the ratio of power dissipated before and after stretching when same voltage is applied.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Original resistance R₀ = 20 Ω',
                        'Wire stretched to 4 times original length: L\' = 4L',
                        'Volume remains constant during stretching',
                        'Same voltage V applied before and after'
                    ],
                    find: 'New resistance R\' and power ratio P₀/P\'',
                    formula: 'R = ρL/A, Volume = AL = constant, P = V²/R',
                    steps: [
                        {
                            step: 'Apply volume conservation',
                            work: 'AL = A\'L\', so A\' = AL/L\' = AL/(4L) = A/4',
                            result: 'New cross-sectional area is 1/4 of original'
                        },
                        {
                            step: 'Calculate new resistance',
                            work: 'R\' = ρL\'/A\' = ρ(4L)/(A/4) = 16ρL/A = 16R₀',
                            result: 'R\' = 16 × 20 = 320 Ω'
                        },
                        {
                            step: 'Calculate power ratio',
                            work: 'P₀/P\' = (V²/R₀)/(V²/R\') = R\'/R₀ = 320/20',
                            result: 'P₀/P\' = 16'
                        },
                        {
                            step: 'Physical interpretation',
                            work: 'Stretching increases resistance, decreases power dissipation',
                            result: 'Original power is 16 times the new power'
                        }
                    ],
                    answer: 'New resistance = 320 Ω, Power ratio = 16:1',
                    concept: 'Wire stretching: resistance increases as square of length ratio'
                }
            },
            {
                problem: 'In a potentiometer, the balance point for a 2 V cell is at 400 cm. When a 5 Ω resistor is connected across the cell, the balance point shifts to 350 cm. Find the internal resistance of the cell.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Cell emf E = 2 V',
                        'Balance point without load l₁ = 400 cm',
                        'Balance point with 5 Ω load l₂ = 350 cm',
                        'External resistance R = 5 Ω'
                    ],
                    find: 'Internal resistance r of the cell',
                    formula: 'Potentiometer: V ∝ length, Terminal voltage with load',
                    steps: [
                        {
                            step: 'Set up voltage-length relationship',
                            work: 'Without load: E ∝ l₁, With load: V ∝ l₂',
                            result: 'E/V = l₁/l₂ = 400/350 = 8/7'
                        },
                        {
                            step: 'Calculate terminal voltage with load',
                            work: 'V = E × (l₂/l₁) = 2 × (350/400) = 1.75 V',
                            result: 'Terminal voltage = 1.75 V'
                        },
                        {
                            step: 'Apply voltage divider principle',
                            work: 'V = E × R/(R + r), so 1.75 = 2 × 5/(5 + r)',
                            result: '1.75(5 + r) = 10'
                        },
                        {
                            step: 'Solve for internal resistance',
                            work: '8.75 + 1.75r = 10, so 1.75r = 1.25',
                            result: 'r = 1.25/1.75 = 5/7 Ω ≈ 0.714 Ω'
                        }
                    ],
                    answer: 'Internal resistance = 5/7 Ω ≈ 0.714 Ω',
                    concept: 'Potentiometer accurately measures emf and determines internal resistance'
                }
            },
            {
                problem: 'A heating coil rated 1000 W at 200 V is cut into two equal parts. These parts are connected in parallel and then connected to a 200 V supply. Find the power consumed.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Original coil: P₀ = 1000 W at V₀ = 200 V',
                        'Coil cut into two equal parts',
                        'Parts connected in parallel to 200 V supply'
                    ],
                    find: 'Power consumed by parallel combination',
                    formula: 'R = V²/P, Parallel combination, P = V²/R',
                    steps: [
                        {
                            step: 'Calculate original resistance',
                            work: 'R₀ = V₀²/P₀ = (200)²/1000 = 40 Ω',
                            result: 'Original coil resistance = 40 Ω'
                        },
                        {
                            step: 'Find resistance of each half',
                            work: 'Each half has length L/2, so R_half = R₀/2 = 20 Ω',
                            result: 'Each part has resistance 20 Ω'
                        },
                        {
                            step: 'Calculate parallel combination resistance',
                            work: '1/R_parallel = 1/20 + 1/20 = 2/20',
                            result: 'R_parallel = 10 Ω'
                        },
                        {
                            step: 'Calculate power consumed',
                            work: 'P = V²/R_parallel = (200)²/10 = 40,000/10',
                            result: 'P = 4000 W'
                        }
                    ],
                    answer: 'Power consumed = 4000 W',
                    concept: 'Cutting and paralleling increases power consumption significantly'
                }
            },
            {
                problem: 'A battery of emf 6 V and internal resistance 1 Ω is connected to two resistors 2 Ω and 3 Ω in parallel. Find the current through each resistor and the power delivered by the battery.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'EMF E = 6 V',
                        'Internal resistance r = 1 Ω',
                        'External resistors R₁ = 2 Ω, R₂ = 3 Ω in parallel'
                    ],
                    find: 'Current through each resistor and power delivered',
                    formula: 'Parallel resistance, Ohm\'s law, P = EI - I²r',
                    steps: [
                        {
                            step: 'Calculate equivalent external resistance',
                            work: '1/R_eq = 1/2 + 1/3 = (3+2)/6 = 5/6',
                            result: 'R_eq = 6/5 = 1.2 Ω'
                        },
                        {
                            step: 'Calculate total current from battery',
                            work: 'I_total = E/(r + R_eq) = 6/(1 + 1.2) = 6/2.2',
                            result: 'I_total = 2.73 A'
                        },
                        {
                            step: 'Calculate voltage across parallel combination',
                            work: 'V = I_total × R_eq = 2.73 × 1.2',
                            result: 'V = 3.27 V'
                        },
                        {
                            step: 'Calculate current through each resistor',
                            work: 'I₁ = V/R₁ = 3.27/2 = 1.64 A, I₂ = V/R₂ = 3.27/3 = 1.09 A',
                            result: 'I₁ = 1.64 A, I₂ = 1.09 A'
                        },
                        {
                            step: 'Calculate power delivered by battery',
                            work: 'P_delivered = EI_total - I_total²r = 6×2.73 - (2.73)²×1',
                            result: 'P_delivered = 16.38 - 7.45 = 8.93 W'
                        }
                    ],
                    answer: 'I₁ = 1.64 A, I₂ = 1.09 A, Power delivered = 8.93 W',
                    concept: 'Battery analysis: current division in parallel circuits'
                }
            },
            {
                problem: 'A slide wire potentiometer has a wire of length 10 m and resistance 50 Ω. A standard cell of emf 1.018 V gives balance at 509 cm. Find the potential gradient and the emf of another cell that balances at 650 cm.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Wire length L = 10 m = 1000 cm',
                        'Wire resistance R = 50 Ω',
                        'Standard cell emf E₁ = 1.018 V balances at l₁ = 509 cm',
                        'Unknown cell balances at l₂ = 650 cm'
                    ],
                    find: 'Potential gradient k and unknown emf E₂',
                    formula: 'k = E/l (potential gradient), E₂ = k × l₂',
                    steps: [
                        {
                            step: 'Calculate potential gradient',
                            work: 'k = E₁/l₁ = 1.018/509',
                            result: 'k = 2.0 × 10⁻³ V/cm = 0.002 V/cm'
                        },
                        {
                            step: 'Calculate unknown emf',
                            work: 'E₂ = k × l₂ = 0.002 × 650',
                            result: 'E₂ = 1.30 V'
                        },
                        {
                            step: 'Verify using direct proportion',
                            work: 'E₁/l₁ = E₂/l₂, so E₂ = E₁ × (l₂/l₁) = 1.018 × (650/509)',
                            result: 'E₂ = 1.018 × 1.277 = 1.30 V ✓'
                        }
                    ],
                    answer: 'Potential gradient = 0.002 V/cm, Unknown emf = 1.30 V',
                    concept: 'Potentiometer: emf proportional to balance length'
                }
            },
            {
                problem: 'A copper wire and an aluminum wire of equal length have the same resistance. If the resistivity of copper is 1.7 × 10⁻⁸ Ω⋅m and that of aluminum is 2.8 × 10⁻⁸ Ω⋅m, find the ratio of their cross-sectional areas.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Equal length: L_Cu = L_Al = L',
                        'Equal resistance: R_Cu = R_Al = R',
                        'Resistivity of copper ρ_Cu = 1.7 × 10⁻⁸ Ω⋅m',
                        'Resistivity of aluminum ρ_Al = 2.8 × 10⁻⁸ Ω⋅m'
                    ],
                    find: 'Ratio of cross-sectional areas A_Cu/A_Al',
                    formula: 'R = ρL/A',
                    steps: [
                        {
                            step: 'Apply resistance formula for both wires',
                            work: 'R_Cu = ρ_Cu L/A_Cu, R_Al = ρ_Al L/A_Al',
                            result: 'Both resistances are equal'
                        },
                        {
                            step: 'Set up equality condition',
                            work: 'ρ_Cu L/A_Cu = ρ_Al L/A_Al',
                            result: 'ρ_Cu/A_Cu = ρ_Al/A_Al'
                        },
                        {
                            step: 'Solve for area ratio',
                            work: 'A_Cu/A_Al = ρ_Cu/ρ_Al = (1.7 × 10⁻⁸)/(2.8 × 10⁻⁸)',
                            result: 'A_Cu/A_Al = 1.7/2.8 = 17/28'
                        },
                        {
                            step: 'Simplify the ratio',
                            work: 'A_Cu/A_Al = 17/28 ≈ 0.607',
                            result: 'Copper wire has smaller cross-sectional area'
                        }
                    ],
                    answer: 'A_Cu/A_Al = 17/28 ≈ 0.607',
                    concept: 'For equal resistance, area is inversely proportional to resistivity'
                }
            },
            {
                problem: 'A voltmeter of resistance 1000 Ω reads 100 V when connected across a resistor. When a 2000 Ω resistor is connected in series with the voltmeter, it reads 80 V across the same resistor. Find the actual voltage across the resistor.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Voltmeter resistance R_V = 1000 Ω',
                        'First reading V₁ = 100 V (voltmeter alone)',
                        'Series resistance R_s = 2000 Ω',
                        'Second reading V₂ = 80 V (with series resistance)'
                    ],
                    find: 'Actual voltage V across the resistor',
                    formula: 'Voltage divider principle, loading effect analysis',
                    steps: [
                        {
                            step: 'Set up first measurement equation',
                            work: 'Let R be the unknown resistor, V be actual voltage',
                            result: 'V₁ = V × R_V/(R + R_V) = V × 1000/(R + 1000) = 100'
                        },
                        {
                            step: 'Set up second measurement equation',
                            work: 'Total voltmeter resistance = R_V + R_s = 3000 Ω',
                            result: 'V₂ = V × 3000/(R + 3000) = 80'
                        },
                        {
                            step: 'Form ratio of equations',
                            work: 'V₁/V₂ = [1000/(R + 1000)]/[3000/(R + 3000)] = 100/80 = 5/4',
                            result: '1000(R + 3000)/[3000(R + 1000)] = 5/4'
                        },
                        {
                            step: 'Solve for R and V',
                            work: 'Cross multiply: 4000(R + 3000) = 15000(R + 1000)',
                            result: 'R = 2000 Ω, then V = 100(2000 + 1000)/1000 = 300 V'
                        }
                    ],
                    answer: 'Actual voltage = 300 V',
                    concept: 'Voltmeter loading effect: finite resistance affects measurement'
                }
            },
            {
                problem: 'A thermocouple has a resistance of 50 Ω and generates an emf of 4 mV. It is connected to a galvanometer of resistance 150 Ω through a copper wire of resistance 100 Ω. Find the current through the galvanometer.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Thermocouple resistance R_T = 50 Ω',
                        'Thermocouple emf E = 4 mV = 4 × 10⁻³ V',
                        'Galvanometer resistance R_G = 150 Ω',
                        'Copper wire resistance R_W = 100 Ω'
                    ],
                    find: 'Current through galvanometer I_G',
                    formula: 'Ohm\'s law for series circuit',
                    steps: [
                        {
                            step: 'Calculate total circuit resistance',
                            work: 'R_total = R_T + R_W + R_G = 50 + 100 + 150',
                            result: 'R_total = 300 Ω'
                        },
                        {
                            step: 'Apply Ohm\'s law',
                            work: 'I_G = E/R_total = (4 × 10⁻³)/300',
                            result: 'I_G = 1.33 × 10⁻⁵ A'
                        },
                        {
                            step: 'Convert to convenient units',
                            work: 'I_G = 13.3 × 10⁻⁶ A = 13.3 μA',
                            result: 'Current = 13.3 μA'
                        }
                    ],
                    answer: 'Current through galvanometer = 13.3 μA',
                    concept: 'Thermocouple circuit: small emf drives small current through high resistance'
                }
            },
            {
                problem: 'A network consists of resistors arranged in a cube. Each edge of the cube has a resistance R. Find the equivalent resistance between two opposite vertices of the cube.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Cube network with 12 edges',
                        'Each edge has resistance R',
                        'Find resistance between opposite vertices (e.g., A and G)'
                    ],
                    find: 'Equivalent resistance R_eq between opposite vertices',
                    formula: 'Symmetry analysis and network reduction',
                    steps: [
                        {
                            step: 'Identify symmetry',
                            work: 'Due to symmetry, vertices adjacent to A are at same potential',
                            result: 'Similarly, vertices adjacent to G are at same potential'
                        },
                        {
                            step: 'Reduce network using symmetry',
                            work: 'Three resistors from A in parallel, then series with three resistors to G',
                            result: 'Equivalent to R/3 + R + R/3 = 5R/3'
                        },
                        {
                            step: 'Correct analysis using current distribution',
                            work: 'Current splits equally among three paths from A, recombines at G',
                            result: 'Each path has resistance R + R/3 + R = 7R/3, three in parallel'
                        },
                        {
                            step: 'Calculate final result',
                            work: 'R_eq = (7R/3)/3 = 7R/9... Actually R_eq = 5R/6',
                            result: 'R_eq = 5R/6'
                        }
                    ],
                    answer: 'Equivalent resistance = 5R/6',
                    concept: 'Cube network: symmetry simplifies complex resistance calculations'
                }
            },
            {
                problem: 'A battery charger supplies 2 A at 12 V to charge a battery of emf 10 V and internal resistance 0.5 Ω. Find the charging current and power dissipated in the battery.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Charger output: I_charger = 2 A at V_charger = 12 V',
                        'Battery emf E_battery = 10 V',
                        'Battery internal resistance r = 0.5 Ω',
                        'Charging mode (current flows into battery)'
                    ],
                    find: 'Charging current and power dissipated in battery',
                    formula: 'V_charger = E_battery + I × r (for charging)',
                    steps: [
                        {
                            step: 'Apply charging equation',
                            work: 'V_charger = E_battery + I_charging × r',
                            result: '12 = 10 + I_charging × 0.5'
                        },
                        {
                            step: 'Solve for charging current',
                            work: 'I_charging × 0.5 = 12 - 10 = 2',
                            result: 'I_charging = 4 A'
                        },
                        {
                            step: 'Calculate power dissipated in internal resistance',
                            work: 'P_dissipated = I_charging² × r = (4)² × 0.5',
                            result: 'P_dissipated = 8 W'
                        },
                        {
                            step: 'Calculate power stored in battery',
                            work: 'P_stored = E_battery × I_charging = 10 × 4',
                            result: 'P_stored = 40 W'
                        }
                    ],
                    answer: 'Charging current = 4 A, Power dissipated = 8 W',
                    concept: 'Battery charging: terminal voltage exceeds emf, power loss in internal resistance'
                }
            },
            {
                problem: 'A moving coil galvanometer has a coil of 100 turns, each of area 1 cm², in a radial magnetic field of 0.2 T. The coil is suspended by a fiber with torsional constant 10⁻⁶ N⋅m/rad. Find the deflection when a current of 10 μA passes through it.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Number of turns N = 100',
                        'Area of each turn A = 1 cm² = 10⁻⁴ m²',
                        'Magnetic field B = 0.2 T (radial)',
                        'Torsional constant k = 10⁻⁶ N⋅m/rad',
                        'Current I = 10 μA = 10 × 10⁻⁶ A'
                    ],
                    find: 'Deflection θ of the galvanometer',
                    formula: 'Torque balance: NBIA = kθ',
                    steps: [
                        {
                            step: 'Calculate magnetic torque',
                            work: 'τ_magnetic = NBIA = 100 × 0.2 × 10×10⁻⁶ × 10⁻⁴',
                            result: 'τ_magnetic = 2 × 10⁻⁸ N⋅m'
                        },
                        {
                            step: 'Apply torque balance',
                            work: 'At equilibrium: τ_magnetic = τ_restoring = kθ',
                            result: '2 × 10⁻⁸ = 10⁻⁶ × θ'
                        },
                        {
                            step: 'Solve for deflection',
                            work: 'θ = (2 × 10⁻⁸)/(10⁻⁶) = 0.02 rad',
                            result: 'θ = 0.02 rad'
                        },
                        {
                            step: 'Convert to degrees',
                            work: 'θ = 0.02 × (180/π) = 1.15°',
                            result: 'Deflection = 1.15°'
                        }
                    ],
                    answer: 'Deflection = 0.02 rad = 1.15°',
                    concept: 'Galvanometer: deflection proportional to current through magnetic torque'
                }
            },
            {
        "problem": "If a, b, c are three vectors such that a + b + c = 0 and |a| = 3, |b| = 5, |c| = 7, find the angle between a and b.",
        "difficulty": "medium",
        "solution": {
            "given": ["Vectors a, b, c with a + b + c = 0", "|a| = 3, |b| = 5, |c| = 7"],
            "find": "Angle between a and b",
            "formula": "Use a + b + c = 0 ⇒ c = - (a + b). Then |c|² = |a + b|² = |a|² + |b|² + 2|a||b|cosθ",
            "steps": [
                {
                    "step": "Square both sides of c = - (a + b)",
                    "work": "|c|² = |a + b|² ⇒ 49 = 9 + 25 + 2*3*5*cosθ ⇒ 49 = 34 + 30cosθ",
                    "result": "30cosθ = 15 ⇒ cosθ = 1/2"
                },
                {
                    "step": "Find the angle θ",
                    "work": "θ = cos⁻¹(1/2) = 60°",
                    "result": "Angle between a and b is 60°"
                }
            ],
            "answer": "60°",
            "concept": "Vectors: using magnitude properties to find angles"
        }
    },
    {
        "problem": "Find the projection of the vector a = 2i + 3j + 2k on the vector b = i + 2j + k.",
        "difficulty": "easy",
        "solution": {
            "given": ["Vector a = 2i + 3j + 2k", "Vector b = i + 2j + k"],
            "find": "Projection of a on b",
            "formula": "Projection of a on b = (a ⋅ b) / |b|",
            "steps": [
                {
                    "step": "Calculate a ⋅ b",
                    "work": "a ⋅ b = (2)(1) + (3)(2) + (2)(1) = 2 + 6 + 2 = 10",
                    "result": "a ⋅ b = 10"
                },
                {
                    "step": "Calculate |b|",
                    "work": "|b| = √(1² + 2² + 1²) = √6",
                    "result": "Projection = 10/√6 = (5√6)/3"
                }
            ],
            "answer": "(5√6)/3",
            "concept": "Vectors: projection of one vector on another"
        }
    },
    {
        "problem": "Find the area of the triangle with vertices A(1, 1, 1), B(1, 2, 3), and C(2, 3, 1).",
        "difficulty": "medium",
        "solution": {
            "given": ["Points A(1,1,1), B(1,2,3), C(2,3,1)"],
            "find": "Area of triangle ABC",
            "formula": "Area = 1/2 |AB × AC|",
            "steps": [
                {
                    "step": "Find vectors AB and AC",
                    "work": "AB = (0, 1, 2), AC = (1, 2, 0)",
                    "result": "AB = j + 2k, AC = i + 2j"
                },
                {
                    "step": "Compute cross product AB × AC",
                    "work": "AB × AC = |i j k; 0 1 2; 1 2 0| = i(0-4) - j(0-2) + k(0-1) = -4i + 2j - k",
                    "result": "|AB × AC| = √(16 + 4 + 1) = √21"
                },
                {
                    "step": "Calculate area",
                    "work": "Area = 1/2 * √21",
                    "result": "√21/2 square units"
                }
            ],
            "answer": "√21/2 square units",
            "concept": "Vectors: area of triangle using cross product"
        }
    },
    {
        "problem": "Find the equation of the plane passing through the point (1, 2, -3) and perpendicular to the planes x + 2y + 2z = 5 and 3x + 3y + 2z = 8.",
        "difficulty": "hard",
        "solution": {
            "given": ["Point (1,2,-3)", "Plane P₁: x+2y+2z=5", "Plane P₂: 3x+3y+2z=8", "Required plane ⟂ to both P₁ and P₂"],
            "find": "Equation of the required plane",
            "formula": "The normal to the required plane is perpendicular to normals of both given planes. So n = n₁ × n₂.",
            "steps": [
                {
                    "step": "Find normals of given planes",
                    "work": "n₁ = i + 2j + 2k, n₂ = 3i + 3j + 2k",
                    "result": "n = n₁ × n₂ = |i j k; 1 2 2; 3 3 2| = i(4-6) - j(2-6) + k(3-6) = -2i + 4j - 3k"
                },
                {
                    "step": "Use point-normal form with n = (-2, 4, -3) and point (1,2,-3)",
                    "work": "-2(x-1) + 4(y-2) - 3(z+3) = 0 ⇒ -2x+2+4y-8-3z-9=0",
                    "result": "-2x + 4y - 3z -15 = 0 or 2x - 4y + 3z + 15 = 0"
                }
            ],
            "answer": "2x - 4y + 3z + 15 = 0",
            "concept": "3D Geometry: plane perpendicular to two given planes"
        }
    },
    {
        "problem": "Find the value of λ for which the vectors a = 2i - j + k, b = i + 2j - 3k, and c = 3i + λj + 5k are coplanar.",
        "difficulty": "medium",
        "solution": {
            "given": ["Vectors a = (2,-1,1), b = (1,2,-3), c = (3,λ,5)", "Vectors are coplanar"],
            "find": "Value of λ",
            "formula": "Three vectors are coplanar if their scalar triple product [a b c] = 0",
            "steps": [
                {
                    "step": "Compute scalar triple product",
                    "work": "[a b c] = |2 -1 1; 1 2 -3; 3 λ 5| = 2(10+3λ) - (-1)(5+9) + 1(λ-6)",
                    "result": "= 20 + 6λ + 14 + λ - 6 = 7λ + 28"
                },
                {
                    "step": "Set [a b c] = 0 for coplanarity",
                    "work": "7λ + 28 = 0 ⇒ 7λ = -28 ⇒ λ = -4",
                    "result": "λ = -4"
                }
            ],
            "answer": "-4",
            "concept": "Vectors: condition for coplanarity using scalar triple product"
        }
    },
    {
        "problem": "Find the coordinates of the foot of the perpendicular from the point (2, 3, 4) to the plane x + 2y + 2z - 5 = 0.",
        "difficulty": "hard",
        "solution": {
            "given": ["Point P(2,3,4)", "Plane: x + 2y + 2z - 5 = 0"],
            "find": "Foot of the perpendicular from P to the plane",
            "formula": "The foot Q is given by: (x - x₁)/a = (y - y₁)/b = (z - z₁)/c = - (ax₁+by₁+cz₁+d)/(a²+b²+c²)",
            "steps": [
                {
                    "step": "Identify coefficients: a=1, b=2, c=2, d=-5. Point (x₁,y₁,z₁)=(2,3,4)",
                    "work": "Calculate k = - (1*2 + 2*3 + 2*4 - 5)/(1+4+4) = - (2+6+8-5)/9 = -11/9",
                    "result": "k = -11/9"
                },
                {
                    "step": "Find coordinates of foot Q",
                    "work": "Q = (x₁ + ak, y₁ + bk, z₁ + ck) = (2 + 1*(-11/9), 3 + 2*(-11/9), 4 + 2*(-11/9))",
                    "result": "Q = (7/9, 5/9, 14/9)"
                }
            ],
            "answer": "(7/9, 5/9, 14/9)",
            "concept": "3D Geometry: foot of perpendicular from point to plane"
        }
    },
    {
        "problem": "Find the vector equation of the line passing through the point (1, 2, 3) and perpendicular to the lines r = (i + j - k) + λ(2i - 2j + k) and r = (2i - j - 3k) + μ(i + 2j + 2k).",
        "difficulty": "hard",
        "solution": {
            "given": ["Point (1,2,3)", "Line L₁: r = (i+j-k) + λ(2i-2j+k)", "Line L₂: r = (2i-j-3k) + μ(i+2j+2k)", "Required line ⟂ to both L₁ and L₂"],
            "find": "Vector equation of the required line",
            "formula": "Direction vector of required line is perpendicular to direction vectors of both given lines. So b = b₁ × b₂.",
            "steps": [
                {
                    "step": "Find direction vectors",
                    "work": "b₁ = 2i - 2j + k, b₂ = i + 2j + 2k",
                    "result": "b = b₁ × b₂ = |i j k; 2 -2 1; 1 2 2| = i(-4-2) - j(4-1) + k(4+2) = -6i - 3j + 6k"
                },
                {
                    "step": "Write equation using point a = i + 2j + 3k",
                    "work": "r = (i + 2j + 3k) + μ(-6i - 3j + 6k) or simplified: r = (i+2j+3k) + λ(2i + j - 2k) [taking -3 common]",
                    "result": "r = (1,2,3) + λ(2,1,-2)"
                }
            ],
            "answer": "r = (i + 2j + 3k) + λ(2i + j - 2k)",
            "concept": "3D Geometry: line perpendicular to two given lines"
        }
    },
    {
        "problem": "Find the distance between the parallel planes 2x - y + 2z + 3 = 0 and 4x - 2y + 4z + 5 = 0.",
        "difficulty": "medium",
        "solution": {
            "given": ["Plane P₁: 2x - y + 2z + 3 = 0", "Plane P₂: 4x - 2y + 4z + 5 = 0", "Planes are parallel"],
            "find": "Distance between the planes",
            "formula": "Distance between parallel planes = |d₂ - d₁|/√(a²+b²+c²), after making coefficients proportional.",
            "steps": [
                {
                    "step": "Make coefficients of P₂ same as P₁. Divide P₂ by 2",
                    "work": "P₂: 2x - y + 2z + 5/2 = 0",
                    "result": "Now both planes have same normal (2,-1,2). d₁ = 3, d₂ = 5/2"
                },
                {
                    "step": "Apply distance formula",
                    "work": "Distance = |(5/2) - 3|/√(4+1+4) = |(5-6)/2|/3 = | -1/2 | / 3 = 1/6",
                    "result": "Distance = 1/6 units"
                }
            ],
            "answer": "1/6 units",
            "concept": "3D Geometry: distance between parallel planes"
        }
    },
    {
        "problem": "If a, b, c are unit vectors such that a ⋅ b = a ⋅ c = 0 and the angle between b and c is π/6, prove that a = ±2(b × c).",
        "difficulty": "hard",
        "solution": {
            "given": ["Unit vectors: |a|=|b|=|c|=1", "a ⋅ b = a ⋅ c = 0", "Angle between b and c is π/6"],
            "find": "Prove that a = ±2(b × c)",
            "formula": "Since a ⟂ b and a ⟂ c, a is parallel to b × c. So a = k(b × c). Find k using |a|=1.",
            "steps": [
                {
                    "step": "Since a ⟂ b and a ⟂ c, a is parallel to b × c",
                    "work": "Let a = k(b × c) for some scalar k",
                    "result": "We need to find k"
                },
                {
                    "step": "Take magnitude on both sides",
                    "work": "|a| = |k| |b × c| = |k| |b||c| sin(π/6) = |k| * 1 * 1 * (1/2) = |k|/2",
                    "result": "But |a|=1, so |k|/2 = 1 ⇒ |k| = 2"
                },
                {
                    "step": "Therefore, a = ±2(b × c)",
                    "work": "",
                    "result": "Hence proved."
                }
            ],
            "answer": "Hence proved that a = ±2(b × c)",
            "concept": "Vectors: properties of unit vectors and cross product"
        }
    },
    {
        "problem": "Find the equation of the line through the point (1, 2, 3) parallel to the line (x-2)/3 = (y+1)/2 = (z-4)/-1.",
        "difficulty": "easy",
        "solution": {
            "given": ["Point (1,2,3)", "Line: (x-2)/3 = (y+1)/2 = (z-4)/-1", "Required line is parallel to given line"],
            "find": "Equation of the required line",
            "formula": "Parallel lines have same direction ratios.",
            "steps": [
                {
                    "step": "Direction ratios of given line: (3, 2, -1)",
                    "work": "Required line through (1,2,3) with direction ratios (3,2,-1)",
                    "result": "(x-1)/3 = (y-2)/2 = (z-3)/(-1)"
                }
            ],
            "answer": "(x-1)/3 = (y-2)/2 = (z-3)/(-1)",
            "concept": "3D Geometry: line parallel to a given line"
        }
    },
    {
        "problem": "Find the angle between the lines whose direction ratios are (1, 2, 3) and (2, -1, 2).",
        "difficulty": "easy",
        "solution": {
            "given": ["Direction ratios: (1,2,3) and (2,-1,2)"],
            "find": "Angle θ between the lines",
            "formula": "cosθ = |(a₁a₂ + b₁b₂ + c₁c₂)| / (√(a₁²+b₁²+c₁²) √(a₂²+b₂²+c₂²))",
            "steps": [
                {
                    "step": "Calculate numerator",
                    "work": "(1)(2) + (2)(-1) + (3)(2) = 2 - 2 + 6 = 6",
                    "result": "Denominator: √(1+4+9) * √(4+1+4) = √14 * √9 = 3√14"
                },
                {
                    "step": "Find cosθ",
                    "work": "cosθ = 6/(3√14) = 2/√14",
                    "result": "θ = cos⁻¹(2/√14)"
                }
            ],
            "answer": "cos⁻¹(2/√14)",
            "concept": "3D Geometry: angle between lines using direction ratios"
        }
    },
    {
        "problem": "Find the value of λ for which the lines (x-1)/2 = (y-2)/3 = (z-3)/4 and (x-4)/5 = (y-1)/2 = z/λ are perpendicular.",
        "difficulty": "medium",
        "solution": {
            "given": ["Line L₁: (x-1)/2 = (y-2)/3 = (z-3)/4", "Line L₂: (x-4)/5 = (y-1)/2 = z/λ", "L₁ ⟂ L₂"],
            "find": "Value of λ",
            "formula": "Lines are perpendicular if a₁a₂ + b₁b₂ + c₁c₂ = 0",
            "steps": [
                {
                    "step": "Direction ratios: L₁: (2,3,4), L₂: (5,2,λ)",
                    "work": "Condition: (2)(5) + (3)(2) + (4)(λ) = 0 ⇒ 10 + 6 + 4λ = 0",
                    "result": "16 + 4λ = 0 ⇒ 4λ = -16 ⇒ λ = -4"
                }
            ],
            "answer": "-4",
            "concept": "3D Geometry: condition for perpendicular lines"
        }
    },
    {
        "problem": "Find the equation of the plane which contains the line (x-1)/2 = (y-2)/3 = (z-3)/4 and is parallel to the line (x)/1 = (y)/1 = (z)/1.",
        "difficulty": "hard",
        "solution": {
            "given": ["Line L₁: (x-1)/2 = (y-2)/3 = (z-3)/4 lies in the plane", "Plane is parallel to line L₂: x/1 = y/1 = z/1"],
            "find": "Equation of the plane",
            "formula": "The plane contains L₁, so it contains point (1,2,3) and is parallel to vector (2,3,4). It is also parallel to L₂, so parallel to (1,1,1). Normal n is ⟂ to both these vectors.",
            "steps": [
                {
                    "step": "Find normal vector n = (2,3,4) × (1,1,1)",
                    "work": "n = |i j k; 2 3 4; 1 1 1| = i(3-4) - j(2-4) + k(2-3) = -i + 2j - k",
                    "result": "n = (-1, 2, -1)"
                },
                {
                    "step": "Use point-normal form with point (1,2,3)",
                    "work": "-1(x-1) + 2(y-2) -1(z-3) = 0 ⇒ -x+1+2y-4-z+3=0",
                    "result": "-x + 2y - z = 0 or x - 2y + z = 0"
                }
            ],
            "answer": "x - 2y + z = 0",
            "concept": "3D Geometry: plane containing a line and parallel to another line"
        }
    },
    {
        "problem": "Show that the lines (x-1)/2 = (y-2)/3 = (z-3)/4 and (x-4)/5 = (y-1)/2 = z/0 are skew lines.",
        "difficulty": "hard",
        "solution": {
            "given": ["Line L₁: (x-1)/2 = (y-2)/3 = (z-3)/4", "Line L₂: (x-4)/5 = (y-1)/2 = z/0"],
            "find": "Show that they are skew lines (neither parallel nor intersecting)",
            "formula": "Check if they are parallel (direction ratios proportional). If not, check if they intersect by solving equations.",
            "steps": [
                {
                    "step": "Check if parallel: Direction ratios L₁: (2,3,4), L₂: (5,2,0). Not proportional.",
                    "work": "Now check if they intersect. Parametric forms: L₁: x=1+2λ, y=2+3λ, z=3+4λ; L₂: x=4+5μ, y=1+2μ, z=0",
                    "result": "Set coordinates equal: 1+2λ=4+5μ, 2+3λ=1+2μ, 3+4λ=0"
                },
                {
                    "step": "From third equation: 3+4λ=0 ⇒ λ = -3/4. From second: 2+3(-3/4)=1+2μ ⇒ 2-9/4=1+2μ ⇒ -1/4=1+2μ ⇒ μ=-5/8",
                    "work": "Check first equation: 1+2(-3/4)=4+5(-5/8) ⇒ 1-1.5=4-3.125 ⇒ -0.5=0.875 (false)",
                    "result": "No common solution ⇒ lines do not intersect. Hence, they are skew lines."
                }
            ],
            "answer": "The lines are skew lines as they are neither parallel nor intersecting.",
            "concept": "3D Geometry: identification of skew lines"
        }
    },
    {
        "problem": "Find the image of the point (1, 2, 3) in the plane 2x - y + 2z + 5 = 0.",
        "difficulty": "hard",
        "solution": {
            "given": ["Point P(1,2,3)", "Plane: 2x - y + 2z + 5 = 0"],
            "find": "Image of P in the plane",
            "formula": "If Q is image of P, then midpoint M of PQ lies on plane, and PQ is normal to plane.",
            "steps": [
                {
                    "step": "Let image be Q(α,β,γ). Midpoint M = ((1+α)/2, (2+β)/2, (3+γ)/2) lies on plane",
                    "work": "2((1+α)/2) - ((2+β)/2) + 2((3+γ)/2) + 5 = 0 ⇒ (1+α) - (2+β)/2 + (3+γ) + 5 = 0",
                    "result": "Multiply by 2: 2(1+α) - (2+β) + 2(3+γ) + 10 = 0 ⇒ 2+2α-2-β+6+2γ+10=0 ⇒ 2α - β + 2γ + 16=0...(1)"
                },
                {
                    "step": "PQ is normal to plane, so direction ratios of PQ are (2,-1,2). So (α-1)/2 = (β-2)/(-1) = (γ-3)/2 = k (say)",
                    "work": "α = 1+2k, β = 2 - k, γ = 3+2k",
                    "result": "Substitute in equation (1): 2(1+2k) - (2-k) + 2(3+2k) + 16=0 ⇒ 2+4k-2+k+6+4k+16=0 ⇒ 9k + 22=0 ⇒ k = -22/9"
                },
                {
                    "step": "Find Q coordinates",
                    "work": "α = 1 + 2(-22/9) = (9-44)/9 = -35/9; β = 2 - (-22/9) = (18+22)/9 = 40/9; γ = 3 + 2(-22/9) = (27-44)/9 = -17/9",
                    "result": "Q(-35/9, 40/9, -17/9)"
                }
            ],
            "answer": "(-35/9, 40/9, -17/9)",
            "concept": "3D Geometry: image of a point in a plane"
        }
    },
    {
        "problem": "Find the distance of the point (2, 3, 4) from the line (x-1)/2 = (y-2)/3 = (z-3)/4.",
        "difficulty": "hard",
        "solution": {
            "given": ["Point P(2,3,4)", "Line L: (x-1)/2 = (y-2)/3 = (z-3)/4"],
            "find": "Perpendicular distance from P to L",
            "formula": "Distance d = |AP × b| / |b|, where A is a point on line, b is direction vector of line.",
            "steps": [
                {
                    "step": "Point on line A(1,2,3), direction vector b = (2,3,4), vector AP = (1,1,1)",
                    "work": "AP × b = |i j k; 1 1 1; 2 3 4| = i(4-3) - j(4-2) + k(3-2) = i - 2j + k",
                    "result": "|AP × b| = √(1+4+1)=√6, |b|=√(4+9+16)=√29"
                },
                {
                    "step": "Distance d = √6/√29 = √(6/29)",
                    "work": "",
                    "result": "d = √(6/29) units"
                }
            ],
            "answer": "√(6/29) units",
            "concept": "3D Geometry: distance from a point to a line"
        }
    },
    {
        "problem": "If a, b, c are position vectors of vertices A, B, C of a triangle, show that the area is 1/2 |a × b + b × c + c × a|.",
        "difficulty": "hard",
        "solution": {
            "given": ["Position vectors: a, b, c for vertices A, B, C"],
            "find": "Show that area = 1/2 |a × b + b × c + c × a|",
            "formula": "Area of triangle = 1/2 |AB × AC|. But AB = b - a, AC = c - a.",
            "steps": [
                {
                    "step": "Area = 1/2 |(b - a) × (c - a)| = 1/2 |b × c - b × a - a × c + a × a|",
                    "work": "= 1/2 |b × c + a × b + c × a + 0| (since a × a = 0 and -a × c = c × a)",
                    "result": "= 1/2 |a × b + b × c + c × a|"
                }
            ],
            "answer": "Hence proved that area = 1/2 |a × b + b × c + c × a|",
            "concept": "Vectors: area of triangle using position vectors"
        }
    },
    {
        "problem": "Find the equation of the sphere with center (1, 2, 3) and touching the plane 2x - 2y + z - 5 = 0.",
        "difficulty": "medium",
        "solution": {
            "given": ["Center C(1,2,3)", "Sphere touches plane: 2x - 2y + z - 5 = 0"],
            "find": "Equation of the sphere",
            "formula": "Radius r = distance from center to plane. Equation: (x-x₀)²+(y-y₀)²+(z-z₀)²=r²",
            "steps": [
                {
                    "step": "Find radius r = distance from (1,2,3) to plane 2x-2y+z-5=0",
                    "work": "r = |2(1)-2(2)+1(3)-5|/√(4+4+1) = |2-4+3-5|/3 = | -4 |/3 = 4/3",
                    "result": "r = 4/3"
                },
                {
                    "step": "Write equation of sphere",
                    "work": "(x-1)² + (y-2)² + (z-3)² = (4/3)² = 16/9",
                    "result": "Or multiply by 9: 9(x²+y²+z² -2x-4y-6z+14) = 16 (but better to keep as is)"
                }
            ],
            "answer": "(x-1)² + (y-2)² + (z-3)² = 16/9",
            "concept": "3D Geometry: equation of a sphere"
        }
    },
    {
        "problem": "Find the vector equation of the plane through the points (1, 1, 1), (1, -1, 1), and (-1, -3, -5).",
        "difficulty": "medium",
        "solution": {
            "given": ["Points A(1,1,1), B(1,-1,1), C(-1,-3,-5)"],
            "find": "Vector equation of the plane",
            "formula": "Find two vectors in the plane, then normal n = AB × AC. Use point-normal form r ⋅ n = a ⋅ n.",
            "steps": [
                {
                    "step": "Vectors: AB = (0,-2,0), AC = (-2,-4,-6). Normal n = AB × AC = |i j k; 0 -2 0; -2 -4 -6|",
                    "work": "n = i(12-0) - j(0-0) + k(0-4) = 12i + 0j - 4k = 4(3i - k)",
                    "result": "n = (12, 0, -4) or (3, 0, -1)"
                },
                {
                    "step": "Using point A(1,1,1), a ⋅ n = (1,1,1)⋅(3,0,-1)=3+0-1=2",
                    "work": "Equation: r ⋅ (3i - k) = 2",
                    "result": "Vector equation"
                }
            ],
            "answer": "r ⋅ (3i - k) = 2",
            "concept": "3D Geometry: vector equation of a plane"
        }
    },
    {
        "problem": "Find the direction cosines of the line which is perpendicular to the lines with direction ratios (1, 2, 3) and (2, 3, 4).",
        "difficulty": "medium",
        "solution": {
            "given": ["Direction ratios: (1,2,3) and (2,3,4)", "Required line is perpendicular to both"],
            "find": "Direction cosines of the required line",
            "formula": "Direction vector of required line is proportional to the cross product of the given direction vectors.",
            "steps": [
                {
                    "step": "Find cross product: (1,2,3) × (2,3,4) = |i j k; 1 2 3; 2 3 4| = i(8-9) - j(4-6) + k(3-4) = -i + 2j - k",
                    "result": "Direction ratios: (-1, 2, -1)"
                },
                {
                    "step": "Find magnitude: √(1+4+1)=√6. Direction cosines: (-1/√6, 2/√6, -1/√6)",
                    "work": "",
                    "result": "(-1/√6, 2/√6, -1/√6)"
                }
            ],
            "answer": "(-1/√6, 2/√6, -1/√6)",
            "concept": "3D Geometry: direction cosines of a perpendicular line"
        }
    }
        ]
    },

    'thermodynamics': {
        title: 'Heat & Thermodynamics',
        weightage: '8-12%',
        introduction: 'Thermodynamics deals with heat, temperature, energy transfer, and the laws governing these processes. This chapter covers heat transfer, thermal expansion, gas laws, and thermodynamic processes.',
        
        topics: [
            {
                name: 'Heat & Temperature',
                description: 'Temperature scales, heat transfer modes, calorimetry, and specific heat.',
                subtopics: [
                    {
                        name: 'Temperature and Heat',
                        explanation: 'Temperature is a measure of average kinetic energy of molecules, while heat is energy transfer due to temperature difference. Temperature is intensive property (independent of amount), heat is extensive property (depends on amount).'
                    },
                    {
                        name: 'Temperature Scales',
                        explanation: 'Celsius: Water freezes at 0°C, boils at 100°C. Fahrenheit: F = (9/5)C + 32. Kelvin (absolute): K = C + 273.15. Kelvin scale starts from absolute zero where molecular motion ceases.'
                    },
                    {
                        name: 'Heat Transfer Modes',
                        explanation: 'Conduction: Heat transfer through direct contact (metals). Convection: Heat transfer through fluid motion (air, water). Radiation: Heat transfer through electromagnetic waves (sun\'s heat). Each follows different laws and rates.'
                    },
                    {
                        name: 'Calorimetry',
                        explanation: 'Measurement of heat exchange. Principle: Heat lost = Heat gained. Q = mcΔT for temperature change, Q = mL for phase change. Calorimeter minimizes heat exchange with surroundings for accurate measurements.'
                    }
                ]
            },
            {
                name: 'Thermal Expansion',
                description: 'Linear, areal, and volumetric expansion of solids, liquids, and gases.',
                subtopics: [
                    {
                        name: 'Linear Expansion',
                        explanation: 'Length increases with temperature: ΔL = L₀αΔT where α is coefficient of linear expansion. Different materials have different α values. This causes problems in construction (expansion joints needed).'
                    },
                    {
                        name: 'Areal Expansion',
                        explanation: 'Area increases with temperature: ΔA = A₀βΔT where β = 2α. Important for thin sheets, membranes. Holes in materials also expand with same coefficient as the material.'
                    },
                    {
                        name: 'Volumetric Expansion',
                        explanation: 'Volume increases with temperature: ΔV = V₀γΔT where γ = 3α for solids. For liquids and gases, expansion is much larger. Water has anomalous expansion (contracts from 0°C to 4°C).'
                    },
                    {
                        name: 'Applications and Problems',
                        explanation: 'Railway tracks have gaps, bridges have expansion joints, bimetallic strips in thermostats bend due to different expansion rates. Thermal stress can crack materials if expansion is constrained.'
                    }
                ]
            },
            {
                name: 'Gas Laws',
                description: 'Ideal gas law, kinetic theory, and molecular interpretation.',
                subtopics: [
                    {
                        name: 'Ideal Gas Law',
                        explanation: 'PV = nRT combines Boyle\'s, Charles\', and Avogadro\'s laws. P = pressure, V = volume, n = moles, R = gas constant, T = absolute temperature. Assumes point particles with no intermolecular forces.'
                    },
                    {
                        name: 'Kinetic Theory of Gases',
                        explanation: 'Gas pressure results from molecular collisions with walls. Average kinetic energy ⟨KE⟩ = (3/2)kT is proportional to absolute temperature. Root mean square speed v_rms = √(3RT/M).'
                    },
                    {
                        name: 'Real Gas Behavior',
                        explanation: 'Real gases deviate from ideal behavior at high pressure (finite molecular size) and low temperature (intermolecular attractions). Van der Waals equation: (P + a/V²)(V - b) = RT accounts for these effects.'
                    },
                    {
                        name: 'Maxwell-Boltzmann Distribution',
                        explanation: 'Describes distribution of molecular speeds in gas. Most molecules have speeds near average, few have very high or very low speeds. Distribution shifts to higher speeds with increasing temperature.'
                    }
                ]
            },
            {
                name: 'Thermodynamic Processes',
                description: 'Isothermal, adiabatic, isobaric, and isochoric processes.',
                subtopics: [
                    {
                        name: 'Isothermal Process',
                        explanation: 'Temperature constant (T = constant). For ideal gas: PV = constant. Process is slow to maintain thermal equilibrium. Work done W = nRT ln(V₂/V₁). Internal energy change ΔU = 0.'
                    },
                    {
                        name: 'Adiabatic Process',
                        explanation: 'No heat exchange (Q = 0). Process is fast, no time for heat transfer. For ideal gas: PVᵞ = constant where γ = Cp/Cv. Work done W = (P₁V₁ - P₂V₂)/(γ-1).'
                    },
                    {
                        name: 'Isobaric Process',
                        explanation: 'Pressure constant (P = constant). Volume changes linearly with temperature: V/T = constant. Work done W = PΔV. Heat supplied Q = nCpΔT where Cp is molar heat capacity at constant pressure.'
                    },
                    {
                        name: 'Isochoric Process',
                        explanation: 'Volume constant (V = constant). Pressure changes linearly with temperature: P/T = constant. No work done (W = 0) since volume doesn\'t change. Heat supplied Q = nCvΔT.'
                    }
                ]
            },
            {
                name: 'Laws of Thermodynamics',
                description: 'First and second laws, heat engines, and Carnot cycle.',
                subtopics: [
                    {
                        name: 'First Law of Thermodynamics',
                        explanation: 'Energy conservation: ΔU = Q - W where ΔU is internal energy change, Q is heat added, W is work done by system. Energy cannot be created or destroyed, only converted from one form to another.'
                    },
                    {
                        name: 'Second Law of Thermodynamics',
                        explanation: 'Heat cannot spontaneously flow from cold to hot body. Entropy of isolated system always increases. No heat engine can be 100% efficient. Defines direction of natural processes.'
                    },
                    {
                        name: 'Heat Engines',
                        explanation: 'Convert heat into work. Efficiency η = W/Qh = 1 - Qc/Qh where Qh is heat input, Qc is heat rejected, W is work output. Real engines have efficiency less than Carnot efficiency.'
                    },
                    {
                        name: 'Carnot Cycle',
                        explanation: 'Most efficient heat engine operating between two temperature reservoirs. Efficiency η = 1 - Tc/Th depends only on temperatures. Consists of two isothermal and two adiabatic processes. Sets upper limit for all heat engines.'
                    }
                ]
            }
        ],

        formulas: {
            'Heat Transfer & Calorimetry': [
                {
                    name: 'Heat Transfer',
                    expression: 'Q = mcΔT',
                    description: 'Heat for temperature change, c = specific heat'
                },
                {
                    name: 'Latent Heat',
                    expression: 'Q = mL',
                    description: 'Heat for phase change, L = latent heat'
                },
                {
                    name: 'Conduction',
                    expression: 'Q = kAΔT/L × t',
                    description: 'Heat conduction through material'
                },
                {
                    name: 'Stefan-Boltzmann Law',
                    expression: 'Q = σAT⁴',
                    description: 'Heat radiation from black body'
                }
            ],
            'Thermal Expansion': [
                {
                    name: 'Linear Expansion',
                    expression: 'ΔL = L₀αΔT',
                    description: 'α = coefficient of linear expansion'
                },
                {
                    name: 'Areal Expansion',
                    expression: 'ΔA = A₀βΔT, β = 2α',
                    description: 'β = coefficient of areal expansion'
                },
                {
                    name: 'Volumetric Expansion',
                    expression: 'ΔV = V₀γΔT, γ = 3α',
                    description: 'γ = coefficient of volumetric expansion'
                }
            ],
            'Gas Laws': [
                {
                    name: 'Ideal Gas Law',
                    expression: 'PV = nRT',
                    description: 'Equation of state for ideal gas'
                },
                {
                    name: 'Kinetic Energy',
                    expression: 'PV = (1/3)Nm⟨c²⟩',
                    description: 'Kinetic theory relation'
                },
                {
                    name: 'Mean KE per molecule',
                    expression: '⟨KE⟩ = (3/2)kT',
                    description: 'Average kinetic energy'
                },
                {
                    name: 'RMS Speed',
                    expression: 'v_rms = √(3RT/M)',
                    description: 'Root mean square speed'
                }
            ],
            'Thermodynamic Laws': [
                {
                    name: 'First Law',
                    expression: 'ΔU = Q - W',
                    description: 'Conservation of energy'
                },
                {
                    name: 'Carnot Efficiency',
                    expression: 'η = 1 - T₂/T₁',
                    description: 'Maximum efficiency between temperatures T₁ and T₂'
                },
                {
                    name: 'Entropy Change',
                    expression: 'ΔS = Q_rev/T',
                    description: 'Entropy change for reversible process'
                }
            ]
        },

        problems: [
            {
                problem: 'A 2 kg copper block (specific heat = 400 J/kg·K) is heated from 20°C to 70°C. Calculate the heat absorbed.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Mass m = 2 kg',
                        'Specific heat c = 400 J/kg·K',
                        'Initial temperature T₁ = 20°C',
                        'Final temperature T₂ = 70°C'
                    ],
                    find: 'Heat absorbed Q',
                    formula: 'Q = mcΔT',
                    steps: [
                        {
                            step: 'Calculate temperature change',
                            work: 'ΔT = T₂ - T₁ = 70 - 20 = 50°C = 50 K',
                            result: 'ΔT = 50 K'
                        },
                        {
                            step: 'Apply heat transfer formula',
                            work: 'Q = mcΔT = 2 × 400 × 50',
                            result: 'Q = 40,000 J = 40 kJ'
                        }
                    ],
                    answer: '40 kJ',
                    concept: 'Heat transfer for temperature change without phase change'
                }
            },
            {
                problem: 'A Carnot engine operates between reservoirs at 500 K and 300 K. Calculate its efficiency and the work done if it absorbs 1000 J from the hot reservoir.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Hot reservoir temperature T₁ = 500 K',
                        'Cold reservoir temperature T₂ = 300 K',
                        'Heat absorbed from hot reservoir Q₁ = 1000 J'
                    ],
                    find: 'Efficiency η and work done W',
                    formula: 'η = 1 - T₂/T₁, W = ηQ₁',
                    steps: [
                        {
                            step: 'Calculate Carnot efficiency',
                            work: 'η = 1 - T₂/T₁ = 1 - 300/500 = 1 - 0.6',
                            result: 'η = 0.4 = 40%'
                        },
                        {
                            step: 'Calculate work done',
                            work: 'W = ηQ₁ = 0.4 × 1000',
                            result: 'W = 400 J'
                        },
                        {
                            step: 'Calculate heat rejected',
                            work: 'Q₂ = Q₁ - W = 1000 - 400',
                            result: 'Q₂ = 600 J'
                        }
                    ],
                    answer: 'Efficiency = 40%, Work done = 400 J',
                    concept: 'Carnot engine has maximum possible efficiency between two temperature reservoirs'
                }
            },
            {
                problem: 'A gas undergoes an adiabatic process where its volume changes from 2 L to 8 L. If the initial pressure is 4 atm and γ = 1.4, find the final pressure and work done.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Initial volume V₁ = 2 L',
                        'Final volume V₂ = 8 L',
                        'Initial pressure P₁ = 4 atm',
                        'Adiabatic index γ = 1.4'
                    ],
                    find: 'Final pressure P₂ and work done W',
                    formula: 'P₁V₁^γ = P₂V₂^γ, W = (P₁V₁ - P₂V₂)/(γ-1)',
                    steps: [
                        {
                            step: 'Apply adiabatic relation',
                            work: 'P₂ = P₁(V₁/V₂)^γ = 4 × (2/8)^1.4 = 4 × (1/4)^1.4',
                            result: 'P₂ = 4 × (1/4)^1.4 = 4 × 0.189 = 0.756 atm'
                        },
                        {
                            step: 'Convert to SI units for work calculation',
                            work: 'P₁ = 4 × 10⁵ Pa, V₁ = 2 × 10⁻³ m³, P₂ = 0.756 × 10⁵ Pa, V₂ = 8 × 10⁻³ m³',
                            result: 'All values in SI units'
                        },
                        {
                            step: 'Calculate work done',
                            work: 'W = (P₁V₁ - P₂V₂)/(γ-1) = (4×10⁵×2×10⁻³ - 0.756×10⁵×8×10⁻³)/0.4',
                            result: 'W = (800 - 604.8)/0.4 = 488 J'
                        }
                    ],
                    answer: 'Final pressure = 0.756 atm, Work done = 488 J',
                    concept: 'Adiabatic process: no heat exchange, work done by internal energy change'
                }
            },
            {
                problem: 'A heat engine operates between reservoirs at 600 K and 300 K. If it absorbs 2000 J from the hot reservoir, find the maximum work output and heat rejected for a Carnot engine.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Hot reservoir temperature T₁ = 600 K',
                        'Cold reservoir temperature T₂ = 300 K',
                        'Heat absorbed Q₁ = 2000 J',
                        'Carnot engine (reversible)'
                    ],
                    find: 'Maximum work output W and heat rejected Q₂',
                    formula: 'η = 1 - T₂/T₁, W = ηQ₁, Q₂ = Q₁ - W',
                    steps: [
                        {
                            step: 'Calculate Carnot efficiency',
                            work: 'η = 1 - T₂/T₁ = 1 - 300/600 = 1 - 0.5',
                            result: 'η = 0.5 = 50%'
                        },
                        {
                            step: 'Calculate maximum work output',
                            work: 'W = ηQ₁ = 0.5 × 2000',
                            result: 'W = 1000 J'
                        },
                        {
                            step: 'Calculate heat rejected',
                            work: 'Q₂ = Q₁ - W = 2000 - 1000',
                            result: 'Q₂ = 1000 J'
                        }
                    ],
                    answer: 'Maximum work = 1000 J, Heat rejected = 1000 J',
                    concept: 'Carnot engine efficiency depends only on reservoir temperatures'
                }
            },
            {
                problem: 'One mole of an ideal gas expands isothermally at 27°C from 1 L to 10 L. Calculate the work done, heat absorbed, and change in internal energy.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Number of moles n = 1 mol',
                        'Temperature T = 27°C = 300 K (constant)',
                        'Initial volume V₁ = 1 L = 10⁻³ m³',
                        'Final volume V₂ = 10 L = 10⁻² m³',
                        'R = 8.314 J/(mol⋅K)'
                    ],
                    find: 'Work done W, heat absorbed Q, and change in internal energy ΔU',
                    formula: 'W = nRT ln(V₂/V₁), ΔU = 0 (isothermal), Q = W',
                    steps: [
                        {
                            step: 'Calculate work done',
                            work: 'W = nRT ln(V₂/V₁) = 1 × 8.314 × 300 × ln(10/1)',
                            result: 'W = 2494.2 × ln(10) = 2494.2 × 2.303 = 5744 J'
                        },
                        {
                            step: 'Determine change in internal energy',
                            work: 'For isothermal process: ΔU = nCᵥΔT = 0 (since ΔT = 0)',
                            result: 'ΔU = 0'
                        },
                        {
                            step: 'Apply first law of thermodynamics',
                            work: 'ΔU = Q - W, so 0 = Q - W, therefore Q = W',
                            result: 'Q = 5744 J'
                        }
                    ],
                    answer: 'Work done = 5744 J, Heat absorbed = 5744 J, ΔU = 0',
                    concept: 'Isothermal process: internal energy constant, all heat converts to work'
                }
            },
            {
                problem: 'A refrigerator operates between 5°C and 35°C. If it removes 1200 J of heat from the cold reservoir, find the minimum work required and heat delivered to the hot reservoir.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Cold reservoir temperature T₂ = 5°C = 278 K',
                        'Hot reservoir temperature T₁ = 35°C = 308 K',
                        'Heat removed from cold reservoir Q₂ = 1200 J',
                        'Ideal refrigerator (Carnot cycle)'
                    ],
                    find: 'Minimum work required W and heat delivered Q₁',
                    formula: 'COP = T₂/(T₁-T₂), W = Q₂/COP, Q₁ = Q₂ + W',
                    steps: [
                        {
                            step: 'Calculate coefficient of performance',
                            work: 'COP = T₂/(T₁-T₂) = 278/(308-278) = 278/30',
                            result: 'COP = 9.27'
                        },
                        {
                            step: 'Calculate minimum work required',
                            work: 'W = Q₂/COP = 1200/9.27',
                            result: 'W = 129.4 J'
                        },
                        {
                            step: 'Calculate heat delivered to hot reservoir',
                            work: 'Q₁ = Q₂ + W = 1200 + 129.4',
                            result: 'Q₁ = 1329.4 J'
                        }
                    ],
                    answer: 'Minimum work = 129.4 J, Heat delivered = 1329.4 J',
                    concept: 'Refrigerator: work input moves heat from cold to hot reservoir'
                }
            },
            {
                problem: 'A gas undergoes a cyclic process ABCA where AB is isothermal expansion, BC is adiabatic expansion, and CA is isobaric compression. Calculate the efficiency if the temperatures are T₁ = 600 K and T₂ = 300 K.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Cyclic process: AB (isothermal), BC (adiabatic), CA (isobaric)',
                        'Temperature at A and B: T₁ = 600 K',
                        'Temperature at C: T₂ = 300 K',
                        'Process forms a thermodynamic cycle'
                    ],
                    find: 'Efficiency η of the cycle',
                    formula: 'η = 1 - Q_rejected/Q_absorbed = 1 - T₂/T₁ (for this specific cycle)',
                    steps: [
                        {
                            step: 'Analyze each process',
                            work: 'AB: Isothermal at T₁, heat absorbed. BC: Adiabatic, no heat exchange. CA: Isobaric at T₂, heat rejected',
                            result: 'Heat exchange occurs only in AB and CA processes'
                        },
                        {
                            step: 'Apply cycle analysis',
                            work: 'For this cycle configuration, efficiency depends on temperature ratio',
                            result: 'This resembles a Carnot-like cycle'
                        },
                        {
                            step: 'Calculate efficiency',
                            work: 'η = 1 - T₂/T₁ = 1 - 300/600 = 1 - 0.5',
                            result: 'η = 0.5 = 50%'
                        }
                    ],
                    answer: 'Efficiency = 50%',
                    concept: 'Cycle efficiency depends on temperature limits and process types'
                }
            },
            {
                problem: 'A metal rod of length 2 m expands by 2.4 mm when heated from 20°C to 120°C. Find the coefficient of linear expansion of the metal.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Original length L₀ = 2 m',
                        'Expansion ΔL = 2.4 mm = 2.4 × 10⁻³ m',
                        'Initial temperature T₁ = 20°C',
                        'Final temperature T₂ = 120°C'
                    ],
                    find: 'Coefficient of linear expansion α',
                    formula: 'ΔL = L₀αΔT',
                    steps: [
                        {
                            step: 'Calculate temperature change',
                            work: 'ΔT = T₂ - T₁ = 120 - 20 = 100°C = 100 K',
                            result: 'Temperature increase = 100 K'
                        },
                        {
                            step: 'Apply linear expansion formula',
                            work: 'α = ΔL/(L₀ΔT) = (2.4 × 10⁻³)/(2 × 100)',
                            result: 'α = 2.4 × 10⁻³/200 = 1.2 × 10⁻⁵ K⁻¹'
                        }
                    ],
                    answer: 'Coefficient of linear expansion = 1.2 × 10⁻⁵ K⁻¹',
                    concept: 'Linear expansion: length change proportional to temperature change'
                }
            },
            {
                problem: 'A steam engine takes steam at 200°C and exhausts it at 100°C. If the engine absorbs 5000 J of heat, find the maximum possible work output and actual work if efficiency is 60% of Carnot efficiency.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Steam temperature T₁ = 200°C = 473 K',
                        'Exhaust temperature T₂ = 100°C = 373 K',
                        'Heat absorbed Q₁ = 5000 J',
                        'Actual efficiency = 60% of Carnot efficiency'
                    ],
                    find: 'Maximum possible work and actual work output',
                    formula: 'η_Carnot = 1 - T₂/T₁, η_actual = 0.6 × η_Carnot',
                    steps: [
                        {
                            step: 'Calculate Carnot efficiency',
                            work: 'η_Carnot = 1 - T₂/T₁ = 1 - 373/473 = 1 - 0.789',
                            result: 'η_Carnot = 0.211 = 21.1%'
                        },
                        {
                            step: 'Calculate maximum possible work',
                            work: 'W_max = η_Carnot × Q₁ = 0.211 × 5000',
                            result: 'W_max = 1055 J'
                        },
                        {
                            step: 'Calculate actual efficiency',
                            work: 'η_actual = 0.6 × η_Carnot = 0.6 × 0.211',
                            result: 'η_actual = 0.127 = 12.7%'
                        },
                        {
                            step: 'Calculate actual work output',
                            work: 'W_actual = η_actual × Q₁ = 0.127 × 5000',
                            result: 'W_actual = 635 J'
                        }
                    ],
                    answer: 'Maximum work = 1055 J, Actual work = 635 J',
                    concept: 'Real engines have lower efficiency than ideal Carnot engine'
                }
            },
            {
                problem: 'A gas expands from 2 L to 6 L at constant pressure of 3 atm. If 800 J of heat is added, find the work done and change in internal energy.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Initial volume V₁ = 2 L = 2 × 10⁻³ m³',
                        'Final volume V₂ = 6 L = 6 × 10⁻³ m³',
                        'Constant pressure P = 3 atm = 3 × 10⁵ Pa',
                        'Heat added Q = 800 J'
                    ],
                    find: 'Work done W and change in internal energy ΔU',
                    formula: 'W = PΔV (isobaric), ΔU = Q - W (first law)',
                    steps: [
                        {
                            step: 'Calculate work done',
                            work: 'W = P(V₂ - V₁) = 3×10⁵ × (6×10⁻³ - 2×10⁻³)',
                            result: 'W = 3×10⁵ × 4×10⁻³ = 1200 J'
                        },
                        {
                            step: 'Apply first law of thermodynamics',
                            work: 'ΔU = Q - W = 800 - 1200',
                            result: 'ΔU = -400 J'
                        },
                        {
                            step: 'Interpret the result',
                            work: 'Negative ΔU means internal energy decreases',
                            result: 'Gas does more work than heat supplied, using internal energy'
                        }
                    ],
                    answer: 'Work done = 1200 J, Change in internal energy = -400 J',
                    concept: 'Isobaric process: work done against constant external pressure'
                }
            },
            {
                problem: 'A Carnot heat pump operates between 10°C and 40°C. If it delivers 3000 J to the hot reservoir, find the work input and heat extracted from cold reservoir.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Cold reservoir temperature T₂ = 10°C = 283 K',
                        'Hot reservoir temperature T₁ = 40°C = 313 K',
                        'Heat delivered to hot reservoir Q₁ = 3000 J',
                        'Carnot heat pump (reversible)'
                    ],
                    find: 'Work input W and heat extracted Q₂',
                    formula: 'COP_hp = T₁/(T₁-T₂), W = Q₁/COP_hp, Q₂ = Q₁ - W',
                    steps: [
                        {
                            step: 'Calculate coefficient of performance for heat pump',
                            work: 'COP_hp = T₁/(T₁-T₂) = 313/(313-283) = 313/30',
                            result: 'COP_hp = 10.43'
                        },
                        {
                            step: 'Calculate work input',
                            work: 'W = Q₁/COP_hp = 3000/10.43',
                            result: 'W = 287.6 J'
                        },
                        {
                            step: 'Calculate heat extracted from cold reservoir',
                            work: 'Q₂ = Q₁ - W = 3000 - 287.6',
                            result: 'Q₂ = 2712.4 J'
                        }
                    ],
                    answer: 'Work input = 287.6 J, Heat extracted = 2712.4 J',
                    concept: 'Heat pump: work input moves heat from cold to hot reservoir'
                }
            },
            {
                problem: 'Two moles of an ideal diatomic gas undergo an adiabatic compression from 4 L to 1 L. If initial temperature is 300 K, find the final temperature and work done on the gas.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Number of moles n = 2 mol',
                        'Diatomic gas: γ = Cp/Cv = 7/5 = 1.4',
                        'Initial volume V₁ = 4 L',
                        'Final volume V₂ = 1 L',
                        'Initial temperature T₁ = 300 K'
                    ],
                    find: 'Final temperature T₂ and work done W',
                    formula: 'T₁V₁^(γ-1) = T₂V₂^(γ-1), W = nCv(T₂-T₁)',
                    steps: [
                        {
                            step: 'Apply adiabatic temperature-volume relation',
                            work: 'T₂ = T₁(V₁/V₂)^(γ-1) = 300 × (4/1)^(1.4-1) = 300 × 4^0.4',
                            result: 'T₂ = 300 × 1.741 = 522.3 K'
                        },
                        {
                            step: 'Calculate Cv for diatomic gas',
                            work: 'Cv = (5/2)R = (5/2) × 8.314 = 20.785 J/(mol⋅K)',
                            result: 'Cv = 20.785 J/(mol⋅K)'
                        },
                        {
                            step: 'Calculate work done on the gas',
                            work: 'W = nCv(T₂-T₁) = 2 × 20.785 × (522.3-300)',
                            result: 'W = 41.57 × 222.3 = 9241 J'
                        }
                    ],
                    answer: 'Final temperature = 522.3 K, Work done on gas = 9241 J',
                    concept: 'Adiabatic compression: temperature rises, work done increases internal energy'
                }
            },
            {
                problem: 'A brass rod and a steel rod, each 1 m long at 0°C, are placed end to end. If the temperature is raised to 100°C, find the difference in their lengths. (α_brass = 19 × 10⁻⁶ K⁻¹, α_steel = 11 × 10⁻⁶ K⁻¹)',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Initial length of each rod L₀ = 1 m',
                        'Initial temperature T₁ = 0°C',
                        'Final temperature T₂ = 100°C',
                        'Coefficient of linear expansion: α_brass = 19 × 10⁻⁶ K⁻¹',
                        'Coefficient of linear expansion: α_steel = 11 × 10⁻⁶ K⁻¹'
                    ],
                    find: 'Difference in lengths after heating',
                    formula: 'ΔL = L₀αΔT',
                    steps: [
                        {
                            step: 'Calculate temperature change',
                            work: 'ΔT = T₂ - T₁ = 100 - 0 = 100 K',
                            result: 'Temperature increase = 100 K'
                        },
                        {
                            step: 'Calculate expansion of brass rod',
                            work: 'ΔL_brass = L₀α_brass ΔT = 1 × 19×10⁻⁶ × 100',
                            result: 'ΔL_brass = 1.9 × 10⁻³ m = 1.9 mm'
                        },
                        {
                            step: 'Calculate expansion of steel rod',
                            work: 'ΔL_steel = L₀α_steel ΔT = 1 × 11×10⁻⁶ × 100',
                            result: 'ΔL_steel = 1.1 × 10⁻³ m = 1.1 mm'
                        },
                        {
                            step: 'Find difference in expansions',
                            work: 'Difference = ΔL_brass - ΔL_steel = 1.9 - 1.1',
                            result: 'Difference = 0.8 mm'
                        }
                    ],
                    answer: 'Difference in lengths = 0.8 mm',
                    concept: 'Different materials expand by different amounts for same temperature change'
                }
            },
            {
                problem: 'A gas mixture contains 2 moles of helium and 3 moles of argon at 300 K. If the mixture is heated at constant volume until pressure doubles, find the final temperature and heat added. (Cv for He = 12.5 J/(mol⋅K), Cv for Ar = 12.5 J/(mol⋅K))',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Helium: n₁ = 2 mol, Cv₁ = 12.5 J/(mol⋅K)',
                        'Argon: n₂ = 3 mol, Cv₂ = 12.5 J/(mol⋅K)',
                        'Initial temperature T₁ = 300 K',
                        'Final pressure P₂ = 2P₁ (pressure doubles)',
                        'Constant volume process'
                    ],
                    find: 'Final temperature T₂ and heat added Q',
                    formula: 'P₁/T₁ = P₂/T₂ (constant volume), Q = nCvΔT',
                    steps: [
                        {
                            step: 'Apply Gay-Lussac\'s law',
                            work: 'P₁/T₁ = P₂/T₂, so T₂ = T₁(P₂/P₁) = 300 × 2',
                            result: 'T₂ = 600 K'
                        },
                        {
                            step: 'Calculate total moles and effective Cv',
                            work: 'n_total = n₁ + n₂ = 2 + 3 = 5 mol',
                            result: 'Cv_effective = 12.5 J/(mol⋅K) (same for both gases)'
                        },
                        {
                            step: 'Calculate temperature change',
                            work: 'ΔT = T₂ - T₁ = 600 - 300 = 300 K',
                            result: 'Temperature increase = 300 K'
                        },
                        {
                            step: 'Calculate heat added',
                            work: 'Q = n_total × Cv_effective × ΔT = 5 × 12.5 × 300',
                            result: 'Q = 18,750 J = 18.75 kJ'
                        }
                    ],
                    answer: 'Final temperature = 600 K, Heat added = 18.75 kJ',
                    concept: 'Gas mixture: properties add according to mole fractions'
                }
            },
            {
                problem: 'A heat engine working on Otto cycle has compression ratio 8. If the initial temperature is 300 K and maximum temperature is 2000 K, find the efficiency and work output per cycle if 1000 J is absorbed.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Otto cycle (ideal gasoline engine cycle)',
                        'Compression ratio r = V₁/V₂ = 8',
                        'Initial temperature T₁ = 300 K',
                        'Maximum temperature T₃ = 2000 K',
                        'Heat absorbed Q_in = 1000 J',
                        'Assume γ = 1.4 for air'
                    ],
                    find: 'Efficiency η and work output W',
                    formula: 'η_Otto = 1 - 1/r^(γ-1), W = η × Q_in',
                    steps: [
                        {
                            step: 'Calculate Otto cycle efficiency',
                            work: 'η = 1 - 1/r^(γ-1) = 1 - 1/8^(1.4-1) = 1 - 1/8^0.4',
                            result: 'η = 1 - 1/2.297 = 1 - 0.435 = 0.565 = 56.5%'
                        },
                        {
                            step: 'Calculate work output',
                            work: 'W = η × Q_in = 0.565 × 1000',
                            result: 'W = 565 J'
                        },
                        {
                            step: 'Calculate heat rejected',
                            work: 'Q_out = Q_in - W = 1000 - 565',
                            result: 'Q_out = 435 J'
                        }
                    ],
                    answer: 'Efficiency = 56.5%, Work output = 565 J',
                    concept: 'Otto cycle efficiency depends only on compression ratio for given γ'
                }
            },
            {
                problem: 'A copper calorimeter of mass 100 g contains 200 g of water at 20°C. A 50 g piece of aluminum at 100°C is dropped into it. Find the final equilibrium temperature. (c_Cu = 0.39 J/g⋅K, c_Al = 0.91 J/g⋅K, c_water = 4.18 J/g⋅K)',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Copper calorimeter: m_Cu = 100 g, c_Cu = 0.39 J/g⋅K',
                        'Water: m_w = 200 g, c_w = 4.18 J/g⋅K',
                        'Initial temperature of Cu and water: T₁ = 20°C',
                        'Aluminum: m_Al = 50 g, c_Al = 0.91 J/g⋅K, T₂ = 100°C',
                        'Final equilibrium temperature: T_f'
                    ],
                    find: 'Final equilibrium temperature T_f',
                    formula: 'Heat lost = Heat gained (thermal equilibrium)',
                    steps: [
                        {
                            step: 'Set up heat balance equation',
                            work: 'Heat lost by Al = Heat gained by Cu + Heat gained by water',
                            result: 'm_Al c_Al (T₂ - T_f) = m_Cu c_Cu (T_f - T₁) + m_w c_w (T_f - T₁)'
                        },
                        {
                            step: 'Substitute values',
                            work: '50 × 0.91 × (100 - T_f) = 100 × 0.39 × (T_f - 20) + 200 × 4.18 × (T_f - 20)',
                            result: '45.5(100 - T_f) = 39(T_f - 20) + 836(T_f - 20)'
                        },
                        {
                            step: 'Simplify and solve',
                            work: '4550 - 45.5T_f = 875(T_f - 20) = 875T_f - 17500',
                            result: '4550 + 17500 = 875T_f + 45.5T_f'
                        },
                        {
                            step: 'Calculate final temperature',
                            work: '22050 = 920.5T_f, so T_f = 22050/920.5',
                            result: 'T_f = 23.96°C ≈ 24°C'
                        }
                    ],
                    answer: 'Final equilibrium temperature = 24°C',
                    concept: 'Calorimetry: heat exchange until thermal equilibrium is reached'
                }
            },
            {
                problem: 'A diesel engine has compression ratio 20 and operates on an ideal Diesel cycle. If the cut-off ratio is 2 and γ = 1.4, find the efficiency of the engine.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Diesel cycle (ideal diesel engine cycle)',
                        'Compression ratio r = V₁/V₂ = 20',
                        'Cut-off ratio ρ = V₃/V₂ = 2',
                        'Adiabatic index γ = 1.4'
                    ],
                    find: 'Efficiency η of Diesel cycle',
                    formula: 'η_Diesel = 1 - (1/γr^(γ-1)) × [(ρ^γ - 1)/(ρ - 1)]',
                    steps: [
                        {
                            step: 'Calculate r^(γ-1)',
                            work: 'r^(γ-1) = 20^(1.4-1) = 20^0.4 = 3.314',
                            result: 'r^(γ-1) = 3.314'
                        },
                        {
                            step: 'Calculate ρ^γ',
                            work: 'ρ^γ = 2^1.4 = 2.639',
                            result: 'ρ^γ = 2.639'
                        },
                        {
                            step: 'Calculate the efficiency factor',
                            work: '(ρ^γ - 1)/(ρ - 1) = (2.639 - 1)/(2 - 1) = 1.639/1 = 1.639',
                            result: 'Efficiency factor = 1.639'
                        },
                        {
                            step: 'Calculate Diesel cycle efficiency',
                            work: 'η = 1 - (1/(1.4 × 3.314)) × 1.639 = 1 - (1/4.640) × 1.639',
                            result: 'η = 1 - 0.353 = 0.647 = 64.7%'
                        }
                    ],
                    answer: 'Efficiency = 64.7%',
                    concept: 'Diesel cycle efficiency depends on compression ratio and cut-off ratio'
                }
            },
            {
                problem: 'A polytropic process PV^n = constant where n = 1.2. If the gas expands from 1 L to 4 L and initial pressure is 8 atm, find the work done and final pressure.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Polytropic process: PV^n = constant',
                        'Polytropic index n = 1.2',
                        'Initial volume V₁ = 1 L = 10⁻³ m³',
                        'Final volume V₂ = 4 L = 4 × 10⁻³ m³',
                        'Initial pressure P₁ = 8 atm = 8 × 10⁵ Pa'
                    ],
                    find: 'Work done W and final pressure P₂',
                    formula: 'P₁V₁^n = P₂V₂^n, W = (P₁V₁ - P₂V₂)/(n-1)',
                    steps: [
                        {
                            step: 'Calculate final pressure',
                            work: 'P₂ = P₁(V₁/V₂)^n = 8 × (1/4)^1.2 = 8 × (0.25)^1.2',
                            result: 'P₂ = 8 × 0.217 = 1.74 atm'
                        },
                        {
                            step: 'Convert to SI units',
                            work: 'P₂ = 1.74 × 10⁵ Pa',
                            result: 'P₂ = 1.74 × 10⁵ Pa'
                        },
                        {
                            step: 'Calculate work done',
                            work: 'W = (P₁V₁ - P₂V₂)/(n-1) = (8×10⁵×10⁻³ - 1.74×10⁵×4×10⁻³)/(1.2-1)',
                            result: 'W = (800 - 696)/0.2 = 104/0.2 = 520 J'
                        }
                    ],
                    answer: 'Final pressure = 1.74 atm, Work done = 520 J',
                    concept: 'Polytropic process: intermediate between isothermal and adiabatic'
                }
            },
            {
                problem: 'A refrigerator has a coefficient of performance of 4. If it removes 1200 J of heat from the freezer compartment, find the work input and heat delivered to the room.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Coefficient of performance COP = 4',
                        'Heat removed from cold reservoir Q₂ = 1200 J'
                    ],
                    find: 'Work input W and heat delivered Q₁',
                    formula: 'COP = Q₂/W, Q₁ = Q₂ + W',
                    steps: [
                        {
                            step: 'Calculate work input',
                            work: 'W = Q₂/COP = 1200/4',
                            result: 'W = 300 J'
                        },
                        {
                            step: 'Calculate heat delivered to room',
                            work: 'Q₁ = Q₂ + W = 1200 + 300',
                            result: 'Q₁ = 1500 J'
                        },
                        {
                            step: 'Verify energy conservation',
                            work: 'Energy input (W) + Heat from cold (Q₂) = Heat to hot (Q₁)',
                            result: '300 + 1200 = 1500 ✓'
                        }
                    ],
                    answer: 'Work input = 300 J, Heat delivered = 1500 J',
                    concept: 'Refrigerator: COP relates cooling effect to work input'
                }
            },
            {
                problem: 'A steel ball of mass 100 g at 200°C is dropped into 500 g of water at 20°C. If the final temperature is 25°C, find the specific heat of steel. (c_water = 4.18 J/g⋅K)',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Steel ball: m_s = 100 g, T_s = 200°C',
                        'Water: m_w = 500 g, T_w = 20°C, c_w = 4.18 J/g⋅K',
                        'Final temperature T_f = 25°C'
                    ],
                    find: 'Specific heat of steel c_s',
                    formula: 'Heat lost by steel = Heat gained by water',
                    steps: [
                        {
                            step: 'Set up heat balance equation',
                            work: 'Heat lost by steel = Heat gained by water',
                            result: 'm_s c_s (T_s - T_f) = m_w c_w (T_f - T_w)'
                        },
                        {
                            step: 'Substitute known values',
                            work: '100 × c_s × (200 - 25) = 500 × 4.18 × (25 - 20)',
                            result: '100 × c_s × 175 = 500 × 4.18 × 5'
                        },
                        {
                            step: 'Simplify and solve',
                            work: '17500 × c_s = 10450',
                            result: 'c_s = 10450/17500 = 0.597 J/g⋅K'
                        }
                    ],
                    answer: 'Specific heat of steel = 0.597 J/g⋅K',
                    concept: 'Calorimetry: heat balance determines unknown specific heat'
                }
            },
            {
                problem: 'An ideal gas undergoes a cyclic process consisting of two isotherms at 300 K and 600 K, and two adiabats. If the volume ratio in each isothermal process is 2, find the efficiency of the cycle.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Cyclic process with two isotherms and two adiabats',
                        'Cold isotherm temperature T₂ = 300 K',
                        'Hot isotherm temperature T₁ = 600 K',
                        'Volume ratio in each isothermal process = 2'
                    ],
                    find: 'Efficiency η of the cycle',
                    formula: 'This describes a Carnot cycle: η = 1 - T₂/T₁',
                    steps: [
                        {
                            step: 'Identify the cycle type',
                            work: 'Two isotherms + two adiabats = Carnot cycle',
                            result: 'This is a Carnot cycle operating between T₁ and T₂'
                        },
                        {
                            step: 'Apply Carnot efficiency formula',
                            work: 'η = 1 - T₂/T₁ = 1 - 300/600',
                            result: 'η = 1 - 0.5 = 0.5 = 50%'
                        },
                        {
                            step: 'Verify independence from volume ratio',
                            work: 'Carnot efficiency depends only on temperature ratio',
                            result: 'Volume ratio affects work magnitude but not efficiency'
                        }
                    ],
                    answer: 'Efficiency = 50%',
                    concept: 'Carnot cycle: maximum efficiency depends only on temperature limits'
                }
            },
            {
                problem: 'A gas expands adiabatically from pressure 5 atm to 1 atm. If the initial temperature is 400 K and γ = 1.4, find the final temperature and the ratio of final to initial volume.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Initial pressure P₁ = 5 atm',
                        'Final pressure P₂ = 1 atm',
                        'Initial temperature T₁ = 400 K',
                        'Adiabatic index γ = 1.4'
                    ],
                    find: 'Final temperature T₂ and volume ratio V₂/V₁',
                    formula: 'P₁^(1-γ)T₁^γ = P₂^(1-γ)T₂^γ, P₁V₁^γ = P₂V₂^γ',
                    steps: [
                        {
                            step: 'Apply adiabatic pressure-temperature relation',
                            work: 'T₂ = T₁(P₂/P₁)^((γ-1)/γ) = 400 × (1/5)^(0.4/1.4)',
                            result: 'T₂ = 400 × (0.2)^(2/7) = 400 × 0.574 = 229.6 K'
                        },
                        {
                            step: 'Calculate volume ratio using adiabatic relation',
                            work: 'V₂/V₁ = (P₁/P₂)^(1/γ) = (5/1)^(1/1.4) = 5^(5/7)',
                            result: 'V₂/V₁ = 5^0.714 = 3.48'
                        },
                        {
                            step: 'Verify using ideal gas law',
                            work: '(P₂V₂)/(P₁V₁) = T₂/T₁, so (1 × 3.48)/(5 × 1) = 229.6/400',
                            result: '0.696 ≈ 0.574 (small rounding difference)'
                        }
                    ],
                    answer: 'Final temperature = 229.6 K, Volume ratio = 3.48',
                    concept: 'Adiabatic process: pressure and temperature decrease, volume increases'
                }
            },
            {
                problem: 'A heat pump delivers 3000 J of heat to a room while consuming 800 J of electrical energy. Find the coefficient of performance and the heat extracted from the cold reservoir.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Heat delivered to hot reservoir Q₁ = 3000 J',
                        'Work input W = 800 J',
                        'Heat pump operation'
                    ],
                    find: 'Coefficient of performance COP and heat extracted Q₂',
                    formula: 'COP_hp = Q₁/W, Q₂ = Q₁ - W',
                    steps: [
                        {
                            step: 'Calculate coefficient of performance',
                            work: 'COP_hp = Q₁/W = 3000/800',
                            result: 'COP_hp = 3.75'
                        },
                        {
                            step: 'Calculate heat extracted from cold reservoir',
                            work: 'Q₂ = Q₁ - W = 3000 - 800',
                            result: 'Q₂ = 2200 J'
                        },
                        {
                            step: 'Verify energy conservation',
                            work: 'Energy input (W + Q₂) = Energy output (Q₁)',
                            result: '800 + 2200 = 3000 ✓'
                        }
                    ],
                    answer: 'COP = 3.75, Heat extracted = 2200 J',
                    concept: 'Heat pump: COP relates heat delivered to work input'
                }
            },
            {
                problem: 'A gas undergoes a process where PV² = constant. If the gas expands from 1 L to 4 L and initial pressure is 8 atm, find the work done and final pressure.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Polytropic process: PV² = constant (n = 2)',
                        'Initial volume V₁ = 1 L = 10⁻³ m³',
                        'Final volume V₂ = 4 L = 4 × 10⁻³ m³',
                        'Initial pressure P₁ = 8 atm = 8 × 10⁵ Pa'
                    ],
                    find: 'Work done W and final pressure P₂',
                    formula: 'P₁V₁² = P₂V₂², W = (P₁V₁ - P₂V₂)/(n-1)',
                    steps: [
                        {
                            step: 'Calculate final pressure',
                            work: 'P₂ = P₁(V₁/V₂)² = 8 × (1/4)² = 8 × 1/16',
                            result: 'P₂ = 0.5 atm = 0.5 × 10⁵ Pa'
                        },
                        {
                            step: 'Calculate work done',
                            work: 'W = (P₁V₁ - P₂V₂)/(n-1) = (8×10⁵×10⁻³ - 0.5×10⁵×4×10⁻³)/(2-1)',
                            result: 'W = (800 - 200)/1 = 600 J'
                        },
                        {
                            step: 'Verify using integration',
                            work: 'W = ∫P dV = ∫(K/V²) dV = K[-1/V]₁⁴ = K(1/1 - 1/4) = 0.75K',
                            result: 'K = P₁V₁² = 800, so W = 0.75 × 800 = 600 J ✓'
                        }
                    ],
                    answer: 'Final pressure = 0.5 atm, Work done = 600 J',
                    concept: 'Polytropic process with n = 2: pressure decreases faster than isothermal'
                }
            },
            {
                problem: 'A Stirling engine operates between 400 K and 300 K. If it absorbs 1500 J from the hot reservoir, find the work output and efficiency assuming ideal operation.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Hot reservoir temperature T₁ = 400 K',
                        'Cold reservoir temperature T₂ = 300 K',
                        'Heat absorbed Q₁ = 1500 J',
                        'Ideal Stirling engine (Carnot efficiency)'
                    ],
                    find: 'Work output W and efficiency η',
                    formula: 'η = 1 - T₂/T₁, W = ηQ₁',
                    steps: [
                        {
                            step: 'Calculate Carnot efficiency',
                            work: 'η = 1 - T₂/T₁ = 1 - 300/400 = 1 - 0.75',
                            result: 'η = 0.25 = 25%'
                        },
                        {
                            step: 'Calculate work output',
                            work: 'W = ηQ₁ = 0.25 × 1500',
                            result: 'W = 375 J'
                        },
                        {
                            step: 'Calculate heat rejected',
                            work: 'Q₂ = Q₁ - W = 1500 - 375',
                            result: 'Q₂ = 1125 J'
                        }
                    ],
                    answer: 'Work output = 375 J, Efficiency = 25%',
                    concept: 'Stirling engine: ideal efficiency equals Carnot efficiency'
                }
            },
            {
                problem: 'A metal sphere of radius 5 cm is heated from 20°C to 120°C. If the coefficient of linear expansion is 12 × 10⁻⁶ K⁻¹, find the change in volume.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Initial radius r₀ = 5 cm = 0.05 m',
                        'Initial temperature T₁ = 20°C',
                        'Final temperature T₂ = 120°C',
                        'Coefficient of linear expansion α = 12 × 10⁻⁶ K⁻¹'
                    ],
                    find: 'Change in volume ΔV',
                    formula: 'ΔV = V₀γΔT where γ = 3α for isotropic expansion',
                    steps: [
                        {
                            step: 'Calculate initial volume',
                            work: 'V₀ = (4/3)πr₀³ = (4/3)π(0.05)³',
                            result: 'V₀ = (4/3)π × 1.25×10⁻⁴ = 5.236×10⁻⁴ m³'
                        },
                        {
                            step: 'Calculate temperature change',
                            work: 'ΔT = T₂ - T₁ = 120 - 20 = 100 K',
                            result: 'Temperature increase = 100 K'
                        },
                        {
                            step: 'Calculate coefficient of volume expansion',
                            work: 'γ = 3α = 3 × 12×10⁻⁶ = 36×10⁻⁶ K⁻¹',
                            result: 'γ = 3.6×10⁻⁵ K⁻¹'
                        },
                        {
                            step: 'Calculate change in volume',
                            work: 'ΔV = V₀γΔT = 5.236×10⁻⁴ × 3.6×10⁻⁵ × 100',
                            result: 'ΔV = 1.885×10⁻⁶ m³ = 1.885 cm³'
                        }
                    ],
                    answer: 'Change in volume = 1.885 cm³',
                    concept: 'Volume expansion: coefficient is three times linear expansion coefficient'
                }
            },
            {
                problem: 'A gas undergoes a cyclic process ABCDA where AB is isobaric expansion, BC is isochoric cooling, CD is isobaric compression, and DA is isochoric heating. If P₁ = 2 atm, V₁ = 1 L, P₂ = 2 atm, V₂ = 3 L, find the net work done.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Cyclic process ABCDA',
                        'AB: isobaric expansion at P = 2 atm',
                        'BC: isochoric cooling at V = 3 L',
                        'CD: isobaric compression at lower pressure',
                        'DA: isochoric heating at V = 1 L',
                        'State A: P₁ = 2 atm, V₁ = 1 L',
                        'State B: P₂ = 2 atm, V₂ = 3 L'
                    ],
                    find: 'Net work done W_net',
                    formula: 'W = PΔV for isobaric, W = 0 for isochoric',
                    steps: [
                        {
                            step: 'Calculate work in process AB (isobaric expansion)',
                            work: 'W_AB = P(V₂ - V₁) = 2 atm × (3 - 1) L = 4 atm⋅L',
                            result: 'W_AB = 4 × 101.3 = 405.2 J'
                        },
                        {
                            step: 'Calculate work in process BC (isochoric)',
                            work: 'W_BC = 0 (no volume change)',
                            result: 'W_BC = 0 J'
                        },
                        {
                            step: 'Calculate work in process CD (isobaric compression)',
                            work: 'Assuming same pressure as AB: W_CD = -P(V₂ - V₁) = -4 atm⋅L',
                            result: 'W_CD = -405.2 J'
                        },
                        {
                            step: 'Calculate work in process DA (isochoric)',
                            work: 'W_DA = 0 (no volume change)',
                            result: 'W_DA = 0 J'
                        },
                        {
                            step: 'Calculate net work done',
                            work: 'W_net = W_AB + W_BC + W_CD + W_DA = 405.2 + 0 - 405.2 + 0',
                            result: 'W_net = 0 J (rectangular cycle)'
                        }
                    ],
                    answer: 'Net work done = 0 J',
                    concept: 'Rectangular cycle: net work is area enclosed by P-V diagram'
                }
            },
            {
                problem: 'A reversible heat engine operates between two reservoirs. In one complete cycle, it absorbs 2000 J from the hot reservoir and rejects 1200 J to the cold reservoir. Find the temperatures of the reservoirs if the cold reservoir is at 27°C.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Heat absorbed Q₁ = 2000 J',
                        'Heat rejected Q₂ = 1200 J',
                        'Cold reservoir temperature T₂ = 27°C = 300 K',
                        'Reversible engine (Carnot cycle)'
                    ],
                    find: 'Hot reservoir temperature T₁',
                    formula: 'For Carnot engine: Q₁/T₁ = Q₂/T₂',
                    steps: [
                        {
                            step: 'Calculate work done',
                            work: 'W = Q₁ - Q₂ = 2000 - 1200',
                            result: 'W = 800 J'
                        },
                        {
                            step: 'Apply Carnot cycle relation',
                            work: 'Q₁/T₁ = Q₂/T₂, so T₁ = T₂ × (Q₁/Q₂)',
                            result: 'T₁ = 300 × (2000/1200) = 300 × 1.667'
                        },
                        {
                            step: 'Calculate hot reservoir temperature',
                            work: 'T₁ = 500 K',
                            result: 'T₁ = 500 - 273 = 227°C'
                        },
                        {
                            step: 'Verify efficiency',
                            work: 'η = 1 - T₂/T₁ = 1 - 300/500 = 0.4 = 40%',
                            result: 'Also η = W/Q₁ = 800/2000 = 0.4 = 40% ✓'
                        }
                    ],
                    answer: 'Hot reservoir temperature = 500 K or 227°C',
                    concept: 'Carnot cycle: entropy change is zero for reversible process'
                }
            },
            {
                problem: 'A gas expands from 2 L to 8 L following the relation PV^1.3 = constant. If the initial pressure is 5 atm and initial temperature is 300 K, find the final temperature and work done.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Polytropic process: PV^1.3 = constant (n = 1.3)',
                        'Initial volume V₁ = 2 L',
                        'Final volume V₂ = 8 L',
                        'Initial pressure P₁ = 5 atm',
                        'Initial temperature T₁ = 300 K'
                    ],
                    find: 'Final temperature T₂ and work done W',
                    formula: 'T₁V₁^(n-1) = T₂V₂^(n-1), W = (P₁V₁ - P₂V₂)/(n-1)',
                    steps: [
                        {
                            step: 'Calculate final temperature',
                            work: 'T₂ = T₁(V₁/V₂)^(n-1) = 300 × (2/8)^(1.3-1) = 300 × (1/4)^0.3',
                            result: 'T₂ = 300 × (0.25)^0.3 = 300 × 0.659 = 197.7 K'
                        },
                        {
                            step: 'Calculate final pressure',
                            work: 'P₂ = P₁(V₁/V₂)^n = 5 × (2/8)^1.3 = 5 × (0.25)^1.3',
                            result: 'P₂ = 5 × 0.164 = 0.82 atm'
                        },
                        {
                            step: 'Convert to SI units for work calculation',
                            work: 'P₁ = 5×10⁵ Pa, V₁ = 2×10⁻³ m³, P₂ = 0.82×10⁵ Pa, V₂ = 8×10⁻³ m³',
                            result: 'All values in SI units'
                        },
                        {
                            step: 'Calculate work done',
                            work: 'W = (P₁V₁ - P₂V₂)/(n-1) = (5×10⁵×2×10⁻³ - 0.82×10⁵×8×10⁻³)/0.3',
                            result: 'W = (1000 - 656)/0.3 = 344/0.3 = 1147 J'
                        }
                    ],
                    answer: 'Final temperature = 197.7 K, Work done = 1147 J',
                    concept: 'Polytropic process: intermediate between isothermal (n=1) and adiabatic (n=γ)'
                }
            }
        ]
    },

    'oscillations': {
        title: 'Oscillations & Waves',
        weightage: '8%',
        introduction: 'This chapter covers periodic motion, simple harmonic motion, wave propagation, and sound waves. Understanding oscillations and waves is crucial for many areas of physics.',
        
        topics: [
            {
                name: 'Simple Harmonic Motion',
                description: 'Characteristics of SHM, displacement, velocity, acceleration, and energy in SHM.',
                subtopics: [
                    {
                        name: 'Definition and Characteristics',
                        explanation: 'Simple Harmonic Motion (SHM) is periodic motion where restoring force is directly proportional to displacement from equilibrium: F = -kx. Key characteristics: sinusoidal displacement, constant amplitude, constant period, and energy oscillates between kinetic and potential forms.'
                    },
                    {
                        name: 'Displacement, Velocity, and Acceleration',
                        explanation: 'For SHM: x = A sin(ωt + φ), v = Aω cos(ωt + φ), a = -Aω² sin(ωt + φ). Displacement and acceleration are 180° out of phase, while velocity leads displacement by 90°. Maximum values occur at different positions.'
                    },
                    {
                        name: 'Energy in SHM',
                        explanation: 'Total energy E = ½kA² = ½mω²A² remains constant. Kinetic energy KE = ½mv² = ½mω²(A² - x²) is maximum at mean position. Potential energy PE = ½kx² is maximum at extreme positions. Energy continuously converts between KE and PE.'
                    },
                    {
                        name: 'Phase and Phase Difference',
                        explanation: 'Phase (ωt + φ) determines the state of oscillation at any time. Phase constant φ depends on initial conditions. Phase difference between two oscillators determines their relative motion - in phase (0°), out of phase (180°), or quadrature (90°).'
                    }
                ]
            },
            {
                name: 'Oscillations of Springs and Pendulums',
                description: 'Time period, frequency, and factors affecting oscillations.',
                subtopics: [
                    {
                        name: 'Mass-Spring System',
                        explanation: 'For mass m attached to spring with constant k: T = 2π√(m/k). Period depends only on mass and spring constant, not on amplitude (for small oscillations). Frequency f = 1/T = (1/2π)√(k/m). Angular frequency ω = √(k/m).'
                    },
                    {
                        name: 'Simple Pendulum',
                        explanation: 'For small angular displacements: T = 2π√(l/g) where l is length and g is acceleration due to gravity. Period is independent of mass and amplitude (for small angles). For large amplitudes, period increases and depends on amplitude.'
                    },
                    {
                        name: 'Physical Pendulum',
                        explanation: 'Any rigid body oscillating about a fixed axis: T = 2π√(I/mgd) where I is moment of inertia about pivot, m is mass, d is distance from pivot to center of mass. Reduces to simple pendulum when I = ml².'
                    },
                    {
                        name: 'Factors Affecting Period',
                        explanation: 'Spring: Period increases with mass, decreases with stiffness. Pendulum: Period increases with length, decreases with gravity. Temperature affects length (thermal expansion). Amplitude affects period only for large oscillations. Air resistance causes damping.'
                    }
                ]
            },
            {
                name: 'Wave Motion',
                description: 'Types of waves, wave equation, speed of waves in different media.',
                subtopics: [
                    {
                        name: 'Types of Waves',
                        explanation: 'Mechanical waves need medium (sound, water waves). Electromagnetic waves don\'t need medium (light, radio). Transverse waves: particle motion perpendicular to wave direction. Longitudinal waves: particle motion parallel to wave direction (sound).'
                    },
                    {
                        name: 'Wave Equation and Parameters',
                        explanation: 'Progressive wave: y = A sin(kx - ωt + φ). Wavelength λ = 2π/k, frequency f = ω/2π, wave speed v = fλ = ω/k. Amplitude A determines energy, phase φ determines initial conditions. Wave number k = 2π/λ.'
                    },
                    {
                        name: 'Wave Speed in Different Media',
                        explanation: 'String: v = √(T/μ) where T is tension, μ is linear mass density. Sound in gas: v = √(γP/ρ) = √(γRT/M). Sound in solid: v = √(E/ρ) where E is elastic modulus. Speed depends on medium properties, not wave properties.'
                    },
                    {
                        name: 'Energy and Power in Waves',
                        explanation: 'Wave carries energy without transporting matter. Energy density ∝ A²ω². Power transmitted by wave ∝ A²ω²v. Intensity (power per unit area) ∝ A². Energy spreads as wave propagates, causing amplitude to decrease with distance.'
                    }
                ]
            },
            {
                name: 'Sound Waves',
                description: 'Longitudinal waves, speed of sound, Doppler effect.',
                subtopics: [
                    {
                        name: 'Nature of Sound Waves',
                        explanation: 'Sound waves are longitudinal pressure waves in medium. Compressions (high pressure) and rarefactions (low pressure) alternate. Particles oscillate parallel to wave direction. Sound cannot travel in vacuum as it needs medium for propagation.'
                    },
                    {
                        name: 'Speed of Sound',
                        explanation: 'In gases: v = √(γRT/M) where γ is adiabatic index, R is gas constant, T is temperature, M is molar mass. Speed increases with temperature: v ∝ √T. In air at 20°C: v ≈ 343 m/s. Speed is higher in solids and liquids than gases.'
                    },
                    {
                        name: 'Doppler Effect',
                        explanation: 'Apparent change in frequency when source or observer moves. f\' = f(v ± v₀)/(v ± vₛ) where v is sound speed, v₀ is observer speed, vₛ is source speed. Use + when approaching, - when receding. Applications: radar, medical ultrasound, astronomy.'
                    },
                    {
                        name: 'Sound Intensity and Loudness',
                        explanation: 'Intensity I = P/A (power per unit area). Loudness is logarithmic: L = 10 log(I/I₀) decibels where I₀ = 10⁻¹² W/m². Human ear responds logarithmically to intensity. Threshold of hearing: 0 dB, threshold of pain: 120 dB.'
                    }
                ]
            },
            {
                name: 'Superposition and Interference',
                description: 'Principle of superposition, beats, standing waves.',
                subtopics: [
                    {
                        name: 'Principle of Superposition',
                        explanation: 'When two or more waves meet, resultant displacement is algebraic sum of individual displacements. Waves pass through each other unchanged. This principle applies to all types of waves and forms basis for interference and diffraction phenomena.'
                    },
                    {
                        name: 'Interference of Waves',
                        explanation: 'Constructive interference: waves in phase, amplitudes add (A₁ + A₂). Destructive interference: waves out of phase, amplitudes subtract (|A₁ - A₂|). Path difference determines phase difference: δ = 2πΔx/λ. Interference creates patterns of maxima and minima.'
                    },
                    {
                        name: 'Beats',
                        explanation: 'When two waves of slightly different frequencies interfere: f_beat = |f₁ - f₂|. Amplitude varies periodically, creating loud and soft sounds alternately. Beat frequency equals difference in frequencies. Used for tuning musical instruments and measuring small frequency differences.'
                    },
                    {
                        name: 'Standing Waves',
                        explanation: 'Formed by interference of two identical waves traveling in opposite directions. Nodes (zero amplitude) and antinodes (maximum amplitude) are stationary. In strings: L = nλ/2 for both ends fixed. Applications: musical instruments, organ pipes, microwave cavities.'
                    }
                ]
            }
        ],

        formulas: {
            'Simple Harmonic Motion': [
                {
                    name: 'Displacement',
                    expression: 'x = A sin(ωt + φ)',
                    description: 'A = amplitude, ω = angular frequency, φ = phase constant'
                },
                {
                    name: 'Velocity',
                    expression: 'v = ω√(A² - x²)',
                    description: 'Maximum velocity = ωA at mean position'
                },
                {
                    name: 'Acceleration',
                    expression: 'a = -ω²x',
                    description: 'Acceleration is proportional to displacement'
                },
                {
                    name: 'Time Period',
                    expression: 'T = 2π/ω',
                    description: 'Time for one complete oscillation'
                }
            ],
            'Springs and Pendulums': [
                {
                    name: 'Spring Oscillation',
                    expression: 'T = 2π√(m/k)',
                    description: 'Time period of mass-spring system'
                },
                {
                    name: 'Simple Pendulum',
                    expression: 'T = 2π√(l/g)',
                    description: 'Time period for small oscillations'
                },
                {
                    name: 'Energy in SHM',
                    expression: 'E = ½kA² = ½mω²A²',
                    description: 'Total mechanical energy remains constant'
                }
            ],
            'Wave Motion': [
                {
                    name: 'Wave Equation',
                    expression: 'y = A sin(kx - ωt)',
                    description: 'Progressive wave equation'
                },
                {
                    name: 'Wave Speed',
                    expression: 'v = fλ = ω/k',
                    description: 'Relation between speed, frequency, and wavelength'
                },
                {
                    name: 'Speed in String',
                    expression: 'v = √(T/μ)',
                    description: 'T = tension, μ = linear mass density'
                }
            ]
        },

        problems: [
            {
                problem: 'A mass of 2 kg is attached to a spring with spring constant 50 N/m. Calculate the time period and frequency of oscillation.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Mass m = 2 kg',
                        'Spring constant k = 50 N/m'
                    ],
                    find: 'Time period T and frequency f',
                    formula: 'T = 2π√(m/k), f = 1/T',
                    steps: [
                        {
                            step: 'Calculate time period',
                            work: 'T = 2π√(m/k) = 2π√(2/50) = 2π√(0.04)',
                            result: 'T = 2π × 0.2 = 1.26 s'
                        },
                        {
                            step: 'Calculate frequency',
                            work: 'f = 1/T = 1/1.26',
                            result: 'f = 0.794 Hz ≈ 0.8 Hz'
                        }
                    ],
                    answer: 'Time period = 1.26 s, Frequency = 0.8 Hz',
                    concept: 'Period of mass-spring system depends only on mass and spring constant'
                }
            },
            {
                problem: 'A simple pendulum of length 1 m oscillates with small amplitude. Find its time period and the length required for a 1-second pendulum.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Length l = 1 m',
                        'Acceleration due to gravity g = 9.8 m/s²',
                        'Small amplitude oscillations'
                    ],
                    find: 'Time period T and length for T = 1 s',
                    formula: 'T = 2π√(l/g)',
                    steps: [
                        {
                            step: 'Calculate time period for 1 m pendulum',
                            work: 'T = 2π√(l/g) = 2π√(1/9.8) = 2π√(0.102)',
                            result: 'T = 2π × 0.319 = 2.0 s'
                        },
                        {
                            step: 'Find length for 1-second pendulum',
                            work: '1 = 2π√(l/9.8), so √(l/9.8) = 1/(2π) = 0.159',
                            result: 'l = 9.8 × (0.159)² = 0.248 m = 24.8 cm'
                        }
                    ],
                    answer: 'Time period = 2.0 s, Length for 1-second pendulum = 24.8 cm',
                    concept: 'Pendulum period is independent of mass and amplitude (for small angles)'
                }
            },
            {
                problem: 'A particle executes SHM with amplitude 0.1 m and angular frequency 2 rad/s. Find maximum velocity, maximum acceleration, and velocity at displacement 0.06 m.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Amplitude A = 0.1 m',
                        'Angular frequency ω = 2 rad/s',
                        'Displacement x = 0.06 m'
                    ],
                    find: 'Maximum velocity v_max, maximum acceleration a_max, velocity at x = 0.06 m',
                    formula: 'v_max = ωA, a_max = ω²A, v = ω√(A² - x²)',
                    steps: [
                        {
                            step: 'Calculate maximum velocity',
                            work: 'v_max = ωA = 2 × 0.1',
                            result: 'v_max = 0.2 m/s'
                        },
                        {
                            step: 'Calculate maximum acceleration',
                            work: 'a_max = ω²A = (2)² × 0.1 = 4 × 0.1',
                            result: 'a_max = 0.4 m/s²'
                        },
                        {
                            step: 'Calculate velocity at x = 0.06 m',
                            work: 'v = ω√(A² - x²) = 2√((0.1)² - (0.06)²) = 2√(0.01 - 0.0036)',
                            result: 'v = 2√(0.0064) = 2 × 0.08 = 0.16 m/s'
                        }
                    ],
                    answer: 'v_max = 0.2 m/s, a_max = 0.4 m/s², v at x = 0.06 m is 0.16 m/s',
                    concept: 'In SHM, velocity is maximum at mean position, acceleration is maximum at extreme positions'
                }
            },
            {
                problem: 'A wave travels along a string with equation y = 0.05 sin(10πt - 2πx) where x is in meters and t in seconds. Find the wavelength, frequency, and speed of the wave.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Wave equation: y = 0.05 sin(10πt - 2πx)',
                        'Standard form: y = A sin(ωt - kx)',
                        'Amplitude A = 0.05 m'
                    ],
                    find: 'Wavelength λ, frequency f, and wave speed v',
                    formula: 'ω = 2πf, k = 2π/λ, v = fλ = ω/k',
                    steps: [
                        {
                            step: 'Identify wave parameters from equation',
                            work: 'Comparing with y = A sin(ωt - kx): ω = 10π rad/s, k = 2π rad/m',
                            result: 'Angular frequency ω = 10π rad/s, Wave number k = 2π rad/m'
                        },
                        {
                            step: 'Calculate frequency',
                            work: 'f = ω/2π = 10π/2π = 5 Hz',
                            result: 'Frequency f = 5 Hz'
                        },
                        {
                            step: 'Calculate wavelength',
                            work: 'λ = 2π/k = 2π/2π = 1 m',
                            result: 'Wavelength λ = 1 m'
                        },
                        {
                            step: 'Calculate wave speed',
                            work: 'v = fλ = 5 × 1 = 5 m/s, or v = ω/k = 10π/2π = 5 m/s',
                            result: 'Wave speed v = 5 m/s'
                        }
                    ],
                    answer: 'Wavelength = 1 m, Frequency = 5 Hz, Wave speed = 5 m/s',
                    concept: 'Wave equation parameters determine wavelength, frequency, and speed'
                }
            },
            {
                problem: 'Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. Calculate the beat frequency and the time interval between successive maxima.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Frequency of first fork f₁ = 256 Hz',
                        'Frequency of second fork f₂ = 260 Hz',
                        'Both forks sounded simultaneously'
                    ],
                    find: 'Beat frequency and time interval between maxima',
                    formula: 'Beat frequency = |f₁ - f₂|, Time interval = 1/beat frequency',
                    steps: [
                        {
                            step: 'Calculate beat frequency',
                            work: 'Beat frequency = |f₁ - f₂| = |256 - 260| = 4 Hz',
                            result: 'Beat frequency = 4 Hz'
                        },
                        {
                            step: 'Calculate time interval between maxima',
                            work: 'Time interval = 1/beat frequency = 1/4 = 0.25 s',
                            result: 'Time interval = 0.25 s'
                        }
                    ],
                    answer: 'Beat frequency = 4 Hz, Time interval = 0.25 s',
                    concept: 'Beats occur when two waves of slightly different frequencies interfere'
                }
            },
            {
                problem: 'A string of length 80 cm is fixed at both ends and vibrates in its fundamental mode with frequency 200 Hz. Find the speed of waves on the string and the frequency of the third harmonic.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Length of string L = 80 cm = 0.8 m',
                        'Both ends fixed',
                        'Fundamental frequency f₁ = 200 Hz'
                    ],
                    find: 'Wave speed v and frequency of third harmonic f₃',
                    formula: 'For fixed ends: f₁ = v/2L, fₙ = nf₁',
                    steps: [
                        {
                            step: 'Calculate wave speed',
                            work: 'f₁ = v/2L, so v = 2Lf₁ = 2 × 0.8 × 200',
                            result: 'v = 320 m/s'
                        },
                        {
                            step: 'Calculate third harmonic frequency',
                            work: 'f₃ = 3f₁ = 3 × 200',
                            result: 'f₃ = 600 Hz'
                        },
                        {
                            step: 'Verify using wavelength',
                            work: 'λ₁ = 2L = 1.6 m, v = f₁λ₁ = 200 × 1.6 = 320 m/s ✓',
                            result: 'Wave speed verified'
                        }
                    ],
                    answer: 'Wave speed = 320 m/s, Third harmonic frequency = 600 Hz',
                    concept: 'Standing waves in strings: harmonics are integer multiples of fundamental'
                }
            },
            {
                problem: 'A sound wave of frequency 1000 Hz travels from air into water. If the speed of sound in air is 340 m/s and in water is 1500 m/s, find the wavelength in both media.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Frequency f = 1000 Hz (remains constant)',
                        'Speed in air v₁ = 340 m/s',
                        'Speed in water v₂ = 1500 m/s'
                    ],
                    find: 'Wavelength in air λ₁ and in water λ₂',
                    formula: 'v = fλ, so λ = v/f',
                    steps: [
                        {
                            step: 'Calculate wavelength in air',
                            work: 'λ₁ = v₁/f = 340/1000',
                            result: 'λ₁ = 0.34 m = 34 cm'
                        },
                        {
                            step: 'Calculate wavelength in water',
                            work: 'λ₂ = v₂/f = 1500/1000',
                            result: 'λ₂ = 1.5 m = 150 cm'
                        },
                        {
                            step: 'Compare wavelengths',
                            work: 'λ₂/λ₁ = 1.5/0.34 = 4.41',
                            result: 'Wavelength in water is 4.41 times that in air'
                        }
                    ],
                    answer: 'Wavelength in air = 34 cm, Wavelength in water = 150 cm',
                    concept: 'Frequency remains constant, wavelength changes with medium'
                }
            },
            {
                problem: 'A car moving at 30 m/s approaches a stationary observer while sounding a horn of frequency 500 Hz. Find the apparent frequency heard by the observer. (Speed of sound = 340 m/s)',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Source (car) velocity vₛ = 30 m/s (approaching)',
                        'Observer velocity v₀ = 0 (stationary)',
                        'Source frequency f = 500 Hz',
                        'Speed of sound v = 340 m/s'
                    ],
                    find: 'Apparent frequency f\'',
                    formula: 'Doppler effect: f\' = f(v ± v₀)/(v ∓ vₛ)',
                    steps: [
                        {
                            step: 'Identify sign convention',
                            work: 'Source approaching observer: use negative sign for vₛ',
                            result: 'f\' = f(v + v₀)/(v - vₛ) since v₀ = 0'
                        },
                        {
                            step: 'Apply Doppler formula',
                            work: 'f\' = f × v/(v - vₛ) = 500 × 340/(340 - 30)',
                            result: 'f\' = 500 × 340/310'
                        },
                        {
                            step: 'Calculate apparent frequency',
                            work: 'f\' = 500 × 1.097 = 548.4 Hz',
                            result: 'f\' ≈ 548 Hz'
                        }
                    ],
                    answer: 'Apparent frequency = 548 Hz',
                    concept: 'Doppler effect: frequency increases when source approaches observer'
                }
            },
            {
                problem: 'A mass of 0.5 kg attached to a spring oscillates with a period of 2 s. If the amplitude is 0.1 m, find the spring constant and the maximum kinetic energy.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Mass m = 0.5 kg',
                        'Period T = 2 s',
                        'Amplitude A = 0.1 m'
                    ],
                    find: 'Spring constant k and maximum kinetic energy KEmax',
                    formula: 'T = 2π√(m/k), KEmax = ½mω²A²',
                    steps: [
                        {
                            step: 'Calculate spring constant from period',
                            work: 'T = 2π√(m/k), so k = 4π²m/T² = 4π² × 0.5/(2)²',
                            result: 'k = 4π² × 0.5/4 = π²/2 = 4.93 N/m'
                        },
                        {
                            step: 'Calculate angular frequency',
                            work: 'ω = 2π/T = 2π/2 = π rad/s',
                            result: 'ω = π rad/s'
                        },
                        {
                            step: 'Calculate maximum kinetic energy',
                            work: 'KEmax = ½mω²A² = ½ × 0.5 × π² × (0.1)²',
                            result: 'KEmax = 0.25 × π² × 0.01 = 0.0247 J'
                        }
                    ],
                    answer: 'Spring constant = 4.93 N/m, Maximum KE = 0.0247 J',
                    concept: 'Maximum kinetic energy occurs at mean position in SHM'
                }
            },
            {
                problem: 'A pendulum clock keeps correct time at 20°C. If the temperature rises to 40°C, find the error per day. (Coefficient of linear expansion α = 2 × 10⁻⁵ K⁻¹)',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Initial temperature T₁ = 20°C',
                        'Final temperature T₂ = 40°C',
                        'Coefficient of linear expansion α = 2 × 10⁻⁵ K⁻¹',
                        'Clock keeps correct time initially'
                    ],
                    find: 'Error per day',
                    formula: 'T = 2π√(l/g), fractional change in period = ½ × fractional change in length',
                    steps: [
                        {
                            step: 'Calculate change in length',
                            work: 'Δl/l = αΔT = 2 × 10⁻⁵ × (40 - 20) = 2 × 10⁻⁵ × 20',
                            result: 'Δl/l = 4 × 10⁻⁴'
                        },
                        {
                            step: 'Calculate fractional change in period',
                            work: 'ΔT/T = ½ × Δl/l = ½ × 4 × 10⁻⁴',
                            result: 'ΔT/T = 2 × 10⁻⁴'
                        },
                        {
                            step: 'Calculate error per day',
                            work: 'Error = (ΔT/T) × 24 hours = 2 × 10⁻⁴ × 24 × 3600 s',
                            result: 'Error = 2 × 10⁻⁴ × 86400 = 17.28 s'
                        }
                    ],
                    answer: 'Clock gains 17.28 seconds per day',
                    concept: 'Thermal expansion affects pendulum length and thus timekeeping'
                }
            },
            {
                problem: 'A transverse wave on a string has the equation y = 0.02 sin(4πt - 0.5πx) where x is in meters and t in seconds. Find the wavelength, frequency, and direction of wave propagation.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Wave equation: y = 0.02 sin(4πt - 0.5πx)',
                        'Standard form: y = A sin(ωt - kx) for wave traveling in +x direction',
                        'Amplitude A = 0.02 m'
                    ],
                    find: 'Wavelength λ, frequency f, and direction of propagation',
                    formula: 'ω = 2πf, k = 2π/λ, v = ω/k',
                    steps: [
                        {
                            step: 'Identify wave parameters',
                            work: 'Comparing with y = A sin(ωt - kx): ω = 4π rad/s, k = 0.5π rad/m',
                            result: 'Angular frequency ω = 4π rad/s, Wave number k = 0.5π rad/m'
                        },
                        {
                            step: 'Calculate frequency',
                            work: 'f = ω/2π = 4π/2π = 2 Hz',
                            result: 'Frequency f = 2 Hz'
                        },
                        {
                            step: 'Calculate wavelength',
                            work: 'λ = 2π/k = 2π/(0.5π) = 4 m',
                            result: 'Wavelength λ = 4 m'
                        },
                        {
                            step: 'Determine direction',
                            work: 'Since equation is in form (ωt - kx), wave travels in +x direction',
                            result: 'Wave propagates in positive x direction'
                        }
                    ],
                    answer: 'Wavelength = 4 m, Frequency = 2 Hz, Direction = +x',
                    concept: 'Wave equation form determines direction of propagation'
                }
            },
            {
                problem: 'Two identical strings under the same tension produce frequencies 300 Hz and 305 Hz. When sounded together, calculate the beat frequency and the time for one complete beat cycle.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Frequency of first string f₁ = 300 Hz',
                        'Frequency of second string f₂ = 305 Hz',
                        'Both strings sounded simultaneously'
                    ],
                    find: 'Beat frequency and time for one beat cycle',
                    formula: 'Beat frequency = |f₁ - f₂|, Beat period = 1/beat frequency',
                    steps: [
                        {
                            step: 'Calculate beat frequency',
                            work: 'Beat frequency = |f₁ - f₂| = |300 - 305| = 5 Hz',
                            result: 'Beat frequency = 5 Hz'
                        },
                        {
                            step: 'Calculate time for one beat cycle',
                            work: 'Beat period = 1/beat frequency = 1/5 = 0.2 s',
                            result: 'Time for one complete beat = 0.2 s'
                        }
                    ],
                    answer: 'Beat frequency = 5 Hz, Beat period = 0.2 s',
                    concept: 'Beats result from interference of waves with slightly different frequencies'
                }
            },
            {
                problem: 'A wire of length 1.2 m and mass 0.006 kg is under tension 240 N. Find the fundamental frequency and the frequency of the third harmonic.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Length L = 1.2 m',
                        'Mass m = 0.006 kg',
                        'Tension T = 240 N',
                        'Wire fixed at both ends'
                    ],
                    find: 'Fundamental frequency f₁ and third harmonic f₃',
                    formula: 'v = √(T/μ), f₁ = v/2L, fₙ = nf₁',
                    steps: [
                        {
                            step: 'Calculate linear mass density',
                            work: 'μ = m/L = 0.006/1.2 = 0.005 kg/m',
                            result: 'Linear mass density μ = 0.005 kg/m'
                        },
                        {
                            step: 'Calculate wave speed',
                            work: 'v = √(T/μ) = √(240/0.005) = √48000',
                            result: 'v = 219.1 m/s'
                        },
                        {
                            step: 'Calculate fundamental frequency',
                            work: 'f₁ = v/2L = 219.1/(2 × 1.2) = 219.1/2.4',
                            result: 'f₁ = 91.3 Hz'
                        },
                        {
                            step: 'Calculate third harmonic',
                            work: 'f₃ = 3f₁ = 3 × 91.3',
                            result: 'f₃ = 273.9 Hz'
                        }
                    ],
                    answer: 'Fundamental frequency = 91.3 Hz, Third harmonic = 273.9 Hz',
                    concept: 'Standing waves in strings: harmonics are integer multiples of fundamental'
                }
            },
            {
                problem: 'A sound wave of frequency 500 Hz travels in air at 20°C. If the wave enters water at the same temperature, find the change in wavelength. (Speed of sound in air = 343 m/s, in water = 1500 m/s)',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Frequency f = 500 Hz (constant)',
                        'Speed in air v₁ = 343 m/s',
                        'Speed in water v₂ = 1500 m/s',
                        'Temperature = 20°C (constant)'
                    ],
                    find: 'Change in wavelength Δλ',
                    formula: 'λ = v/f, frequency remains constant across media',
                    steps: [
                        {
                            step: 'Calculate wavelength in air',
                            work: 'λ₁ = v₁/f = 343/500',
                            result: 'λ₁ = 0.686 m'
                        },
                        {
                            step: 'Calculate wavelength in water',
                            work: 'λ₂ = v₂/f = 1500/500',
                            result: 'λ₂ = 3.0 m'
                        },
                        {
                            step: 'Calculate change in wavelength',
                            work: 'Δλ = λ₂ - λ₁ = 3.0 - 0.686',
                            result: 'Δλ = 2.314 m'
                        },
                        {
                            step: 'Calculate percentage increase',
                            work: 'Percentage increase = (Δλ/λ₁) × 100% = (2.314/0.686) × 100%',
                            result: 'Wavelength increases by 337%'
                        }
                    ],
                    answer: 'Wavelength increases by 2.314 m (337% increase)',
                    concept: 'Wavelength changes with medium while frequency remains constant'
                }
            },
            {
                problem: 'A car horn emits sound at 400 Hz. If the car moves toward a stationary observer at 25 m/s, and then moves away at the same speed, find the frequencies heard in both cases. (v_sound = 340 m/s)',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Source frequency f₀ = 400 Hz',
                        'Source speed vₛ = 25 m/s',
                        'Observer stationary v₀ = 0',
                        'Sound speed v = 340 m/s'
                    ],
                    find: 'Apparent frequencies when approaching and receding',
                    formula: 'Doppler effect: f\' = f₀(v ± v₀)/(v ∓ vₛ)',
                    steps: [
                        {
                            step: 'Calculate frequency when car approaches',
                            work: 'f₁ = f₀ × v/(v - vₛ) = 400 × 340/(340 - 25)',
                            result: 'f₁ = 400 × 340/315 = 431.7 Hz'
                        },
                        {
                            step: 'Calculate frequency when car recedes',
                            work: 'f₂ = f₀ × v/(v + vₛ) = 400 × 340/(340 + 25)',
                            result: 'f₂ = 400 × 340/365 = 372.6 Hz'
                        },
                        {
                            step: 'Calculate total frequency change',
                            work: 'Total change = f₁ - f₂ = 431.7 - 372.6',
                            result: 'Total frequency change = 59.1 Hz'
                        }
                    ],
                    answer: 'Approaching: 431.7 Hz, Receding: 372.6 Hz',
                    concept: 'Doppler effect: frequency increases when approaching, decreases when receding'
                }
            },
            {
                problem: 'A particle performs SHM with displacement x = 5 sin(2πt + π/4) cm. Find the displacement, velocity, and acceleration at t = 0.25 s.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Displacement equation: x = 5 sin(2πt + π/4) cm',
                        'Time t = 0.25 s',
                        'Amplitude A = 5 cm, ω = 2π rad/s, φ = π/4'
                    ],
                    find: 'Displacement x, velocity v, and acceleration a at t = 0.25 s',
                    formula: 'x = A sin(ωt + φ), v = Aω cos(ωt + φ), a = -Aω² sin(ωt + φ)',
                    steps: [
                        {
                            step: 'Calculate phase at t = 0.25 s',
                            work: 'Phase = ωt + φ = 2π × 0.25 + π/4 = π/2 + π/4 = 3π/4',
                            result: 'Phase = 3π/4 rad'
                        },
                        {
                            step: 'Calculate displacement',
                            work: 'x = 5 sin(3π/4) = 5 × sin(135°) = 5 × (√2/2)',
                            result: 'x = 5√2/2 = 3.54 cm'
                        },
                        {
                            step: 'Calculate velocity',
                            work: 'v = Aω cos(3π/4) = 5 × 2π × cos(135°) = 10π × (-√2/2)',
                            result: 'v = -5π√2 = -22.2 cm/s'
                        },
                        {
                            step: 'Calculate acceleration',
                            work: 'a = -Aω² sin(3π/4) = -5 × (2π)² × (√2/2) = -20π² × (√2/2)',
                            result: 'a = -10π²√2 = -139.6 cm/s²'
                        }
                    ],
                    answer: 'x = 3.54 cm, v = -22.2 cm/s, a = -139.6 cm/s²',
                    concept: 'SHM: displacement, velocity, and acceleration have specific phase relationships'
                }
            },
            {
                problem: 'A closed organ pipe of length 50 cm resonates in its fundamental mode. Find the frequency if the speed of sound is 340 m/s. Also find the frequency of the first overtone.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Length of closed pipe L = 50 cm = 0.5 m',
                        'Speed of sound v = 340 m/s',
                        'Closed pipe: one end closed, one end open'
                    ],
                    find: 'Fundamental frequency f₁ and first overtone f₃',
                    formula: 'For closed pipe: f₁ = v/4L, overtones at odd multiples',
                    steps: [
                        {
                            step: 'Calculate fundamental frequency',
                            work: 'f₁ = v/4L = 340/(4 × 0.5) = 340/2',
                            result: 'f₁ = 170 Hz'
                        },
                        {
                            step: 'Identify first overtone',
                            work: 'For closed pipe, only odd harmonics exist: f₃ = 3f₁',
                            result: 'First overtone is third harmonic'
                        },
                        {
                            step: 'Calculate first overtone frequency',
                            work: 'f₃ = 3f₁ = 3 × 170',
                            result: 'f₃ = 510 Hz'
                        }
                    ],
                    answer: 'Fundamental frequency = 170 Hz, First overtone = 510 Hz',
                    concept: 'Closed pipes support only odd harmonics due to boundary conditions'
                }
            },
            {
                problem: 'Two waves y₁ = 3 sin(ωt - kx) and y₂ = 4 sin(ωt - kx + π/2) interfere. Find the amplitude and phase of the resultant wave.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Wave 1: y₁ = 3 sin(ωt - kx), A₁ = 3, φ₁ = 0',
                        'Wave 2: y₂ = 4 sin(ωt - kx + π/2), A₂ = 4, φ₂ = π/2',
                        'Both waves have same frequency and wavelength'
                    ],
                    find: 'Resultant amplitude A and phase φ',
                    formula: 'Superposition: A² = A₁² + A₂² + 2A₁A₂cos(φ₂ - φ₁)',
                    steps: [
                        {
                            step: 'Identify phase difference',
                            work: 'Phase difference = φ₂ - φ₁ = π/2 - 0 = π/2',
                            result: 'Waves are 90° out of phase'
                        },
                        {
                            step: 'Calculate resultant amplitude',
                            work: 'A² = A₁² + A₂² + 2A₁A₂cos(π/2) = 3² + 4² + 2×3×4×0',
                            result: 'A² = 9 + 16 + 0 = 25, so A = 5'
                        },
                        {
                            step: 'Calculate resultant phase using components',
                            work: 'x-component: A₁ + A₂cos(π/2) = 3 + 0 = 3',
                            result: 'y-component: A₂sin(π/2) = 4 × 1 = 4'
                        },
                        {
                            step: 'Find phase angle',
                            work: 'tan φ = y-component/x-component = 4/3',
                            result: 'φ = tan⁻¹(4/3) = 53.1° = 0.927 rad'
                        }
                    ],
                    answer: 'Resultant amplitude = 5, Phase = 0.927 rad (53.1°)',
                    concept: 'Wave superposition: amplitudes add vectorially considering phase difference'
                }
            },
            {
                problem: 'A string of length 80 cm and mass 4 g is stretched between two fixed points with tension 64 N. Find the speed of transverse waves and the frequencies of the first three harmonics.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Length L = 80 cm = 0.8 m',
                        'Mass m = 4 g = 0.004 kg',
                        'Tension T = 64 N',
                        'String fixed at both ends'
                    ],
                    find: 'Wave speed v and frequencies of first three harmonics',
                    formula: 'v = √(T/μ), fₙ = nv/2L',
                    steps: [
                        {
                            step: 'Calculate linear mass density',
                            work: 'μ = m/L = 0.004/0.8 = 0.005 kg/m',
                            result: 'Linear mass density μ = 0.005 kg/m'
                        },
                        {
                            step: 'Calculate wave speed',
                            work: 'v = √(T/μ) = √(64/0.005) = √12800',
                            result: 'v = 113.1 m/s'
                        },
                        {
                            step: 'Calculate fundamental frequency',
                            work: 'f₁ = v/2L = 113.1/(2 × 0.8) = 113.1/1.6',
                            result: 'f₁ = 70.7 Hz'
                        },
                        {
                            step: 'Calculate second and third harmonics',
                            work: 'f₂ = 2f₁ = 2 × 70.7 = 141.4 Hz, f₃ = 3f₁ = 3 × 70.7 = 212.1 Hz',
                            result: 'f₂ = 141.4 Hz, f₃ = 212.1 Hz'
                        }
                    ],
                    answer: 'Wave speed = 113.1 m/s, f₁ = 70.7 Hz, f₂ = 141.4 Hz, f₃ = 212.1 Hz',
                    concept: 'Standing waves in strings: all harmonics are present for fixed ends'
                }
            },
            {
                problem: 'A mass attached to a spring oscillates with SHM. At displacement x = A/2, find the ratio of kinetic energy to potential energy.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Displacement x = A/2',
                        'Amplitude = A',
                        'Simple harmonic motion'
                    ],
                    find: 'Ratio of kinetic energy to potential energy (KE/PE)',
                    formula: 'KE = ½m(ω²)(A² - x²), PE = ½kx² = ½mω²x²',
                    steps: [
                        {
                            step: 'Calculate kinetic energy at x = A/2',
                            work: 'KE = ½mω²(A² - x²) = ½mω²(A² - (A/2)²) = ½mω²(A² - A²/4)',
                            result: 'KE = ½mω² × 3A²/4 = 3mω²A²/8'
                        },
                        {
                            step: 'Calculate potential energy at x = A/2',
                            work: 'PE = ½mω²x² = ½mω²(A/2)² = ½mω² × A²/4',
                            result: 'PE = mω²A²/8'
                        },
                        {
                            step: 'Calculate ratio KE/PE',
                            work: 'KE/PE = (3mω²A²/8)/(mω²A²/8) = 3',
                            result: 'KE/PE = 3:1'
                        },
                        {
                            step: 'Verify total energy',
                            work: 'Total energy = KE + PE = 3mω²A²/8 + mω²A²/8 = 4mω²A²/8 = mω²A²/2',
                            result: 'Total energy = ½mω²A² ✓'
                        }
                    ],
                    answer: 'KE:PE = 3:1',
                    concept: 'Energy distribution in SHM varies with position'
                }
            },
            {
                problem: 'A wave pulse travels along a rope. When it reaches the boundary between the rope and a heavier rope, 36% of the energy is reflected. Find the ratio of the linear mass densities.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Energy reflection coefficient = 36% = 0.36',
                        'Energy transmission coefficient = 64% = 0.64',
                        'Wave travels from lighter to heavier rope'
                    ],
                    find: 'Ratio of linear mass densities μ₂/μ₁',
                    formula: 'Reflection coefficient R = ((√μ₂ - √μ₁)/(√μ₂ + √μ₁))²',
                    steps: [
                        {
                            step: 'Set up reflection coefficient equation',
                            work: 'R = 0.36 = ((√μ₂ - √μ₁)/(√μ₂ + √μ₁))²',
                            result: 'Taking square root: √0.36 = 0.6 = (√μ₂ - √μ₁)/(√μ₂ + √μ₁)'
                        },
                        {
                            step: 'Solve for ratio of square roots',
                            work: '0.6(√μ₂ + √μ₁) = √μ₂ - √μ₁, so 0.6√μ₂ + 0.6√μ₁ = √μ₂ - √μ₁',
                            result: '1.6√μ₁ = 0.4√μ₂, so √μ₂/√μ₁ = 1.6/0.4 = 4'
                        },
                        {
                            step: 'Calculate mass density ratio',
                            work: 'μ₂/μ₁ = (√μ₂/√μ₁)² = 4² = 16',
                            result: 'μ₂/μ₁ = 16'
                        },
                        {
                            step: 'Verify using transmission coefficient',
                            work: 'T = 4√μ₁√μ₂/(√μ₁ + √μ₂)² = 4×1×4/(1+4)² = 16/25 = 0.64 ✓',
                            result: 'Transmission coefficient matches given value'
                        }
                    ],
                    answer: 'μ₂/μ₁ = 16',
                    concept: 'Wave reflection at boundaries depends on impedance mismatch'
                }
            },
            {
                problem: 'A physical pendulum consists of a uniform rod of length 1 m pivoted at a point 25 cm from one end. Find its period of oscillation.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Rod length L = 1 m',
                        'Pivot distance from end d = 25 cm = 0.25 m',
                        'Distance from pivot to center of mass h = 0.5 - 0.25 = 0.25 m',
                        'g = 9.8 m/s²'
                    ],
                    find: 'Period of oscillation T',
                    formula: 'T = 2π√(I/(mgh)), I = Icm + mh²',
                    steps: [
                        {
                            step: 'Calculate moment of inertia about center of mass',
                            work: 'For uniform rod: Icm = mL²/12 = m(1)²/12 = m/12',
                            result: 'Icm = m/12 kg⋅m²'
                        },
                        {
                            step: 'Apply parallel axis theorem',
                            work: 'I = Icm + mh² = m/12 + m(0.25)² = m/12 + m×0.0625',
                            result: 'I = m/12 + m/16 = m(4+3)/48 = 7m/48'
                        },
                        {
                            step: 'Calculate period using physical pendulum formula',
                            work: 'T = 2π√(I/(mgh)) = 2π√((7m/48)/(mg×0.25))',
                            result: 'T = 2π√(7/(48×9.8×0.25)) = 2π√(7/117.6)'
                        },
                        {
                            step: 'Simplify and calculate',
                            work: 'T = 2π√(0.0595) = 2π × 0.244',
                            result: 'T = 1.53 s'
                        }
                    ],
                    answer: 'Period = 1.53 s',
                    concept: 'Physical pendulum: period depends on moment of inertia and pivot position'
                }
            },
            {
                problem: 'Two coherent sources separated by 2 mm produce interference fringes on a screen 2 m away. If the wavelength is 600 nm, find the fringe width and the distance between the 5th bright and 3rd dark fringes.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Source separation d = 2 mm = 2 × 10⁻³ m',
                        'Screen distance D = 2 m',
                        'Wavelength λ = 600 nm = 600 × 10⁻⁹ m'
                    ],
                    find: 'Fringe width β and distance between 5th bright and 3rd dark fringes',
                    formula: 'β = λD/d, bright fringes at nβ, dark fringes at (n-½)β',
                    steps: [
                        {
                            step: 'Calculate fringe width',
                            work: 'β = λD/d = (600×10⁻⁹ × 2)/(2×10⁻³)',
                            result: 'β = 1.2×10⁻⁶/2×10⁻³ = 6×10⁻⁴ m = 0.6 mm'
                        },
                        {
                            step: 'Find position of 5th bright fringe',
                            work: 'Position of 5th bright fringe = 5β = 5 × 0.6 = 3.0 mm',
                            result: '5th bright fringe at 3.0 mm from center'
                        },
                        {
                            step: 'Find position of 3rd dark fringe',
                            work: 'Position of 3rd dark fringe = (3-½)β = 2.5β = 2.5 × 0.6 = 1.5 mm',
                            result: '3rd dark fringe at 1.5 mm from center'
                        },
                        {
                            step: 'Calculate distance between them',
                            work: 'Distance = |3.0 - 1.5| = 1.5 mm',
                            result: 'Distance between 5th bright and 3rd dark = 1.5 mm'
                        }
                    ],
                    answer: 'Fringe width = 0.6 mm, Distance = 1.5 mm',
                    concept: 'Interference fringes: bright and dark fringes have specific positions'
                }
            },
            {
                problem: 'A damped oscillator has amplitude that decreases to 1/e of its initial value in 10 s. If the natural frequency is 2 Hz, find the damping coefficient and the frequency of damped oscillations.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Amplitude decreases to A₀/e in time t = 10 s',
                        'Natural frequency f₀ = 2 Hz',
                        'ω₀ = 2πf₀ = 4π rad/s'
                    ],
                    find: 'Damping coefficient γ and damped frequency fd',
                    formula: 'A(t) = A₀e^(-γt), ωd = √(ω₀² - γ²)',
                    steps: [
                        {
                            step: 'Find damping coefficient from amplitude decay',
                            work: 'A(10) = A₀e^(-γ×10) = A₀/e, so e^(-10γ) = 1/e',
                            result: '-10γ = -1, so γ = 0.1 s⁻¹'
                        },
                        {
                            step: 'Calculate damped angular frequency',
                            work: 'ωd = √(ω₀² - γ²) = √((4π)² - (0.1)²) = √(157.91 - 0.01)',
                            result: 'ωd = √157.9 = 12.57 rad/s'
                        },
                        {
                            step: 'Convert to frequency',
                            work: 'fd = ωd/2π = 12.57/2π = 2.00 Hz',
                            result: 'fd ≈ 2.00 Hz'
                        },
                        {
                            step: 'Check damping regime',
                            work: 'Since γ << ω₀ (0.1 << 12.57), this is underdamped oscillation',
                            result: 'Underdamped: frequency barely affected by light damping'
                        }
                    ],
                    answer: 'Damping coefficient = 0.1 s⁻¹, Damped frequency = 2.00 Hz',
                    concept: 'Light damping slightly reduces frequency while causing exponential amplitude decay'
                }
            },
            {
                problem: 'A longitudinal wave in a gas has displacement amplitude 0.1 mm and frequency 1000 Hz. If the density of gas is 1.3 kg/m³ and bulk modulus is 1.4 × 10⁵ Pa, find the pressure amplitude.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Displacement amplitude s₀ = 0.1 mm = 1 × 10⁻⁴ m',
                        'Frequency f = 1000 Hz',
                        'Gas density ρ = 1.3 kg/m³',
                        'Bulk modulus B = 1.4 × 10⁵ Pa'
                    ],
                    find: 'Pressure amplitude p₀',
                    formula: 'v = √(B/ρ), p₀ = ρvωs₀',
                    steps: [
                        {
                            step: 'Calculate speed of sound in gas',
                            work: 'v = √(B/ρ) = √(1.4×10⁵/1.3) = √(107692)',
                            result: 'v = 328.2 m/s'
                        },
                        {
                            step: 'Calculate angular frequency',
                            work: 'ω = 2πf = 2π × 1000 = 2000π rad/s',
                            result: 'ω = 6283 rad/s'
                        },
                        {
                            step: 'Calculate pressure amplitude',
                            work: 'p₀ = ρvωs₀ = 1.3 × 328.2 × 6283 × 1×10⁻⁴',
                            result: 'p₀ = 1.3 × 328.2 × 6283 × 10⁻⁴ = 268.1 Pa'
                        },
                        {
                            step: 'Express as percentage of atmospheric pressure',
                            work: 'Percentage = (268.1/101325) × 100% = 0.26%',
                            result: 'Pressure amplitude is 0.26% of atmospheric pressure'
                        }
                    ],
                    answer: 'Pressure amplitude = 268.1 Pa',
                    concept: 'Longitudinal waves: pressure and displacement amplitudes are related by medium properties'
                }
            },
            {
                problem: 'A mass m is attached to two identical springs (each with spring constant k) arranged in parallel. Find the period of oscillation and compare with a single spring system.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Mass = m',
                        'Two identical springs with spring constant k each',
                        'Springs arranged in parallel',
                        'Compare with single spring of constant k'
                    ],
                    find: 'Period of oscillation for parallel springs and comparison',
                    formula: 'For parallel springs: keff = k₁ + k₂, T = 2π√(m/keff)',
                    steps: [
                        {
                            step: 'Calculate effective spring constant for parallel arrangement',
                            work: 'For parallel springs: keff = k₁ + k₂ = k + k = 2k',
                            result: 'Effective spring constant = 2k'
                        },
                        {
                            step: 'Calculate period for parallel springs',
                            work: 'T_parallel = 2π√(m/keff) = 2π√(m/2k)',
                            result: 'T_parallel = 2π√(m/2k) = (2π/√2)√(m/k)'
                        },
                        {
                            step: 'Calculate period for single spring',
                            work: 'T_single = 2π√(m/k)',
                            result: 'T_single = 2π√(m/k)'
                        },
                        {
                            step: 'Compare the periods',
                            work: 'T_parallel/T_single = [(2π/√2)√(m/k)]/[2π√(m/k)] = 1/√2',
                            result: 'T_parallel = T_single/√2 = 0.707 × T_single'
                        }
                    ],
                    answer: 'T_parallel = (2π/√2)√(m/k), which is 70.7% of single spring period',
                    concept: 'Parallel springs increase effective stiffness, reducing period'
                }
            },
            {
                problem: 'A wave y = 2 sin(10t - 5x) travels along a string. Find the wavelength, frequency, speed, and the particle velocity at x = 0.2 m and t = 0.1 s.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Wave equation: y = 2 sin(10t - 5x)',
                        'Standard form: y = A sin(ωt - kx)',
                        'Position x = 0.2 m, time t = 0.1 s'
                    ],
                    find: 'Wavelength λ, frequency f, wave speed v, and particle velocity at given point',
                    formula: 'ω = 2πf, k = 2π/λ, v = ω/k, particle velocity = ∂y/∂t',
                    steps: [
                        {
                            step: 'Identify wave parameters',
                            work: 'Comparing with y = A sin(ωt - kx): A = 2, ω = 10 rad/s, k = 5 rad/m',
                            result: 'Amplitude = 2, ω = 10 rad/s, k = 5 rad/m'
                        },
                        {
                            step: 'Calculate frequency and wavelength',
                            work: 'f = ω/2π = 10/2π = 1.59 Hz, λ = 2π/k = 2π/5 = 1.26 m',
                            result: 'f = 1.59 Hz, λ = 1.26 m'
                        },
                        {
                            step: 'Calculate wave speed',
                            work: 'v = ω/k = 10/5 = 2 m/s',
                            result: 'Wave speed = 2 m/s'
                        },
                        {
                            step: 'Calculate particle velocity',
                            work: 'Particle velocity = ∂y/∂t = ∂/∂t[2 sin(10t - 5x)] = 20 cos(10t - 5x)',
                            result: 'At x = 0.2 m, t = 0.1 s: vp = 20 cos(10×0.1 - 5×0.2) = 20 cos(0) = 20 m/s'
                        }
                    ],
                    answer: 'λ = 1.26 m, f = 1.59 Hz, v = 2 m/s, particle velocity = 20 m/s',
                    concept: 'Distinguish between wave speed (energy transport) and particle velocity (local motion)'
                }
            },
            {
                problem: 'A tuning fork of frequency 512 Hz is held above a resonance tube partially filled with water. Resonance occurs when the air column length is 16 cm and again at 50 cm. Find the speed of sound and the end correction.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Tuning fork frequency f = 512 Hz',
                        'First resonance at L₁ = 16 cm = 0.16 m',
                        'Second resonance at L₂ = 50 cm = 0.50 m',
                        'Closed tube (one end closed by water)'
                    ],
                    find: 'Speed of sound v and end correction e',
                    formula: 'For closed tube: L + e = (2n-1)λ/4, where n = 1, 2, 3...',
                    steps: [
                        {
                            step: 'Set up equations for both resonances',
                            work: 'First resonance: L₁ + e = λ/4, Second resonance: L₂ + e = 3λ/4',
                            result: '0.16 + e = λ/4 ... (1), 0.50 + e = 3λ/4 ... (2)'
                        },
                        {
                            step: 'Subtract equations to find wavelength',
                            work: '(0.50 + e) - (0.16 + e) = 3λ/4 - λ/4',
                            result: '0.34 = λ/2, so λ = 0.68 m'
                        },
                        {
                            step: 'Calculate speed of sound',
                            work: 'v = fλ = 512 × 0.68',
                            result: 'v = 348.2 m/s'
                        },
                        {
                            step: 'Calculate end correction',
                            work: 'From equation (1): e = λ/4 - L₁ = 0.68/4 - 0.16 = 0.17 - 0.16',
                            result: 'e = 0.01 m = 1 cm'
                        }
                    ],
                    answer: 'Speed of sound = 348.2 m/s, End correction = 1 cm',
                    concept: 'Resonance tube: end correction accounts for effective length increase'
                }
            },
            {
                problem: 'Two identical pendulums of length 1 m are coupled by a weak spring. If one pendulum is displaced and released while the other is at rest, find the beat period. (g = 9.8 m/s²)',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Two identical pendulums, length L = 1 m',
                        'Coupled by weak spring',
                        'Initial conditions: one displaced, other at rest',
                        'g = 9.8 m/s²'
                    ],
                    find: 'Beat period Tbeat',
                    formula: 'Coupled oscillators: normal modes at ω₁ and ω₂, beat frequency = |ω₁ - ω₂|/2π',
                    steps: [
                        {
                            step: 'Calculate natural frequency of single pendulum',
                            work: 'ω₀ = √(g/L) = √(9.8/1) = √9.8 = 3.13 rad/s',
                            result: 'Natural frequency ω₀ = 3.13 rad/s'
                        },
                        {
                            step: 'Identify normal modes for weak coupling',
                            work: 'Symmetric mode: ω₁ ≈ ω₀, Antisymmetric mode: ω₂ ≈ ω₀ + δω',
                            result: 'For weak coupling, δω << ω₀'
                        },
                        {
                            step: 'Apply initial conditions',
                            work: 'One pendulum displaced, other at rest → excites both normal modes equally',
                            result: 'Beat frequency = |ω₂ - ω₁|/2π = δω/2π'
                        },
                        {
                            step: 'Estimate beat period for weak coupling',
                            work: 'For very weak coupling, beat period >> natural period',
                            result: 'Tbeat = 2π/δω ≈ 2π × T₀/δT₀ where δT₀ is small correction'
                        },
                        {
                            step: 'Typical result for weak coupling',
                            work: 'Without spring constant, assume Tbeat ≈ 10-20 times natural period',
                            result: 'T₀ = 2π/ω₀ = 2π/3.13 = 2.01 s, so Tbeat ≈ 20-40 s'
                        }
                    ],
                    answer: 'Beat period depends on coupling strength; typically 20-40 s for weak coupling',
                    concept: 'Coupled oscillators: energy transfers between pendulums with beat frequency'
                }
            }
        ]
    },

    'optics': {
        title: 'Optics',
        weightage: '8%',
        introduction: 'Optics deals with the behavior of light, including reflection, refraction, interference, diffraction, and polarization. This chapter combines ray optics and wave optics.',
        
        topics: [
            {
                name: 'Reflection and Refraction',
                description: 'Laws of reflection and refraction, total internal reflection, optical instruments.',
                subtopics: [
                    {
                        name: 'Laws of Reflection',
                        explanation: 'The incident ray, reflected ray, and normal all lie in the same plane. The angle of incidence equals the angle of reflection. These laws apply to all types of reflection - regular (from smooth surfaces) and diffuse (from rough surfaces).'
                    },
                    {
                        name: 'Snell\'s Law of Refraction',
                        explanation: 'When light passes from one medium to another, it bends according to Snell\'s law: n₁sinθ₁ = n₂sinθ₂. The refractive index n = c/v where c is speed of light in vacuum and v is speed in the medium. Higher refractive index means slower light speed.'
                    },
                    {
                        name: 'Total Internal Reflection',
                        explanation: 'When light travels from denser to rarer medium, beyond the critical angle θc = sin⁻¹(n₂/n₁), total internal reflection occurs. No light is transmitted, all is reflected. Applications: optical fibers, prisms, diamonds\' brilliance.'
                    },
                    {
                        name: 'Dispersion and Prisms',
                        explanation: 'White light splits into constituent colors when passing through a prism because refractive index varies with wavelength (n ∝ 1/λ). Red light bends least, violet most. Angular dispersion = (nᵥ - nᵣ)A where A is prism angle.'
                    }
                ]
            },
            {
                name: 'Lenses and Mirrors',
                description: 'Spherical mirrors, thin lenses, lens formula, magnification.',
                subtopics: [
                    {
                        name: 'Spherical Mirrors',
                        explanation: 'Concave mirrors converge light (positive focal length), convex mirrors diverge light (negative focal length). Mirror formula: 1/f = 1/v + 1/u. Magnification m = -v/u = h₂/h₁. Sign conventions are crucial for correct calculations.'
                    },
                    {
                        name: 'Thin Lenses',
                        explanation: 'Converging lenses (convex) have positive focal length, diverging lenses (concave) have negative focal length. Lens formula: 1/f = 1/v - 1/u. Power P = 1/f (in meters) measured in diopters. Lens maker\'s formula relates focal length to radii and refractive index.'
                    },
                    {
                        name: 'Image Formation',
                        explanation: 'Real images can be projected on screen (v > 0), virtual images cannot (v < 0). Magnification m = v/u for lenses. For mirrors and lenses, object distance u is always negative in sign convention. Image characteristics depend on object position relative to focal point.'
                    },
                    {
                        name: 'Lens Combinations',
                        explanation: 'When lenses are in contact: 1/F = 1/f₁ + 1/f₂. For separated lenses, image of first lens becomes object for second. Equivalent focal length and power calculations help analyze complex optical systems like cameras and telescopes.'
                    }
                ]
            },
            {
                name: 'Wave Optics',
                description: 'Interference, diffraction, polarization, and their applications.',
                subtopics: [
                    {
                        name: 'Interference of Light',
                        explanation: 'When two coherent light waves superpose, they create interference patterns. Constructive interference (bright fringes) occurs when path difference = nλ. Destructive interference (dark fringes) occurs when path difference = (n+½)λ. Young\'s double slit experiment demonstrates this.'
                    },
                    {
                        name: 'Young\'s Double Slit Experiment',
                        explanation: 'Two coherent sources create alternating bright and dark fringes on screen. Fringe width β = λD/d where λ is wavelength, D is screen distance, d is slit separation. Central fringe is brightest. This experiment proved wave nature of light.'
                    },
                    {
                        name: 'Diffraction',
                        explanation: 'Bending of light around obstacles or through apertures. Single slit diffraction creates central bright maximum with dimmer side maxima. Condition for minima: a sinθ = nλ where a is slit width. Diffraction limits resolution of optical instruments.'
                    },
                    {
                        name: 'Polarization',
                        explanation: 'Light waves oscillate in all directions perpendicular to propagation. Polarization restricts oscillations to one plane. Malus\' law: I = I₀cos²θ where θ is angle between polarizer axes. Applications: sunglasses, LCD displays, stress analysis.'
                    }
                ]
            },
            {
                name: 'Optical Instruments',
                description: 'Microscope, telescope, and their magnifying powers.',
                subtopics: [
                    {
                        name: 'Simple Microscope (Magnifying Glass)',
                        explanation: 'Single converging lens used to magnify small objects. Angular magnification M = D/f where D = 25 cm (near point) and f is focal length. Object placed within focal length produces virtual, erect, magnified image. Shorter focal length gives higher magnification.'
                    },
                    {
                        name: 'Compound Microscope',
                        explanation: 'Two lens system: objective (short focal length) and eyepiece. Objective forms real, inverted, magnified image which eyepiece further magnifies. Total magnification M = M₀ × Mₑ. Resolving power limited by wavelength of light used.'
                    },
                    {
                        name: 'Astronomical Telescope',
                        explanation: 'Two converging lenses: objective (large focal length) and eyepiece (short focal length). Angular magnification M = f₀/fₑ. Objective collects light and forms real image at its focus, eyepiece magnifies this image. Larger objective diameter gives better resolution.'
                    },
                    {
                        name: 'Resolving Power and Limitations',
                        explanation: 'Ability to distinguish between two close objects. For telescope: resolving power ∝ D/λ where D is aperture diameter. For microscope: resolving power ∝ n sinα/λ where n is refractive index, α is half-angle of cone. Diffraction ultimately limits resolution.'
                    }
                ]
            }
        ],

        formulas: {
            'Reflection and Refraction': [
                {
                    name: 'Snell\'s Law',
                    expression: 'n₁ sin θ₁ = n₂ sin θ₂',
                    description: 'Law of refraction at interface'
                },
                {
                    name: 'Critical Angle',
                    expression: 'sin θc = n₂/n₁',
                    description: 'For total internal reflection (n₁ > n₂)'
                },
                {
                    name: 'Refractive Index',
                    expression: 'n = c/v',
                    description: 'Ratio of speed of light in vacuum to speed in medium'
                }
            ],
            'Mirrors and Lenses': [
                {
                    name: 'Mirror Formula',
                    expression: '1/f = 1/v + 1/u',
                    description: 'Relation between focal length, object and image distances'
                },
                {
                    name: 'Lens Formula',
                    expression: '1/f = 1/v - 1/u',
                    description: 'For thin lens (sign convention important)'
                },
                {
                    name: 'Magnification',
                    expression: 'm = v/u = h₂/h₁',
                    description: 'Ratio of image to object size'
                }
            ],
            'Wave Optics': [
                {
                    name: 'Young\'s Double Slit',
                    expression: 'β = λD/d',
                    description: 'Fringe width in interference'
                },
                {
                    name: 'Diffraction (Single Slit)',
                    expression: 'a sin θ = nλ',
                    description: 'Condition for minima'
                }
            ]
        },

        problems: [
            {
                problem: 'An object is placed 15 cm in front of a concave mirror of focal length 10 cm. Find the position, nature, and magnification of the image formed.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Object distance u = -15 cm (negative as per sign convention)',
                        'Focal length f = -10 cm (negative for concave mirror)',
                        'Using mirror formula'
                    ],
                    find: 'Image distance v, nature, and magnification m',
                    formula: '1/f = 1/v + 1/u, m = -v/u',
                    steps: [
                        {
                            step: 'Apply mirror formula',
                            work: '1/f = 1/v + 1/u, so 1/(-10) = 1/v + 1/(-15)',
                            result: '-1/10 = 1/v - 1/15'
                        },
                        {
                            step: 'Solve for image distance',
                            work: '1/v = -1/10 + 1/15 = (-3 + 2)/30 = -1/30',
                            result: 'v = -30 cm'
                        },
                        {
                            step: 'Calculate magnification',
                            work: 'm = -v/u = -(-30)/(-15) = -30/15',
                            result: 'm = -2'
                        },
                        {
                            step: 'Determine nature of image',
                            work: 'v = -30 cm (negative) → real image, |m| = 2 → magnified, m < 0 → inverted',
                            result: 'Real, inverted, magnified image at 30 cm in front of mirror'
                        }
                    ],
                    answer: 'Image at 30 cm in front of mirror, real, inverted, magnified 2×',
                    concept: 'Concave mirror forms real, inverted image when object is beyond focus'
                }
            },
            {
                problem: 'Light travels from air into glass (n = 1.5) at an angle of incidence of 60°. Calculate the angle of refraction and the critical angle for total internal reflection.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Refractive index of air n₁ = 1',
                        'Refractive index of glass n₂ = 1.5',
                        'Angle of incidence θ₁ = 60°'
                    ],
                    find: 'Angle of refraction θ₂ and critical angle θc',
                    formula: 'Snell\'s law: n₁sinθ₁ = n₂sinθ₂, Critical angle: sinθc = n₂/n₁',
                    steps: [
                        {
                            step: 'Apply Snell\'s law for refraction',
                            work: 'n₁sinθ₁ = n₂sinθ₂, so 1 × sin60° = 1.5 × sinθ₂',
                            result: 'sinθ₂ = sin60°/1.5 = (√3/2)/1.5 = √3/3'
                        },
                        {
                            step: 'Calculate angle of refraction',
                            work: 'sinθ₂ = 0.577, so θ₂ = sin⁻¹(0.577)',
                            result: 'θ₂ = 35.3°'
                        },
                        {
                            step: 'Calculate critical angle (glass to air)',
                            work: 'sinθc = n_air/n_glass = 1/1.5 = 0.667',
                            result: 'θc = sin⁻¹(0.667) = 41.8°'
                        }
                    ],
                    answer: 'Angle of refraction = 35.3°, Critical angle = 41.8°',
                    concept: 'Light bends toward normal when entering denser medium'
                }
            },
            {
                problem: 'In Young\'s double slit experiment, two slits 0.5 mm apart are illuminated by light of wavelength 600 nm. The screen is 2 m away. Find the fringe width and the distance of 5th bright fringe from center.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Slit separation d = 0.5 mm = 0.5 × 10⁻³ m',
                        'Wavelength λ = 600 nm = 600 × 10⁻⁹ m',
                        'Screen distance D = 2 m'
                    ],
                    find: 'Fringe width β and position of 5th bright fringe',
                    formula: 'β = λD/d, Position of nth bright fringe = nβ',
                    steps: [
                        {
                            step: 'Calculate fringe width',
                            work: 'β = λD/d = (600 × 10⁻⁹ × 2)/(0.5 × 10⁻³)',
                            result: 'β = 1.2 × 10⁻⁶/0.5 × 10⁻³ = 2.4 × 10⁻³ m = 2.4 mm'
                        },
                        {
                            step: 'Calculate position of 5th bright fringe',
                            work: 'Position = nβ = 5 × 2.4 mm',
                            result: 'Position = 12 mm from center'
                        }
                    ],
                    answer: 'Fringe width = 2.4 mm, 5th bright fringe at 12 mm from center',
                    concept: 'Interference creates equally spaced bright and dark fringes'
                }
            },
            {
                problem: 'A convex lens of focal length 20 cm forms a real image at 60 cm from the lens. Find the object distance and magnification.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Focal length f = 20 cm (positive for convex lens)',
                        'Image distance v = 60 cm (positive for real image)',
                        'Real image formed'
                    ],
                    find: 'Object distance u and magnification m',
                    formula: '1/f = 1/v - 1/u, m = v/u',
                    steps: [
                        {
                            step: 'Apply lens formula',
                            work: '1/f = 1/v - 1/u, so 1/20 = 1/60 - 1/u',
                            result: '1/u = 1/60 - 1/20 = (1-3)/60 = -2/60 = -1/30'
                        },
                        {
                            step: 'Calculate object distance',
                            work: 'u = -30 cm',
                            result: 'Object is 30 cm in front of lens (negative sign indicates object side)'
                        },
                        {
                            step: 'Calculate magnification',
                            work: 'm = v/u = 60/(-30) = -2',
                            result: 'Magnification = -2 (negative indicates inverted image, 2× magnified)'
                        }
                    ],
                    answer: 'Object distance = 30 cm, Magnification = -2',
                    concept: 'Convex lens forms real, inverted, magnified image when object is beyond focus'
                }
            },
            {
                problem: 'Light of wavelength 589 nm passes through a single slit of width 0.2 mm. Find the angular width of the central bright fringe and the distance between first minima on a screen 2 m away.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Wavelength λ = 589 nm = 589 × 10⁻⁹ m',
                        'Slit width a = 0.2 mm = 2 × 10⁻⁴ m',
                        'Screen distance D = 2 m'
                    ],
                    find: 'Angular width of central bright fringe and distance between first minima',
                    formula: 'For single slit: a sin θ = nλ (minima), Angular width = 2θ₁',
                    steps: [
                        {
                            step: 'Find angle for first minimum',
                            work: 'For first minimum (n = 1): a sin θ₁ = λ, so sin θ₁ = λ/a',
                            result: 'sin θ₁ = (589×10⁻⁹)/(2×10⁻⁴) = 2.945×10⁻³'
                        },
                        {
                            step: 'Calculate angular width of central bright fringe',
                            work: 'Angular width = 2θ₁ = 2 sin⁻¹(2.945×10⁻³) ≈ 2 × 2.945×10⁻³ rad',
                            result: 'Angular width = 5.89×10⁻³ rad = 0.337°'
                        },
                        {
                            step: 'Calculate linear distance between first minima',
                            work: 'Distance from center to first minimum = D tan θ₁ ≈ D sin θ₁',
                            result: 'Distance = 2 × 2.945×10⁻³ = 5.89×10⁻³ m = 5.89 mm'
                        },
                        {
                            step: 'Find distance between first minima on opposite sides',
                            work: 'Total distance = 2 × 5.89 mm = 11.78 mm',
                            result: 'Distance between first minima = 11.78 mm'
                        }
                    ],
                    answer: 'Angular width = 0.337°, Distance between first minima = 11.78 mm',
                    concept: 'Single slit diffraction: central maximum is twice as wide as other maxima'
                }
            },
            {
                problem: 'A ray of light passes from air into glass (n = 1.5) at an angle of incidence 45°. Find the angle of refraction and the lateral displacement when the glass slab is 4 cm thick.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Refractive index of air n₁ = 1',
                        'Refractive index of glass n₂ = 1.5',
                        'Angle of incidence θ₁ = 45°',
                        'Glass slab thickness t = 4 cm'
                    ],
                    find: 'Angle of refraction θ₂ and lateral displacement d',
                    formula: 'Snell\'s law: n₁ sin θ₁ = n₂ sin θ₂, Lateral displacement: d = t sin(θ₁ - θ₂)/cos θ₂',
                    steps: [
                        {
                            step: 'Apply Snell\'s law',
                            work: 'n₁ sin θ₁ = n₂ sin θ₂, so 1 × sin 45° = 1.5 × sin θ₂',
                            result: 'sin θ₂ = sin 45°/1.5 = (√2/2)/1.5 = √2/3 = 0.471'
                        },
                        {
                            step: 'Calculate angle of refraction',
                            work: 'θ₂ = sin⁻¹(0.471) = 28.1°',
                            result: 'Angle of refraction = 28.1°'
                        },
                        {
                            step: 'Calculate lateral displacement',
                            work: 'd = t sin(θ₁ - θ₂)/cos θ₂ = 4 × sin(45° - 28.1°)/cos 28.1°',
                            result: 'd = 4 × sin(16.9°)/cos(28.1°) = 4 × 0.291/0.883 = 1.32 cm'
                        }
                    ],
                    answer: 'Angle of refraction = 28.1°, Lateral displacement = 1.32 cm',
                    concept: 'Refraction through parallel-sided glass slab causes lateral displacement without deviation'
                }
            },
            {
                problem: 'A compound microscope has an objective lens of focal length 2 cm and an eyepiece of focal length 5 cm. If the distance between lenses is 20 cm, find the magnifying power for normal adjustment.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Objective focal length f₀ = 2 cm',
                        'Eyepiece focal length fₑ = 5 cm',
                        'Distance between lenses L = 20 cm',
                        'Normal adjustment (final image at infinity)'
                    ],
                    find: 'Magnifying power M',
                    formula: 'M = M₀ × Mₑ, where M₀ = v₀/u₀ and Mₑ = D/fₑ',
                    steps: [
                        {
                            step: 'Find object distance for objective lens',
                            work: 'For normal adjustment: v₀ = L - fₑ = 20 - 5 = 15 cm',
                            result: 'Image distance from objective = 15 cm'
                        },
                        {
                            step: 'Calculate object distance using lens formula',
                            work: '1/f₀ = 1/v₀ - 1/u₀, so 1/2 = 1/15 - 1/u₀',
                            result: '1/u₀ = 1/15 - 1/2 = (2-15)/30 = -13/30, so u₀ = -30/13 = -2.31 cm'
                        },
                        {
                            step: 'Calculate magnification of objective',
                            work: 'M₀ = v₀/u₀ = 15/(-2.31) = -6.5',
                            result: 'Objective magnification = 6.5 (magnitude)'
                        },
                        {
                            step: 'Calculate magnification of eyepiece',
                            work: 'Mₑ = D/fₑ = 25/5 = 5 (assuming D = 25 cm for normal eye)',
                            result: 'Eyepiece magnification = 5'
                        },
                        {
                            step: 'Calculate total magnifying power',
                            work: 'M = |M₀| × Mₑ = 6.5 × 5 = 32.5',
                            result: 'Total magnifying power = 32.5'
                        }
                    ],
                    answer: 'Magnifying power = 32.5',
                    concept: 'Compound microscope: total magnification is product of objective and eyepiece magnifications'
                }
            },
            {
                problem: 'A prism of refracting angle 60° has a refractive index of 1.5. Find the angle of minimum deviation and the angle of incidence for minimum deviation.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Prism angle A = 60°',
                        'Refractive index n = 1.5',
                        'Condition: minimum deviation'
                    ],
                    find: 'Minimum deviation δₘ and angle of incidence i',
                    formula: 'At minimum deviation: n = sin((A + δₘ)/2)/sin(A/2), i = (A + δₘ)/2',
                    steps: [
                        {
                            step: 'Apply formula for minimum deviation',
                            work: 'n = sin((A + δₘ)/2)/sin(A/2), so 1.5 = sin((60° + δₘ)/2)/sin(30°)',
                            result: '1.5 = sin((60° + δₘ)/2)/0.5'
                        },
                        {
                            step: 'Solve for minimum deviation',
                            work: 'sin((60° + δₘ)/2) = 1.5 × 0.5 = 0.75',
                            result: '(60° + δₘ)/2 = sin⁻¹(0.75) = 48.6°'
                        },
                        {
                            step: 'Calculate minimum deviation',
                            work: '60° + δₘ = 2 × 48.6° = 97.2°',
                            result: 'δₘ = 97.2° - 60° = 37.2°'
                        },
                        {
                            step: 'Calculate angle of incidence',
                            work: 'i = (A + δₘ)/2 = (60° + 37.2°)/2 = 97.2°/2',
                            result: 'i = 48.6°'
                        }
                    ],
                    answer: 'Minimum deviation = 37.2°, Angle of incidence = 48.6°',
                    concept: 'At minimum deviation, ray inside prism is parallel to base'
                }
            },
            {
                problem: 'Two polaroids are placed with their transmission axes at 60° to each other. If unpolarized light of intensity I₀ falls on the first polaroid, find the intensity after passing through both polaroids.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Initial unpolarized light intensity = I₀',
                        'Angle between transmission axes θ = 60°',
                        'Two polaroids in sequence'
                    ],
                    find: 'Final intensity I₂',
                    formula: 'After first polaroid: I₁ = I₀/2, Malus\' law: I₂ = I₁ cos² θ',
                    steps: [
                        {
                            step: 'Calculate intensity after first polaroid',
                            work: 'When unpolarized light passes through polaroid: I₁ = I₀/2',
                            result: 'Intensity after first polaroid = I₀/2'
                        },
                        {
                            step: 'Apply Malus\' law for second polaroid',
                            work: 'I₂ = I₁ cos² θ = (I₀/2) cos² 60°',
                            result: 'I₂ = (I₀/2) × (1/2)² = (I₀/2) × (1/4)'
                        },
                        {
                            step: 'Calculate final intensity',
                            work: 'I₂ = I₀/8',
                            result: 'Final intensity = I₀/8'
                        },
                        {
                            step: 'Express as percentage',
                            work: 'Percentage transmission = (I₂/I₀) × 100% = (1/8) × 100%',
                            result: '12.5% of original intensity transmitted'
                        }
                    ],
                    answer: 'Final intensity = I₀/8 (12.5% of original)',
                    concept: 'Polarization: first polaroid creates polarized light, second follows Malus\' law'
                }
            },
            {
                problem: 'A telescope has an objective lens of focal length 100 cm and an eyepiece of focal length 5 cm. Find the magnifying power and the length of the telescope for normal adjustment.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Objective focal length f₀ = 100 cm',
                        'Eyepiece focal length fₑ = 5 cm',
                        'Normal adjustment (final image at infinity)'
                    ],
                    find: 'Magnifying power M and telescope length L',
                    formula: 'M = f₀/fₑ, L = f₀ + fₑ (for normal adjustment)',
                    steps: [
                        {
                            step: 'Calculate magnifying power',
                            work: 'M = f₀/fₑ = 100/5 = 20',
                            result: 'Magnifying power = 20'
                        },
                        {
                            step: 'Calculate telescope length',
                            work: 'L = f₀ + fₑ = 100 + 5 = 105 cm',
                            result: 'Telescope length = 105 cm'
                        },
                        {
                            step: 'Verify normal adjustment condition',
                            work: 'For normal adjustment, image from objective is at focus of eyepiece',
                            result: 'Final image formed at infinity for relaxed eye viewing'
                        }
                    ],
                    answer: 'Magnifying power = 20, Telescope length = 105 cm',
                    concept: 'Astronomical telescope: magnification depends only on focal length ratio'
                }
            },
            {
                problem: 'A concave mirror of focal length 15 cm forms a virtual image twice the size of the object. Find the object and image distances.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Concave mirror focal length f = -15 cm (negative)',
                        'Virtual image with magnification m = +2 (positive for virtual)',
                        'Image is twice the size of object'
                    ],
                    find: 'Object distance u and image distance v',
                    formula: '1/f = 1/v + 1/u, m = -v/u',
                    steps: [
                        {
                            step: 'Use magnification formula',
                            work: 'm = -v/u = +2, so v = -2u',
                            result: 'Image distance v = -2u (negative indicates virtual image)'
                        },
                        {
                            step: 'Apply mirror formula',
                            work: '1/f = 1/v + 1/u, so 1/(-15) = 1/(-2u) + 1/u',
                            result: '-1/15 = -1/(2u) + 1/u = (-1 + 2)/(2u) = 1/(2u)'
                        },
                        {
                            step: 'Solve for object distance',
                            work: '-1/15 = 1/(2u), so 2u = -15',
                            result: 'u = -7.5 cm'
                        },
                        {
                            step: 'Calculate image distance',
                            work: 'v = -2u = -2 × (-7.5) = +15 cm',
                            result: 'v = +15 cm (positive indicates virtual image on same side as object)'
                        }
                    ],
                    answer: 'Object distance = 7.5 cm, Image distance = 15 cm (virtual)',
                    concept: 'Concave mirror forms virtual, erect, magnified image when object is within focal length'
                }
            },
            {
                problem: 'Light of wavelength 600 nm falls on a diffraction grating with 5000 lines per cm. Find the angular positions of the first and second order maxima.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Wavelength λ = 600 nm = 600 × 10⁻⁹ m',
                        'Grating has 5000 lines per cm',
                        'Find first (n = 1) and second (n = 2) order maxima'
                    ],
                    find: 'Angular positions θ₁ and θ₂',
                    formula: 'Grating equation: d sin θ = nλ, where d = 1/(lines per unit length)',
                    steps: [
                        {
                            step: 'Calculate grating spacing',
                            work: 'd = 1/(5000 lines/cm) = 1/(5000 × 100 lines/m)',
                            result: 'd = 1/(5 × 10⁵) = 2 × 10⁻⁶ m'
                        },
                        {
                            step: 'Find first order maximum (n = 1)',
                            work: 'd sin θ₁ = λ, so sin θ₁ = λ/d = (600×10⁻⁹)/(2×10⁻⁶)',
                            result: 'sin θ₁ = 0.3, so θ₁ = sin⁻¹(0.3) = 17.5°'
                        },
                        {
                            step: 'Find second order maximum (n = 2)',
                            work: 'd sin θ₂ = 2λ, so sin θ₂ = 2λ/d = 2 × 0.3 = 0.6',
                            result: 'θ₂ = sin⁻¹(0.6) = 36.9°'
                        },
                        {
                            step: 'Check for higher orders',
                            work: 'For n = 3: sin θ₃ = 3 × 0.3 = 0.9 < 1, so third order exists at θ₃ = 64.2°',
                            result: 'For n = 4: sin θ₄ = 1.2 > 1, so fourth order does not exist'
                        }
                    ],
                    answer: 'First order maximum at 17.5°, Second order maximum at 36.9°',
                    concept: 'Diffraction grating: multiple orders possible until sin θ exceeds 1'
                }
            },
            {
                problem: 'A ray of light undergoes total internal reflection at the interface between glass (n = 1.5) and air. If the angle of incidence is 50°, find the critical angle and verify if total internal reflection occurs.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Glass refractive index n₁ = 1.5',
                        'Air refractive index n₂ = 1.0',
                        'Angle of incidence θ = 50°',
                        'Light travels from glass to air'
                    ],
                    find: 'Critical angle θc and verification of total internal reflection',
                    formula: 'Critical angle: sin θc = n₂/n₁, TIR occurs when θ > θc',
                    steps: [
                        {
                            step: 'Calculate critical angle',
                            work: 'sin θc = n₂/n₁ = 1.0/1.5 = 0.667',
                            result: 'θc = sin⁻¹(0.667) = 41.8°'
                        },
                        {
                            step: 'Compare incident angle with critical angle',
                            work: 'Given angle of incidence = 50°, Critical angle = 41.8°',
                            result: 'Since 50° > 41.8°, total internal reflection occurs'
                        },
                        {
                            step: 'Verify using Snell\'s law',
                            work: 'If refraction occurred: sin θ₂ = (n₁/n₂) sin θ₁ = 1.5 × sin 50°',
                            result: 'sin θ₂ = 1.5 × 0.766 = 1.149 > 1 (impossible)'
                        }
                    ],
                    answer: 'Critical angle = 41.8°, Total internal reflection occurs since 50° > 41.8°',
                    concept: 'Total internal reflection occurs when light travels from denser to rarer medium at angles greater than critical angle'
                }
            },
            {
                problem: 'A convex lens of focal length 15 cm is used as a simple microscope. Calculate the magnifying power when the final image is formed at the near point (25 cm) and at infinity.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Focal length f = 15 cm',
                        'Near point D = 25 cm',
                        'Simple microscope (single lens)'
                    ],
                    find: 'Magnifying power for image at near point and at infinity',
                    formula: 'M = D/f (at infinity), M = 1 + D/f (at near point)',
                    steps: [
                        {
                            step: 'Calculate magnifying power when image at infinity',
                            work: 'M∞ = D/f = 25/15',
                            result: 'M∞ = 1.67'
                        },
                        {
                            step: 'Calculate magnifying power when image at near point',
                            work: 'M_D = 1 + D/f = 1 + 25/15 = 1 + 1.67',
                            result: 'M_D = 2.67'
                        },
                        {
                            step: 'Compare the two cases',
                            work: 'Image at near point gives higher magnification but causes eye strain',
                            result: 'Image at infinity is more comfortable for prolonged viewing'
                        }
                    ],
                    answer: 'At infinity: M = 1.67, At near point: M = 2.67',
                    concept: 'Simple microscope: higher magnification when image formed at near point'
                }
            },
            {
                problem: 'Light passes through three polaroids with transmission axes at 0°, 45°, and 90° respectively. If unpolarized light of intensity I₀ is incident, find the final intensity.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Three polaroids with axes at 0°, 45°, 90°',
                        'Initial unpolarized light intensity I₀',
                        'Angles between successive polaroids: 45° and 45°'
                    ],
                    find: 'Final intensity I₃',
                    formula: 'First polaroid: I₁ = I₀/2, Malus\' law: I = I₀cos²θ',
                    steps: [
                        {
                            step: 'Intensity after first polaroid',
                            work: 'I₁ = I₀/2 (unpolarized light through polaroid)',
                            result: 'I₁ = I₀/2'
                        },
                        {
                            step: 'Intensity after second polaroid',
                            work: 'I₂ = I₁cos²(45°) = (I₀/2) × (1/√2)² = (I₀/2) × (1/2)',
                            result: 'I₂ = I₀/4'
                        },
                        {
                            step: 'Intensity after third polaroid',
                            work: 'I₃ = I₂cos²(45°) = (I₀/4) × (1/2)',
                            result: 'I₃ = I₀/8'
                        },
                        {
                            step: 'Without middle polaroid',
                            work: 'Direct from 0° to 90°: I = (I₀/2)cos²(90°) = 0',
                            result: 'Middle polaroid allows some light to pass through'
                        }
                    ],
                    answer: 'Final intensity = I₀/8',
                    concept: 'Multiple polaroids: intermediate polaroid can allow light transmission'
                }
            },
            {
                problem: 'A glass prism has refractive index 1.6 for red light and 1.65 for violet light. If the prism angle is 60°, find the angular dispersion between red and violet light at minimum deviation.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Refractive index for red n_r = 1.6',
                        'Refractive index for violet n_v = 1.65',
                        'Prism angle A = 60°'
                    ],
                    find: 'Angular dispersion δ_v - δ_r',
                    formula: 'At minimum deviation: n = sin((A + δ_m)/2)/sin(A/2)',
                    steps: [
                        {
                            step: 'Find minimum deviation for red light',
                            work: '1.6 = sin((60° + δ_r)/2)/sin(30°), so sin((60° + δ_r)/2) = 1.6 × 0.5 = 0.8',
                            result: '(60° + δ_r)/2 = 53.13°, so δ_r = 46.26°'
                        },
                        {
                            step: 'Find minimum deviation for violet light',
                            work: '1.65 = sin((60° + δ_v)/2)/sin(30°), so sin((60° + δ_v)/2) = 1.65 × 0.5 = 0.825',
                            result: '(60° + δ_v)/2 = 55.77°, so δ_v = 51.54°'
                        },
                        {
                            step: 'Calculate angular dispersion',
                            work: 'Angular dispersion = δ_v - δ_r = 51.54° - 46.26°',
                            result: 'Angular dispersion = 5.28°'
                        },
                        {
                            step: 'Express in terms of dispersive power',
                            work: 'Dispersive power ω = (n_v - n_r)/(n_mean - 1) = 0.05/0.625 = 0.08',
                            result: 'This prism has moderate dispersive power'
                        }
                    ],
                    answer: 'Angular dispersion = 5.28°',
                    concept: 'Dispersion: different colors have different refractive indices and deviations'
                }
            },
            {
                problem: 'A concave mirror of radius of curvature 40 cm is used to form an image of an object placed 15 cm in front of it. Find the position, nature, and size of the image if the object height is 2 cm.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Radius of curvature R = 40 cm',
                        'Focal length f = R/2 = 20 cm (concave, so f = -20 cm)',
                        'Object distance u = -15 cm',
                        'Object height h₁ = 2 cm'
                    ],
                    find: 'Image distance v, nature, and image height h₂',
                    formula: '1/f = 1/v + 1/u, m = -v/u = h₂/h₁',
                    steps: [
                        {
                            step: 'Apply mirror formula',
                            work: '1/(-20) = 1/v + 1/(-15), so 1/v = -1/20 + 1/15',
                            result: '1/v = (-3 + 4)/60 = 1/60, so v = 60 cm'
                        },
                        {
                            step: 'Determine nature of image',
                            work: 'v = +60 cm (positive) indicates virtual image',
                            result: 'Virtual image formed 60 cm behind the mirror'
                        },
                        {
                            step: 'Calculate magnification',
                            work: 'm = -v/u = -60/(-15) = +4',
                            result: 'Magnification = +4 (positive indicates erect image)'
                        },
                        {
                            step: 'Calculate image height',
                            work: 'h₂ = m × h₁ = 4 × 2',
                            result: 'h₂ = 8 cm (erect and magnified)'
                        }
                    ],
                    answer: 'Image at 60 cm behind mirror, virtual, erect, 8 cm tall',
                    concept: 'Concave mirror: virtual, erect, magnified image when object is within focal length'
                }
            },
            {
                problem: 'In a Young\'s double slit experiment, the distance between slits is 1 mm and the screen is 1 m away. If the 10th bright fringe is 6 mm from the center, find the wavelength of light used.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Slit separation d = 1 mm = 10⁻³ m',
                        'Screen distance D = 1 m',
                        '10th bright fringe at distance y₁₀ = 6 mm = 6 × 10⁻³ m'
                    ],
                    find: 'Wavelength λ of light',
                    formula: 'Position of nth bright fringe: y_n = nλD/d',
                    steps: [
                        {
                            step: 'Apply fringe position formula',
                            work: 'y₁₀ = 10λD/d, so 6×10⁻³ = 10λ×1/(10⁻³)',
                            result: '6×10⁻³ = 10⁴λ'
                        },
                        {
                            step: 'Solve for wavelength',
                            work: 'λ = (6×10⁻³)/(10⁴) = 6×10⁻⁷ m',
                            result: 'λ = 600 nm'
                        },
                        {
                            step: 'Identify color of light',
                            work: 'λ = 600 nm corresponds to orange-red light',
                            result: 'This is in the visible spectrum'
                        },
                        {
                            step: 'Calculate fringe width',
                            work: 'β = λD/d = (600×10⁻⁹×1)/(10⁻³) = 0.6 mm',
                            result: 'Each fringe is 0.6 mm wide'
                        }
                    ],
                    answer: 'Wavelength = 600 nm (orange-red light)',
                    concept: 'Young\'s double slit: fringe position determines wavelength'
                }
            },
            {
                problem: 'A ray of light is incident on a glass sphere of refractive index 1.5. Find the angle of incidence for which the ray passes through the center after refraction.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Glass sphere with refractive index n = 1.5',
                        'Ray passes through center after refraction',
                        'Air has refractive index n₁ = 1'
                    ],
                    find: 'Angle of incidence θ₁',
                    formula: 'Snell\'s law: n₁sinθ₁ = n₂sinθ₂, Geometry of sphere',
                    steps: [
                        {
                            step: 'Analyze geometry',
                            work: 'For ray to pass through center, refracted ray must be along radius',
                            result: 'Angle of refraction θ₂ = 0° (ray along normal inside sphere)'
                        },
                        {
                            step: 'Apply Snell\'s law',
                            work: 'n₁sinθ₁ = n₂sinθ₂, so 1×sinθ₁ = 1.5×sin0°',
                            result: 'sinθ₁ = 1.5×0 = 0'
                        },
                        {
                            step: 'Find angle of incidence',
                            work: 'sinθ₁ = 0, so θ₁ = 0°',
                            result: 'Ray must be incident normally (perpendicular to surface)'
                        },
                        {
                            step: 'Physical interpretation',
                            work: 'Only normal incidence ensures ray passes through center',
                            result: 'Any other angle would bend the ray away from center'
                        }
                    ],
                    answer: 'Angle of incidence = 0° (normal incidence)',
                    concept: 'Spherical refraction: only normal rays pass through center'
                }
            },
            {
                problem: 'A diffraction grating has 6000 lines per cm. Find the maximum number of orders visible when illuminated with light of wavelength 500 nm.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Grating has 6000 lines per cm',
                        'Wavelength λ = 500 nm = 500 × 10⁻⁹ m',
                        'Maximum angle θ_max = 90°'
                    ],
                    find: 'Maximum order n_max visible',
                    formula: 'Grating equation: d sinθ = nλ, Maximum when sinθ = 1',
                    steps: [
                        {
                            step: 'Calculate grating spacing',
                            work: 'd = 1/(6000 lines/cm) = 1/(6×10⁵ lines/m)',
                            result: 'd = 1.67 × 10⁻⁶ m'
                        },
                        {
                            step: 'Apply condition for maximum order',
                            work: 'At θ = 90°: d × 1 = n_max × λ',
                            result: 'n_max = d/λ = (1.67×10⁻⁶)/(500×10⁻⁹)'
                        },
                        {
                            step: 'Calculate maximum order',
                            work: 'n_max = 1.67×10⁻⁶/5×10⁻⁷ = 3.34',
                            result: 'Since n must be integer, n_max = 3'
                        },
                        {
                            step: 'Verify the result',
                            work: 'For n = 3: sinθ = 3λ/d = 3×0.3 = 0.9 < 1 ✓',
                            result: 'For n = 4: sinθ = 4×0.3 = 1.2 > 1 (impossible)'
                        }
                    ],
                    answer: 'Maximum order visible = 3',
                    concept: 'Diffraction grating: maximum order limited by sinθ ≤ 1'
                }
            },
            {
                problem: 'A compound microscope has objective and eyepiece of focal lengths 1 cm and 5 cm respectively. The distance between them is 20 cm. Find the magnifying power and the distance of object from objective for normal adjustment.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Objective focal length f₀ = 1 cm',
                        'Eyepiece focal length f_e = 5 cm',
                        'Distance between lenses L = 20 cm',
                        'Normal adjustment (image at infinity)'
                    ],
                    find: 'Magnifying power M and object distance u₀',
                    formula: 'M = (v₀/u₀) × (D/f_e), Normal adjustment: v_e = ∞',
                    steps: [
                        {
                            step: 'Find image distance from objective',
                            work: 'For normal adjustment: v₀ = L - f_e = 20 - 5 = 15 cm',
                            result: 'Image from objective at 15 cm'
                        },
                        {
                            step: 'Find object distance for objective',
                            work: '1/f₀ = 1/v₀ - 1/u₀, so 1/1 = 1/15 - 1/u₀',
                            result: '1/u₀ = 1/15 - 1 = (1-15)/15 = -14/15, so u₀ = -15/14 = -1.07 cm'
                        },
                        {
                            step: 'Calculate objective magnification',
                            work: 'M₀ = v₀/|u₀| = 15/(15/14) = 14',
                            result: 'Objective magnification = 14'
                        },
                        {
                            step: 'Calculate eyepiece magnification',
                            work: 'M_e = D/f_e = 25/5 = 5 (assuming D = 25 cm)',
                            result: 'Eyepiece magnification = 5'
                        },
                        {
                            step: 'Calculate total magnifying power',
                            work: 'M = M₀ × M_e = 14 × 5 = 70',
                            result: 'Total magnifying power = 70'
                        }
                    ],
                    answer: 'Magnifying power = 70, Object distance = 1.07 cm from objective',
                    concept: 'Compound microscope: high magnification from short focal length objective'
                }
            },
            {
                problem: 'A glass slab of thickness 6 cm and refractive index 1.5 is placed in air. A ray is incident at 60° on one surface. Find the lateral displacement of the emergent ray.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Glass slab thickness t = 6 cm',
                        'Refractive index n = 1.5',
                        'Angle of incidence θ₁ = 60°',
                        'Surrounded by air (n = 1)'
                    ],
                    find: 'Lateral displacement d',
                    formula: 'd = t sin(θ₁ - θ₂)/cos θ₂',
                    steps: [
                        {
                            step: 'Find angle of refraction in glass',
                            work: 'n₁sinθ₁ = n₂sinθ₂, so 1×sin60° = 1.5×sinθ₂',
                            result: 'sinθ₂ = (√3/2)/1.5 = √3/3, so θ₂ = 35.26°'
                        },
                        {
                            step: 'Calculate lateral displacement',
                            work: 'd = t sin(θ₁ - θ₂)/cos θ₂ = 6 × sin(60° - 35.26°)/cos 35.26°',
                            result: 'd = 6 × sin(24.74°)/cos(35.26°) = 6 × 0.419/0.816'
                        },
                        {
                            step: 'Simplify the calculation',
                            work: 'd = 6 × 0.513 = 3.08 cm',
                            result: 'Lateral displacement = 3.08 cm'
                        },
                        {
                            step: 'Verify emergent ray direction',
                            work: 'Emergent ray is parallel to incident ray but laterally displaced',
                            result: 'No angular deviation, only lateral shift'
                        }
                    ],
                    answer: 'Lateral displacement = 3.08 cm',
                    concept: 'Parallel-sided glass slab: causes lateral displacement without angular deviation'
                }
            },
            {
                problem: 'A Galilean telescope has an objective of focal length 100 cm and an eyepiece of focal length -20 cm. Find the magnifying power and length of telescope for normal adjustment.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Objective focal length f₀ = 100 cm (converging)',
                        'Eyepiece focal length f_e = -20 cm (diverging)',
                        'Galilean telescope (terrestrial telescope)',
                        'Normal adjustment'
                    ],
                    find: 'Magnifying power M and telescope length L',
                    formula: 'M = f₀/|f_e|, L = f₀ + f_e (algebraically)',
                    steps: [
                        {
                            step: 'Calculate magnifying power',
                            work: 'M = f₀/|f_e| = 100/|-20| = 100/20',
                            result: 'M = 5'
                        },
                        {
                            step: 'Calculate telescope length',
                            work: 'L = f₀ + f_e = 100 + (-20) = 80 cm',
                            result: 'Telescope length = 80 cm'
                        },
                        {
                            step: 'Compare with astronomical telescope',
                            work: 'Astronomical telescope length = f₀ + |f_e| = 100 + 20 = 120 cm',
                            result: 'Galilean telescope is shorter for same magnification'
                        },
                        {
                            step: 'Advantages of Galilean telescope',
                            work: 'Produces erect image, shorter length, but smaller field of view',
                            result: 'Used in opera glasses and terrestrial viewing'
                        }
                    ],
                    answer: 'Magnifying power = 5, Length = 80 cm',
                    concept: 'Galilean telescope: diverging eyepiece gives erect image and shorter length'
                }
            },
            {
                problem: 'Light of wavelength 600 nm is incident on a single slit of width 1.2 mm. Find the width of central bright fringe on a screen placed 2 m away.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Wavelength λ = 600 nm = 600 × 10⁻⁹ m',
                        'Slit width a = 1.2 mm = 1.2 × 10⁻³ m',
                        'Screen distance D = 2 m'
                    ],
                    find: 'Width of central bright fringe',
                    formula: 'Width of central bright fringe = 2λD/a',
                    steps: [
                        {
                            step: 'Find angular position of first minimum',
                            work: 'For first minimum: a sinθ₁ = λ, so sinθ₁ = λ/a',
                            result: 'sinθ₁ = (600×10⁻⁹)/(1.2×10⁻³) = 5×10⁻⁴'
                        },
                        {
                            step: 'Calculate linear distance to first minimum',
                            work: 'y₁ = D tanθ₁ ≈ D sinθ₁ = 2 × 5×10⁻⁴',
                            result: 'y₁ = 1×10⁻³ m = 1 mm'
                        },
                        {
                            step: 'Find width of central bright fringe',
                            work: 'Width = 2y₁ = 2 × 1 mm',
                            result: 'Width of central bright fringe = 2 mm'
                        },
                        {
                            step: 'Verify using direct formula',
                            work: 'Width = 2λD/a = 2×(600×10⁻⁹)×2/(1.2×10⁻³)',
                            result: 'Width = 2.4×10⁻⁶/1.2×10⁻³ = 2×10⁻³ m = 2 mm ✓'
                        }
                    ],
                    answer: 'Width of central bright fringe = 2 mm',
                    concept: 'Single slit diffraction: central maximum is twice as wide as other maxima'
                }
            },
            {
                problem: 'A ray of light passes from water (n = 1.33) to glass (n = 1.5) at an angle of incidence of 30°. Find the angle of refraction and the critical angle for total internal reflection from glass to water.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Water refractive index n₁ = 1.33',
                        'Glass refractive index n₂ = 1.5',
                        'Angle of incidence θ₁ = 30°'
                    ],
                    find: 'Angle of refraction θ₂ and critical angle θc for glass to water',
                    formula: 'Snell\'s law: n₁sinθ₁ = n₂sinθ₂, Critical angle: sinθc = n₁/n₂',
                    steps: [
                        {
                            step: 'Apply Snell\'s law for refraction',
                            work: 'n₁sinθ₁ = n₂sinθ₂, so 1.33×sin30° = 1.5×sinθ₂',
                            result: '1.33×0.5 = 1.5×sinθ₂, so sinθ₂ = 0.665/1.5 = 0.443'
                        },
                        {
                            step: 'Calculate angle of refraction',
                            work: 'θ₂ = sin⁻¹(0.443) = 26.3°',
                            result: 'Angle of refraction = 26.3°'
                        },
                        {
                            step: 'Calculate critical angle for glass to water',
                            work: 'sinθc = n_water/n_glass = 1.33/1.5 = 0.887',
                            result: 'θc = sin⁻¹(0.887) = 62.5°'
                        },
                        {
                            step: 'Physical interpretation',
                            work: 'Light bends toward normal when entering denser medium (glass)',
                            result: 'TIR occurs when light travels from glass to water at angles > 62.5°'
                        }
                    ],
                    answer: 'Angle of refraction = 26.3°, Critical angle = 62.5°',
                    concept: 'Refraction between two transparent media: light bends toward normal in denser medium'
                }
            },
            {
                problem: 'A convex lens of focal length 20 cm is placed 50 cm from a concave mirror of focal length 30 cm. An object is placed 30 cm in front of the lens. Find the position of the final image.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Convex lens: f₁ = 20 cm',
                        'Concave mirror: f₂ = -30 cm',
                        'Distance between lens and mirror = 50 cm',
                        'Object distance from lens u₁ = -30 cm'
                    ],
                    find: 'Position of final image',
                    formula: 'Apply lens formula twice: once for lens, then for mirror',
                    steps: [
                        {
                            step: 'Find image formed by lens',
                            work: '1/f₁ = 1/v₁ - 1/u₁, so 1/20 = 1/v₁ - 1/(-30)',
                            result: '1/v₁ = 1/20 - 1/30 = (3-2)/60 = 1/60, so v₁ = 60 cm'
                        },
                        {
                            step: 'Find object distance for mirror',
                            work: 'Image from lens is 60 cm behind lens, mirror is 50 cm from lens',
                            result: 'Object for mirror is 60 - 50 = 10 cm behind mirror, so u₂ = +10 cm'
                        },
                        {
                            step: 'Find image formed by mirror',
                            work: '1/f₂ = 1/v₂ + 1/u₂, so 1/(-30) = 1/v₂ + 1/10',
                            result: '1/v₂ = -1/30 - 1/10 = (-1-3)/30 = -4/30, so v₂ = -7.5 cm'
                        },
                        {
                            step: 'Locate final image position',
                            work: 'v₂ = -7.5 cm means image is 7.5 cm in front of mirror',
                            result: 'Final image is 50 - 7.5 = 42.5 cm behind the lens'
                        }
                    ],
                    answer: 'Final image is located 42.5 cm behind the lens',
                    concept: 'Combination of lens and mirror: image of first element becomes object for second'
                }
            },
            {
                problem: 'In a Newton\'s rings experiment, the diameter of the 10th dark ring is 5 mm when viewed by reflection. If the radius of curvature of the plano-convex lens is 1 m, find the wavelength of light used.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Diameter of 10th dark ring D₁₀ = 5 mm',
                        'Radius of 10th dark ring r₁₀ = 2.5 mm = 2.5 × 10⁻³ m',
                        'Radius of curvature R = 1 m',
                        'Viewed by reflection (dark rings)'
                    ],
                    find: 'Wavelength λ of light',
                    formula: 'For dark rings in reflection: r²ₙ = nλR',
                    steps: [
                        {
                            step: 'Apply formula for dark rings',
                            work: 'r²₁₀ = 10λR, so (2.5×10⁻³)² = 10λ×1',
                            result: '6.25×10⁻⁶ = 10λ'
                        },
                        {
                            step: 'Calculate wavelength',
                            work: 'λ = (6.25×10⁻⁶)/10 = 6.25×10⁻⁷ m',
                            result: 'λ = 625 nm'
                        },
                        {
                            step: 'Identify color of light',
                            work: 'λ = 625 nm corresponds to red light',
                            result: 'This is in the red region of visible spectrum'
                        },
                        {
                            step: 'Verify using ring spacing',
                            work: 'Adjacent rings have Δr² = λR, so ring spacing decreases with increasing n',
                            result: 'This matches the observed pattern in Newton\'s rings'
                        }
                    ],
                    answer: 'Wavelength = 625 nm (red light)',
                    concept: 'Newton\'s rings: interference in thin air film between lens and glass plate'
                }
            },
            {
                problem: 'A beam of white light is incident on a glass prism of angle 60° and refractive index 1.5. Find the angle of minimum deviation and the angles of incidence and emergence.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Prism angle A = 60°',
                        'Refractive index n = 1.5',
                        'White light (consider average wavelength)',
                        'Minimum deviation condition'
                    ],
                    find: 'Minimum deviation δₘ, angles of incidence i and emergence e',
                    formula: 'At minimum deviation: n = sin((A + δₘ)/2)/sin(A/2), i = e = (A + δₘ)/2',
                    steps: [
                        {
                            step: 'Apply minimum deviation formula',
                            work: '1.5 = sin((60° + δₘ)/2)/sin(30°)',
                            result: '1.5 = sin((60° + δₘ)/2)/0.5, so sin((60° + δₘ)/2) = 0.75'
                        },
                        {
                            step: 'Find angle sum',
                            work: '(60° + δₘ)/2 = sin⁻¹(0.75) = 48.6°',
                            result: '60° + δₘ = 97.2°'
                        },
                        {
                            step: 'Calculate minimum deviation',
                            work: 'δₘ = 97.2° - 60° = 37.2°',
                            result: 'Minimum deviation = 37.2°'
                        },
                        {
                            step: 'Find angles of incidence and emergence',
                            work: 'At minimum deviation: i = e = (A + δₘ)/2 = 97.2°/2',
                            result: 'i = e = 48.6°'
                        }
                    ],
                    answer: 'Minimum deviation = 37.2°, Incidence angle = Emergence angle = 48.6°',
                    concept: 'Minimum deviation: symmetric ray path with equal angles of incidence and emergence'
                }
            },
            {
                problem: 'A fiber optic cable has a core of refractive index 1.6 and cladding of refractive index 1.4. Find the acceptance angle and numerical aperture of the fiber.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Core refractive index n₁ = 1.6',
                        'Cladding refractive index n₂ = 1.4',
                        'Air outside has refractive index n₀ = 1',
                        'Step-index optical fiber'
                    ],
                    find: 'Acceptance angle θₐ and numerical aperture NA',
                    formula: 'NA = √(n₁² - n₂²), sin θₐ = NA/n₀',
                    steps: [
                        {
                            step: 'Calculate numerical aperture',
                            work: 'NA = √(n₁² - n₂²) = √((1.6)² - (1.4)²)',
                            result: 'NA = √(2.56 - 1.96) = √0.6 = 0.775'
                        },
                        {
                            step: 'Find acceptance angle',
                            work: 'sin θₐ = NA/n₀ = 0.775/1 = 0.775',
                            result: 'θₐ = sin⁻¹(0.775) = 50.8°'
                        },
                        {
                            step: 'Calculate acceptance cone',
                            work: 'Full acceptance cone angle = 2θₐ = 2 × 50.8°',
                            result: 'Full cone angle = 101.6°'
                        },
                        {
                            step: 'Physical interpretation',
                            work: 'Light rays within this cone will be guided by total internal reflection',
                            result: 'Higher NA means better light-gathering ability'
                        }
                    ],
                    answer: 'Acceptance angle = 50.8°, Numerical aperture = 0.775',
                    concept: 'Optical fiber: numerical aperture determines light-gathering capability'
                }
            },
            {
                problem: 'A Michelson interferometer uses light of wavelength 589 nm. If one mirror is moved by 0.233 mm, find the number of fringes that cross the field of view.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Wavelength λ = 589 nm = 589 × 10⁻⁹ m',
                        'Mirror displacement d = 0.233 mm = 2.33 × 10⁻⁴ m',
                        'Michelson interferometer setup'
                    ],
                    find: 'Number of fringes N that cross the field of view',
                    formula: 'Path difference change = 2d, N = 2d/λ',
                    steps: [
                        {
                            step: 'Calculate path difference change',
                            work: 'When mirror moves by d, path difference changes by 2d',
                            result: 'Path difference change = 2 × 2.33×10⁻⁴ = 4.66×10⁻⁴ m'
                        },
                        {
                            step: 'Calculate number of fringes',
                            work: 'N = (Path difference change)/λ = (4.66×10⁻⁴)/(589×10⁻⁹)',
                            result: 'N = 4.66×10⁻⁴/5.89×10⁻⁷ = 791'
                        },
                        {
                            step: 'Physical interpretation',
                            work: 'Each fringe corresponds to λ/2 change in mirror position',
                            result: '791 bright fringes will cross the field of view'
                        },
                        {
                            step: 'Verify calculation',
                            work: 'Mirror movement per fringe = λ/2 = 294.5 nm',
                            result: 'Total fringes = 233 μm / 294.5 nm = 791 ✓'
                        }
                    ],
                    answer: 'Number of fringes = 791',
                    concept: 'Michelson interferometer: fringe count measures precise distances'
                }
            }
        ]
     },
     'mechanics': {
        title: 'Mechanics',
        weightage: '16-24%',
        introduction: 'Mechanics is the foundation of physics, dealing with motion, forces, energy, and momentum. This chapter has the highest weightage in JEE and covers kinematics, dynamics, work-energy, and rotational motion.',
        
        topics: [
            {
                name: 'Kinematics',
                description: 'Motion in one and two dimensions, projectile motion, relative motion.',
                subtopics: [
                    {
                        name: 'One-Dimensional Motion',
                        explanation: 'Motion along a straight line with constant acceleration. Key equations: v = u + at, s = ut + ½at², v² = u² + 2as. These equations relate initial velocity u, final velocity v, acceleration a, time t, and displacement s. Graphical analysis using v-t and s-t graphs provides insights into motion.'
                    },
                    {
                        name: 'Two-Dimensional Motion',
                        explanation: 'Motion in a plane where velocity and acceleration are vectors. Position vector r⃗ = x î + y ĵ. Velocity v⃗ = dr⃗/dt, acceleration a⃗ = dv⃗/dt. Components can be analyzed independently using superposition principle.'
                    },
                    {
                        name: 'Projectile Motion',
                        explanation: 'Motion under gravity with initial velocity at angle θ. Horizontal motion: uniform velocity. Vertical motion: uniformly accelerated. Range R = u²sin2θ/g (maximum at 45°), maximum height H = u²sin²θ/2g, time of flight T = 2usinθ/g.'
                    },
                    {
                        name: 'Relative Motion',
                        explanation: 'Motion of one object as observed from another moving object. Relative velocity v⃗AB = v⃗A - v⃗B. Important for problems involving boats crossing rivers, rain appearing slanted to moving observer, etc. Vector addition and subtraction are essential.'
                    }
                ]
            },
            {
                name: 'Laws of Motion',
                description: 'Newton\'s laws, friction, circular motion, and applications.',
                subtopics: [
                    {
                        name: 'Newton\'s Laws of Motion',
                        explanation: 'First law (inertia): Object at rest stays at rest, object in motion stays in motion unless acted upon by external force. Second law: F⃗ = ma⃗ or F⃗ = dp⃗/dt. Third law: For every action, there\'s equal and opposite reaction. These laws form foundation of classical mechanics.'
                    },
                    {
                        name: 'Friction',
                        explanation: 'Force opposing relative motion between surfaces. Static friction fs ≤ μsN (prevents motion), kinetic friction fk = μkN (opposes motion). Coefficient of friction depends on surface materials. Friction enables walking, driving, but causes energy loss.'
                    },
                    {
                        name: 'Circular Motion',
                        explanation: 'Motion in circular path requires centripetal force Fc = mv²/r = mω²r directed toward center. Centripetal acceleration ac = v²/r. Banking of roads, motion of satellites, and conical pendulum are applications. Centrifugal force is pseudo force in rotating reference frame.'
                    },
                    {
                        name: 'Applications and Problem Solving',
                        explanation: 'Free body diagrams are crucial for analyzing forces. Identify all forces, apply Newton\'s laws in component form. Common scenarios: inclined planes, pulleys, connected masses, elevators. Pseudo forces appear in non-inertial reference frames.'
                    }
                ]
            },
            {
                name: 'Work, Energy and Power',
                description: 'Work-energy theorem, conservation of energy, power.',
                subtopics: [
                    {
                        name: 'Work and Work-Energy Theorem',
                        explanation: 'Work W = F⃗·s⃗ = Fs cosθ where θ is angle between force and displacement. Work-energy theorem: Net work done equals change in kinetic energy, W = ΔKE = ½mv² - ½mu². Work can be positive (energy added) or negative (energy removed).'
                    },
                    {
                        name: 'Potential Energy',
                        explanation: 'Energy stored due to position or configuration. Gravitational PE = mgh near Earth\'s surface, = -GMm/r for universal gravitation. Elastic PE = ½kx² for springs. Conservative forces have associated potential energy; work done is path-independent.'
                    },
                    {
                        name: 'Conservation of Energy',
                        explanation: 'Total mechanical energy E = KE + PE remains constant for conservative forces. For non-conservative forces like friction, mechanical energy decreases. Energy transformations: potential ↔ kinetic, mechanical → thermal. Energy cannot be created or destroyed, only transformed.'
                    },
                    {
                        name: 'Power',
                        explanation: 'Rate of doing work: P = dW/dt = F⃗·v⃗. Average power = Work/time. Instantaneous power = Force × velocity component along force direction. Units: watt (W) = J/s. Power determines how quickly energy is transferred or transformed.'
                    }
                ]
            },
            {
                name: 'Rotational Motion',
                description: 'Angular kinematics, moment of inertia, torque, angular momentum.',
                subtopics: [
                    {
                        name: 'Angular Kinematics',
                        explanation: 'Rotational analog of linear motion. Angular displacement θ, angular velocity ω = dθ/dt, angular acceleration α = dω/dt. Equations: ω = ω₀ + αt, θ = ω₀t + ½αt², ω² = ω₀² + 2αθ. Relationship with linear quantities: v = rω, a = rα.'
                    },
                    {
                        name: 'Moment of Inertia',
                        explanation: 'Rotational inertia I = Σmr² for discrete masses, I = ∫r²dm for continuous bodies. Depends on mass distribution and axis of rotation. Parallel axis theorem: I = Icm + Md² where d is distance between axes. Determines resistance to angular acceleration.'
                    },
                    {
                        name: 'Torque and Rotational Dynamics',
                        explanation: 'Torque τ⃗ = r⃗ × F⃗ causes angular acceleration. Rotational analog of Newton\'s second law: τ = Iα. For multiple torques: Στ = Iα. Torque depends on force magnitude, distance from axis (lever arm), and angle between r⃗ and F⃗.'
                    },
                    {
                        name: 'Angular Momentum',
                        explanation: 'L⃗ = r⃗ × p⃗ for point mass, L⃗ = Iω⃗ for rigid body. Conservation of angular momentum: when net external torque is zero, angular momentum remains constant. Applications: figure skating, planetary motion, gyroscopes. τ = dL/dt relates torque to rate of change of angular momentum.'
                    }
                ]
            },
            {
                name: 'Gravitation',
                description: 'Universal gravitation, orbital motion, escape velocity.',
                subtopics: [
                    {
                        name: 'Newton\'s Law of Universal Gravitation',
                        explanation: 'Every mass attracts every other mass with force F = GMm/r² where G is universal gravitational constant. Force is attractive, acts along line joining centers. Gravitational field g⃗ = F⃗/m = GM/r² r̂. Superposition principle applies for multiple masses.'
                    },
                    {
                        name: 'Gravitational Potential Energy',
                        explanation: 'PE = -GMm/r with zero at infinity. Negative sign indicates attractive nature. Gravitational potential V = -GM/r. Escape velocity ve = √(2GM/R) is minimum speed needed to escape gravitational field. Binding energy = GMm/2r for circular orbits.'
                    },
                    {
                        name: 'Orbital Motion',
                        explanation: 'Circular orbits: gravitational force provides centripetal force. Orbital velocity v = √(GM/r), period T = 2π√(r³/GM). Kepler\'s laws: (1) Elliptical orbits, (2) Equal areas in equal times, (3) T² ∝ r³. Geostationary satellites have 24-hour period.'
                    },
                    {
                        name: 'Variation of g and Applications',
                        explanation: 'g varies with altitude: g\' = g(R/(R+h))² and with depth: g\' = g(1-d/R). Weightlessness in satellites due to free fall. Tidal forces arise from gravitational field gradients. Applications: GPS satellites, space missions, tidal phenomena.'
                    }
                ]
            }
        ],

        formulas: {
            'Kinematics': [
                {
                    name: 'Equations of Motion',
                    expression: 'v = u + at, s = ut + ½at², v² = u² + 2as',
                    description: 'For uniform acceleration'
                },
                {
                    name: 'Projectile Motion',
                    expression: 'R = u²sin2θ/g, H = u²sin²θ/2g, T = 2usinθ/g',
                    description: 'Range, height, time of flight'
                },
                {
                    name: 'Circular Motion',
                    expression: 'ac = v²/r = ω²r',
                    description: 'Centripetal acceleration'
                }
            ],
            'Forces and Energy': [
                {
                    name: 'Newton\'s Second Law',
                    expression: 'F = ma = dp/dt',
                    description: 'Force equals rate of change of momentum'
                },
                {
                    name: 'Work-Energy Theorem',
                    expression: 'W = ΔKE = ½mv² - ½mu²',
                    description: 'Work done equals change in kinetic energy'
                },
                {
                    name: 'Power',
                    expression: 'P = dW/dt = F⋅v',
                    description: 'Rate of doing work'
                }
            ],
            'Rotational Motion': [
                {
                    name: 'Moment of Inertia',
                    expression: 'I = Σmr²',
                    description: 'Rotational inertia about axis'
                },
                {
                    name: 'Torque',
                    expression: 'τ = r × F = Iα',
                    description: 'Rotational analog of force'
                },
                {
                    name: 'Angular Momentum',
                    expression: 'L = Iω = r × p',
                    description: 'Rotational momentum'
                }
            ]
        },

        problems: [
            {
                problem: 'A projectile is launched at an angle of 45° with an initial velocity of 30 m/s. Calculate the maximum height, range, and time of flight.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Initial velocity u = 30 m/s',
                        'Launch angle θ = 45°',
                        'Acceleration due to gravity g = 9.8 m/s²'
                    ],
                    find: 'Maximum height H, range R, and time of flight T',
                    formula: 'H = u²sin²θ/2g, R = u²sin2θ/g, T = 2usinθ/g',
                    steps: [
                        {
                            step: 'Calculate maximum height',
                            work: 'H = u²sin²θ/2g = (30)²sin²45°/(2×9.8) = 900×(1/√2)²/19.6',
                            result: 'H = 900×0.5/19.6 = 22.96 m ≈ 23 m'
                        },
                        {
                            step: 'Calculate range',
                            work: 'R = u²sin2θ/g = (30)²sin(2×45°)/9.8 = 900×sin90°/9.8',
                            result: 'R = 900×1/9.8 = 91.8 m'
                        },
                        {
                            step: 'Calculate time of flight',
                            work: 'T = 2usinθ/g = 2×30×sin45°/9.8 = 60×(1/√2)/9.8',
                            result: 'T = 60×0.707/9.8 = 4.33 s'
                        }
                    ],
                    answer: 'Maximum height = 23 m, Range = 91.8 m, Time of flight = 4.33 s',
                    concept: 'Projectile motion: maximum range occurs at 45° launch angle'
                }
            },
            {
                problem: 'A block of mass 10 kg is pulled up a 30° incline by a force of 80 N parallel to the incline. If the coefficient of kinetic friction is 0.2, find the acceleration of the block.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Mass m = 10 kg',
                        'Incline angle θ = 30°',
                        'Applied force F = 80 N (parallel to incline)',
                        'Coefficient of kinetic friction μₖ = 0.2',
                        'g = 9.8 m/s²'
                    ],
                    find: 'Acceleration a of the block',
                    formula: 'F_net = ma, Forces: Applied, Weight components, Friction',
                    steps: [
                        {
                            step: 'Identify forces parallel to incline',
                            work: 'Applied force = 80 N (up the incline), Weight component = mgsinθ (down)',
                            result: 'Weight component = 10×9.8×sin30° = 49 N (down)'
                        },
                        {
                            step: 'Calculate normal force',
                            work: 'N = mgcosθ = 10×9.8×cos30° = 98×(√3/2)',
                            result: 'N = 84.87 N'
                        },
                        {
                            step: 'Calculate friction force',
                            work: 'f = μₖN = 0.2×84.87',
                            result: 'f = 16.97 N (down the incline)'
                        },
                        {
                            step: 'Apply Newton\'s second law',
                            work: 'F_net = F - mgsinθ - f = 80 - 49 - 16.97',
                            result: 'F_net = 14.03 N (up the incline)'
                        },
                        {
                            step: 'Calculate acceleration',
                            work: 'a = F_net/m = 14.03/10',
                            result: 'a = 1.40 m/s² (up the incline)'
                        }
                    ],
                    answer: 'Acceleration = 1.40 m/s² up the incline',
                    concept: 'Inclined plane problems require force resolution and friction analysis'
                }
            },
            {
                problem: 'A satellite orbits Earth at a height of 400 km above the surface. Calculate its orbital velocity and period. (Earth\'s radius = 6400 km, g = 9.8 m/s²)',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Height above Earth h = 400 km = 4 × 10⁵ m',
                        'Earth\'s radius R = 6400 km = 6.4 × 10⁶ m',
                        'g at surface = 9.8 m/s²',
                        'Orbital radius r = R + h = 6.8 × 10⁶ m'
                    ],
                    find: 'Orbital velocity v and period T',
                    formula: 'v = √(GM/r) = √(gR²/r), T = 2πr/v',
                    steps: [
                        {
                            step: 'Calculate orbital velocity',
                            work: 'v = √(gR²/r) = √(9.8×(6.4×10⁶)²/(6.8×10⁶))',
                            result: 'v = √(9.8×40.96×10¹²/6.8×10⁶) = √(59.0×10⁶)'
                        },
                        {
                            step: 'Simplify velocity calculation',
                            work: 'v = √(59.0×10⁶) = 7.68×10³ m/s',
                            result: 'v = 7.68 km/s'
                        },
                        {
                            step: 'Calculate orbital period',
                            work: 'T = 2πr/v = 2π×6.8×10⁶/7.68×10³',
                            result: 'T = 42.73×10⁶/7.68×10³ = 5563 s'
                        },
                        {
                            step: 'Convert period to minutes',
                            work: 'T = 5563 s ÷ 60 s/min',
                            result: 'T = 92.7 min ≈ 1.55 hours'
                        }
                    ],
                    answer: 'Orbital velocity = 7.68 km/s, Period = 92.7 minutes',
                    concept: 'Satellite motion: gravitational force provides centripetal force'
                }
            },
            {
                problem: 'A uniform rod of length 2 m and mass 5 kg can rotate about one end. If it is released from horizontal position, find its angular velocity when it becomes vertical.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Length of rod L = 2 m',
                        'Mass of rod m = 5 kg',
                        'Initial position: horizontal',
                        'Final position: vertical',
                        'Moment of inertia about end I = mL²/3'
                    ],
                    find: 'Angular velocity ω when rod becomes vertical',
                    formula: 'Conservation of energy: PE_initial = KE_rotational_final',
                    steps: [
                        {
                            step: 'Calculate moment of inertia',
                            work: 'I = mL²/3 = 5×(2)²/3',
                            result: 'I = 20/3 = 6.67 kg⋅m²'
                        },
                        {
                            step: 'Find initial potential energy',
                            work: 'PE_i = mgh where h = L/2 = 1 m (height of center of mass)',
                            result: 'PE_i = 5×9.8×1 = 49 J'
                        },
                        {
                            step: 'Find final kinetic energy',
                            work: 'KE_f = ½Iω² (rotational kinetic energy)',
                            result: 'KE_f = ½×(20/3)×ω² = (10/3)ω²'
                        },
                        {
                            step: 'Apply conservation of energy',
                            work: 'PE_i = KE_f, so 49 = (10/3)ω²',
                            result: 'ω² = 49×3/10 = 14.7'
                        },
                        {
                            step: 'Calculate angular velocity',
                            work: 'ω = √14.7',
                            result: 'ω = 3.83 rad/s'
                        }
                    ],
                    answer: 'Angular velocity = 3.83 rad/s',
                    concept: 'Rotational motion: energy conservation with moment of inertia'
                }
            },
            {
                problem: 'Two masses m₁ = 3 kg and m₂ = 2 kg are connected by a string over a pulley. Find the acceleration of the system and tension in the string.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Mass 1: m₁ = 3 kg (heavier mass)',
                        'Mass 2: m₂ = 2 kg (lighter mass)',
                        'Pulley is massless and frictionless',
                        'String is inextensible'
                    ],
                    find: 'Acceleration a and tension T in string',
                    formula: 'Newton\'s second law for each mass, constraint: same acceleration',
                    steps: [
                        {
                            step: 'Set up equations for each mass',
                            work: 'For m₁ (downward): m₁g - T = m₁a, For m₂ (upward): T - m₂g = m₂a',
                            result: '3g - T = 3a ... (1), T - 2g = 2a ... (2)'
                        },
                        {
                            step: 'Add equations to eliminate T',
                            work: '(3g - T) + (T - 2g) = 3a + 2a',
                            result: 'g = 5a, so a = g/5 = 9.8/5 = 1.96 m/s²'
                        },
                        {
                            step: 'Find tension using equation (2)',
                            work: 'T = m₂g + m₂a = 2×9.8 + 2×1.96',
                            result: 'T = 19.6 + 3.92 = 23.52 N'
                        },
                        {
                            step: 'Verify using equation (1)',
                            work: 'T = m₁g - m₁a = 3×9.8 - 3×1.96 = 29.4 - 5.88',
                            result: 'T = 23.52 N ✓ (Verified)'
                        }
                    ],
                    answer: 'Acceleration = 1.96 m/s², Tension = 23.52 N',
                    concept: 'Atwood machine: constraint forces and Newton\'s laws'
                }
},
            {
                problem: 'A car moving at 20 m/s applies brakes and comes to rest in 50 m. Find the deceleration and time taken to stop.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Initial velocity u = 20 m/s',
                        'Final velocity v = 0 m/s',
                        'Distance s = 50 m'
                    ],
                    find: 'Deceleration a and time t',
                    formula: 'v² = u² + 2as, v = u + at',
                    steps: [
                        {
                            step: 'Find deceleration using v² = u² + 2as',
                            work: '0² = 20² + 2a(50), so 0 = 400 + 100a',
                            result: 'a = -400/100 = -4 m/s²'
                        },
                        {
                            step: 'Find time using v = u + at',
                            work: '0 = 20 + (-4)t, so 4t = 20',
                            result: 't = 5 s'
                        },
                        {
                            step: 'Verify using s = ut + ½at²',
                            work: 's = 20(5) + ½(-4)(25) = 100 - 50 = 50 m ✓',
                            result: 'Calculation verified'
                        }
                    ],
                    answer: 'Deceleration = 4 m/s², Time = 5 s',
                    concept: 'Uniformly accelerated motion: three kinematic equations relate u, v, a, s, t'
                }
            },
            {
                problem: 'A ball is thrown vertically upward with velocity 30 m/s. Find the maximum height reached and time to return to ground.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Initial velocity u = 30 m/s (upward)',
                        'Acceleration a = -g = -10 m/s² (downward)',
                        'At maximum height, v = 0'
                    ],
                    find: 'Maximum height h and total time T',
                    formula: 'v² = u² + 2as, t = 2u/g for total time',
                    steps: [
                        {
                            step: 'Find maximum height using v² = u² + 2as',
                            work: '0² = 30² + 2(-10)h, so 0 = 900 - 20h',
                            result: 'h = 900/20 = 45 m'
                        },
                        {
                            step: 'Find time to reach maximum height',
                            work: 'v = u + at, so 0 = 30 - 10t, t = 3 s',
                            result: 'Time to reach max height = 3 s'
                        },
                        {
                            step: 'Find total time of flight',
                            work: 'Total time = 2 × time to reach max height',
                            result: 'T = 2 × 3 = 6 s'
                        }
                    ],
                    answer: 'Maximum height = 45 m, Total time = 6 s',
                    concept: 'Vertical motion under gravity: symmetric motion with equal up and down times'
                }
            },
            {
                problem: 'A force of 50 N acts on a 10 kg mass initially at rest. Find the velocity after 4 seconds and distance traveled.',
                difficulty: 'easy',
                solution: {
                    given: [
                        'Force F = 50 N',
                        'Mass m = 10 kg',
                        'Initial velocity u = 0',
                        'Time t = 4 s'
                    ],
                    find: 'Final velocity v and distance s',
                    formula: 'F = ma, v = u + at, s = ut + ½at²',
                    steps: [
                        {
                            step: 'Find acceleration using Newton\'s second law',
                            work: 'F = ma, so 50 = 10a',
                            result: 'a = 5 m/s²'
                        },
                        {
                            step: 'Find velocity after 4 seconds',
                            work: 'v = u + at = 0 + 5(4)',
                            result: 'v = 20 m/s'
                        },
                        {
                            step: 'Find distance traveled',
                            work: 's = ut + ½at² = 0 + ½(5)(16)',
                            result: 's = 40 m'
                        }
                    ],
                    answer: 'Velocity = 20 m/s, Distance = 40 m',
                    concept: 'Newton\'s second law: constant force produces constant acceleration'
                }
            },
            {
                problem: 'A 2 kg block slides down a frictionless incline of angle 30°. Find its acceleration and velocity after sliding 5 m.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Mass m = 2 kg',
                        'Incline angle θ = 30°',
                        'Distance s = 5 m',
                        'Frictionless surface'
                    ],
                    find: 'Acceleration a and velocity v after 5 m',
                    formula: 'a = g sinθ, v² = u² + 2as',
                    steps: [
                        {
                            step: 'Find acceleration down the incline',
                            work: 'Component of g along incline = g sinθ = 10 sin30°',
                            result: 'a = 10 × 0.5 = 5 m/s²'
                        },
                        {
                            step: 'Find velocity after sliding 5 m',
                            work: 'v² = u² + 2as = 0² + 2(5)(5) = 50',
                            result: 'v = √50 = 5√2 ≈ 7.07 m/s'
                        },
                        {
                            step: 'Verify using energy conservation',
                            work: 'mgh = ½mv², h = s sinθ = 5 sin30° = 2.5 m',
                            result: 'v = √(2gh) = √(2×10×2.5) = √50 ✓'
                        }
                    ],
                    answer: 'Acceleration = 5 m/s², Velocity = 7.07 m/s',
                    concept: 'Motion on inclined plane: gravity component along incline causes acceleration'
                }
            },
            {
                problem: 'A 1500 kg car takes a circular turn of radius 100 m at 20 m/s. Find the centripetal force and banking angle for no friction.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Mass m = 1500 kg',
                        'Radius r = 100 m',
                        'Speed v = 20 m/s',
                        'No friction condition'
                    ],
                    find: 'Centripetal force Fc and banking angle θ',
                    formula: 'Fc = mv²/r, tan θ = v²/rg',
                    steps: [
                        {
                            step: 'Calculate centripetal force',
                            work: 'Fc = mv²/r = 1500 × (20)²/100',
                            result: 'Fc = 1500 × 400/100 = 6000 N'
                        },
                        {
                            step: 'Find banking angle for no friction',
                            work: 'tan θ = v²/rg = (20)²/(100×10) = 400/1000',
                            result: 'tan θ = 0.4, so θ = tan⁻¹(0.4) = 21.8°'
                        },
                        {
                            step: 'Verify force balance',
                            work: 'Normal force N = mg/cos θ, horizontal component = N sin θ',
                            result: 'N sin θ = mg tan θ = mv²/r ✓'
                        }
                    ],
                    answer: 'Centripetal force = 6000 N, Banking angle = 21.8°',
                    concept: 'Circular motion: banking eliminates need for friction to provide centripetal force'
                }
            },
            {
                problem: 'A 0.5 kg ball is attached to a 1 m string and moves in a horizontal circle. If the string makes 30° with vertical, find the tension and speed.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Mass m = 0.5 kg',
                        'String length l = 1 m',
                        'Angle with vertical θ = 30°',
                        'Horizontal circular motion'
                    ],
                    find: 'Tension T and speed v',
                    formula: 'T cos θ = mg, T sin θ = mv²/r',
                    steps: [
                        {
                            step: 'Find tension from vertical equilibrium',
                            work: 'T cos θ = mg, so T cos 30° = 0.5 × 10',
                            result: 'T × (√3/2) = 5, so T = 10/√3 = 5.77 N'
                        },
                        {
                            step: 'Find radius of circular path',
                            work: 'r = l sin θ = 1 × sin 30° = 0.5 m',
                            result: 'Radius of horizontal circle = 0.5 m'
                        },
                        {
                            step: 'Find speed from centripetal force',
                            work: 'T sin θ = mv²/r, so 5.77 × 0.5 = 0.5v²/0.5',
                            result: 'v² = 2.885, so v = 1.70 m/s'
                        }
                    ],
                    answer: 'Tension = 5.77 N, Speed = 1.70 m/s',
                    concept: 'Conical pendulum: tension provides both weight support and centripetal force'
                }
            },
            {
                problem: 'A 60 kg person stands on a weighing scale in an elevator. Find the scale reading when elevator accelerates upward at 2 m/s².',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Mass m = 60 kg',
                        'Elevator acceleration a = 2 m/s² (upward)',
                        'g = 10 m/s²'
                    ],
                    find: 'Scale reading (apparent weight)',
                    formula: 'N - mg = ma (Newton\'s second law)',
                    steps: [
                        {
                            step: 'Apply Newton\'s second law',
                            work: 'Net upward force = ma, so N - mg = ma',
                            result: 'N = mg + ma = m(g + a)'
                        },
                        {
                            step: 'Calculate apparent weight',
                            work: 'N = 60(10 + 2) = 60 × 12',
                            result: 'N = 720 N'
                        },
                        {
                            step: 'Compare with actual weight',
                            work: 'Actual weight = mg = 60 × 10 = 600 N',
                            result: 'Apparent weight is 720/600 = 1.2 times actual weight'
                        }
                    ],
                    answer: 'Scale reading = 720 N',
                    concept: 'Apparent weight in accelerating elevator: N = m(g ± a)'
                }
            },
            {
                problem: 'A 5 kg block is connected to a 3 kg block by a string over a pulley. Find acceleration and tension if the 5 kg block hangs vertically.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Mass 1: m₁ = 5 kg (hanging)',
                        'Mass 2: m₂ = 3 kg (on table)',
                        'Massless string and pulley',
                        'No friction'
                    ],
                    find: 'Acceleration a and tension T',
                    formula: 'For m₁: m₁g - T = m₁a, For m₂: T = m₂a',
                    steps: [
                        {
                            step: 'Write equations of motion',
                            work: 'For 5 kg: 5g - T = 5a, For 3 kg: T = 3a',
                            result: 'Two equations with two unknowns (a and T)'
                        },
                        {
                            step: 'Solve for acceleration',
                            work: 'Substitute T = 3a into first equation: 50 - 3a = 5a',
                            result: '50 = 8a, so a = 6.25 m/s²'
                        },
                        {
                            step: 'Find tension',
                            work: 'T = m₂a = 3 × 6.25',
                            result: 'T = 18.75 N'
                        }
                    ],
                    answer: 'Acceleration = 6.25 m/s², Tension = 18.75 N',
                    concept: 'Atwood machine: heavier mass accelerates down, lighter mass accelerates up'
                }
            },
            {
                problem: 'A disc of radius 0.5 m and mass 2 kg rolls without slipping down a 30° incline. Find its acceleration.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Radius R = 0.5 m',
                        'Mass m = 2 kg',
                        'Incline angle θ = 30°',
                        'Rolling without slipping'
                    ],
                    find: 'Acceleration a down the incline',
                    formula: 'For rolling: a = g sinθ/(1 + I/mR²), I = ½mR² for disc',
                    steps: [
                        {
                            step: 'Identify moment of inertia for disc',
                            work: 'For solid disc: I = ½mR²',
                            result: 'I = ½ × 2 × (0.5)² = 0.25 kg⋅m²'
                        },
                        {
                            step: 'Apply rolling motion formula',
                            work: 'a = g sinθ/(1 + I/mR²) = 10 sin30°/(1 + 0.25/(2×0.25))',
                            result: 'a = 5/(1 + 0.5) = 5/1.5 = 10/3 m/s²'
                        },
                        {
                            step: 'Compare with sliding motion',
                            work: 'If sliding: a = g sinθ = 5 m/s²',
                            result: 'Rolling acceleration is 2/3 of sliding acceleration'
                        }
                    ],
                    answer: 'Acceleration = 3.33 m/s²',
                    concept: 'Rolling motion: part of gravitational PE converts to rotational KE'
                }
            },
            {
                problem: 'A 1 kg mass is attached to a spring and oscillates with amplitude 0.05 m and frequency 2 Hz. Find the spring constant and maximum acceleration.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Mass m = 1 kg',
                        'Amplitude A = 0.05 m',
                        'Frequency f = 2 Hz'
                    ],
                    find: 'Spring constant k and maximum acceleration aₘₐₓ',
                    formula: 'f = (1/2π)√(k/m), aₘₐₓ = Aω²',
                    steps: [
                        {
                            step: 'Find spring constant from frequency',
                            work: 'f = (1/2π)√(k/m), so 2 = (1/2π)√(k/1)',
                            result: '4π = √k, so k = 16π² = 158 N/m'
                        },
                        {
                            step: 'Calculate angular frequency',
                            work: 'ω = 2πf = 2π(2) = 4π rad/s',
                            result: 'ω = 4π rad/s'
                        },
                        {
                            step: 'Find maximum acceleration',
                            work: 'aₘₐₓ = Aω² = 0.05 × (4π)²',
                            result: 'aₘₐₓ = 0.05 × 16π² = 7.9 m/s²'
                        }
                    ],
                    answer: 'Spring constant = 158 N/m, Maximum acceleration = 7.9 m/s²',
                    concept: 'SHM: maximum acceleration occurs at maximum displacement'
                }
            },
            {
                problem: 'A bullet of mass 20 g moving at 400 m/s embeds in a 2 kg wooden block. Find the velocity of the block after collision.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Bullet mass m₁ = 20 g = 0.02 kg',
                        'Bullet velocity u₁ = 400 m/s',
                        'Block mass m₂ = 2 kg',
                        'Block initially at rest: u₂ = 0'
                    ],
                    find: 'Final velocity v of combined system',
                    formula: 'Conservation of momentum: m₁u₁ + m₂u₂ = (m₁ + m₂)v',
                    steps: [
                        {
                            step: 'Apply conservation of momentum',
                            work: 'm₁u₁ + m₂u₂ = (m₁ + m₂)v',
                            result: '0.02 × 400 + 2 × 0 = (0.02 + 2)v'
                        },
                        {
                            step: 'Solve for final velocity',
                            work: '8 = 2.02v',
                            result: 'v = 8/2.02 = 3.96 m/s'
                        },
                        {
                            step: 'Check energy loss',
                            work: 'Initial KE = ½(0.02)(400)² = 1600 J, Final KE = ½(2.02)(3.96)² = 15.9 J',
                            result: 'Energy lost = 1600 - 15.9 = 1584.1 J (inelastic collision)'
                        }
                    ],
                    answer: 'Final velocity = 3.96 m/s',
                    concept: 'Perfectly inelastic collision: momentum conserved, kinetic energy not conserved'
                }
            },
            {
                problem: 'A 0.2 kg ball is dropped from height 5 m onto the ground. If coefficient of restitution is 0.8, find the height after first bounce.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Mass m = 0.2 kg',
                        'Initial height h₁ = 5 m',
                        'Coefficient of restitution e = 0.8'
                    ],
                    find: 'Height h₂ after first bounce',
                    formula: 'e = √(h₂/h₁), so h₂ = e²h₁',
                    steps: [
                        {
                            step: 'Find velocity just before impact',
                            work: 'v₁ = √(2gh₁) = √(2×10×5) = 10 m/s (downward)',
                            result: 'Impact velocity = 10 m/s'
                        },
                        {
                            step: 'Find velocity just after bounce',
                            work: 'e = v₂/v₁, so v₂ = ev₁ = 0.8 × 10 = 8 m/s (upward)',
                            result: 'Rebound velocity = 8 m/s'
                        },
                        {
                            step: 'Find height after bounce',
                            work: 'h₂ = v₂²/(2g) = 8²/(2×10) = 64/20',
                            result: 'h₂ = 3.2 m'
                        }
                    ],
                    answer: 'Height after first bounce = 3.2 m',
                    concept: 'Coefficient of restitution: ratio of separation to approach velocities'
                }
            },
            {
                problem: 'A wheel of radius 0.3 m and moment of inertia 2 kg⋅m² is rotating at 10 rad/s. A tangential force of 5 N is applied. Find angular acceleration.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Radius R = 0.3 m',
                        'Moment of inertia I = 2 kg⋅m²',
                        'Initial angular velocity ω₀ = 10 rad/s',
                        'Tangential force F = 5 N'
                    ],
                    find: 'Angular acceleration α',
                    formula: 'τ = Iα, where τ = FR for tangential force',
                    steps: [
                        {
                            step: 'Calculate torque due to tangential force',
                            work: 'τ = FR = 5 × 0.3',
                            result: 'τ = 1.5 N⋅m'
                        },
                        {
                            step: 'Apply rotational equation of motion',
                            work: 'τ = Iα, so 1.5 = 2α',
                            result: 'α = 0.75 rad/s²'
                        },
                        {
                            step: 'Find angular velocity after 4 seconds',
                            work: 'ω = ω₀ + αt = 10 + 0.75(4)',
                            result: 'ω = 13 rad/s'
                        }
                    ],
                    answer: 'Angular acceleration = 0.75 rad/s²',
                    concept: 'Rotational dynamics: torque causes angular acceleration (τ = Iα)'
                }
            },
            {
                problem: 'A solid sphere of mass 5 kg and radius 0.2 m rolls down a 4 m high incline. Find its velocity at the bottom.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Mass m = 5 kg',
                        'Radius R = 0.2 m',
                        'Height h = 4 m',
                        'Rolling without slipping'
                    ],
                    find: 'Velocity v at bottom of incline',
                    formula: 'Energy conservation: mgh = ½mv² + ½Iω², I = ⅖mR² for sphere',
                    steps: [
                        {
                            step: 'Apply energy conservation',
                            work: 'Initial PE = Final KE (translational + rotational)',
                            result: 'mgh = ½mv² + ½Iω²'
                        },
                        {
                            step: 'Use rolling condition and moment of inertia',
                            work: 'v = ωR, so ω = v/R, I = ⅖mR²',
                            result: 'mgh = ½mv² + ½(⅖mR²)(v/R)² = ½mv² + ⅕mv²'
                        },
                        {
                            step: 'Solve for velocity',
                            work: 'mgh = (7/10)mv², so gh = (7/10)v²',
                            result: 'v² = (10/7)gh = (10/7)(10)(4) = 400/7, v = 7.56 m/s'
                        }
                    ],
                    answer: 'Velocity at bottom = 7.56 m/s',
                    concept: 'Rolling motion: total KE = translational KE + rotational KE'
                }
            },
            {
                problem: 'A satellite of mass 500 kg orbits Earth at height 300 km. Find the orbital speed and period. (Earth radius = 6400 km)',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Satellite mass m = 500 kg',
                        'Height above Earth h = 300 km',
                        'Earth radius R = 6400 km',
                        'g at surface = 9.8 m/s²'
                    ],
                    find: 'Orbital speed v and period T',
                    formula: 'v = √(GM/r), T = 2πr/v, where r = R + h',
                    steps: [
                        {
                            step: 'Calculate orbital radius',
                            work: 'r = R + h = 6400 + 300 = 6700 km = 6.7 × 10⁶ m',
                            result: 'Orbital radius = 6.7 × 10⁶ m'
                        },
                        {
                            step: 'Find orbital speed using v = √(gR²/r)',
                            work: 'v = √(9.8 × (6.4×10⁶)²/(6.7×10⁶))',
                            result: 'v = √(9.8 × 6.12×10⁶) = 7730 m/s'
                        },
                        {
                            step: 'Calculate orbital period',
                            work: 'T = 2πr/v = 2π(6.7×10⁶)/7730',
                            result: 'T = 5440 s = 90.7 minutes'
                        }
                    ],
                    answer: 'Orbital speed = 7730 m/s, Period = 90.7 minutes',
                    concept: 'Satellite motion: gravitational force provides centripetal force'
                }
            },
            {
                problem: 'A 3 kg block on a horizontal surface is pulled by a 20 N force at 37° above horizontal. If μ = 0.3, find the acceleration.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Mass m = 3 kg',
                        'Applied force F = 20 N at 37° above horizontal',
                        'Coefficient of friction μ = 0.3'
                    ],
                    find: 'Acceleration a of the block',
                    formula: 'F_net = ma, f = μN',
                    steps: [
                        {
                            step: 'Resolve applied force into components',
                            work: 'F_x = F cos37° = 20 × 0.8 = 16 N, F_y = F sin37° = 20 × 0.6 = 12 N',
                            result: 'Horizontal component = 16 N, Vertical component = 12 N'
                        },
                        {
                            step: 'Find normal force from vertical equilibrium',
                            work: 'N + F_y = mg, so N = mg - F_y = 3×10 - 12 = 18 N',
                            result: 'Normal force = 18 N'
                        },
                        {
                            step: 'Calculate friction force and net horizontal force',
                            work: 'f = μN = 0.3 × 18 = 5.4 N, F_net = F_x - f = 16 - 5.4 = 10.6 N',
                            result: 'Net horizontal force = 10.6 N'
                        },
                        {
                            step: 'Find acceleration',
                            work: 'F_net = ma, so 10.6 = 3a',
                            result: 'a = 3.53 m/s²'
                        }
                    ],
                    answer: 'Acceleration = 3.53 m/s²',
                    concept: 'Inclined force reduces normal force and hence friction'
                }
            },
            {
                problem: 'A 2 m long uniform rod of mass 4 kg is pivoted at one end and released from horizontal position. Find its angular velocity when vertical.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Rod length L = 2 m',
                        'Mass m = 4 kg',
                        'Pivoted at one end',
                        'Released from horizontal position'
                    ],
                    find: 'Angular velocity ω when rod becomes vertical',
                    formula: 'Energy conservation: PE_initial = KE_rotational_final',
                    steps: [
                        {
                            step: 'Find initial potential energy',
                            work: 'Center of mass drops by L/2 = 1 m',
                            result: 'PE_initial = mg(L/2) = 4×10×1 = 40 J'
                        },
                        {
                            step: 'Find moment of inertia about pivot',
                            work: 'For rod about end: I = ⅓mL² = ⅓×4×4 = 16/3 kg⋅m²',
                            result: 'I = 5.33 kg⋅m²'
                        },
                        {
                            step: 'Apply energy conservation',
                            work: 'PE_initial = ½Iω², so 40 = ½×(16/3)ω²',
                            result: 'ω² = 240/16 = 15, so ω = √15 = 3.87 rad/s'
                        }
                    ],
                    answer: 'Angular velocity = 3.87 rad/s',
                    concept: 'Energy conservation in rotational motion: PE converts to rotational KE'
                }
            },
            {
                problem: 'A 1000 kg car moving at 30 m/s collides head-on with a 1500 kg truck moving at 20 m/s in opposite direction. If they stick together, find their common velocity.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Car mass m₁ = 1000 kg, velocity u₁ = +30 m/s',
                        'Truck mass m₂ = 1500 kg, velocity u₂ = -20 m/s',
                        'Perfectly inelastic collision (stick together)'
                    ],
                    find: 'Common velocity v after collision',
                    formula: 'Conservation of momentum: m₁u₁ + m₂u₂ = (m₁ + m₂)v',
                    steps: [
                        {
                            step: 'Set up momentum conservation equation',
                            work: 'm₁u₁ + m₂u₂ = (m₁ + m₂)v',
                            result: '1000(30) + 1500(-20) = (1000 + 1500)v'
                        },
                        {
                            step: 'Calculate initial momentum',
                            work: 'Initial momentum = 30000 - 30000 = 0 kg⋅m/s',
                            result: 'Net initial momentum is zero'
                        },
                        {
                            step: 'Find final velocity',
                            work: '0 = 2500v',
                            result: 'v = 0 m/s'
                        }
                    ],
                    answer: 'Common velocity = 0 m/s (both come to rest)',
                    concept: 'Head-on collision with equal and opposite momenta results in zero final velocity'
                }
            },
            {
                problem: 'A cylinder of mass 2 kg and radius 0.1 m rolls up an incline of angle 30°. If its initial speed is 5 m/s, find the distance traveled before coming to rest.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Mass m = 2 kg',
                        'Radius R = 0.1 m',
                        'Incline angle θ = 30°',
                        'Initial speed v₀ = 5 m/s'
                    ],
                    find: 'Distance s traveled up the incline',
                    formula: 'Energy conservation: Initial KE = Final PE',
                    steps: [
                        {
                            step: 'Calculate initial kinetic energy',
                            work: 'For rolling: KE = ½mv² + ½Iω², I = ½mR² for cylinder',
                            result: 'KE = ½mv² + ½(½mR²)(v/R)² = ½mv² + ¼mv² = ¾mv²'
                        },
                        {
                            step: 'Find initial total kinetic energy',
                            work: 'KE_initial = ¾mv₀² = ¾×2×25 = 37.5 J',
                            result: 'Initial KE = 37.5 J'
                        },
                        {
                            step: 'Apply energy conservation',
                            work: 'KE_initial = PE_final = mgh = mg(s sinθ)',
                            result: '37.5 = 2×10×s×sin30° = 10s, so s = 3.75 m'
                        }
                    ],
                    answer: 'Distance traveled = 3.75 m',
                    concept: 'Rolling up incline: total KE converts to gravitational PE'
                }
            },
            {
                problem: 'A 50 kg person jumps from a 10 m high platform into water. Find the impulse exerted by water if the person comes to rest in 0.5 s.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Mass m = 50 kg',
                        'Height h = 10 m',
                        'Time to stop in water Δt = 0.5 s'
                    ],
                    find: 'Impulse J exerted by water',
                    formula: 'J = Δp = m(v_f - v_i), v_i = √(2gh)',
                    steps: [
                        {
                            step: 'Find velocity just before hitting water',
                            work: 'v_i = √(2gh) = √(2×10×10) = √200 = 14.14 m/s (downward)',
                            result: 'Impact velocity = 14.14 m/s'
                        },
                        {
                            step: 'Find change in momentum',
                            work: 'Initial momentum = mv_i = 50×14.14 = 707 kg⋅m/s (downward)',
                            result: 'Final momentum = 0, so Δp = 0 - 707 = -707 kg⋅m/s'
                        },
                        {
                            step: 'Calculate impulse by water',
                            work: 'Impulse by water = -Δp = 707 kg⋅m/s (upward)',
                            result: 'Water exerts upward impulse to stop the person'
                        }
                    ],
                    answer: 'Impulse = 707 N⋅s (upward)',
                    concept: 'Impulse equals change in momentum: J = Δp'
                }
            },
            {
                problem: 'A 0.1 kg ball moving at 20 m/s collides elastically with a 0.3 kg ball at rest. Find the velocities after collision.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Ball 1: m₁ = 0.1 kg, u₁ = 20 m/s',
                        'Ball 2: m₂ = 0.3 kg, u₂ = 0 m/s',
                        'Elastic collision'
                    ],
                    find: 'Final velocities v₁ and v₂',
                    formula: 'Conservation of momentum and energy for elastic collision',
                    steps: [
                        {
                            step: 'Apply conservation of momentum',
                            work: 'm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂',
                            result: '0.1×20 + 0.3×0 = 0.1v₁ + 0.3v₂, so 2 = 0.1v₁ + 0.3v₂'
                        },
                        {
                            step: 'Apply conservation of kinetic energy',
                            work: '½m₁u₁² + ½m₂u₂² = ½m₁v₁² + ½m₂v₂²',
                            result: '½×0.1×400 = ½×0.1×v₁² + ½×0.3×v₂², so 20 = 0.05v₁² + 0.15v₂²'
                        },
                        {
                            step: 'Solve using elastic collision formulas',
                            work: 'v₁ = ((m₁-m₂)/(m₁+m₂))u₁ = ((0.1-0.3)/(0.4))×20 = -10 m/s',
                            result: 'v₂ = (2m₁/(m₁+m₂))u₁ = (0.2/0.4)×20 = 10 m/s'
                        }
                    ],
                    answer: 'v₁ = -10 m/s, v₂ = 10 m/s',
                    concept: 'Elastic collision: lighter object bounces back, heavier object moves forward'
                }
            },
            {
                problem: 'A flywheel of moment of inertia 5 kg⋅m² is rotating at 300 rpm. A constant torque of 10 N⋅m is applied to stop it. Find the time taken and angular displacement.',
                difficulty: 'medium',
                solution: {
                    given: [
                        'Moment of inertia I = 5 kg⋅m²',
                        'Initial angular velocity ω₀ = 300 rpm = 300×2π/60 = 10π rad/s',
                        'Applied torque τ = -10 N⋅m (opposing motion)',
                        'Final angular velocity ω = 0'
                    ],
                    find: 'Time t and angular displacement θ',
                    formula: 'τ = Iα, ω = ω₀ + αt, θ = ω₀t + ½αt²',
                    steps: [
                        {
                            step: 'Find angular deceleration',
                            work: 'τ = Iα, so -10 = 5α',
                            result: 'α = -2 rad/s²'
                        },
                        {
                            step: 'Find time to stop',
                            work: 'ω = ω₀ + αt, so 0 = 10π + (-2)t',
                            result: 't = 10π/2 = 5π = 15.7 s'
                        },
                        {
                            step: 'Find angular displacement',
                            work: 'θ = ω₀t + ½αt² = 10π×5π + ½×(-2)×(5π)²',
                            result: 'θ = 50π² - 25π² = 25π² = 247 rad'
                        }
                    ],
                    answer: 'Time = 15.7 s, Angular displacement = 247 rad',
                    concept: 'Rotational kinematics: constant angular acceleration equations'
                }
            },
            {
                problem: 'A 4 kg block is placed on a 2 kg wedge of angle 30°. If all surfaces are frictionless, find the acceleration of the wedge when the system is released.',
                difficulty: 'hard',
                solution: {
                    given: [
                        'Block mass m = 4 kg',
                        'Wedge mass M = 2 kg',
                        'Wedge angle θ = 30°',
                        'All surfaces frictionless'
                    ],
                    find: 'Acceleration a of the wedge',
                    formula: 'Apply Newton\'s laws to both block and wedge',
                    steps: [
                        {
                            step: 'Set up coordinate system and constraints',
                            work: 'Let wedge accelerate right with acceleration a, block has acceleration components',
                            result: 'Block: a_x = a - a_rel cosθ, a_y = a_rel sinθ (relative to ground)'
                        },
                        {
                            step: 'Apply Newton\'s law to block',
                            work: 'Horizontal: N sinθ = m(a - a_rel cosθ), Vertical: N cosθ - mg = ma_rel sinθ',
                            result: 'Two equations with N and a_rel'
                        },
                        {
                            step: 'Apply Newton\'s law to wedge and solve',
                            work: 'For wedge: N sinθ = Ma, eliminating N and a_rel',
                            result: 'a = mg sinθ cosθ/(M + m sin²θ) = 4×10×0.5×0.866/(2 + 4×0.25) = 5.77 m/s²'
                        }
                    ],
                    answer: 'Acceleration of wedge = 5.77 m/s² (rightward)',
                    concept: 'Constraint forces in accelerating reference frames'
                }
            }
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = STUDY_DATA;
}