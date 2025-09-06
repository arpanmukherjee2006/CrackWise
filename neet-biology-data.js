// Comprehensive NEET Biology Data
const NEET_BIOLOGY_DATA = {
    "molecular_basis_of_inheritance": {
        "title": "Molecular Basis of Inheritance",
        "weightage": "7–10%",
        "introduction": "This chapter explores the fundamental principles of how genetic information is stored, replicated, and expressed in living organisms. It covers the structure of DNA and RNA, DNA replication, transcription, translation, genetic code, gene regulation, and the Human Genome Project. A thorough understanding of these concepts is crucial for NEET, as it forms the basis for genetics, biotechnology, and evolution.",

        "topics": [
            {
                "name": "The DNA",
                "description": "Discovery and structure of the genetic material.",
                "subtopics": [
                    {
                        "name": "The Search for Genetic Material",
                        "explanation": "Key experiments: Griffith's transforming principle (1928) showed genetic material could be transferred. Avery, MacLeod, and McCarty (1944) identified DNA as the transforming substance. Hershey-Chase experiment (1952) confirmed DNA is the genetic material in bacteriophages."
                    },
                    {
                        "name": "Structure of DNA",
                        "explanation": "Watson and Crick (1953) proposed the double helix model based on Chargaff's rules (A=T, G=C) and X-ray diffraction data from Franklin and Wilkins. DNA is a double-stranded, antiparallel helix with sugar-phosphate backbones and nitrogenous bases (A, T, G, C) paired inward via hydrogen bonds."
                    },
                    {
                        "name": "Packaging of DNA",
                        "explanation": "In eukaryotes, DNA is packaged with histone proteins (H1, H2A, H2B, H3, H4) to form nucleosomes (beads-on-a-string). These coil to form chromatin fibers, which further condense into chromosomes during cell division."
                    }
                ]
            },
            {
                "name": "DNA Replication & Repair",
                "description": "The process of copying DNA and maintaining its integrity.",
                "subtopics": [
                    {
                        "name": "The Central Dogma",
                        "explanation": "The flow of genetic information: DNA → RNA → Protein. Proposed by Francis Crick. Some viruses (retroviruses) use reverse transcription (RNA → DNA)."
                    },
                    {
                        "name": "DNA Replication",
                        "explanation": "The semi-conservative process (proven by Meselson & Stahl) where each strand acts as a template for a new strand. It is semi-discontinuous: continuous on the leading strand and discontinuous (Okazaki fragments) on the lagging strand."
                    },
                    {
                        "name": "The Machinery of Replication",
                        "explanation": "Enzymes involved: Helicase (unwinds DNA), Topoisomerase (relieves supercoiling), SSBPs (stabilize strands), Primase (synthesizes RNA primer), DNA Polymerase III (main synthesis enzyme), DNA Polymerase I (removes primer, fills gaps), DNA Ligase (seals nicks)."
                    }
                ]
            }
        ],

        "key_concepts": {
            "DNA Structure & Properties": [
                {
                    "name": "Chargaff's Rules",
                    "description": "In double-stranded DNA, the amount of Adenine equals Thymine (A=T) and Guanine equals Cytosine (G=C). Therefore, the purine-to-pyrimidine ratio is 1:1 ([A+G] = [T+C])."
                },
                {
                    "name": "DNA vs RNA",
                    "description": "DNA: Double-stranded, deoxyribose sugar, bases A,T,G,C, stable. RNA: Usually single-stranded, ribose sugar, bases A,U,G,C, less stable."
                }
            ]
        },

        "problems": [
            {
                "problem": "In a DNA molecule, the ratio of purines to pyrimidines is found to be 1:1.2. Is this consistent with Chargaff's rules? Explain.",
                "difficulty": "easy",
                "solution": {
                    "given": ["Purine:Pyrimidine ratio = 1:1.2"],
                    "find": "Consistency with Chargaff's rules",
                    "principle": "Chargaff's rules state that in double-stranded DNA, the amount of adenine equals thymine (A=T) and guanine equals cytosine (G=C), leading to purines (A+G) = pyrimidines (T+C), i.e., a 1:1 ratio.",
                    "steps": [
                        {
                            "step": "Analyze the given ratio",
                            "work": "A ratio of 1:1.2 means purines ≠ pyrimidines",
                            "result": "This violates Chargaff's rules"
                        },
                        {
                            "step": "Possible explanations",
                            "work": "This could indicate single-stranded DNA, damaged DNA, or measurement error. Double-stranded DNA must have purine:pyrimidine = 1:1.",
                            "result": "Not consistent with Chargaff's rules"
                        }
                    ],
                    "answer": "No, this is not consistent. Chargaff's rules require a 1:1 ratio of purines to pyrimidines in double-stranded DNA.",
                    "concept": "Chargaff's rules and DNA structure"
                }
            },
            {
                "problem": "A sample of DNA has 15% adenine. Calculate the percentages of the other three bases.",
                "difficulty": "easy",
                "solution": {
                    "given": ["% Adenine = 15%"],
                    "find": ["% Thymine", "% Guanine", "% Cytosine"],
                    "principle": "Chargaff's rules: A = T, G = C, and A + T + G + C = 100%",
                    "steps": [
                        {
                            "step": "Find thymine percentage",
                            "work": "Since A = T, %T = 15%",
                            "result": ""
                        },
                        {
                            "step": "Calculate A + T content",
                            "work": "A + T = 15% + 15% = 30%",
                            "result": ""
                        },
                        {
                            "step": "Calculate G + C content",
                            "work": "G + C = 100% - 30% = 70%",
                            "result": ""
                        },
                        {
                            "step": "Find guanine and cytosine percentages",
                            "work": "Since G = C, each = 70%/2 = 35%",
                            "result": "G = 35%, C = 35%"
                        }
                    ],
                    "answer": ["Thymine = 15%", "Guanine = 35%", "Cytosine = 35%"],
                    "concept": "Chargaff's rules application"
                }
            },
            {
                "problem": "If the coding strand of DNA has the sequence 5'-ATG CCA GTA-3', what will be the sequence of the transcribed mRNA?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Coding strand: 5'-ATG CCA GTA-3'"],
                    "find": "mRNA sequence",
                    "principle": "mRNA is complementary to the template strand and identical to the coding strand (except T replaced by U)",
                    "steps": [
                        {
                            "step": "Identify template strand",
                            "work": "Template strand is complementary to coding strand: 3'-TAC GGT CAT-5'",
                            "result": ""
                        },
                        {
                            "step": "Transcribe mRNA from template",
                            "work": "mRNA is complementary to template: 5'-AUG CCA GUA-3' (T→U)",
                            "result": "5'-AUG CCA GUA-3'"
                        }
                    ],
                    "answer": "5'-AUG CCA GUA-3'",
                    "concept": "Transcription and strand complementarity"
                }
            },
            {
                "problem": "In the lac operon, what would happen if both lactose and glucose are present in the medium?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Lac operon system", "Both lactose and glucose present"],
                    "find": "Effect on operon expression",
                    "principle": "Lactose induces operon by inactivating repressor. Glucose causes catabolite repression via cAMP levels.",
                    "steps": [
                        {
                            "step": "Lactose effect",
                            "work": "Lactose binds to repressor, removing it from operator → operon can be transcribed",
                            "result": ""
                        },
                        {
                            "step": "Glucose effect",
                            "work": "High glucose → low cAMP → cAMP-CAP complex not formed → RNA polymerase cannot bind efficiently to promoter",
                            "result": "Very low level of transcription (basal expression)"
                        }
                    ],
                    "answer": "Minimal expression due to catabolite repression by glucose",
                    "concept": "Lac operon regulation and catabolite repression"
                }
            },
            {
                "problem": "A tRNA has the anticodon 3'-GUA-5'. Which amino acid will it carry?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Anticodon: 3'-GUA-5'"],
                    "find": "Amino acid carried",
                    "principle": "Anticodon pairs with mRNA codon. Use genetic code to find amino acid.",
                    "steps": [
                        {
                            "step": "Find complementary codon",
                            "work": "Anticodon 3'-GUA-5' pairs with mRNA codon 5'-CAU-3'",
                            "result": ""
                        },
                        {
                            "step": "Identify amino acid",
                            "work": "Codon CAU codes for Histidine",
                            "result": "Histidine"
                        }
                    ],
                    "answer": "Histidine",
                    "concept": "tRNA structure and codon-anticodon pairing"
                }
            },
            {
                "problem": "If a DNA sequence has 300 adenine bases, how many thymine bases will it contain?",
                "difficulty": "Easy",
                "solution": {
                    "given": ["A = 300"],
                    "find": "T",
                    "principle": "Chargaff’s rule: A = T",
                    "steps": [
                        "Step 1: By Chargaff’s rule, A = T",
                        "Step 2: So if A = 300, T = 300"
                    ],
                    "answer": "Thymine bases = 300",
                    "concept": "Chargaff’s base pairing rule"
                }
            },
            {
                "problem": "How many hydrogen bonds are present in a DNA molecule with 100 A–T pairs and 50 G–C pairs?",
                "difficulty": "Medium",
                "solution": {
                    "given": ["A–T pairs = 100", "G–C pairs = 50"],
                    "find": "Total hydrogen bonds",
                    "principle": "A–T = 2 H-bonds, G–C = 3 H-bonds",
                    "steps": [
                        "Step 1: Calculate for A–T → 100 × 2 = 200",
                        "Step 2: Calculate for G–C → 50 × 3 = 150",
                        "Step 3: Total = 200 + 150 = 350"
                    ],
                    "answer": "350 hydrogen bonds",
                    "concept": "Base-pairing hydrogen bonds"
                }
            },
            {
                "problem": "What is the anticodon sequence for mRNA codon AUG?",
                "difficulty": "Easy",
                "solution": {
                    "given": ["Codon = AUG"],
                    "find": "Anticodon",
                    "principle": "Anticodon is complementary & antiparallel to codon",
                    "steps": [
                        "Step 1: Codon AUG (5’–3’)",
                        "Step 2: Complementary anticodon = UAC (3’–5’)"
                    ],
                    "answer": "UAC",
                    "concept": "Codon–anticodon pairing"
                }
            },
            {
                "problem": "Which enzyme adds nucleotides during DNA replication?",
                "difficulty": "Easy",
                "solution": {
                    "given": ["DNA replication process"],
                    "find": "Name of enzyme",
                    "principle": "Enzyme that catalyzes addition of nucleotides is DNA polymerase",
                    "steps": [
                        "Step 1: During replication, nucleotides are added in 5’→3’ direction",
                        "Step 2: DNA polymerase III adds new nucleotides"
                    ],
                    "answer": "DNA polymerase III",
                    "concept": "Enzyme of DNA replication"
                }
            },
            {
                "problem": "If there are 200 nucleotides in a mRNA, how many amino acids will be formed?",
                "difficulty": "Medium",
                "solution": {
                    "given": ["mRNA length = 200 nucleotides"],
                    "find": "No. of amino acids",
                    "principle": "3 nucleotides = 1 codon = 1 amino acid (minus stop codon)",
                    "steps": [
                        "Step 1: 200 ÷ 3 = 66 codons approx.",
                        "Step 2: Minus 1 codon (stop codon) = 65 amino acids"
                    ],
                    "answer": "65 amino acids",
                    "concept": "Genetic code translation"
                }
            },
            {
                "problem": "Which DNA strand is transcribed into mRNA?",
                "difficulty": "Easy",
                "solution": {
                    "given": ["Two strands of DNA: coding and template"],
                    "find": "Which one is transcribed?",
                    "principle": "mRNA is complementary to template strand",
                    "steps": [
                        "Step 1: Coding strand has same sequence as mRNA (except T = U)",
                        "Step 2: Template strand is transcribed"
                    ],
                    "answer": "Template strand",
                    "concept": "Transcription mechanism"
                }
            },
            {
                "problem": "Which component of the lac operon acts as a repressor?",
                "difficulty": "Easy",
                "solution": {
                    "given": ["Lac operon structure"],
                    "find": "Repressor",
                    "principle": "LacI gene codes for repressor protein",
                    "steps": [
                        "Step 1: Lac operon has structural genes + regulatory gene",
                        "Step 2: Regulatory gene LacI produces repressor protein"
                    ],
                    "answer": "LacI gene product (repressor protein)",
                    "concept": "Lac operon regulation"
                }
            },
            {
                "problem": "What is the role of tRNA in protein synthesis?",
                "difficulty": "Easy",
                "solution": {
                    "given": ["Protein synthesis process"],
                    "find": "Role of tRNA",
                    "principle": "tRNA carries amino acids to ribosome",
                    "steps": [
                        "Step 1: Each tRNA has an anticodon",
                        "Step 2: Matches codon on mRNA and brings correct amino acid"
                    ],
                    "answer": "tRNA acts as adapter between mRNA codon and amino acid",
                    "concept": "tRNA function in translation"
                }
            },
            {
                "problem": "Which part of DNA contains information for protein synthesis?",
                "difficulty": "Easy",
                "solution": {
                    "given": ["DNA molecule"],
                    "find": "Informational part",
                    "principle": "Genes are coding regions of DNA",
                    "steps": [
                        "Step 1: DNA has coding and non-coding sequences",
                        "Step 2: Coding sequence (gene) provides information"
                    ],
                    "answer": "Genes (coding sequences of DNA)",
                    "concept": "DNA–Protein relationship"
                }
            },
            {
                "problem": "Why is genetic code called ‘degenerate’?",
                "difficulty": "Medium",
                "solution": {
                    "given": ["Genetic code property"],
                    "find": "Meaning of degeneracy",
                    "principle": "More than one codon can code same amino acid",
                    "steps": [
                        "Step 1: Eg. Leucine has 6 codons",
                        "Step 2: This redundancy is called degeneracy"
                    ],
                    "answer": "Because multiple codons specify the same amino acid",
                    "concept": "Degeneracy of genetic code"
                }
            },
            {
                "problem": "Which type of mutation occurs when a single base substitution leads to stop codon?",
                "difficulty": "Medium",
                "solution": {
                    "given": ["Single base substitution"],
                    "find": "Type of mutation",
                    "principle": "If codon changes into stop codon → nonsense mutation",
                    "steps": [
                        "Step 1: Substitution alters triplet code",
                        "Step 2: If changed to stop codon, premature termination occurs"
                    ],
                    "answer": "Nonsense mutation",
                    "concept": "Types of point mutation"
                }
            },
            {
                "problem": "Which enzyme helps in joining Okazaki fragments?",
                "difficulty": "Easy",
                "solution": {
                    "given": ["DNA replication"],
                    "find": "Enzyme name",
                    "principle": "Okazaki fragments are joined by ligase",
                    "steps": [
                        "Step 1: Okazaki fragments are synthesized on lagging strand",
                        "Step 2: DNA ligase seals the gaps"
                    ],
                    "answer": "DNA ligase",
                    "concept": "Lagging strand synthesis"
                }
            },
            {
                "problem": "If 20% of the bases in a DNA sample are cytosine, what percentage are adenine?",
                "difficulty": "easy",
                "solution": {
                    "given": ["% Cytosine = 20%"],
                    "find": "% Adenine",
                    "principle": "Chargaff's rules: C = G, A = T, and A + T + G + C = 100%",
                    "steps": [
                        {
                            "step": "Find guanine percentage",
                            "work": "Since C = G, %G = 20%",
                            "result": ""
                        },
                        {
                            "step": "Calculate G + C content",
                            "work": "G + C = 20% + 20% = 40%",
                            "result": ""
                        },
                        {
                            "step": "Calculate A + T content",
                            "work": "A + T = 100% - 40% = 60%",
                            "result": ""
                        },
                        {
                            "step": "Find adenine percentage",
                            "work": "Since A = T, %A = 60%/2 = 30%",
                            "result": "%A = 30%"
                        }
                    ],
                    "answer": "30%",
                    "concept": "Chargaff's rules application"
                }
            },
            {
                "problem": "What would be the effect on translation if the 5' cap is missing from eukaryotic mRNA?",
                "difficulty": "hard",
                "solution": {
                    "given": ["Eukaryotic mRNA without 5' cap"],
                    "find": "Effect on translation",
                    "principle": "5' cap is essential for ribosome binding and initiation of translation in eukaryotes",
                    "steps": [
                        {
                            "step": "Role of 5' cap",
                            "work": "5' cap helps in ribosome recognition, binding, and protection from degradation",
                            "result": ""
                        },
                        {
                            "step": "Effect of absence",
                            "work": "Without 5' cap, ribosome cannot bind efficiently, translation initiation is impaired, and mRNA is degraded faster",
                            "result": "Severely reduced or no translation"
                        }
                    ],
                    "answer": "Translation would be severely impaired or not occur due to lack of ribosome binding and initiation",
                    "concept": "mRNA processing and translation initiation"
                }
            },
            {
                "problem": "A DNA molecule has 2000 nucleotide base pairs. Calculate its length in nanometers.",
                "difficulty": "easy",
                "solution": {
                    "given": ["Number of base pairs = 2000"],
                    "find": "Length in nanometers",
                    "principle": "Distance between two consecutive base pairs in B-DNA = 0.34 nm",
                    "steps": [
                        {
                            "step": "Calculate length",
                            "work": "Length = 2000 × 0.34 nm = 680 nm",
                            "result": "680 nm"
                        }
                    ],
                    "answer": "680 nm",
                    "concept": "DNA structure and dimensions"
                }
            },
            {
                "problem": "In DNA replication, why is RNA primer required?",
                "difficulty": "medium",
                "solution": {
                    "given": ["DNA replication process"],
                    "find": "Reason for RNA primer requirement",
                    "principle": "DNA polymerase cannot initiate DNA synthesis de novo; it can only add nucleotides to an existing 3'-OH group",
                    "steps": [
                        {
                            "step": "DNA polymerase limitation",
                            "work": "DNA polymerase requires a free 3'-OH group to add nucleotides",
                            "result": ""
                        },
                        {
                            "step": "Primase function",
                            "work": "Primase synthesizes short RNA primers that provide the necessary 3'-OH group for DNA polymerase to begin synthesis",
                            "result": "RNA primer provides starting point for DNA synthesis"
                        }
                    ],
                    "answer": "RNA primer provides the free 3'-OH group that DNA polymerase requires to begin DNA synthesis",
                    "concept": "DNA replication mechanism"
                }
            },
            {
                "problem": "If a mutation changes a codon from UUU to UUC, what will be the effect on the protein?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Codon change: UUU → UUC"],
                    "find": "Effect on protein",
                    "principle": "Both UUU and UUC code for phenylalanine (genetic code degeneracy)",
                    "steps": [
                        {
                            "step": "Check genetic code",
                            "work": "UUU = Phenylalanine, UUC = Phenylalanine",
                            "result": "Same amino acid"
                        },
                        {
                            "step": "Conclusion",
                            "work": "No change in amino acid sequence → no effect on protein",
                            "result": "Silent mutation"
                        }
                    ],
                    "answer": "No effect (silent mutation); both codons code for phenylalanine",
                    "concept": "Genetic code degeneracy and mutation types"
                }
            },
            {
                "problem": "What is the function of DNA ligase in DNA replication?",
                "difficulty": "medium",
                "solution": {
                    "given": ["DNA replication process"],
                    "find": "Function of DNA ligase",
                    "principle": "DNA ligase seals nicks in the DNA backbone by catalyzing phosphodiester bond formation",
                    "steps": [
                        {
                            "step": "Lagging strand synthesis",
                            "work": "On lagging strand, DNA is synthesized as Okazaki fragments",
                            "result": ""
                        },
                        {
                            "step": "Ligase action",
                            "work": "DNA ligase joins the Okazaki fragments by forming phosphodiester bonds between them",
                            "result": "Creates continuous DNA strand"
                        }
                    ],
                    "answer": "DNA ligase joins Okazaki fragments on the lagging strand by catalyzing phosphodiester bond formation",
                    "concept": "DNA replication enzymes"
                }
            },
            {
                "problem": "A protein has 150 amino acids. What is the minimum number of nucleotides in the coding region of its gene?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Number of amino acids = 150"],
                    "find": "Minimum nucleotides in coding region",
                    "principle": "Each amino acid is coded by 3 nucleotides (a codon)",
                    "steps": [
                        {
                            "step": "Calculate nucleotides",
                            "work": "Nucleotides = 150 × 3 = 450",
                            "result": "450 nucleotides"
                        }
                    ],
                    "answer": "450 nucleotides",
                    "concept": "Genetic code: amino acid to nucleotide relationship"
                }
            },
            {
                "problem": "Why is DNA replication described as semi-conservative?",
                "difficulty": "medium",
                "solution": {
                    "given": ["DNA replication mechanism"],
                    "find": "Explanation of semi-conservative replication",
                    "principle": "Semi-conservative replication means each new DNA molecule contains one original strand and one newly synthesized strand",
                    "steps": [
                        {
                            "step": "Process description",
                            "work": "The two strands separate, and each serves as a template for synthesis of a new complementary strand",
                            "result": ""
                        },
                        {
                            "step": "Result",
                            "work": "Each daughter molecule consists of one parental strand and one newly synthesized strand",
                            "result": "Genetic information is conserved"
                        }
                    ],
                    "answer": "DNA replication is semi-conservative because each daughter DNA molecule contains one strand from the parent molecule and one newly synthesized strand",
                    "concept": "DNA replication mechanism"
                }
            },
            {
                "problem": "If the sequence of a DNA template strand is 3'-TAC GGC ATA-5', what is the sequence of the polypeptide produced?",
                "difficulty": "hard",
                "solution": {
                    "given": ["Template strand: 3'-TAC GGC ATA-5'"],
                    "find": "Polypeptide sequence",
                    "principle": "mRNA is complementary to template strand, then translated using genetic code",
                    "steps": [
                        {
                            "step": "Transcribe mRNA",
                            "work": "mRNA complementary to template: 5'-AUG CCG UAU-3'",
                            "result": ""
                        },
                        {
                            "step": "Translate codons",
                            "work": "AUG = Met, CCG = Pro, UAU = Tyr",
                            "result": "Met-Pro-Tyr"
                        }
                    ],
                    "answer": "Methionine-Proline-Tyrosine (Met-Pro-Tyr)",
                    "concept": "Transcription and translation"
                }
            },
            {
                "problem": "What is the role of the promoter in transcription?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Transcription process"],
                    "find": "Role of promoter",
                    "principle": "Promoter is a specific DNA sequence where RNA polymerase binds to initiate transcription",
                    "steps": [
                        {
                            "step": "Binding site",
                            "work": "Promoter provides binding site for RNA polymerase",
                            "result": ""
                        },
                        {
                            "step": "Initiation",
                            "work": "It determines the start point and direction of transcription",
                            "result": "Controls gene expression"
                        }
                    ],
                    "answer": "The promoter is a DNA sequence where RNA polymerase binds to initiate transcription, determining the start point and direction",
                    "concept": "Transcription initiation"
                }
            },
            {
                "problem": "A DNA molecule has 30% guanine. What is the percentage of adenine?",
                "difficulty": "easy",
                "solution": {
                    "given": ["% Guanine = 30%"],
                    "find": "% Adenine",
                    "principle": "Chargaff's rules: G = C, A = T, and A + T + G + C = 100%",
                    "steps": [
                        {
                            "step": "Find cytosine percentage",
                            "work": "Since G = C, %C = 30%",
                            "result": ""
                        },
                        {
                            "step": "Calculate G + C content",
                            "work": "G + C = 30% + 30% = 60%",
                            "result": ""
                        },
                        {
                            "step": "Calculate A + T content",
                            "work": "A + T = 100% - 60% = 40%",
                            "result": ""
                        },
                        {
                            "step": "Find adenine percentage",
                            "work": "Since A = T, %A = 40%/2 = 20%",
                            "result": "%A = 20%"
                        }
                    ],
                    "answer": "20%",
                    "concept": "Chargaff's rules application"
                }
            },
            {
                "problem": "What is the significance of the poly-A tail in eukaryotic mRNA?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Eukaryotic mRNA processing"],
                    "find": "Significance of poly-A tail",
                    "principle": "Poly-A tail is added to the 3' end of eukaryotic mRNA during processing",
                    "steps": [
                        {
                            "step": "Functions",
                            "work": "1. Protects mRNA from degradation 2. Aids in export from nucleus 3. Helps in translation initiation",
                            "result": "Increases mRNA stability and efficiency"
                        }
                    ],
                    "answer": "The poly-A tail protects mRNA from degradation, aids in nuclear export, and enhances translation efficiency",
                    "concept": "mRNA processing in eukaryotes"
                }
            },
            {
                "problem": "If a DNA molecule has 1000 base pairs and 28% of them are adenine-thymine pairs, how many guanine-cytosine pairs are present?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Total base pairs = 1000", "A-T pairs = 28%"],
                    "find": "Number of G-C pairs",
                    "principle": "In double-stranded DNA, A-T and G-C are complementary pairs",
                    "steps": [
                        {
                            "step": "Calculate percentage of G-C pairs",
                            "work": "G-C pairs = 100% - 28% = 72%",
                            "result": ""
                        },
                        {
                            "step": "Calculate number of G-C pairs",
                            "work": "Number = 72% of 1000 = 720 pairs",
                            "result": "720 G-C pairs"
                        }
                    ],
                    "answer": "720 guanine-cytosine pairs",
                    "concept": "DNA base pairing and composition"
                }
            },
            {
                "problem": "What is the function of aminoacyl-tRNA synthetase?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Translation process"],
                    "find": "Function of aminoacyl-tRNA synthetase",
                    "principle": "Aminoacyl-tRNA synthetase is the enzyme that charges tRNA with the correct amino acid",
                    "steps": [
                        {
                            "step": "Specificity",
                            "work": "Each aminoacyl-tRNA synthetase is specific for one amino acid and its corresponding tRNA",
                            "result": ""
                        },
                        {
                            "step": "Reaction",
                            "work": "It catalyzes the formation of an ester bond between the amino acid and the 3' end of tRNA",
                            "result": "Produces charged tRNA (aminoacyl-tRNA)"
                        }
                    ],
                    "answer": "Aminoacyl-tRNA synthetase attaches the correct amino acid to its corresponding tRNA, producing charged tRNA for translation",
                    "concept": "Translation machinery"
                }
            },
            {
                "problem": "A DNA sample has a melting temperature (Tm) of 85°C. Another sample has 45% G-C content. Which has higher Tm and why?",
                "difficulty": "hard",
                "solution": {
                    "given": ["Sample A: Tm = 85°C", "Sample B: 45% G-C content"],
                    "find": "Which has higher Tm and reason",
                    "principle": "Melting temperature (Tm) depends on G-C content. G-C pairs have 3 hydrogen bonds while A-T pairs have 2, so higher G-C content means higher stability and higher Tm",
                    "steps": [
                        {
                            "step": "Compare G-C content",
                            "work": "Sample A's G-C content can be calculated from Tm, but Sample B has 45% G-C",
                            "result": "Need to estimate Sample A's G-C content"
                        },
                        {
                            "step": "General relationship",
                            "work": "Typically, Tm increases by ~0.4°C for each 1% increase in G-C content. At 50% G-C, Tm is ~70°C",
                            "result": "Sample A with Tm=85°C has very high G-C content (>70%)"
                        },
                        {
                            "step": "Conclusion",
                            "work": "Sample A has higher Tm because it has higher G-C content than Sample B (45%)",
                            "result": "Sample A has higher Tm"
                        }
                    ],
                    "answer": "Sample A has higher Tm because it has higher G-C content. G-C pairs form three hydrogen bonds, making DNA more stable and requiring higher temperature to denature.",
                    "concept": "DNA stability and base composition"
                }
            },
            {
                "problem": "What is the role of spliceosomes in eukaryotic gene expression?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Eukaryotic mRNA processing"],
                    "find": "Role of spliceosomes",
                    "principle": "Spliceosomes are complexes that remove introns from precursor mRNA",
                    "steps": [
                        {
                            "step": "Composition",
                            "work": "Spliceosomes are made of snRNPs (small nuclear ribonucleoproteins) and other proteins",
                            "result": ""
                        },
                        {
                            "step": "Function",
                            "work": "They recognize splice sites and catalyze the removal of introns and joining of exons",
                            "result": "Produce mature mRNA"
                        }
                    ],
                    "answer": "Spliceosomes remove introns from precursor mRNA and join exons together to produce mature, functional mRNA",
                    "concept": "RNA processing in eukaryotes"
                }
            },
            {
                "problem": "If a mutation changes a stop codon to an amino acid codon, what will be the effect on the protein?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Mutation: stop codon → amino acid codon"],
                    "find": "Effect on protein",
                    "principle": "Stop codons (UAA, UAG, UGA) signal termination of translation",
                    "steps": [
                        {
                            "step": "Normal function",
                            "work": "Stop codon causes release of the completed polypeptide chain",
                            "result": ""
                        },
                        {
                            "step": "Mutation effect",
                            "work": "If stop codon becomes an amino acid codon, translation continues beyond the normal stop point",
                            "result": "Longer protein with extra amino acids"
                        }
                    ],
                    "answer": "The protein will be longer than normal because translation continues beyond the original termination point (nonsense mutation becoming sense)",
                    "concept": "Mutation effects on protein synthesis"
                }
            },
            {
                "problem": "What is the difference between exons and introns?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Gene structure"],
                    "find": "Difference between exons and introns",
                    "principle": "Eukaryotic genes contain both coding (exons) and non-coding (introns) sequences",
                    "steps": [
                        {
                            "step": "Exons",
                            "work": "Exons are expressed sequences that code for amino acids in the protein",
                            "result": "Retained in mature mRNA"
                        },
                        {
                            "step": "Introns",
                            "work": "Introns are intervening sequences that do not code for protein and are removed during RNA processing",
                            "result": "Removed from mature mRNA"
                        }
                    ],
                    "answer": "Exons are coding sequences that are expressed in the final protein, while introns are non-coding intervening sequences that are removed during RNA processing",
                    "concept": "Eukaryotic gene structure"
                }
            },
            {
                "problem": "A bacterial cell has a mutation that makes it unable to produce functional cAMP. How will this affect lac operon expression when both lactose and glucose are present?",
                "difficulty": "hard",
                "solution": {
                    "given": ["Mutation: unable to produce functional cAMP", "Both lactose and glucose present"],
                    "find": "Effect on lac operon expression",
                    "principle": "cAMP is required for catabolite activator protein (CAP) to bind to promoter and enhance transcription",
                    "steps": [
                        {
                            "step": "Lactose effect",
                            "work": "Lactose inactivates repressor → operon can be transcribed",
                            "result": ""
                        },
                        {
                            "step": "cAMP-CAP requirement",
                            "work": "Without functional cAMP, cAMP-CAP complex cannot form → RNA polymerase cannot bind efficiently to promoter",
                            "result": "Very low transcription even with lactose present"
                        }
                    ],
                    "answer": "The lac operon will have minimal expression (basal level) because without cAMP, the cAMP-CAP complex cannot form to enhance transcription, even though the repressor is inactivated by lactose",
                    "concept": "Lac operon regulation and cAMP role"
                }
            },
            {
                "problem": "What is the consequence of a mutation in the promoter region of a gene?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Promoter region mutation"],
                    "find": "Consequence on gene expression",
                    "principle": "The promoter region contains specific sequences that regulate the binding of RNA polymerase and transcription factors",
                    "steps": [
                        {
                            "step": "Effect on transcription initiation",
                            "work": "Mutations can alter the affinity of RNA polymerase for the promoter",
                            "result": "Can increase, decrease, or completely prevent transcription initiation"
                        }
                    ],
                    "answer": "A mutation in the promoter region can significantly alter gene expression levels by affecting the efficiency of transcription initiation, potentially leading to overexpression, underexpression, or complete loss of gene expression",
                    "concept": "Gene regulation and promoter function"
                }
            },
            {
                "problem": "How does the antibiotic rifampicin inhibit bacterial growth?",
                "difficulty": "hard",
                "solution": {
                    "given": ["Antibiotic action mechanism"],
                    "find": "Rifampicin's mechanism of inhibition",
                    "principle": "Rifampicin specifically targets bacterial RNA polymerase",
                    "steps": [
                        {
                            "step": "Molecular target",
                            "work": "Rifampicin binds to the beta subunit of bacterial RNA polymerase",
                            "result": "Prevents initiation of transcription"
                        },
                        {
                            "step": "Cellular consequence",
                            "work": "Inhibition of RNA synthesis prevents protein production and essential cellular functions",
                            "result": "Bacteriostatic or bactericidal effect"
                        }
                    ],
                    "answer": "Rifampicin inhibits bacterial growth by binding to bacterial RNA polymerase, preventing the initiation of transcription and thereby blocking protein synthesis and essential cellular processes",
                    "concept": "Antibiotic mechanisms and transcription inhibition"
                }
            },
            {
                "problem": "What is the significance of the Shine-Dalgarno sequence in prokaryotes?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Prokaryotic translation initiation"],
                    "find": "Significance of Shine-Dalgarno sequence",
                    "principle": "The Shine-Dalgarno sequence is a ribosomal binding site in prokaryotic mRNA",
                    "steps": [
                        {
                            "step": "Function in translation initiation",
                            "work": "Base-pairs with complementary sequence on 16S rRNA of the small ribosomal subunit",
                            "result": "Positions the start codon properly in the ribosomal P-site"
                        }
                    ],
                    "answer": "The Shine-Dalgarno sequence is crucial for translation initiation in prokaryotes as it helps properly align the mRNA on the ribosome, ensuring correct placement of the start codon for protein synthesis",
                    "concept": "Translation initiation in prokaryotes"
                }
            },
            {
                "problem": "Why are telomeres important in eukaryotic chromosomes?",
                "difficulty": "hard",
                "solution": {
                    "given": ["Chromosome structure and replication"],
                    "find": "Importance of telomeres",
                    "principle": "Telomeres are repetitive nucleotide sequences at chromosome ends that protect genetic material",
                    "steps": [
                        {
                            "step": "Protective function",
                            "work": "Prevent chromosome ends from being recognized as DNA damage",
                            "result": "Avoid unwanted DNA repair responses and chromosome fusion"
                        },
                        {
                            "step": "Replication role",
                            "work": "Provide buffer against the end-replication problem where DNA polymerase cannot complete ends",
                            "result": "Prevent progressive shortening of chromosomes with each replication"
                        }
                    ],
                    "answer": "Telomeres are essential for protecting chromosome ends from degradation and fusion, and they compensate for the end-replication problem by providing disposable DNA sequences that shorten instead of coding regions",
                    "concept": "Chromosome structure and replication mechanisms"
                }
            }
        ]
    },
    "principles_of_inheritance_and_variation": {
        "title": "Principles of Inheritance and Variation",
        "weightage": "	6–8%",
        "introduction": "This chapter forms the foundation of genetics, exploring how traits are passed from parents to offspring and how variations arise in populations. It covers Mendel's laws, inheritance patterns, chromosomal theory, genetic disorders, and population genetics. Understanding these principles is crucial for comprehending evolution, breeding programs, and human genetics, making it essential for NEET preparation.",

        "topics": [
            {
                "name": "Mendelian Inheritance",
                "description": "Gregor Mendel's fundamental laws of inheritance based on his pea plant experiments.",
                "subtopics": [
                    {
                        "name": "Mendel's Laws",
                        "explanation": "Law of Dominance: In a heterozygote, one allele expresses itself while the other remains hidden. Law of Segregation: Alleles separate during gamete formation. Law of Independent Assortment: Genes for different traits assort independently during gamete formation."
                    },
                    {
                        "name": "Monohybrid Cross",
                        "explanation": "Cross involving one character. Phenotypic ratio: 3:1 (dominant:recessive). Genotypic ratio: 1:2:1 (homozygous dominant:heterozygous:homozygous recessive)."
                    },
                    {
                        "name": "Dihybrid Cross",
                        "explanation": "Cross involving two characters. Phenotypic ratio: 9:3:3:1. Demonstrates independent assortment of genes located on different chromosomes."
                    }
                ]
            },
            {
                "name": "Non-Mendelian Inheritance",
                "description": "Inheritance patterns that deviate from Mendel's laws.",
                "subtopics": [
                    {
                        "name": "Incomplete Dominance",
                        "explanation": "Heterozygote shows intermediate phenotype (e.g., snapdragon flowers: RR-red, rr-white, Rr-pink). Phenotypic ratio becomes 1:2:1."
                    },
                    {
                        "name": "Co-dominance",
                        "explanation": "Both alleles express themselves fully in heterozygote (e.g., AB blood group in humans, roan cattle)."
                    },
                    {
                        "name": "Multiple Allelism",
                        "explanation": "More than two alleles exist for a gene in a population (e.g., ABO blood group system with Iᴬ, Iᴮ, i alleles)."
                    }
                ]
            },
            {
                "name": "Chromosomal Theory of Inheritance",
                "description": "The theory that chromosomes carry genetic material and explain Mendelian patterns.",
                "subtopics": [
                    {
                        "name": "Linkage and Recombination",
                        "explanation": "Genes on same chromosome tend to be inherited together. Recombination occurs due to crossing over during meiosis. Recombination frequency indicates distance between genes."
                    },
                    {
                        "name": "Sex Determination",
                        "explanation": "XX-XY system (mammals, Drosophila), ZZ-ZW system (birds, butterflies), environmental determination (some reptiles). In humans, SRY gene on Y chromosome determines maleness."
                    }
                ]
            },
            {
                "name": "Genetic Disorders",
                "description": "Diseases caused by abnormalities in genes or chromosomes.",
                "subtopics": [
                    {
                        "name": "Pedigree Analysis",
                        "explanation": "Study of family history to trace inheritance patterns of traits. Used to determine if a trait is autosomal/sex-linked, dominant/recessive."
                    },
                    {
                        "name": "Mendelian Disorders",
                        "explanation": "Caused by mutations in single genes. Examples: Haemophilia (X-linked recessive), Sickle-cell anemia (autosomal recessive), Huntington's disease (autosomal dominant)."
                    },
                    {
                        "name": "Chromosomal Disorders",
                        "explanation": "Caused by changes in chromosome number or structure. Examples: Down syndrome (trisomy 21), Turner syndrome (45,X), Klinefelter syndrome (47,XXY)."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Genetic Terminology": [
                {
                    "name": "Gene vs Allele",
                    "description": "Gene: Unit of inheritance. Allele: Alternative form of a gene."
                },
                {
                    "name": "Homozygous vs Heterozygous",
                    "description": "Homozygous: Same alleles (TT or tt). Heterozygous: Different alleles (Tt)."
                },
                {
                    "name": "Genotype vs Phenotype",
                    "description": "Genotype: Genetic constitution. Phenotype: Observable characteristic."
                }
            ],
            "Inheritance Patterns": [
                {
                    "name": "Autosomal Inheritance",
                    "description": "Genes located on autosomes. Affects males and females equally."
                },
                {
                    "name": "Sex-linked Inheritance",
                    "description": "Genes located on sex chromosomes. X-linked disorders show criss-cross inheritance."
                }
            ],
            "Genetic Ratios": [
                {
                    "name": "Test Cross Ratio",
                    "description": "Used to determine genotype of dominant phenotype. Cross with homozygous recessive: if all offspring dominant → homozygous; if 1:1 ratio → heterozygous."
                }
            ],
        },

        "problems": [
            {
                "problem": "In pea plants, round seed (R) is dominant over wrinkled seed (r). A heterozygous round-seeded plant is crossed with a wrinkled-seeded plant. What will be the phenotypic ratio of the offspring?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Heterozygous round: Rr", "Wrinkled: rr", "R (round) dominant over r (wrinkled)"],
                    "find": "Phenotypic ratio",
                    "principle": "Law of segregation: gametes from Rr plant: 50% R, 50% r. Gametes from rr plant: 100% r.",
                    "steps": [
                        {
                            "step": "Set up Punnett square",
                            "work": "Parent 1 (Rr) gametes: R, r. Parent 2 (rr) gametes: r, r",
                            "result": "Offspring: Rr, Rr, rr, rr"
                        },
                        {
                            "step": "Determine phenotypes",
                            "work": "Rr: round (2 plants), rr: wrinkled (2 plants)",
                            "result": "Phenotypic ratio: 1:1 (round:wrinkled)"
                        }
                    ],
                    "answer": "1:1 (round:wrinkled)",
                    "concept": "Monohybrid cross and test cross"
                }
            },
            {
                "problem": "In humans, brown eyes (B) are dominant over blue eyes (b). A brown-eyed man and blue-eyed woman have a blue-eyed child. What are the genotypes of the parents?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Brown eyes (B) dominant", "Blue eyes (b) recessive", "Brown-eyed man × Blue-eyed woman → Blue-eyed child"],
                    "find": "Genotypes of parents",
                    "principle": "A recessive phenotype (blue eyes) must be homozygous recessive (bb). To produce a blue-eyed child, both parents must contribute a b allele.",
                    "steps": [
                        {
                            "step": "Analyze child's genotype",
                            "work": "Blue-eyed child must be bb",
                            "result": "Child received b allele from each parent"
                        },
                        {
                            "step": "Analyze mother's genotype",
                            "work": "Blue-eyed woman must be bb",
                            "result": "Mother can only contribute b allele"
                        },
                        {
                            "step": "Analyze father's genotype",
                            "work": "Brown-eyed man must have contributed b allele, but has brown eyes so cannot be bb",
                            "result": "Father must be heterozygous Bb"
                        }
                    ],
                    "answer": "Father: Bb (heterozygous brown-eyed), Mother: bb (blue-eyed)",
                    "concept": "Deduction of genotypes from pedigree information"
                }
            },
            {
                "problem": "In snapdragons, flower color shows incomplete dominance. Red (RR) and white (rr) parents are crossed. What will be the phenotype and genotype ratios in F2 generation?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Incomplete dominance", "Red: RR, White: rr, Pink: Rr"],
                    "find": ["F2 phenotypic ratio", "F2 genotypic ratio"],
                    "principle": "In incomplete dominance, heterozygote shows intermediate phenotype. Normal Mendelian segregation occurs.",
                    "steps": [
                        {
                            "step": "Produce F1 generation",
                            "work": "RR × rr → all Rr (pink)",
                            "result": "F1 all pink"
                        },
                        {
                            "step": "Cross F1 plants",
                            "work": "Rr × Rr → Offspring: 1 RR: 2 Rr: 1 rr",
                            "result": ""
                        },
                        {
                            "step": "Determine phenotypes",
                            "work": "RR: red, Rr: pink, rr: white",
                            "result": "Phenotypic ratio: 1 red: 2 pink: 1 white"
                        }
                    ],
                    "answer": ["Phenotypic ratio: 1:2:1 (red:pink:white)", "Genotypic ratio: 1:2:1 (RR:Rr:rr)"],
                    "concept": "Incomplete dominance inheritance pattern"
                }
            },
            {
                "problem": "A woman with normal vision (whose father was colorblind) marries a colorblind man. What is the probability that their son will be colorblind? (Colorblindness is X-linked recessive)",
                "difficulty": "hard",
                "solution": {
                    "given": ["X-linked recessive inheritance", "Woman: normal vision, father colorblind", "Husband: colorblind"],
                    "find": "Probability that son is colorblind",
                    "principle": "X-linked recessive disorders: males express with one copy, females need two copies. Sons inherit X from mother.",
                    "steps": [
                        {
                            "step": "Determine woman's genotype",
                            "work": "Father was colorblind (XᶜY) → gave Xᶜ to daughter. Woman has normal vision so must be heterozygous carrier (XᴺXᶜ)",
                            "result": "Mother: XᴺXᶜ"
                        },
                        {
                            "step": "Determine man's genotype",
                            "work": "Colorblind man: XᶜY",
                            "result": "Father: XᶜY"
                        },
                        {
                            "step": "Set up cross",
                            "work": "XᴺXᶜ × XᶜY → Possible sons: XᴺY (normal), XᶜY (colorblind)",
                            "result": "50% chance son is colorblind"
                        }
                    ],
                    "answer": "50% probability",
                    "concept": "X-linked recessive inheritance and pedigree analysis"
                }
            },
            {
                "problem": "In guinea pigs, black coat (B) is dominant over white (b), and short hair (S) is dominant over long hair (s). When heterozygous black short-haired guinea pigs are crossed, what fraction of the offspring will be white with long hair?",
                "difficulty": "hard",
                "solution": {
                    "given": ["Black (B) dominant over white (b)", "Short hair (S) dominant over long hair (s)", "Heterozygous for both traits: BbSs"],
                    "find": "Fraction of white long-haired offspring (bbss)",
                    "principle": "Independent assortment: genes for different traits segregate independently. Use dihybrid cross ratios.",
                    "steps": [
                        {
                            "step": "Set up dihybrid cross",
                            "work": "BbSs × BbSs",
                            "result": "Phenotypic ratio: 9 black short: 3 black long: 3 white short: 1 white long"
                        },
                        {
                            "step": "Calculate fraction",
                            "work": "White long-haired = 1/16 of total offspring",
                            "result": "Fraction = 1/16"
                        }
                    ],
                    "answer": "1/16",
                    "concept": "Dihybrid cross and independent assortment"
                }
            },
            {
                "problem": "In a monohybrid cross between tall (Tt) and dwarf (tt) pea plants, what is the phenotypic ratio?",
                "solution": {
                    "given": "Tt × tt",
                    "to_find": "Phenotypic ratio",
                    "principle": "Mendel’s Law of Segregation",
                    "steps": [
                        "Gametes from Tt: T, t",
                        "Gametes from tt: t, t",
                        "Cross → Tt, Tt, tt, tt"
                    ],
                    "answer": "Phenotypic ratio = 2 tall : 2 dwarf = 1:1",
                    "concept": "Monohybrid test cross result is always 1:1"
                }
            },
            {
                "problem": "In a dihybrid cross AaBb × AaBb, what is the phenotypic ratio?",
                "solution": {
                    "given": "AaBb × AaBb",
                    "to_find": "Phenotypic ratio",
                    "principle": "Mendel’s Law of Independent Assortment",
                    "steps": [
                        "Gametes: AB, Ab, aB, ab",
                        "16 combinations possible",
                        "Phenotypic ratio = 9:3:3:1"
                    ],
                    "answer": "9 dominant-dominant : 3 dominant-recessive : 3 recessive-dominant : 1 recessive-recessive",
                    "concept": "Dihybrid cross ratio"
                }
            },
            {
                "problem": "In incomplete dominance (snapdragon cross Rr × Rr), what is the phenotypic ratio?",
                "solution": {
                    "given": "Rr × Rr",
                    "to_find": "Phenotypic ratio",
                    "principle": "Incomplete dominance",
                    "steps": [
                        "Cross → RR, Rr, Rr, rr",
                        "Phenotypes → 1 red, 2 pink, 1 white"
                    ],
                    "answer": "1:2:1",
                    "concept": "Phenotypic ratio same as genotypic ratio"
                }
            },
            {
                "problem": "What will be the genotypic ratio in codominance (AB blood group cross IAi × IBi)?",
                "solution": {
                    "given": "IAi × IBi",
                    "to_find": "Genotypic ratio",
                    "principle": "Codominance & multiple allelism",
                    "steps": [
                        "Gametes: IA, i and IB, i",
                        "Cross → IAIB, IAi, IBi, ii"
                    ],
                    "answer": "1 IAIB : 1 IAi : 1 IBi : 1 ii",
                    "concept": "ABO blood group follows multiple allelism and codominance"
                }
            },
            {
                "problem": "If a woman carrier for color blindness (XNXc) marries a normal man (XNY), what % of sons will be color blind?",
                "solution": {
                    "given": "XNXc × XNY",
                    "to_find": "Probability of color blind sons",
                    "principle": "Sex-linked inheritance",
                    "steps": [
                        "Sons get Y from father, X from mother",
                        "50% sons → XNY (normal), 50% sons → XcY (color blind)"
                    ],
                    "answer": "50% sons will be color blind",
                    "concept": "X-linked recessive inheritance"
                }
            },
            {
                "problem": "What will be the sex ratio in humans according to Mendel’s law of segregation?",
                "solution": {
                    "given": "XX female × XY male",
                    "to_find": "Sex ratio",
                    "principle": "Chromosomal theory of inheritance",
                    "steps": [
                        "Gametes from female: X only",
                        "Gametes from male: X, Y",
                        "Cross → 50% XX (female), 50% XY (male)"
                    ],
                    "answer": "1:1 (female:male)",
                    "concept": "Sex determined by male gamete"
                }
            },
            {
                "problem": "Which type of cross confirms Mendel’s law of independent assortment?",
                "solution": {
                    "given": "Dihybrid cross",
                    "to_find": "Confirming cross",
                    "principle": "Independent assortment",
                    "steps": [
                        "AaBb × AaBb produces 9:3:3:1 ratio",
                        "New combinations show assortment"
                    ],
                    "answer": "Dihybrid cross confirms independent assortment",
                    "concept": "Dihybrid cross is experimental proof"
                }
            },
            {
                "problem": "Which genetic disorder is caused by trisomy of chromosome 21?",
                "solution": {
                    "given": "Chromosomal disorder",
                    "to_find": "Name of disorder",
                    "principle": "Aneuploidy due to nondisjunction",
                    "steps": [
                        "Trisomy of 21 → extra chromosome",
                        "Causes mental retardation, flat face, short stature"
                    ],
                    "answer": "Down’s syndrome",
                    "concept": "Autosomal aneuploidy"
                }
            },
            {
                "problem": "Which genetic disorder occurs due to monosomy of X chromosome?",
                "solution": {
                    "given": "Chromosomal disorder",
                    "to_find": "Name of disorder",
                    "principle": "Sex chromosome aneuploidy",
                    "steps": [
                        "Monosomy XO",
                        "Symptoms: short stature, webbed neck, sterile female"
                    ],
                    "answer": "Turner’s syndrome",
                    "concept": "Sex chromosome abnormality"
                }
            },
            {
                "problem": "Which genetic disorder is caused by XXY condition in males?",
                "solution": {
                    "given": "Chromosomal disorder",
                    "to_find": "Name of disorder",
                    "principle": "Sex chromosome abnormality",
                    "steps": [
                        "Extra X in male → XXY",
                        "Tall, sterile male with feminine features"
                    ],
                    "answer": "Klinefelter’s syndrome",
                    "concept": "Sex chromosome trisomy"
                }
            },
            {
                "problem": "Why is sickle cell anemia considered a molecular disease?",
                "solution": {
                    "given": "HbA vs HbS hemoglobin",
                    "to_find": "Reason",
                    "principle": "Mutation at molecular level",
                    "steps": [
                        "Single point mutation in β-globin gene",
                        "Glutamic acid → Valine substitution",
                        "Abnormal HbS polymerizes in low oxygen"
                    ],
                    "answer": "Because it is caused by single point mutation at DNA level",
                    "concept": "Molecular disease due to point mutation"
                }
            },
            {
                "problem": "What is the phenotypic ratio in a cross between heterozygous pea plant for two traits (YyRr × YyRr)?",
                "solution": {
                    "given": "YyRr × YyRr",
                    "to_find": "Phenotypic ratio",
                    "principle": "Mendel’s dihybrid cross",
                    "steps": [
                        "Gametes: YR, Yr, yR, yr",
                        "16 possible offspring",
                        "Ratio = 9:3:3:1"
                    ],
                    "answer": "9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green",
                    "concept": "Classic dihybrid cross"
                }
            },
            {
                "problem": "A plant with genotype AaBb is test-crossed with aabb. If 200 progeny are produced and you observe 98 parental-type and 102 recombinant-type offspring, what is the recombination frequency between the two genes?",
                "difficulty": "hard",
                "solution": {
                    "given": ["Test cross: AaBb × aabb", "Total progeny = 200", "Parental-type = 98", "Recombinant-type = 102"],
                    "to_find": "Recombination frequency (%)",
                    "principle": "Recombination frequency = (Number of recombinant progeny / Total progeny) × 100",
                    "steps": [
                        "Step 1: Recombinants = 102",
                        "Step 2: Recombination frequency = (102 / 200) × 100",
                        "Step 3: = 51%"
                    ],
                    "answer": "Recombination frequency = 51% (genes are essentially unlinked or far apart)",
                    "concept": "Genetic linkage and recombination frequency calculation"
                }
            },
            {
                "problem": "In a cross between two Manx cats (Mm × Mm) where M is dominant for taillessness but MM is lethal, what phenotypic ratio among live offspring do you expect?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Cross: Mm × Mm", "M = tailless (dominant), MM = lethal", "m = normal tail (recessive)"],
                    "to_find": "Phenotypic ratio among live offspring",
                    "principle": "Homozygous dominant is lethal → those zygotes die; only Mm and mm survive in ratio 2:1 from Mendelian 1:2:1",
                    "steps": [
                        "Step 1: Genotypic expectation without lethality = 1 MM : 2 Mm : 1 mm",
                        "Step 2: MM embryos die → remaining = 2 Mm : 1 mm",
                        "Step 3: Phenotypes: tailless (Mm) : normal (mm) = 2 : 1"
                    ],
                    "answer": "Among live offspring phenotypic ratio = 2 tailless : 1 normal",
                    "concept": "Lethal alleles alter expected Mendelian ratios"
                }
            },
            {
                "problem": "Two pea plants that fail to produce purple flowers when crossed are crossed with each other and the F1 is purple. What does this indicate about the mutations (complementation test)?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Two recessive mutants each have white flowers", "Crossing mutants gives purple F1"],
                    "to_find": "Whether mutations are in same gene or different genes",
                    "principle": "Complementation: If two recessive mutations in different genes complement each other and give wild type in F1",
                    "steps": [
                        "Step 1: If mutations in different genes affecting the same trait, F1 will be wild type (complementation)",
                        "Step 2: Observed F1 is purple (wild type)",
                        "Step 3: Therefore mutations are in different genes"
                    ],
                    "answer": "Mutations complement each other → they are in different genes (non-allelic)",
                    "concept": "Complementation test to distinguish allelic vs non-allelic mutations"
                }
            },
            {
                "problem": "In humans, ABO blood group shows multiple allelism. If parents are type AB and type O, what are possible genotypes and phenotypes of children?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Parent1: AB (IAIB)", "Parent2: O (ii)"],
                    "to_find": "Possible genotypes and phenotypes of children",
                    "principle": "Gametes: AB → IA or IB; O → i",
                    "steps": [
                        "Step 1: Cross gametes → IA × i = IAi (type A), IB × i = IBi (type B)",
                        "Step 2: So children genotypes = IAi or IBi",
                        "Step 3: Phenotypes = blood group A or B"
                    ],
                    "answer": "Children will be either type A (IAi) or type B (IBi); no AB or O children expected",
                    "concept": "Multiple alleles and codominance in ABO system"
                }
            },
            {
                "problem": "A trait is controlled by many genes each contributing a small additive effect. What is this type of inheritance called and how does the phenotype distribution appear in a population?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Trait influenced by many genes (polygenes) with environmental effects"],
                    "to_find": "Name of inheritance type and phenotypic distribution",
                    "principle": "Polygenic inheritance leads to continuous variation and normally distributed phenotypes",
                    "steps": [
                        "Step 1: Multiple genes contribute additively to phenotype",
                        "Step 2: Combined genetic and environmental influence produces continuous variation",
                        "Step 3: Phenotype distribution approximates a bell-shaped (normal) curve"
                    ],
                    "answer": "Polygenic inheritance; phenotype shows continuous variation and a normal (bell-shaped) distribution",
                    "concept": "Polygenic inheritance and quantitative traits"
                }
            },
            {
                "problem": "In a pedigree, a trait appears in every generation and affects both sexes equally. What is the most likely mode of inheritance?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Trait present in every generation", "Both sexes affected equally"],
                    "to_find": "Most likely mode of inheritance",
                    "principle": "Autosomal dominant traits often appear in every generation and affect both sexes",
                    "steps": [
                        "Step 1: Presence in each generation suggests dominant inheritance",
                        "Step 2: Equal sex distribution indicates autosomal (not sex-linked)",
                        "Step 3: Therefore autosomal dominant"
                    ],
                    "answer": "Autosomal dominant inheritance",
                    "concept": "Pedigree interpretation for inheritance patterns"
                }
            },
            {
                "problem": "A male with genotype XᴰY (D = dominant allele for trait expressed in males) marries a homozygous recessive female Xᴰ'Xᴰ'. Trait appears only in males in the family. What does this suggest about the trait?",
                "difficulty": "hard",
                "solution": {
                    "given": ["Trait expressed only in males", "Male genotype XᴰY, female Xᴰ'Xᴰ'"],
                    "to_find": "Nature of the trait (sex-influenced or sex-limited?)",
                    "principle": "Sex-influenced traits show different expression in sexes; sex-limited traits expressed in only one sex regardless of genotype",
                    "steps": [
                        "Step 1: Trait appears only in males → could be sex-limited or sex-influenced",
                        "Step 2: If females with same genotype do not show trait → sex-limited",
                        "Step 3: Since example indicates expression only in males regardless of genotype, it is sex-limited"
                    ],
                    "answer": "Trait is likely sex-limited (expressed only in males) rather than simply sex-influenced",
                    "concept": "Difference between sex-limited and sex-influenced traits"
                }
            },
            {
                "problem": "A gene located on mitochondrial DNA is inherited. If a mother has a mitochondrial mutation, what is expected for her children?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Mitochondrial (cytoplasmic) inheritance", "Mother carries mutation in mtDNA"],
                    "to_find": "Pattern of inheritance in offspring",
                    "principle": "Mitochondrial genes are inherited maternally; all children receive mitochondria from mother",
                    "steps": [
                        "Step 1: Egg supplies cytoplasm (and mitochondria) to zygote",
                        "Step 2: Mutant mtDNA in mother passed to all her offspring",
                        "Step 3: Fathers do not pass mtDNA to children"
                    ],
                    "answer": "All children of the affected mother will inherit the mitochondrial mutation (maternal inheritance)",
                    "concept": "Cytoplasmic inheritance / maternal effect"
                }
            },
            {
                "problem": "In a cross between two plants showing epistasis (A and B genes), genotype A_bb produces no pigment regardless of A allele. If F2 ratio observed is 9:7 (pigmented: non-pigmented), what type of epistasis is this?",
                "difficulty": "medium",
                "solution": {
                    "given": ["F2 phenotypic ratio = 9:7", "Non-pigment occurs when bb irrespective of A"],
                    "to_find": "Type of epistasis",
                    "principle": "9:7 ratio indicates complementary gene interaction (both genes required) leading to duplicate recessive epistasis/complementation",
                    "steps": [
                        "Step 1: 9:7 ratio arises when two genes act in complementary fashion",
                        "Step 2: Homozygous recessive at either locus results in same phenotype",
                        "Step 3: Therefore complementary (duplicate recessive) interaction"
                    ],
                    "answer": "Complementary gene interaction (9:7) – both genes required for pigment production",
                    "concept": "Epistasis: complementary gene action"
                }
            },
            {
                "problem": "If two linked genes are 10 cM apart, what proportion of offspring are expected to be recombinants in a testcross?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Genetic distance = 10 centiMorgans (cM)"],
                    "to_find": "Proportion of recombinant offspring",
                    "principle": "1 cM ≈ 1% recombination frequency; recombination frequency (%) = genetic distance in cM for small distances",
                    "steps": [
                        "Step 1: Recombination frequency = 10%",
                        "Step 2: Proportion of recombinants = 0.10 (10%)"
                    ],
                    "answer": "10% of offspring are expected to be recombinants",
                    "concept": "Linkage mapping and recombination percentage"
                }
            },
            {
                "problem": "A plant with genotype Aa is crossed with Aa and gives 3:1 phenotypic ratio in F2. However, when Aa is selfed under different environment, the ratio shifts. What does this indicate about the trait?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Aa × Aa → expected 3:1", "Phenotypic ratio changes with environment"],
                    "to_find": "Nature of trait (influence of environment)",
                    "principle": "If phenotype varies with environment, trait shows variable expressivity or environmental influence (phenocopy possible)",
                    "steps": [
                        "Step 1: Mendelian ratio indicates single gene influence",
                        "Step 2: Environmental effect altering ratio indicates trait is influenced by environment (gene × environment interaction)",
                        "Step 3: Could show variable expressivity or incomplete penetrance under different conditions"
                    ],
                    "answer": "Trait is influenced by environment (gene–environment interaction) causing variable expressivity/penetrance",
                    "concept": "Environmental influence on Mendelian traits"
                }
            },
            {
                "problem": "In a cross, two heterozygotes for a recessive lethal disease have children. The expected Mendelian ratio is altered because affected genotype is lethal before birth. If initial genotypic ratio is 1:2:1, what genotypic ratio among live births will you observe?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Initial genotypic ratio = 1 AA : 2 Aa : 1 aa", "aa is lethal (dies before birth)"],
                    "to_find": "Genotypic ratio among live births",
                    "principle": "Remove lethal genotype and normalize remaining proportions",
                    "steps": [
                        "Step 1: Remove aa category → remaining = 1 AA : 2 Aa",
                        "Step 2: Normalize by dividing by total (1 + 2 = 3)",
                        "Step 3: Ratio = 1/3 AA : 2/3 Aa → 1 : 2"
                    ],
                    "answer": "Among live births genotypic ratio = 1 AA : 2 Aa (i.e., 1:2)",
                    "concept": "Effect of recessive lethal alleles on observed ratios"
                }
            },
            {
                "problem": "A homozygous dominant (AA) plant is crossed with a homozygous recessive (aa) plant. What will be the genotype and phenotype of the F1 and F2 generations?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Parental cross: AA × aa"],
                    "to_find": "Genotype & phenotype of F1 and F2",
                    "principle": "Mendel’s law of dominance and segregation",
                    "steps": [
                        "Step 1: F1 genotypes = all Aa (receive A from AA and a from aa)",
                        "Step 2: F1 phenotype = all dominant (since A is dominant)",
                        "Step 3: F2 obtained by selfing F1: Aa × Aa → genotypes 1 AA : 2 Aa : 1 aa",
                        "Step 4: F2 phenotypes = 3 dominant : 1 recessive"
                    ],
                    "answer": "F1: all Aa (dominant phenotype). F2 genotypic ratio = 1 AA : 2 Aa : 1 aa; phenotypic ratio = 3 dominant : 1 recessive.",
                    "concept": "Monohybrid cross; Mendel's laws"
                }
            },
            {
                "problem": "In a pedigree, an affected child is born to two unaffected parents. Which mode of inheritance is most likely?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Parents unaffected, child affected"],
                    "to_find": "Likely mode of inheritance",
                    "principle": "Autosomal recessive traits often appear in offspring of unaffected carrier parents",
                    "steps": [
                        "Step 1: If both parents unaffected but carriers (Aa × Aa), chance of affected child (aa) = 25%",
                        "Step 2: Autosomal dominant would usually show affected parent",
                        "Step 3: X-linked recessive possible if family pattern fits, but simplest is autosomal recessive"
                    ],
                    "answer": "Most likely autosomal recessive inheritance.",
                    "concept": "Pedigree interpretation for recessive traits"
                }
            },
            {
                "problem": "Two genes located on the same chromosome show 20% recombination frequency. If 1000 progeny are scored in a testcross, how many recombinants are expected?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Recombination frequency = 20%", "Total progeny = 1000"],
                    "to_find": "Number of recombinants expected",
                    "principle": "Recombination % × total progeny = expected recombinants",
                    "steps": [
                        "Step 1: 20% of 1000 = 0.20 × 1000",
                        "Step 2: = 200 recombinant progeny"
                    ],
                    "answer": "Approximately 200 recombinant offspring.",
                    "concept": "Genetic linkage and recombination frequency"
                }
            },
            {
                "problem": "A trait shows 80% penetrance. If 50 individuals carry the dominant allele, how many would you expect to express the phenotype?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Penetrance = 80%", "Number of carriers = 50"],
                    "to_find": "Expected number expressing phenotype",
                    "principle": "Expressing individuals = penetrance × number of carriers",
                    "steps": [
                        "Step 1: 80% of 50 = 0.8 × 50",
                        "Step 2: = 40 individuals expressing phenotype"
                    ],
                    "answer": "About 40 out of 50 carriers are expected to show the phenotype.",
                    "concept": "Penetrance in genetics"
                }
            },
            {
                "problem": "A single gene mutation causes multiple phenotypic effects (for example, mutation in one gene causes skin, bone and eye defects). What is this phenomenon called?",
                "difficulty": "easy",
                "solution": {
                    "given": ["One gene causes multiple effects"],
                    "to_find": "Name of phenomenon",
                    "principle": "One gene influencing multiple traits is pleiotropy",
                    "steps": [
                        "Step 1: Observe multiple phenotypic consequences from single gene mutation",
                        "Step 2: Recognize this as pleiotropy"
                    ],
                    "answer": "Pleiotropy.",
                    "concept": "Pleiotropy: single gene, multiple effects"
                }
            },
            {
                "problem": "In a reciprocal cross, if A (male) × B (female) gives different results from B (male) × A (female), what does this indicate about the trait?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Reciprocal crosses give different outcomes"],
                    "to_find": "Biological implication",
                    "principle": "Differences in reciprocal crosses suggest sex-linked inheritance or cytoplasmic/maternal effect",
                    "steps": [
                        "Step 1: If trait is autosomal, reciprocal crosses give same result",
                        "Step 2: Different results imply trait may be X-linked or maternally inherited (mitochondrial/cytoplasmic) or sex-influenced",
                        "Step 3: Further analysis (pedigree/sex-specific patterns) needed to distinguish"
                    ],
                    "answer": "It suggests sex-linked inheritance or maternal/cytoplasmic inheritance (i.e., trait influenced by parent-of-origin).",
                    "concept": "Reciprocal cross interpretation"
                }
            },
            {
                "problem": "A man with blood group O (ii) marries a woman of blood group AB (IAIB). What are possible genotypes and phenotypes of their children?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Father: ii (O)", "Mother: IAIB (AB)"],
                    "to_find": "Children's genotypes & phenotypes",
                    "principle": "Gametes: father i; mother IA or IB",
                    "steps": [
                        "Step 1: Cross gametes → IA × i = IAi (type A); IB × i = IBi (type B)",
                        "Step 2: No AO or BO ambiguity: genotypes IAi or IBi"
                    ],
                    "answer": "Children will be either blood group A (IAi) or B (IBi).",
                    "concept": "ABO inheritance patterns"
                }
            },
            {
                "problem": "Two pea plants, both heterozygous for flower color (Pp) and pollen sterility (Ss, where ss = sterile), are crossed. What fraction of F1 will be fertile purple-flowered plants? (Assume independent assortment.)",
                "difficulty": "hard",
                "solution": {
                    "given": ["Parents: PpSs × PpSs", "P = purple dominant, p = white; S dominant fertile, s recessive sterile"],
                    "to_find": "Fraction fertile purple plants",
                    "principle": "Independent assortment; multiply probabilities for each trait",
                    "steps": [
                        "Step 1: Purple phenotype probability = 3/4 (from Pp × Pp)",
                        "Step 2: Fertile (at least one S) probability = 3/4 (from Ss × Ss)",
                        "Step 3: Combined probability = (3/4) × (3/4) = 9/16"
                    ],
                    "answer": "9/16 of the progeny will be fertile purple-flowered plants.",
                    "concept": "Dihybrid cross with one trait affecting viability/fertility"
                }
            },
            {
                "problem": "In a population the frequency of recessive phenotype is 0.16. Assuming Hardy–Weinberg equilibrium, what is the frequency of heterozygotes?",
                "difficulty": "medium",
                "solution": {
                    "given": ["q^2 (recessive phenotype) = 0.16"],
                    "to_find": "Frequency of heterozygotes (2pq)",
                    "principle": "Hardy–Weinberg: p + q = 1; q^2 = 0.16 → q = 0.4",
                    "steps": [
                        "Step 1: q = 0.4",
                        "Step 2: p = 1 − q = 0.6",
                        "Step 3: Heterozygote frequency = 2pq = 2 × 0.6 × 0.4 = 0.48"
                    ],
                    "answer": "Frequency of heterozygotes = 0.48 (48%).",
                    "concept": "Hardy–Weinberg equilibrium calculations"
                }
            },
            {
                "problem": "A dominant allele (A) is incompletely dominant to a (a). Heterozygote Aa shows an intermediate phenotype. If two Aa individuals are crossed, what proportion of offspring will show the intermediate phenotype?",
                "difficulty": "easy",
                "solution": {
                    "given": ["Incomplete dominance: Aa intermediate", "Cross: Aa × Aa"],
                    "to_find": "Proportion intermediate phenotype",
                    "principle": "Aa × Aa gives genotypes 1 AA : 2 Aa : 1 aa; heterozygote shows intermediate",
                    "steps": [
                        "Step 1: Genotypic ratio = 1:2:1",
                        "Step 2: Intermediate phenotype corresponds to Aa = 2/4 = 1/2"
                    ],
                    "answer": "50% of offspring will show the intermediate phenotype.",
                    "concept": "Incomplete dominance ratios"
                }
            },
            {
                "problem": "A mutant allele causes a visible phenotype only in individuals older than 50 years (age-dependent expression). What genetic concept explains this observation?",
                "difficulty": "medium",
                "solution": {
                    "given": ["Phenotype appears only after certain age"],
                    "to_find": "Genetic concept name",
                    "principle": "Age-dependent expression is a form of variable expressivity and may be described as age-dependent penetrance",
                    "steps": [
                        "Step 1: Penetrance may vary with age; some alleles show late-onset expression",
                        "Step 2: Example: Huntington’s disease shows age-dependent penetrance",
                        "Step 3: Thus concept = age-dependent penetrance (a special case of variable penetrance/expressivity)"
                    ],
                    "answer": "Age-dependent penetrance (late-onset expression).",
                    "concept": "Variable penetrance / age-dependent expression"
                }
            }
        ]
    },




    "cell_the_unit_of_life": {
        "title": "Cell: The Unit of Life",
        "weightage": "4–6%",
        "introduction": "This chapter covers the fundamental unit of life - the cell. It includes cell theory, types of cells, cell organelles, and their functions. Understanding cell structure is crucial for comprehending all biological processes and is frequently tested in NEET with conceptual questions and diagrams.",

        "topics": [
            {
                "name": "Cell Theory and Types of Cells",
                "description": "Basic principles of cell biology and classification of cells based on structure and complexity.",
                "subtopics": [
                    {
                        "name": "Cell Theory",
                        "explanation": "Cell theory states that: (1) All living organisms are composed of cells, (2) Cell is the basic unit of life, (3) All cells arise from pre-existing cells. This theory was proposed by Schleiden and Schwann, and later modified by Virchow."
                    },
                    {
                        "name": "Prokaryotic vs Eukaryotic Cells",
                        "explanation": "Prokaryotic cells lack membrane-bound organelles and nucleus (e.g., bacteria, cyanobacteria). Eukaryotic cells have membrane-bound organelles and true nucleus (e.g., plant and animal cells). Prokaryotes are generally smaller (1-10 μm) while eukaryotes are larger (10-100 μm)."
                    },
                    {
                        "name": "Plant vs Animal Cells",
                        "explanation": "Plant cells have cell wall, chloroplasts, large central vacuole, and plasmodesmata. Animal cells lack these but have centrioles and lysosomes. Both have nucleus, mitochondria, endoplasmic reticulum, and Golgi apparatus."
                    }
                ]
            },
            {
                "name": "Cell Organelles and Their Functions",
                "description": "Detailed study of various cell organelles, their structure, and specific functions in cellular activities.",
                "subtopics": [
                    {
                        "name": "Nucleus",
                        "explanation": "Control center of the cell containing genetic material (DNA). Surrounded by nuclear envelope with nuclear pores. Contains nucleolus (site of ribosome synthesis) and chromatin (DNA + proteins). Regulates gene expression and cell division."
                    },
                    {
                        "name": "Mitochondria",
                        "explanation": "Powerhouse of the cell, site of cellular respiration and ATP production. Has double membrane structure with inner membrane folded into cristae. Contains its own DNA and ribosomes. More abundant in metabolically active cells."
                    },
                    {
                        "name": "Chloroplasts",
                        "explanation": "Site of photosynthesis in plant cells. Contains chlorophyll and other pigments. Has double membrane with internal thylakoid membranes forming grana. Contains stroma where Calvin cycle occurs."
                    },
                    {
                        "name": "Endoplasmic Reticulum",
                        "explanation": "Network of membranes extending from nuclear envelope. Rough ER has ribosomes and synthesizes proteins. Smooth ER lacks ribosomes and synthesizes lipids, detoxifies drugs, and stores calcium ions."
                    },
                    {
                        "name": "Golgi Apparatus",
                        "explanation": "Stack of flattened membranous sacs (cisternae). Modifies, sorts, packages, and transports proteins and lipids from ER. Forms lysosomes and secretory vesicles."
                    },
                    {
                        "name": "Lysosomes",
                        "explanation": "Membrane-bound vesicles containing digestive enzymes. Break down cellular waste, foreign materials, and damaged organelles. Known as 'suicidal bags' of the cell."
                    },
                    {
                        "name": "Ribosomes",
                        "explanation": "Non-membranous organelles composed of RNA and proteins. Site of protein synthesis. Found free in cytoplasm or attached to rough ER."
                    }
                ]
            },
            {
                "name": "Cell Membrane and Transport",
                "description": "Structure and function of cell membrane and mechanisms of cellular transport.",
                "subtopics": [
                    {
                        "name": "Fluid Mosaic Model",
                        "explanation": "Cell membrane is composed of phospholipid bilayer with embedded proteins. Proteins can be integral (spanning membrane) or peripheral (attached to surface). Cholesterol provides stability to membrane."
                    },
                    {
                        "name": "Membrane Transport",
                        "explanation": "Passive transport (diffusion, osmosis) requires no energy. Active transport requires energy (ATP) and moves substances against concentration gradient. Endocytosis and exocytosis for bulk transport."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Cell Theory Principles": [
                {
                    "name": "Universal Composition",
                    "description": "All living organisms are composed of cells and cell products"
                },
                {
                    "name": "Basic Unit",
                    "description": "Cell is the fundamental unit of structure and function in living organisms"
                },
                {
                    "name": "Origin of Cells",
                    "description": "All cells arise from pre-existing cells through cell division"
                }
            ],
            "Structural Features": [
                {
                    "name": "Prokaryotic Cell Structure",
                    "description": "Lacks nucleus and membrane-bound organelles; has nucleoid, cell wall, plasma membrane, ribosomes, and may have flagella"
                },
                {
                    "name": "Eukaryotic Cell Structure",
                    "description": "Has true nucleus and membrane-bound organelles; includes ER, Golgi, mitochondria, lysosomes, etc."
                },
                {
                    "name": "Plant Cell Specializations",
                    "description": "Cell wall (cellulose), chloroplasts, large central vacuole, plasmodesmata"
                },
                {
                    "name": "Animal Cell Specializations",
                    "description": "Centrioles, lysosomes, small vacuoles, no cell wall"
                }
            ],
            "Organelle Functions": [
                {
                    "name": "Nucleus Function",
                    "description": "Controls cellular activities, stores genetic information, site of DNA replication and transcription"
                },
                {
                    "name": "Mitochondrial Function",
                    "description": "Site of aerobic respiration, ATP production through oxidative phosphorylation"
                },
                {
                    "name": "Chloroplast Function",
                    "description": "Site of photosynthesis, converts light energy to chemical energy (glucose)"
                },
                {
                    "name": "Endomembrane System",
                    "description": "Includes ER, Golgi, lysosomes, vesicles; involved in protein synthesis, modification, and transport"
                }
            ]
        },

        "problems": [
            {
                "problem": "Which of the following statements about cell theory is correct?",
                "difficulty": "easy",
                "options": [
                    "All cells have a nucleus",
                    "All living organisms are composed of cells",
                    "All cells are of the same size",
                    "All cells can perform photosynthesis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cell theory principles"],
                    "find": "Correct statement about cell theory",
                    "principle": "Cell theory states that all living organisms are composed of cells, making it the basic unit of life. Not all cells have nucleus (prokaryotes lack it), cells vary in size, and only plant cells perform photosynthesis.",
                    "steps": [
                        {
                            "step": "Analyze each option",
                            "work": "Option 1: False - prokaryotic cells lack nucleus. Option 2: True - fundamental principle of cell theory. Option 3: False - cells vary greatly in size. Option 4: False - only photosynthetic cells perform photosynthesis.",
                            "result": "Option 2 is correct"
                        }
                    ],
                    "answer": "All living organisms are composed of cells",
                    "concept": "Cell theory fundamentals"
                }
            },
            {
                "problem": "The organelle responsible for protein synthesis and modification is:",
                "difficulty": "medium",
                "options": [
                    "Mitochondria",
                    "Rough Endoplasmic Reticulum",
                    "Smooth Endoplasmic Reticulum",
                    "Chloroplast"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cell organelles and their functions"],
                    "find": "Organelle for protein synthesis and modification",
                    "principle": "Rough ER has ribosomes attached to its surface, making it the primary site for protein synthesis. It also modifies proteins by adding carbohydrates to form glycoproteins.",
                    "steps": [
                        {
                            "step": "Analyze each organelle's function",
                            "work": "Mitochondria: ATP production. Rough ER: Protein synthesis and modification. Smooth ER: Lipid synthesis and detoxification. Chloroplast: Photosynthesis.",
                            "result": "Rough ER is correct"
                        }
                    ],
                    "answer": "Rough Endoplasmic Reticulum",
                    "concept": "Endoplasmic reticulum functions"
                }
            },
            {
                "problem": "Which structure is present in plant cells but absent in animal cells?",
                "difficulty": "easy",
                "options": [
                    "Mitochondria",
                    "Nucleus",
                    "Cell wall",
                    "Ribosomes"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Plant vs animal cell differences"],
                    "find": "Structure unique to plant cells",
                    "principle": "Cell wall is a rigid structure made of cellulose that provides support and protection to plant cells. Animal cells have only a flexible cell membrane, not a cell wall.",
                    "steps": [
                        {
                            "step": "Analyze each option",
                            "work": "Mitochondria: Present in both. Nucleus: Present in both. Cell wall: Present only in plant cells. Ribosomes: Present in both.",
                            "result": "Cell wall is correct"
                        }
                    ],
                    "answer": "Cell wall",
                    "concept": "Plant cell specializations"
                }
            },
            {
                "problem": "A cell has extensive smooth endoplasmic reticulum. What is the most likely function of this cell?",
                "difficulty": "hard",
                "options": [
                    "Protein synthesis",
                    "Lipid synthesis",
                    "ATP production",
                    "Photosynthesis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Smooth ER structure and function"],
                    "find": "Likely function based on abundant smooth ER",
                    "principle": "Smooth endoplasmic reticulum is involved in lipid synthesis, detoxification, and calcium storage. Cells with extensive smooth ER are often specialized for these functions.",
                    "steps": [
                        {
                            "step": "Analyze smooth ER functions",
                            "work": "Smooth ER synthesizes lipids (steroids, phospholipids), detoxifies drugs and poisons, and stores calcium ions. It does not synthesize proteins (rough ER function).",
                            "result": "Lipid synthesis is correct"
                        }
                    ],
                    "answer": "Lipid synthesis",
                    "concept": "Smooth endoplasmic reticulum functions"
                }
            },
            {
                "problem": "Which of the following is not a component of the endomembrane system?",
                "difficulty": "easy",
                "options": [
                    "Golgi apparatus",
                    "Lysosomes",
                    "Mitochondria",
                    "Endoplasmic reticulum"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Endomembrane system includes ER, Golgi, lysosomes, vacuoles, vesicles"],
                    "find": "Organelle not part of endomembrane system",
                    "principle": "Mitochondria and chloroplasts have their own DNA and ribosomes, not part of endomembrane system",
                    "steps": [
                        {
                            "step": "Check each option",
                            "work": "Golgi, ER, lysosomes = endomembrane system; Mitochondria = independent",
                            "result": "Correct option is mitochondria"
                        }
                    ],
                    "answer": "Mitochondria",
                    "concept": "Cell organelles and endomembrane system"
                }
            },
            {
                "problem": "Which of the following cell organelles is semi-autonomous?",
                "difficulty": "easy",
                "options": [
                    "Ribosome",
                    "Mitochondria",
                    "Golgi apparatus",
                    "Endoplasmic reticulum"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Semi-autonomous organelles have DNA, RNA, ribosomes, and can produce proteins"],
                    "find": "Identify semi-autonomous organelle",
                    "principle": "Mitochondria and chloroplasts are semi-autonomous",
                    "steps": [
                        {
                            "step": "Analyze options",
                            "work": "Only mitochondria (and chloroplasts) fulfill criteria",
                            "result": "Correct answer is mitochondria"
                        }
                    ],
                    "answer": "Mitochondria",
                    "concept": "Semi-autonomous organelles"
                }
            },
            {
                "problem": "Which organelle is responsible for packaging materials to be secreted out of the cell?",
                "difficulty": "easy",
                "options": [
                    "Mitochondria",
                    "Golgi apparatus",
                    "Endoplasmic reticulum",
                    "Lysosomes"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Golgi modifies, sorts, packages proteins & lipids"],
                    "find": "Organelle responsible for secretion",
                    "principle": "Golgi vesicles carry materials for exocytosis",
                    "steps": [
                        {
                            "step": "Check function",
                            "work": "Golgi packs and secretes proteins",
                            "result": "Golgi apparatus correct"
                        }
                    ],
                    "answer": "Golgi apparatus",
                    "concept": "Golgi body function"
                }
            },
            {
                "problem": "Which structure regulates the entry and exit of molecules in a cell?",
                "difficulty": "easy",
                "options": [
                    "Cell wall",
                    "Plasma membrane",
                    "Cytoplasm",
                    "Nucleus"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cell boundary functions"],
                    "find": "Regulator of transport",
                    "principle": "Plasma membrane is selectively permeable",
                    "steps": [
                        {
                            "step": "Analyze",
                            "work": "Cell wall is rigid, cytoplasm is filler, nucleus controls genetics. Plasma membrane controls entry/exit",
                            "result": "Plasma membrane correct"
                        }
                    ],
                    "answer": "Plasma membrane",
                    "concept": "Selective permeability"
                }
            },
            {
                "problem": "Ribosomes are composed of:",
                "difficulty": "medium",
                "options": [
                    "DNA and protein",
                    "RNA and protein",
                    "Lipid and protein",
                    "Carbohydrate and protein"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Composition of ribosomes"],
                    "find": "Main components",
                    "principle": "Ribosomes made of rRNA + protein",
                    "steps": [
                        {
                            "step": "Check",
                            "work": "rRNA + proteins form ribosome subunits",
                            "result": "RNA and protein correct"
                        }
                    ],
                    "answer": "RNA and protein",
                    "concept": "Ribosome structure"
                }
            },
            {
                "problem": "Cristae are associated with which organelle?",
                "difficulty": "medium",
                "options": [
                    "Chloroplast",
                    "Mitochondria",
                    "Nucleus",
                    "Golgi apparatus"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cristae = folds of inner membrane"],
                    "find": "Organelle containing cristae",
                    "principle": "Cristae increase surface area for ATP production in mitochondria",
                    "steps": [
                        {
                            "step": "Check",
                            "work": "Cristae only in mitochondria",
                            "result": "Answer is mitochondria"
                        }
                    ],
                    "answer": "Mitochondria",
                    "concept": "Mitochondrial structure"
                }
            },
            {
                "problem": "Which is the site of ribosome synthesis?",
                "difficulty": "medium",
                "options": [
                    "Cytoplasm",
                    "Nucleolus",
                    "Nuclear envelope",
                    "Endoplasmic reticulum"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Nucleolus is dense structure inside nucleus"],
                    "find": "Location of ribosome production",
                    "principle": "Nucleolus synthesizes rRNA and assembles ribosomal subunits",
                    "steps": [
                        {
                            "step": "Analyze",
                            "work": "Ribosome synthesis site is nucleolus",
                            "result": "Answer = nucleolus"
                        }
                    ],
                    "answer": "Nucleolus",
                    "concept": "Ribosome biogenesis"
                }
            },
            {
                "problem": "Plastids are present in:",
                "difficulty": "easy",
                "options": [
                    "Animal cells",
                    "Plant cells",
                    "Both plant and animal cells",
                    "Fungi"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Distribution of plastids"],
                    "find": "Organisms with plastids",
                    "principle": "Plastids (chloroplast, chromoplast, leucoplast) only in plants and algae",
                    "steps": [
                        {
                            "step": "Check",
                            "work": "Plastids absent in animals",
                            "result": "Answer = plant cells"
                        }
                    ],
                    "answer": "Plant cells",
                    "concept": "Plastid occurrence"
                }
            },
            {
                "problem": "Which of the following is a double-membrane bound organelle?",
                "difficulty": "easy",
                "options": [
                    "Ribosomes",
                    "Lysosomes",
                    "Mitochondria",
                    "Peroxisomes"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Organelle structures"],
                    "find": "Double membrane organelle",
                    "principle": "Mitochondria and chloroplasts are double-membrane",
                    "steps": [
                        {
                            "step": "Check",
                            "work": "Only mitochondria in options has double membrane",
                            "result": "Answer = mitochondria"
                        }
                    ],
                    "answer": "Mitochondria",
                    "concept": "Double-membrane organelles"
                }
            },
            {
                "problem": "Microtubules are composed of:",
                "difficulty": "hard",
                "options": [
                    "Actin",
                    "Tubulin",
                    "Keratin",
                    "Myosin"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cytoskeleton components"],
                    "find": "Protein forming microtubules",
                    "principle": "Microtubules are hollow structures made of tubulin dimers",
                    "steps": [
                        {
                            "step": "Check",
                            "work": "Answer is tubulin",
                            "result": "Tubulin correct"
                        }
                    ],
                    "answer": "Tubulin",
                    "concept": "Cytoskeleton"
                }
            },
            {
                "problem": "Which of the following is known as the suicide bag of the cell?",
                "difficulty": "easy",
                "options": [
                    "Ribosome",
                    "Golgi apparatus",
                    "Lysosome",
                    "Peroxisome"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Functions of lysosome"],
                    "find": "Organelle with digestive enzymes",
                    "principle": "Lysosomes contain hydrolytic enzymes that digest cellular debris",
                    "steps": [
                        {
                            "step": "Check",
                            "work": "Answer = Lysosome",
                            "result": "Correct"
                        }
                    ],
                    "answer": "Lysosome",
                    "concept": "Lysosome function"
                }
            },
            {
                "problem": "Which structure is common in prokaryotic and eukaryotic cells?",
                "difficulty": "medium",
                "options": [
                    "Nucleus",
                    "Ribosomes",
                    "Mitochondria",
                    "Chloroplast"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Prokaryotes vs eukaryotes"],
                    "find": "Common structure",
                    "principle": "Both have ribosomes, but size differs (70S vs 80S)",
                    "steps": [
                        {
                            "step": "Check",
                            "work": "Ribosomes present in both types",
                            "result": "Correct = Ribosomes"
                        }
                    ],
                    "answer": "Ribosomes",
                    "concept": "Cell similarities"
                }
            },
            {
                "problem": "Which organelle is absent in prokaryotic cells?",
                "difficulty": "easy",
                "options": [
                    "Ribosome",
                    "Nucleus",
                    "Plasma membrane",
                    "Cytoplasm"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Prokaryotic cell features"],
                    "find": "Absent organelle",
                    "principle": "Prokaryotes lack a true membrane-bound nucleus",
                    "steps": [
                        { "step": "Check", "work": "Ribosome present (70S), PM present, cytoplasm present, nucleus absent", "result": "Correct = Nucleus" }
                    ],
                    "answer": "Nucleus",
                    "concept": "Prokaryotic vs eukaryotic"
                }
            },
            {
                "problem": "What is the function of ribosomes?",
                "difficulty": "easy",
                "options": [
                    "ATP production",
                    "Protein synthesis",
                    "Lipid synthesis",
                    "Photosynthesis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cell organelles"],
                    "find": "Function of ribosome",
                    "principle": "Ribosomes translate mRNA into proteins",
                    "steps": [
                        { "step": "Check", "work": "Ribosomes = protein factories", "result": "Correct = Protein synthesis" }
                    ],
                    "answer": "Protein synthesis",
                    "concept": "Ribosome function"
                }
            },
            {
                "problem": "Which is the largest cell in the human body?",
                "difficulty": "medium",
                "options": [
                    "Neuron",
                    "Ovum",
                    "Muscle cell",
                    "RBC"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Human cell types"],
                    "find": "Largest cell",
                    "principle": "Ovum (120 µm) is the largest human cell",
                    "steps": [
                        { "step": "Compare sizes", "work": "Neuron = longest, ovum = largest, muscle = elongated, RBC = smallest", "result": "Answer = Ovum" }
                    ],
                    "answer": "Ovum",
                    "concept": "Cell size comparison"
                }
            },
            {
                "problem": "Which of the following has 70S ribosomes?",
                "difficulty": "medium",
                "options": [
                    "Mitochondria",
                    "Chloroplast",
                    "Prokaryotes",
                    "All of the above"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Ribosome types"],
                    "find": "Organelles with 70S ribosomes",
                    "principle": "Prokaryotes + mitochondria + chloroplast contain 70S",
                    "steps": [
                        { "step": "Check", "work": "Mitochondria & chloroplast = 70S, Prokaryotes = 70S", "result": "Correct = All of the above" }
                    ],
                    "answer": "All of the above",
                    "concept": "Endosymbiotic theory"
                }
            },
            {
                "problem": "Lysosomes are rich in which type of enzymes?",
                "difficulty": "easy",
                "options": [
                    "Oxidative enzymes",
                    "Hydrolytic enzymes",
                    "Photosynthetic enzymes",
                    "Polymerase enzymes"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cell organelles"],
                    "find": "Lysosomal enzymes",
                    "principle": "Lysosomes have hydrolytic enzymes to digest biomolecules",
                    "steps": [
                        { "step": "Check", "work": "Break down proteins, carbs, lipids, nucleic acids", "result": "Correct = Hydrolytic enzymes" }
                    ],
                    "answer": "Hydrolytic enzymes",
                    "concept": "Intracellular digestion"
                }
            },
            {
                "problem": "The term 'cell' was coined by?",
                "difficulty": "easy",
                "options": [
                    "Robert Brown",
                    "Robert Hooke",
                    "Leeuwenhoek",
                    "Schwann"
                ],
                "correct": 1,
                "solution": {
                    "given": ["History of cell"],
                    "find": "Scientist who coined cell",
                    "principle": "Robert Hooke observed cork cells in 1665",
                    "steps": [
                        { "step": "Check", "work": "Brown discovered nucleus, Hooke coined 'cell'", "result": "Correct = Robert Hooke" }
                    ],
                    "answer": "Robert Hooke",
                    "concept": "Cell discovery"
                }
            },
            {
                "problem": "Plasma membrane model proposed by Singer and Nicolson is known as?",
                "difficulty": "medium",
                "options": [
                    "Unit membrane model",
                    "Sandwich model",
                    "Fluid mosaic model",
                    "Trilaminar model"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Plasma membrane models"],
                    "find": "Correct model",
                    "principle": "Singer & Nicolson proposed fluid mosaic model in 1972",
                    "steps": [
                        { "step": "Check", "work": "Unit & sandwich earlier, fluid mosaic final", "result": "Correct = Fluid mosaic model" }
                    ],
                    "answer": "Fluid mosaic model",
                    "concept": "Membrane structure"
                }
            },
            {
                "problem": "Cristae are found in which organelle?",
                "difficulty": "easy",
                "options": [
                    "Mitochondria",
                    "Chloroplast",
                    "Golgi body",
                    "Nucleus"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Organelle ultrastructure"],
                    "find": "Organelle with cristae",
                    "principle": "Cristae are folds of inner mitochondrial membrane",
                    "steps": [
                        { "step": "Check", "work": "Cristae = site of oxidative phosphorylation", "result": "Correct = Mitochondria" }
                    ],
                    "answer": "Mitochondria",
                    "concept": "ATP production"
                }
            },
            {
                "problem": "Which organelle is responsible for packaging and secretion?",
                "difficulty": "easy",
                "options": [
                    "Rough ER",
                    "Smooth ER",
                    "Golgi apparatus",
                    "Lysosome"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Organelle function"],
                    "find": "Packaging and secretion",
                    "principle": "Golgi modifies, sorts, and packages proteins and lipids",
                    "steps": [
                        { "step": "Check", "work": "Golgi → secretion vesicles", "result": "Correct = Golgi apparatus" }
                    ],
                    "answer": "Golgi apparatus",
                    "concept": "Cell secretory pathway"
                }
            },
            {
                "problem": "Centrioles help in formation of?",
                "difficulty": "medium",
                "options": [
                    "Spindle fibres",
                    "Cell wall",
                    "Nuclear membrane",
                    "Ribosomes"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Cytoskeleton structures"],
                    "find": "Role of centrioles",
                    "principle": "Centrioles organize microtubules during cell division",
                    "steps": [
                        { "step": "Check", "work": "Centrioles → spindle fibres", "result": "Correct = Spindle fibres" }
                    ],
                    "answer": "Spindle fibres",
                    "concept": "Cell division machinery"
                }
            },
            {
                "problem": "Polysome is a cluster of?",
                "difficulty": "hard",
                "options": [
                    "tRNA molecules",
                    "DNA strands",
                    "Ribosomes on mRNA",
                    "Proteins"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Protein synthesis"],
                    "find": "Polysome composition",
                    "principle": "Polysomes = multiple ribosomes on single mRNA",
                    "steps": [
                        { "step": "Check", "work": "Ribosomes translating simultaneously", "result": "Correct = Ribosomes on mRNA" }
                    ],
                    "answer": "Ribosomes on mRNA",
                    "concept": "Efficient protein synthesis"
                }
            },
            {
                "problem": "Which structure controls the entry and exit of substances in a cell?",
                "difficulty": "easy",
                "options": [
                    "Cell wall",
                    "Plasma membrane",
                    "Nuclear membrane",
                    "Golgi apparatus"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cell structures"],
                    "find": "Control structure",
                    "principle": "Plasma membrane is selectively permeable",
                    "steps": [
                        { "step": "Check", "work": "Only plasma membrane regulates transport", "result": "Correct = Plasma membrane" }
                    ],
                    "answer": "Plasma membrane",
                    "concept": "Selective permeability"
                }
            },
            {
                "problem": "Which of the following is a double-membrane bound organelle?",
                "difficulty": "easy",
                "options": ["Ribosome", "Mitochondria", "Centriole", "Golgi apparatus"],
                "correct": 1,
                "solution": {
                    "given": ["Cell organelle structures"],
                    "find": "Double membrane organelle",
                    "principle": "Mitochondria and chloroplast have double membranes",
                    "steps": [
                        { "step": "Check", "work": "Ribosome no membrane, centriole no membrane, Golgi single membrane", "result": "Mitochondria is correct" }
                    ],
                    "answer": "Mitochondria",
                    "concept": "Organelle membranes"
                }
            },
            {
                "problem": "The structural and functional unit of life is:",
                "difficulty": "easy",
                "options": ["Nucleus", "Cell", "Tissue", "Organ"],
                "correct": 1,
                "solution": {
                    "given": ["Cell theory basics"],
                    "find": "Unit of life",
                    "principle": "Cell theory states all living beings are made of cells",
                    "steps": [{ "step": "Check", "work": "Cell = smallest structural & functional unit", "result": "Correct" }],
                    "answer": "Cell",
                    "concept": "Cell theory"
                }
            },
            {
                "problem": "Which organelle is also called 'suicidal bag of the cell'?",
                "difficulty": "easy",
                "options": ["Mitochondria", "Golgi body", "Lysosome", "Nucleus"],
                "correct": 2,
                "solution": {
                    "given": ["Lysosome functions"],
                    "find": "Organelle nickname",
                    "principle": "Lysosomes contain hydrolytic enzymes for autolysis",
                    "steps": [{ "step": "Check", "work": "When burst, lysosomes digest cell itself", "result": "Correct = Lysosome" }],
                    "answer": "Lysosome",
                    "concept": "Intracellular digestion"
                }
            },
            {
                "problem": "Which organelle was first observed by Anton van Leeuwenhoek?",
                "difficulty": "medium",
                "options": ["Mitochondria", "Nucleus", "Bacteria", "Chloroplast"],
                "correct": 2,
                "solution": {
                    "given": ["History of cell biology"],
                    "find": "Organelle observed",
                    "principle": "Leeuwenhoek first observed living bacteria using microscope",
                    "steps": [{ "step": "Check", "work": "He discovered 'animalcules' (bacteria)", "result": "Correct = Bacteria" }],
                    "answer": "Bacteria",
                    "concept": "Microscopy history"
                }
            },
            {
                "problem": "Who discovered the nucleus in the cell?",
                "difficulty": "easy",
                "options": ["Robert Hooke", "Robert Brown", "Schwann", "Schleiden"],
                "correct": 1,
                "solution": {
                    "given": ["Cell discovery"],
                    "find": "Nucleus discoverer",
                    "principle": "Robert Brown discovered nucleus in orchid cells (1831)",
                    "steps": [{ "step": "Check", "work": "Brown = nucleus discovery", "result": "Correct" }],
                    "answer": "Robert Brown",
                    "concept": "History of nucleus"
                }
            },
            {
                "problem": "Mesosomes are infoldings of which structure in prokaryotes?",
                "difficulty": "medium",
                "options": ["Nuclear membrane", "Plasma membrane", "Cell wall", "Cytoplasm"],
                "correct": 1,
                "solution": {
                    "given": ["Prokaryotic structures"],
                    "find": "Mesosome location",
                    "principle": "Mesosomes are plasma membrane infoldings in prokaryotes",
                    "steps": [{ "step": "Check", "work": "Help in respiration, DNA replication", "result": "Correct = Plasma membrane" }],
                    "answer": "Plasma membrane",
                    "concept": "Prokaryotic cell structure"
                }
            },
            {
                "problem": "The 80S ribosomes are composed of:",
                "difficulty": "hard",
                "options": ["50S + 30S", "60S + 40S", "70S + 10S", "40S + 20S"],
                "correct": 1,
                "solution": {
                    "given": ["Eukaryotic ribosome structure"],
                    "find": "Subunits of 80S ribosome",
                    "principle": "Eukaryotic ribosomes have large 60S and small 40S subunits",
                    "steps": [{ "step": "Check", "work": "80S = 60S + 40S", "result": "Correct" }],
                    "answer": "60S + 40S",
                    "concept": "Ribosome structure"
                }
            },
            {
                "problem": "Which part of mitochondria has enzymes for Krebs cycle?",
                "difficulty": "medium",
                "options": ["Outer membrane", "Inner membrane", "Matrix", "Cristae"],
                "correct": 2,
                "solution": {
                    "given": ["Mitochondrial functions"],
                    "find": "Location of Krebs cycle",
                    "principle": "Krebs cycle enzymes are present in mitochondrial matrix",
                    "steps": [{ "step": "Check", "work": "Matrix has enzymes for Krebs", "result": "Correct" }],
                    "answer": "Matrix",
                    "concept": "Mitochondrial metabolism"
                }
            },
            {
                "problem": "Which cell organelle is responsible for photorespiration?",
                "difficulty": "hard",
                "options": ["Mitochondria", "Peroxisome", "Chloroplast", "Nucleus"],
                "correct": 1,
                "solution": {
                    "given": ["Plant cell organelles"],
                    "find": "Organelle role in photorespiration",
                    "principle": "Peroxisomes work with mitochondria and chloroplast in photorespiration",
                    "steps": [{ "step": "Check", "work": "Photorespiration involves peroxisomes", "result": "Correct" }],
                    "answer": "Peroxisome",
                    "concept": "Plant physiology"
                }
            },
            {
                "problem": "Which cytoskeletal element forms spindle fibres?",
                "difficulty": "medium",
                "options": ["Actin filaments", "Intermediate filaments", "Microtubules", "Myosin"],
                "correct": 2,
                "solution": {
                    "given": ["Cytoskeleton types"],
                    "find": "Spindle fibre component",
                    "principle": "Microtubules made of tubulin form spindle fibres",
                    "steps": [{ "step": "Check", "work": "Microtubules form spindle during cell division", "result": "Correct" }],
                    "answer": "Microtubules",
                    "concept": "Cytoskeleton"
                }
            },
            {
                "problem": "The unit membrane is about how thick?",
                "difficulty": "medium",
                "options": ["2 nm", "5–10 nm", "20–50 nm", "100 nm"],
                "correct": 1,
                "solution": {
                    "given": ["Membrane structure"],
                    "find": "Thickness of unit membrane",
                    "principle": "Biological membrane thickness is 5–10 nm",
                    "steps": [{ "step": "Check", "work": "Electron microscopy shows 7–8 nm average", "result": "Correct" }],
                    "answer": "5–10 nm",
                    "concept": "Membrane structure"
                }
            },
            {
                "problem": "Which of the following is absent in prokaryotes but present in eukaryotes?",
                "difficulty": "medium",
                "options": ["DNA", "Ribosomes", "Mitochondria", "Cell membrane"],
                "correct": 2,
                "solution": {
                    "given": ["Cell structure comparison"],
                    "find": "Absent organelle in prokaryotes",
                    "principle": "Prokaryotes lack membrane-bound organelles like mitochondria",
                    "steps": [{ "step": "Check", "work": "Prokaryotes = no mitochondria", "result": "Correct" }],
                    "answer": "Mitochondria",
                    "concept": "Prokaryotic vs eukaryotic"
                }
            }
        ]
    },

    "human_physiology": {
        "title": "Human Physiology",
        "weightage": "15–18%",
        "introduction": "Human Physiology is the scientific study of the functions and mechanisms of the human body. It is the most important unit for NEET, covering nearly half the syllabus. This section requires a deep conceptual understanding of how various organ systems work individually and in coordination to maintain homeostasis. Questions are often application-based, linking structure to function, and involve diagrams, graphs, and clinical case studies.",

        "topics": [
            {
                "name": "Digestion and Absorption",
                "description": "The process of breaking down complex food molecules into simpler absorbable forms and their assimilation into the body.",
                "subtopics": [
                    {
                        "name": "Alimentary Canal and Digestive Glands",
                        "explanation": "The digestive system is a long tube starting from the mouth and ending at the anus. Important parts include: mouth (chewing), esophagus (food pipe), stomach (churns food), small intestine (main digestion and absorption), large intestine (water absorption). Helper organs: liver (makes bile for fat digestion), pancreas (makes digestive enzymes), salivary glands (make saliva)."
                    },
                    {
                        "name": "Physiology of Digestion",
                        "explanation": "Digestion is the breakdown of food. Mechanical digestion is physical (chewing, churning). Chemical digestion uses enzymes: Amylase in saliva breaks down starch. Pepsin in stomach breaks down proteins. Lipase from pancreas breaks down fats. Bile from liver emulsifies fats. Enzymes in small intestine finish the job."
                    },
                    {
                        "name": "Absorption and Assimilation",
                        "explanation": "Absorption is the uptake of digested food into the blood, mainly in the small intestine. The inner wall has finger-like projections called villi to increase surface area. Glucose and amino acids go directly into blood. Fatty acids and glycerol are absorbed into the lymph. Assimilation is when these nutrients are used by body cells for energy and growth."
                    },
                    {
                        "name": "Disorders of Digestive System",
                        "explanation": "Jaundice: Yellowing of skin due to liver malfunction. Vomiting: Forceful expulsion of stomach contents. Diarrhea: Frequent, watery stools. Constipation: Difficulty in passing stools. Indigestion: Incomplete digestion causing discomfort. Gallstones: Hard stones formed in the gallbladder."
                    }
                ]
            },
            {
                "name": "Breathing and Exchange of Gases",
                "description": "The process of respiration involving the exchange of oxygen and carbon dioxide between the organism and the environment.",
                "subtopics": [
                    {
                        "name": "Respiratory Organs",
                        "explanation": "The pathway of air: Nostrils → Pharynx (common passage for food and air) → Larynx (voice box) → Trachea (windpipe) → Bronchi (tubes to lungs) → Bronchioles (smaller tubes) → Alveoli (tiny air sacs where gas exchange happens). Lungs are in the chest cavity, protected by the rib cage."
                    },
                    {
                        "name": "Mechanism of Breathing",
                        "explanation": "Breathing has two steps: 1. Inspiration (Breathing in): Ribs move up and out, diaphragm flattens. This increases chest volume, pulling air into lungs. 2. Expiration (Breathing out): Ribs move down and in, diaphragm domes up. This decreases chest volume, pushing air out. It's mostly a passive process."
                    },
                    {
                        "name": "Exchange and Transport of Gases",
                        "explanation": "In the alveoli, oxygen (O2) moves from air into blood, and carbon dioxide (CO2) moves from blood into air. This happens by simple diffusion. In the blood, O2 binds to hemoglobin in red blood cells to form oxyhemoglobin. Most CO2 is carried as bicarbonate ions dissolved in plasma. A small amount binds to hemoglobin."
                    },
                    {
                        "name": "Regulation of Respiration",
                        "explanation": "Breathing is controlled automatically by the respiratory center in the brain (medulla oblongata). It checks the CO2 level in the blood. When CO2 increases (e.g., during exercise), the center sends signals to breathe faster and deeper to remove it."
                    },
                    {
                        "name": "Disorders of Respiratory System",
                        "explanation": "Asthma: Difficulty breathing due to inflamed and narrowed airways. Emphysema: Alveoli are damaged, reducing gas exchange area (often due to smoking). Occupational Respiratory Disorders: Caused by inhaling dust at work (e.g., silicosis from silica dust, asbestosis from asbestos fibers)."
                    }
                ]
            },
            {
                "name": "Body Fluids and Circulation",
                "description": "The study of blood, lymph, and the mechanism of their circulation in the body.",
                "subtopics": [
                    {
                        "name": "Blood: Components and Functions",
                        "explanation": "Blood is a fluid connective tissue. Plasma is the liquid part (55%), which contains water, proteins, salts, etc. Formed elements (45%) are: RBCs (carry O2), WBCs (fight infection), Platelets (help in clotting). Blood groups (A, B, AB, O) are determined by antigens on RBCs. Rh factor is another important antigen."
                    },
                    {
                        "name": "Lymph (Tissue Fluid)",
                        "explanation": "Lymph is a colorless fluid that leaks out from blood capillaries into spaces between cells. It carries O2 and food to cells and waste away from them. It is drained into lymph vessels, which finally return it to blood. It plays a key role in immune defense and fat absorption."
                    },
                    {
                        "name": "Circulatory Pathways",
                        "explanation": "Human circulation is double (blood passes through heart twice for one complete cycle) and closed (blood flows in vessels). Pulmonary Circulation: Heart → Lungs → Heart (for oxygenation). Systemic Circulation: Heart → Body → Heart (to deliver O2)."
                    },
                    {
                        "name": "Human Heart: Structure and Function",
                        "explanation": "The heart is a muscular pump with four chambers: two upper atria (receiving chambers) and two lower ventricles (pumping chambers). Valves prevent backflow of blood. The right side pumps deoxygenated blood to lungs. The left side pumps oxygenated blood to the body. The cardiac cycle is the sequence of events in one heartbeat."
                    },
                    {
                        "name": "ECG, Heart Sounds, and Cardiac Output",
                        "explanation": "ECG (Electrocardiogram) is a graph of the heart's electrical activity. 'Lub' sound is due to closure of AV valves. 'Dub' sound is due to closure of semilunar valves. Cardiac output is the volume of blood pumped by each ventricle per minute (Heart Rate x Stroke Volume)."
                    },
                    {
                        "name": "Disorders of Circulatory System",
                        "explanation": "Hypertension: High Blood Pressure (silent killer). Coronary Artery Disease (CAD): Fatty deposits clog heart arteries. Angina: Acute chest pain due to less O2 to heart muscle. Heart Failure: Heart cannot pump blood effectively. Heart Attack: Complete blockage of a coronary artery."
                    }
                ]
            },
            {
                "name": "Excretory Products and their Elimination",
                "description": "The process of removal of nitrogenous waste products from the body.",
                "subtopics": [
                    {
                        "name": "Human Excretory System",
                        "explanation": "Main organs are a pair of kidneys, ureters (tubes from kidneys to bladder), urinary bladder (storage sac), and urethra (tube to pass urine out). Kidneys filter blood to form urine. The functional unit of the kidney is the nephron (about 1 million per kidney)."
                    },
                    {
                        "name": "Urine Formation",
                        "explanation": "Three steps: 1. Glomerular Filtration: Blood is filtered in glomerulus, forming filtrate. 2. Reabsorption: Useful substances (water, glucose, ions) are taken back from filtrate into blood. 3. Secretion: Extra wastes (H+, K+, ammonia) are actively put into the filtrate from blood. The final product is urine."
                    },
                    {
                        "name": "Function of the Tubules",
                        "explanation": "PCT (Proximal Convoluted Tubule): Reabsorbs most water, ions, and all glucose. Henle's Loop: Helps in making urine concentrated by creating a salt gradient in the kidney medulla. DCT (Distal Convoluted Tubule): Conditional reabsorption of water and ions based on body's need. Collecting Duct: Reabsorbs water to produce concentrated urine."
                    },
                    {
                        "name": "Mechanism of Concentration of Filtrate",
                        "explanation": "The loop of Henle and vasa recta (special blood vessels) work together to create a high osmotic pressure (high salt concentration) in the inner medulla of the kidney. This gradient allows more water to be pulled out from the collecting duct, making the urine very concentrated and saving water for the body."
                    },
                    {
                        "name": "Regulation of Kidney Function",
                        "explanation": "1. Hormonal: ADH (Anti Diuretic Hormone) from brain tells kidneys to reabsorb more water when body is dehydrated. Aldosterone from adrenal gland tells kidneys to reabsorb more Na+ and water. 2. Neural: When BP falls, sympathetic nerves reduce urine formation."
                    },
                    {
                        "name": "Micturition, Role of other Organs in Excretion",
                        "explanation": "Micturition is the process of releasing urine from the bladder. It is a reflex process but can be controlled voluntarily. Lungs remove CO2. Liver secretes bile pigments (from broken down RBCs) into intestine. Skin removes water, salts, and urea as sweat."
                    },
                    {
                        "name": "Disorders of Excretory System",
                        "explanation": "Uremia: High urea level in blood. Renal Failure: Kidneys stop working. Renal Calculi: Kidney stones (hard crystal masses). Glomerulonephritis: Inflammation of kidney glomeruli. Dialysis is an artificial process to filter blood when kidneys fail."
                    }
                ]
            },
            {
                "name": "Locomotion and Movement",
                "description": "The study of movement and locomotion in humans through the skeletal and muscular systems.",
                "subtopics": [
                    {
                        "name": "Types of Movement",
                        "explanation": "Amoeboid Movement: Using pseudopodia (e.g., white blood cells). Ciliary Movement: Using cilia (e.g., movement of ovum in fallopian tube). Muscular Movement: Using muscles attached to skeleton for locomotion."
                    },
                    {
                        "name": "Human Skeletal System",
                        "explanation": "The framework of the body. Axial Skeleton: Skull, vertebral column, ribs, sternum (along body axis). Appendicular Skeleton: Limbs, girdles (shoulder and hip). Bones are connected at joints: Fibrous (immovable, e.g., skull), Cartilaginous (slightly movable, e.g., vertebrae), Synovial (freely movable, e.g., knee, shoulder)."
                    },
                    {
                        "name": "Structure of Contractile Proteins",
                        "explanation": "A muscle fiber has many myofibrils. Each myofibril has repeating units called sarcomeres. Sarcomeres contain two types of filaments: Thin filaments (made of Actin) and Thick filaments (made of Myosin). These proteins slide over each other to cause muscle contraction."
                    },
                    {
                        "name": "Mechanism of Muscle Contraction",
                        "explanation": "The 'Sliding Filament Theory'. 1. Nerve signal reaches muscle. 2. Calcium ions are released. 3. Calcium allows myosin heads to bind to actin. 4. Myosin heads pull the actin filaments inward, causing the sarcomere to shorten (contraction). 5. ATP provides energy for this process. When the signal stops, the muscle relaxes."
                    },
                    {
                        "name": "Skeletal Muscle and its Types",
                        "explanation": "Red Fibers (Slow-twitch): Have lots of myoglobin (store O2), fatigue-resistant, for sustained work (e.g., marathon running). White Fibers (Fast-twitch): Have less myoglobin, contract very fast but fatigue quickly, for short bursts of power (e.g., sprinting, weight lifting)."
                    },
                    {
                        "name": "Disorders of Muscular and Skeletal System",
                        "explanation": "Myasthenia Gravis: Autoimmune disorder causing muscle weakness. Tetany: Rapid muscle spasms due to low calcium. Arthritis: Inflammation of joints. Osteoporosis: Loss of bone mass, making bones weak and porous. Gout: Inflammation of joints due to deposition of uric acid crystals."
                    }
                ]
            },
            {
                "name": "Neural Control and Coordination",
                "description": "The study of the nervous system which controls and coordinates the body's activities.",
                "subtopics": [
                    {
                        "name": "Neuron and Nerves",
                        "explanation": "Neuron is the unit of the nervous system. It has a cell body, dendrites (receive signals), and an axon (sends signals out). A nerve is a bundle of many axons. Types: Sensory neurons (carry signals to CNS), Motor neurons (carry signals from CNS to muscles/glands), Interneurons (within CNS)."
                    },
                    {
                        "name": "Human Nervous System",
                        "explanation": "Central Nervous System (CNS): Brain and Spinal Cord (command center). Peripheral Nervous System (PNS): All nerves outside CNS. PNS is divided into: Somatic (voluntary control of skeletal muscles) and Autonomic (involuntary control of internal organs). Autonomic is further divided into Sympathetic ('Fight or Flight') and Parasympathetic ('Rest and Digest')."
                    },
                    {
                        "name": "Transmission of Nerve Impulse",
                        "explanation": "A nerve impulse is an electrical signal. At rest, the inside of the neuron is negative (resting potential). When stimulated, it becomes positive (action potential). This electrical wave travels along the axon. At the synapse (gap between neurons), chemicals called neurotransmitters are released to pass the signal to the next neuron."
                    },
                    {
                        "name": "Central Nervous System: Brain",
                        "explanation": "Forebrain: Cerebrum (largest part, for thinking, memory, reasoning), Thalamus (relay station), Hypothalamus (controls hunger, thirst, body temp, pituitary gland). Midbrain: Involved in vision, hearing. Hindbrain: Pons (relays signals), Cerebellum (balance, posture, coordination), Medulla Oblongata (controls vital functions like breathing, heartbeat)."
                    },
                    {
                        "name": "Reflex Action and Reflex Arc",
                        "explanation": "A reflex is a rapid, automatic, involuntary response to a stimulus (e.g., pulling hand away from a hot object). The path taken by the nerve impulse is the reflex arc. It involves a sensory neuron, interneuron in spinal cord, and motor neuron. The brain is not involved, making it very fast."
                    },
                    {
                        "name": "Sense Organs",
                        "explanation": "Eye: Photoreceptors (rods for dim light, cones for color vision). Ear: Hearing and balance. The cochlea has hair cells for sound. The vestibular apparatus has semi-circular canals for balance. Nose: Olfactory receptors for smell. Tongue: Taste buds for taste. Skin: Receptors for touch, pressure, pain, temperature."
                    }
                ]
            },
            {
                "name": "Chemical Coordination and Integration",
                "description": "The study of the endocrine system which controls body functions through hormones.",
                "subtopics": [
                    {
                        "name": "Endocrine Glands and Hormones",
                        "explanation": "Endocrine glands are ductless glands that secrete hormones directly into the blood. Hormones are chemical messengers that regulate growth, metabolism, reproduction, etc. They act on specific target organs."
                    },
                    {
                        "name": "Human Endocrine System",
                        "explanation": "Hypothalamus: Master controller, links nervous & endocrine systems. Pituitary: Master gland, controls other glands. Pineal: Secretes melatonin for sleep cycle. Thyroid: Controls metabolism (Thyroxine). Parathyroid: Controls blood calcium. Thymus: Trains T-cells for immunity. Adrenal: 'Stress gland' (Adrenaline for fight/flight, Cortisol for metabolism). Pancreas: Controls blood sugar (Insulin lowers, Glucagon raises). Testis (male): Testosterone for male traits. Ovary (female): Estrogen and Progesterone for female traits and menstrual cycle."
                    },
                    {
                        "name": "Mechanism of Hormone Action",
                        "explanation": "Hormones bind to specific receptors on target cells. Two types: 1. Steroid Hormones: Can enter cell, bind to receptor inside, and affect gene expression. 2. Protein Hormones: Bind to receptor on cell surface, which triggers a second messenger (like cAMP) inside the cell to cause the effect."
                    },
                    {
                        "name": "Role of Hormones as Messengers and Regulators",
                        "explanation": "Hormones coordinate slow, long-term responses. They maintain homeostasis (stable internal environment). Example: Insulin and glucagon work opposite to keep blood sugar level constant. They control growth (Growth Hormone), reproduction (Sex hormones), and response to stress (Adrenaline)."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Digestive Process": [
                {
                    "name": "Enzyme Action",
                    "description": "Specific enzymes break down specific food components: amylase for carbohydrates, pepsin/trypsin for proteins, lipase for fats"
                },
                {
                    "name": "pH Variation",
                    "description": "Different digestive organs maintain different pH levels: mouth (neutral), stomach (acidic), small intestine (alkaline) for optimal enzyme function"
                },
                {
                    "name": "Bile Function",
                    "description": "Bile doesn't contain enzymes but emulsifies fats, increasing surface area for lipase action"
                }
            ],
            "Absorption Mechanisms": [
                {
                    "name": "Villi Structure",
                    "description": "Finger-like projections in small intestine with microvilli dramatically increase surface area for absorption"
                },
                {
                    "name": "Transport Pathways",
                    "description": "Carbohydrates and proteins enter blood capillaries; fats enter lymph vessels (lacteals)"
                },
                {
                    "name": "Active Transport",
                    "description": "Many nutrients (glucose, amino acids) are absorbed against concentration gradient requiring energy"
                }
            ]
        },

        "problems": [
            {
                "problem": "Which of the following is not a function of the liver?",
                "difficulty": "easy",
                "options": [
                    "Production of bile",
                    "Storage of glycogen",
                    "Production of digestive enzymes",
                    "Detoxification"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Liver functions"],
                    "find": "Function not performed by liver",
                    "principle": "Liver produces bile, stores glycogen, and detoxifies blood. Digestive enzymes are produced by pancreas and salivary glands.",
                    "steps": [
                        {
                            "step": "Analyze each option",
                            "work": "Option 1: Liver produces bile. Option 2: Liver stores glycogen. Option 3: Pancreas produces digestive enzymes, not liver. Option 4: Liver detoxifies blood.",
                            "result": "Option 3 is correct"
                        }
                    ],
                    "answer": "Production of digestive enzymes",
                    "concept": "Liver functions"
                }
            },
            {
                "problem": "The enzyme pepsin is secreted in its inactive form pepsinogen to:",
                "difficulty": "medium",
                "options": [
                    "Increase its efficiency",
                    "Prevent self-digestion of stomach cells",
                    "Allow its storage in cells",
                    "Enable its action at alkaline pH"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Gastric enzyme secretion"],
                    "find": "Reason for inactive pepsinogen secretion",
                    "principle": "Pepsin is a powerful protein-digesting enzyme. If secreted in active form, it would digest the stomach's own lining.",
                    "steps": [
                        {
                            "step": "Analyze options",
                            "work": "Pepsinogen is activated to pepsin by HCl in stomach lumen, preventing damage to gastric cells.",
                            "result": "Prevent self-digestion is correct"
                        }
                    ],
                    "answer": "Prevent self-digestion of stomach cells",
                    "concept": "Protective mechanisms in digestion"
                }
            },
            {
                "problem": "Maximum absorption of water in the alimentary canal occurs in the:",
                "difficulty": "easy",
                "options": [
                    "Stomach",
                    "Small intestine",
                    "Large intestine",
                    "Rectum"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Water absorption sites"],
                    "find": "Primary site of water absorption",
                    "principle": "While some water is absorbed in small intestine, the large intestine specializes in water absorption, consolidating waste into feces.",
                    "steps": [
                        {
                            "step": "Check function",
                            "work": "Small intestine absorbs most nutrients and some water, but large intestine absorbs maximum water from undigested material.",
                            "result": "Large intestine is correct"
                        }
                    ],
                    "answer": "Large intestine",
                    "concept": "Water absorption physiology"
                }
            },
            {
                "problem": "Which of the following is not a component of pancreatic juice?",
                "difficulty": "medium",
                "options": [
                    "Trypsinogen",
                    "Amylase",
                    "Enterokinase",
                    "Lipase"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Pancreatic juice composition"],
                    "find": "Component not found in pancreatic juice",
                    "principle": "Pancreatic juice contains trypsinogen, amylase, lipase, nucleases, and bicarbonate. Enterokinase is secreted by intestinal mucosa.",
                    "steps": [
                        {
                            "step": "Analyze options",
                            "work": "Trypsinogen, amylase and lipase are pancreatic enzymes. Enterokinase is intestinal enzyme that activates trypsinogen.",
                            "result": "Enterokinase is correct answer"
                        }
                    ],
                    "answer": "Enterokinase",
                    "concept": "Pancreatic secretion"
                }
            },
            {
                "problem": "The sight, smell or even thought of food can trigger the secretion of:",
                "difficulty": "hard",
                "options": [
                    "Gastric juice",
                    "Pancreatic juice",
                    "Bile",
                    "Intestinal juice"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Cephalic phase of digestion"],
                    "find": "Secretion triggered by food stimuli",
                    "principle": "The cephalic phase (before food enters stomach) is mediated by vagus nerve and triggers gastric juice secretion in anticipation of food.",
                    "steps": [
                        {
                            "step": "Check neural control",
                            "work": "Sensory stimuli activate parasympathetic nervous system which stimulates gastric gland secretion.",
                            "result": "Gastric juice is correct"
                        }
                    ],
                    "answer": "Gastric juice",
                    "concept": "Neural regulation of digestion"
                }
            },
            {
                "problem": "The HCl in gastric juice is secreted by:",
                "difficulty": "medium",
                "options": [
                    "Chief cells",
                    "Parietal cells",
                    "Goblet cells",
                    "Mucous cells"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Gastric gland cell types"],
                    "find": "Cell responsible for HCl secretion",
                    "principle": "Parietal (oxyntic) cells in gastric glands secrete hydrochloric acid (HCl) and intrinsic factor.",
                    "steps": [
                        {
                            "step": "Analyze options",
                            "work": "Chief cells secrete pepsinogen, goblet and mucous cells secrete mucus. Only parietal cells secrete HCl.",
                            "result": "Parietal cells is correct"
                        }
                    ],
                    "answer": "Parietal cells",
                    "concept": "Gastric secretion"
                }
            },
            {
                "problem": "Which of the following is not a function of the large intestine?",
                "difficulty": "easy",
                "options": [
                    "Absorption of water",
                    "Absorption of electrolytes",
                    "Absorption of vitamins",
                    "Absorption of amino acids"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Large intestine functions"],
                    "find": "Function not performed by large intestine",
                    "principle": "Large intestine absorbs water, electrolytes, and vitamins produced by gut bacteria. Amino acid absorption occurs in small intestine.",
                    "steps": [
                        {
                            "step": "Check functions",
                            "work": "Amino acids are absorbed in jejunum of small intestine, not large intestine.",
                            "result": "Absorption of amino acids is correct answer"
                        }
                    ],
                    "answer": "Absorption of amino acids",
                    "concept": "Large intestine physiology"
                }
            },
            {
                "problem": "The hormone that stimulates the secretion of pancreatic juice is:",
                "difficulty": "medium",
                "options": [
                    "Secretin",
                    "Cholecystokinin (CCK)",
                    "Gastrin",
                    "Enterogastrone"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Hormonal control of digestion"],
                    "find": "Hormone stimulating pancreatic secretion",
                    "principle": "Cholecystokinin (CCK) is secreted by duodenum in response to fats and proteins, stimulating pancreatic enzyme secretion and gallbladder contraction.",
                    "steps": [
                        {
                            "step": "Analyze options",
                            "work": "Secretin stimulates bicarbonate secretion, gastrin stimulates gastric acid secretion, enterogastrone inhibits gastric motility. CCK stimulates pancreatic juice secretion.",
                            "result": "Cholecystokinin (CCK) is correct"
                        }
                    ],
                    "answer": "Cholecystokinin (CCK)",
                    "concept": "Gastrointestinal hormones"
                }
            },
            {
                "problem": "The dental formula for adult human is:",
                "difficulty": "hard",
                "options": [
                    "I 2/2, C 1/1, PM 2/2, M 3/3",
                    "I 2/2, C 1/1, PM 3/3, M 2/2",
                    "I 3/3, C 1/1, PM 2/2, M 2/2",
                    "I 2/2, C 2/2, PM 2/2, M 2/2"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Human dentition"],
                    "find": "Correct dental formula",
                    "principle": "Adult human dental formula is 2.1.2.3/2.1.2.3 per quadrant: 2 Incisors, 1 Canine, 2 Premolars, 3 Molars.",
                    "steps": [
                        {
                            "step": "Recall formula",
                            "work": "Standard human dental formula is I2/2 C1/1 PM2/2 M3/3 = 32 total teeth.",
                            "result": "Option 1 is correct"
                        }
                    ],
                    "answer": "I 2/2, C 1/1, PM 2/2, M 3/3",
                    "concept": "Human dentition"
                }
            },
            {
                "problem": "Which of the following is not a proteolytic enzyme?",
                "difficulty": "medium",
                "options": [
                    "Pepsin",
                    "Trypsin",
                    "Amylase",
                    "Chymotrypsin"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Digestive enzyme types"],
                    "find": "Non-proteolytic enzyme",
                    "principle": "Proteolytic enzymes break down proteins. Amylase digests carbohydrates, not proteins.",
                    "steps": [
                        {
                            "step": "Check enzyme functions",
                            "work": "Pepsin, trypsin, and chymotrypsin all digest proteins. Amylase digests starch.",
                            "result": "Amylase is correct answer"
                        }
                    ],
                    "answer": "Amylase",
                    "concept": "Enzyme specificity"
                }
            },
            {
                "problem": "The process of emulsification of fats is carried out by:",
                "difficulty": "easy",
                "options": [
                    "Bile salts",
                    "Pancreatic lipase",
                    "Intestinal lipase",
                    "Gastric lipase"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Fat digestion process"],
                    "find": "Agent for fat emulsification",
                    "principle": "Bile salts (from liver) emulsify fats by breaking large fat globules into smaller droplets, increasing surface area for lipase action.",
                    "steps": [
                        {
                            "step": "Analyze options",
                            "work": "Lipases digest fats but don't emulsify them. Only bile salts perform emulsification.",
                            "result": "Bile salts is correct"
                        }
                    ],
                    "answer": "Bile salts",
                    "concept": "Fat digestion"
                }
            },
            {
                "problem": "The sphincter that regulates the passage of food from stomach to duodenum is:",
                "difficulty": "medium",
                "options": [
                    "Cardiac sphincter",
                    "Pyloric sphincter",
                    "Ileocecal sphincter",
                    "Anal sphincter"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Gastrointestinal sphincters"],
                    "find": "Sphincter between stomach and duodenum",
                    "principle": "The pyloric sphincter controls the passage of chyme from stomach to duodenum, opening periodically to allow small amounts through.",
                    "steps": [
                        {
                            "step": "Check locations",
                            "work": "Cardiac sphincter is between esophagus and stomach, ileocecal between small and large intestine, anal sphincter at anus. Only pyloric is between stomach and duodenum.",
                            "result": "Pyloric sphincter is correct"
                        }
                    ],
                    "answer": "Pyloric sphincter",
                    "concept": "GI tract anatomy"
                }
            },
            {
                "problem": "Which vitamin is absorbed along with fats?",
                "difficulty": "medium",
                "options": [
                    "Vitamin B12",
                    "Vitamin C",
                    "Vitamin D",
                    "Vitamin B1"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Vitamin absorption"],
                    "find": "Fat-soluble vitamin",
                    "principle": "Fat-soluble vitamins (A, D, E, K) are absorbed along with dietary fats in the small intestine and require bile for absorption.",
                    "steps": [
                        {
                            "step": "Check vitamin solubility",
                            "work": "Vitamin D is fat-soluble. Vitamins B12, C, and B1 are water-soluble and have different absorption mechanisms.",
                            "result": "Vitamin D is correct"
                        }
                    ],
                    "answer": "Vitamin D",
                    "concept": "Vitamin absorption"
                }
            },
            {
                "problem": "The wave-like movement that pushes food through the alimentary canal is called:",
                "difficulty": "easy",
                "options": [
                    "Peristalsis",
                    "Segmentation",
                    "Mastication",
                    "Emulsification"
                ],
                "correct": 0,
                "solution": {
                    "given": ["GI motility patterns"],
                    "find": "Propulsive movement in GI tract",
                    "principle": "Peristalsis is the coordinated, wave-like muscular contractions that propel food forward through the digestive tract.",
                    "steps": [
                        {
                            "step": "Analyze options",
                            "work": "Segmentation mixes food, mastication is chewing, emulsification is fat breakdown. Only peristalsis propels food forward.",
                            "result": "Peristalsis is correct"
                        }
                    ],
                    "answer": "Peristalsis",
                    "concept": "GI motility"
                }
            },
            {
                "problem": "Which of the following is not a component of saliva?",
                "difficulty": "medium",
                "options": [
                    "Lysozyme",
                    "Amylase",
                    "Pepsin",
                    "Mucin"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Saliva composition"],
                    "find": "Component not found in saliva",
                    "principle": "Saliva contains water, electrolytes, mucin (lubrication), salivary amylase (carbohydrate digestion), and lysozyme (antibacterial). Pepsin is a gastric enzyme.",
                    "steps": [
                        {
                            "step": "Check components",
                            "work": "Pepsin is secreted in stomach, not in saliva. All other options are salivary components.",
                            "result": "Pepsin is correct answer"
                        }
                    ],
                    "answer": "Pepsin",
                    "concept": "Salivary secretion"
                }
            },
            {
                "problem": "The condition characterized by inflammation of liver is:",
                "difficulty": "easy",
                "options": [
                    "Hepatitis",
                    "Cirrhosis",
                    "Jaundice",
                    "Gallstones"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Liver disorders"],
                    "find": "Liver inflammation condition",
                    "principle": "Hepatitis refers to inflammation of the liver, which can be caused by viruses, alcohol, drugs, or autoimmune conditions.",
                    "steps": [
                        {
                            "step": "Analyze options",
                            "work": "Cirrhosis is scarring of liver, jaundice is yellowing due to bilirubin buildup, gallstones are stones in gallbladder. Only hepatitis means liver inflammation.",
                            "result": "Hepatitis is correct"
                        }
                    ],
                    "answer": "Hepatitis",
                    "concept": "Liver disorders"
                }
            },
            {
                "problem": "The final product of protein digestion is:",
                "difficulty": "easy",
                "options": [
                    "Amino acids",
                    "Dipeptides",
                    "Polypeptides",
                    "Peptones"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Protein digestion end products"],
                    "find": "Final absorbable form of proteins",
                    "principle": "Proteins are digested through multiple stages (pepsin → trypsin → chymotrypsin → peptidases) to their monomeric units - amino acids, which are then absorbed.",
                    "steps": [
                        {
                            "step": "Check digestion sequence",
                            "work": "While dipeptides and tripeptides can be absorbed, they are further broken down to amino acids inside intestinal cells. Amino acids are the final absorbable form.",
                            "result": "Amino acids is correct"
                        }
                    ],
                    "answer": "Amino acids",
                    "concept": "Protein digestion"
                }
            },
            {
                "problem": "The primary site for absorption of nutrients in the human digestive system is:",
                "difficulty": "easy",
                "options": [
                    "Stomach",
                    "Duodenum",
                    "Jejunum",
                    "Large intestine"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Digestive system anatomy"],
                    "find": "Primary absorption site",
                    "principle": "The jejunum, part of the small intestine, is specially adapted with villi and microvilli that provide enormous surface area for nutrient absorption.",
                    "steps": [
                        {
                            "step": "Analyze options",
                            "work": "Stomach absorbs some water and drugs; duodenum is for digestion; large intestine absorbs water; jejunum is main absorption site for nutrients.",
                            "result": "Jejunum is correct"
                        }
                    ],
                    "answer": "Jejunum",
                    "concept": "Absorption physiology"
                }
            },
            {
                "problem": "Which enzyme begins the digestion of starch in the mouth?",
                "difficulty": "easy",
                "options": [
                    "Pepsin",
                    "Amylase",
                    "Lipase",
                    "Trypsin"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Carbohydrate digestion"],
                    "find": "Enzyme for starch digestion in mouth",
                    "principle": "Salivary amylase (ptyalin) is secreted by salivary glands and begins the chemical digestion of starch into maltose in the mouth.",
                    "steps": [
                        {
                            "step": "Check enzyme functions",
                            "work": "Pepsin digests proteins in stomach; lipase digests fats; trypsin digests proteins in small intestine. Only amylase digests starch in mouth.",
                            "result": "Amylase is correct"
                        }
                    ],
                    "answer": "Amylase",
                    "concept": "Enzyme action"
                }
            },
            {
                "problem": "The hormone that stimulates the release of bicarbonate-rich pancreatic juice is:",
                "difficulty": "medium",
                "options": [
                    "Secretin",
                    "Cholecystokinin",
                    "Gastrin",
                    "Enterogastrone"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Gastrointestinal hormones"],
                    "find": "Hormone for bicarbonate secretion",
                    "principle": "Secretin is released by the duodenum in response to acidic chyme and stimulates the pancreas to secrete bicarbonate-rich fluid to neutralize acidity.",
                    "steps": [
                        {
                            "step": "Analyze hormone functions",
                            "work": "CCK stimulates enzyme secretion; gastrin stimulates gastric acid; enterogastrone inhibits gastric secretion. Only secretin stimulates bicarbonate secretion.",
                            "result": "Secretin is correct"
                        }
                    ],
                    "answer": "Secretin",
                    "concept": "Hormonal regulation"
                }
            },
            {
                "problem": "Which of the following is not a function of the liver?",
                "difficulty": "medium",
                "options": [
                    "Glycogenesis",
                    "Detoxification",
                    "Erythropoiesis",
                    "Cholesterol synthesis"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Liver functions"],
                    "find": "Non-liver function",
                    "principle": "Erythropoiesis (red blood cell formation) occurs primarily in bone marrow in adults, not in the liver.",
                    "steps": [
                        {
                            "step": "Check liver functions",
                            "work": "Liver performs glycogenesis (glycogen formation), detoxification, and cholesterol synthesis. Erythropoiesis occurs in bone marrow.",
                            "result": "Erythropoiesis is correct answer"
                        }
                    ],
                    "answer": "Erythropoiesis",
                    "concept": "Liver physiology"
                }
            },
            {
                "problem": "The condition where there is inflammation of the lining of the stomach is called:",
                "difficulty": "easy",
                "options": [
                    "Gastritis",
                    "Enteritis",
                    "Colitis",
                    "Hepatitis"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Digestive disorders"],
                    "find": "Stomach inflammation",
                    "principle": "Gastritis refers to inflammation, irritation, or erosion of the stomach lining, which can be acute or chronic.",
                    "steps": [
                        {
                            "step": "Analyze terms",
                            "work": "Enteritis is intestinal inflammation; colitis is colon inflammation; hepatitis is liver inflammation. Only gastritis refers to stomach.",
                            "result": "Gastritis is correct"
                        }
                    ],
                    "answer": "Gastritis",
                    "concept": "Digestive disorders"
                }
            },
            {
                "problem": "Which of the following is not directly involved in fat digestion?",
                "difficulty": "medium",
                "options": [
                    "Bile salts",
                    "Pancreatic lipase",
                    "Gastric lipase",
                    "Salivary amylase"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Fat digestion process"],
                    "find": "Non-fat digesting component",
                    "principle": "Salivary amylase digests carbohydrates (starch) in the mouth and has no role in fat digestion.",
                    "steps": [
                        {
                            "step": "Check functions",
                            "work": "Bile salts emulsify fats; pancreatic and gastric lipases digest fats. Salivary amylase digests carbohydrates only.",
                            "result": "Salivary amylase is correct answer"
                        }
                    ],
                    "answer": "Salivary amylase",
                    "concept": "Fat digestion"
                }
            },
            {
                "problem": "The process by which nutrients pass through intestinal mucosa into blood or lymph is called:",
                "difficulty": "easy",
                "options": [
                    "Digestion",
                    "Absorption",
                    "Assimilation",
                    "Egestion"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Digestive processes"],
                    "find": "Process of nutrient transfer",
                    "principle": "Absorption is the process where digested food molecules pass through the intestinal wall into the bloodstream or lymphatic system.",
                    "steps": [
                        {
                            "step": "Define terms",
                            "work": "Digestion breaks down food; assimilation uses nutrients; egestion eliminates waste. Absorption is the transfer process.",
                            "result": "Absorption is correct"
                        }
                    ],
                    "answer": "Absorption",
                    "concept": "Digestive terminology"
                }
            },
            {
                "problem": "Which vitamin requires intrinsic factor for absorption?",
                "difficulty": "medium",
                "options": [
                    "Vitamin A",
                    "Vitamin B12",
                    "Vitamin C",
                    "Vitamin D"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Vitamin absorption mechanisms"],
                    "find": "Vitamin needing intrinsic factor",
                    "principle": "Vitamin B12 (cobalamin) requires intrinsic factor, a glycoprotein secreted by gastric parietal cells, for absorption in the ileum.",
                    "steps": [
                        {
                            "step": "Check absorption requirements",
                            "work": "Vitamins A, C, and D don't require intrinsic factor. Only B12 has this specific absorption mechanism.",
                            "result": "Vitamin B12 is correct"
                        }
                    ],
                    "answer": "Vitamin B12",
                    "concept": "Vitamin absorption"
                }
            },
            {
                "problem": "The sphincter that prevents reflux of stomach contents into esophagus is:",
                "difficulty": "medium",
                "options": [
                    "Pyloric sphincter",
                    "Cardiac sphincter",
                    "Ileocecal valve",
                    "Anal sphincter"
                ],
                "correct": 1,
                "solution": {
                    "given": ["GI sphincters"],
                    "find": "Sphincter preventing acid reflux",
                    "principle": "The cardiac sphincter (lower esophageal sphincter) located at the junction of esophagus and stomach prevents backflow of gastric contents.",
                    "steps": [
                        {
                            "step": "Analyze locations",
                            "work": "Pyloric regulates stomach-duodenum passage; ileocecal regulates small-large intestine; anal controls defecation. Cardiac prevents esophageal reflux.",
                            "result": "Cardiac sphincter is correct"
                        }
                    ],
                    "answer": "Cardiac sphincter",
                    "concept": "GI anatomy"
                }
            },
            {
                "problem": "Which of the following is not a component of pancreatic juice?",
                "difficulty": "medium",
                "options": [
                    "Trypsinogen",
                    "Amylase",
                    "Nuclease",
                    "Pepsin"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Pancreatic secretion composition"],
                    "find": "Non-pancreatic component",
                    "principle": "Pepsin is a gastric enzyme secreted by chief cells in the stomach, not by the pancreas.",
                    "steps": [
                        {
                            "step": "Check secretion sources",
                            "work": "Trypsinogen, amylase, and nucleases are pancreatic secretions. Pepsin is secreted in stomach.",
                            "result": "Pepsin is correct answer"
                        }
                    ],
                    "answer": "Pepsin",
                    "concept": "Digestive secretions"
                }
            },
            {
                "problem": "The wave-like muscular contractions that move food through esophagus are called:",
                "difficulty": "easy",
                "options": [
                    "Peristalsis",
                    "Segmentation",
                    "Mastication",
                    "Deglutition"
                ],
                "correct": 0,
                "solution": {
                    "given": ["GI motility"],
                    "find": "Esophageal movement",
                    "principle": "Peristalsis is the coordinated, rhythmic contraction of smooth muscles that propels food through the esophagus and entire digestive tract.",
                    "steps": [
                        {
                            "step": "Define terms",
                            "work": "Segmentation mixes food; mastication is chewing; deglutition is swallowing. Peristalsis is the propulsive movement.",
                            "result": "Peristalsis is correct"
                        }
                    ],
                    "answer": "Peristalsis",
                    "concept": "GI motility"
                }
            },
            {
                "problem": "Which of the following is not a function of hydrochloric acid in stomach?",
                "difficulty": "hard",
                "options": [
                    "Activation of pepsinogen",
                    "Killing microorganisms",
                    "Emulsification of fats",
                    "Denaturation of proteins"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Gastric acid functions"],
                    "find": "Non-function of HCl",
                    "principle": "HCl activates pepsinogen to pepsin, kills ingested microbes, and denatures proteins, but it does not emulsify fats - that's the function of bile salts.",
                    "steps": [
                        {
                            "step": "Analyze HCl functions",
                            "work": "Emulsification is mechanical breakdown of fats by bile salts, not a chemical function of HCl.",
                            "result": "Emulsification of fats is correct answer"
                        }
                    ],
                    "answer": "Emulsification of fats",
                    "concept": "Gastric secretion functions"
                }
            },
            {
                "problem": "The enzyme that breaks down lactose into glucose and galactose is:",
                "difficulty": "medium",
                "options": [
                    "Maltase",
                    "Sucrase",
                    "Lactase",
                    "Amylase"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Carbohydrate digestion enzymes"],
                    "find": "Lactose-digesting enzyme",
                    "principle": "Lactase is the specific enzyme that hydrolyzes lactose (milk sugar) into its monosaccharide components glucose and galactose.",
                    "steps": [
                        {
                            "step": "Analyze enzyme specificity",
                            "work": "Maltase breaks down maltose; sucrase breaks down sucrose; amylase breaks down starch. Only lactase targets lactose.",
                            "result": "Lactase is correct"
                        }
                    ],
                    "answer": "Lactase",
                    "concept": "Enzyme specificity"
                }
            },
            {
                "problem": "Which part of the digestive system produces the greatest quantity of digestive enzymes?",
                "difficulty": "medium",
                "options": [
                    "Salivary glands",
                    "Stomach",
                    "Liver",
                    "Pancreas"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Digestive enzyme sources"],
                    "find": "Primary enzyme producer",
                    "principle": "The pancreas produces the widest variety and greatest quantity of digestive enzymes, including trypsin, chymotrypsin, amylase, lipase, and nucleases.",
                    "steps": [
                        {
                            "step": "Compare enzyme production",
                            "work": "Salivary glands produce amylase only; stomach produces pepsin; liver produces no enzymes (only bile); pancreas produces multiple enzymes for all food types.",
                            "result": "Pancreas is correct"
                        }
                    ],
                    "answer": "Pancreas",
                    "concept": "Digestive secretions"
                }
            },
            {
                "problem": "The process by which large fat droplets are broken into smaller ones is called:",
                "difficulty": "easy",
                "options": [
                    "Emulsification",
                    "Digestion",
                    "Absorption",
                    "Assimilation"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Fat digestion process"],
                    "find": "Fat droplet breakdown process",
                    "principle": "Emulsification is the mechanical process where bile salts break large fat globules into smaller droplets, increasing surface area for enzymatic action.",
                    "steps": [
                        {
                            "step": "Define terms",
                            "work": "Digestion is chemical breakdown; absorption is nutrient uptake; assimilation is nutrient utilization. Only emulsification describes mechanical fat breakdown.",
                            "result": "Emulsification is correct"
                        }
                    ],
                    "answer": "Emulsification",
                    "concept": "Fat digestion"
                }
            },
            {
                "problem": "Which of the following is not a component of bile?",
                "difficulty": "hard",
                "options": [
                    "Bile salts",
                    "Bilirubin",
                    "Cholesterol",
                    "Enzymes"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Bile composition"],
                    "find": "Non-component of bile",
                    "principle": "Bile contains bile salts, cholesterol, phospholipids, bilirubin, electrolytes, and water, but does not contain digestive enzymes.",
                    "steps": [
                        {
                            "step": "Analyze bile components",
                            "work": "Bile salts, bilirubin, and cholesterol are all normal bile components. Enzymes are produced by pancreas, not liver.",
                            "result": "Enzymes is correct answer"
                        }
                    ],
                    "answer": "Enzymes",
                    "concept": "Bile composition"
                }
            },
            {
                "problem": "The hormone that inhibits gastric secretion and motility is:",
                "difficulty": "medium",
                "options": [
                    "Gastrin",
                    "Secretin",
                    "Cholecystokinin",
                    "Enterogastrone"
                ],
                "correct": 3,
                "solution": {
                    "given": ["GI hormones"],
                    "find": "Gastric inhibitory hormone",
                    "principle": "Enterogastrone is a collective term for hormones (including secretin and CCK) that inhibit gastric secretion and motility when chyme enters the duodenum.",
                    "steps": [
                        {
                            "step": "Analyze hormone functions",
                            "work": "Gastrin stimulates gastric secretion; secretin stimulates bicarbonate; CCK stimulates enzymes. Enterogastrone inhibits gastric functions.",
                            "result": "Enterogastrone is correct"
                        }
                    ],
                    "answer": "Enterogastrone",
                    "concept": "Hormonal regulation"
                }
            },
            {
                "problem": "Which of the following is absorbed primarily in the large intestine?",
                "difficulty": "easy",
                "options": [
                    "Glucose",
                    "Amino acids",
                    "Water",
                    "Fatty acids"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Absorption sites"],
                    "find": "Large intestine absorption",
                    "principle": "While most nutrient absorption occurs in the small intestine, the large intestine primarily absorbs water, electrolytes, and some vitamins produced by gut bacteria.",
                    "steps": [
                        {
                            "step": "Check absorption locations",
                            "work": "Glucose, amino acids, and fatty acids are absorbed in small intestine. Water is mainly absorbed in large intestine.",
                            "result": "Water is correct"
                        }
                    ],
                    "answer": "Water",
                    "concept": "Absorption physiology"
                }
            },
            {
                "problem": "The condition characterized by inability to digest lactose due to lactase deficiency is:",
                "difficulty": "easy",
                "options": [
                    "Lactose intolerance",
                    "Galactosemia",
                    "Celiac disease",
                    "Crohn's disease"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Digestive disorders"],
                    "find": "Lactase deficiency condition",
                    "principle": "Lactose intolerance results from deficiency of lactase enzyme, leading to inability to digest lactose and causing gastrointestinal symptoms.",
                    "steps": [
                        {
                            "step": "Analyze disorders",
                            "work": "Galactosemia is genetic disorder of galactose metabolism; celiac is gluten sensitivity; Crohn's is inflammatory bowel disease. Only lactose intolerance involves lactase deficiency.",
                            "result": "Lactose intolerance is correct"
                        }
                    ],
                    "answer": "Lactose intolerance",
                    "concept": "Digestive disorders"
                }
            },
            {
                "problem": "Which of the following is not a function of the stomach?",
                "difficulty": "medium",
                "options": [
                    "Storage of food",
                    "Mechanical digestion",
                    "Absorption of most nutrients",
                    "Secretion of gastric juice"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Stomach functions"],
                    "find": "Non-stomach function",
                    "principle": "The stomach stores food, mechanically churns it, and secretes gastric juice, but most nutrient absorption occurs in the small intestine.",
                    "steps": [
                        {
                            "step": "Check stomach functions",
                            "work": "Stomach absorbs only water, alcohol, and some drugs. Most nutrients are absorbed in small intestine.",
                            "result": "Absorption of most nutrients is correct answer"
                        }
                    ],
                    "answer": "Absorption of most nutrients",
                    "concept": "Stomach physiology"
                }
            },
            {
                "problem": "The enzyme that activates trypsinogen to trypsin is:",
                "difficulty": "hard",
                "options": [
                    "Enterokinase",
                    "Pepsin",
                    "Amylase",
                    "Lipase"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Enzyme activation cascade"],
                    "find": "Trypsinogen activator",
                    "principle": "Enterokinase (enteropeptidase), secreted by duodenal mucosa, converts trypsinogen to active trypsin, which then activates other pancreatic zymogens.",
                    "steps": [
                        {
                            "step": "Analyze activation pathway",
                            "work": "Pepsin activates pepsinogen; amylase and lipase digest food. Only enterokinase activates trypsinogen.",
                            "result": "Enterokinase is correct"
                        }
                    ],
                    "answer": "Enterokinase",
                    "concept": "Enzyme activation"
                }
            },
            {
                "problem": "Which vitamin is synthesized by gut bacteria?",
                "difficulty": "medium",
                "options": [
                    "Vitamin A",
                    "Vitamin B12",
                    "Vitamin C",
                    "Vitamin K"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Vitamin synthesis"],
                    "find": "Bacteria-synthesized vitamin",
                    "principle": "Vitamin K (specifically K2) is synthesized by beneficial bacteria in the large intestine and is essential for blood clotting.",
                    "steps": [
                        {
                            "step": "Check vitamin sources",
                            "work": "Vitamins A, B12, and C are obtained from diet. Vitamin K is both dietary and synthesized by gut flora.",
                            "result": "Vitamin K is correct"
                        }
                    ],
                    "answer": "Vitamin K",
                    "concept": "Vitamin synthesis"
                }
            },
            {
                "problem": "The rhythmic local contractions that mix food with digestive juices are called:",
                "difficulty": "medium",
                "options": [
                    "Peristalsis",
                    "Segmentation",
                    "Deglutition",
                    "Mass movement"
                ],
                "correct": 1,
                "solution": {
                    "given": ["GI motility patterns"],
                    "find": "Mixing contractions",
                    "principle": "Segmentation involves localized rhythmic contractions that mix chyme with digestive juices without net forward movement.",
                    "steps": [
                        {
                            "step": "Define motility types",
                            "work": "Peristalsis propels food forward; deglutition is swallowing; mass movement occurs in colon. Segmentation is for mixing.",
                            "result": "Segmentation is correct"
                        }
                    ],
                    "answer": "Segmentation",
                    "concept": "GI motility"
                }
            },
            {
                "problem": "Which of the following is not a component of saliva?",
                "difficulty": "medium",
                "options": [
                    "Water",
                    "Electrolytes",
                    "Mucin",
                    "Pepsin"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Saliva composition"],
                    "find": "Non-salivary component",
                    "principle": "Saliva consists of water, electrolytes, mucin, lysozyme, and salivary amylase. Pepsin is a gastric enzyme, not found in saliva.",
                    "steps": [
                        {
                            "step": "Analyze components",
                            "work": "Water, electrolytes, and mucin are salivary components. Pepsin is secreted in stomach.",
                            "result": "Pepsin is correct answer"
                        }
                    ],
                    "answer": "Pepsin",
                    "concept": "Salivary secretion"
                }
            }
        ]
    },



    "plant_physiology": {
        "title": "Plant Physiology",
        "weightage": "8–10%",
        "introduction": "Plant Physiology is the study of plant functions and processes, including photosynthesis, respiration, plant nutrition, transport mechanisms, growth regulators, and responses to environmental stimuli. This unit is crucial for understanding how plants grow, develop, and interact with their environment. NEET questions often focus on experimental setups, hormonal actions, transport mechanisms, and photosynthesis biochemistry.",

        "topics": [
            {
                "name": "Transport in Plants",
                "description": "Mechanisms of movement of water, minerals, and food in plants through diffusion, osmosis, active transport, and mass flow.",
                "subtopics": [
                    {
                        "name": "Means of Transport",
                        "explanation": "Diffusion: Passive movement of substances from high to low concentration. Osmosis: Diffusion of water across semi-permeable membrane. Active Transport: Energy-requiring movement against concentration gradient. Facilitated Diffusion: Carrier-mediated passive transport."
                    },
                    {
                        "name": "Plant-Water Relations",
                        "explanation": "Water potential determines water movement. Osmotic pressure and turgor pressure affect cell volume. Plasmolysis occurs when cells lose water in hypertonic solution. Imbibition is water absorption by hydrophilic colloids."
                    },
                    {
                        "name": "Long Distance Transport",
                        "explanation": "Xylem transports water and minerals from roots to shoots (transpiration pull). Phloem transports organic nutrients from source to sink (pressure flow hypothesis). Root pressure pushes water upward in some conditions."
                    },
                    {
                        "name": "Transpiration",
                        "explanation": "Loss of water vapor through stomata, lenticels, and cuticle. Stomatal opening is regulated by guard cells. Factors affecting transpiration: light, temperature, humidity, wind. Transpiration creates pull for water ascent and helps in mineral absorption."
                    }
                ]
            },
            {
                "name": "Mineral Nutrition",
                "description": "Study of essential mineral elements required by plants, their functions, deficiency symptoms, and mechanism of absorption.",
                "subtopics": [
                    {
                        "name": "Essential Mineral Elements",
                        "explanation": "17 essential elements: C, H, O from air/water; Macronutrients (N, P, K, Ca, Mg, S) needed in large amounts; Micronutrients (Fe, Mn, Zn, Cu, B, Mo, Cl, Ni) needed in trace amounts. Criteria: necessary for completion of life cycle, directly involved in nutrition."
                    },
                    {
                        "name": "Mechanism of Absorption",
                        "explanation": "Passive absorption: Movement along concentration gradient without energy. Active absorption: Against concentration gradient requiring energy. Carrier concept and ion exchange mechanisms. Nitrogen fixation by symbiotic bacteria (Rhizobium)."
                    },
                    {
                        "name": "Deficiency Symptoms",
                        "explanation": "Chlorosis (yellowing due to lack of N, Mg, Fe, Mn), necrosis (tissue death), stunted growth, inhibited cell division. Symptoms appear first in older or younger leaves depending on element mobility."
                    }
                ]
            },
            {
                "name": "Photosynthesis in Higher Plants",
                "description": "Process by which plants convert light energy into chemical energy, producing organic compounds and oxygen.",
                "subtopics": [
                    {
                        "name": "Photosynthetic Pigments",
                        "explanation": "Chlorophyll a (primary pigment), chlorophyll b, carotenoids, xanthophylls. Accessory pigments absorb different wavelengths and transfer energy to chlorophyll a. Absorption spectra and action spectra."
                    },
                    {
                        "name": "Light Reaction",
                        "explanation": "Occurs in thylakoid membranes. Photosystem II: Water splitting, oxygen evolution, electron transport. Photosystem I: NADP+ reduction. Cyclic and non-cyclic photophosphorylation produce ATP and NADPH."
                    },
                    {
                        "name": "Dark Reaction (Calvin Cycle)",
                        "explanation": "Carbon fixation in stroma. Three phases: Carboxylation (RuBisCO fixes CO2 to RuBP), Reduction (ATP and NADPH used to form triose phosphate), Regeneration (RuBP reformed). C3 pathway is basic Calvin cycle."
                    },
                    {
                        "name": "Photorespiration and C4 Pathway",
                        "explanation": "Photorespiration: RuBisCO oxygenase activity wastes energy in C3 plants. C4 plants (maize, sugarcane) have Kranz anatomy with mesophyll and bundle sheath cells, minimizing photorespiration. CAM plants open stomata at night to fix CO2."
                    },
                    {
                        "name": "Factors Affecting Photosynthesis",
                        "explanation": "Light intensity and quality, CO2 concentration, temperature, water availability. Blackman's Law of Limiting Factors. Compensation point where photosynthesis equals respiration."
                    }
                ]
            },
            {
                "name": "Respiration in Plants",
                "description": "Process of breaking down organic compounds to release energy for cellular activities.",
                "subtopics": [
                    {
                        "name": "Glycolysis",
                        "explanation": "Occurs in cytoplasm. Glucose broken down to pyruvate. Net gain: 2 ATP, 2 NADH. Anaerobic process independent of oxygen."
                    },
                    {
                        "name": "Fermentation",
                        "explanation": "Anaerobic respiration. Alcohol fermentation: pyruvate to ethanol + CO2. Lactic acid fermentation: pyruvate to lactate. Regenerates NAD+ for glycolysis to continue."
                    },
                    {
                        "name": "Aerobic Respiration",
                        "explanation": "Krebs Cycle: In mitochondria matrix, produces CO2, NADH, FADH2, ATP. Electron Transport System: In inner mitochondrial membrane, produces ATP through oxidative phosphorylation. Total ATP yield: 36 molecules per glucose."
                    },
                    {
                        "name": "Respiratory Quotient",
                        "explanation": "RQ = CO2 produced / O2 consumed. Carbohydrates: RQ=1, Fats: RQ<1, Proteins: RQ~0.9, Organic acids: RQ>1. Indicates type of respiratory substrate."
                    }
                ]
            },
            {
                "name": "Plant Growth and Development",
                "description": "Study of growth patterns, differentiation, dedifferentiation, redifferentiation, and plant growth regulators.",
                "subtopics": [
                    {
                        "name": "Growth Characteristics",
                        "explanation": "Indeterminate growth, open form of growth. Arithmetic and geometric growth patterns. Growth phases: meristematic, elongation, maturation. Measurement of growth: increase in length, area, volume, fresh/dry weight."
                    },
                    {
                        "name": "Plant Growth Regulators",
                        "explanation": "Auxins: Promote cell elongation, apical dominance, rooting. Gibberellins: Stem elongation, seed germination. Cytokinins: Cell division, delay senescence. Ethylene: Fruit ripening, senescence. Abscisic Acid: Stress hormone, stomatal closure, seed dormancy."
                    },
                    {
                        "name": "Photoperiodism and Vernalization",
                        "explanation": "Photoperiodism: Response to day/night length for flowering (short-day, long-day, day-neutral plants). Vernalization: Cold treatment promoting flowering. Phytochrome pigment mediates photoperiodic responses."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Transport Mechanisms": [
                {
                    "name": "Transpiration Pull",
                    "description": "Cohesion-tension theory explains water ascent due to evaporation from leaves creating tension"
                },
                {
                    "name": "Pressure Flow Hypothesis",
                    "description": "Explains phloem transport through osmotic pressure gradients between source and sink"
                }
            ],
            "Photosynthesis": [
                {
                    "name": "Z-Scheme",
                    "description": "Electron transport pathway in light reaction involving both photosystems"
                },
                {
                    "name": "C3 vs C4 Plants",
                    "description": "C3 plants have photorespiration; C4 plants minimize it through spatial separation of carbon fixation"
                }
            ],
            "Respiration": [
                {
                    "name": "ATP Synthesis",
                    "description": "Oxidative phosphorylation produces ATP through chemiosmotic gradient in mitochondria"
                },
                {
                    "name": "Amphibolic Pathway",
                    "description": "Respiration serves both catabolic and anabolic functions"
                }
            ],
            "Growth Regulators": [
                {
                    "name": "Hormonal Interactions",
                    "description": "Multiple hormones work synergistically or antagonistically to regulate growth processes"
                },
                {
                    "name": "Photomorphogenesis",
                    "description": "Light-mediated development controlled by phytochrome and other photoreceptors"
                }
            ]
        },

        "problems": [
            {
                "problem": "The process of water movement through a plant and its evaporation from aerial parts is called:",
                "difficulty": "easy",
                "options": [
                    "Translocation",
                    "Transpiration",
                    "Transportation",
                    "Transformation"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Plant water relations"],
                    "find": "Term for water movement and evaporation",
                    "principle": "Transpiration is the process where water absorbed by roots moves upward and evaporates from leaves, mainly through stomata.",
                    "steps": [
                        {
                            "step": "Analyze terms",
                            "work": "Translocation is food transport; transportation and transformation are not specific biological terms for this process.",
                            "result": "Transpiration is correct"
                        }
                    ],
                    "answer": "Transpiration",
                    "concept": "Water transport"
                }
            },
            {
                "problem": "Which plant hormone promotes cell division?",
                "difficulty": "easy",
                "options": [
                    "Auxin",
                    "Gibberellin",
                    "Cytokinin",
                    "Abscisic acid"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Plant growth regulators"],
                    "find": "Hormone for cell division",
                    "principle": "Cytokinins specifically promote cell division (cytokinesis) and are involved in shoot formation, delay of senescence, and chloroplast development.",
                    "steps": [
                        {
                            "step": "Analyze hormone functions",
                            "work": "Auxins promote cell elongation; gibberellins promote stem growth; abscisic acid inhibits growth. Only cytokinins promote cell division.",
                            "result": "Cytokinin is correct"
                        }
                    ],
                    "answer": "Cytokinin",
                    "concept": "Plant hormones"
                }
            },
            {
                "problem": "The enzyme RuBisCO is involved in:",
                "difficulty": "medium",
                "options": [
                    "Photolysis of water",
                    "Carbon fixation",
                    "ATP synthesis",
                    "NADPH reduction"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Photosynthesis biochemistry"],
                    "find": "RuBisCO function",
                    "principle": "RuBisCO (Ribulose-1,5-bisphosphate carboxylase-oxygenase) is the key enzyme that catalyzes carbon fixation in the Calvin cycle by adding CO2 to RuBP.",
                    "steps": [
                        {
                            "step": "Analyze photosynthesis steps",
                            "work": "Photolysis occurs in PSII; ATP synthesis in ATP synthase; NADPH reduction in PSI. Only carbon fixation involves RuBisCO.",
                            "result": "Carbon fixation is correct"
                        }
                    ],
                    "answer": "Carbon fixation",
                    "concept": "Photosynthesis enzymes"
                }
            },
            {
                "problem": "Which of the following is a C4 plant?",
                "difficulty": "easy",
                "options": [
                    "Wheat",
                    "Rice",
                    "Maize",
                    "Potato"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Photosynthesis types"],
                    "find": "C4 plant example",
                    "principle": "C4 plants have specialized Kranz anatomy and minimize photorespiration. Examples include maize, sugarcane, sorghum, and amaranthus.",
                    "steps": [
                        {
                            "step": "Check plant types",
                            "work": "Wheat, rice, and potato are C3 plants. Maize is a classic C4 plant.",
                            "result": "Maize is correct"
                        }
                    ],
                    "answer": "Maize",
                    "concept": "C4 photosynthesis"
                }
            },
            {
                "problem": "The respiratory quotient (RQ) for carbohydrates is:",
                "difficulty": "medium",
                "options": [
                    "0.7",
                    "0.9",
                    "1.0",
                    "1.3"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Respiration biochemistry"],
                    "find": "RQ for carbohydrates",
                    "principle": "RQ = CO2 produced / O2 consumed. For glucose: C6H12O6 + 6O2 → 6CO2 + 6H2O, so RQ = 6/6 = 1.0",
                    "steps": [
                        {
                            "step": "Calculate RQ",
                            "work": "Complete oxidation of glucose produces equal moles of CO2 and consumes equal moles of O2, giving RQ=1.0",
                            "result": "1.0 is correct"
                        }
                    ],
                    "answer": "1.0",
                    "concept": "Respiratory quotient"
                }
            },
            {
                "problem": "Which mineral element is a component of chlorophyll?",
                "difficulty": "easy",
                "options": [
                    "Nitrogen",
                    "Phosphorus",
                    "Magnesium",
                    "Calcium"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Mineral nutrition"],
                    "find": "Chlorophyll component",
                    "principle": "Magnesium is the central atom in the chlorophyll molecule, essential for photosynthesis. Deficiency causes chlorosis.",
                    "steps": [
                        {
                            "step": "Analyze chlorophyll structure",
                            "work": "Nitrogen is in porphyrin ring but not central; phosphorus and calcium are not part of chlorophyll structure. Magnesium is the central atom.",
                            "result": "Magnesium is correct"
                        }
                    ],
                    "answer": "Magnesium",
                    "concept": "Mineral functions"
                }
            },
            {
                "problem": "The phenomenon of flowering in response to day length is called:",
                "difficulty": "medium",
                "options": [
                    "Vernalization",
                    "Photoperiodism",
                    "Phototropism",
                    "Thermoperiodism"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Plant responses"],
                    "find": "Day length response",
                    "principle": "Photoperiodism is the physiological response of plants to the relative lengths of light and dark periods, particularly in relation to flowering.",
                    "steps": [
                        {
                            "step": "Analyze terms",
                            "work": "Vernalization is cold response; phototropism is light direction response; thermoperiodism is temperature response. Only photoperiodism relates to day length.",
                            "result": "Photoperiodism is correct"
                        }
                    ],
                    "answer": "Photoperiodism",
                    "concept": "Plant responses"
                }
            },
            {
                "problem": "Which of the following is not a macronutrient?",
                "difficulty": "easy",
                "options": [
                    "Nitrogen",
                    "Potassium",
                    "Iron",
                    "Calcium"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Mineral nutrition"],
                    "find": "Non-macronutrient",
                    "principle": "Macronutrients are required in large amounts (>1 mg/g dry weight): N, P, K, Ca, Mg, S. Iron is a micronutrient required in small amounts.",
                    "steps": [
                        {
                            "step": "Check nutrient classification",
                            "work": "Nitrogen, potassium, and calcium are macronutrients. Iron is a micronutrient.",
                            "result": "Iron is correct answer"
                        }
                    ],
                    "answer": "Iron",
                    "concept": "Essential elements"
                }
            },
            {
                "problem": "The ATP production in glycolysis is through:",
                "difficulty": "medium",
                "options": [
                    "Substrate-level phosphorylation",
                    "Oxidative phosphorylation",
                    "Photophosphorylation",
                    "Chemiosmosis"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Respiration mechanisms"],
                    "find": "Glycolysis ATP production",
                    "principle": "In glycolysis, ATP is produced directly by substrate-level phosphorylation where a phosphate group is transferred from a substrate to ADP.",
                    "steps": [
                        {
                            "step": "Analyze phosphorylation types",
                            "work": "Oxidative phosphorylation occurs in ETS; photophosphorylation in photosynthesis; chemiosmosis is the mechanism. Only substrate-level phosphorylation occurs in glycolysis.",
                            "result": "Substrate-level phosphorylation is correct"
                        }
                    ],
                    "answer": "Substrate-level phosphorylation",
                    "concept": "ATP synthesis"
                }
            },
            {
                "problem": "Which plant hormone is known as the stress hormone?",
                "difficulty": "easy",
                "options": [
                    "Auxin",
                    "Gibberellin",
                    "Cytokinin",
                    "Abscisic acid"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Plant hormones"],
                    "find": "Stress hormone",
                    "principle": "Abscisic acid (ABA) is called the stress hormone as it helps plants respond to environmental stresses like drought by closing stomata and promoting dormancy.",
                    "steps": [
                        {
                            "step": "Analyze hormone functions",
                            "work": "Auxins promote growth; gibberellins promote germination; cytokinins promote cell division. Only ABA is inhibitory and stress-related.",
                            "result": "Abscisic acid is correct"
                        }
                    ],
                    "answer": "Abscisic acid",
                    "concept": "Plant hormones"
                }
            },
            {
                "problem": "The phenomenon of plasmolysis occurs when a plant cell is placed in:",
                "difficulty": "medium",
                "options": [
                    "Hypotonic solution",
                    "Isotonic solution",
                    "Hypertonic solution",
                    "Distilled water"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Plant-water relations"],
                    "find": "Condition for plasmolysis",
                    "principle": "Plasmolysis occurs when a plant cell is placed in a hypertonic solution, causing water to leave the cell by osmosis and the protoplast to shrink away from the cell wall.",
                    "steps": [
                        {
                            "step": "Analyze osmotic conditions",
                            "work": "In hypotonic solution, cell becomes turgid; in isotonic solution, no net water movement; in hypertonic solution, water leaves cell causing plasmolysis.",
                            "result": "Hypertonic solution is correct"
                        }
                    ],
                    "answer": "Hypertonic solution",
                    "concept": "Osmosis in plant cells"
                }
            },
            {
                "problem": "Which of the following elements is essential for nitrogen fixation in plants?",
                "difficulty": "hard",
                "options": [
                    "Iron",
                    "Molybdenum",
                    "Zinc",
                    "Copper"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Mineral nutrition"],
                    "find": "Element for nitrogen fixation",
                    "principle": "Molybdenum is an essential component of nitrogenase enzyme complex which catalyzes biological nitrogen fixation in symbiotic bacteria like Rhizobium.",
                    "steps": [
                        {
                            "step": "Analyze element functions",
                            "work": "Iron is for chlorophyll synthesis; zinc is for auxin synthesis; copper is for photosynthesis. Only molybdenum is specifically required for nitrogen fixation.",
                            "result": "Molybdenum is correct"
                        }
                    ],
                    "answer": "Molybdenum",
                    "concept": "Micronutrient functions"
                }
            },
            {
                "problem": "The process of conversion of nitrate to ammonia in plants is called:",
                "difficulty": "hard",
                "options": [
                    "Nitrogen fixation",
                    "Nitrification",
                    "Ammonification",
                    "Nitrate reduction"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Nitrogen metabolism"],
                    "find": "Nitrate to ammonia conversion",
                    "principle": "Nitrate reduction is the process where nitrate (NO₃⁻) is reduced to ammonia (NH₃) in plants using the enzyme nitrate reductase and nitrite reductase.",
                    "steps": [
                        {
                            "step": "Analyze nitrogen cycle processes",
                            "work": "Nitrogen fixation is N₂ to NH₃; nitrification is NH₃ to NO₃⁻; ammonification is organic N to NH₃. Only nitrate reduction converts NO₃⁻ to NH₃.",
                            "result": "Nitrate reduction is correct"
                        }
                    ],
                    "answer": "Nitrate reduction",
                    "concept": "Nitrogen metabolism"
                }
            },
            {
                "problem": "Which pigment acts as the primary photoreceptor in photoperiodism?",
                "difficulty": "medium",
                "options": [
                    "Chlorophyll",
                    "Phytochrome",
                    "Carotenoid",
                    "Cryptochrome"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Photoperiodism"],
                    "find": "Photoreceptor for day length detection",
                    "principle": "Phytochrome is the primary photoreceptor that detects red and far-red light and mediates photoperiodic responses including flowering in plants.",
                    "steps": [
                        {
                            "step": "Analyze photoreceptor functions",
                            "work": "Chlorophyll is for photosynthesis; carotenoids are accessory pigments; cryptochrome detects blue light. Only phytochrome is the main photoperiodic receptor.",
                            "result": "Phytochrome is correct"
                        }
                    ],
                    "answer": "Phytochrome",
                    "concept": "Photoreceptors"
                }
            },
            {
                "problem": "The C4 pathway is characterized by the first stable product being:",
                "difficulty": "medium",
                "options": [
                    "3-phosphoglycerate",
                    "Oxaloacetic acid",
                    "Phosphoenolpyruvate",
                    "Ribulose bisphosphate"
                ],
                "correct": 1,
                "solution": {
                    "given": ["C4 photosynthesis"],
                    "find": "First stable product in C4 plants",
                    "principle": "In C4 plants, the first stable product of carbon fixation is 4-carbon oxaloacetic acid (OAA), formed when CO₂ combines with phosphoenolpyruvate (PEP).",
                    "steps": [
                        {
                            "step": "Analyze carbon fixation products",
                            "work": "3-PGA is first product in C3 plants; PEP is the CO₂ acceptor; RuBP is regenerated. OAA is the characteristic first product in C4 plants.",
                            "result": "Oxaloacetic acid is correct"
                        }
                    ],
                    "answer": "Oxaloacetic acid",
                    "concept": "C4 photosynthesis"
                }
            },
            {
                "problem": "Which plant hormone is primarily responsible for apical dominance?",
                "difficulty": "easy",
                "options": [
                    "Gibberellin",
                    "Cytokinin",
                    "Auxin",
                    "Ethylene"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Plant growth regulators"],
                    "find": "Hormone for apical dominance",
                    "principle": "Auxin (IAA) produced in the apical bud suppresses the growth of lateral buds, maintaining apical dominance in plants.",
                    "steps": [
                        {
                            "step": "Analyze hormone functions",
                            "work": "Gibberellin promotes stem elongation; cytokinin promotes lateral bud growth; ethylene promotes fruit ripening. Only auxin maintains apical dominance.",
                            "result": "Auxin is correct"
                        }
                    ],
                    "answer": "Auxin",
                    "concept": "Apical dominance"
                }
            },
            {
                "problem": "The process of conversion of glucose to pyruvate in respiration is called:",
                "difficulty": "easy",
                "options": [
                    "Krebs cycle",
                    "Glycolysis",
                    "Electron transport chain",
                    "Fermentation"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Respiration"],
                    "find": "Glucose to pyruvate conversion",
                    "principle": "Glycolysis is the metabolic pathway that converts glucose (6C) to pyruvate (3C) in the cytoplasm, producing ATP and NADH.",
                    "steps": [
                        {
                            "step": "Analyze respiration stages",
                            "work": "Krebs cycle processes acetyl-CoA; ETC produces ATP; fermentation occurs without oxygen. Only glycolysis converts glucose to pyruvate.",
                            "result": "Glycolysis is correct"
                        }
                    ],
                    "answer": "Glycolysis",
                    "concept": "Respiration stages"
                }
            },
            {
                "problem": "Which of the following elements is required for cell wall formation in plants?",
                "difficulty": "medium",
                "options": [
                    "Nitrogen",
                    "Phosphorus",
                    "Calcium",
                    "Potassium"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Mineral functions"],
                    "find": "Element for cell wall formation",
                    "principle": "Calcium is an essential component of the middle lamella in plant cell walls, where it forms calcium pectate that holds adjacent cells together.",
                    "steps": [
                        {
                            "step": "Analyze element functions",
                            "work": "Nitrogen is for proteins; phosphorus is for ATP; potassium is for stomatal opening. Only calcium is specifically for cell wall formation.",
                            "result": "Calcium is correct"
                        }
                    ],
                    "answer": "Calcium",
                    "concept": "Mineral functions"
                }
            },
            {
                "problem": "The theory that explains the ascent of sap in plants is:",
                "difficulty": "medium",
                "options": [
                    "Root pressure theory",
                    "Cohesion-tension theory",
                    "Active transport theory",
                    "Imbibition theory"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Water transport"],
                    "find": "Theory for sap ascent",
                    "principle": "The cohesion-tension theory proposes that water is pulled upward through xylem due to transpiration pull, with water molecules cohering to each other and adhering to xylem walls.",
                    "steps": [
                        {
                            "step": "Analyze transport theories",
                            "work": "Root pressure pushes water but is insufficient; active transport and imbibition don't explain sap ascent. Cohesion-tension is the widely accepted theory.",
                            "result": "Cohesion-tension theory is correct"
                        }
                    ],
                    "answer": "Cohesion-tension theory",
                    "concept": "Water transport mechanisms"
                }
            },
            {
                "problem": "Which of the following is a CAM plant?",
                "difficulty": "medium",
                "options": [
                    "Maize",
                    "Sugarcane",
                    "Bryophyllum",
                    "Wheat"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Photosynthesis types"],
                    "find": "CAM plant example",
                    "principle": "CAM (Crassulacean Acid Metabolism) plants like Bryophyllum, cactus, and pineapple open stomata at night to fix CO₂ as malic acid, then use it for photosynthesis during day.",
                    "steps": [
                        {
                            "step": "Analyze plant types",
                            "work": "Maize and sugarcane are C4 plants; wheat is C3 plant. Bryophyllum is a classic CAM plant.",
                            "result": "Bryophyllum is correct"
                        }
                    ],
                    "answer": "Bryophyllum",
                    "concept": "CAM photosynthesis"
                }
            },
            {
                "problem": "The respiratory quotient (RQ) of fats is less than one because:",
                "difficulty": "hard",
                "options": [
                    "They produce more CO₂",
                    "They consume less O₂",
                    "They have more oxygen in their structure",
                    "They have less oxygen in their structure"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Respiratory quotient"],
                    "find": "Reason for low RQ in fats",
                    "principle": "Fats have less oxygen content in their structure compared to carbohydrates, so they require more oxygen for complete oxidation, resulting in RQ < 1.",
                    "steps": [
                        {
                            "step": "Analyze RQ calculation",
                            "work": "For tripalmitin: 2C₅₁H₉₈O₆ + 145O₂ → 102CO₂ + 98H₂O, RQ = 102/145 = 0.7. The low oxygen content in fats requires more external O₂.",
                            "result": "They have less oxygen in their structure is correct"
                        }
                    ],
                    "answer": "They have less oxygen in their structure",
                    "concept": "Respiratory quotient"
                }
            },
            {
                "problem": "Which plant hormone is responsible for fruit ripening?",
                "difficulty": "easy",
                "options": [
                    "Auxin",
                    "Gibberellin",
                    "Cytokinin",
                    "Ethylene"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Plant hormones"],
                    "find": "Fruit ripening hormone",
                    "principle": "Ethylene is the gaseous hormone that promotes fruit ripening by triggering changes in color, texture, and flavor through enzymatic activities.",
                    "steps": [
                        {
                            "step": "Analyze hormone functions",
                            "work": "Auxins promote growth; gibberellins promote germination; cytokinins promote cell division. Only ethylene is specifically for fruit ripening.",
                            "result": "Ethylene is correct"
                        }
                    ],
                    "answer": "Ethylene",
                    "concept": "Plant hormones"
                }
            },
            {
                "problem": "The process by which water is absorbed by solids (colloids) causing them to increase in volume is called:",
                "difficulty": "medium",
                "options": [
                    "Diffusion",
                    "Osmosis",
                    "Imbibition",
                    "Plasmolysis"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Plant-water relations"],
                    "find": "Water absorption by colloids",
                    "principle": "Imbibition is the process where hydrophilic colloids absorb water and swell, generating enormous imbibition pressure. This is crucial for seed germination.",
                    "steps": [
                        {
                            "step": "Analyze water absorption processes",
                            "work": "Diffusion is movement of molecules; osmosis is water movement across membrane; plasmolysis is water loss. Only imbibition describes water absorption by colloids.",
                            "result": "Imbibition is correct"
                        }
                    ],
                    "answer": "Imbibition",
                    "concept": "Water absorption mechanisms"
                }
            },
            {
                "problem": "Which element is a constituent of the ring structure of chlorophyll?",
                "difficulty": "medium",
                "options": [
                    "Magnesium",
                    "Iron",
                    "Nitrogen",
                    "Calcium"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Chlorophyll structure"],
                    "find": "Element in chlorophyll ring",
                    "principle": "Nitrogen is a key component of the porphyrin ring structure of chlorophyll, with four nitrogen atoms coordinating the central magnesium atom.",
                    "steps": [
                        {
                            "step": "Analyze chlorophyll composition",
                            "work": "Magnesium is the central atom; iron is for electron transport; calcium is for cell walls. Nitrogen forms part of the ring structure itself.",
                            "result": "Nitrogen is correct"
                        }
                    ],
                    "answer": "Nitrogen",
                    "concept": "Chlorophyll biochemistry"
                }
            },
            {
                "problem": "The phenomenon of winter dormancy in plants is broken by:",
                "difficulty": "hard",
                "options": [
                    "Photoperiodism",
                    "Vernalization",
                    "Phototropism",
                    "Thermonasty"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Plant responses to environment"],
                    "find": "Process breaking winter dormancy",
                    "principle": "Vernalization is the process where exposure to prolonged cold temperature promotes flowering by breaking dormancy and accelerating flowering in spring.",
                    "steps": [
                        {
                            "step": "Analyze environmental responses",
                            "work": "Photoperiodism responds to day length; phototropism to light direction; thermonasty to temperature changes. Only vernalization specifically breaks cold dormancy.",
                            "result": "Vernalization is correct"
                        }
                    ],
                    "answer": "Vernalization",
                    "concept": "Plant dormancy mechanisms"
                }
            },
            {
                "problem": "The enzyme that fixes CO₂ in C4 plants is:",
                "difficulty": "medium",
                "options": [
                    "RuBisCO",
                    "PEP carboxylase",
                    "Catalase",
                    "Nitrate reductase"
                ],
                "correct": 1,
                "solution": {
                    "given": ["C4 photosynthesis"],
                    "find": "CO₂ fixing enzyme in C4 plants",
                    "principle": "PEP carboxylase (Phosphoenolpyruvate carboxylase) has high affinity for CO₂ and fixes it in mesophyll cells of C4 plants, forming oxaloacetate.",
                    "steps": [
                        {
                            "step": "Analyze C4 pathway enzymes",
                            "work": "RuBisCO operates in bundle sheath cells; catalase breaks down H₂O₂; nitrate reductase reduces nitrate. Only PEP carboxylase initially fixes CO₂ in C4 plants.",
                            "result": "PEP carboxylase is correct"
                        }
                    ],
                    "answer": "PEP carboxylase",
                    "concept": "C4 carbon fixation"
                }
            },
            {
                "problem": "Which of the following elements is essential for photosynthesis and respiration?",
                "difficulty": "hard",
                "options": [
                    "Phosphorus",
                    "Magnesium",
                    "Iron",
                    "All of the above"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Mineral functions in metabolism"],
                    "find": "Elements essential for both photosynthesis and respiration",
                    "principle": "Phosphorus (ATP, NADP), Magnesium (chlorophyll, enzyme activator), and Iron (cytochromes, ferredoxin) are all crucial for both photosynthetic and respiratory processes.",
                    "steps": [
                        {
                            "step": "Analyze metabolic roles",
                            "work": "Phosphorus is in ATP/ADP; magnesium activates enzymes; iron is in electron carriers. All three are essential for both processes.",
                            "result": "All of the above is correct"
                        }
                    ],
                    "answer": "All of the above",
                    "concept": "Mineral roles in metabolism"
                }
            },
            {
                "problem": "The pressure developed in the roots due to continuous inflow of water is called:",
                "difficulty": "easy",
                "options": [
                    "Turgor pressure",
                    "Root pressure",
                    "Wall pressure",
                    "Osmotic pressure"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Water transport mechanisms"],
                    "find": "Pressure from root water inflow",
                    "principle": "Root pressure is the positive pressure that develops in the xylem sap of roots due to osmotic movement of water, helping push water upward in some plants.",
                    "steps": [
                        {
                            "step": "Analyze pressure types",
                            "work": "Turgor pressure is in cells; wall pressure counteracts turgor; osmotic pressure drives water movement. Only root pressure specifically refers to xylem pressure from roots.",
                            "result": "Root pressure is correct"
                        }
                    ],
                    "answer": "Root pressure",
                    "concept": "Root physiology"
                }
            },
            {
                "problem": "Which plant hormone promotes bolting (sudden stem elongation) in plants?",
                "difficulty": "medium",
                "options": [
                    "Auxin",
                    "Gibberellin",
                    "Cytokinin",
                    "Abscisic acid"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Plant growth regulators"],
                    "find": "Hormone for bolting",
                    "principle": "Gibberellins promote bolting - the rapid elongation of stem before flowering, particularly in rosette plants like cabbage and beet.",
                    "steps": [
                        {
                            "step": "Analyze hormone functions",
                            "work": "Auxins promote general growth; cytokinins promote cell division; ABA inhibits growth. Only gibberellins specifically cause bolting.",
                            "result": "Gibberellin is correct"
                        }
                    ],
                    "answer": "Gibberellin",
                    "concept": "Hormonal control of growth"
                }
            },
            {
                "problem": "The process of conversion of glucose to ethanol and CO₂ in plants is called:",
                "difficulty": "easy",
                "options": [
                    "Aerobic respiration",
                    "Lactic acid fermentation",
                    "Alcoholic fermentation",
                    "Krebs cycle"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Anaerobic respiration"],
                    "find": "Glucose to ethanol conversion",
                    "principle": "Alcoholic fermentation converts pyruvate to ethanol and CO₂, regenerating NAD⁺ for continued glycolysis under anaerobic conditions.",
                    "steps": [
                        {
                            "step": "Analyze respiration types",
                            "work": "Aerobic respiration requires oxygen; lactic acid fermentation produces lactate; Krebs cycle is aerobic. Only alcoholic fermentation produces ethanol.",
                            "result": "Alcoholic fermentation is correct"
                        }
                    ],
                    "answer": "Alcoholic fermentation",
                    "concept": "Fermentation pathways"
                }
            },
            {
                "problem": "Which element is essential for pollen germination and sugar metabolism?",
                "difficulty": "hard",
                "options": [
                    "Boron",
                    "Zinc",
                    "Molybdenum",
                    "Chlorine"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Micronutrient functions"],
                    "find": "Element for pollen germination",
                    "principle": "Boron is essential for pollen germination, carbohydrate metabolism, cell wall synthesis, and sugar transport in plants.",
                    "steps": [
                        {
                            "step": "Analyze micronutrient roles",
                            "work": "Zinc is for auxin synthesis; molybdenum for nitrogen metabolism; chlorine for osmosis. Only boron is crucial for pollen germination.",
                            "result": "Boron is correct"
                        }
                    ],
                    "answer": "Boron",
                    "concept": "Micronutrient functions"
                }
            },
            {
                "problem": "The phenomenon of closure of stomata during water stress is mediated by:",
                "difficulty": "medium",
                "options": [
                    "Auxin",
                    "Gibberellin",
                    "Abscisic acid",
                    "Cytokinin"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Stomatal regulation"],
                    "find": "Hormone for stomatal closure",
                    "principle": "Abscisic acid (ABA) accumulates during water stress and triggers stomatal closure by promoting efflux of K⁺ ions from guard cells.",
                    "steps": [
                        {
                            "step": "Analyze hormonal control",
                            "work": "Auxins may promote opening; gibberellins have various effects; cytokinins promote opening. Only ABA consistently causes stomatal closure.",
                            "result": "Abscisic acid is correct"
                        }
                    ],
                    "answer": "Abscisic acid",
                    "concept": "Stomatal regulation"
                }
            },
            {
                "problem": "The theory explaining the mechanism of phloem transport is called:",
                "difficulty": "medium",
                "options": [
                    "Cohesion-tension theory",
                    "Pressure flow hypothesis",
                    "Active transport theory",
                    "Root pressure theory"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Phloem transport"],
                    "find": "Theory for phloem transport",
                    "principle": "The pressure flow hypothesis proposes that phloem sap moves from source (high pressure) to sink (low pressure) through osmotic pressure gradients.",
                    "steps": [
                        {
                            "step": "Analyze transport theories",
                            "work": "Cohesion-tension is for xylem; active transport is cellular; root pressure is for xylem. Only pressure flow explains phloem transport.",
                            "result": "Pressure flow hypothesis is correct"
                        }
                    ],
                    "answer": "Pressure flow hypothesis",
                    "concept": "Phloem transport"
                }
            },
            {
                "problem": "Which of the following is a symptom of magnesium deficiency in plants?",
                "difficulty": "medium",
                "options": [
                    "Chlorosis in young leaves",
                    "Chlorosis in old leaves",
                    "Necrosis in young leaves",
                    "Stunted growth without chlorosis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Mineral deficiency symptoms"],
                    "find": "Magnesium deficiency symptom",
                    "principle": "Magnesium is mobile in plants, so deficiency causes chlorosis (yellowing) first in older leaves, as Mg is translocated to younger tissues.",
                    "steps": [
                        {
                            "step": "Analyze deficiency patterns",
                            "work": "Immobile elements affect young leaves; necrosis is tissue death; stunting occurs with various deficiencies. Mobile Mg deficiency shows in old leaves first.",
                            "result": "Chlorosis in old leaves is correct"
                        }
                    ],
                    "answer": "Chlorosis in old leaves",
                    "concept": "Deficiency symptoms"
                }
            },
            {
                "problem": "Which process is responsible for ascent of sap in tall trees?",
                "difficulty": "medium",
                "options": [
                    "Root pressure",
                    "Capillary action",
                    "Cohesion-tension mechanism",
                    "Guttation"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Water transport in plants"],
                    "find": "Mechanism of sap rise in tall trees",
                    "principle": "Cohesion-tension theory explains upward movement of water due to transpiration pull, cohesion between water molecules, and adhesion with xylem walls.",
                    "steps": [
                        {
                            "step": "Check transport mechanisms",
                            "work": "Root pressure insufficient for tall trees; capillary action works for short heights; guttation releases drops at leaf margins.",
                            "result": "Cohesion-tension is correct"
                        }
                    ],
                    "answer": "Cohesion-tension mechanism",
                    "concept": "Ascent of sap"
                }
            },
            {
                "problem": "Kranz anatomy is a feature of which plants?",
                "difficulty": "easy",
                "options": [
                    "C3 plants",
                    "C4 plants",
                    "CAM plants",
                    "Algae"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Leaf anatomy"],
                    "find": "Plants showing Kranz anatomy",
                    "principle": "Kranz anatomy shows bundle sheath cells with large chloroplasts surrounding vascular bundles, a typical feature of C4 plants.",
                    "steps": [
                        {
                            "step": "Analyze options",
                            "work": "C3 lacks Kranz; CAM adapts to arid regions; algae lack vascular bundles.",
                            "result": "C4 plants are correct"
                        }
                    ],
                    "answer": "C4 plants",
                    "concept": "Anatomical adaptations"
                }
            },
            {
                "problem": "Photorespiration is considered a wasteful process because:",
                "difficulty": "medium",
                "options": [
                    "It consumes O₂ and releases CO₂",
                    "It synthesizes ATP",
                    "It produces glucose",
                    "It reduces NADPH"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Photorespiration"],
                    "find": "Why it is wasteful",
                    "principle": "Photorespiration consumes oxygen and releases CO₂, without producing ATP or glucose, thus wasting energy fixed during photosynthesis.",
                    "steps": [
                        {
                            "step": "Analyze processes",
                            "work": "It uses RuBisCO oxygenase activity, reducing photosynthetic efficiency.",
                            "result": "Consumes O₂ and releases CO₂"
                        }
                    ],
                    "answer": "It consumes O₂ and releases CO₂",
                    "concept": "Photorespiration"
                }
            },
            {
                "problem": "The first stable product of C3 cycle is:",
                "difficulty": "easy",
                "options": [
                    "Oxaloacetate",
                    "3-phosphoglyceric acid (PGA)",
                    "Malate",
                    "PEP"
                ],
                "correct": 1,
                "solution": {
                    "given": ["C3 photosynthesis"],
                    "find": "First stable compound",
                    "principle": "In Calvin cycle, RuBisCO fixes CO₂ with RuBP to form an unstable 6-carbon compound, which splits into 2 molecules of PGA.",
                    "steps": [
                        {
                            "step": "Check products",
                            "work": "Oxaloacetate & malate belong to C4 pathway; PEP is substrate in C4 pathway.",
                            "result": "PGA is correct"
                        }
                    ],
                    "answer": "3-phosphoglyceric acid (PGA)",
                    "concept": "C3 cycle biochemistry"
                }
            },
            {
                "problem": "The pressure exerted by the plasma membrane against the cell wall is called:",
                "difficulty": "easy",
                "options": [
                    "Wall pressure",
                    "Turgor pressure",
                    "Osmotic pressure",
                    "Diffusion pressure"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cell pressure relations"],
                    "find": "Name of pressure by membrane",
                    "principle": "Turgor pressure is the pressure of cell sap pushing plasma membrane against cell wall, important for rigidity and growth.",
                    "steps": [
                        {
                            "step": "Check definitions",
                            "work": "Wall pressure is counter to turgor; osmotic pressure drives water entry; diffusion pressure is random molecular movement.",
                            "result": "Turgor pressure is correct"
                        }
                    ],
                    "answer": "Turgor pressure",
                    "concept": "Plant cell physiology"
                }
            },
            {
                "problem": "The closing of stomata at night is mainly due to:",
                "difficulty": "medium",
                "options": [
                    "Absence of photosynthesis",
                    "Lack of CO₂",
                    "Decrease in guard cell turgor",
                    "Action of gibberellins"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Stomatal movement"],
                    "find": "Cause of night closure",
                    "principle": "At night, photosynthesis stops, less ATP is available, ions move out of guard cells, turgor decreases, causing stomatal closure.",
                    "steps": [
                        {
                            "step": "Analyze mechanism",
                            "work": "Guard cell turgor is the direct factor, while others are indirect.",
                            "result": "Decrease in guard cell turgor"
                        }
                    ],
                    "answer": "Decrease in guard cell turgor",
                    "concept": "Stomatal regulation"
                }
            }

        ]
    },

    "animal_kingdom": {
        "title": "Animal Kingdom",
        "weightage": "6-8%",
        "introduction": "The Animal Kingdom unit covers the classification, characteristics, and evolutionary relationships of major animal phyla. This comprehensive classification is based on fundamental features like body symmetry, germ layers, coelom, segmentation, and notochord. NEET questions frequently test identification of phyla based on characteristics, comparative anatomy, and evolutionary concepts.",

        "topics": [
            {
                "name": "Basis of Classification",
                "description": "Fundamental criteria used for animal classification including levels of organization, symmetry, germ layers, coelom, segmentation, and notochord.",
                "subtopics": [
                    {
                        "name": "Levels of Organization",
                        "explanation": "Cellular level (sponges), Tissue level (cnidarians), Organ level (platyhelminthes), Organ system level (higher animals) with various patterns like blind sac or tube-within-tube."
                    },
                    {
                        "name": "Symmetry",
                        "explanation": "Asymmetrical (sponges), Radial symmetry (cnidarians, ctenophores), Bilateral symmetry (higher animals) with anterior-posterior, dorsal-ventral, and left-right differentiation."
                    },
                    {
                        "name": "Germ Layers",
                        "explanation": "Diploblastic (two layers: ectoderm and endoderm - cnidarians), Triploblastic (three layers: ectoderm, mesoderm, endoderm - higher animals)."
                    },
                    {
                        "name": "Coelom",
                        "explanation": "Acoelomate (no body cavity - platyhelminthes), Pseudocoelomate (false coelom - aschelminthes), Coelomate (true coelom - annelids to chordates)."
                    },
                    {
                        "name": "Segmentation",
                        "explanation": "Metameric segmentation (body divided into segments - annelids, arthropods, chordates) with serial repetition of parts."
                    },
                    {
                        "name": "Notochord",
                        "explanation": "Rod-like structure of mesodermal origin; present in chordates at some stage of life cycle; replaced by vertebral column in vertebrates."
                    }
                ]
            },
            {
                "name": "Classification of Animals",
                "description": "Detailed study of major animal phyla with their characteristic features, examples, and evolutionary significance.",
                "subtopics": [
                    {
                        "name": "Phylum Porifera",
                        "explanation": "Sponges; cellular level organization; asymmetrical; aquatic; water canal system; skeleton of spicules; examples: Sycon, Spongilla, Euspongia."
                    },
                    {
                        "name": "Phylum Cnidaria",
                        "explanation": "Radial symmetry; diploblastic; tissue level; cnidoblasts for defense; polyp and medusa forms; examples: Hydra, Aurelia (jellyfish), Metridium (sea anemone)."
                    },
                    {
                        "name": "Phylum Ctenophora",
                        "explanation": "Comb jellies; radial symmetry; diploblastic; eight rows of ciliary plates; bioluminescence; examples: Pleurobrachia, Ctenoplana."
                    },
                    {
                        "name": "Phylum Platyhelminthes",
                        "explanation": "Flatworms; bilateral symmetry; triploblastic; acoelomate; parasitic forms; examples: Taenia (tapeworm), Fasciola (liver fluke), Planaria."
                    },
                    {
                        "name": "Phylum Aschelminthes",
                        "explanation": "Roundworms; bilateral; triploblastic; pseudocoelomate; parasitic; examples: Ascaris, Wuchereria (filarial worm), Ancylostoma (hookworm)."
                    },
                    {
                        "name": "Phylum Annelida",
                        "explanation": "Segmented worms; bilateral; triploblastic; coelomate; metameric segmentation; examples: Nereis, Pheretima (earthworm), Hirudinaria (leech)."
                    },
                    {
                        "name": "Phylum Arthropoda",
                        "explanation": "Largest phylum; jointed appendages; chitinous exoskeleton; bilateral; triploblastic; coelomate; examples: Cockroach, Butterfly, Spider, Crab."
                    },
                    {
                        "name": "Phylum Mollusca",
                        "explanation": "Soft-bodied animals; bilateral; triploblastic; coelomate; calcareous shell; examples: Pila (snail), Octopus, Pinctada (pearl oyster)."
                    },
                    {
                        "name": "Phylum Echinodermata",
                        "explanation": "Spiny-skinned animals; radial symmetry (adults); triploblastic; coelomate; water vascular system; examples: Starfish, Sea urchin, Sea cucumber."
                    },
                    {
                        "name": "Phylum Hemichordata",
                        "explanation": "Worm-like marine animals; bilateral; triploblastic; coelomate; rudimentary notochord; examples: Balanoglossus, Saccoglossus."
                    },
                    {
                        "name": "Phylum Chordata",
                        "explanation": "Characterized by notochord, dorsal hollow nerve cord, pharyngeal gill slits, and post-anal tail; divided into three subphyla: Urochordata, Cephalochordata, Vertebrata."
                    }
                ]
            },
            {
                "name": "Vertebrata Classification",
                "description": "Detailed classification of vertebrate animals with their distinctive features and evolutionary relationships.",
                "subtopics": [
                    {
                        "name": "Superclass Pisces",
                        "explanation": "Fishes; aquatic; streamlined body; gills for respiration; two-chambered heart; cartilaginous or bony skeleton; examples: Scoliodon (shark), Labeo (rohu)."
                    },
                    {
                        "name": "Class Amphibia",
                        "explanation": "Dual life; moist skin; three-chambered heart; respiration through gills, skin, or lungs; examples: Frog, Toad, Salamander."
                    },
                    {
                        "name": "Class Reptilia",
                        "explanation": "Creeping vertebrates; dry scaly skin; three-chambered heart (except crocodiles); lungs for respiration; examples: Lizard, Snake, Turtle, Crocodile."
                    },
                    {
                        "name": "Class Aves",
                        "explanation": "Birds; feathers; forelimbs modified as wings; four-chambered heart; air sacs; warm-blooded; examples: Pigeon, Ostrich, Parrot."
                    },
                    {
                        "name": "Class Mammalia",
                        "explanation": "Mammals; mammary glands; hair; four-chambered heart; diaphragm; warm-blooded; examples: Human, Bat, Whale, Kangaroo."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Evolutionary Trends": [
                {
                    "name": "Body Plan Complexity",
                    "description": "Increasing complexity from cellular to organ system level organization through evolution"
                },
                {
                    "name": "Symmetry Progression",
                    "description": "Evolution from asymmetry to radial to bilateral symmetry with cephalization"
                }
            ],
            "Developmental Features": [
                {
                    "name": "Germ Layer Evolution",
                    "description": "Progression from diploblastic to triploblastic organization enabling organ development"
                },
                {
                    "name": "Coelom Development",
                    "description": "Evolution of body cavity from acoelomate to pseudocoelomate to coelomate conditions"
                }
            ],
            "Chordate Characteristics": [
                {
                    "name": "Defining Features",
                    "description": "Notochord, dorsal hollow nerve cord, pharyngeal slits, and post-anal tail as chordate hallmarks"
                },
                {
                    "name": "Vertebrate Advancements",
                    "description": "Development of vertebral column, jaws, limbs, and amniotic egg through vertebrate evolution"
                }
            ]
        },

        "problems": [
            {
                "problem": "Which of the following is not a characteristic feature of phylum Chordata?",
                "difficulty": "easy",
                "options": [
                    "Notochord",
                    "Ventral nerve cord",
                    "Pharyngeal gill slits",
                    "Post-anal tail"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Chordate characteristics"],
                    "find": "Non-chordate feature",
                    "principle": "Chordates are characterized by four key features: notochord, dorsal hollow nerve cord, pharyngeal gill slits, and post-anal tail. Ventral nerve cord is found in non-chordates like arthropods and annelids.",
                    "steps": [
                        {
                            "step": "Analyze chordate features",
                            "work": "Notochord, pharyngeal slits, and post-anal tail are chordate characteristics. Ventral nerve cord is typical of invertebrates like earthworms and insects.",
                            "result": "Ventral nerve cord is correct answer"
                        }
                    ],
                    "answer": "Ventral nerve cord",
                    "concept": "Chordate characteristics"
                }
            },
            {
                "problem": "Animals with bilateral symmetry, triploblastic organization, and true coelom belong to which group?",
                "difficulty": "medium",
                "options": [
                    "Platyhelminthes",
                    "Aschelminthes",
                    "Annelida",
                    "Porifera"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Animal classification criteria"],
                    "find": "Group with bilateral, triploblastic, coelomate features",
                    "principle": "Annelids are bilaterally symmetrical, triploblastic animals with true coelom. Platyhelminthes are acoelomate, aschelminthes are pseudocoelomate, and poriferans are asymmetrical.",
                    "steps": [
                        {
                            "step": "Analyze phylum characteristics",
                            "work": "Platyhelminthes: bilateral, triploblastic, acoelomate; Aschelminthes: bilateral, triploblastic, pseudocoelomate; Annelida: bilateral, triploblastic, coelomate; Porifera: asymmetrical.",
                            "result": "Annelida is correct"
                        }
                    ],
                    "answer": "Annelida",
                    "concept": "Classification criteria"
                }
            },
            {
                "problem": "Which of the following is a diploblastic animal?",
                "difficulty": "easy",
                "options": [
                    "Earthworm",
                    "Hydra",
                    "Planaria",
                    "Roundworm"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Germ layers in animals"],
                    "find": "Diploblastic animal",
                    "principle": "Diploblastic animals have only two germ layers (ectoderm and endoderm). Hydra (phylum Cnidaria) is diploblastic, while earthworms, planarians, and roundworms are triploblastic.",
                    "steps": [
                        {
                            "step": "Analyze germ layer organization",
                            "work": "Earthworm (annelid), Planaria (platyhelminth), and Roundworm (aschelminth) are triploblastic. Only Hydra (cnidarian) is diploblastic.",
                            "result": "Hydra is correct"
                        }
                    ],
                    "answer": "Hydra",
                    "concept": "Germ layers"
                }
            },
            {
                "problem": "The water vascular system is characteristic of which phylum?",
                "difficulty": "medium",
                "options": [
                    "Arthropoda",
                    "Mollusca",
                    "Echinodermata",
                    "Chordata"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Phylum characteristics"],
                    "find": "Phylum with water vascular system",
                    "principle": "The water vascular system is a unique feature of echinoderms (starfish, sea urchins) used for locomotion, feeding, and respiration.",
                    "steps": [
                        {
                            "step": "Analyze phylum features",
                            "work": "Arthropoda have jointed appendages; Mollusca have muscular foot; Chordata have notochord. Only Echinodermata have water vascular system.",
                            "result": "Echinodermata is correct"
                        }
                    ],
                    "answer": "Echinodermata",
                    "concept": "Phylum characteristics"
                }
            },
            {
                "problem": "Which of the following animals has a four-chambered heart?",
                "difficulty": "easy",
                "options": [
                    "Frog",
                    "Lizard",
                    "Crocodile",
                    "Fish"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Vertebrate heart structure"],
                    "find": "Animal with four-chambered heart",
                    "principle": "Crocodiles are the only reptiles with a completely four-chambered heart. Frogs (amphibians) have three chambers, lizards (reptiles) have three chambers, and fish have two chambers.",
                    "steps": [
                        {
                            "step": "Analyze heart chambers",
                            "work": "Frog: 3-chambered; Lizard: 3-chambered; Crocodile: 4-chambered; Fish: 2-chambered. Only crocodile has complete four-chambered heart among reptiles.",
                            "result": "Crocodile is correct"
                        }
                    ],
                    "answer": "Crocodile",
                    "concept": "Vertebrate anatomy"
                }
            },
            {
                "problem": "Metameric segmentation is characteristic of which phylum?",
                "difficulty": "medium",
                "options": [
                    "Platyhelminthes",
                    "Annelida",
                    "Mollusca",
                    "Echinodermata"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Segmentation in animals"],
                    "find": "Phylum with metameric segmentation",
                    "principle": "Metameric segmentation (true segmentation with repetition of body parts) is characteristic of annelids (earthworms, leeches) and is also seen in arthropods and chordates.",
                    "steps": [
                        {
                            "step": "Analyze segmentation patterns",
                            "work": "Platyhelminthes: unsegmented; Mollusca: unsegmented; Echinodermata: pentaradial symmetry; Annelida: metameric segmentation.",
                            "result": "Annelida is correct"
                        }
                    ],
                    "answer": "Annelida",
                    "concept": "Body segmentation"
                }
            },
            {
                "problem": "Which of the following is not a feature of arthropods?",
                "difficulty": "medium",
                "options": [
                    "Chitinous exoskeleton",
                    "Jointed appendages",
                    "Closed circulatory system",
                    "Ventral nerve cord"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Arthropod characteristics"],
                    "find": "Non-arthropod feature",
                    "principle": "Arthropods have an open circulatory system where blood (hemolymph) is not confined to vessels. They do have chitinous exoskeleton, jointed appendages, and ventral nerve cord.",
                    "steps": [
                        {
                            "step": "Analyze arthropod features",
                            "work": "Chitinous exoskeleton, jointed appendages, and ventral nerve cord are arthropod characteristics. Closed circulatory system is found in annelids and chordates, not arthropods.",
                            "result": "Closed circulatory system is correct answer"
                        }
                    ],
                    "answer": "Closed circulatory system",
                    "concept": "Arthropod anatomy"
                }
            },
            {
                "problem": "The presence of notochord at some stage of development is characteristic of:",
                "difficulty": "easy",
                "options": [
                    "All invertebrates",
                    "All vertebrates",
                    "All chordates",
                    "All animals"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Notochord distribution"],
                    "find": "Group with notochord characteristic",
                    "principle": "The presence of notochord at some stage of life cycle is the defining characteristic of all chordates, which includes both vertebrates and invertebrate chordates (urochordates and cephalochordates).",
                    "steps": [
                        {
                            "step": "Analyze notochord occurrence",
                            "work": "Not all invertebrates have notochord; vertebrates are a subset of chordates; not all animals are chordates. Only chordates have notochord characteristic.",
                            "result": "All chordates is correct"
                        }
                    ],
                    "answer": "All chordates",
                    "concept": "Chordate definition"
                }
            },
            {
                "problem": "Which of the following is a pseudocoelomate animal?",
                "difficulty": "medium",
                "options": [
                    "Earthworm",
                    "Planaria",
                    "Roundworm",
                    "Starfish"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Body cavity types"],
                    "find": "Pseudocoelomate animal",
                    "principle": "Roundworms (phylum Aschelminthes) are pseudocoelomate, having a false coelom not lined by mesoderm. Earthworms are coelomate, planarians are acoelomate, and starfish are coelomate.",
                    "steps": [
                        {
                            "step": "Analyze coelom types",
                            "work": "Earthworm: coelomate; Planaria: acoelomate; Roundworm: pseudocoelomate; Starfish: coelomate. Only roundworm has pseudocoelom.",
                            "result": "Roundworm is correct"
                        }
                    ],
                    "answer": "Roundworm",
                    "concept": "Body cavity types"
                }
            },
            {
                "problem": "Which class of vertebrates has moist skin and can respire through skin, gills, and lungs?",
                "difficulty": "easy",
                "options": [
                    "Pisces",
                    "Amphibia",
                    "Reptilia",
                    "Aves"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Vertebrate characteristics"],
                    "find": "Class with moist skin and multiple respiratory organs",
                    "principle": "Amphibians have moist, glandular skin that aids in cutaneous respiration, in addition to gills (in larvae) and lungs (in adults).",
                    "steps": [
                        {
                            "step": "Analyze vertebrate classes",
                            "work": "Pisces: gills only; Reptilia: dry scaly skin, lungs; Aves: feathers, lungs with air sacs; Amphibia: moist skin, multiple respiratory modes.",
                            "result": "Amphibia is correct"
                        }
                    ],
                    "answer": "Amphibia",
                    "concept": "Vertebrate classification"
                }
            },
            {
                "problem": "Which phylum shows canal system for water circulation?",
                "difficulty": "easy",
                "options": ["Cnidaria", "Porifera", "Annelida", "Echinodermata"],
                "correct": 1,
                "solution": {
                    "given": ["Phylum characteristics"],
                    "find": "Phylum with canal system",
                    "principle": "Porifera (sponges) possess a water canal system for food gathering and respiration.",
                    "steps": [
                        { "step": "Identify feature", "work": "Canal system is a unique feature of sponges.", "result": "Porifera correct" }
                    ],
                    "answer": "Porifera",
                    "concept": "Phylum Porifera"
                }
            },
            {
                "problem": "Comb plates used for locomotion are present in:",
                "difficulty": "easy",
                "options": ["Ctenophora", "Cnidaria", "Platyhelminthes", "Porifera"],
                "correct": 0,
                "solution": {
                    "given": ["Animal phyla features"],
                    "find": "Group with comb plates",
                    "principle": "Ctenophores possess 8 rows of ciliary comb plates used for locomotion.",
                    "steps": [
                        { "step": "Analyze options", "work": "Cnidaria = cnidoblasts; Platyhelminthes = flatworms; Porifera = spicules; Only Ctenophora have comb plates.", "result": "Ctenophora correct" }
                    ],
                    "answer": "Ctenophora",
                    "concept": "Phylum Ctenophora"
                }
            },
            {
                "problem": "Which phylum exhibits flame cells for excretion?",
                "difficulty": "medium",
                "options": ["Nematoda", "Annelida", "Platyhelminthes", "Mollusca"],
                "correct": 2,
                "solution": {
                    "given": ["Excretory structures"],
                    "find": "Phylum with flame cells",
                    "principle": "Platyhelminthes (flatworms) use flame cells for osmoregulation and excretion.",
                    "steps": [
                        { "step": "Check each phylum", "work": "Nematoda = Renette cells; Annelida = Nephridia; Mollusca = Kidney-like organ; Platyhelminthes = flame cells.", "result": "Platyhelminthes correct" }
                    ],
                    "answer": "Platyhelminthes",
                    "concept": "Excretory organs"
                }
            },
            {
                "problem": "Which animal shows alternation of generation?",
                "difficulty": "medium",
                "options": ["Hydra", "Aurelia", "Taenia", "Ascaris"],
                "correct": 1,
                "solution": {
                    "given": ["Cnidarian features"],
                    "find": "Animal with alternation of polyp and medusa",
                    "principle": "Cnidarians like Aurelia show alternation between polyp (asexual) and medusa (sexual) stages.",
                    "steps": [
                        { "step": "Check options", "work": "Hydra = only polyp; Aurelia = alternation; Taenia = parasite; Ascaris = nematode.", "result": "Aurelia correct" }
                    ],
                    "answer": "Aurelia",
                    "concept": "Cnidarian life cycle"
                }
            },
            {
                "problem": "Which phylum has jointed appendages?",
                "difficulty": "easy",
                "options": ["Annelida", "Arthropoda", "Mollusca", "Echinodermata"],
                "correct": 1,
                "solution": {
                    "given": ["Phylum features"],
                    "find": "Jointed appendages phylum",
                    "principle": "Arthropods possess chitinous exoskeleton and jointed appendages.",
                    "steps": [
                        { "step": "Check features", "work": "Annelida = segmented worms; Arthropoda = jointed appendages; Mollusca = soft body; Echinodermata = spiny body.", "result": "Arthropoda correct" }
                    ],
                    "answer": "Arthropoda",
                    "concept": "Phylum Arthropoda"
                }
            },
            {
                "problem": "Radial symmetry in adults but bilateral in larvae is seen in:",
                "difficulty": "medium",
                "options": ["Echinodermata", "Cnidaria", "Annelida", "Mollusca"],
                "correct": 0,
                "solution": {
                    "given": ["Symmetry"],
                    "find": "Phylum with symmetry change",
                    "principle": "Echinoderms are radially symmetrical in adults but bilaterally symmetrical in larval stage.",
                    "steps": [
                        { "step": "Check each phylum", "work": "Cnidaria = radial; Annelida = bilateral; Mollusca = bilateral; Echinodermata = radial in adult, bilateral in larvae.", "result": "Echinodermata correct" }
                    ],
                    "answer": "Echinodermata",
                    "concept": "Body symmetry"
                }
            },
            {
                "problem": "Which mollusk is shell-less?",
                "difficulty": "easy",
                "options": ["Pila", "Octopus", "Unio", "Pinctada"],
                "correct": 1,
                "solution": {
                    "given": ["Mollusca examples"],
                    "find": "Shell-less mollusk",
                    "principle": "Octopus (cephalopod) lacks external shell.",
                    "steps": [
                        { "step": "Analyze examples", "work": "Pila = snail with shell; Unio = mussel with shell; Pinctada = pearl oyster with shell; Octopus = shell-less.", "result": "Octopus correct" }
                    ],
                    "answer": "Octopus",
                    "concept": "Phylum Mollusca"
                }
            },
            {
                "problem": "Which of the following is an acoelomate animal?",
                "difficulty": "medium",
                "options": ["Platyhelminthes", "Aschelminthes", "Annelida", "Arthropoda"],
                "correct": 0,
                "solution": {
                    "given": ["Coelom types"],
                    "find": "Acoelomate phylum",
                    "principle": "Flatworms (Platyhelminthes) are triploblastic but lack a true body cavity (acoelomate).",
                    "steps": [
                        { "step": "Check phyla", "work": "Aschelminthes = pseudocoelomate; Annelida = coelomate; Arthropoda = coelomate; Platyhelminthes = acoelomate.", "result": "Platyhelminthes correct" }
                    ],
                    "answer": "Platyhelminthes",
                    "concept": "Coelom evolution"
                }
            },
            {
                "problem": "Which phylum is the largest in animal kingdom?",
                "difficulty": "easy",
                "options": ["Chordata", "Mollusca", "Arthropoda", "Annelida"],
                "correct": 2,
                "solution": {
                    "given": ["Animal diversity"],
                    "find": "Largest phylum",
                    "principle": "Arthropoda is the largest phylum, with over two-thirds of all described species.",
                    "steps": [
                        { "step": "Analyze species count", "work": "Chordata < Mollusca < Arthropoda in diversity.", "result": "Arthropoda correct" }
                    ],
                    "answer": "Arthropoda",
                    "concept": "Biodiversity"
                }
            },
            {
                "problem": "Which of the following is a living fossil?",
                "difficulty": "medium",
                "options": ["Limulus", "Latimeria", "Both A and B", "Balanoglossus"],
                "correct": 2,
                "solution": {
                    "given": ["Evolutionary biology"],
                    "find": "Living fossil",
                    "principle": "Limulus (king crab, arthropod) and Latimeria (coelacanth fish) are considered living fossils.",
                    "steps": [
                        { "step": "Check organisms", "work": "Both Limulus and Latimeria retained primitive features over millions of years.", "result": "Both A and B correct" }
                    ],
                    "answer": "Both A and B",
                    "concept": "Evolutionary significance"
                }
            },
            {
                "problem": "Which vertebrate group lays amniotic eggs?",
                "difficulty": "medium",
                "options": ["Amphibia", "Reptilia", "Pisces", "Agnatha"],
                "correct": 1,
                "solution": {
                    "given": ["Reproduction"],
                    "find": "Group with amniotic egg",
                    "principle": "Reptiles evolved the amniotic egg which allows development on land.",
                    "steps": [
                        { "step": "Check classes", "work": "Amphibia = non-amniotic; Pisces = aquatic; Agnatha = jawless fish; Reptilia = amniotic egg.", "result": "Reptilia correct" }
                    ],
                    "answer": "Reptilia",
                    "concept": "Amniotes"
                }
            },
            {
                "problem": "In which group is the heart three-chambered with incomplete separation?",
                "difficulty": "medium",
                "options": ["Mammalia", "Amphibia", "Aves", "Pisces"],
                "correct": 1,
                "solution": {
                    "given": ["Circulatory system"],
                    "find": "Group with three-chambered heart",
                    "principle": "Amphibians have a three-chambered heart with two atria and one ventricle.",
                    "steps": [
                        { "step": "Check groups", "work": "Mammalia = 4 chambers; Aves = 4 chambers; Pisces = 2 chambers; Amphibia = 3 chambers.", "result": "Amphibia correct" }
                    ],
                    "answer": "Amphibia",
                    "concept": "Circulation in vertebrates"
                }
            },
            {
                "problem": "Which group has body cavity not lined by mesoderm?",
                "difficulty": "medium",
                "options": ["Acoelomate", "Pseudocoelomate", "Coelomate", "Hemocoel"],
                "correct": 1,
                "solution": {
                    "given": ["Coelom development"],
                    "find": "Body cavity without mesoderm lining",
                    "principle": "Pseudocoelomates (roundworms) have body cavity not fully lined by mesoderm.",
                    "steps": [
                        { "step": "Analyze cavity types", "work": "Acoelomate = no cavity; Pseudocoelomate = partially lined; Coelomate = fully lined.", "result": "Pseudocoelomate correct" }
                    ],
                    "answer": "Pseudocoelomate",
                    "concept": "Body cavity evolution"
                }
            },
            {
                "problem": "Which of the following is not an echinoderm?",
                "difficulty": "easy",
                "options": ["Starfish", "Sea cucumber", "Sea urchin", "Octopus"],
                "correct": 3,
                "solution": {
                    "given": ["Phylum features"],
                    "find": "Non-echinoderm",
                    "principle": "Octopus belongs to Mollusca, not Echinodermata.",
                    "steps": [
                        { "step": "Check options", "work": "Starfish, sea cucumber, sea urchin = echinoderms; Octopus = mollusk.", "result": "Octopus correct" }
                    ],
                    "answer": "Octopus",
                    "concept": "Phylum Mollusca vs Echinodermata"
                }
            },
            {
                "problem": "In chordates, the nerve cord is:",
                "difficulty": "easy",
                "options": ["Solid and ventral", "Hollow and dorsal", "Solid and dorsal", "Hollow and ventral"],
                "correct": 1,
                "solution": {
                    "given": ["Chordate features"],
                    "find": "Type of nerve cord",
                    "principle": "Chordates have dorsal hollow nerve cord, while invertebrates have ventral solid nerve cord.",
                    "steps": [
                        { "step": "Compare animals", "work": "Non-chordates = solid, ventral; Chordates = hollow, dorsal.", "result": "Hollow and dorsal correct" }
                    ],
                    "answer": "Hollow and dorsal",
                    "concept": "Chordate hallmark"
                }
            },
            {
                "problem": "Which animal shows neoteny (retention of larval features in adults)?",
                "difficulty": "hard",
                "options": ["Frog", "Axolotl", "Salamander", "Toad"],
                "correct": 1,
                "solution": {
                    "given": ["Developmental biology"],
                    "find": "Animal with neoteny",
                    "principle": "Axolotl, a larval salamander, retains larval features like gills even in reproductive adult stage.",
                    "steps": [
                        { "step": "Check amphibians", "work": "Axolotl uniquely shows neoteny.", "result": "Axolotl correct" }
                    ],
                    "answer": "Axolotl",
                    "concept": "Developmental variation"
                }
            },
            {
                "problem": "Which animal is dioecious with external fertilization?",
                "difficulty": "medium",
                "options": ["Earthworm", "Frog", "Hydra", "Taenia"],
                "correct": 1,
                "solution": {
                    "given": ["Reproduction"],
                    "find": "Dioecious with external fertilization",
                    "principle": "Frogs have separate sexes (dioecious) and external fertilization in water.",
                    "steps": [
                        { "step": "Check animals", "work": "Earthworm = hermaphrodite; Hydra = asexual/sexual; Taenia = hermaphrodite; Frog = dioecious external.", "result": "Frog correct" }
                    ],
                    "answer": "Frog",
                    "concept": "Reproduction in animals"
                }
            },
            {
                "problem": "Which fish is cartilaginous?",
                "difficulty": "easy",
                "options": ["Shark", "Rohu", "Catla", "Hilsa"],
                "correct": 0,
                "solution": {
                    "given": ["Fish classification"],
                    "find": "Cartilaginous fish",
                    "principle": "Shark (Scoliodon) is cartilaginous; others are bony fishes.",
                    "steps": [
                        { "step": "Compare fish types", "work": "Shark = cartilage; Rohu, Catla, Hilsa = bone.", "result": "Shark correct" }
                    ],
                    "answer": "Shark",
                    "concept": "Pisces classification"
                }
            },
            {
                "problem": "Which reptile has four-chambered heart?",
                "difficulty": "medium",
                "options": ["Lizard", "Snake", "Crocodile", "Turtle"],
                "correct": 2,
                "solution": {
                    "given": ["Reptile circulation"],
                    "find": "Reptile with 4 chambers",
                    "principle": "Crocodiles are unique reptiles with completely four-chambered heart.",
                    "steps": [
                        { "step": "Check reptiles", "work": "Others = 3 chambers; Crocodile = 4.", "result": "Crocodile correct" }
                    ],
                    "answer": "Crocodile",
                    "concept": "Circulatory adaptations"
                }
            },
            {
                "problem": "Which mammal lays eggs?",
                "difficulty": "easy",
                "options": ["Kangaroo", "Whale", "Platypus", "Bat"],
                "correct": 2,
                "solution": {
                    "given": ["Mammal reproduction"],
                    "find": "Egg-laying mammal",
                    "principle": "Monotremes like Platypus lay eggs, unlike most mammals.",
                    "steps": [
                        { "step": "Check mammals", "work": "Kangaroo = marsupial; Whale & Bat = viviparous; Platypus = oviparous.", "result": "Platypus correct" }
                    ],
                    "answer": "Platypus",
                    "concept": "Mammal diversity"
                }
            },
            {
                "problem": "Which of the following organisms belongs to phylum Porifera?",
                "difficulty": "easy",
                "options": [
                    "Sycon",
                    "Hydra",
                    "Planaria",
                    "Ascaris"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Animal Kingdom classification"],
                    "find": "Organism from Porifera",
                    "principle": "Porifera includes sponges that are asymmetrical, pore-bearing animals.",
                    "steps": [
                        {
                            "step": "Check phylum of each organism",
                            "work": "Sycon = Porifera, Hydra = Cnidaria, Planaria = Platyhelminthes, Ascaris = Nematoda.",
                            "result": "Sycon is correct"
                        }
                    ],
                    "answer": "Sycon",
                    "concept": "Porifera classification"
                }
            },
            {
                "problem": "Cnidoblasts are the characteristic cells of:",
                "difficulty": "medium",
                "options": [
                    "Platyhelminthes",
                    "Coelenterata",
                    "Echinodermata",
                    "Annelida"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cell specializations"],
                    "find": "Animals with cnidoblasts",
                    "principle": "Cnidoblasts (stinging cells) are unique to cnidarians like Hydra, used for defense and prey capture.",
                    "steps": [
                        {
                            "step": "Check unique features",
                            "work": "Only Coelenterata (Cnidaria) have cnidoblasts.",
                            "result": "Coelenterata is correct"
                        }
                    ],
                    "answer": "Coelenterata",
                    "concept": "Specialized cells in Cnidaria"
                }
            },
            {
                "problem": "Which phylum shows a water vascular system?",
                "difficulty": "medium",
                "options": [
                    "Annelida",
                    "Arthropoda",
                    "Echinodermata",
                    "Mollusca"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Unique systems"],
                    "find": "Phylum with water vascular system",
                    "principle": "Echinoderms like starfish have a water vascular system for locomotion, feeding, and respiration.",
                    "steps": [
                        {
                            "step": "Check distinguishing systems",
                            "work": "Only Echinodermata has water vascular system.",
                            "result": "Echinodermata is correct"
                        }
                    ],
                    "answer": "Echinodermata",
                    "concept": "Animal organ systems"
                }
            },
            {
                "problem": "Which of the following is a pseudocoelomate?",
                "difficulty": "medium",
                "options": [
                    "Ascaris",
                    "Earthworm",
                    "Cockroach",
                    "Leech"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Body cavity types"],
                    "find": "Pseudocoelomate organism",
                    "principle": "Nematodes (roundworms like Ascaris) have pseudocoelom, derived partly from blastocoel.",
                    "steps": [
                        {
                            "step": "Classify each",
                            "work": "Ascaris = pseudocoelomate; Earthworm & Leech = coelomates; Cockroach = coelomate arthropod.",
                            "result": "Ascaris is correct"
                        }
                    ],
                    "answer": "Ascaris",
                    "concept": "Body cavity classification"
                }
            },
            {
                "problem": "Excretion in Arthropoda occurs through:",
                "difficulty": "medium",
                "options": [
                    "Nephridia",
                    "Flame cells",
                    "Malpighian tubules",
                    "Kidneys"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Excretory systems"],
                    "find": "Excretory organs of arthropods",
                    "principle": "Insects and most arthropods excrete via Malpighian tubules, removing nitrogenous waste.",
                    "steps": [
                        {
                            "step": "Compare excretory organs",
                            "work": "Nephridia = annelids, Flame cells = Platyhelminthes, Kidneys = vertebrates.",
                            "result": "Malpighian tubules is correct"
                        }
                    ],
                    "answer": "Malpighian tubules",
                    "concept": "Excretion in invertebrates"
                }
            },
            {
                "problem": "Metameric segmentation is a feature of:",
                "difficulty": "medium",
                "options": [
                    "Annelida, Arthropoda, and Chordata",
                    "Cnidaria and Porifera",
                    "Platyhelminthes and Nematoda",
                    "Mollusca only"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Segmentation"],
                    "find": "Phyla with true segmentation",
                    "principle": "Annelids, arthropods, and chordates show segmentation, with body divided into repeating units.",
                    "steps": [
                        {
                            "step": "Analyze segmentation",
                            "work": "Other phyla don’t show true metamerism.",
                            "result": "Annelida, Arthropoda, Chordata is correct"
                        }
                    ],
                    "answer": "Annelida, Arthropoda, and Chordata",
                    "concept": "Animal body plans"
                }
            },
            {
                "problem": "Which of the following is an acoelomate?",
                "difficulty": "medium",
                "options": [
                    "Planaria",
                    "Ascaris",
                    "Earthworm",
                    "Cockroach"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Coelom classification"],
                    "find": "Acoelomate organism",
                    "principle": "Platyhelminthes like Planaria lack a coelom and are called acoelomates.",
                    "steps": [
                        {
                            "step": "Compare",
                            "work": "Ascaris = pseudocoelom; Earthworm & Cockroach = coelomates.",
                            "result": "Planaria is correct"
                        }
                    ],
                    "answer": "Planaria",
                    "concept": "Body cavity in animals"
                }
            },
            {
                "problem": "Which phylum shows radial symmetry in adults?",
                "difficulty": "easy",
                "options": [
                    "Annelida",
                    "Echinodermata",
                    "Arthropoda",
                    "Chordata"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Symmetry types"],
                    "find": "Adult animals with radial symmetry",
                    "principle": "Echinoderms are bilaterally symmetrical in larvae but radially symmetrical as adults.",
                    "steps": [
                        {
                            "step": "Analyze",
                            "work": "Other phyla show bilateral symmetry.",
                            "result": "Echinodermata is correct"
                        }
                    ],
                    "answer": "Echinodermata",
                    "concept": "Animal symmetry"
                }
            },
            {
                "problem": "Which class of vertebrates has a three-chambered heart?",
                "difficulty": "medium",
                "options": [
                    "Pisces",
                    "Amphibia",
                    "Reptilia (except crocodiles)",
                    "Both Amphibia and most Reptilia"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Circulatory system in vertebrates"],
                    "find": "Animals with three-chambered heart",
                    "principle": "Amphibians and most reptiles (except crocodiles) have three-chambered hearts.",
                    "steps": [
                        {
                            "step": "Check vertebrate circulation",
                            "work": "Pisces = 2 chambers; Amphibia = 3; Reptiles (mostly) = 3, Crocodiles = 4.",
                            "result": "Amphibia + most Reptilia are correct"
                        }
                    ],
                    "answer": "Both Amphibia and most Reptilia",
                    "concept": "Vertebrate circulation"
                }
            },
            {
                "problem": "Which of the following is a jawless fish?",
                "difficulty": "easy",
                "options": [
                    "Shark",
                    "Rohu",
                    "Petromyzon",
                    "Scoliodon"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Chordata classification"],
                    "find": "Jawless fish example",
                    "principle": "Cyclostomes like Petromyzon and Myxine are jawless, elongated, and ectoparasitic.",
                    "steps": [
                        {
                            "step": "Compare fishes",
                            "work": "Shark & Scoliodon = cartilaginous fish, Rohu = bony fish.",
                            "result": "Petromyzon is correct"
                        }
                    ],
                    "answer": "Petromyzon",
                    "concept": "Cyclostomata features"
                }
            },
            {
                "problem": "Which group of animals is exclusively marine?",
                "difficulty": "medium",
                "options": [
                    "Mollusca",
                    "Echinodermata",
                    "Arthropoda",
                    "Annelida"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Habitat classification"],
                    "find": "Exclusively marine phylum",
                    "principle": "Echinoderms are exclusively marine organisms like starfish, sea urchins, brittle stars.",
                    "steps": [
                        {
                            "step": "Check habitats",
                            "work": "Others have terrestrial/freshwater members.",
                            "result": "Echinodermata is correct"
                        }
                    ],
                    "answer": "Echinodermata",
                    "concept": "Animal habitats"
                }
            },
            {
                "problem": "Which of the following animals is triploblastic but acoelomate?",
                "difficulty": "hard",
                "options": [
                    "Hydra",
                    "Planaria",
                    "Ascaris",
                    "Earthworm"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Body wall and germ layers"],
                    "find": "Triploblastic but acoelomate organism",
                    "principle": "Platyhelminthes (Planaria) are triploblastic (three germ layers) but lack a coelom.",
                    "steps": [
                        {
                            "step": "Compare body plans",
                            "work": "Hydra = diploblastic; Ascaris = pseudocoelomate; Earthworm = coelomate.",
                            "result": "Planaria is correct"
                        }
                    ],
                    "answer": "Planaria",
                    "concept": "Triploblastic acoelomates"
                }
            }
        ]
    },

    "plant_kingdom": {
        "title": "Plant Kingdom",
        "weightage": "5–7%",
        "introduction": "The Plant Kingdom unit covers the classification, characteristics, and life cycles of major plant groups. This classification is based on morphological, anatomical, and reproductive features, highlighting evolutionary trends from simple to complex plants. NEET questions frequently test identification of plant groups, alternation of generations, reproductive structures, and evolutionary relationships.",

        "topics": [
            {
                "name": "Classification Systems and Basis",
                "description": "Various systems of plant classification and the fundamental criteria used for classifying plants into different groups.",
                "subtopics": [
                    {
                        "name": "Artificial vs Natural Systems",
                        "explanation": "Artificial systems (e.g., Linnaeus) based on few morphological features; Natural systems (e.g., Bentham & Hooker) based on natural relationships; Phylogenetic systems based on evolutionary relationships."
                    },
                    {
                        "name": "Classification Criteria",
                        "explanation": "Based on: (1) Plant body differentiation (thallus to differentiated roots, stems, leaves), (2) Vascular tissue presence (non-vascular vs vascular), (3) Seed formation (cryptogams vs phanerogams), (4) Seed enclosure (gymnosperms vs angiosperms)."
                    }
                ]
            },
            {
                "name": "Algae",
                "description": "Simple, thalloid, aquatic organisms with chlorophyll and other pigments; important primary producers.",
                "subtopics": [
                    {
                        "name": "General Characteristics",
                        "explanation": "Mostly aquatic (freshwater and marine), autotrophic, thalloid body, pigments (chlorophyll-a, b, c; carotenoids, phycobilins), cell wall with cellulose, food storage as starch/oil."
                    },
                    {
                        "name": "Major Classes",
                        "explanation": "Chlorophyceae (green algae: Chlamydomonas, Spirogyra), Phaeophyceae (brown algae: Laminaria, Fucus), Rhodophyceae (red algae: Polysiphonia, Gracilaria)."
                    },
                    {
                        "name": "Reproduction and Life Cycle",
                        "explanation": "Vegetative (fragmentation), asexual (zoospores), sexual (isogamy, anisogamy, oogamy). Life cycle varies from haplontic to diplontic to haplo-diplontic."
                    },
                    {
                        "name": "Economic Importance",
                        "explanation": "Food source (Chlorella, Spirulina), agar-agar (Gelidium, Gracilaria), iodine (Laminaria), algin (brown algae), soil fertility, water blooms."
                    }
                ]
            },
            {
                "name": "Bryophytes",
                "description": "Amphibians of plant kingdom; non-vascular plants that require water for sexual reproduction.",
                "subtopics": [
                    {
                        "name": "General Characteristics",
                        "explanation": "Non-vascular, primitive land plants, gametophyte dominant, require water for fertilization, rhizoids for attachment, no true roots/stems/leaves."
                    },
                    {
                        "name": "Major Groups",
                        "explanation": "Liverworts (Marchantia, Riccia), Mosses (Funaria, Sphagnum), Hornworts (Anthoceros)."
                    },
                    {
                        "name": "Reproduction and Life Cycle",
                        "explanation": "Haplo-diplontic life cycle with dominant gametophyte. Sexual reproduction: antheridia (male) and archegonia (female). Sporophyte dependent on gametophyte."
                    },
                    {
                        "name": "Economic Importance",
                        "explanation": "Peat formation (Sphagnum), soil formation, water retention, food for animals, experimental material."
                    }
                ]
            },
            {
                "name": "Pteridophytes",
                "description": "First vascular plants; have true roots, stems, and leaves but produce spores instead of seeds.",
                "subtopics": [
                    {
                        "name": "General Characteristics",
                        "explanation": "Vascular plants, sporophyte dominant, homosporous or heterosporous, require water for fertilization, well-differentiated body."
                    },
                    {
                        "name": "Major Groups",
                        "explanation": "Lycopsida (club mosses: Selaginella), Sphenopsida (horse tails: Equisetum), Pteropsida (ferns: Pteris, Dryopteris)."
                    },
                    {
                        "name": "Reproduction and Life Cycle",
                        "explanation": "Haplo-diplontic life cycle with dominant sporophyte. Sporangia produce spores. Gametophyte (prothallus) independent. Heterospory in some (Selaginella, Salvinia)."
                    },
                    {
                        "name": "Evolutionary Significance",
                        "explanation": "First plants to develop vascular tissue, precursors to seed plants, show heterospory (beginning of seed habit)."
                    }
                ]
            },
            {
                "name": "Gymnosperms",
                "description": "Plants with naked seeds not enclosed in fruits; mostly perennial, woody plants.",
                "subtopics": [
                    {
                        "name": "General Characteristics",
                        "explanation": "Vascular plants, produce seeds but no flowers or fruits, seeds naked (not enclosed in ovary), well-developed sporophyte, reduced gametophyte."
                    },
                    {
                        "name": "Major Groups",
                        "explanation": "Cycadales (Cycas), Coniferales (Pinus, Cedrus), Gnetales (Gnetum, Ephedra), Ginkgoales (Ginkgo)."
                    },
                    {
                        "name": "Reproduction and Life Cycle",
                        "explanation": "Heterosporous - produce microspores and megaspores. Pollination direct (no water needed). Formation of pollen tube. Seeds with stored food but no fruit wall."
                    },
                    {
                        "name": "Economic Importance",
                        "explanation": "Timber (conifers), resin, turpentine, ephedrine (medicinal), ornamental plants, food (pine nuts)."
                    }
                ]
            },
            {
                "name": "Angiosperms",
                "description": "Flowering plants with seeds enclosed in fruits; most advanced and diverse plant group.",
                "subtopics": [
                    {
                        "name": "General Characteristics",
                        "explanation": "Vascular plants, produce flowers and fruits, seeds enclosed in ovary, double fertilization, most diverse plant group, sporophyte dominant."
                    },
                    {
                        "name": "Classification",
                        "explanation": "Dicotyledons (two cotyledons, tap root, net venation, tetra or pentamerous flowers), Monocotyledons (one cotyledon, fibrous roots, parallel venation, trimerous flowers)."
                    },
                    {
                        "name": "Reproduction and Life Cycle",
                        "explanation": "Highly reduced gametophyte. Double fertilization: one male gamete fuses with egg (zygote), other with polar nuclei (endosperm). Fruit development from ovary."
                    },
                    {
                        "name": "Economic Importance",
                        "explanation": "Food crops, medicines, fibers, timber, ornamentals, essential oils - virtually all human plant-based resources."
                    }
                ]
            },
            {
                "name": "Plant Life Cycles and Alternation of Generations",
                "description": "Patterns of alternation between haploid gametophyte and diploid sporophyte generations in different plant groups.",
                "subtopics": [
                    {
                        "name": "Types of Life Cycles",
                        "explanation": "Haplontic (dominant gametophyte - algae), Diplontic (dominant sporophyte - gymnosperms, angiosperms), Haplo-diplontic (both phases multicellular - bryophytes, pteridophytes)."
                    },
                    {
                        "name": "Evolutionary Trends",
                        "explanation": "Progressive reduction of gametophyte, increasing dominance of sporophyte, development of seed habit, independence from water for fertilization."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Evolutionary Trends": [
                {
                    "name": "Increasing Complexity",
                    "description": "Progression from thallus organization to differentiated plant body with roots, stems, and leaves"
                },
                {
                    "name": "Reduction of Gametophyte",
                    "description": "Evolutionary trend from dominant gametophyte (bryophytes) to highly reduced gametophyte (angiosperms)"
                }
            ],
            "Reproductive Adaptations": [
                {
                    "name": "Water to Land Transition",
                    "description": "Evolution of reproductive strategies from water-dependent to independent fertilization"
                },
                {
                    "name": "Seed Evolution",
                    "description": "Development of seed habit from heterospory in pteridophytes to true seeds in gymnosperms and angiosperms"
                }
            ],
            "Classification Features": [
                {
                    "name": "Vascular Tissue Development",
                    "description": "Evolution of xylem and phloem for efficient transport in land plants"
                },
                {
                    "name": "Reproductive Structures",
                    "description": "Progressive development of complex reproductive structures from sporangia to flowers"
                }
            ]
        },

        "problems": [
            {
                "problem": "Which of the following is not a characteristic of algae?",
                "difficulty": "easy",
                "options": [
                    "Thalloid plant body",
                    "Presence of chlorophyll",
                    "Vascular tissue present",
                    "Mostly aquatic habitat"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Algal characteristics"],
                    "find": "Non-algal feature",
                    "principle": "Algae are simple, thalloid organisms with chlorophyll for photosynthesis, mostly aquatic, but they lack true vascular tissue (xylem and phloem).",
                    "steps": [
                        {
                            "step": "Analyze algal features",
                            "work": "Thalloid body, chlorophyll presence, and aquatic habitat are algal characteristics. Vascular tissue is found in higher plants, not algae.",
                            "result": "Vascular tissue present is correct answer"
                        }
                    ],
                    "answer": "Vascular tissue present",
                    "concept": "Algal characteristics"
                }
            },
            {
                "problem": "The 'amphibians of plant kingdom' refer to:",
                "difficulty": "easy",
                "options": [
                    "Algae",
                    "Bryophytes",
                    "Pteridophytes",
                    "Gymnosperms"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Bryophyte characteristics"],
                    "find": "Plant group called plant amphibians",
                    "principle": "Bryophytes are called 'amphibians of plant kingdom' because they require water for sexual reproduction (fertilization) but can live on land, similar to biological amphibians.",
                    "steps": [
                        {
                            "step": "Analyze plant groups",
                            "work": "Algae are aquatic; pteridophytes and gymnosperms don't require water for reproduction. Only bryophytes need water for fertilization while living on land.",
                            "result": "Bryophytes is correct"
                        }
                    ],
                    "answer": "Bryophytes",
                    "concept": "Bryophyte terminology"
                }
            },
            {
                "problem": "Which plant group is characterized by the presence of vascular tissues but absence of seeds?",
                "difficulty": "medium",
                "options": [
                    "Bryophytes",
                    "Pteridophytes",
                    "Gymnosperms",
                    "Angiosperms"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Plant classification features"],
                    "find": "Vascular plants without seeds",
                    "principle": "Pteridophytes are vascular plants (have xylem and phloem) but reproduce via spores and do not produce seeds, unlike gymnosperms and angiosperms.",
                    "steps": [
                        {
                            "step": "Analyze plant groups",
                            "work": "Bryophytes: non-vascular, no seeds; Gymnosperms and Angiosperms: vascular with seeds; Pteridophytes: vascular but no seeds.",
                            "result": "Pteridophytes is correct"
                        }
                    ],
                    "answer": "Pteridophytes",
                    "concept": "Plant classification"
                }
            },
            {
                "problem": "Double fertilization is characteristic of:",
                "difficulty": "medium",
                "options": [
                    "Bryophytes",
                    "Pteridophytes",
                    "Gymnosperms",
                    "Angiosperms"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Reproductive processes"],
                    "find": "Plant group with double fertilization",
                    "principle": "Double fertilization is unique to angiosperms, where one male gamete fertilizes the egg (forming zygote) and the other fuses with polar nuclei (forming endosperm).",
                    "steps": [
                        {
                            "step": "Analyze fertilization processes",
                            "work": "Bryophytes and pteridophytes have single fertilization with water requirement; gymnosperms have single fertilization; only angiosperms show double fertilization.",
                            "result": "Angiosperms is correct"
                        }
                    ],
                    "answer": "Angiosperms",
                    "concept": "Double fertilization"
                }
            },
            {
                "problem": "Which of the following is a heterosporous pteridophyte?",
                "difficulty": "medium",
                "options": [
                    "Equisetum",
                    "Lycopodium",
                    "Selaginella",
                    "Pteris"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Pteridophyte characteristics"],
                    "find": "Heterosporous pteridophyte",
                    "principle": "Heterosporous pteridophytes produce two types of spores (microspores and megaspores). Selaginella and Salvinia are heterosporous, while Equisetum, Lycopodium and Pteris are homosporous.",
                    "steps": [
                        {
                            "step": "Analyze spore types",
                            "work": "Equisetum, Lycopodium, and Pteris are homosporous (one type of spore). Only Selaginella is heterosporous among the options.",
                            "result": "Selaginella is correct"
                        }
                    ],
                    "answer": "Selaginella",
                    "concept": "Heterospory in pteridophytes"
                }
            },
            {
                "problem": "The plant group where gametophyte is the dominant phase is:",
                "difficulty": "easy",
                "options": [
                    "Bryophytes",
                    "Pteridophytes",
                    "Gymnosperms",
                    "Angiosperms"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Alternation of generations"],
                    "find": "Group with dominant gametophyte",
                    "principle": "In bryophytes, the gametophyte is the dominant, photosynthetic, independent phase, while the sporophyte is dependent on it. In other groups, sporophyte is dominant.",
                    "steps": [
                        {
                            "step": "Analyze life cycles",
                            "work": "Pteridophytes, gymnosperms, and angiosperms have dominant sporophyte. Only bryophytes have dominant gametophyte phase.",
                            "result": "Bryophytes is correct"
                        }
                    ],
                    "answer": "Bryophytes",
                    "concept": "Alternation of generations"
                }
            },
            {
                "problem": "Which algal class contains chlorophyll-a and d, and phycoerythrin?",
                "difficulty": "hard",
                "options": [
                    "Chlorophyceae",
                    "Phaeophyceae",
                    "Rhodophyceae",
                    "Cyanophyceae"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Algal pigments"],
                    "find": "Algal class with specific pigments",
                    "principle": "Rhodophyceae (red algae) contain chlorophyll-a and d, and the red pigment phycoerythrin which allows them to photosynthesize in deep water by absorbing blue light.",
                    "steps": [
                        {
                            "step": "Analyze pigment composition",
                            "work": "Chlorophyceae: chlorophyll a and b; Phaeophyceae: chlorophyll a and c, fucoxanthin; Cyanophyceae: chlorophyll a, phycocyanin; Rhodophyceae: chlorophyll a and d, phycoerythrin.",
                            "result": "Rhodophyceae is correct"
                        }
                    ],
                    "answer": "Rhodophyceae",
                    "concept": "Algal pigments"
                }
            },
            {
                "problem": "The presence of flowers and fruits is characteristic of:",
                "difficulty": "easy",
                "options": [
                    "Pteridophytes",
                    "Gymnosperms",
                    "Angiosperms",
                    "Bryophytes"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Plant reproductive structures"],
                    "find": "Plants with flowers and fruits",
                    "principle": "Angiosperms are characterized by the presence of flowers (reproductive structures) and fruits (mature ovaries containing seeds). Other plant groups lack these structures.",
                    "steps": [
                        {
                            "step": "Analyze reproductive features",
                            "work": "Pteridophytes have spores; gymnosperms have naked seeds; bryophytes have gametophyte dominance. Only angiosperms produce flowers and fruits.",
                            "result": "Angiosperms is correct"
                        }
                    ],
                    "answer": "Angiosperms",
                    "concept": "Angiosperm characteristics"
                }
            },
            {
                "problem": "Which of the following is a seedless vascular plant?",
                "difficulty": "medium",
                "options": [
                    "Cycas",
                    "Pinus",
                    "Fern",
                    "Moss"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Plant classification"],
                    "find": "Seedless vascular plant",
                    "principle": "Ferns (pteridophytes) are vascular plants that reproduce via spores and do not produce seeds. Cycas and Pinus are gymnosperms (seed plants), moss is non-vascular.",
                    "steps": [
                        {
                            "step": "Analyze plant characteristics",
                            "work": "Cycas and Pinus: seed plants; Moss: non-vascular; Fern: vascular but seedless (reproduces by spores).",
                            "result": "Fern is correct"
                        }
                    ],
                    "answer": "Fern",
                    "concept": "Plant classification"
                }
            },
            {
                "problem": "The commercial product 'agar-agar' is obtained from:",
                "difficulty": "easy",
                "options": [
                    "Green algae",
                    "Brown algae",
                    "Red algae",
                    "Blue-green algae"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Economic importance of algae"],
                    "find": "Source of agar-agar",
                    "principle": "Agar-agar, a gelatinous substance used in microbiological media and food industry, is obtained from red algae (Rhodophyceae) such as Gelidium and Gracilaria.",
                    "steps": [
                        {
                            "step": "Analyze algal products",
                            "work": "Green algae: food source; Brown algae: algin; Blue-green algae: nitrogen fixation; Red algae: agar-agar.",
                            "result": "Red algae is correct"
                        }
                    ],
                    "answer": "Red algae",
                    "concept": "Algal products"
                }
            },
            {
                "problem": "Which group of plants first showed the development of seeds?",
                "difficulty": "medium",
                "options": [
                    "Bryophytes",
                    "Pteridophytes",
                    "Gymnosperms",
                    "Angiosperms"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Seed evolution"],
                    "find": "First seed plants",
                    "principle": "Gymnosperms are the first vascular plants to produce true seeds, though naked (not enclosed in fruit).",
                    "steps": [
                        {
                            "step": "Compare plant groups",
                            "work": "Bryophytes and pteridophytes lack seeds, gymnosperms have naked seeds, angiosperms have seeds enclosed in fruits.",
                            "result": "Gymnosperms is correct"
                        }
                    ],
                    "answer": "Gymnosperms",
                    "concept": "Seed evolution"
                }
            },
            {
                "problem": "In moss (Funaria), the sporophyte is:",
                "difficulty": "medium",
                "options": [
                    "Independent and dominant",
                    "Dependent on gametophyte",
                    "Equal to gametophyte",
                    "Completely absent"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Bryophyte life cycle"],
                    "find": "Nature of moss sporophyte",
                    "principle": "In bryophytes, sporophyte remains attached to and nutritionally dependent on the gametophyte.",
                    "steps": [
                        {
                            "step": "Analyze bryophyte phases",
                            "work": "Gametophyte is dominant, sporophyte attached to gametophyte for food.",
                            "result": "Dependent on gametophyte is correct"
                        }
                    ],
                    "answer": "Dependent on gametophyte",
                    "concept": "Bryophyte life cycle"
                }
            },
            {
                "problem": "Selaginella is considered important in plant evolution because it shows:",
                "difficulty": "hard",
                "options": [
                    "Homosporous reproduction",
                    "Heterospory leading to seed habit",
                    "Independent gametophyte",
                    "Absence of vascular tissue"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Evolutionary significance of Selaginella"],
                    "find": "Unique evolutionary feature",
                    "principle": "Selaginella shows heterospory (two spore types), considered the evolutionary precursor to seed habit.",
                    "steps": [
                        {
                            "step": "Analyze traits",
                            "work": "Homosporous is primitive; heterospory → seed habit. Vascular tissue is present, not absent.",
                            "result": "Heterospory leading to seed habit is correct"
                        }
                    ],
                    "answer": "Heterospory leading to seed habit",
                    "concept": "Evolutionary importance of pteridophytes"
                }
            },
            {
                "problem": "In Pinus, the endosperm is:",
                "difficulty": "medium",
                "options": [
                    "Haploid, formed before fertilization",
                    "Diploid, formed after fertilization",
                    "Triploid, formed after double fertilization",
                    "Absent"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Gymnosperm reproduction"],
                    "find": "Nature of endosperm in Pinus",
                    "principle": "In gymnosperms, the endosperm is female gametophyte tissue, haploid, and formed before fertilization.",
                    "steps": [
                        {
                            "step": "Compare with angiosperms",
                            "work": "Angiosperms: triploid endosperm. Gymnosperms: haploid endosperm from gametophyte.",
                            "result": "Haploid formed before fertilization is correct"
                        }
                    ],
                    "answer": "Haploid, formed before fertilization",
                    "concept": "Gymnosperm endosperm"
                }
            },
            {
                "problem": "Antheridia and archegonia are present in:",
                "difficulty": "easy",
                "options": [
                    "Algae and bryophytes",
                    "Bryophytes and pteridophytes",
                    "Gymnosperms and angiosperms",
                    "Only angiosperms"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Plant reproductive organs"],
                    "find": "Groups with antheridia and archegonia",
                    "principle": "Antheridia (male) and archegonia (female) are multicellular sex organs found in bryophytes and pteridophytes.",
                    "steps": [
                        {
                            "step": "Check plant groups",
                            "work": "Algae mostly unicellular gametangia; gymnosperms/angiosperms have pollen and ovules. Only bryophytes + pteridophytes have archegonia & antheridia.",
                            "result": "Bryophytes and pteridophytes is correct"
                        }
                    ],
                    "answer": "Bryophytes and pteridophytes",
                    "concept": "Sex organs in plants"
                }
            },
            {
                "problem": "Which gymnosperm resembles angiosperms in some features?",
                "difficulty": "hard",
                "options": [
                    "Pinus",
                    "Cycas",
                    "Gnetum",
                    "Cedrus"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Gnetum features"],
                    "find": "Gymnosperm resembling angiosperms",
                    "principle": "Gnetum resembles angiosperms due to presence of vessels in xylem and angiosperm-like reproductive structures.",
                    "steps": [
                        {
                            "step": "Analyze gymnosperms",
                            "work": "Pinus, Cycas, Cedrus = typical gymnosperms. Gnetum shows advanced traits.",
                            "result": "Gnetum is correct"
                        }
                    ],
                    "answer": "Gnetum",
                    "concept": "Gymnosperm–angiosperm link"
                }
            },
            {
                "problem": "The process of double fertilization in angiosperms results in:",
                "difficulty": "medium",
                "options": [
                    "Zygote and triploid endosperm",
                    "Zygote and haploid endosperm",
                    "Two zygotes",
                    "Diploid endosperm only"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Angiosperm reproduction"],
                    "find": "Products of double fertilization",
                    "principle": "One male gamete fuses with egg → zygote; other fuses with polar nuclei → triploid endosperm.",
                    "steps": [
                        {
                            "step": "Break down fertilization",
                            "work": "Egg + male → diploid zygote. Polar nuclei + male → triploid endosperm.",
                            "result": "Zygote and triploid endosperm is correct"
                        }
                    ],
                    "answer": "Zygote and triploid endosperm",
                    "concept": "Double fertilization in angiosperms"
                }
            },
            {
                "problem": "In bryophytes, the structure that anchors the gametophyte to the substratum is:",
                "difficulty": "easy",
                "options": [
                    "Root",
                    "Rhizoid",
                    "Stolon",
                    "Holdfast"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Bryophyte morphology"],
                    "find": "Anchoring structure",
                    "principle": "Bryophytes lack true roots, instead they use unicellular or multicellular rhizoids for anchorage and absorption.",
                    "steps": [
                        {
                            "step": "Compare structures",
                            "work": "Roots = higher plants; stolon = vegetative runner; holdfast = algae; bryophytes → rhizoids.",
                            "result": "Rhizoid is correct"
                        }
                    ],
                    "answer": "Rhizoid",
                    "concept": "Bryophyte anchorage"
                }
            },
            {
                "problem": "The haplontic life cycle is found in:",
                "difficulty": "medium",
                "options": [
                    "Algae like Chlamydomonas",
                    "Mosses",
                    "Ferns",
                    "Pines"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Types of life cycles"],
                    "find": "Plants with haplontic life cycle",
                    "principle": "Haplontic life cycle: dominant gametophyte (haploid), sporophyte is zygote only. Seen in many algae like Chlamydomonas, Spirogyra.",
                    "steps": [
                        {
                            "step": "Check groups",
                            "work": "Moss = haplo-diplontic; ferns = haplo-diplontic; pines = diplontic; algae (Chlamydomonas) = haplontic.",
                            "result": "Chlamydomonas is correct"
                        }
                    ],
                    "answer": "Algae like Chlamydomonas",
                    "concept": "Life cycle patterns"
                }
            },
            {
                "problem": "A plant showing diplohaplontic life cycle with independent sporophyte and gametophyte is:",
                "difficulty": "hard",
                "options": [
                    "Funaria",
                    "Pteris",
                    "Pinus",
                    "Chlamydomonas"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Life cycle types"],
                    "find": "Diplohaplontic with independent phases",
                    "principle": "In pteridophytes like Pteris, both sporophyte (fern plant) and gametophyte (prothallus) are independent and photosynthetic.",
                    "steps": [
                        {
                            "step": "Compare examples",
                            "work": "Funaria → dependent sporophyte; Pinus → diplontic; Chlamydomonas → haplontic; Pteris → diplohaplontic with independence.",
                            "result": "Pteris is correct"
                        }
                    ],
                    "answer": "Pteris",
                    "concept": "Diplohaplontic life cycle"
                }
            },
            {
                "problem": "Which pigment is absent in red algae?",
                "difficulty": "easy",
                "options": [
                    "Chlorophyll a",
                    "Chlorophyll d",
                    "Phycoerythrin",
                    "Fucoxanthin"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Pigments in algae"],
                    "find": "Pigment absent in red algae",
                    "principle": "Red algae (Rhodophyceae) have chlorophyll a, d and phycoerythrin (red pigment). Fucoxanthin is present in brown algae.",
                    "steps": [
                        {
                            "step": "Check pigment distribution",
                            "work": "Chl a + d → red algae; phycoerythrin → red algae; fucoxanthin → brown algae.",
                            "result": "Fucoxanthin absent in red algae"
                        }
                    ],
                    "answer": "Fucoxanthin",
                    "concept": "Algal pigments"
                }
            },
            {
                "problem": "The plant body in pteridophytes is:",
                "difficulty": "medium",
                "options": [
                    "Thalloid, gametophyte-dominant",
                    "Differentiated into root, stem, leaves, sporophyte-dominant",
                    "Unicellular and filamentous",
                    "Haploid, multicellular"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Pteridophyte morphology"],
                    "find": "Nature of plant body",
                    "principle": "Pteridophytes have true roots, stems, and leaves. Sporophyte is dominant phase.",
                    "steps": [
                        {
                            "step": "Compare groups",
                            "work": "Thalloid = bryophytes/algae; unicellular = algae; haploid = gametophytes. Pteridophytes = vascular plants with dominant sporophyte.",
                            "result": "Differentiated sporophyte is correct"
                        }
                    ],
                    "answer": "Differentiated into root, stem, leaves, sporophyte-dominant",
                    "concept": "Pteridophyte morphology"
                }
            },
            {
                "problem": "The term ‘protonema’ is associated with:",
                "difficulty": "easy",
                "options": [
                    "Moss gametophyte",
                    "Fern sporophyte",
                    "Algal filament",
                    "Gymnosperm embryo"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Bryophyte structures"],
                    "find": "Where protonema occurs",
                    "principle": "Protonema is the first gametophytic stage in mosses, filamentous, resembling green algae.",
                    "steps": [
                        {
                            "step": "Match terms",
                            "work": "Fern = sporophyte; algae = thallus; gymnosperm = embryo; moss = protonema.",
                            "result": "Moss gametophyte is correct"
                        }
                    ],
                    "answer": "Moss gametophyte",
                    "concept": "Bryophyte development"
                }
            },
            {
                "problem": "Heterospory is first observed in:",
                "difficulty": "medium",
                "options": [
                    "Bryophytes",
                    "Ferns",
                    "Selaginella and Salvinia",
                    "Algae"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Evolution of heterospory"],
                    "find": "First group with heterospory",
                    "principle": "Selaginella and Salvinia (pteridophytes) show heterospory, important evolutionary step toward seed habit.",
                    "steps": [
                        {
                            "step": "Check groups",
                            "work": "Bryophytes = homosporous; ferns = usually homosporous; algae = simple. Selaginella & Salvinia = heterosporous.",
                            "result": "Selaginella and Salvinia correct"
                        }
                    ],
                    "answer": "Selaginella and Salvinia",
                    "concept": "Origin of heterospory"
                }
            },
            {
                "problem": "In angiosperms, double fertilization results in:",
                "difficulty": "easy",
                "options": [
                    "Two zygotes",
                    "Zygote and triploid endosperm",
                    "Triploid zygote",
                    "Two endosperms"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Double fertilization"],
                    "find": "Products",
                    "principle": "One male gamete + egg = zygote; another male gamete + polar nuclei = triploid endosperm.",
                    "steps": [
                        {
                            "step": "Explain fusion",
                            "work": "Egg + sperm = zygote; polar nuclei + sperm = endosperm.",
                            "result": "Zygote and triploid endosperm"
                        }
                    ],
                    "answer": "Zygote and triploid endosperm",
                    "concept": "Angiosperm reproduction"
                }
            },
            {
                "problem": "Gametophyte is dominant in:",
                "difficulty": "medium",
                "options": [
                    "Pteridophytes",
                    "Bryophytes",
                    "Angiosperms",
                    "Gymnosperms"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Life cycle dominance"],
                    "find": "Plant group with dominant gametophyte",
                    "principle": "In bryophytes, gametophyte is the independent, dominant plant body.",
                    "steps": [
                        {
                            "step": "Compare groups",
                            "work": "Pteridophytes/gymnosperms/angiosperms → dominant sporophyte. Bryophytes → dominant gametophyte.",
                            "result": "Bryophytes correct"
                        }
                    ],
                    "answer": "Bryophytes",
                    "concept": "Life cycle alternation"
                }
            },
            {
                "problem": "The plant with motile sperms but lacking archegonia is:",
                "difficulty": "hard",
                "options": [
                    "Cycas",
                    "Pinus",
                    "Gnetum",
                    "Wheat"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Gymnosperm reproduction"],
                    "find": "Gymnosperm with motile sperms",
                    "principle": "Cycas has flagellated motile sperms, unlike most gymnosperms. Archegonia absent in angiosperms, not gymnosperms.",
                    "steps": [
                        {
                            "step": "Analyze gymnosperms",
                            "work": "Pinus = non-motile sperms; Gnetum = advanced gymnosperm; Wheat = angiosperm; Cycas = motile sperms.",
                            "result": "Cycas correct"
                        }
                    ],
                    "answer": "Cycas",
                    "concept": "Gymnosperm sperm types"
                }
            },
            {
                "problem": "Sporophylls are present in:",
                "difficulty": "medium",
                "options": [
                    "Algae",
                    "Bryophytes",
                    "Pteridophytes",
                    "All angiosperms"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Reproductive leaves"],
                    "find": "Where sporophylls occur",
                    "principle": "Sporophylls are specialized leaves bearing sporangia, characteristic of pteridophytes.",
                    "steps": [
                        {
                            "step": "Check groups",
                            "work": "Algae = simple thallus; bryophytes = gametophyte dominant; angiosperms = flowers not sporophylls; pteridophytes = sporophylls.",
                            "result": "Pteridophytes correct"
                        }
                    ],
                    "answer": "Pteridophytes",
                    "concept": "Sporophylls in plants"
                }
            },
            {
                "problem": "Red algae are mostly marine because:",
                "difficulty": "hard",
                "options": [
                    "Presence of fucoxanthin",
                    "Presence of phycoerythrin absorbing blue light",
                    "Absence of chlorophyll",
                    "Lack of cellulose cell wall"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Marine adaptation of red algae"],
                    "find": "Reason for marine habitat",
                    "principle": "Phycoerythrin allows red algae to absorb blue-green light, penetrating deep waters, favoring marine life.",
                    "steps": [
                        {
                            "step": "Analyze pigments",
                            "work": "Fucoxanthin → brown algae; chlorophyll present; cellulose wall present. Phycoerythrin enables deep-water photosynthesis.",
                            "result": "Phycoerythrin correct"
                        }
                    ],
                    "answer": "Presence of phycoerythrin absorbing blue light",
                    "concept": "Marine adaptations"
                }
            },
            {
                "problem": "The main plant body in moss is:",
                "difficulty": "easy",
                "options": [
                    "Diploid sporophyte",
                    "Haploid gametophyte",
                    "Triploid endosperm",
                    "Zygote"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Moss life cycle"],
                    "find": "Main plant body",
                    "principle": "In mosses, the green leafy plant is gametophyte, dominant and haploid.",
                    "steps": [
                        {
                            "step": "Compare generations",
                            "work": "Sporophyte small, dependent. Gametophyte leafy, photosynthetic.",
                            "result": "Haploid gametophyte correct"
                        }
                    ],
                    "answer": "Haploid gametophyte",
                    "concept": "Bryophyte dominance"
                }
            },
            {
                "problem": "The largest ovule among gymnosperms is found in:",
                "difficulty": "hard",
                "options": [
                    "Pinus",
                    "Cycas",
                    "Gnetum",
                    "Taxus"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Gymnosperm ovules"],
                    "find": "Largest ovule",
                    "principle": "Cycas ovule can be several centimeters long, the largest in plant kingdom.",
                    "steps": [
                        {
                            "step": "Compare gymnosperms",
                            "work": "Pinus small ovules; Taxus/Gnetum moderate; Cycas largest.",
                            "result": "Cycas correct"
                        }
                    ],
                    "answer": "Cycas",
                    "concept": "Gymnosperm ovules"
                }
            },
            {
                "problem": "Sargassum belongs to:",
                "difficulty": "medium",
                "options": [
                    "Chlorophyceae",
                    "Phaeophyceae",
                    "Rhodophyceae",
                    "Bryophyta"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Algal classification"],
                    "find": "Class of Sargassum",
                    "principle": "Sargassum is a brown alga, class Phaeophyceae, with fucoxanthin pigment.",
                    "steps": [
                        {
                            "step": "Check pigments",
                            "work": "Green algae = Chlorophyceae; red = Rhodophyceae; Sargassum has brown pigment.",
                            "result": "Phaeophyceae correct"
                        }
                    ],
                    "answer": "Phaeophyceae",
                    "concept": "Algal classification"
                }
            },
            {
                "problem": "The sporophyte of moss is attached to gametophyte by:",
                "difficulty": "easy",
                "options": [
                    "Rhizoid",
                    "Seta",
                    "Foot",
                    "Capsule"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Moss sporophyte"],
                    "find": "Attachment structure",
                    "principle": "In moss sporophyte, foot attaches to gametophyte for absorption.",
                    "steps": [
                        {
                            "step": "Analyze parts",
                            "work": "Foot attaches; seta = stalk; capsule = spore case; rhizoid anchors gametophyte.",
                            "result": "Foot correct"
                        }
                    ],
                    "answer": "Foot",
                    "concept": "Bryophyte sporophyte"
                }
            },
            {
                "problem": "Male gametes in angiosperms reach the egg by:",
                "difficulty": "medium",
                "options": [
                    "Cilia",
                    "Water currents",
                    "Pollen tube",
                    "Flagella"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Fertilization in angiosperms"],
                    "find": "Gamete transfer method",
                    "principle": "Male gametes are non-motile; pollen tube delivers them to egg.",
                    "steps": [
                        {
                            "step": "Check transfer methods",
                            "work": "Cilia/flagella = lower plants; water currents = algae; angiosperms = pollen tube.",
                            "result": "Pollen tube correct"
                        }
                    ],
                    "answer": "Pollen tube",
                    "concept": "Angiosperm fertilization"
                }
            },
            {
                "problem": "Algae contribute to global carbon fixation because of:",
                "difficulty": "easy",
                "options": [
                    "Nitrogen fixation",
                    "Photosynthesis",
                    "Saprophytic nutrition",
                    "Parasitism"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Ecological role of algae"],
                    "find": "Reason for carbon fixation",
                    "principle": "Algae photosynthesize and contribute nearly 50% of global carbon fixation.",
                    "steps": [
                        {
                            "step": "Analyze options",
                            "work": "Nitrogen fixation = cyanobacteria; saprophytic = fungi; algae = photosynthesis.",
                            "result": "Photosynthesis correct"
                        }
                    ],
                    "answer": "Photosynthesis",
                    "concept": "Ecological role of algae"
                }
            },
            {
                "problem": "Which of the following is homosporous?",
                "difficulty": "medium",
                "options": [
                    "Selaginella",
                    "Salvinia",
                    "Equisetum",
                    "Cycas"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Sporic condition"],
                    "find": "Plant with homospory",
                    "principle": "Equisetum (horsetail) produces only one type of spore → homosporous.",
                    "steps": [
                        {
                            "step": "Compare groups",
                            "work": "Selaginella & Salvinia = heterosporous; Cycas = heterosporous seed plant; Equisetum = homosporous.",
                            "result": "Equisetum correct"
                        }
                    ],
                    "answer": "Equisetum",
                    "concept": "Homosporous pteridophytes"
                }
            },
            {
                "problem": "Archegonia are absent in:",
                "difficulty": "hard",
                "options": [
                    "Pteridophytes",
                    "Bryophytes",
                    "Gymnosperms",
                    "Angiosperms"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Plant reproduction"],
                    "find": "Group lacking archegonia",
                    "principle": "Archegonia are absent in angiosperms; egg lies inside ovule.",
                    "steps": [
                        {
                            "step": "Compare groups",
                            "work": "Bryophytes, pteridophytes, gymnosperms have archegonia. Angiosperms lack them.",
                            "result": "Angiosperms correct"
                        }
                    ],
                    "answer": "Angiosperms",
                    "concept": "Evolution of sex organs"
                }
            },
            {
                "problem": "The haploid structure in gymnosperms is:",
                "difficulty": "medium",
                "options": [
                    "Embryo",
                    "Endosperm",
                    "Zygote",
                    "Sporophyte"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Gymnosperm structures"],
                    "find": "Which is haploid",
                    "principle": "In gymnosperms, endosperm is female gametophyte tissue, haploid.",
                    "steps": [
                        {
                            "step": "Check ploidy",
                            "work": "Embryo = diploid; zygote = diploid; sporophyte = diploid; endosperm = haploid.",
                            "result": "Endosperm correct"
                        }
                    ],
                    "answer": "Endosperm",
                    "concept": "Gymnosperm life cycle"
                }
            }
        ]
    },

    "biotechnology_principles_and_processes": {
        "title": "Biotechnology: Principles and Processes",
        "weightage": "4-6%",
        "introduction": "This chapter covers the fundamental principles and techniques of biotechnology, including genetic engineering, recombinant DNA technology, and various processes used to manipulate biological systems for technological applications. Understanding these concepts is crucial for modern biological research and applications in medicine, agriculture, and industry. NEET questions often focus on specific techniques, enzymes, and processes involved in genetic engineering.",


        "topics": [
            {
                "name": "Principles of Biotechnology",
                "description": "The core concepts and historical development of biotechnology, including genetic engineering and the maintenance of sterile conditions.",
                "subtopics": [
                    {
                        "name": "Definition and Scope",
                        "explanation": "Biotechnology integrates natural science and organisms, cells, parts thereof, and molecular analogues for products and services. Modern biotechnology is based on two core techniques: genetic engineering and maintenance of sterile conditions."
                    },
                    {
                        "name": "Genetic Engineering",
                        "explanation": "The technique of altering the chemistry of genetic material (DNA and RNA) to introduce it into host organisms and change the phenotype of the host organism."
                    },
                    {
                        "name": "Sterilization Techniques",
                        "explanation": "Maintenance of sterile (microbial contamination-free) environment in chemical engineering processes to enable growth of only the desired microbe/eukaryotic cell in large quantities."
                    }
                ]
            },
            {
                "name": "Tools of Recombinant DNA Technology",
                "description": "The essential biological tools and enzymes used in genetic engineering and recombinant DNA technology.",
                "subtopics": [
                    {
                        "name": "Restriction Enzymes",
                        "explanation": "Molecular scissors that cut DNA at specific recognition sequences. Types: Exonucleases (cut ends), Endonucleases (cut within DNA), Restriction Endonucleases (specific sequences). Named using three-letter code (e.g., EcoRI from E. coli)."
                    },
                    {
                        "name": "Ligases",
                        "explanation": "Enzymes that join DNA fragments by forming phosphodiester bonds. DNA ligase is used to seal gaps in DNA strands during recombination."
                    },
                    {
                        "name": "Vectors",
                        "explanation": "DNA molecules that carry foreign DNA into host cells. Features: Origin of replication, selectable marker, cloning sites. Types: Plasmids, Bacteriophages, Cosmids, Artificial chromosomes."
                    },
                    {
                        "name": "Host Organisms",
                        "explanation": "Cells in which recombinant DNA is introduced. Common hosts: E. coli (prokaryotic), Yeast (eukaryotic), Animal and plant cells."
                    }
                ]
            },
            {
                "name": "Processes of Recombinant DNA Technology",
                "description": "The step-by-step procedures involved in creating and using recombinant DNA molecules.",
                "subtopics": [
                    {
                        "name": "Isolation of Genetic Material",
                        "explanation": "DNA is isolated from cells by breaking open the cell membrane and nuclear membrane, followed by removal of proteins, RNA, and other macromolecules."
                    },
                    {
                        "name": "Cutting of DNA at Specific Locations",
                        "explanation": "Restriction enzymes cut DNA at specific palindromic sequences, producing sticky ends (overhangs) or blunt ends."
                    },
                    {
                        "name": "Amplification of Gene of Interest using PCR",
                        "explanation": "Polymerase Chain Reaction: In vitro method to amplify specific DNA sequences using primers, Taq polymerase, and thermal cycling (denaturation, annealing, extension)."
                    },
                    {
                        "name": "Insertion of Recombinant DNA into Host",
                        "explanation": "Methods: Transformation (DNA uptake by bacteria), Microinjection (direct injection into nucleus), Biolistics (gene gun), Disarmed pathogen vectors."
                    },
                    {
                        "name": "Obtaining the Foreign Gene Product",
                        "explanation": "Culturing the transformed host cells in bioreactors to express the desired protein product on a large scale."
                    },
                    {
                        "name": "Downstream Processing",
                        "explanation": "Separation and purification of the desired product from the culture medium, followed by formulation with suitable preservatives."
                    }
                ]
            },
            {
                "name": "Applications and Ethical Issues",
                "description": "Practical applications of biotechnology and the associated social and ethical considerations.",
                "subtopics": [
                    {
                        "name": "Therapeutic Applications",
                        "explanation": "Production of recombinant pharmaceuticals: Insulin, Human growth hormone, Vaccines, Gene therapy for genetic disorders."
                    },
                    {
                        "name": "Diagnostic Applications",
                        "explanation": "DNA probes for disease diagnosis, PCR for pathogen detection, ELISA tests for various diseases."
                    },
                    {
                        "name": "GM Crops and Animals",
                        "explanation": "Genetically modified organisms with desired traits: Bt cotton, Golden rice, Flavr Savr tomato, Transgenic animals for research."
                    },
                    {
                        "name": "Ethical Issues",
                        "explanation": "Concerns about genetic modification, patenting of life forms, biosafety, and potential ecological impacts of GMOs."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Enzymes in Genetic Engineering": [
                {
                    "name": "Restriction Endonucleases",
                    "description": "Enzymes that recognize specific DNA sequences and cut DNA, creating fragments with sticky or blunt ends"
                },
                {
                    "name": "DNA Ligase",
                    "description": "Enzyme that joins DNA fragments by forming phosphodiester bonds, essential for creating recombinant DNA"
                },
                {
                    "name": "Polymerases",
                    "description": "Enzymes that synthesize DNA molecules, used in PCR and various molecular biology techniques"
                }
            ],
            "Vectors and Cloning": [
                {
                    "name": "Plasmid Features",
                    "description": "Origin of replication, multiple cloning site, selectable markers, and reporter genes in cloning vectors"
                },
                {
                    "name": "Vector Types",
                    "description": "Different vectors for different purposes: plasmids for small inserts, cosmids for larger fragments, BACs/YACs for very large fragments"
                }
            ],
            "Techniques and Processes": [
                {
                    "name": "PCR Principles",
                    "description": "Exponential amplification of specific DNA sequences using thermal cycling and specific primers"
                },
                {
                    "name": "Transformation Methods",
                    "description": "Various techniques to introduce foreign DNA into host cells: chemical transformation, electroporation, microinjection, biolistics"
                }
            ]
        },

        "problems": [
            {
                "problem": "The enzymes used to cut DNA at specific sites are called:",
                "difficulty": "easy",
                "options": [
                    "Ligases",
                    "Restriction enzymes",
                    "Polymerases",
                    "Nucleases"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Genetic engineering tools"],
                    "find": "Enzymes for specific DNA cutting",
                    "principle": "Restriction enzymes (restriction endonucleases) are molecular scissors that recognize specific DNA sequences and cut DNA at those sites, producing fragments with sticky or blunt ends.",
                    "steps": [
                        {
                            "step": "Analyze enzyme functions",
                            "work": "Ligases join DNA; polymerases synthesize DNA; nucleases cut DNA non-specifically. Only restriction enzymes cut at specific sequences.",
                            "result": "Restriction enzymes is correct"
                        }
                    ],
                    "answer": "Restriction enzymes",
                    "concept": "Restriction enzymes"
                }
            },
            {
                "problem": "Which of the following is not a component of PCR?",
                "difficulty": "medium",
                "options": [
                    "Primers",
                    "DNA ligase",
                    "Taq polymerase",
                    "Deoxynucleotides"
                ],
                "correct": 1,
                "solution": {
                    "given": ["PCR components"],
                    "find": "Non-component of PCR",
                    "principle": "PCR requires primers (to define amplification region), Taq polymerase (thermostable DNA polymerase), and dNTPs (deoxynucleotides) as building blocks. DNA ligase is used in cloning, not PCR.",
                    "steps": [
                        {
                            "step": "Analyze PCR requirements",
                            "work": "Primers, Taq polymerase, and deoxynucleotides are essential PCR components. DNA ligase is used for joining DNA fragments in recombinant technology.",
                            "result": "DNA ligase is correct answer"
                        }
                    ],
                    "answer": "DNA ligase",
                    "concept": "PCR components"
                }
            },
            {
                "problem": "The process of introducing foreign DNA into bacterial cells is called:",
                "difficulty": "easy",
                "options": [
                    "Transduction",
                    "Transfection",
                    "Transformation",
                    "Conjugation"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Genetic engineering processes"],
                    "find": "Process of DNA uptake by bacteria",
                    "principle": "Transformation is the process by which bacterial cells take up foreign DNA from their environment. This is a key step in recombinant DNA technology.",
                    "steps": [
                        {
                            "step": "Analyze genetic processes",
                            "work": "Transduction is virus-mediated DNA transfer; transfection is for eukaryotic cells; conjugation is bacterial mating. Only transformation describes DNA uptake by bacteria.",
                            "result": "Transformation is correct"
                        }
                    ],
                    "answer": "Transformation",
                    "concept": "Transformation"
                }
            },
            {
                "problem": "Which of the following is a selectable marker in plasmid vectors?",
                "difficulty": "medium",
                "options": [
                    "Origin of replication",
                    "Multiple cloning site",
                    "Ampicillin resistance gene",
                    "Lac Z gene"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Vector features"],
                    "find": "Selectable marker",
                    "principle": "Selectable markers (e.g., antibiotic resistance genes like ampicillin resistance) allow selection of transformed cells that have taken up the plasmid vector.",
                    "steps": [
                        {
                            "step": "Analyze vector components",
                            "work": "Origin of replication for copying; multiple cloning site for insertion; Lac Z for blue-white screening. Ampicillin resistance is a selectable marker.",
                            "result": "Ampicillin resistance gene is correct"
                        }
                    ],
                    "answer": "Ampicillin resistance gene",
                    "concept": "Vector components"
                }
            },
            {
                "problem": "The enzyme used to join DNA fragments is:",
                "difficulty": "easy",
                "options": [
                    "Restriction enzyme",
                    "DNA polymerase",
                    "DNA ligase",
                    "Reverse transcriptase"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Genetic engineering enzymes"],
                    "find": "DNA joining enzyme",
                    "principle": "DNA ligase catalyzes the formation of phosphodiester bonds between DNA fragments, joining them together to create recombinant DNA molecules.",
                    "steps": [
                        {
                            "step": "Analyze enzyme functions",
                            "work": "Restriction enzymes cut DNA; DNA polymerase synthesizes DNA; reverse transcriptase makes DNA from RNA. Only DNA ligase joins DNA fragments.",
                            "result": "DNA ligase is correct"
                        }
                    ],
                    "answer": "DNA ligase",
                    "concept": "DNA ligase"
                }
            },
            {
                "problem": "The technique used to separate DNA fragments based on size is:",
                "difficulty": "medium",
                "options": [
                    "PCR",
                    "Electrophoresis",
                    "Centrifugation",
                    "Chromatography"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Molecular biology techniques"],
                    "find": "DNA separation technique",
                    "principle": "Gel electrophoresis separates DNA fragments based on size by applying an electric field to move negatively charged DNA through a gel matrix. Smaller fragments move faster.",
                    "steps": [
                        {
                            "step": "Analyze separation methods",
                            "work": "PCR amplifies DNA; centrifugation separates by density; chromatography separates by chemical properties. Only electrophoresis separates DNA by size.",
                            "result": "Electrophoresis is correct"
                        }
                    ],
                    "answer": "Electrophoresis",
                    "concept": "Electrophoresis"
                }
            },
            {
                "problem": "Which of the following is used as a vector in genetic engineering?",
                "difficulty": "easy",
                "options": [
                    "Plasmid",
                    "Ribosome",
                    "Mitochondria",
                    "Lysosome"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Genetic engineering tools"],
                    "find": "Genetic engineering vector",
                    "principle": "Plasmids are small, circular DNA molecules that are commonly used as vectors to carry foreign DNA into host cells in genetic engineering.",
                    "steps": [
                        {
                            "step": "Analyze cellular components",
                            "work": "Ribosomes are for protein synthesis; mitochondria are organelles; lysosomes are for digestion. Only plasmids are used as vectors.",
                            "result": "Plasmid is correct"
                        }
                    ],
                    "answer": "Plasmid",
                    "concept": "Vectors"
                }
            },
            {
                "problem": "The process of making multiple copies of a specific DNA sequence is called:",
                "difficulty": "easy",
                "options": [
                    "Transcription",
                    "Translation",
                    "Replication",
                    "Amplification"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Molecular biology processes"],
                    "find": "DNA copying process",
                    "principle": "Amplification refers to making multiple copies of a specific DNA sequence, typically through techniques like PCR (Polymerase Chain Reaction).",
                    "steps": [
                        {
                            "step": "Analyze biological processes",
                            "work": "Transcription makes RNA from DNA; translation makes proteins from RNA; replication copies entire DNA. Amplification makes multiple copies of specific sequences.",
                            "result": "Amplification is correct"
                        }
                    ],
                    "answer": "Amplification",
                    "concept": "DNA amplification"
                }
            },
            {
                "problem": "Which enzyme is used to synthesize DNA from RNA template?",
                "difficulty": "medium",
                "options": [
                    "DNA polymerase",
                    "RNA polymerase",
                    "Reverse transcriptase",
                    "DNA ligase"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Enzyme functions"],
                    "find": "RNA to DNA enzyme",
                    "principle": "Reverse transcriptase synthesizes complementary DNA (cDNA) from an RNA template, which is crucial for studying eukaryotic genes and creating cDNA libraries.",
                    "steps": [
                        {
                            "step": "Analyze enzyme functions",
                            "work": "DNA polymerase makes DNA from DNA; RNA polymerase makes RNA from DNA; DNA ligase joins DNA. Only reverse transcriptase makes DNA from RNA.",
                            "result": "Reverse transcriptase is correct"
                        }
                    ],
                    "answer": "Reverse transcriptase",
                    "concept": "Reverse transcriptase"
                }
            },
            {
                "problem": "The first step in recombinant DNA technology is:",
                "difficulty": "medium",
                "options": [
                    "Cutting of DNA",
                    "Isolation of DNA",
                    "Insertion into vector",
                    "Transformation"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Recombinant DNA process"],
                    "find": "First step in rDNA technology",
                    "principle": "The first step in recombinant DNA technology is isolation of genetic material (DNA) from the organism containing the gene of interest.",
                    "steps": [
                        {
                            "step": "Analyze process sequence",
                            "work": "Isolation of DNA must occur before cutting, insertion, or transformation. You need DNA before you can work with it.",
                            "result": "Isolation of DNA is correct"
                        }
                    ],
                    "answer": "Isolation of DNA",
                    "concept": "rDNA technology steps"
                }
            },
            {
                "problem": "The recognition sequence for restriction enzymes is typically:",
                "difficulty": "medium",
                "options": [
                    "4-8 base pairs long and palindromic",
                    "10-12 base pairs long and random",
                    "2-3 base pairs long and repetitive",
                    "Variable length and non-specific"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Restriction enzyme characteristics"],
                    "find": "Nature of recognition sequences",
                    "principle": "Restriction enzymes recognize specific palindromic sequences (same forward and reverse complement) that are typically 4-8 base pairs in length, such as GAATTC for EcoRI.",
                    "steps": [
                        {
                            "step": "Analyze restriction site features",
                            "work": "Recognition sequences are short (4-8 bp), specific, and palindromic (read same 5' to 3' on both strands). They are not long, random, repetitive, or non-specific.",
                            "result": "4-8 base pairs long and palindromic is correct"
                        }
                    ],
                    "answer": "4-8 base pairs long and palindromic",
                    "concept": "Restriction enzyme recognition"
                }
            },
            {
                "problem": "Which of the following is used for blue-white screening in recombinant DNA technology?",
                "difficulty": "hard",
                "options": [
                    "Ampicillin resistance gene",
                    "Lac Z gene",
                    "Origin of replication",
                    "Multiple cloning site"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Selection methods in cloning"],
                    "find": "Component for blue-white screening",
                    "principle": "The Lac Z gene encodes β-galactosidase enzyme. When foreign DNA is inserted into the multiple cloning site within Lac Z, it disrupts the gene, producing white colonies instead of blue when grown on X-gal medium.",
                    "steps": [
                        {
                            "step": "Analyze screening methods",
                            "work": "Ampicillin resistance is for selection; origin for replication; MCS for insertion. Lac Z gene disruption causes color change in blue-white screening.",
                            "result": "Lac Z gene is correct"
                        }
                    ],
                    "answer": "Lac Z gene",
                    "concept": "Blue-white screening"
                }
            },
            {
                "problem": "The enzyme used in PCR that is thermostable is:",
                "difficulty": "easy",
                "options": [
                    "DNA polymerase I",
                    "Taq polymerase",
                    "RNA polymerase",
                    "DNA ligase"
                ],
                "correct": 1,
                "solution": {
                    "given": ["PCR components"],
                    "find": "Thermostable PCR enzyme",
                    "principle": "Taq polymerase, isolated from Thermus aquaticus, is heat-stable and can withstand the high temperatures (95°C) used in PCR denaturation steps, unlike most other enzymes that would denature.",
                    "steps": [
                        {
                            "step": "Analyze enzyme thermostability",
                            "work": "DNA polymerase I is not heat-stable; RNA polymerase and DNA ligase are not used in PCR. Only Taq polymerase is thermostable for PCR.",
                            "result": "Taq polymerase is correct"
                        }
                    ],
                    "answer": "Taq polymerase",
                    "concept": "PCR enzymes"
                }
            },
            {
                "problem": "Which technique uses a gene gun to introduce DNA into cells?",
                "difficulty": "medium",
                "options": [
                    "Transformation",
                    "Transfection",
                    "Biolistics",
                    "Electroporation"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Gene transfer methods"],
                    "find": "Gene gun technique",
                    "principle": "Biolistics (biological ballistics) uses a gene gun to shoot microscopic particles coated with DNA into cells or tissues, commonly used for plant genetic engineering.",
                    "steps": [
                        {
                            "step": "Analyze DNA delivery methods",
                            "work": "Transformation is for bacteria; transfection for eukaryotic cells; electroporation uses electric pulses. Biolistics specifically uses a gene gun.",
                            "result": "Biolistics is correct"
                        }
                    ],
                    "answer": "Biolistics",
                    "concept": "Gene transfer techniques"
                }
            },
            {
                "problem": "The process of making cDNA from mRNA is called:",
                "difficulty": "medium",
                "options": [
                    "Transcription",
                    "Reverse transcription",
                    "Translation",
                    "Replication"
                ],
                "correct": 1,
                "solution": {
                    "given": ["cDNA synthesis"],
                    "find": "Process for cDNA formation",
                    "principle": "Reverse transcription is the process where reverse transcriptase enzyme synthesizes complementary DNA (cDNA) from an mRNA template, used for creating cDNA libraries and studying eukaryotic genes.",
                    "steps": [
                        {
                            "step": "Analyze nucleic acid processes",
                            "work": "Transcription makes RNA from DNA; translation makes protein; replication copies DNA. Only reverse transcription makes DNA from RNA.",
                            "result": "Reverse transcription is correct"
                        }
                    ],
                    "answer": "Reverse transcription",
                    "concept": "cDNA synthesis"
                }
            },
            {
                "problem": "Which of the following is not a required component for PCR?",
                "difficulty": "medium",
                "options": [
                    "DNA template",
                    "Primers",
                    "Restriction enzymes",
                    "dNTPs"
                ],
                "correct": 2,
                "solution": {
                    "given": ["PCR requirements"],
                    "find": "Non-essential PCR component",
                    "principle": "PCR requires DNA template, primers (to define amplification region), Taq polymerase, and dNTPs (deoxyribonucleotide triphosphates). Restriction enzymes are used for cutting DNA, not amplification.",
                    "steps": [
                        {
                            "step": "Analyze PCR components",
                            "work": "DNA template, primers, and dNTPs are essential for PCR. Restriction enzymes are used in cloning, not PCR amplification.",
                            "result": "Restriction enzymes is correct answer"
                        }
                    ],
                    "answer": "Restriction enzymes",
                    "concept": "PCR components"
                }
            },
            {
                "problem": "The purpose of selectable markers in plasmid vectors is to:",
                "difficulty": "easy",
                "options": [
                    "Allow DNA replication",
                    "Enable DNA cutting",
                    "Identify transformed cells",
                    "Join DNA fragments"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Vector design"],
                    "find": "Function of selectable markers",
                    "principle": "Selectable markers (usually antibiotic resistance genes) allow identification and selection of cells that have successfully taken up the recombinant plasmid by enabling their growth on selective media.",
                    "steps": [
                        {
                            "step": "Analyze vector components",
                            "work": "Origin allows replication; restriction sites allow cutting; ligase joins fragments. Selectable markers identify transformed cells.",
                            "result": "Identify transformed cells is correct"
                        }
                    ],
                    "answer": "Identify transformed cells",
                    "concept": "Selectable markers"
                }
            },
            {
                "problem": "Which enzyme would you use to create blunt ends from sticky ends?",
                "difficulty": "hard",
                "options": [
                    "DNA ligase",
                    "DNA polymerase",
                    "S1 nuclease",
                    "Reverse transcriptase"
                ],
                "correct": 2,
                "solution": {
                    "given": ["DNA modification enzymes"],
                    "find": "Enzyme for blunt end creation",
                    "principle": "S1 nuclease specifically digests single-stranded DNA overhangs, converting sticky ends (with overhangs) to blunt ends by removing the unpaired nucleotides.",
                    "steps": [
                        {
                            "step": "Analyze enzyme functions",
                            "work": "DNA ligase joins ends; DNA polymerase fills gaps; reverse transcriptase makes DNA from RNA. Only S1 nuclease converts sticky to blunt ends.",
                            "result": "S1 nuclease is correct"
                        }
                    ],
                    "answer": "S1 nuclease",
                    "concept": "DNA end modification"
                }
            },
            {
                "problem": "The process of introducing DNA into animal cells is called:",
                "difficulty": "medium",
                "options": [
                    "Transformation",
                    "Transfection",
                    "Conjugation",
                    "Transduction"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Gene transfer terminology"],
                    "find": "DNA introduction into animal cells",
                    "principle": "Transfection is the term used for introducing foreign DNA into eukaryotic cells (including animal cells), while transformation is used for bacteria, and transduction/conjugation are bacterial genetic exchange methods.",
                    "steps": [
                        {
                            "step": "Analyze genetic transfer terms",
                            "work": "Transformation is for bacteria; conjugation is bacterial mating; transduction is virus-mediated. Transfection is for eukaryotic cells.",
                            "result": "Transfection is correct"
                        }
                    ],
                    "answer": "Transfection",
                    "concept": "Genetic transfer terminology"
                }
            },
            {
                "problem": "Which of the following vectors can carry the largest DNA inserts?",
                "difficulty": "hard",
                "options": [
                    "Plasmids",
                    "Bacteriophages",
                    "Cosmids",
                    "YACs (Yeast Artificial Chromosomes)"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Vector capacity"],
                    "find": "Vector with largest capacity",
                    "principle": "YACs (Yeast Artificial Chromosomes) can carry very large DNA inserts (100-1000 kb), much larger than plasmids (1-10 kb), bacteriophages (10-20 kb), or cosmids (35-45 kb).",
                    "steps": [
                        {
                            "step": "Analyze vector capacities",
                            "work": "Plasmids: smallest capacity; bacteriophages and cosmids: medium capacity; YACs: largest capacity for big genomic fragments.",
                            "result": "YACs (Yeast Artificial Chromosomes) is correct"
                        }
                    ],
                    "answer": "YACs (Yeast Artificial Chromosomes)",
                    "concept": "Vector capacities"
                }
            },
            {
                "problem": "The temperature used for the annealing step in PCR is typically:",
                "difficulty": "medium",
                "options": [
                    "94-96°C",
                    "50-65°C",
                    "72°C",
                    "37°C"
                ],
                "correct": 1,
                "solution": {
                    "given": ["PCR conditions"],
                    "find": "Annealing temperature range",
                    "principle": "The annealing step in PCR typically occurs at 50-65°C, which allows primers to bind specifically to their complementary sequences on the template DNA.",
                    "steps": [
                        {
                            "step": "Analyze PCR temperature steps",
                            "work": "94-96°C is denaturation; 72°C is extension; 37°C is too low. 50-65°C is optimal for primer annealing.",
                            "result": "50-65°C is correct"
                        }
                    ],
                    "answer": "50-65°C",
                    "concept": "PCR conditions"
                }
            },
            {
                "problem": "Which restriction enzyme produces sticky ends?",
                "difficulty": "medium",
                "options": [
                    "EcoRI",
                    "SmaI",
                    "AluI",
                    "HaeIII"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Restriction enzyme types"],
                    "find": "Enzyme producing sticky ends",
                    "principle": "EcoRI cuts at G^AATTC, producing 5' overhangs (sticky ends). SmaI (CCC^GGG), AluI (AG^CT), and HaeIII (GG^CC) all produce blunt ends.",
                    "steps": [
                        {
                            "step": "Analyze restriction sites",
                            "work": "SmaI, AluI, and HaeIII produce blunt ends. Only EcoRI produces sticky ends with 5' overhangs.",
                            "result": "EcoRI is correct"
                        }
                    ],
                    "answer": "EcoRI",
                    "concept": "Restriction enzyme types"
                }
            },
            {
                "problem": "The process of determining the order of nucleotides in DNA is called:",
                "difficulty": "easy",
                "options": [
                    "PCR",
                    "DNA sequencing",
                    "DNA fingerprinting",
                    "Gene cloning"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Molecular biology techniques"],
                    "find": "Nucleotide order determination",
                    "principle": "DNA sequencing is the process of determining the precise order of nucleotides (A, T, C, G) within a DNA molecule, using methods like Sanger sequencing or next-generation sequencing.",
                    "steps": [
                        {
                            "step": "Analyze technique purposes",
                            "work": "PCR amplifies DNA; DNA fingerprinting identifies individuals; gene cloning makes copies. Only sequencing determines nucleotide order.",
                            "result": "DNA sequencing is correct"
                        }
                    ],
                    "answer": "DNA sequencing",
                    "concept": "DNA sequencing"
                }
            },
            {
                "problem": "Which of the following is used to visualize DNA in gel electrophoresis?",
                "difficulty": "easy",
                "options": [
                    "Ethidium bromide",
                    "X-gal",
                    "IPTG",
                    "Ampicillin"
                ],
                "correct": 0,
                "solution": {
                    "given": ["DNA visualization methods"],
                    "find": "DNA staining dye",
                    "principle": "Ethidium bromide intercalates between DNA bases and fluoresces under UV light, allowing visualization of DNA bands in agarose gels after electrophoresis.",
                    "steps": [
                        {
                            "step": "Analyze biochemical reagents",
                            "work": "X-gal is for blue-white screening; IPTG induces Lac operon; ampicillin is antibiotic. Only ethidium bromide stains DNA for visualization.",
                            "result": "Ethidium bromide is correct"
                        }
                    ],
                    "answer": "Ethidium bromide",
                    "concept": "DNA visualization"
                }
            },
            {
                "problem": "The enzyme used to create DNA from RNA in retroviruses is:",
                "difficulty": "medium",
                "options": [
                    "DNA-dependent DNA polymerase",
                    "RNA polymerase",
                    "Reverse transcriptase",
                    "DNA ligase"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Viral enzymes"],
                    "find": "Retroviral RNA to DNA enzyme",
                    "principle": "Reverse transcriptase is the enzyme used by retroviruses (like HIV) to convert their RNA genome into DNA that can integrate into the host chromosome.",
                    "steps": [
                        {
                            "step": "Analyze enzyme functions",
                            "work": "DNA-dependent DNA polymerase copies DNA; RNA polymerase makes RNA; DNA ligase joins DNA. Only reverse transcriptase makes DNA from RNA.",
                            "result": "Reverse transcriptase is correct"
                        }
                    ],
                    "answer": "Reverse transcriptase",
                    "concept": "Viral enzymes"
                }
            },
            {
                "problem": "Which technique separates proteins based on size and charge?",
                "difficulty": "medium",
                "options": [
                    "PCR",
                    "Southern blotting",
                    "SDS-PAGE",
                    "DNA sequencing"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Protein separation techniques"],
                    "find": "Protein separation method",
                    "principle": "SDS-PAGE (Sodium Dodecyl Sulfate Polyacrylamide Gel Electrophoresis) separates proteins based on their molecular weight (size) after denaturation with SDS, which gives them uniform charge.",
                    "steps": [
                        {
                            "step": "Analyze separation techniques",
                            "work": "PCR amplifies DNA; Southern blotting detects DNA; DNA sequences nucleotides. Only SDS-PAGE separates proteins by size.",
                            "result": "SDS-PAGE is correct"
                        }
                    ],
                    "answer": "SDS-PAGE",
                    "concept": "Protein separation"
                }
            },
            {
                "problem": "The process of transferring DNA from gel to membrane for hybridization is called:",
                "difficulty": "medium",
                "options": [
                    "PCR",
                    "Electrophoresis",
                    "Blotting",
                    "Sequencing"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Molecular biology techniques"],
                    "find": "DNA transfer process",
                    "principle": "Blotting techniques (Southern for DNA, Northern for RNA, Western for proteins) involve transferring separated molecules from a gel to a membrane for hybridization with specific probes.",
                    "steps": [
                        {
                            "step": "Analyze technique purposes",
                            "work": "PCR amplifies; electrophoresis separates; sequencing determines order. Only blotting transfers to membrane for detection.",
                            "result": "Blotting is correct"
                        }
                    ],
                    "answer": "Blotting",
                    "concept": "Blotting techniques"
                }
            },
            {
                "problem": "Which of the following is used to induce expression of genes under Lac promoter?",
                "difficulty": "hard",
                "options": [
                    "Ampicillin",
                    "X-gal",
                    "IPTG",
                    "Ethidium bromide"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Gene expression regulation"],
                    "find": "Lac operon inducer",
                    "principle": "IPTG (Isopropyl β-D-1-thiogalactopyranoside) is a non-metabolizable analog of lactose that induces the Lac operon by binding to and inactivating the repressor protein.",
                    "steps": [
                        {
                            "step": "Analyze biochemical inducers",
                            "work": "Ampicillin is antibiotic; X-gal is substrate for blue-white screening; ethidium bromide stains DNA. Only IPTG induces Lac promoter.",
                            "result": "IPTG is correct"
                        }
                    ],
                    "answer": "IPTG",
                    "concept": "Gene induction"
                }
            },
            {
                "problem": "The technique used to amplify specific RNA sequences is:",
                "difficulty": "hard",
                "options": [
                    "PCR",
                    "RT-PCR",
                    "Southern blotting",
                    "Western blotting"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Nucleic acid amplification"],
                    "find": "RNA amplification technique",
                    "principle": "RT-PCR (Reverse Transcription PCR) first converts RNA to cDNA using reverse transcriptase, then amplifies the cDNA using standard PCR, allowing amplification and detection of specific RNA sequences.",
                    "steps": [
                        {
                            "step": "Analyze amplification methods",
                            "work": "PCR works only on DNA; Southern detects DNA; Western detects proteins. Only RT-PCR can amplify RNA sequences.",
                            "result": "RT-PCR is correct"
                        }
                    ],
                    "answer": "RT-PCR",
                    "concept": "RNA amplification"
                }
            },
            {
                "problem": "Which enzyme is used to make radioactive DNA probes for hybridization?",
                "difficulty": "hard",
                "options": [
                    "DNA ligase",
                    "Restriction enzyme",
                    "DNA polymerase",
                    "Reverse transcriptase"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Probe preparation"],
                    "find": "Enzyme for probe labeling",
                    "principle": "DNA polymerase is used in nick translation or random priming methods to incorporate radioactive or fluorescent nucleotides into DNA, creating labeled probes for hybridization experiments.",
                    "steps": [
                        {
                            "step": "Analyze enzyme functions in labeling",
                            "work": "DNA ligase joins fragments; restriction enzymes cut DNA; reverse transcriptase makes cDNA. DNA polymerase incorporates labeled nucleotides for probes.",
                            "result": "DNA polymerase is correct"
                        }
                    ],
                    "answer": "DNA polymerase",
                    "concept": "Probe labeling"
                }
            },
            {
                "problem": "The enzyme used to remove RNA primers during DNA replication is:",
                "difficulty": "medium",
                "options": [
                    "DNA polymerase I",
                    "DNA polymerase III",
                    "DNA ligase",
                    "RNA polymerase"
                ],
                "correct": 0,
                "solution": {
                    "given": ["DNA replication enzymes"],
                    "find": "Enzyme for RNA primer removal",
                    "principle": "DNA polymerase I has 5'→3' exonuclease activity that removes RNA primers and replaces them with DNA nucleotides during DNA replication in prokaryotes.",
                    "steps": [
                        {
                            "step": "Analyze replication enzymes",
                            "work": "DNA polymerase III is main replicative enzyme; DNA ligase seals nicks; RNA polymerase makes RNA. Only DNA polymerase I removes RNA primers.",
                            "result": "DNA polymerase I is correct"
                        }
                    ],
                    "answer": "DNA polymerase I",
                    "concept": "DNA replication"
                }
            },
            {
                "problem": "Which technique uses hybridization to detect specific DNA sequences on a membrane?",
                "difficulty": "medium",
                "options": [
                    "PCR",
                    "Southern blotting",
                    "Gel electrophoresis",
                    "DNA sequencing"
                ],
                "correct": 1,
                "solution": {
                    "given": ["DNA detection methods"],
                    "find": "Hybridization-based detection",
                    "principle": "Southern blotting involves transferring DNA from gel to membrane, then hybridizing with labeled probes to detect specific DNA sequences through complementary base pairing.",
                    "steps": [
                        {
                            "step": "Analyze detection techniques",
                            "work": "PCR amplifies DNA; gel electrophoresis separates DNA; sequencing determines order. Only Southern blotting uses hybridization for specific detection.",
                            "result": "Southern blotting is correct"
                        }
                    ],
                    "answer": "Southern blotting",
                    "concept": "Nucleic acid hybridization"
                }
            },
            {
                "problem": "The process of introducing DNA into plant cells using Agrobacterium is called:",
                "difficulty": "hard",
                "options": [
                    "Transformation",
                    "Transfection",
                    "Transduction",
                    "Conjugation"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Plant genetic engineering"],
                    "find": "Agrobacterium-mediated gene transfer",
                    "principle": "Transformation is the term used for introducing DNA into plant cells using Agrobacterium tumefaciens as a natural vector, where the Ti plasmid transfers T-DNA into the plant genome.",
                    "steps": [
                        {
                            "step": "Analyze genetic transfer methods",
                            "work": "Transfection is for animal cells; transduction is virus-mediated; conjugation is bacterial mating. Transformation is used for Agrobacterium-mediated plant gene transfer.",
                            "result": "Transformation is correct"
                        }
                    ],
                    "answer": "Transformation",
                    "concept": "Plant transformation"
                }
            },
            {
                "problem": "Which enzyme is used to add poly-A tail to eukaryotic mRNA?",
                "difficulty": "hard",
                "options": [
                    "RNA polymerase",
                    "Poly-A polymerase",
                    "DNA polymerase",
                    "Reverse transcriptase"
                ],
                "correct": 1,
                "solution": {
                    "given": ["mRNA processing"],
                    "find": "Poly-A tail adding enzyme",
                    "principle": "Poly-A polymerase adds the poly-A tail to the 3' end of eukaryotic mRNA after transcription, which is important for mRNA stability, export from nucleus, and translation.",
                    "steps": [
                        {
                            "step": "Analyze RNA processing enzymes",
                            "work": "RNA polymerase transcribes DNA; DNA polymerase replicates DNA; reverse transcriptase makes DNA from RNA. Only poly-A polymerase adds poly-A tails.",
                            "result": "Poly-A polymerase is correct"
                        }
                    ],
                    "answer": "Poly-A polymerase",
                    "concept": "mRNA processing"
                }
            },
            {
                "problem": "The technique that separates molecules based on their affinity to a stationary phase is:",
                "difficulty": "medium",
                "options": [
                    "Electrophoresis",
                    "Centrifugation",
                    "Chromatography",
                    "PCR"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Separation techniques"],
                    "find": "Affinity-based separation",
                    "principle": "Chromatography separates molecules based on their differential partitioning between a mobile phase and stationary phase, using principles of adsorption, partition, or affinity.",
                    "steps": [
                        {
                            "step": "Analyze separation methods",
                            "work": "Electrophoresis uses electric field; centrifugation uses density; PCR amplifies DNA. Only chromatography uses affinity to stationary phase.",
                            "result": "Chromatography is correct"
                        }
                    ],
                    "answer": "Chromatography",
                    "concept": "Separation techniques"
                }
            },
            {
                "problem": "Which enzyme would you use to join two DNA fragments with compatible sticky ends?",
                "difficulty": "easy",
                "options": [
                    "Restriction enzyme",
                    "DNA ligase",
                    "DNA polymerase",
                    "Reverse transcriptase"
                ],
                "correct": 1,
                "solution": {
                    "given": ["DNA manipulation"],
                    "find": "Enzyme for joining DNA fragments",
                    "principle": "DNA ligase catalyzes the formation of phosphodiester bonds between compatible ends of DNA fragments, making it essential for creating recombinant DNA molecules.",
                    "steps": [
                        {
                            "step": "Analyze DNA joining enzymes",
                            "work": "Restriction enzymes cut DNA; DNA polymerase synthesizes DNA; reverse transcriptase makes DNA from RNA. Only DNA ligase joins DNA fragments.",
                            "result": "DNA ligase is correct"
                        }
                    ],
                    "answer": "DNA ligase",
                    "concept": "DNA ligation"
                }
            },
            {
                "problem": "The process of making multiple identical copies of a gene is called:",
                "difficulty": "easy",
                "options": [
                    "DNA sequencing",
                    "Gene cloning",
                    "PCR",
                    "DNA fingerprinting"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Genetic engineering terms"],
                    "find": "Process of making gene copies",
                    "principle": "Gene cloning involves inserting a gene into a vector, introducing it into host cells, and allowing the cells to replicate, producing multiple identical copies of the gene.",
                    "steps": [
                        {
                            "step": "Analyze genetic techniques",
                            "work": "DNA sequencing determines sequence; PCR amplifies specific regions; fingerprinting identifies individuals. Gene cloning produces multiple identical gene copies.",
                            "result": "Gene cloning is correct"
                        }
                    ],
                    "answer": "Gene cloning",
                    "concept": "Gene cloning"
                }
            },
            {
                "problem": "Which technique would you use to detect a specific protein in a mixture?",
                "difficulty": "medium",
                "options": [
                    "Southern blotting",
                    "Northern blotting",
                    "Western blotting",
                    "Eastern blotting"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Blotting techniques"],
                    "find": "Protein detection method",
                    "principle": "Western blotting (immunoblotting) separates proteins by electrophoresis, transfers them to a membrane, and detects specific proteins using antibodies against the target protein.",
                    "steps": [
                        {
                            "step": "Analyze blotting applications",
                            "work": "Southern detects DNA; Northern detects RNA; Eastern is for other modifications. Only Western blotting detects specific proteins.",
                            "result": "Western blotting is correct"
                        }
                    ],
                    "answer": "Western blotting",
                    "concept": "Protein detection"
                }
            },
            {
                "problem": "The enzyme that synthesizes DNA in the 5' to 3' direction is:",
                "difficulty": "easy",
                "options": [
                    "DNA polymerase",
                    "RNA polymerase",
                    "DNA ligase",
                    "Reverse transcriptase"
                ],
                "correct": 0,
                "solution": {
                    "given": ["DNA synthesis enzymes"],
                    "find": "5' to 3' DNA synthesizing enzyme",
                    "principle": "All DNA polymerases (including Taq polymerase, DNA pol I, III) synthesize DNA in the 5' to 3' direction by adding nucleotides to the 3' OH end of the growing chain.",
                    "steps": [
                        {
                            "step": "Analyze synthesis directions",
                            "work": "RNA polymerase makes RNA; DNA ligase joins fragments; reverse transcriptase makes DNA from RNA. Only DNA polymerase synthesizes DNA 5'→3'.",
                            "result": "DNA polymerase is correct"
                        }
                    ],
                    "answer": "DNA polymerase",
                    "concept": "DNA synthesis"
                }
            },
            {
                "problem": "Which component is essential for DNA replication but not for PCR?",
                "difficulty": "hard",
                "options": [
                    "Primers",
                    "dNTPs",
                    "DNA helicase",
                    "Taq polymerase"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Replication vs PCR"],
                    "find": "Component not needed in PCR",
                    "principle": "DNA helicase is required in vivo to unwind the DNA double helix during replication, but in PCR, the high temperature (95°C) denatures DNA, making helicase unnecessary.",
                    "steps": [
                        {
                            "step": "Compare replication components",
                            "work": "Primers, dNTPs, and polymerase are needed in both replication and PCR. Helicase is only needed in biological replication, not PCR.",
                            "result": "DNA helicase is correct answer"
                        }
                    ],
                    "answer": "DNA helicase",
                    "concept": "PCR vs replication"
                }
            }
        ]
    },

    "biotechnology_and_its_applications": {
        "title": "Biotechnology and Its Applications",
        "weightage": "3–4%",
        "introduction": "This chapter explores the practical applications of biotechnology in medicine, agriculture, and industry. It covers the use of recombinant DNA technology to develop therapeutic drugs, genetically modified crops, and other biotechnological products that address human needs. NEET questions often focus on specific applications, ethical considerations, and the science behind biotechnological products.",

        "topics": [
            {
                "name": "Biotechnological Applications in Agriculture",
                "description": "Use of biotechnology to improve crop yield, nutritional quality, and resistance to pests and environmental stresses.",
                "subtopics": [
                    {
                        "name": "Genetically Modified Crops (GM Crops)",
                        "explanation": "Crops whose genetic material has been altered using genetic engineering techniques to introduce desirable traits such as pest resistance, herbicide tolerance, or improved nutritional content."
                    },
                    {
                        "name": "Bt Crops",
                        "explanation": "Plants genetically modified to produce insecticidal proteins from Bacillus thuringiensis (Bt), which are toxic to specific insect pests but harmless to humans and other animals. Examples: Bt cotton, Bt brinjal."
                    },
                    {
                        "name": "Pest-Resistant Plants",
                        "explanation": "Plants engineered to resist pests through various mechanisms, including production of insecticidal proteins, RNA interference (RNAi) to silence essential insect genes, or enhanced natural defense systems."
                    },
                    {
                        "name": "Nutritionally Enhanced Crops",
                        "explanation": "Crops modified to improve their nutritional value, such as Golden Rice (rich in beta-carotene, a precursor of vitamin A) or crops with enhanced vitamin, mineral, or protein content."
                    },
                    {
                        "name": "Abiotic Stress Tolerance",
                        "explanation": "Development of crops that can withstand environmental stresses like drought, salinity, extreme temperatures, or poor soil conditions through genetic modifications."
                    }
                ]
            },
            {
                "name": "Biotechnological Applications in Medicine",
                "description": "Use of biotechnology to develop diagnostic tools, therapeutic drugs, and treatment methods for human diseases.",
                "subtopics": [
                    {
                        "name": "Recombinant Therapeutic Proteins",
                        "explanation": "Production of human proteins using recombinant DNA technology for treating various diseases. Examples: Insulin for diabetes, Human growth hormone for dwarfism, Erythropoietin for anemia."
                    },
                    {
                        "name": "Vaccines",
                        "explanation": "Development of recombinant vaccines that use specific antigens rather than whole pathogens, providing safer and more effective immunization. Examples: Hepatitis B vaccine, HPV vaccine."
                    },
                    {
                        "name": "Gene Therapy",
                        "explanation": "Treatment of genetic disorders by introducing functional genes into patients' cells to replace or supplement defective genes. Approaches: Ex vivo (cells modified outside body) and in vivo (direct delivery)."
                    },
                    {
                        "name": "Molecular Diagnosis",
                        "explanation": "Use of biotechnology for early and accurate disease detection. Techniques: PCR for pathogen detection, ELISA for antibody/antigen detection, DNA microarrays for genetic testing."
                    },
                    {
                        "name": "Stem Cell Technology",
                        "explanation": "Use of stem cells for regenerative medicine, tissue engineering, and treatment of various diseases through their ability to differentiate into different cell types."
                    }
                ]
            },
            {
                "name": "Industrial Biotechnology",
                "description": "Application of biotechnology in industrial processes to produce chemicals, materials, and energy in sustainable ways.",
                "subtopics": [
                    {
                        "name": "Bioreactors",
                        "explanation": "Large-scale vessels used to grow microorganisms or cells under controlled conditions for the production of biotechnological products like antibiotics, enzymes, or recombinant proteins."
                    },
                    {
                        "name": "Fermentation Technology",
                        "explanation": "Use of microorganisms to produce valuable products through controlled fermentation processes. Examples: Antibiotics (penicillin), Organic acids (citric acid), Enzymes (amylase)."
                    },
                    {
                        "name": "Biofuels",
                        "explanation": "Production of renewable fuels from biological materials. Examples: Bioethanol from sugarcane/corn, Biodiesel from plant oils, Biogas from organic waste."
                    },
                    {
                        "name": "Bioremediation",
                        "explanation": "Use of microorganisms to degrade environmental pollutants and clean up contaminated sites. Applications: Oil spill cleanup, Heavy metal removal, Pesticide degradation."
                    }
                ]
            },
            {
                "name": "Ethical Issues and Regulations",
                "description": "Consideration of ethical, social, and legal aspects of biotechnology applications and the regulatory frameworks governing them.",
                "subtopics": [
                    {
                        "name": "Biosafety",
                        "explanation": "Measures to ensure the safe handling and containment of genetically modified organisms (GMOs) to prevent unintended environmental release or health impacts."
                    },
                    {
                        "name": "Bioethics",
                        "explanation": "Ethical considerations regarding genetic modification, cloning, stem cell research, and other biotechnological applications that raise moral questions."
                    },
                    {
                        "name": "Intellectual Property Rights",
                        "explanation": "Legal protection of biotechnological inventions through patents, and debates around patenting life forms and genetic materials."
                    },
                    {
                        "name": "Regulatory Frameworks",
                        "explanation": "Government regulations and international agreements that govern the development, testing, and release of biotechnological products to ensure safety and efficacy."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Agricultural Biotechnology": [
                {
                    "name": "Bt Technology",
                    "description": "Use of Bacillus thuringiensis genes to confer insect resistance in crops, reducing pesticide use"
                },
                {
                    "name": "Nutritional Enhancement",
                    "description": "Genetic modification to improve the nutritional quality of crops to address malnutrition"
                }
            ],
            "Medical Biotechnology": [
                {
                    "name": "Recombinant Therapeutics",
                    "description": "Production of human proteins in bacterial or mammalian cells for treatment of diseases"
                },
                {
                    "name": "Gene Therapy Approaches",
                    "description": "Various strategies to deliver functional genes to treat genetic disorders at the molecular level"
                }
            ],
            "Industrial Applications": [
                {
                    "name": "Large-Scale Production",
                    "description": "Use of bioreactors and fermentation technology for industrial production of biological products"
                },
                {
                    "name": "Environmental Applications",
                    "description": "Use of biological systems for pollution control and sustainable resource management"
                }
            ]
        },

        "problems": [
            {
                "problem": "Which of the following is an example of a Bt crop?",
                "difficulty": "easy",
                "options": [
                    "Golden Rice",
                    "Bt Cotton",
                    "Flavr Savr Tomato",
                    "Roundup Ready Soybean"
                ],
                "correct": 1,
                "solution": {
                    "given": ["GM crops"],
                    "find": "Bt crop example",
                    "principle": "Bt crops are genetically modified to produce insecticidal proteins from Bacillus thuringiensis. Bt cotton is engineered to resist bollworm infestation.",
                    "steps": [
                        {
                            "step": "Analyze GM crop types",
                            "work": "Golden Rice is nutritionally enhanced; Flavr Savr Tomato is delayed ripening; Roundup Ready is herbicide resistant. Only Bt Cotton is insect-resistant.",
                            "result": "Bt Cotton is correct"
                        }
                    ],
                    "answer": "Bt Cotton",
                    "concept": "Bt technology"
                }
            },
            {
                "problem": "The first recombinant therapeutic product approved for human use was:",
                "difficulty": "medium",
                "options": [
                    "Human growth hormone",
                    "Erythropoietin",
                    "Insulin",
                    "Hepatitis B vaccine"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Recombinant therapeutics history"],
                    "find": "First recombinant drug",
                    "principle": "Recombinant human insulin (Humulin) was the first therapeutic product of genetic engineering approved for human use in 1982, developed by Genentech and Eli Lilly.",
                    "steps": [
                        {
                            "step": "Analyze historical development",
                            "work": "While all are recombinant therapeutics, insulin was the first to be approved, marking a milestone in medical biotechnology.",
                            "result": "Insulin is correct"
                        }
                    ],
                    "answer": "Insulin",
                    "concept": "Recombinant therapeutics"
                }
            },
            {
                "problem": "Golden Rice is genetically modified to be rich in:",
                "difficulty": "easy",
                "options": [
                    "Vitamin C",
                    "Iron",
                    "Beta-carotene",
                    "Protein"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Nutritionally enhanced crops"],
                    "find": "Golden Rice enhancement",
                    "principle": "Golden Rice is engineered to produce beta-carotene (provitamin A) in the endosperm, which the body converts to vitamin A, addressing vitamin A deficiency.",
                    "steps": [
                        {
                            "step": "Analyze nutritional modifications",
                            "work": "Golden Rice specifically addresses vitamin A deficiency through beta-carotene production, not other nutrients.",
                            "result": "Beta-carotene is correct"
                        }
                    ],
                    "answer": "Beta-carotene",
                    "concept": "Nutritional enhancement"
                }
            },
            {
                "problem": "Which technique is used for early detection of HIV infection?",
                "difficulty": "medium",
                "options": [
                    "ELISA",
                    "PCR",
                    "DNA microarray",
                    "Western blotting"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Molecular diagnosis"],
                    "find": "HIV detection method",
                    "principle": "PCR (Polymerase Chain Reaction) can detect HIV DNA/RNA in blood within days of infection, much earlier than antibody-based tests like ELISA which require weeks for antibody development.",
                    "steps": [
                        {
                            "step": "Analyze diagnostic methods",
                            "work": "While ELISA and Western blot are used for HIV diagnosis, PCR provides the earliest detection by amplifying viral nucleic acids directly.",
                            "result": "PCR is correct"
                        }
                    ],
                    "answer": "PCR",
                    "concept": "Molecular diagnosis"
                }
            },
            {
                "problem": "The process of using microorganisms to clean up environmental pollutants is called:",
                "difficulty": "easy",
                "options": [
                    "Bioremediation",
                    "Biofortification",
                    "Bioaccumulation",
                    "Biopiracy"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Environmental biotechnology"],
                    "find": "Pollution cleanup process",
                    "principle": "Bioremediation uses naturally occurring or genetically engineered microorganisms to degrade or transform environmental contaminants into less harmful substances.",
                    "steps": [
                        {
                            "step": "Analyze environmental terms",
                            "work": "Biofortification enhances nutritional value; bioaccumulation is toxin buildup; biopiracy is unethical exploitation. Only bioremediation cleans pollutants.",
                            "result": "Bioremediation is correct"
                        }
                    ],
                    "answer": "Bioremediation",
                    "concept": "Environmental applications"
                }
            },
            {
                "problem": "Which of the following is not a recombinant vaccine?",
                "difficulty": "medium",
                "options": [
                    "Hepatitis B vaccine",
                    "HPV vaccine",
                    "BCG vaccine",
                    "COVID-19 mRNA vaccine"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Vaccine types"],
                    "find": "Non-recombinant vaccine",
                    "principle": "BCG vaccine uses live attenuated Mycobacterium bovis and is not produced by recombinant DNA technology. Hepatitis B, HPV, and mRNA vaccines use recombinant technology.",
                    "steps": [
                        {
                            "step": "Analyze vaccine production methods",
                            "work": "Hepatitis B and HPV vaccines use recombinant proteins; mRNA vaccines use genetic technology. BCG is a traditional attenuated vaccine.",
                            "result": "BCG vaccine is correct answer"
                        }
                    ],
                    "answer": "BCG vaccine",
                    "concept": "Recombinant vaccines"
                }
            },
            {
                "problem": "RNA interference (RNAi) technology is used in plants to:",
                "difficulty": "hard",
                "options": [
                    "Increase photosynthesis",
                    "Enhance nutrient uptake",
                    "Develop pest resistance",
                    "Improve drought tolerance"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Plant biotechnology"],
                    "find": "RNAi application",
                    "principle": "RNAi technology is used to develop pest-resistant plants by introducing genes that produce double-stranded RNA, which silences essential genes in insects when they feed on the plants.",
                    "steps": [
                        {
                            "step": "Analyze RNAi applications",
                            "work": "RNAi specifically targets gene silencing in pests, making it an effective tool for developing insect-resistant crops without chemical pesticides.",
                            "result": "Develop pest resistance is correct"
                        }
                    ],
                    "answer": "Develop pest resistance",
                    "concept": "RNAi technology"
                }
            },
            {
                "problem": "The main ethical concern regarding GM crops is:",
                "difficulty": "medium",
                "options": [
                    "High production cost",
                    "Low yield",
                    "Biosafety and environmental impact",
                    "Poor taste quality"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Ethical issues in biotechnology"],
                    "find": "Main GM crop concern",
                    "principle": "The primary ethical concerns regarding GM crops involve biosafety issues such as potential environmental impacts, gene flow to wild relatives, effects on non-target organisms, and long-term ecological consequences.",
                    "steps": [
                        {
                            "step": "Analyze ethical considerations",
                            "work": "While cost, yield, and taste are considerations, biosafety and environmental impact represent the core ethical concerns debated by scientists and public.",
                            "result": "Biosafety and environmental impact is correct"
                        }
                    ],
                    "answer": "Biosafety and environmental impact",
                    "concept": "Bioethics"
                }
            },
            {
                "problem": "Which disease is being treated using gene therapy?",
                "difficulty": "medium",
                "options": [
                    "Diabetes",
                    "AIDS",
                    "Severe Combined Immunodeficiency (SCID)",
                    "Malaria"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Gene therapy applications"],
                    "find": "Disease treated with gene therapy",
                    "principle": "Severe Combined Immunodeficiency (SCID), particularly ADA deficiency, has been successfully treated with gene therapy by introducing functional ADA genes into patients' cells.",
                    "steps": [
                        {
                            "step": "Analyze gene therapy targets",
                            "work": "While research continues for many diseases, SCID represents one of the first successful applications of gene therapy in clinical practice.",
                            "result": "Severe Combined Immunodeficiency (SCID) is correct"
                        }
                    ],
                    "answer": "Severe Combined Immunodeficiency (SCID)",
                    "concept": "Gene therapy"
                }
            },
            {
                "problem": "The process of developing crops with improved nutritional quality is called:",
                "difficulty": "easy",
                "options": [
                    "Biofortification",
                    "Bioremediation",
                    "Bioaccumulation",
                    "Biodiversity"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Agricultural biotechnology"],
                    "find": "Nutritional improvement process",
                    "principle": "Biofortification is the process of developing crops with enhanced nutritional value through conventional breeding or genetic engineering to address micronutrient deficiencies.",
                    "steps": [
                        {
                            "step": "Analyze agricultural terms",
                            "work": "Bioremediation cleans pollutants; bioaccumulation is toxin buildup; biodiversity refers to variety. Only biofortification improves nutrition.",
                            "result": "Biofortification is correct"
                        }
                    ],
                    "answer": "Biofortification",
                    "concept": "Nutritional enhancement"
                }
            },
            {
                "problem": "The transgenic animal used to produce human proteins in its milk is:",
                "difficulty": "medium",
                "options": [
                    "Sheep",
                    "Mouse",
                    "Rabbit",
                    "All of the above"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Transgenic animals"],
                    "find": "Animals used for pharmaceutical production",
                    "principle": "Various transgenic animals including sheep (producing alpha-1-antitrypsin), mice (various proteins), and rabbits (human proteins) have been engineered to produce therapeutic proteins in their milk.",
                    "steps": [
                        {
                            "step": "Analyze transgenic applications",
                            "work": "All listed animals have been successfully used as bioreactors for producing human therapeutic proteins in their milk through genetic engineering.",
                            "result": "All of the above is correct"
                        }
                    ],
                    "answer": "All of the above",
                    "concept": "Transgenic animals"
                }
            },
            {
                "problem": "Which enzyme is used in the production of lactose-free milk?",
                "difficulty": "medium",
                "options": [
                    "Amylase",
                    "Lipase",
                    "Lactase",
                    "Protease"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Enzyme technology"],
                    "find": "Enzyme for lactose hydrolysis",
                    "principle": "Lactase (β-galactosidase) hydrolyzes lactose into glucose and galactose, making milk digestible for lactose-intolerant individuals. This enzyme is produced commercially using microbial fermentation.",
                    "steps": [
                        {
                            "step": "Analyze enzyme functions",
                            "work": "Amylase digests starch; lipase digests fats; protease digests proteins. Only lactase breaks down lactose.",
                            "result": "Lactase is correct"
                        }
                    ],
                    "answer": "Lactase",
                    "concept": "Enzyme applications"
                }
            },
            {
                "problem": "The first genetically modified food approved for human consumption was:",
                "difficulty": "hard",
                "options": [
                    "Golden Rice",
                    "Flavr Savr Tomato",
                    "Bt Cotton",
                    "Roundup Ready Soybean"
                ],
                "correct": 1,
                "solution": {
                    "given": ["GM food history"],
                    "find": "First approved GM food",
                    "principle": "The Flavr Savr tomato, engineered for delayed ripening and longer shelf life, was the first genetically modified food crop approved for human consumption in 1994.",
                    "steps": [
                        {
                            "step": "Analyze historical development",
                            "work": "Flavr Savr was approved before Golden Rice, Bt cotton (not food), and Roundup Ready soybeans, making it the first GM food for human consumption.",
                            "result": "Flavr Savr Tomato is correct"
                        }
                    ],
                    "answer": "Flavr Savr Tomato",
                    "concept": "GM food history"
                }
            },
            {
                "problem": "Which biotechnology technique is used for paternity testing?",
                "difficulty": "medium",
                "options": [
                    "ELISA",
                    "PCR",
                    "DNA fingerprinting",
                    "Western blotting"
                ],
                "correct": 2,
                "solution": {
                    "given": ["DNA analysis applications"],
                    "find": "Paternity testing technique",
                    "principle": "DNA fingerprinting (using techniques like STR analysis) compares genetic markers between individuals to establish biological relationships, making it the standard method for paternity testing.",
                    "steps": [
                        {
                            "step": "Analyze diagnostic techniques",
                            "work": "ELISA detects proteins; PCR amplifies DNA; Western blot detects proteins. Only DNA fingerprinting establishes genetic relationships.",
                            "result": "DNA fingerprinting is correct"
                        }
                    ],
                    "answer": "DNA fingerprinting",
                    "concept": "DNA analysis"
                }
            },
            {
                "problem": "The process of producing multiple identical copies of a gene is called:",
                "difficulty": "easy",
                "options": [
                    "DNA sequencing",
                    "Gene cloning",
                    "PCR",
                    "DNA fingerprinting"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Genetic engineering terms"],
                    "find": "Gene copying process",
                    "principle": "Gene cloning involves inserting a gene into a vector, introducing it into host cells, and allowing the cells to replicate, producing multiple identical copies of the gene.",
                    "steps": [
                        {
                            "step": "Analyze genetic techniques",
                            "work": "DNA sequencing determines sequence; PCR amplifies specific regions; fingerprinting identifies individuals. Gene cloning produces multiple gene copies.",
                            "result": "Gene cloning is correct"
                        }
                    ],
                    "answer": "Gene cloning",
                    "concept": "Gene cloning"
                }
            },
            {
                "problem": "Which of the following is a biodegradable plastic produced by biotechnology?",
                "difficulty": "hard",
                "options": [
                    "Polyethylene",
                    "Polyvinyl chloride",
                    "Polyhydroxybutyrate (PHB)",
                    "Polystyrene"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Industrial biotechnology"],
                    "find": "Biodegradable bioplastic",
                    "principle": "Polyhydroxybutyrate (PHB) is a biodegradable polyester produced by certain bacteria as energy storage material. It can be used as a sustainable alternative to petroleum-based plastics.",
                    "steps": [
                        {
                            "step": "Analyze bioplastics",
                            "work": "Polyethylene, PVC, and polystyrene are petroleum-based non-biodegradable plastics. Only PHB is biodegradable and produced biologically.",
                            "result": "Polyhydroxybutyrate (PHB) is correct"
                        }
                    ],
                    "answer": "Polyhydroxybutyrate (PHB)",
                    "concept": "Bioplastics"
                }
            },
            {
                "problem": "The technique used to detect specific DNA sequences in a sample is:",
                "difficulty": "medium",
                "options": [
                    "ELISA",
                    "Southern blotting",
                    "Western blotting",
                    "Northern blotting"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Molecular detection methods"],
                    "find": "DNA detection technique",
                    "principle": "Southern blotting is specifically designed to detect specific DNA sequences by transferring DNA from gel to membrane and hybridizing with labeled probes.",
                    "steps": [
                        {
                            "step": "Analyze blotting techniques",
                            "work": "ELISA detects proteins/antibodies; Western detects proteins; Northern detects RNA. Only Southern blotting detects specific DNA sequences.",
                            "result": "Southern blotting is correct"
                        }
                    ],
                    "answer": "Southern blotting",
                    "concept": "Molecular detection"
                }
            },
            {
                "problem": "Which vitamin is produced by genetically engineered bacteria?",
                "difficulty": "medium",
                "options": [
                    "Vitamin A",
                    "Vitamin B12",
                    "Vitamin C",
                    "Vitamin D"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Microbial biotechnology"],
                    "find": "Bacterially produced vitamin",
                    "principle": "Vitamin B12 (cobalamin) is commercially produced using genetically engineered bacteria, particularly Pseudomonas denitrificans and Propionibacterium species, through fermentation processes.",
                    "steps": [
                        {
                            "step": "Analyze vitamin production",
                            "work": "Vitamin A is from plants/animals; Vitamin C is chemically synthesized; Vitamin D from sunlight/fortification. Only B12 is commercially produced using engineered bacteria.",
                            "result": "Vitamin B12 is correct"
                        }
                    ],
                    "answer": "Vitamin B12",
                    "concept": "Microbial production"
                }
            },
            {
                "problem": "The process of using stem cells to repair damaged tissues is called:",
                "difficulty": "medium",
                "options": [
                    "Gene therapy",
                    "Regenerative medicine",
                    "Molecular farming",
                    "Bioprocessing"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Stem cell applications"],
                    "find": "Tissue repair using stem cells",
                    "principle": "Regenerative medicine uses stem cells to replace or regenerate human cells, tissues, or organs to restore normal function, offering potential treatments for various degenerative diseases.",
                    "steps": [
                        {
                            "step": "Analyze medical applications",
                            "work": "Gene therapy modifies genes; molecular farming produces compounds; bioprocessing manufactures products. Only regenerative medicine focuses on tissue repair.",
                            "result": "Regenerative medicine is correct"
                        }
                    ],
                    "answer": "Regenerative medicine",
                    "concept": "Stem cell therapy"
                }
            },
            {
                "problem": "Which of the following is an example of biopesticide?",
                "difficulty": "easy",
                "options": [
                    "DDT",
                    "Malathion",
                    "Bt toxin",
                    "Glyphosate"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Biopesticides"],
                    "find": "Biological pesticide example",
                    "principle": "Bt (Bacillus thuringiensis) toxin is a naturally occurring bacterial protein that acts as a biopesticide, specifically targeting insect pests while being safe for humans and other animals.",
                    "steps": [
                        {
                            "step": "Analyze pesticide types",
                            "work": "DDT, Malathion, and Glyphosate are synthetic chemical pesticides. Only Bt toxin is a biological pesticide derived from bacteria.",
                            "result": "Bt toxin is correct"
                        }
                    ],
                    "answer": "Bt toxin",
                    "concept": "Biopesticides"
                }
            },
            {
                "problem": "The technology used to create Dolly the sheep was:",
                "difficulty": "medium",
                "options": [
                    "Gene therapy",
                    "Somatic cell nuclear transfer",
                    "Transgenic technology",
                    "CRISPR-Cas9"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cloning technology"],
                    "find": "Dolly cloning technique",
                    "principle": "Dolly was created using somatic cell nuclear transfer (SCNT), where the nucleus from an adult sheep's mammary cell was transferred into an enucleated egg cell, which then developed into a clone.",
                    "steps": [
                        {
                            "step": "Analyze cloning methods",
                            "work": "Gene therapy treats diseases; transgenic technology adds genes; CRISPR edits genes. Only somatic cell nuclear transfer was used for Dolly.",
                            "result": "Somatic cell nuclear transfer is correct"
                        }
                    ],
                    "answer": "Somatic cell nuclear transfer",
                    "concept": "Animal cloning"
                }
            },
            {
                "problem": "Which of the following is produced using recombinant yeast cells?",
                "difficulty": "hard",
                "options": [
                    "Human insulin",
                    "Hepatitis B vaccine",
                    "Human growth hormone",
                    "Erythropoietin"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Recombinant protein production"],
                    "find": "Yeast-produced recombinant product",
                    "principle": "The hepatitis B vaccine is produced using recombinant yeast (Saccharomyces cerevisiae) cells that express the hepatitis B surface antigen (HBsAg), which is then purified for vaccine use.",
                    "steps": [
                        {
                            "step": "Analyze production systems",
                            "work": "Human insulin and growth hormone are typically produced in E. coli; erythropoietin in mammalian cells. Hepatitis B vaccine is famously produced in yeast.",
                            "result": "Hepatitis B vaccine is correct"
                        }
                    ],
                    "answer": "Hepatitis B vaccine",
                    "concept": "Recombinant production systems"
                }
            },
            {
                "problem": "The process of developing disease-resistant plants using biotechnology is called:",
                "difficulty": "medium",
                "options": [
                    "Biofortification",
                    "Bioremediation",
                    "Molecular farming",
                    "Pathogen-derived resistance"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Plant biotechnology"],
                    "find": "Disease resistance development",
                    "principle": "Pathogen-derived resistance involves introducing genes from pathogens into plants to provide resistance against those pathogens, such as viral coat protein genes for virus resistance.",
                    "steps": [
                        {
                            "step": "Analyze plant protection strategies",
                            "work": "Biofortification improves nutrition; bioremediation cleans environment; molecular farming produces compounds. Pathogen-derived resistance specifically protects against diseases.",
                            "result": "Pathogen-derived resistance is correct"
                        }
                    ],
                    "answer": "Pathogen-derived resistance",
                    "concept": "Plant disease resistance"
                }
            },
            {
                "problem": "Which technology is used for precise genome editing?",
                "difficulty": "easy",
                "options": [
                    "PCR",
                    "CRISPR-Cas9",
                    "DNA sequencing",
                    "Gel electrophoresis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Genome editing"],
                    "find": "Precise editing technology",
                    "principle": "CRISPR-Cas9 is a revolutionary genome editing technology that uses a bacterial defense system to make precise cuts in DNA at specific locations, allowing for accurate gene editing.",
                    "steps": [
                        {
                            "step": "Analyze genetic technologies",
                            "work": "PCR amplifies DNA; sequencing reads DNA; electrophoresis separates DNA. Only CRISPR-Cas9 provides precise genome editing capability.",
                            "result": "CRISPR-Cas9 is correct"
                        }
                    ],
                    "answer": "CRISPR-Cas9",
                    "concept": "Genome editing"
                }
            },
            {
                "problem": "The use of plants to produce pharmaceutical proteins is called:",
                "difficulty": "medium",
                "options": [
                    "Biopharming",
                    "Biofortification",
                    "Bioremediation",
                    "Bioaccumulation"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Molecular farming"],
                    "find": "Plant-based pharmaceutical production",
                    "principle": "Biopharming (or molecular farming) uses genetically modified plants to produce therapeutic proteins, vaccines, or other pharmaceutical compounds in a cost-effective manner.",
                    "steps": [
                        {
                            "step": "Analyze agricultural biotechnology",
                            "work": "Biofortification enhances nutrition; bioremediation cleans environment; bioaccumulation is toxin buildup. Only biopharming produces pharmaceuticals in plants.",
                            "result": "Biopharming is correct"
                        }
                    ],
                    "answer": "Biopharming",
                    "concept": "Molecular farming"
                }
            },
            {
                "problem": "Which of the following is an application of tissue engineering?",
                "difficulty": "medium",
                "options": [
                    "Production of antibiotics",
                    "Development of artificial organs",
                    "DNA sequencing",
                    "Food preservation"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Tissue engineering"],
                    "find": "Tissue engineering application",
                    "principle": "Tissue engineering combines cells, engineering materials, and suitable biochemical factors to create functional tissue constructs for repairing or replacing damaged organs, such as artificial skin, cartilage, or blood vessels.",
                    "steps": [
                        {
                            "step": "Analyze biotechnology applications",
                            "work": "Antibiotics are microbial products; DNA sequencing is analytical; food preservation is processing. Only artificial organs represent tissue engineering.",
                            "result": "Development of artificial organs is correct"
                        }
                    ],
                    "answer": "Development of artificial organs",
                    "concept": "Tissue engineering"
                }
            },
            {
                "problem": "The process of using DNA evidence in criminal investigations is called:",
                "difficulty": "easy",
                "options": [
                    "DNA fingerprinting",
                    "Gene therapy",
                    "Molecular cloning",
                    "Genetic screening"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Forensic applications"],
                    "find": "Criminal investigation DNA use",
                    "principle": "DNA fingerprinting (DNA profiling) analyzes specific regions of DNA to create unique genetic profiles that can identify individuals, making it invaluable for criminal investigations and paternity testing.",
                    "steps": [
                        {
                            "step": "Analyze DNA applications",
                            "work": "Gene therapy treats diseases; cloning copies genes; screening detects disorders. Only DNA fingerprinting is used in forensics.",
                            "result": "DNA fingerprinting is correct"
                        }
                    ],
                    "answer": "DNA fingerprinting",
                    "concept": "Forensic biotechnology"
                }
            },
            {
                "problem": "Which microorganism is commonly used in the production of yogurt?",
                "difficulty": "easy",
                "options": [
                    "Saccharomyces cerevisiae",
                    "Lactobacillus bulgaricus",
                    "Escherichia coli",
                    "Bacillus thuringiensis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Food biotechnology"],
                    "find": "Yogurt production microbe",
                    "principle": "Lactobacillus bulgaricus, along with Streptococcus thermophilus, is used in yogurt production to ferment lactose into lactic acid, which gives yogurt its characteristic tangy flavor and thick texture.",
                    "steps": [
                        {
                            "step": "Analyze food microorganisms",
                            "work": "Saccharomyces is for bread/beer; E. coli is for recombinant work; Bacillus is for pesticides. Only Lactobacillus is used in yogurt.",
                            "result": "Lactobacillus bulgaricus is correct"
                        }
                    ],
                    "answer": "Lactobacillus bulgaricus",
                    "concept": "Food biotechnology"
                }
            },
            {
                "problem": "The technology used to produce human proteins in goat's milk is an example of:",
                "difficulty": "medium",
                "options": [
                    "Gene therapy",
                    "Pharming",
                    "Xenotransplantation",
                    "Bioremediation"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Transgenic technology"],
                    "find": "Animal-based protein production",
                    "principle": "Pharming (a portmanteau of 'pharmaceutical' and 'farming') refers to the use of genetically modified animals to produce therapeutic proteins in their milk, blood, or eggs.",
                    "steps": [
                        {
                            "step": "Analyze biotechnology applications",
                            "work": "Gene therapy treats patients; xenotransplantation transplants organs; bioremediation cleans environment. Only pharming produces drugs in animals.",
                            "result": "Pharming is correct"
                        }
                    ],
                    "answer": "Pharming",
                    "concept": "Transgenic animals"
                }
            },
            {
                "problem": "Which of the following is a benefit of genetically modified crops?",
                "difficulty": "easy",
                "options": [
                    "Reduced pesticide use",
                    "Increased biodiversity",
                    "Lower production costs",
                    "All of the above"
                ],
                "correct": 0,
                "solution": {
                    "given": ["GM crop benefits"],
                    "find": "Advantage of GM crops",
                    "principle": "GM crops like Bt cotton and Bt corn have significantly reduced pesticide use by incorporating insect resistance, though they may not necessarily increase biodiversity or lower all production costs.",
                    "steps": [
                        {
                            "step": "Analyze GM crop impacts",
                            "work": "While GM crops can reduce pesticide use, they may decrease biodiversity and don't always lower overall costs. Reduced pesticide use is a well-documented benefit.",
                            "result": "Reduced pesticide use is correct"
                        }
                    ],
                    "answer": "Reduced pesticide use",
                    "concept": "GM crop benefits"
                }
            },
            {
                "problem": "The enzyme used in cheese production to coagulate milk is:",
                "difficulty": "medium",
                "options": [
                    "Pepsin",
                    "Rennin (Chymosin)",
                    "Trypsin",
                    "Amylase"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Food enzyme technology"],
                    "find": "Cheese-making enzyme",
                    "principle": "Rennin (chymosin) is the enzyme traditionally obtained from calf stomach that coagulates milk by cleaving casein proteins, forming curds for cheese production. Recombinant chymosin is now widely used.",
                    "steps": [
                        {
                            "step": "Analyze food enzymes",
                            "work": "Pepsin and trypsin are digestive enzymes; amylase digests starch. Only rennin/chymosin is specifically used for milk coagulation in cheese making.",
                            "result": "Rennin (Chymosin) is correct"
                        }
                    ],
                    "answer": "Rennin (Chymosin)",
                    "concept": "Food enzymes"
                }
            },
            {
                "problem": "Which technology is used to detect genetic disorders in embryos?",
                "difficulty": "hard",
                "options": [
                    "PCR",
                    "Preimplantation Genetic Diagnosis (PGD)",
                    "DNA fingerprinting",
                    "Gene therapy"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Genetic diagnosis"],
                    "find": "Embryo genetic testing",
                    "principle": "Preimplantation Genetic Diagnosis (PGD) involves testing embryos created through IVF for genetic disorders before implantation, allowing selection of unaffected embryos.",
                    "steps": [
                        {
                            "step": "Analyze diagnostic technologies",
                            "work": "PCR is a tool; DNA fingerprinting identifies individuals; gene therapy treats diseases. Only PGD specifically tests embryos pre-implantation.",
                            "result": "Preimplantation Genetic Diagnosis (PGD) is correct"
                        }
                    ],
                    "answer": "Preimplantation Genetic Diagnosis (PGD)",
                    "concept": "Genetic diagnosis"
                }
            },
            {
                "problem": "The process of using bacteria to extract metals from ores is called:",
                "difficulty": "hard",
                "options": [
                    "Bioleaching",
                    "Biomining",
                    "Bioaccumulation",
                    "Both 1 and 2"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Industrial biotechnology"],
                    "find": "Bacterial metal extraction",
                    "principle": "Bioleaching (or biomining) uses microorganisms like Acidithiobacillus ferrooxidans to extract valuable metals from ores through oxidative processes, making it more environmentally friendly than traditional mining.",
                    "steps": [
                        {
                            "step": "Analyze microbial mining",
                            "work": "Bioleaching and biomining are essentially synonymous terms for microbial metal extraction. Bioaccumulation is toxin buildup in organisms.",
                            "result": "Both 1 and 2 is correct"
                        }
                    ],
                    "answer": "Both 1 and 2",
                    "concept": "Biomining"
                }
            },
            {
                "problem": "Which of the following is a synthetic biology application?",
                "difficulty": "hard",
                "options": [
                    "Creating artificial life forms",
                    "Designing genetic circuits",
                    "Producing biofuels from engineered microbes",
                    "All of the above"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Synthetic biology"],
                    "find": "Synthetic biology applications",
                    "principle": "Synthetic biology involves designing and constructing new biological parts, devices, and systems, including creating minimal genomes, engineering genetic circuits, and developing microbial factories for biofuel production.",
                    "steps": [
                        {
                            "step": "Analyze synthetic biology scope",
                            "work": "All options represent major applications of synthetic biology, from fundamental creation of synthetic life to practical applications in energy production.",
                            "result": "All of the above is correct"
                        }
                    ],
                    "answer": "All of the above",
                    "concept": "Synthetic biology"
                }
            },
            {
                "problem": "The technology used to produce human antibodies in plants is called:",
                "difficulty": "medium",
                "options": [
                    "Pharming",
                    "Xenotransplantation",
                    "Immunotherapy",
                    "Molecular farming"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Plant biotechnology"],
                    "find": "Plant-based antibody production",
                    "principle": "Molecular farming (or pharming) uses genetically modified plants to produce therapeutic proteins, including antibodies, vaccines, and other pharmaceutical compounds in a cost-effective and scalable manner.",
                    "steps": [
                        {
                            "step": "Analyze production systems",
                            "work": "Pharming typically refers to animal systems; xenotransplantation is organ transplants; immunotherapy is treatment approach. Molecular farming specifically uses plants.",
                            "result": "Molecular farming is correct"
                        }
                    ],
                    "answer": "Molecular farming",
                    "concept": "Plant-based pharmaceuticals"
                }
            },
            {
                "problem": "Which of the following is an ethical concern about human cloning?",
                "difficulty": "medium",
                "options": [
                    "Identity and individuality issues",
                    "Technical safety concerns",
                    "Psychological impacts",
                    "All of the above"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Bioethics"],
                    "find": "Human cloning ethical concerns",
                    "principle": "Human cloning raises multiple ethical concerns including issues of identity and individuality, technical safety risks, potential psychological impacts on clones, and broader societal implications.",
                    "steps": [
                        {
                            "step": "Analyze ethical considerations",
                            "work": "All options represent valid ethical concerns that are extensively debated in bioethics discussions about human cloning.",
                            "result": "All of the above is correct"
                        }
                    ],
                    "answer": "All of the above",
                    "concept": "Cloning ethics"
                }
            },
            {
                "problem": "The process of using microorganisms to produce biofuels is called:",
                "difficulty": "medium",
                "options": [
                    "Bioremediation",
                    "Bioprocessing",
                    "Biofortification",
                    "Biomagnification"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Biofuel production"],
                    "find": "Microbial biofuel production",
                    "principle": "Bioprocessing uses microorganisms in controlled fermentation processes to convert biomass into biofuels like ethanol, butanol, or biodiesel through metabolic engineering and fermentation technology.",
                    "steps": [
                        {
                            "step": "Analyze biotechnology terms",
                            "work": "Bioremediation cleans environment; biofortification enhances nutrition; biomagnification is toxin accumulation. Only bioprocessing describes microbial production processes.",
                            "result": "Bioprocessing is correct"
                        }
                    ],
                    "answer": "Bioprocessing",
                    "concept": "Biofuel technology"
                }
            },
            {
                "problem": "Which technology is used to study gene expression patterns?",
                "difficulty": "hard",
                "options": [
                    "DNA microarray",
                    "PCR",
                    "DNA sequencing",
                    "Gel electrophoresis"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Genomics"],
                    "find": "Gene expression analysis technology",
                    "principle": "DNA microarrays (gene chips) allow simultaneous monitoring of expression levels of thousands of genes, providing comprehensive profiles of gene activity under different conditions.",
                    "steps": [
                        {
                            "step": "Analyze genomic technologies",
                            "work": "PCR amplifies DNA; sequencing determines sequence; electrophoresis separates molecules. Only microarrays analyze multiple gene expressions simultaneously.",
                            "result": "DNA microarray is correct"
                        }
                    ],
                    "answer": "DNA microarray",
                    "concept": "Gene expression analysis"
                }
            },
            {
                "problem": "The use of biotechnology in forensic science is called:",
                "difficulty": "easy",
                "options": [
                    "Forensic biotechnology",
                    "DNA forensics",
                    "Criminal biotechnology",
                    "Legal biotechnology"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Forensic applications"],
                    "find": "Biotechnology in forensics",
                    "principle": "DNA forensics refers to the application of biotechnology techniques like DNA fingerprinting, PCR, and sequencing in criminal investigations, paternity testing, and identification of human remains.",
                    "steps": [
                        {
                            "step": "Analyze forensic terminology",
                            "work": "While all terms could conceptually apply, DNA forensics is the standard term for biotechnology applications in forensic science.",
                            "result": "DNA forensics is correct"
                        }
                    ],
                    "answer": "DNA forensics",
                    "concept": "Forensic biotechnology"
                }
            },
            {
                "problem": "Which of the following is produced using mammalian cell culture?",
                "difficulty": "hard",
                "options": [
                    "Human insulin",
                    "Hepatitis B vaccine",
                    "Erythropoietin",
                    "Bt toxin"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Recombinant production systems"],
                    "find": "Mammalian cell-produced product",
                    "principle": "Erythropoietin (EPO), a glycoprotein requiring complex post-translational modifications, is typically produced in mammalian cell cultures (like CHO cells) to ensure proper folding and glycosylation.",
                    "steps": [
                        {
                            "step": "Analyze production requirements",
                            "work": "Human insulin is produced in E. coli; Hepatitis B vaccine in yeast; Bt toxin in bacteria. Only EPO requires mammalian cells for proper processing.",
                            "result": "Erythropoietin is correct"
                        }
                    ],
                    "answer": "Erythropoietin",
                    "concept": "Protein production systems"
                }
            }
        ]
    },

    "ecology_and_environment": {
        "title": "Ecology and Environment",
        "weightage": "10-12%",
        "introduction": "Ecology is the study of interactions between organisms and their environment. This comprehensive unit covers ecosystems, biodiversity, environmental issues, and conservation biology. Understanding ecological principles is crucial for addressing global environmental challenges. NEET questions often focus on ecosystem dynamics, pollution, conservation strategies, and human impacts on the environment.",

        "topics": [
            {
                "name": "Organisms and Environment",
                "description": "Study of how organisms interact with their environment and with each other, including adaptations, populations, and ecological relationships.",
                "subtopics": [
                    {
                        "name": "Ecology Basics",
                        "explanation": "Ecology studies organism-environment interactions at multiple levels: individual, population, community, ecosystem, biome, and biosphere. Key concepts include habitat, niche, and ecological tolerance."
                    },
                    {
                        "name": "Abiotic Factors",
                        "explanation": "Non-living environmental factors that affect organisms: temperature, water, light, soil, wind, and topography. Each species has specific tolerance ranges for these factors."
                    },
                    {
                        "name": "Biotic Factors",
                        "explanation": "Biological influences including competition, predation, herbivory, symbiosis (mutualism, commensalism, parasitism), and disease that affect population dynamics."
                    },
                    {
                        "name": "Population Ecology",
                        "explanation": "Study of population characteristics: density, birth rate, death rate, growth patterns (exponential vs logistic), age structure, and population regulation mechanisms."
                    },
                    {
                        "name": "Adaptations",
                        "explanation": "Structural, physiological, and behavioral adaptations that help organisms survive in specific environments, such as desert, aquatic, or extreme habitats."
                    }
                ]
            },
            {
                "name": "Ecosystems",
                "description": "Study of biological communities and their physical environment as functional units, including energy flow and nutrient cycling.",
                "subtopics": [
                    {
                        "name": "Ecosystem Structure",
                        "explanation": "Components: biotic (producers, consumers, decomposers) and abiotic (soil, water, air). Stratification: vertical layers in forests. Species composition and diversity."
                    },
                    {
                        "name": "Energy Flow",
                        "explanation": "Unidirectional flow from sun → producers → consumers. Food chains, food webs, trophic levels. 10% law: only 10% energy transferred between trophic levels."
                    },
                    {
                        "name": "Nutrient Cycling",
                        "explanation": "Biogeochemical cycles: Carbon cycle (photosynthesis/respiration), Nitrogen cycle (nitrogen fixation, nitrification, denitrification), Phosphorus cycle, Water cycle."
                    },
                    {
                        "name": "Ecological Succession",
                        "explanation": "Process of community change over time: primary succession (bare rock) and secondary succession (after disturbance). Pioneer species → climax community."
                    },
                    {
                        "name": "Ecosystem Services",
                        "explanation": "Benefits humans obtain from ecosystems: provisioning (food, water), regulating (climate, flood control), cultural (recreation), and supporting (nutrient cycling) services."
                    }
                ]
            },
            {
                "name": "Biodiversity and Conservation",
                "description": "Study of biological diversity at genetic, species, and ecosystem levels, and strategies for its conservation.",
                "subtopics": [
                    {
                        "name": "Levels of Biodiversity",
                        "explanation": "Genetic diversity (within species), Species diversity (number and abundance of species), Ecological diversity (variety of ecosystems). India has 2.4% of world's area but 8.1% of biodiversity."
                    },
                    {
                        "name": "Patterns of Biodiversity",
                        "explanation": "Latitudinal gradient: diversity increases toward equator. Species-area relationships. Importance of biodiversity for ecosystem stability and resilience."
                    },
                    {
                        "name": "Threats to Biodiversity",
                        "explanation": "Habitat loss and fragmentation, Overexploitation, Invasive species, Co-extinctions, Pollution, Climate change. Current extinction rates 100-1000 times higher than background rates."
                    },
                    {
                        "name": "Conservation Strategies",
                        "explanation": "In-situ conservation (protected areas: national parks, wildlife sanctuaries, biosphere reserves). Ex-situ conservation (zoos, botanical gardens, seed banks, cryopreservation)."
                    },
                    {
                        "name": "International Efforts",
                        "explanation": "Convention on Biological Diversity (CBD), CITES ( wildlife trade), Ramsar Convention (wetlands), Project Tiger, Project Elephant."
                    }
                ]
            },
            {
                "name": "Environmental Issues",
                "description": "Study of human-induced environmental problems and their solutions, including pollution, climate change, and resource depletion.",
                "subtopics": [
                    {
                        "name": "Air Pollution",
                        "explanation": "Major pollutants: particulate matter, SO₂, NOₓ, CO, hydrocarbons. Effects: smog, acid rain, ozone depletion, global warming. Control measures: scrubbers, electrostatic precipitators."
                    },
                    {
                        "name": "Water Pollution",
                        "explanation": "Causes: domestic sewage, industrial effluents, agricultural runoff. Effects: eutrophication, biomagnification. BOD measures organic pollution. Treatment: primary, secondary, tertiary."
                    },
                    {
                        "name": "Solid Waste Management",
                        "explanation": "Municipal solid waste, electronic waste, biomedical waste. Methods: reduction, reuse, recycling, composting, incineration, landfilling. Hazardous waste management."
                    },
                    {
                        "name": "Climate Change",
                        "explanation": "Greenhouse effect, global warming, sea level rise, extreme weather events. Carbon footprint. Mitigation: renewable energy, afforestation, carbon sequestration."
                    },
                    {
                        "name": "Other Issues",
                        "explanation": "Deforestation, desertification, ozone depletion, noise pollution, thermal pollution, radioactive pollution, and their impacts on human health and ecosystems."
                    }
                ]
            },
            {
                "name": "Sustainable Development",
                "description": "Approaches to meet current needs without compromising future generations' ability to meet theirs, balancing economic, social, and environmental aspects.",
                "subtopics": [
                    {
                        "name": "Principles",
                        "explanation": "Intergenerational equity, precautionary principle, polluter pays principle, carrying capacity concept. Sustainable development goals (SDGs)."
                    },
                    {
                        "name": "Renewable Energy",
                        "explanation": "Solar, wind, hydro, geothermal, biomass energy. Advantages over fossil fuels: reduced pollution, sustainability. Challenges: intermittency, storage, infrastructure."
                    },
                    {
                        "name": "Green Technologies",
                        "explanation": "Organic farming, sustainable agriculture, green buildings, electric vehicles, waste-to-energy technologies, water conservation methods."
                    },
                    {
                        "name": "Environmental Laws",
                        "explanation": "Water Act 1974, Air Act 1981, Environment Protection Act 1986, Wildlife Protection Act 1972, Forest Conservation Act 1980. Environmental impact assessment (EIA)."
                    },
                    {
                        "name": "Community Participation",
                        "explanation": "Chipko movement, Narmada Bachao Andolan, Joint Forest Management, watershed management, eco-clubs, public awareness programs."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Ecological Principles": [
                {
                    "name": "Energy Flow",
                    "description": "Unidirectional energy transfer through ecosystems with 90% loss at each trophic level"
                },
                {
                    "name": "Nutrient Cycling",
                    "description": "Cyclic movement of essential elements between biotic and abiotic components through biogeochemical cycles"
                }
            ],
            "Biodiversity Patterns": [
                {
                    "name": "Latitudinal Gradient",
                    "description": "Species diversity increases from poles to equator due to greater solar energy, evolutionary time, and environmental stability"
                },
                {
                    "name": "Species-Area Relationship",
                    "description": "Larger areas generally contain more species, following the mathematical relationship S = CA^z"
                }
            ],
            "Environmental Challenges": [
                {
                    "name": "Pollution Impacts",
                    "description": "Various pollutants affect air quality, water resources, soil health, and ultimately human well-being and ecosystem functioning"
                },
                {
                    "name": "Climate Change Effects",
                    "description": "Global warming leads to sea-level rise, extreme weather, biodiversity loss, and disruptions to ecological systems"
                }
            ]
        },

        "problems": [
            {
                "problem": "The ultimate source of energy for most ecosystems is:",
                "difficulty": "easy",
                "options": [
                    "Geothermal energy",
                    "Chemical energy",
                    "Solar energy",
                    "Wind energy"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Energy flow in ecosystems"],
                    "find": "Primary energy source",
                    "principle": "Solar energy is captured by photosynthetic organisms (producers) and converted into chemical energy, which then flows through food chains to support all other trophic levels.",
                    "steps": [
                        {
                            "step": "Analyze energy sources",
                            "work": "While geothermal, chemical, and wind energy contribute to some ecosystems, solar energy is the primary source for most ecosystems through photosynthesis.",
                            "result": "Solar energy is correct"
                        }
                    ],
                    "answer": "Solar energy",
                    "concept": "Energy flow"
                }
            },
            {
                "problem": "Which of the following is a greenhouse gas?",
                "difficulty": "easy",
                "options": [
                    "Oxygen",
                    "Nitrogen",
                    "Carbon dioxide",
                    "Argon"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Atmospheric gases"],
                    "find": "Greenhouse gas",
                    "principle": "Carbon dioxide (CO₂) is a major greenhouse gas that absorbs and emits infrared radiation, contributing to the greenhouse effect and global warming.",
                    "steps": [
                        {
                            "step": "Analyze gas properties",
                            "work": "Oxygen, nitrogen, and argon are not greenhouse gases as they don't absorb significant infrared radiation. CO₂ is a well-established greenhouse gas.",
                            "result": "Carbon dioxide is correct"
                        }
                    ],
                    "answer": "Carbon dioxide",
                    "concept": "Greenhouse effect"
                }
            },
            {
                "problem": "The process of nutrient enrichment of water bodies leading to algal blooms is called:",
                "difficulty": "medium",
                "options": [
                    "Biomagnification",
                    "Eutrophication",
                    "Bioaccumulation",
                    "Succession"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Water pollution"],
                    "find": "Nutrient enrichment process",
                    "principle": "Eutrophication is the process where excessive nutrients (nitrogen, phosphorus) enter water bodies, causing rapid algal growth (blooms) that deplete oxygen and harm aquatic life.",
                    "steps": [
                        {
                            "step": "Analyze water quality terms",
                            "work": "Biomagnification is toxin concentration up food chain; bioaccumulation is toxin buildup in organisms; succession is community change. Only eutrophication describes nutrient enrichment.",
                            "result": "Eutrophication is correct"
                        }
                    ],
                    "answer": "Eutrophication",
                    "concept": "Water pollution"
                }
            },
            {
                "problem": "Which of the following is an example of ex-situ conservation?",
                "difficulty": "medium",
                "options": [
                    "National Park",
                    "Wildlife Sanctuary",
                    "Biosphere Reserve",
                    "Seed Bank"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Conservation strategies"],
                    "find": "Ex-situ conservation example",
                    "principle": "Ex-situ conservation involves protecting species outside their natural habitats. Seed banks preserve plant genetic material in controlled conditions, unlike protected areas which are in-situ.",
                    "steps": [
                        {
                            "step": "Analyze conservation methods",
                            "work": "National parks, wildlife sanctuaries, and biosphere reserves are all in-situ conservation methods. Only seed banks represent ex-situ conservation.",
                            "result": "Seed Bank is correct"
                        }
                    ],
                    "answer": "Seed Bank",
                    "concept": "Conservation biology"
                }
            },
            {
                "problem": "The phenomenon where toxic substances increase in concentration along the food chain is called:",
                "difficulty": "medium",
                "options": [
                    "Eutrophication",
                    "Bioaccumulation",
                    "Biomagnification",
                    "Biodegradation"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Toxicology"],
                    "find": "Food chain concentration process",
                    "principle": "Biomagnification is the process where concentrations of persistent toxic substances (like DDT, mercury) increase at successively higher trophic levels in a food chain.",
                    "steps": [
                        {
                            "step": "Analyze pollution processes",
                            "work": "Eutrophication is nutrient enrichment; bioaccumulation is individual organism buildup; biodegradation is breakdown. Only biomagnification describes food chain concentration.",
                            "result": "Biomagnification is correct"
                        }
                    ],
                    "answer": "Biomagnification",
                    "concept": "Toxicology"
                }
            },
            {
                "problem": "Which biogeochemical cycle does not have an atmospheric component?",
                "difficulty": "hard",
                "options": [
                    "Carbon cycle",
                    "Nitrogen cycle",
                    "Phosphorus cycle",
                    "Water cycle"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Nutrient cycles"],
                    "find": "Cycle without atmospheric phase",
                    "principle": "The phosphorus cycle is primarily sedimentary, with no significant atmospheric component. Phosphorus moves through rocks, soil, water, and organisms but doesn't circulate through the atmosphere like carbon, nitrogen, or water.",
                    "steps": [
                        {
                            "step": "Analyze biogeochemical cycles",
                            "work": "Carbon, nitrogen, and water cycles all have significant atmospheric components. Phosphorus cycle is earth-bound with minimal atmospheric exchange.",
                            "result": "Phosphorus cycle is correct"
                        }
                    ],
                    "answer": "Phosphorus cycle",
                    "concept": "Nutrient cycling"
                }
            },
            {
                "problem": "The zone of the earth where life exists is called:",
                "difficulty": "easy",
                "options": [
                    "Atmosphere",
                    "Lithosphere",
                    "Hydrosphere",
                    "Biosphere"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Ecological concepts"],
                    "find": "Life zone of earth",
                    "principle": "The biosphere is the global ecological system integrating all living beings and their relationships, including their interaction with the lithosphere, hydrosphere, and atmosphere.",
                    "steps": [
                        {
                            "step": "Analyze earth systems",
                            "work": "Atmosphere is air; lithosphere is land; hydrosphere is water. Only biosphere encompasses all areas where life exists.",
                            "result": "Biosphere is correct"
                        }
                    ],
                    "answer": "Biosphere",
                    "concept": "Ecological levels"
                }
            },
            {
                "problem": "Which of the following is a renewable resource?",
                "difficulty": "easy",
                "options": [
                    "Coal",
                    "Petroleum",
                    "Natural gas",
                    "Solar energy"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Resource classification"],
                    "find": "Renewable resource",
                    "principle": "Solar energy is renewable as it is continuously available and not depleted by use. Fossil fuels (coal, petroleum, natural gas) are non-renewable as they form over millions of years.",
                    "steps": [
                        {
                            "step": "Analyze resource types",
                            "work": "Coal, petroleum, and natural gas are all fossil fuels that take millions of years to form. Solar energy is continuously renewed and essentially inexhaustible.",
                            "result": "Solar energy is correct"
                        }
                    ],
                    "answer": "Solar energy",
                    "concept": "Resource management"
                }
            },
            {
                "problem": "The phenomenon where two species compete for the same resources is called:",
                "difficulty": "medium",
                "options": [
                    "Predation",
                    "Parasitism",
                    "Competition",
                    "Mutualism"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Species interactions"],
                    "find": "Resource competition",
                    "principle": "Competition occurs when two or more species utilize the same limited resources (food, space, mates), potentially leading to competitive exclusion or resource partitioning.",
                    "steps": [
                        {
                            "step": "Analyze ecological relationships",
                            "work": "Predation is consumption; parasitism is exploitation; mutualism is cooperation. Only competition describes species vying for same resources.",
                            "result": "Competition is correct"
                        }
                    ],
                    "answer": "Competition",
                    "concept": "Species interactions"
                }
            },
            {
                "problem": "Which organization is responsible for environmental protection in India?",
                "difficulty": "medium",
                "options": [
                    "WHO",
                    "UNEP",
                    "CPCB",
                    "WWF"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Environmental governance"],
                    "find": "Indian environmental agency",
                    "principle": "The Central Pollution Control Board (CPCB) is India's national organization for environmental protection and pollution control, established under the Water Act of 1974.",
                    "steps": [
                        {
                            "step": "Analyze organizations",
                            "work": "WHO is global health; UNEP is United Nations environment; WWF is conservation NGO. Only CPCB is India's statutory environmental agency.",
                            "result": "CPCB is correct"
                        }
                    ],
                    "answer": "CPCB",
                    "concept": "Environmental governance"
                }
            },
            {
                "problem": "The term 'ecology' was coined by:",
                "difficulty": "easy",
                "options": [
                    "Ernst Haeckel",
                    "Charles Darwin",
                    "Arthur Tansley",
                    "Eugene Odum"
                ],
                "correct": 0,
                "solution": {
                    "given": ["History of ecology"],
                    "find": "Originator of ecology term",
                    "principle": "Ernst Haeckel, a German biologist, coined the term 'ecology' in 1866, deriving it from the Greek words 'oikos' (house) and 'logos' (study), meaning the study of living organisms' relationships with their environment.",
                    "steps": [
                        {
                            "step": "Analyze historical contributions",
                            "work": "Darwin contributed evolutionary theory; Tansley coined 'ecosystem'; Odum was a modern ecologist. Haeckel specifically created the term ecology.",
                            "result": "Ernst Haeckel is correct"
                        }
                    ],
                    "answer": "Ernst Haeckel",
                    "concept": "Ecological terminology"
                }
            },
            {
                "problem": "Which type of species has a disproportionately large effect on its environment relative to its abundance?",
                "difficulty": "medium",
                "options": [
                    "Keystone species",
                    "Dominant species",
                    "Endemic species",
                    "Indicator species"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Species roles"],
                    "find": "Species with disproportionate impact",
                    "principle": "Keystone species have a disproportionately large effect on their environment relative to their abundance, often maintaining the structure and function of an ecosystem (e.g., sea otters in kelp forests).",
                    "steps": [
                        {
                            "step": "Analyze ecological roles",
                            "work": "Dominant species are most abundant; endemic species are location-specific; indicator species reflect environmental quality. Only keystone species have disproportionate impact.",
                            "result": "Keystone species is correct"
                        }
                    ],
                    "answer": "Keystone species",
                    "concept": "Species interactions"
                }
            },
            {
                "problem": "The transition zone between two ecosystems is called:",
                "difficulty": "medium",
                "options": [
                    "Ecotone",
                    "Ecozone",
                    "Biome",
                    "Ecotype"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Ecological boundaries"],
                    "find": "Ecosystem transition zone",
                    "principle": "An ecotone is a transition area between two biological communities, where two communities meet and integrate, often characterized by higher biodiversity and unique species (edge effect).",
                    "steps": [
                        {
                            "step": "Analyze ecological terms",
                            "work": "Ecozone is large biogeographic region; biome is major community type; ecotype is genetic adaptation. Only ecotone describes transition zones.",
                            "result": "Ecotone is correct"
                        }
                    ],
                    "answer": "Ecotone",
                    "concept": "Ecosystem boundaries"
                }
            },
            {
                "problem": "Which of the following is a primary air pollutant?",
                "difficulty": "medium",
                "options": [
                    "Ozone",
                    "PAN",
                    "Sulfur dioxide",
                    "Nitric acid"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Air pollution types"],
                    "find": "Primary pollutant",
                    "principle": "Primary pollutants are emitted directly from identifiable sources. Sulfur dioxide (SO₂) is emitted directly from fossil fuel combustion, while ozone, PAN, and nitric acid are secondary pollutants formed by atmospheric reactions.",
                    "steps": [
                        {
                            "step": "Analyze pollutant classification",
                            "work": "Ozone, PAN, and nitric acid are secondary pollutants formed through photochemical reactions. Only SO₂ is emitted directly as a primary pollutant.",
                            "result": "Sulfur dioxide is correct"
                        }
                    ],
                    "answer": "Sulfur dioxide",
                    "concept": "Air pollution"
                }
            },
            {
                "problem": "The phenomenon where deep, nutrient-rich water rises to the surface is called:",
                "difficulty": "hard",
                "options": [
                    "Upwelling",
                    "Downwelling",
                    "Thermocline",
                    "Halocline"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Marine ecology"],
                    "find": "Nutrient-rich water rising",
                    "principle": "Upwelling is the process where deep, cold, nutrient-rich water rises to the ocean surface, supporting high primary productivity and rich fishing grounds in areas like the Peruvian coast.",
                    "steps": [
                        {
                            "step": "Analyze ocean processes",
                            "work": "Downwelling is sinking water; thermocline is temperature gradient; halocline is salinity gradient. Only upwelling brings nutrients to surface.",
                            "result": "Upwelling is correct"
                        }
                    ],
                    "answer": "Upwelling",
                    "concept": "Marine ecosystems"
                }
            },
            {
                "problem": "Which of the following is NOT a greenhouse gas?",
                "difficulty": "easy",
                "options": [
                    "Methane",
                    "Nitrous oxide",
                    "Oxygen",
                    "Water vapor"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Greenhouse gases"],
                    "find": "Non-greenhouse gas",
                    "principle": "Oxygen (O₂) is not a greenhouse gas as it does not absorb significant infrared radiation. Methane, nitrous oxide, and water vapor are all potent greenhouse gases that contribute to global warming.",
                    "steps": [
                        {
                            "step": "Analyze atmospheric gases",
                            "work": "Methane, nitrous oxide, and water vapor are well-established greenhouse gases. Oxygen is transparent to infrared radiation and not a greenhouse gas.",
                            "result": "Oxygen is correct answer"
                        }
                    ],
                    "answer": "Oxygen",
                    "concept": "Greenhouse effect"
                }
            },
            {
                "problem": "The study of geographical distribution of species is called:",
                "difficulty": "medium",
                "options": [
                    "Biogeography",
                    "Ecology",
                    "Ethology",
                    "Taxonomy"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Ecological disciplines"],
                    "find": "Species distribution study",
                    "principle": "Biogeography is the study of the distribution of species and ecosystems in geographic space and through geological time, examining patterns and processes responsible for these distributions.",
                    "steps": [
                        {
                            "step": "Analyze scientific fields",
                            "work": "Ecology studies interactions; ethology studies behavior; taxonomy classifies organisms. Only biogeography focuses on geographical distribution.",
                            "result": "Biogeography is correct"
                        }
                    ],
                    "answer": "Biogeography",
                    "concept": "Ecological disciplines"
                }
            },
            {
                "problem": "Which of the following is an example of a sedimentary cycle?",
                "difficulty": "hard",
                "options": [
                    "Carbon cycle",
                    "Nitrogen cycle",
                    "Phosphorus cycle",
                    "Water cycle"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Biogeochemical cycles"],
                    "find": "Sedimentary cycle example",
                    "principle": "The phosphorus cycle is a sedimentary cycle where the reservoir is in the Earth's crust (rocks, minerals), with minimal atmospheric component, unlike gaseous cycles (carbon, nitrogen, water) that have significant atmospheric phases.",
                    "steps": [
                        {
                            "step": "Analyze cycle types",
                            "work": "Carbon, nitrogen, and water cycles are gaseous cycles with atmospheric components. Only phosphorus cycle is primarily sedimentary with earth-bound reservoir.",
                            "result": "Phosphorus cycle is correct"
                        }
                    ],
                    "answer": "Phosphorus cycle",
                    "concept": "Nutrient cycling"
                }
            },
            {
                "problem": "The maximum number of individuals an environment can support is called:",
                "difficulty": "easy",
                "options": [
                    "Biotic potential",
                    "Carrying capacity",
                    "Population density",
                    "Growth rate"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Population ecology"],
                    "find": "Maximum support capacity",
                    "principle": "Carrying capacity (K) is the maximum number of individuals of a species that an environment can support indefinitely without degradation of the environment.",
                    "steps": [
                        {
                            "step": "Analyze population terms",
                            "work": "Biotic potential is maximum reproductive capacity; density is number per area; growth rate is change over time. Only carrying capacity represents maximum sustainable population.",
                            "result": "Carrying capacity is correct"
                        }
                    ],
                    "answer": "Carrying capacity",
                    "concept": "Population ecology"
                }
            },
            {
                "problem": "Which of the following is NOT a component of biodiversity?",
                "difficulty": "medium",
                "options": [
                    "Genetic diversity",
                    "Species diversity",
                    "Ecosystem diversity",
                    "Population density"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Biodiversity components"],
                    "find": "Non-biodiversity component",
                    "principle": "Biodiversity includes three main components: genetic diversity (within species), species diversity (between species), and ecosystem diversity (between ecosystems). Population density is a demographic measure, not a biodiversity component.",
                    "steps": [
                        {
                            "step": "Analyze biodiversity elements",
                            "work": "Genetic, species, and ecosystem diversity are the three recognized levels of biodiversity. Population density is a separate ecological measurement.",
                            "result": "Population density is correct answer"
                        }
                    ],
                    "answer": "Population density",
                    "concept": "Biodiversity"
                }
            },
            {
                "problem": "The phenomenon where organisms produce light is called:",
                "difficulty": "medium",
                "options": [
                    "Phosphorescence",
                    "Bioluminescence",
                    "Fluorescence",
                    "Chemiluminescence"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Biological adaptations"],
                    "find": "Biological light production",
                    "principle": "Bioluminescence is the production and emission of light by living organisms through biochemical reactions, used for communication, predation, and defense in various marine and terrestrial species.",
                    "steps": [
                        {
                            "step": "Analyze light phenomena",
                            "work": "Phosphorescence and fluorescence involve light absorption and re-emission; chemiluminescence is chemical light production. Only bioluminescence is biological light production by organisms.",
                            "result": "Bioluminescence is correct"
                        }
                    ],
                    "answer": "Bioluminescence",
                    "concept": "Biological adaptations"
                }
            },
            {
                "problem": "Which of the following is a renewable resource?",
                "difficulty": "easy",
                "options": [
                    "Natural gas",
                    "Coal",
                    "Forests",
                    "Petroleum"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Resource management"],
                    "find": "Renewable resource",
                    "principle": "Forests are renewable resources when managed sustainably, as they can regrow and regenerate through natural processes or human management, unlike fossil fuels which are non-renewable.",
                    "steps": [
                        {
                            "step": "Analyze resource renewability",
                            "work": "Natural gas, coal, and petroleum are fossil fuels that take millions of years to form and are non-renewable. Forests can be renewable with proper management.",
                            "result": "Forests is correct"
                        }
                    ],
                    "answer": "Forests",
                    "concept": "Resource management"
                }
            },
            {
                "problem": "The process of water moving through plants and evaporating from leaves is called:",
                "difficulty": "medium",
                "options": [
                    "Transpiration",
                    "Evaporation",
                    "Condensation",
                    "Precipitation"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Water cycle processes"],
                    "find": "Plant water evaporation",
                    "principle": "Transpiration is the process where water is absorbed by plant roots, moves through the plant, and evaporates from leaf surfaces (stomata), contributing significantly to the water cycle.",
                    "steps": [
                        {
                            "step": "Analyze water processes",
                            "work": "Evaporation is from surfaces; condensation is gas to liquid; precipitation is falling water. Only transpiration involves plants.",
                            "result": "Transpiration is correct"
                        }
                    ],
                    "answer": "Transpiration",
                    "concept": "Water cycle"
                }
            },
            {
                "problem": "Which of the following is an example of a keystone species?",
                "difficulty": "hard",
                "options": [
                    "African elephant",
                    "Sea otter",
                    "Blue whale",
                    "Bengal tiger"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Keystone species examples"],
                    "find": "Classic keystone species",
                    "principle": "Sea otters are a classic keystone species in kelp forest ecosystems. Their predation on sea urchins prevents overgrazing of kelp, maintaining ecosystem structure and biodiversity.",
                    "steps": [
                        {
                            "step": "Analyze keystone roles",
                            "work": "While all are important, sea otters represent the textbook example of keystone species due to their disproportionate impact on kelp forest ecosystems.",
                            "result": "Sea otter is correct"
                        }
                    ],
                    "answer": "Sea otter",
                    "concept": "Keystone species"
                }
            },
            {
                "problem": "The variety of life forms in a particular habitat is called:",
                "difficulty": "easy",
                "options": [
                    "Ecosystem",
                    "Community",
                    "Population",
                    "Species richness"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Biodiversity measures"],
                    "find": "Life form variety term",
                    "principle": "Species richness is the number of different species represented in a particular ecological community, landscape, or region, representing one component of biodiversity.",
                    "steps": [
                        {
                            "step": "Analyze ecological terms",
                            "work": "Ecosystem is community + environment; community is interacting species; population is single species group. Only species richness measures variety of life forms.",
                            "result": "Species richness is correct"
                        }
                    ],
                    "answer": "Species richness",
                    "concept": "Biodiversity measurement"
                }
            },
            {
                "problem": "Which atmospheric layer contains the ozone layer?",
                "difficulty": "medium",
                "options": [
                    "Troposphere",
                    "Stratosphere",
                    "Mesosphere",
                    "Thermosphere"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Atmospheric structure"],
                    "find": "Ozone layer location",
                    "principle": "The ozone layer is located in the stratosphere, approximately 15-35 km above Earth's surface, where it absorbs harmful ultraviolet radiation from the sun.",
                    "steps": [
                        {
                            "step": "Analyze atmospheric layers",
                            "work": "Troposphere is weather layer; mesosphere and thermosphere are upper layers. Only stratosphere contains the protective ozone layer.",
                            "result": "Stratosphere is correct"
                        }
                    ],
                    "answer": "Stratosphere",
                    "concept": "Atmospheric science"
                }
            },
            {
                "problem": "The process of nitrogen fixation is primarily carried out by:",
                "difficulty": "medium",
                "options": [
                    "Plants",
                    "Animals",
                    "Bacteria",
                    "Fungi"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Nitrogen cycle"],
                    "find": "Nitrogen fixation agents",
                    "principle": "Nitrogen fixation, the conversion of atmospheric nitrogen (N₂) to ammonia (NH₃), is primarily carried out by specialized bacteria (e.g., Rhizobium in root nodules, Azotobacter in soil) and some archaea.",
                    "steps": [
                        {
                            "step": "Analyze nitrogen cycle processes",
                            "work": "Plants and animals cannot fix nitrogen directly; fungi are decomposers. Only certain bacteria and archaea have the nitrogenase enzyme for nitrogen fixation.",
                            "result": "Bacteria is correct"
                        }
                    ],
                    "answer": "Bacteria",
                    "concept": "Nitrogen cycle"
                }
            },
            {
                "problem": "Which of the following is NOT a renewable energy source?",
                "difficulty": "easy",
                "options": [
                    "Solar energy",
                    "Wind energy",
                    "Nuclear energy",
                    "Hydroelectric energy"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Energy sources"],
                    "find": "Non-renewable energy",
                    "principle": "Nuclear energy, while low-carbon, is not renewable as it depends on finite uranium resources that cannot be replenished on human timescales, unlike solar, wind, and hydroelectric energy which are continuously available.",
                    "steps": [
                        {
                            "step": "Analyze energy renewability",
                            "work": "Solar, wind, and hydroelectric energy are renewable sources. Nuclear energy relies on finite mineral resources and is not considered renewable.",
                            "result": "Nuclear energy is correct answer"
                        }
                    ],
                    "answer": "Nuclear energy",
                    "concept": "Energy resources"
                }
            },
            {
                "problem": "The study of animal behavior is called:",
                "difficulty": "easy",
                "options": [
                    "Ecology",
                    "Ethology",
                    "Etiology",
                    "Entomology"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Biological disciplines"],
                    "find": "Animal behavior study",
                    "principle": "Ethology is the scientific study of animal behavior, particularly in natural environments, focusing on instinctive behaviors, learning, and evolutionary aspects of behavior.",
                    "steps": [
                        {
                            "step": "Analyze scientific fields",
                            "work": "Ecology studies environment interactions; etiology studies causes; entomology studies insects. Only ethology focuses on animal behavior.",
                            "result": "Ethology is correct"
                        }
                    ],
                    "answer": "Ethology",
                    "concept": "Biological disciplines"
                }
            },
            {
                "problem": "Which of the following is a measure of water pollution?",
                "difficulty": "medium",
                "options": [
                    "BOD",
                    "COD",
                    "DO",
                    "All of the above"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Water quality indicators"],
                    "find": "Water pollution measures",
                    "principle": "BOD (Biochemical Oxygen Demand), COD (Chemical Oxygen Demand), and DO (Dissolved Oxygen) are all important indicators of water quality and pollution levels, measuring organic pollution and oxygen availability.",
                    "steps": [
                        {
                            "step": "Analyze water quality parameters",
                            "work": "BOD measures organic matter decomposition; COD measures chemical oxidation; DO measures oxygen content. All are used to assess water pollution.",
                            "result": "All of the above is correct"
                        }
                    ],
                    "answer": "All of the above",
                    "concept": "Water pollution"
                }
            },
            {
                "problem": "The phenomenon where species evolve similar traits independently is called:",
                "difficulty": "hard",
                "options": [
                    "Divergent evolution",
                    "Convergent evolution",
                    "Parallel evolution",
                    "Coevolution"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Evolutionary patterns"],
                    "find": "Independent similar evolution",
                    "principle": "Convergent evolution occurs when unrelated species independently evolve similar traits or adaptations in response to similar environmental challenges or ecological niches (e.g., wings in birds and bats).",
                    "steps": [
                        {
                            "step": "Analyze evolutionary patterns",
                            "work": "Divergent evolution is speciation; parallel evolution is similar changes in related species; coevolution is reciprocal evolution. Only convergent evolution describes independent development of similar traits.",
                            "result": "Convergent evolution is correct"
                        }
                    ],
                    "answer": "Convergent evolution",
                    "concept": "Evolutionary ecology"
                }
            },
            {
                "problem": "Which of the following is NOT a greenhouse gas?",
                "difficulty": "medium",
                "options": [
                    "Carbon dioxide",
                    "Methane",
                    "Nitrogen",
                    "Chlorofluorocarbons"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Greenhouse gases"],
                    "find": "Non-greenhouse gas",
                    "principle": "Nitrogen (N₂) is not a greenhouse gas as it is transparent to infrared radiation and does not contribute to the greenhouse effect, unlike CO₂, methane, and CFCs which are potent greenhouse gases.",
                    "steps": [
                        {
                            "step": "Analyze atmospheric gases",
                            "work": "Carbon dioxide, methane, and CFCs are all significant greenhouse gases. Nitrogen, while abundant, does not absorb infrared radiation effectively.",
                            "result": "Nitrogen is correct answer"
                        }
                    ],
                    "answer": "Nitrogen",
                    "concept": "Greenhouse effect"
                }
            },
            {
                "problem": "The process of gradual change in community structure over time is called:",
                "difficulty": "easy",
                "options": [
                    "Evolution",
                    "Succession",
                    "Adaptation",
                    "Speciation"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Community ecology"],
                    "find": "Community change process",
                    "principle": "Ecological succession is the process of gradual, predictable change in the species composition of a community over time, following a disturbance or on new substrate.",
                    "steps": [
                        {
                            "step": "Analyze ecological processes",
                            "work": "Evolution is genetic change; adaptation is trait development; speciation is new species formation. Only succession describes community changes over time.",
                            "result": "Succession is correct"
                        }
                    ],
                    "answer": "Succession",
                    "concept": "Community ecology"
                }
            },
            {
                "problem": "Which of the following is an example of a pioneer species?",
                "difficulty": "medium",
                "options": [
                    "Oak tree",
                    "Lichen",
                    "Deer",
                    "Wolf"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Succession species"],
                    "find": "Pioneer species example",
                    "principle": "Lichens are classic pioneer species that colonize bare rock in primary succession, breaking down rock and contributing to soil formation, allowing other species to establish later.",
                    "steps": [
                        {
                            "step": "Analyze succession roles",
                            "work": "Oak trees are climax species; deer and wolves are animals that appear later. Only lichens are typical pioneer species in primary succession.",
                            "result": "Lichen is correct"
                        }
                    ],
                    "answer": "Lichen",
                    "concept": "Ecological succession"
                }
            },
            {
                "problem": "The variety of ecosystems in a region is called:",
                "difficulty": "medium",
                "options": [
                    "Genetic diversity",
                    "Species diversity",
                    "Ecosystem diversity",
                    "Landscape diversity"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Biodiversity levels"],
                    "find": "Ecosystem variety term",
                    "principle": "Ecosystem diversity refers to the variety of ecosystems in a given area, including different habitats, biological communities, and ecological processes across landscapes.",
                    "steps": [
                        {
                            "step": "Analyze biodiversity components",
                            "work": "Genetic diversity is within species; species diversity is between species; landscape diversity is broader spatial pattern. Ecosystem diversity specifically refers to variety of ecosystems.",
                            "result": "Ecosystem diversity is correct"
                        }
                    ],
                    "answer": "Ecosystem diversity",
                    "concept": "Biodiversity levels"
                }
            },
            {
                "problem": "Which of the following is a non-renewable resource?",
                "difficulty": "easy",
                "options": [
                    "Wind",
                    "Sunlight",
                    "Minerals",
                    "Tides"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Resource classification"],
                    "find": "Non-renewable resource",
                    "principle": "Minerals are non-renewable resources as they form over geological timescales and cannot be replenished within human timescales, unlike wind, sunlight, and tidal energy which are renewable.",
                    "steps": [
                        {
                            "step": "Analyze resource renewability",
                            "work": "Wind, sunlight, and tides are continuously available renewable resources. Minerals are finite and non-renewable on human timescales.",
                            "result": "Minerals is correct"
                        }
                    ],
                    "answer": "Minerals",
                    "concept": "Resource management"
                }
            },
            {
                "problem": "The process of water vapor turning into liquid water is called:",
                "difficulty": "easy",
                "options": [
                    "Evaporation",
                    "Condensation",
                    "Precipitation",
                    "Transpiration"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Water cycle processes"],
                    "find": "Vapor to liquid process",
                    "principle": "Condensation is the process where water vapor in the atmosphere cools and changes from gaseous state to liquid state, forming clouds, fog, or dew.",
                    "steps": [
                        {
                            "step": "Analyze water phase changes",
                            "work": "Evaporation is liquid to gas; precipitation is falling water; transpiration is plant water loss. Only condensation describes vapor to liquid change.",
                            "result": "Condensation is correct"
                        }
                    ],
                    "answer": "Condensation",
                    "concept": "Water cycle"
                }
            },
            {
                "problem": "Which of the following is an example of a decomposer?",
                "difficulty": "easy",
                "options": [
                    "Lion",
                    "Eagle",
                    "Earthworm",
                    "Deer"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Ecological roles"],
                    "find": "Decomposer example",
                    "principle": "Earthworms are decomposers that break down organic matter, recycling nutrients back into the ecosystem. Lions, eagles, and deer are consumers at different trophic levels.",
                    "steps": [
                        {
                            "step": "Analyze ecological functions",
                            "work": "Lions and eagles are carnivores; deer are herbivores. Only earthworms function as decomposers in ecosystems.",
                            "result": "Earthworm is correct"
                        }
                    ],
                    "answer": "Earthworm",
                    "concept": "Ecological roles"
                }
            },
            {
                "problem": "The study of interactions between organisms and their environment is called:",
                "difficulty": "easy",
                "options": [
                    "Biology",
                    "Ecology",
                    "Geology",
                    "Meteorology"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Scientific disciplines"],
                    "find": "Organism-environment study",
                    "principle": "Ecology is specifically the scientific study of the interactions between organisms and their environment, including both biotic and abiotic factors.",
                    "steps": [
                        {
                            "step": "Analyze scientific fields",
                            "work": "Biology is general life study; geology studies earth; meteorology studies weather. Only ecology focuses on organism-environment interactions.",
                            "result": "Ecology is correct"
                        }
                    ],
                    "answer": "Ecology",
                    "concept": "Ecological science"
                }
            },
            {
                "problem": "Which of the following is a greenhouse gas that is also an ozone-depleting substance?",
                "difficulty": "hard",
                "options": [
                    "Carbon dioxide",
                    "Methane",
                    "Chlorofluorocarbons",
                    "Water vapor"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Atmospheric chemistry"],
                    "find": "Ozone-depleting greenhouse gas",
                    "principle": "Chlorofluorocarbons (CFCs) are both potent greenhouse gases and major ozone-depleting substances, contributing to global warming while also destroying stratospheric ozone.",
                    "steps": [
                        {
                            "step": "Analyze atmospheric impacts",
                            "work": "CO₂ and methane are greenhouse gases but not ozone-depleters; water vapor is greenhouse gas but natural. Only CFCs are both greenhouse gases and ozone-depleters.",
                            "result": "Chlorofluorocarbons is correct"
                        }
                    ],
                    "answer": "Chlorofluorocarbons",
                    "concept": "Atmospheric science"
                }
            },
            {
                "problem": "The variety of genes within a species is called:",
                "difficulty": "medium",
                "options": [
                    "Species diversity",
                    "Genetic diversity",
                    "Ecosystem diversity",
                    "Biodiversity"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Biodiversity levels"],
                    "find": "Gene variety term",
                    "principle": "Genetic diversity refers to the variety of genes within a particular species, population, or variety, representing the fundamental level of biodiversity that enables adaptation and evolution.",
                    "steps": [
                        {
                            "step": "Analyze biodiversity components",
                            "work": "Species diversity is between species; ecosystem diversity is between ecosystems; biodiversity is overall term. Only genetic diversity refers to gene variety within species.",
                            "result": "Genetic diversity is correct"
                        }
                    ],
                    "answer": "Genetic diversity",
                    "concept": "Biodiversity levels"
                }
            }

        ]
    },

    "human_reproduction": {
        "title": "Human Reproduction",
        "weightage": "4–5%%",
        "introduction": "Human Reproduction covers the biological processes of gamete formation, fertilization, embryonic development, and reproductive health. This unit is crucial for understanding human developmental biology, reproductive physiology, and health issues. NEET questions often focus on hormonal regulation, gametogenesis, embryonic development stages, and reproductive disorders.",

        "topics": [
            {
                "name": "Male Reproductive System",
                "description": "Anatomy and physiology of the male reproductive organs, sperm production, and hormonal regulation.",
                "subtopics": [
                    {
                        "name": "Anatomy",
                        "explanation": "Testes (sperm production), epididymis (sperm maturation), vas deferens (sperm transport), accessory glands (seminal vesicles, prostate, bulbourethral glands), penis. Scrotum maintains optimal temperature for spermatogenesis."
                    },
                    {
                        "name": "Spermatogenesis",
                        "explanation": "Process of sperm formation in seminiferous tubules: spermatogonia → primary spermatocyte → secondary spermatocyte → spermatids → spermatozoa. Takes about 74 days. Involves meiosis and spermiogenesis."
                    },
                    {
                        "name": "Hormonal Regulation",
                        "explanation": "Hypothalamus (GnRH) → pituitary (FSH, LH) → testes. FSH stimulates Sertoli cells for spermatogenesis. LH stimulates Leydig cells for testosterone production. Testosterone maintains secondary sexual characteristics."
                    }
                ]
            },
            {
                "name": "Female Reproductive System",
                "description": "Anatomy and physiology of the female reproductive organs, oogenesis, menstrual cycle, and hormonal regulation.",
                "subtopics": [
                    {
                        "name": "Anatomy",
                        "explanation": "Ovaries (egg production), fallopian tubes (fertilization site), uterus (implantation and development), cervix, vagina. Mammary glands for lactation."
                    },
                    {
                        "name": "Oogenesis",
                        "explanation": "Process of egg formation: oogonia → primary oocyte (arrested in prophase I) → secondary oocyte (arrested in metaphase II) → ovum. Begins in fetal life, completes after fertilization."
                    },
                    {
                        "name": "Menstrual Cycle",
                        "explanation": "28-day cycle: menstrual phase (days 1-5), follicular phase (days 1-13), ovulation (day 14), luteal phase (days 15-28). Regulated by FSH, LH, estrogen, progesterone."
                    },
                    {
                        "name": "Hormonal Regulation",
                        "explanation": "Hypothalamus (GnRH) → pituitary (FSH, LH) → ovaries. FSH stimulates follicular development. LH surge causes ovulation. Estrogen and progesterone regulate cycle and prepare uterus."
                    }
                ]
            },
            {
                "name": "Fertilization and Implantation",
                "description": "Process of sperm-egg fusion, early embryonic development, and attachment to uterine wall.",
                "subtopics": [
                    {
                        "name": "Fertilization",
                        "explanation": "Sperm capacitation → acrosomal reaction → penetration → fusion → cortical reaction → zygote formation. Occurs in ampulla of fallopian tube. Restores diploid chromosome number."
                    },
                    {
                        "name": "Cleavage and Blastocyst Formation",
                        "explanation": "Zygote → 2-cell → 4-cell → 8-cell → morula → blastocyst. Blastocyst has trophoblast (forms placenta) and inner cell mass (forms embryo). Reaches uterus in 5-7 days."
                    },
                    {
                        "name": "Implantation",
                        "explanation": "Blastocyst attaches to endometrium (day 6-7 after fertilization). Trophoblast cells invade endometrium. Forms connection with maternal blood supply. hCG secretion begins."
                    }
                ]
            },
            {
                "name": "Pregnancy and Embryonic Development",
                "description": "Stages of embryonic and fetal development, placental formation, and hormonal changes during pregnancy.",
                "subtopics": [
                    {
                        "name": "Placenta Formation",
                        "explanation": "Chorionic villi + uterine tissue = placenta. Functions: nutrient/ gas exchange, waste removal, hormone production (hCG, progesterone, estrogen), barrier function."
                    },
                    {
                        "name": "Embryonic Development",
                        "explanation": "Weeks 1-8: organogenesis. Germ layers: ectoderm (nervous system, skin), mesoderm (muscles, bones, circulatory), endoderm (digestive, respiratory). Critical period for teratogens."
                    },
                    {
                        "name": "Fetal Development",
                        "explanation": "Weeks 9-38: growth and maturation. Month 3: sex differentiation. Month 4-5: quickening. Month 6: viability. Month 7-9: rapid growth and lung maturation."
                    },
                    {
                        "name": "Hormonal Changes",
                        "explanation": "hCG maintains corpus luteum initially. Placenta produces progesterone, estrogen, hPL. Relaxin loosens pelvic ligaments. Oxytocin and prolactin prepare for lactation."
                    }
                ]
            },
            {
                "name": "Parturition and Lactation",
                "description": "Process of childbirth, hormonal control of labor, and milk production.",
                "subtopics": [
                    {
                        "name": "Parturition",
                        "explanation": "Process of childbirth: dilation stage (cervix dilates), expulsion stage (baby delivered), placental stage (afterbirth). Controlled by oxytocin and prostaglandins. Feedback mechanism."
                    },
                    {
                        "name": "Lactation",
                        "explanation": "Mammary gland development during pregnancy. Colostrum first milk (rich antibodies). Milk production stimulated by prolactin. Milk ejection reflex by oxytocin."
                    }
                ]
            },
            {
                "name": "Reproductive Health",
                "description": "Issues related to sexual health, contraception, infertility, and sexually transmitted diseases.",
                "subtopics": [
                    {
                        "name": "Contraception",
                        "explanation": "Natural (rhythm, withdrawal), barrier (condoms, diaphragm), IUDs, hormonal (pills, implants), surgical (vasectomy, tubectomy). Emergency contraception."
                    },
                    {
                        "name": "Infertility",
                        "explanation": "ART: IVF, ZIFT, GIFT, ICSI, AI. Surrogacy. Causes: low sperm count, tubal blockage, endometriosis, ovulation disorders."
                    },
                    {
                        "name": "STDs",
                        "explanation": "Bacterial: gonorrhea, syphilis, chlamydia. Viral: HIV, herpes, HPV. Protozoan: trichomoniasis. Prevention: condoms, vaccination (HPV), awareness."
                    },
                    {
                        "name": "Pregnancy-related Issues",
                        "explanation": "Ectopic pregnancy, miscarriage, preeclampsia, gestational diabetes. Prenatal care, nutrition, and screening important."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Gametogenesis": [
                {
                    "name": "Spermatogenesis vs Oogenesis",
                    "description": "Spermatogenesis produces 4 sperm continuously; oogenesis produces 1 egg per cycle with unequal division"
                },
                {
                    "name": "Hormonal Control",
                    "description": "FSH and LH regulate both processes with different target cells and outcomes"
                }
            ],
            "Menstrual Cycle": [
                {
                    "name:": "Phase Regulation",
                    "description": "Follicular phase: FSH/estrogen dominant; Luteal phase: LH/progesterone dominant"
                },
                {
                    "name": "Ovulation Trigger",
                    "description": "LH surge causes ovulation and corpus luteum formation"
                }
            ],
            "Embryonic Development": [
                {
                    "name": "Germ Layer Formation",
                    "description": "Ectoderm, mesoderm, endoderm give rise to all tissues and organs"
                },
                {
                    "name": "Placental Function",
                    "description": "Critical for nutrient exchange, hormone production, and fetal protection"
                }
            ]
        },

        "problems": [
            {
                "problem": "The hormone that maintains the corpus luteum during early pregnancy is:",
                "difficulty": "medium",
                "options": [
                    "FSH",
                    "LH",
                    "hCG",
                    "Progesterone"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Pregnancy hormones"],
                    "find": "Corpus luteum maintenance hormone",
                    "principle": "Human Chorionic Gonadotropin (hCG) is produced by the developing placenta and maintains the corpus luteum during early pregnancy, allowing it to continue producing progesterone until the placenta takes over.",
                    "steps": [
                        {
                            "step": "Analyze hormonal functions",
                            "work": "FSH and LH are pituitary hormones; progesterone is produced by corpus luteum. Only hCG maintains corpus luteum in early pregnancy.",
                            "result": "hCG is correct"
                        }
                    ],
                    "answer": "hCG",
                    "concept": "Pregnancy hormones"
                }
            },
            {
                "problem": "Fertilization in humans typically occurs in the:",
                "difficulty": "easy",
                "options": [
                    "Ovary",
                    "Uterus",
                    "Ampulla of fallopian tube",
                    "Cervix"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Fertilization site"],
                    "find": "Location of fertilization",
                    "principle": "Fertilization occurs in the ampulla of the fallopian tube, which is the widest section where sperm meets egg. The fertilized egg then travels to the uterus for implantation.",
                    "steps": [
                        {
                            "step": "Analyze reproductive anatomy",
                            "work": "Ovary releases egg; uterus is for implantation; cervix is entrance to uterus. Only fallopian tube is site of fertilization.",
                            "result": "Ampulla of fallopian tube is correct"
                        }
                    ],
                    "answer": "Ampulla of fallopian tube",
                    "concept": "Fertilization"
                }
            },
            {
                "problem": "Which cells produce testosterone in the testes?",
                "difficulty": "medium",
                "options": [
                    "Sertoli cells",
                    "Leydig cells",
                    "Spermatogonia",
                    "Spermatocytes"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Testicular function"],
                    "find": "Testosterone-producing cells",
                    "principle": "Leydig cells (interstitial cells) in the testes produce testosterone in response to LH stimulation. Testosterone is essential for spermatogenesis and male secondary sexual characteristics.",
                    "steps": [
                        {
                            "step": "Analyze testicular cell functions",
                            "work": "Sertoli cells support spermatogenesis; spermatogonia and spermatocytes are sperm precursors. Only Leydig cells produce testosterone.",
                            "result": "Leydig cells is correct"
                        }
                    ],
                    "answer": "Leydig cells",
                    "concept": "Male reproductive physiology"
                }
            },
            {
                "problem": "The process of sperm formation is called:",
                "difficulty": "easy",
                "options": [
                    "Oogenesis",
                    "Spermatogenesis",
                    "Spermiogenesis",
                    "Gametogenesis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Gamete production"],
                    "find": "Sperm formation process",
                    "principle": "Spermatogenesis is the complete process of sperm production in the testes, involving mitosis, meiosis, and differentiation to form mature spermatozoa from spermatogonial stem cells.",
                    "steps": [
                        {
                            "step": "Analyze gametogenesis terms",
                            "work": "Oogenesis is egg formation; spermiogenesis is final sperm maturation; gametogenesis is general term. Only spermatogenesis specifically means sperm formation.",
                            "result": "Spermatogenesis is correct"
                        }
                    ],
                    "answer": "Spermatogenesis",
                    "concept": "Male gametogenesis"
                }
            },
            {
                "problem": "Which hormone triggers ovulation?",
                "difficulty": "medium",
                "options": [
                    "FSH",
                    "LH surge",
                    "Estrogen",
                    "Progesterone"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Ovulation control"],
                    "find": "Ovulation-triggering hormone",
                    "principle": "The LH (Luteinizing Hormone) surge, triggered by rising estrogen levels from the dominant follicle, causes ovulation by stimulating the final maturation and rupture of the follicle.",
                    "steps": [
                        {
                            "step": "Analyze menstrual cycle hormones",
                            "work": "FSH stimulates follicular development; estrogen prepares endometrium; progesterone maintains pregnancy. Only LH surge triggers ovulation.",
                            "result": "LH surge is correct"
                        }
                    ],
                    "answer": "LH surge",
                    "concept": "Female reproductive physiology"
                }
            },
            {
                "problem": "The outer layer of the blastocyst that implants in the uterus is called:",
                "difficulty": "medium",
                "options": [
                    "Ectoderm",
                    "Trophoblast",
                    "Endoderm",
                    "Inner cell mass"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Early development"],
                    "find": "Blastocyst implantation layer",
                    "principle": "The trophoblast is the outer layer of the blastocyst that attaches to and invades the uterine endometrium during implantation, eventually forming the fetal part of the placenta.",
                    "steps": [
                        {
                            "step": "Analyze blastocyst structure",
                            "work": "Ectoderm, endoderm, and inner cell mass form the embryo proper. Only trophoblast is involved in implantation and placental formation.",
                            "result": "Trophoblast is correct"
                        }
                    ],
                    "answer": "Trophoblast",
                    "concept": "Implantation"
                }
            },
            {
                "problem": "Which of the following is NOT a method of contraception?",
                "difficulty": "easy",
                "options": [
                    "IUD",
                    "ART",
                    "Condom",
                    "Oral pills"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Reproductive health"],
                    "find": "Non-contraceptive method",
                    "principle": "ART (Assisted Reproductive Technology) includes methods like IVF to help achieve pregnancy, not prevent it. IUDs, condoms, and oral pills are all contraceptive methods.",
                    "steps": [
                        {
                            "step": "Analyze reproductive technologies",
                            "work": "IUD, condom, and oral pills prevent pregnancy. ART helps overcome infertility to achieve pregnancy.",
                            "result": "ART is correct answer"
                        }
                    ],
                    "answer": "ART",
                    "concept": "Contraception"
                }
            },
            {
                "problem": "The stage of embryonic development where germ layers form is called:",
                "difficulty": "hard",
                "options": [
                    "Cleavage",
                    "Gastrulation",
                    "Neurulation",
                    "Organogenesis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Embryonic development"],
                    "find": "Germ layer formation stage",
                    "principle": "Gastrulation is the process where the blastula reorganizes into three germ layers: ectoderm, mesoderm, and endoderm, which give rise to all tissues and organs of the body.",
                    "steps": [
                        {
                            "step": "Analyze developmental stages",
                            "work": "Cleavage is cell division; neurulation forms neural tube; organogenesis forms organs. Only gastrulation establishes germ layers.",
                            "result": "Gastrulation is correct"
                        }
                    ],
                    "answer": "Gastrulation",
                    "concept": "Embryonic development"
                }
            },
            {
                "problem": "Which hormone is responsible for milk ejection during breastfeeding?",
                "difficulty": "medium",
                "options": [
                    "Prolactin",
                    "Oxytocin",
                    "Estrogen",
                    "Progesterone"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Lactation hormones"],
                    "find": "Milk ejection hormone",
                    "principle": "Oxytocin causes the milk ejection reflex (let-down reflex) by stimulating contraction of myoepithelial cells around mammary alveoli, pushing milk into ducts for breastfeeding.",
                    "steps": [
                        {
                            "step": "Analyze lactation physiology",
                            "work": "Prolactin produces milk; estrogen and progesterone prepare breasts. Only oxytocin causes milk ejection.",
                            "result": "Oxytocin is correct"
                        }
                    ],
                    "answer": "Oxytocin",
                    "concept": "Lactation"
                }
            },
            {
                "problem": "The primary oocyte is arrested in which stage of meiosis?",
                "difficulty": "hard",
                "options": [
                    "Prophase I",
                    "Metaphase I",
                    "Prophase II",
                    "Metaphase II"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Oogenesis"],
                    "find": "Primary oocyte arrest stage",
                    "principle": "Primary oocytes are arrested in prophase of meiosis I from fetal life until puberty. Each month after puberty, one primary oocyte completes meiosis I and arrests again in metaphase II until fertilization.",
                    "steps": [
                        {
                            "step": "Analyze oocyte development",
                            "work": "Primary oocyte arrests in prophase I; secondary oocyte arrests in metaphase II. The first arrest is in prophase I.",
                            "result": "Prophase I is correct"
                        }
                    ],
                    "answer": "Prophase I",
                    "concept": "Oogenesis"
                }
            },
            {
                "problem": "The hormone responsible for the development of secondary sexual characteristics in males is:",
                "difficulty": "easy",
                "options": [
                    "Estrogen",
                    "Progesterone",
                    "Testosterone",
                    "Prolactin"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Hormonal regulation"],
                    "find": "Hormone for male secondary characteristics",
                    "principle": "Testosterone, produced by Leydig cells in the testes, is responsible for the development of male secondary sexual characteristics such as facial hair, deepening voice, and muscle growth during puberty.",
                    "steps": [
                        {
                            "step": "Analyze hormone functions",
                            "work": "Estrogen and progesterone are female hormones; prolactin is for milk production. Only testosterone develops male secondary characteristics.",
                            "result": "Testosterone is correct"
                        }
                    ],
                    "answer": "Testosterone",
                    "concept": "Hormonal regulation"
                }
            },
            {
                "problem": "The process of formation of mature sperm from spermatids is called:",
                "difficulty": "medium",
                "options": [
                    "Spermatogenesis",
                    "Spermiogenesis",
                    "Oogenesis",
                    "Gametogenesis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Sperm development"],
                    "find": "Spermatid to sperm transformation",
                    "principle": "Spermiogenesis is the final stage of spermatogenesis where spermatids undergo morphological changes to become mature spermatozoa, including development of acrosome and flagellum.",
                    "steps": [
                        {
                            "step": "Analyze sperm development stages",
                            "work": "Spermatogenesis is the entire process; oogenesis is egg formation; gametogenesis is general term. Only spermiogenesis describes spermatid maturation.",
                            "result": "Spermiogenesis is correct"
                        }
                    ],
                    "answer": "Spermiogenesis",
                    "concept": "Spermatogenesis"
                }
            },
            {
                "problem": "Which structure is formed after fertilization and contains the developing embryo?",
                "difficulty": "easy",
                "options": [
                    "Zygote",
                    "Morula",
                    "Blastocyst",
                    "Gastrula"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Early development"],
                    "find": "Immediate post-fertilization structure",
                    "principle": "The zygote is formed immediately after fertilization when sperm and egg nuclei fuse, containing the diploid chromosome number and representing the first cell of the new individual.",
                    "steps": [
                        {
                            "step": "Analyze developmental stages",
                            "work": "Morula forms after cleavages; blastocyst forms later; gastrula forms after implantation. Only zygote forms immediately after fertilization.",
                            "result": "Zygote is correct"
                        }
                    ],
                    "answer": "Zygote",
                    "concept": "Fertilization"
                }
            },
            {
                "problem": "The hormone that stimulates milk production is:",
                "difficulty": "medium",
                "options": [
                    "Oxytocin",
                    "Prolactin",
                    "Estrogen",
                    "Progesterone"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Lactation hormones"],
                    "find": "Milk production hormone",
                    "principle": "Prolactin, secreted by the anterior pituitary, stimulates mammary gland development and milk production (lactogenesis) during pregnancy and after childbirth.",
                    "steps": [
                        {
                            "step": "Analyze lactation physiology",
                            "work": "Oxytocin causes milk ejection; estrogen and progesterone prepare breasts. Only prolactin stimulates milk production.",
                            "result": "Prolactin is correct"
                        }
                    ],
                    "answer": "Prolactin",
                    "concept": "Lactation"
                }
            },
            {
                "problem": "Which of the following is a female secondary sexual characteristic?",
                "difficulty": "easy",
                "options": [
                    "Deep voice",
                    "Facial hair",
                    "Widening of hips",
                    "Adam's apple"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Secondary sexual characteristics"],
                    "find": "Female characteristic",
                    "principle": "Widening of hips is a female secondary sexual characteristic that develops during puberty under estrogen influence, preparing the body for childbirth.",
                    "steps": [
                        {
                            "step": "Analyze sexual characteristics",
                            "work": "Deep voice, facial hair, and Adam's apple are male characteristics. Only hip widening is female.",
                            "result": "Widening of hips is correct"
                        }
                    ],
                    "answer": "Widening of hips",
                    "concept": "Puberty changes"
                }
            },
            {
                "problem": "The process of embryo attachment to the uterine wall is called:",
                "difficulty": "medium",
                "options": [
                    "Fertilization",
                    "Implantation",
                    "Ovulation",
                    "Gestation"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Early pregnancy"],
                    "find": "Uterine attachment process",
                    "principle": "Implantation is the process where the blastocyst attaches to and embeds into the uterine endometrium, occurring about 6-7 days after fertilization and essential for pregnancy establishment.",
                    "steps": [
                        {
                            "step": "Analyze reproductive processes",
                            "work": "Fertilization is sperm-egg fusion; ovulation is egg release; gestation is pregnancy period. Only implantation describes uterine attachment.",
                            "result": "Implantation is correct"
                        }
                    ],
                    "answer": "Implantation",
                    "concept": "Implantation"
                }
            },
            {
                "problem": "Which cells provide nourishment to developing sperm cells?",
                "difficulty": "medium",
                "options": [
                    "Leydig cells",
                    "Sertoli cells",
                    "Spermatogonia",
                    "Interstitial cells"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Testicular function"],
                    "find": "Sperm nourishing cells",
                    "principle": "Sertoli cells (nurse cells) in seminiferous tubules provide physical support, nourishment, and protection to developing sperm cells through the blood-testis barrier.",
                    "steps": [
                        {
                            "step": "Analyze testicular cell functions",
                            "work": "Leydig/interstitial cells produce testosterone; spermatogonia are sperm precursors. Only Sertoli cells nourish developing sperm.",
                            "result": "Sertoli cells is correct"
                        }
                    ],
                    "answer": "Sertoli cells",
                    "concept": "Spermatogenesis"
                }
            },
            {
                "problem": "The stage where the embryo develops three germ layers is called:",
                "difficulty": "hard",
                "options": [
                    "Blastula",
                    "Gastrula",
                    "Morula",
                    "Neurula"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Embryonic development"],
                    "find": "Germ layer formation stage",
                    "principle": "The gastrula stage is characterized by the formation of three primary germ layers (ectoderm, mesoderm, endoderm) through the process of gastrulation, which give rise to all tissues and organs.",
                    "steps": [
                        {
                            "step": "Analyze developmental stages",
                            "work": "Blastula is hollow ball; morula is solid ball; neurula forms neural tube. Only gastrula has three germ layers.",
                            "result": "Gastrula is correct"
                        }
                    ],
                    "answer": "Gastrula",
                    "concept": "Embryonic development"
                }
            },
            {
                "problem": "Which hormone is tested for in pregnancy tests?",
                "difficulty": "easy",
                "options": [
                    "Estrogen",
                    "Progesterone",
                    "hCG",
                    "LH"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Pregnancy detection"],
                    "find": "Pregnancy test hormone",
                    "principle": "Human Chorionic Gonadotropin (hCG) is produced by the placenta shortly after implantation and is detected in urine and blood pregnancy tests, making it the biomarker for pregnancy detection.",
                    "steps": [
                        {
                            "step": "Analyze pregnancy hormones",
                            "work": "Estrogen and progesterone are present but not specific; LH is for ovulation. Only hCG is pregnancy-specific and used in tests.",
                            "result": "hCG is correct"
                        }
                    ],
                    "answer": "hCG",
                    "concept": "Pregnancy detection"
                }
            },
            {
                "problem": "The process of egg formation is called:",
                "difficulty": "easy",
                "options": [
                    "Spermatogenesis",
                    "Oogenesis",
                    "Spermiogenesis",
                    "Gametogenesis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Gamete production"],
                    "find": "Egg formation process",
                    "principle": "Oogenesis is the process of egg (ovum) formation in the ovaries, involving meiosis and cytoplasmic changes to produce a haploid gamete capable of being fertilized.",
                    "steps": [
                        {
                            "step": "Analyze gametogenesis terms",
                            "work": "Spermatogenesis is sperm formation; spermiogenesis is sperm maturation; gametogenesis is general term. Only oogenesis means egg formation.",
                            "result": "Oogenesis is correct"
                        }
                    ],
                    "answer": "Oogenesis",
                    "concept": "Oogenesis"
                }
            },
            {
                "problem": "Which structure prevents polyspermy after fertilization?",
                "difficulty": "hard",
                "options": [
                    "Zona pellucida",
                    "Corona radiata",
                    "Acrosome",
                    "Cortical granules"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Fertilization mechanisms"],
                    "find": "Polyspermy prevention structure",
                    "principle": "Cortical granules in the egg cytoplasm release enzymes that modify the zona pellucida after fertilization, creating a fertilization membrane that prevents additional sperm from entering (block to polyspermy).",
                    "steps": [
                        {
                            "step": "Analyze fertilization events",
                            "work": "Zona pellucida is penetrated; corona radiata is outer layer; acrosome is sperm structure. Only cortical granules prevent polyspermy.",
                            "result": "Cortical granules is correct"
                        }
                    ],
                    "answer": "Cortical granules",
                    "concept": "Fertilization"
                }
            },
            {
                "problem": "The phase of menstrual cycle when progesterone levels are highest is:",
                "difficulty": "medium",
                "options": [
                    "Menstrual phase",
                    "Proliferative phase",
                    "Ovulatory phase",
                    "Secretory phase"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Menstrual cycle hormones"],
                    "find": "High progesterone phase",
                    "principle": "The secretory (luteal) phase, days 15-28, has the highest progesterone levels produced by the corpus luteum, which prepares the endometrium for possible implantation.",
                    "steps": [
                        {
                            "step": "Analyze menstrual phases",
                            "work": "Menstrual phase has low hormones; proliferative phase has estrogen; ovulatory phase has LH surge. Only secretory phase has high progesterone.",
                            "result": "Secretory phase is correct"
                        }
                    ],
                    "answer": "Secretory phase",
                    "concept": "Menstrual cycle"
                }
            },
            {
                "problem": "Which germ layer gives rise to the nervous system?",
                "difficulty": "medium",
                "options": [
                    "Ectoderm",
                    "Mesoderm",
                    "Endoderm",
                    "Trophoderm"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Germ layer derivatives"],
                    "find": "Nervous system origin",
                    "principle": "The ectoderm, the outermost germ layer, gives rise to the entire nervous system (brain, spinal cord, nerves), epidermis, and sensory organs.",
                    "steps": [
                        {
                            "step": "Analyze germ layer fates",
                            "work": "Mesoderm forms muscles/bones; endoderm forms gut/lungs; trophoderm is not a germ layer. Only ectoderm forms nervous system.",
                            "result": "Ectoderm is correct"
                        }
                    ],
                    "answer": "Ectoderm",
                    "concept": "Embryonic development"
                }
            },
            {
                "problem": "The hormone that stimulates follicle development in ovaries is:",
                "difficulty": "medium",
                "options": [
                    "LH",
                    "FSH",
                    "Estrogen",
                    "Progesterone"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Ovarian cycle"],
                    "find": "Follicle stimulating hormone",
                    "principle": "Follicle Stimulating Hormone (FSH) from the anterior pituitary stimulates the growth and development of ovarian follicles in the first half of the menstrual cycle.",
                    "steps": [
                        {
                            "step": "Analyze ovarian hormones",
                            "work": "LH triggers ovulation; estrogen and progesterone are ovarian hormones. Only FSH stimulates follicle development.",
                            "result": "FSH is correct"
                        }
                    ],
                    "answer": "FSH",
                    "concept": "Ovarian cycle"
                }
            },
            {
                "problem": "Which structure is responsible for testosterone production?",
                "difficulty": "easy",
                "options": [
                    "Seminiferous tubules",
                    "Epididymis",
                    "Leydig cells",
                    "Sertoli cells"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Male reproductive physiology"],
                    "find": "Testosterone production site",
                    "principle": "Leydig cells (interstitial cells) in the testes produce testosterone in response to LH stimulation, which is essential for male sexual development and function.",
                    "steps": [
                        {
                            "step": "Analyze testicular functions",
                            "work": "Seminiferous tubules produce sperm; epididymis stores sperm; Sertoli cells support spermatogenesis. Only Leydig cells produce testosterone.",
                            "result": "Leydig cells is correct"
                        }
                    ],
                    "answer": "Leydig cells",
                    "concept": "Hormone production"
                }
            },
            {
                "problem": "The process of sperm gaining ability to fertilize is called:",
                "difficulty": "hard",
                "options": [
                    "Spermatogenesis",
                    "Capacitation",
                    "Acrosomal reaction",
                    "Spermiogenesis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Sperm maturation"],
                    "find": "Fertilization capability process",
                    "principle": "Capacitation is the final maturation process that sperm undergo in the female reproductive tract, involving changes to the sperm membrane that enable them to undergo the acrosomal reaction and fertilize the egg.",
                    "steps": [
                        {
                            "step": "Analyze sperm function processes",
                            "work": "Spermatogenesis is sperm production; acrosomal reaction is penetration; spermiogenesis is morphological maturation. Only capacitation enables fertilization ability.",
                            "result": "Capacitation is correct"
                        }
                    ],
                    "answer": "Capacitation",
                    "concept": "Sperm function"
                }
            },
            {
                "problem": "Which contraceptive method works by preventing implantation?",
                "difficulty": "medium",
                "options": [
                    "Condom",
                    "IUD",
                    "Vasectomy",
                    "Rhythm method"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Contraception mechanisms"],
                    "find": "Implantation prevention method",
                    "principle": "Intrauterine Devices (IUDs), particularly copper IUDs, work primarily by creating a hostile uterine environment that prevents implantation of a fertilized egg, though some may also affect sperm function.",
                    "steps": [
                        {
                            "step": "Analyze contraceptive actions",
                            "work": "Condoms block sperm; vasectomy blocks sperm transport; rhythm method avoids ovulation. Only IUDs prevent implantation.",
                            "result": "IUD is correct"
                        }
                    ],
                    "answer": "IUD",
                    "concept": "Contraception"
                }
            },
            {
                "problem": "The hormone that maintains pregnancy is:",
                "difficulty": "medium",
                "options": [
                    "Estrogen",
                    "Progesterone",
                    "FSH",
                    "LH"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Pregnancy maintenance"],
                    "find": "Pregnancy maintenance hormone",
                    "principle": "Progesterone, produced first by the corpus luteum and later by the placenta, maintains pregnancy by preventing uterine contractions, supporting the endometrium, and suppressing immune rejection of the fetus.",
                    "steps": [
                        {
                            "step": "Analyze pregnancy hormones",
                            "work": "Estrogen supports but doesn't maintain; FSH and LH are for cycle regulation. Only progesterone is essential for pregnancy maintenance.",
                            "result": "Progesterone is correct"
                        }
                    ],
                    "answer": "Progesterone",
                    "concept": "Pregnancy hormones"
                }
            },
            {
                "problem": "Which structure is formed immediately after the morula stage?",
                "difficulty": "hard",
                "options": [
                    "Zygote",
                    "Blastocyst",
                    "Gastrula",
                    "Neurula"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Early development sequence"],
                    "find": "Post-morula stage",
                    "principle": "The blastocyst forms immediately after the morula stage when fluid accumulates within the morula, creating a hollow ball structure with an inner cell mass and trophoblast layer.",
                    "steps": [
                        {
                            "step": "Analyze developmental sequence",
                            "work": "Zygote is first; gastrula and neurula come later. Only blastocyst forms directly from morula.",
                            "result": "Blastocyst is correct"
                        }
                    ],
                    "answer": "Blastocyst",
                    "concept": "Embryonic development"
                }
            },
            {
                "problem": "The process of sperm release from the testes is called:",
                "difficulty": "easy",
                "options": [
                    "Spermatogenesis",
                    "Ejaculation",
                    "Emission",
                    "Spermiation"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Sperm release"],
                    "find": "Testicular sperm release",
                    "principle": "Spermiation is the process where mature sperm are released from Sertoli cells into the lumen of seminiferous tubules, representing the final step of spermatogenesis within the testes.",
                    "steps": [
                        {
                            "step": "Analyze sperm processes",
                            "work": "Spermatogenesis is production; ejaculation is expulsion; emission is movement to urethra. Only spermiation is release from testes.",
                            "result": "Spermiation is correct"
                        }
                    ],
                    "answer": "Spermiation",
                    "concept": "Spermatogenesis"
                }
            },
            {
                "problem": "Which hormone is responsible for the development of female secondary sexual characteristics?",
                "difficulty": "easy",
                "options": [
                    "Testosterone",
                    "Estrogen",
                    "Progesterone",
                    "Prolactin"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Female development"],
                    "find": "Female characteristics hormone",
                    "principle": "Estrogen, produced by the ovaries, is responsible for the development of female secondary sexual characteristics such as breast development, hip widening, and body fat distribution during puberty.",
                    "steps": [
                        {
                            "step": "Analyze hormone functions",
                            "work": "Testosterone is male hormone; progesterone prepares for pregnancy; prolactin is for milk. Only estrogen develops female characteristics.",
                            "result": "Estrogen is correct"
                        }
                    ],
                    "answer": "Estrogen",
                    "concept": "Female development"
                }
            },
            {
                "problem": "The structure that connects the fetus to the placenta is:",
                "difficulty": "easy",
                "options": [
                    "Umbilical cord",
                    "Amnion",
                    "Chorion",
                    "Yolk sac"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Placental anatomy"],
                    "find": "Fetus-placenta connection",
                    "principle": "The umbilical cord contains two umbilical arteries and one umbilical vein, connecting the fetus to the placenta and allowing exchange of nutrients, gases, and wastes between maternal and fetal circulations.",
                    "steps": [
                        {
                            "step": "Analyze fetal membranes",
                            "work": "Amnion is fluid sac; chorion is outer membrane; yolk sac is early structure. Only umbilical cord connects fetus to placenta.",
                            "result": "Umbilical cord is correct"
                        }
                    ],
                    "answer": "Umbilical cord",
                    "concept": "Placental function"
                }
            },
            {
                "problem": "Which phase of the menstrual cycle has the thickest endometrium?",
                "difficulty": "medium",
                "options": [
                    "Menstrual phase",
                    "Proliferative phase",
                    "Ovulatory phase",
                    "Secretory phase"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Endometrial changes"],
                    "find": "Thickest endometrium phase",
                    "principle": "The secretory (luteal) phase has the thickest endometrium due to progesterone stimulation from the corpus luteum, creating optimal conditions for implantation with increased glandular secretion and vascularization.",
                    "steps": [
                        {
                            "step": "Analyze endometrial cycle",
                            "work": "Menstrual phase sheds endometrium; proliferative phase builds it; ovulatory phase is transition. Only secretory phase has fully developed thick endometrium.",
                            "result": "Secretory phase is correct"
                        }
                    ],
                    "answer": "Secretory phase",
                    "concept": "Menstrual cycle"
                }
            },
            {
                "problem": "The process of egg release from the ovary is called:",
                "difficulty": "easy",
                "options": [
                    "Fertilization",
                    "Ovulation",
                    "Implantation",
                    "Oogenesis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Ovarian function"],
                    "find": "Egg release process",
                    "principle": "Ovulation is the process where a mature egg is released from a ovarian follicle, typically occurring around day 14 of a 28-day menstrual cycle in response to the LH surge.",
                    "steps": [
                        {
                            "step": "Analyze reproductive processes",
                            "work": "Fertilization is sperm-egg fusion; implantation is uterine attachment; oogenesis is egg formation. Only ovulation is egg release.",
                            "result": "Ovulation is correct"
                        }
                    ],
                    "answer": "Ovulation",
                    "concept": "Ovulation"
                }
            },
            {
                "problem": "Which structure produces the majority of seminal fluid?",
                "difficulty": "hard",
                "options": [
                    "Testes",
                    "Seminal vesicles",
                    "Prostate gland",
                    "Bulbourethral glands"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Seminal fluid composition"],
                    "find": "Main seminal fluid producer",
                    "principle": "The seminal vesicles produce approximately 60-70% of seminal fluid, including fructose for sperm energy, prostaglandins, and other compounds that support sperm function and viability.",
                    "steps": [
                        {
                            "step": "Analyze accessory gland contributions",
                            "work": "Testes produce sperm; prostate produces 25-30%; bulbourethral glands produce 5%. Seminal vesicles are the major contributors.",
                            "result": "Seminal vesicles is correct"
                        }
                    ],
                    "answer": "Seminal vesicles",
                    "concept": "Male reproductive anatomy"
                }
            },
            {
                "problem": "The hormone that stimulates uterine contractions during labor is:",
                "difficulty": "medium",
                "options": [
                    "Estrogen",
                    "Progesterone",
                    "Oxytocin",
                    "Prolactin"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Labor hormones"],
                    "find": "Uterine contraction hormone",
                    "principle": "Oxytocin, produced by the posterior pituitary, stimulates powerful uterine contractions during labor and also causes milk ejection during breastfeeding through a positive feedback mechanism.",
                    "steps": [
                        {
                            "step": "Analyze parturition hormones",
                            "work": "Estrogen prepares uterus; progesterone maintains pregnancy; prolactin produces milk. Only oxytocin causes contractions.",
                            "result": "Oxytocin is correct"
                        }
                    ],
                    "answer": "Oxytocin",
                    "concept": "Parturition"
                }
            },
            {
                "problem": "Which germ layer gives rise to muscles and bones?",
                "difficulty": "medium",
                "options": [
                    "Ectoderm",
                    "Mesoderm",
                    "Endoderm",
                    "Trophoderm"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Germ layer derivatives"],
                    "find": "Muscle and bone origin",
                    "principle": "The mesoderm, the middle germ layer, gives rise to muscles, bones, connective tissues, circulatory system, and most of the excretory and reproductive systems.",
                    "steps": [
                        {
                            "step": "Analyze germ layer fates",
                            "work": "Ectoderm forms nervous system; endoderm forms gut; trophoderm is not a germ layer. Only mesoderm forms muscles and bones.",
                            "result": "Mesoderm is correct"
                        }
                    ],
                    "answer": "Mesoderm",
                    "concept": "Embryonic development"
                }
            },
            {
                "problem": "The structure that nourishes the early embryo before placenta formation is:",
                "difficulty": "hard",
                "options": [
                    "Amnion",
                    "Yolk sac",
                    "Chorion",
                    "Corpus luteum"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Early embryonic support"],
                    "find": "Early embryo nourishment",
                    "principle": "The yolk sac provides nourishment to the early embryo before the placenta is fully functional, and it also contributes to blood cell formation and germ cell development.",
                    "steps": [
                        {
                            "step": "Analyze embryonic support structures",
                            "work": "Amnion protects; chorion forms placenta; corpus luteum produces hormones. Only yolk sac provides early nourishment.",
                            "result": "Yolk sac is correct"
                        }
                    ],
                    "answer": "Yolk sac",
                    "concept": "Embryonic development"
                }
            },
            {
                "problem": "Which contraceptive method is permanent for males?",
                "difficulty": "easy",
                "options": [
                    "Condom",
                    "Vasectomy",
                    "Withdrawal",
                    "Rhythm method"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Male contraception"],
                    "find": "Permanent male method",
                    "principle": "Vasectomy is a permanent male contraceptive method where the vas deferens is cut or blocked, preventing sperm from entering the ejaculate while maintaining testosterone production and sexual function.",
                    "steps": [
                        {
                            "step": "Analyze contraceptive methods",
                            "work": "Condom is barrier; withdrawal and rhythm are behavioral. Only vasectomy is permanent for males.",
                            "result": "Vasectomy is correct"
                        }
                    ],
                    "answer": "Vasectomy",
                    "concept": "Contraception"
                }
            },
            {
                "problem": "The hormone that causes development of corpus luteum is:",
                "difficulty": "hard",
                "options": [
                    "FSH",
                    "LH",
                    "Estrogen",
                    "Progesterone"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Corpus luteum formation"],
                    "find": "Corpus luteum development hormone",
                    "principle": "Luteinizing Hormone (LH) not only triggers ovulation but also stimulates the transformation of the ruptured follicle into the corpus luteum, which then produces progesterone.",
                    "steps": [
                        {
                            "step": "Analyze ovarian cycle hormones",
                            "work": "FSH develops follicles; estrogen is follicular product; progesterone is luteal product. Only LH causes corpus luteum formation.",
                            "result": "LH is correct"
                        }
                    ],
                    "answer": "LH",
                    "concept": "Ovarian cycle"
                }
            },
            {
                "problem": "Which structure is the site of sperm maturation and storage?",
                "difficulty": "medium",
                "options": [
                    "Testes",
                    "Epididymis",
                    "Vas deferens",
                    "Seminal vesicles"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Sperm maturation"],
                    "find": "Sperm storage site",
                    "principle": "The epididymis is where sperm complete their maturation, develop motility, and are stored until ejaculation, with the process taking about 2-3 weeks.",
                    "steps": [
                        {
                            "step": "Analyze male reproductive tract",
                            "work": "Testes produce sperm; vas deferens transports; seminal vesicles produce fluid. Only epididymis matures and stores sperm.",
                            "result": "Epididymis is correct"
                        }
                    ],
                    "answer": "Epididymis",
                    "concept": "Sperm maturation"
                }
            }
        ]
    },

    "reproductive_health": {
        "title": "Reproductive Health",
        "weightage": "3–4%",
        "introduction": "Reproductive Health covers aspects of physical, emotional, and social well-being related to the reproductive system. This unit includes family planning, sexually transmitted infections, infertility, and ethical issues in reproductive medicine. NEET questions often focus on contraceptive methods, STI prevention, assisted reproductive technologies, and public health programs.",

        "topics": [
            {
                "name": "Concept of Reproductive Health",
                "description": "Basic principles and components of reproductive health as defined by WHO and implemented in national programs.",
                "subtopics": [
                    {
                        "name": "Definition and Scope",
                        "explanation": "Reproductive health implies that people can have a satisfying and safe sex life, capability to reproduce, and freedom to decide if, when and how often to do so. Includes: family planning, maternal health, STI prevention, and infertility management."
                    },
                    {
                        "name": "Importance and Needs",
                        "explanation": "Essential for gender equality, women's empowerment, poverty reduction, and sustainable development. Reduces maternal and infant mortality, prevents STIs including HIV/AIDS, and promotes healthy families."
                    }
                ]
            },
            {
                "name": "Family Planning and Contraception",
                "description": "Methods and programs to control fertility and plan family size, including various contraceptive technologies.",
                "subtopics": [
                    {
                        "name": "Natural Methods",
                        "explanation": "Periodic abstinence (rhythm method), withdrawal (coitus interruptus), lactational amenorrhea method (LAM). Based on avoiding intercourse during fertile periods."
                    },
                    {
                        "name": "Barrier Methods",
                        "explanation": "Condoms (male and female), diaphragm, cervical cap, spermicides. Prevent sperm from reaching egg. Condoms also protect against STIs."
                    },
                    {
                        "name": "Intrauterine Devices (IUDs)",
                        "explanation": "Copper T (non-hormonal, prevents implantation), hormonal IUDs (release progestin, thicken cervical mucus). Long-acting reversible contraception."
                    },
                    {
                        "name": "Hormonal Methods",
                        "explanation": "Oral contraceptive pills (combined and progestin-only), injectables (Depo-Provera), implants (Norplant), patches, vaginal rings. Prevent ovulation and alter reproductive tract environment."
                    },
                    {
                        "name": "Permanent Methods",
                        "explanation": "Surgical sterilization: tubectomy (female), vasectomy (male). Highly effective but usually irreversible."
                    },
                    {
                        "name": "Emergency Contraception",
                        "explanation": "Pills taken within 72-120 hours after unprotected intercourse to prevent pregnancy. Not for regular use."
                    }
                ]
            },
            {
                "name": "Sexually Transmitted Infections (STIs)",
                "description": "Infections spread through sexual contact, their prevention, symptoms, and treatment.",
                "subtopics": [
                    {
                        "name": "Bacterial STIs",
                        "explanation": "Gonorrhea, Syphilis, Chlamydia, Chancroid. Curable with antibiotics but can cause serious complications if untreated."
                    },
                    {
                        "name": "Viral STIs",
                        "explanation": "HIV/AIDS, Herpes, HPV (causes genital warts and cervical cancer), Hepatitis B. Manageable but not curable; vaccines available for some."
                    },
                    {
                        "name": "Protozoan STIs",
                        "explanation": "Trichomoniasis. Curable with specific antimicrobial treatment."
                    },
                    {
                        "name": "Prevention and Control",
                        "explanation": "Abstinence, mutual monogamy, correct condom use, vaccination (HPV, Hepatitis B), regular testing, partner notification and treatment."
                    }
                ]
            },
            {
                "name": "Infertility and Assisted Reproductive Technologies (ART)",
                "description": "Causes of infertility and medical interventions to achieve pregnancy.",
                "subtopics": [
                    {
                        "name": "Causes of Infertility",
                        "explanation": "Male factors: low sperm count, poor motility, anatomical problems. Female factors: ovulation disorders, tubal blockage, endometriosis, uterine problems. Unexplained infertility."
                    },
                    {
                        "name": "Assisted Reproductive Technologies",
                        "explanation": "IVF (In Vitro Fertilization): egg and sperm combined outside body. ZIFT (Zygote Intrafallopian Transfer), GIFT (Gamete Intrafallopian Transfer), ICSI (Intracytoplasmic Sperm Injection), AI (Artificial Insemination)."
                    },
                    {
                        "name": "Other Interventions",
                        "explanation": "Fertility drugs to stimulate ovulation, surgery to correct anatomical problems, surrogacy, sperm/egg donation."
                    }
                ]
            },
            {
                "name": "Maternal and Child Health",
                "description": "Health care during pregnancy, childbirth, and postnatal period for mother and baby.",
                "subtopics": [
                    {
                        "name": "Prenatal Care",
                        "explanation": "Regular check-ups, nutrition supplementation (iron, folic acid), screening tests, immunization, education about pregnancy and childbirth."
                    },
                    {
                        "name": "Safe Delivery Practices",
                        "explanation": "Skilled birth attendance, clean delivery practices, emergency obstetric care, postnatal care for mother and newborn."
                    },
                    {
                        "name": "Child Health",
                        "explanation": "Immunization, nutrition (breastfeeding, complementary feeding), growth monitoring, prevention and treatment of childhood illnesses."
                    }
                ]
            },
            {
                "name": "Reproductive Health Programs and Ethics",
                "description": "National and international initiatives, and ethical considerations in reproductive health.",
                "subtopics": [
                    {
                        "name": "National Programs",
                        "explanation": "Reproductive and Child Health (RCH) Program, Family Welfare Program, National AIDS Control Program, Adolescent Reproductive and Sexual Health (ARSH) initiatives."
                    },
                    {
                        "name": "International Efforts",
                        "explanation": "WHO reproductive health strategy, UNFPA programs, Millennium Development Goals (now Sustainable Development Goals) related to maternal health and gender equality."
                    },
                    {
                        "name": "Ethical Issues",
                        "explanation": "Contraceptive access for adolescents, abortion rights, sex selection, surrogacy, genetic testing, informed consent in reproductive decisions."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Contraceptive Methods": [
                {
                    "name": "Mechanism of Action",
                    "description": "Different methods work by preventing ovulation, blocking sperm, or preventing implantation"
                },
                {
                    "name": "Effectiveness and Safety",
                    "description": "Varying efficacy rates and side effects; choice depends on individual needs and health status"
                }
            ],
            "STI Prevention": [
                {
                    "name": "Transmission Routes",
                    "description": "Sexual contact, blood products, mother-to-child transmission; different prevention strategies for each"
                },
                {
                    "name": "Comprehensive Approach",
                    "description": "Combination of education, testing, treatment, and partner management for effective control"
                }
            ],
            "Infertility Management": [
                {
                    "name": "Diagnostic Approach",
                    "description": "Systematic evaluation of both partners to identify treatable causes"
                },
                {
                    "name": "Technology Options",
                    "description": "Range from simple interventions to complex assisted reproductive procedures"
                }
            ]
        },

        "problems": [
            {
                "problem": "Which contraceptive method also provides protection against sexually transmitted infections?",
                "difficulty": "easy",
                "options": [
                    "Oral pills",
                    "IUD",
                    "Condom",
                    "Tubectomy"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Contraceptive methods"],
                    "find": "STI protection method",
                    "principle": "Condoms (both male and female) provide a physical barrier that prevents exchange of bodily fluids, offering protection against sexually transmitted infections including HIV, in addition to preventing pregnancy.",
                    "steps": [
                        {
                            "step": "Analyze contraceptive properties",
                            "work": "Oral pills and IUDs prevent pregnancy only; tubectomy is permanent sterilization. Only condoms provide dual protection.",
                            "result": "Condom is correct"
                        }
                    ],
                    "answer": "Condom",
                    "concept": "Contraception and STI prevention"
                }
            },
            {
                "problem": "Which STI is caused by a bacterium and can lead to pelvic inflammatory disease if untreated?",
                "difficulty": "medium",
                "options": [
                    "HIV/AIDS",
                    "Herpes",
                    "Chlamydia",
                    "Hepatitis B"
                ],
                "correct": 2,
                "solution": {
                    "given": ["STI complications"],
                    "find": "Bacterial STI causing PID",
                    "principle": "Chlamydia trachomatis infection is a common bacterial STI that often presents with mild or no symptoms but can ascend to cause pelvic inflammatory disease (PID), leading to chronic pain, ectopic pregnancy, and infertility if untreated.",
                    "steps": [
                        {
                            "step": "Analyze STI characteristics",
                            "work": "HIV and Hepatitis B are viral; Herpes is viral. Only Chlamydia is bacterial and known to cause PID.",
                            "result": "Chlamydia is correct"
                        }
                    ],
                    "answer": "Chlamydia",
                    "concept": "STI complications"
                }
            },
            {
                "problem": "The technique where sperm is directly injected into the cytoplasm of an egg is called:",
                "difficulty": "medium",
                "options": [
                    "IVF",
                    "GIFT",
                    "ICSI",
                    "ZIFT"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Assisted reproductive technologies"],
                    "find": "Sperm injection technique",
                    "principle": "ICSI (Intracytoplasmic Sperm Injection) involves direct injection of a single sperm into the cytoplasm of an egg, used particularly for male factor infertility with low sperm count or poor motility.",
                    "steps": [
                        {
                            "step": "Analyze ART procedures",
                            "work": "IVF is in vitro fertilization; GIFT is gamete transfer; ZIFT is zygote transfer. Only ICSI involves direct sperm injection.",
                            "result": "ICSI is correct"
                        }
                    ],
                    "answer": "ICSI",
                    "concept": "Assisted reproduction"
                }
            },
            {
                "problem": "Which of the following is NOT a natural method of contraception?",
                "difficulty": "easy",
                "options": [
                    "Rhythm method",
                    "Withdrawal",
                    "Lactational amenorrhea",
                    "IUD"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Contraception types"],
                    "find": "Non-natural contraceptive",
                    "principle": "IUD (Intrauterine Device) is a mechanical contraceptive device inserted into the uterus, not a natural method. Rhythm, withdrawal, and lactational amenorrhea are natural methods that don't involve devices or hormones.",
                    "steps": [
                        {
                            "step": "Analyze method categories",
                            "work": "Rhythm, withdrawal, and lactational methods are natural. IUD is a device-based method.",
                            "result": "IUD is correct answer"
                        }
                    ],
                    "answer": "IUD",
                    "concept": "Contraception classification"
                }
            },
            {
                "problem": "The virus that causes cervical cancer is:",
                "difficulty": "medium",
                "options": [
                    "HIV",
                    "HPV",
                    "Herpes",
                    "Hepatitis B"
                ],
                "correct": 1,
                "solution": {
                    "given": ["STI and cancer link"],
                    "find": "Cervical cancer virus",
                    "principle": "Human Papillomavirus (HPV), particularly high-risk types 16 and 18, is the primary cause of cervical cancer. HPV vaccination and regular Pap smears are important for prevention and early detection.",
                    "steps": [
                        {
                            "step": "Analyze virus-disease relationships",
                            "work": "HIV causes AIDS; Herpes causes sores; Hepatitis B affects liver. Only HPV is strongly associated with cervical cancer.",
                            "result": "HPV is correct"
                        }
                    ],
                    "answer": "HPV",
                    "concept": "STI complications"
                }
            },
            {
                "problem": "Which national program in India focuses on reproductive and child health?",
                "difficulty": "medium",
                "options": [
                    "NRHM",
                    "RCH",
                    "NACP",
                    "ICDS"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Health programs"],
                    "find": "Reproductive health program",
                    "principle": "RCH (Reproductive and Child Health) Program is India's flagship program that integrates all interventions related to reproductive health, family planning, and child survival into a single package.",
                    "steps": [
                        {
                            "step": "Analyze program objectives",
                            "work": "NRHM is rural health; NACP is AIDS control; ICDS is child development. Only RCH specifically focuses on reproductive and child health.",
                            "result": "RCH is correct"
                        }
                    ],
                    "answer": "RCH",
                    "concept": "Health programs"
                }
            },
            {
                "problem": "The permanent sterilization method for males is:",
                "difficulty": "easy",
                "options": [
                    "Tubectomy",
                    "Vasectomy",
                    "IUD insertion",
                    "Condom use"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Permanent contraception"],
                    "find": "Male sterilization",
                    "principle": "Vasectomy is the permanent sterilization procedure for males, involving cutting or blocking the vas deferens to prevent sperm from entering the ejaculate. It is highly effective and has minimal impact on sexual function.",
                    "steps": [
                        {
                            "step": "Analyze sterilization methods",
                            "work": "Tubectomy is female sterilization; IUD and condoms are not permanent. Only vasectomy is male permanent method.",
                            "result": "Vasectomy is correct"
                        }
                    ],
                    "answer": "Vasectomy",
                    "concept": "Permanent contraception"
                }
            },
            {
                "problem": "Which STI is characterized by chancre formation in its primary stage?",
                "difficulty": "hard",
                "options": [
                    "Gonorrhea",
                    "Syphilis",
                    "Chlamydia",
                    "Trichomoniasis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["STI symptoms"],
                    "find": "Chancre-causing STI",
                    "principle": "Syphilis, caused by Treponema pallidum, typically presents with a painless chancre (ulcer) at the site of infection during its primary stage, which heals spontaneously but leads to secondary and tertiary stages if untreated.",
                    "steps": [
                        {
                            "step": "Analyze STI clinical features",
                            "work": "Gonorrhea causes discharge; Chlamydia may be asymptomatic; Trichomoniasis causes vaginitis. Only syphilis is characterized by chancre.",
                            "result": "Syphilis is correct"
                        }
                    ],
                    "answer": "Syphilis",
                    "concept": "STI symptoms"
                }
            },
            {
                "problem": "The method where eggs and sperm are placed directly into the fallopian tube is called:",
                "difficulty": "hard",
                "options": [
                    "IVF",
                    "ICSI",
                    "GIFT",
                    "ZIFT"
                ],
                "correct": 2,
                "solution": {
                    "given": ["ART procedures"],
                    "find": "Gamete transfer method",
                    "principle": "GIFT (Gamete Intrafallopian Transfer) involves placing both eggs and sperm directly into the fallopian tube, allowing fertilization to occur naturally inside the body rather than in a laboratory dish.",
                    "steps": [
                        {
                            "step": "Analyze ART techniques",
                            "work": "IVF is in vitro; ICSI is sperm injection; ZIFT is zygote transfer. Only GIFT involves transferring gametes rather than embryos.",
                            "result": "GIFT is correct"
                        }
                    ],
                    "answer": "GIFT",
                    "concept": "Assisted reproduction"
                }
            },
            {
                "problem": "Which contraceptive method works by preventing implantation?",
                "difficulty": "medium",
                "options": [
                    "Oral pills",
                    "Condom",
                    "Copper IUD",
                    "Withdrawal"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Contraception mechanisms"],
                    "find": "Implantation prevention method",
                    "principle": "Copper IUDs work primarily by creating a hostile uterine environment that prevents implantation of a fertilized egg, in addition to having spermicidal effects that impair sperm function.",
                    "steps": [
                        {
                            "step": "Analyze mechanism of action",
                            "work": "Oral pills prevent ovulation; condoms block sperm; withdrawal prevents ejaculation. Only IUD prevents implantation.",
                            "result": "Copper IUD is correct"
                        }
                    ],
                    "answer": "Copper IUD",
                    "concept": "Contraception mechanisms"
                }
            },
            {
                "problem": "Which of the following is a hormonal method of contraception?",
                "difficulty": "easy",
                "options": [
                    "Condom",
                    "Copper-T IUD",
                    "Oral contraceptive pills",
                    "Diaphragm"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Contraceptive methods"],
                    "find": "Hormonal contraceptive",
                    "principle": "Oral contraceptive pills contain synthetic hormones (estrogen and/or progestin) that prevent ovulation, thicken cervical mucus, and alter the endometrium to prevent pregnancy.",
                    "steps": [
                        {
                            "step": "Analyze method types",
                            "work": "Condom and diaphragm are barrier methods; Copper-T is non-hormonal IUD. Only oral pills are hormonal.",
                            "result": "Oral contraceptive pills is correct"
                        }
                    ],
                    "answer": "Oral contraceptive pills",
                    "concept": "Hormonal contraception"
                }
            },
            {
                "problem": "The STI that can be prevented by vaccination is:",
                "difficulty": "medium",
                "options": [
                    "HIV/AIDS",
                    "HPV infection",
                    "Herpes",
                    "Syphilis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["STI prevention"],
                    "find": "Vaccine-preventable STI",
                    "principle": "HPV (Human Papillomavirus) vaccination effectively prevents infection with high-risk HPV types that cause cervical cancer, as well as other HPV-related cancers and genital warts.",
                    "steps": [
                        {
                            "step": "Analyze vaccine availability",
                            "work": "No vaccines exist for HIV, Herpes, or Syphilis. Only HPV has effective preventive vaccines.",
                            "result": "HPV infection is correct"
                        }
                    ],
                    "answer": "HPV infection",
                    "concept": "STI prevention"
                }
            },
            {
                "problem": "Which ART procedure involves fertilizing the egg outside the body?",
                "difficulty": "easy",
                "options": [
                    "GIFT",
                    "ZIFT",
                    "IVF",
                    "ICSI"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Assisted reproductive technologies"],
                    "find": "External fertilization procedure",
                    "principle": "IVF (In Vitro Fertilization) involves retrieving eggs from the ovaries, fertilizing them with sperm in a laboratory dish, and then transferring the resulting embryos into the uterus.",
                    "steps": [
                        {
                            "step": "Analyze ART procedures",
                            "work": "GIFT and ZIFT involve transfer to fallopian tubes; ICSI is a technique within IVF. Only IVF specifically describes external fertilization.",
                            "result": "IVF is correct"
                        }
                    ],
                    "answer": "IVF",
                    "concept": "Assisted reproduction"
                }
            },
            {
                "problem": "The emergency contraceptive pill should be taken within:",
                "difficulty": "medium",
                "options": [
                    "24 hours after unprotected sex",
                    "48 hours after unprotected sex",
                    "72-120 hours after unprotected sex",
                    "One week after unprotected sex"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Emergency contraception"],
                    "find": "Time window for emergency pills",
                    "principle": "Emergency contraceptive pills are most effective when taken as soon as possible after unprotected intercourse, but can be used up to 72-120 hours (3-5 days) depending on the type of pill.",
                    "steps": [
                        {
                            "step": "Analyze timing requirements",
                            "work": "Earlier is better, but the effective window extends to 72-120 hours, not just 24 or 48 hours.",
                            "result": "72-120 hours after unprotected sex is correct"
                        }
                    ],
                    "answer": "72-120 hours after unprotected sex",
                    "concept": "Emergency contraception"
                }
            },
            {
                "problem": "Which bacterial STI is known as 'the clap'?",
                "difficulty": "medium",
                "options": [
                    "Syphilis",
                    "Gonorrhea",
                    "Chlamydia",
                    "Trichomoniasis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["STI terminology"],
                    "find": "STI known as 'the clap'",
                    "principle": "Gonorrhea, caused by Neisseria gonorrhoeae, is commonly referred to as 'the clap' in slang terminology. It causes urethral discharge, pain during urination, and can lead to serious complications if untreated.",
                    "steps": [
                        {
                            "step": "Analyze STI colloquial names",
                            "work": "Syphilis has other names; Chlamydia and Trichomoniasis don't have this specific slang term. Only Gonorrhea is called 'the clap'.",
                            "result": "Gonorrhea is correct"
                        }
                    ],
                    "answer": "Gonorrhea",
                    "concept": "STI terminology"
                }
            },
            {
                "problem": "The natural contraceptive method based on breastfeeding is called:",
                "difficulty": "medium",
                "options": [
                    "Rhythm method",
                    "Withdrawal method",
                    "Lactational amenorrhea method",
                    "Basal body temperature method"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Natural contraception"],
                    "find": "Breastfeeding-based method",
                    "principle": "Lactational Amenorrhea Method (LAM) provides natural contraception through the suppressive effect of frequent breastfeeding on ovulation, effective when specific conditions are met (fully breastfeeding, amenorrheic, within 6 months postpartum).",
                    "steps": [
                        {
                            "step": "Analyze natural methods",
                            "work": "Rhythm and temperature methods track fertility; withdrawal is behavioral. Only LAM uses breastfeeding for contraception.",
                            "result": "Lactational amenorrhea method is correct"
                        }
                    ],
                    "answer": "Lactational amenorrhea method",
                    "concept": "Natural contraception"
                }
            },
            {
                "problem": "Which STI can be transmitted from mother to baby during childbirth?",
                "difficulty": "medium",
                "options": [
                    "All of the above",
                    "Gonorrhea",
                    "Chlamydia",
                    "HIV"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Mother-to-child transmission"],
                    "find": "Vertically transmitted STIs",
                    "principle": "Multiple STIs including Gonorrhea, Chlamydia, HIV, Syphilis, and Hepatitis B can be transmitted from mother to baby during pregnancy, delivery, or breastfeeding, making prenatal screening and treatment crucial.",
                    "steps": [
                        {
                            "step": "Analyze transmission routes",
                            "work": "All listed STIs can be transmitted vertically, making comprehensive prenatal care essential.",
                            "result": "All of the above is correct"
                        }
                    ],
                    "answer": "All of the above",
                    "concept": "STI transmission"
                }
            },
            {
                "problem": "The ART technique used for male factor infertility with low sperm count is:",
                "difficulty": "hard",
                "options": [
                    "IVF",
                    "GIFT",
                    "ICSI",
                    "ZIFT"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Male infertility treatment"],
                    "find": "Technique for low sperm count",
                    "principle": "ICSI (Intracytoplasmic Sperm Injection) is specifically designed for severe male factor infertility, where a single sperm is directly injected into an egg, bypassing natural sperm selection processes.",
                    "steps": [
                        {
                            "step": "Analyze ART applications",
                            "work": "While IVF can help, ICSI is specifically designed for severe male factor issues like low sperm count or poor motility.",
                            "result": "ICSI is correct"
                        }
                    ],
                    "answer": "ICSI",
                    "concept": "Male infertility"
                }
            },
            {
                "problem": "Which contraceptive method requires a prescription?",
                "difficulty": "easy",
                "options": [
                    "Male condom",
                    "Oral contraceptive pills",
                    "Spermicide",
                    "Withdrawal method"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Contraceptive access"],
                    "find": "Prescription-required method",
                    "principle": "Oral contraceptive pills require a medical prescription because they contain hormones that need proper medical supervision, including blood pressure monitoring and consideration of contraindications.",
                    "steps": [
                        {
                            "step": "Analyze access requirements",
                            "work": "Condoms and spermicides are over-the-counter; withdrawal requires nothing. Only pills need prescription.",
                            "result": "Oral contraceptive pills is correct"
                        }
                    ],
                    "answer": "Oral contraceptive pills",
                    "concept": "Contraceptive access"
                }
            },
            {
                "problem": "The STI that causes painful blisters or ulcers is:",
                "difficulty": "medium",
                "options": [
                    "Chlamydia",
                    "Gonorrhea",
                    "Genital herpes",
                    "Trichomoniasis"
                ],
                "correct": 2,
                "solution": {
                    "given": ["STI symptoms"],
                    "find": "Blisters/ulcers causing STI",
                    "principle": "Genital herpes, caused by Herpes Simplex Virus (HSV), typically presents with painful blisters or ulcers in the genital area, which may recur periodically despite treatment.",
                    "steps": [
                        {
                            "step": "Analyze symptom patterns",
                            "work": "Chlamydia and Gonorrhea cause discharge; Trichomoniasis causes itching. Only herpes causes characteristic blisters/ulcers.",
                            "result": "Genital herpes is correct"
                        }
                    ],
                    "answer": "Genital herpes",
                    "concept": "STI symptoms"
                }
            },
            {
                "problem": "The barrier method that covers the cervix is:",
                "difficulty": "medium",
                "options": [
                    "Male condom",
                    "Female condom",
                    "Diaphragm",
                    "Spermicide"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Barrier contraception"],
                    "find": "Cervical covering method",
                    "principle": "A diaphragm is a dome-shaped silicone barrier that covers the cervix, preventing sperm from entering the uterus. It must be used with spermicide and fitted by a healthcare provider.",
                    "steps": [
                        {
                            "step": "Analyze barrier methods",
                            "work": "Condoms cover penis or vagina; spermicide is chemical. Only diaphragm specifically covers the cervix.",
                            "result": "Diaphragm is correct"
                        }
                    ],
                    "answer": "Diaphragm",
                    "concept": "Barrier contraception"
                }
            },
            {
                "problem": "Which component is NOT part of comprehensive reproductive health?",
                "difficulty": "hard",
                "options": [
                    "Family planning",
                    "Maternal healthcare",
                    "STI prevention",
                    "Cosmetic surgery"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Reproductive health scope"],
                    "find": "Non-reproductive health component",
                    "principle": "Comprehensive reproductive health includes family planning, maternal health, STI prevention, infertility treatment, and sexual health education, but does not include elective cosmetic surgery which is not related to reproductive function.",
                    "steps": [
                        {
                            "step": "Analyze RH components",
                            "work": "Family planning, maternal health, and STI prevention are core RH components. Cosmetic surgery is unrelated to reproductive health.",
                            "result": "Cosmetic surgery is correct answer"
                        }
                    ],
                    "answer": "Cosmetic surgery",
                    "concept": "Reproductive health scope"
                }
            },
            {
                "problem": "The most effective permanent contraception method for women is:",
                "difficulty": "medium",
                "options": [
                    "Tubal ligation",
                    "IUD",
                    "Oral pills",
                    "Condoms"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Permanent contraception"],
                    "find": "Female permanent method",
                    "principle": "Tubal ligation (tubectomy) is a surgical permanent contraception method for women that involves blocking or sealing the fallopian tubes, preventing eggs from meeting sperm, with a failure rate of less than 1%.",
                    "steps": [
                        {
                            "step": "Analyze effectiveness",
                            "work": "IUD and pills are reversible; condoms are barrier methods. Only tubal ligation is permanent for women.",
                            "result": "Tubal ligation is correct"
                        }
                    ],
                    "answer": "Tubal ligation",
                    "concept": "Permanent contraception"
                }
            },
            {
                "problem": "Which STI can cause pelvic inflammatory disease (PID)?",
                "difficulty": "medium",
                "options": [
                    "HIV",
                    "Herpes",
                    "Chlamydia",
                    "All of the above"
                ],
                "correct": 2,
                "solution": {
                    "given": ["STI complications"],
                    "find": "PID-causing STI",
                    "principle": "Chlamydia trachomatis infection is a leading cause of pelvic inflammatory disease (PID), which can lead to chronic pelvic pain, ectopic pregnancy, and infertility if the infection ascends to the upper reproductive tract.",
                    "steps": [
                        {
                            "step": "Analyze complication risks",
                            "work": "HIV and Herpes have different complications. While other STIs can cause PID, Chlamydia is particularly associated with it.",
                            "result": "Chlamydia is correct"
                        }
                    ],
                    "answer": "Chlamydia",
                    "concept": "STI complications"
                }
            },
            {
                "problem": "The ART procedure where zygotes are transferred to the fallopian tube is:",
                "difficulty": "hard",
                "options": [
                    "IVF",
                    "GIFT",
                    "ZIFT",
                    "ICSI"
                ],
                "correct": 2,
                "solution": {
                    "given": ["ART procedures"],
                    "find": "Zygote transfer procedure",
                    "principle": "ZIFT (Zygote Intrafallopian Transfer) involves fertilizing eggs in vitro, then transferring the resulting zygotes into the fallopian tubes within 24 hours, allowing natural transport to the uterus for implantation.",
                    "steps": [
                        {
                            "step": "Analyze transfer timing",
                            "work": "IVF transfers embryos to uterus; GIFT transfers gametes; ICSI is fertilization technique. Only ZIFT transfers zygotes to tubes.",
                            "result": "ZIFT is correct"
                        }
                    ],
                    "answer": "ZIFT",
                    "concept": "Assisted reproduction"
                }
            },
            {
                "problem": "Which is a non-hormonal IUD?",
                "difficulty": "easy",
                "options": [
                    "Mirena",
                    "Copper-T",
                    "Implanon",
                    "Depo-Provera"
                ],
                "correct": 1,
                "solution": {
                    "given": ["IUD types"],
                    "find": "Non-hormonal IUD",
                    "principle": "Copper-T IUD is non-hormonal and works by releasing copper ions that are toxic to sperm and prevent fertilization and implantation. Hormonal IUDs like Mirena release progestin.",
                    "steps": [
                        {
                            "step": "Analyze IUD mechanisms",
                            "work": "Mirena is hormonal; Implanon and Depo are not IUDs. Only Copper-T is non-hormonal IUD.",
                            "result": "Copper-T is correct"
                        }
                    ],
                    "answer": "Copper-T",
                    "concept": "IUD types"
                }
            },
            {
                "problem": "The viral STI that attacks the immune system is:",
                "difficulty": "easy",
                "options": [
                    "HPV",
                    "HIV",
                    "Herpes",
                    "Hepatitis B"
                ],
                "correct": 1,
                "solution": {
                    "given": ["STI mechanisms"],
                    "find": "Immune system attacking STI",
                    "principle": "HIV (Human Immunodeficiency Virus) specifically attacks CD4 cells of the immune system, leading to immunodeficiency and eventually AIDS if untreated, making it unique among STIs in its mechanism.",
                    "steps": [
                        {
                            "step": "Analyze viral actions",
                            "work": "HPV causes warts/cancer; Herpes causes sores; Hepatitis affects liver. Only HIV attacks immune system directly.",
                            "result": "HIV is correct"
                        }
                    ],
                    "answer": "HIV",
                    "concept": "STI mechanisms"
                }
            },
            {
                "problem": "Which method is NOT reliable for STI prevention?",
                "difficulty": "medium",
                "options": [
                    "Condoms",
                    "Withdrawal",
                    "Mutual monogamy",
                    "Abstinence"
                ],
                "correct": 1,
                "solution": {
                    "given": ["STI prevention"],
                    "find": "Unreliable STI prevention",
                    "principle": "Withdrawal (coitus interruptus) is not reliable for STI prevention because it doesn't prevent contact with infectious secretions and may occur after pre-ejaculatory fluid release which can contain pathogens.",
                    "steps": [
                        {
                            "step": "Analyze prevention effectiveness",
                            "work": "Condoms provide protection; monogamy and abstinence prevent exposure. Only withdrawal is unreliable for STI prevention.",
                            "result": "Withdrawal is correct answer"
                        }
                    ],
                    "answer": "Withdrawal",
                    "concept": "STI prevention"
                }
            },
            {
                "problem": "The natural method based on tracking cervical mucus changes is:",
                "difficulty": "hard",
                "options": [
                    "Basal body temperature",
                    "Symptothermal",
                    "Billings method",
                    "Calendar rhythm"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Natural family planning"],
                    "find": "Cervical mucus method",
                    "principle": "The Billings ovulation method involves tracking changes in cervical mucus consistency and quantity throughout the menstrual cycle to identify fertile days when conception is most likely.",
                    "steps": [
                        {
                            "step": "Analyze natural methods",
                            "work": "Basal temperature tracks BBT; symptothermal combines methods; calendar uses dates. Only Billings method focuses on cervical mucus.",
                            "result": "Billings method is correct"
                        }
                    ],
                    "answer": "Billings method",
                    "concept": "Natural family planning"
                }
            },
            {
                "problem": "Which STI screening is recommended for sexually active women under 25?",
                "difficulty": "medium",
                "options": [
                    "HIV testing",
                    "Chlamydia screening",
                    "Syphilis testing",
                    "All of the above"
                ],
                "correct": 3,
                "solution": {
                    "given": ["STI screening guidelines"],
                    "find": "Recommended STI screening",
                    "principle": "Current guidelines recommend annual Chlamydia screening for sexually active women under 25, as well as HIV and syphilis testing based on risk factors, making comprehensive screening important for this age group.",
                    "steps": [
                        {
                            "step": "Analyze screening recommendations",
                            "work": "All listed screenings are recommended for sexually active young women, with Chlamydia being specifically emphasized annually.",
                            "result": "All of the above is correct"
                        }
                    ],
                    "answer": "All of the above",
                    "concept": "STI screening"
                }
            },
            {
                "problem": "The ART success rate is highest for women under:",
                "difficulty": "hard",
                "options": [
                    "25 years",
                    "35 years",
                    "40 years",
                    "45 years"
                ],
                "correct": 0,
                "solution": {
                    "given": ["ART success factors"],
                    "find": "Optimal age for ART",
                    "principle": "ART success rates are highest for women under 35 years old, as egg quality and quantity decline significantly with age, particularly after 35, affecting both natural and assisted reproduction outcomes.",
                    "steps": [
                        {
                            "step": "Analyze age impact",
                            "work": "While under 25 is biologically ideal, under 35 represents the clinical cutoff where success rates remain relatively high before significant decline.",
                            "result": "35 years is correct"
                        }
                    ],
                    "answer": "35 years",
                    "concept": "ART success factors"
                }
            },
            {
                "problem": "Which is a long-acting reversible contraceptive?",
                "difficulty": "medium",
                "options": [
                    "Oral pills",
                    "Condoms",
                    "IUD",
                    "Withdrawal"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Contraceptive duration"],
                    "find": "Long-acting reversible method",
                    "principle": "IUDs (Intrauterine Devices) are long-acting reversible contraceptives that can remain effective for 3-10 years depending on type, but can be removed at any time for immediate return of fertility.",
                    "steps": [
                        {
                            "step": "Analyze method duration",
                            "work": "Pills are daily; condoms are per-act; withdrawal is per-act. Only IUD is long-acting and reversible.",
                            "result": "IUD is correct"
                        }
                    ],
                    "answer": "IUD",
                    "concept": "Contraceptive duration"
                }
            },
            {
                "problem": "The STI that can cause congenital defects if acquired during pregnancy is:",
                "difficulty": "hard",
                "options": [
                    "Syphilis",
                    "Gonorrhea",
                    "Chlamydia",
                    "Trichomoniasis"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Pregnancy complications"],
                    "find": "Congenital defect causing STI",
                    "principle": "Syphilis can cross the placenta and cause congenital syphilis in the fetus, leading to stillbirth, neonatal death, or severe lifelong physical and neurological disabilities if untreated during pregnancy.",
                    "steps": [
                        {
                            "step": "Analyze fetal risks",
                            "work": "While other STIs can affect pregnancy, syphilis is particularly associated with specific congenital defects and is screened for routinely in prenatal care.",
                            "result": "Syphilis is correct"
                        }
                    ],
                    "answer": "Syphilis",
                    "concept": "Pregnancy complications"
                }
            },
            {
                "problem": "Which method provides immediate contraception after delivery?",
                "difficulty": "hard",
                "options": [
                    "Oral pills",
                    "IUD insertion",
                    "Lactational amenorrhea",
                    "All of the above"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Postpartum contraception"],
                    "find": "Immediate postpartum method",
                    "principle": "Lactational amenorrhea method (LAM) provides immediate contraception postpartum when specific conditions are met (exclusive breastfeeding, amenorrhea, within 6 months), while other methods may have timing restrictions.",
                    "steps": [
                        {
                            "step": "Analyze postpartum timing",
                            "work": "Pills may affect milk supply; IUD insertion timing varies. LAM works immediately when conditions are met.",
                            "result": "Lactational amenorrhea is correct"
                        }
                    ],
                    "answer": "Lactational amenorrhea",
                    "concept": "Postpartum contraception"
                }
            },
            {
                "problem": "The most common bacterial STI is:",
                "difficulty": "medium",
                "options": [
                    "Syphilis",
                    "Gonorrhea",
                    "Chlamydia",
                    "Trichomoniasis"
                ],
                "correct": 2,
                "solution": {
                    "given": ["STI epidemiology"],
                    "find": "Most common bacterial STI",
                    "principle": "Chlamydia trachomatis infection is the most commonly reported bacterial STI worldwide, particularly affecting young adults and often presenting with mild or no symptoms, leading to underdiagnosis and transmission.",
                    "steps": [
                        {
                            "step": "Analyze prevalence data",
                            "work": "While all are common, Chlamydia has the highest reported incidence rates globally among bacterial STIs.",
                            "result": "Chlamydia is correct"
                        }
                    ],
                    "answer": "Chlamydia",
                    "concept": "STI epidemiology"
                }
            },
            {
                "problem": "Which ART technique uses surrogate carriers?",
                "difficulty": "hard",
                "options": [
                    "IVF",
                    "GIFT",
                    "Surrogacy",
                    "ICSI"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Third-party reproduction"],
                    "find": "Surrogate-based ART",
                    "principle": "Surrogacy involves a woman (surrogate) carrying a pregnancy for another person or couple, using either traditional surrogacy (surrogate's egg) or gestational surrogacy (donor or intended mother's egg).",
                    "steps": [
                        {
                            "step": "Analyze ART options",
                            "work": "IVF, GIFT, and ICSI are techniques that may be used in surrogacy but don't inherently involve surrogates. Only surrogacy specifically uses carrier mothers.",
                            "result": "Surrogacy is correct"
                        }
                    ],
                    "answer": "Surrogacy",
                    "concept": "Third-party reproduction"
                }
            },
            {
                "problem": "The contraceptive method with the highest typical use failure rate is:",
                "difficulty": "hard",
                "options": [
                    "IUD",
                    "Oral pills",
                    "Condoms",
                    "Withdrawal"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Contraceptive efficacy"],
                    "find": "Highest failure rate method",
                    "principle": "Withdrawal (coitus interruptus) has the highest typical use failure rate (approximately 22%) because it requires perfect timing and control, and pre-ejaculatory fluid may contain sperm.",
                    "steps": [
                        {
                            "step": "Analyze failure rates",
                            "work": "IUD has lowest failure rate; pills and condoms have moderate rates. Withdrawal has the highest failure rate among common methods.",
                            "result": "Withdrawal is correct"
                        }
                    ],
                    "answer": "Withdrawal",
                    "concept": "Contraceptive efficacy"
                }
            },
            {
                "problem": "Which STI can be cured with a single dose of antibiotics?",
                "difficulty": "medium",
                "options": [
                    "Herpes",
                    "HIV",
                    "Gonorrhea",
                    "HPV"
                ],
                "correct": 2,
                "solution": {
                    "given": ["STI treatment"],
                    "find": "Single-dose curable STI",
                    "principle": "Gonorrhea can often be treated with a single dose of appropriate antibiotics (though resistance is increasing), unlike viral STIs like Herpes, HIV, and HPV which are not curable with antibiotics.",
                    "steps": [
                        {
                            "step": "Analyze treatment regimens",
                            "work": "Herpes and HIV require ongoing treatment; HPV may clear spontaneously. Only Gonorrhea is typically treated with single-dose antibiotics.",
                            "result": "Gonorrhea is correct"
                        }
                    ],
                    "answer": "Gonorrhea",
                    "concept": "STI treatment"
                }
            },
            {
                "problem": "The natural method that tracks body temperature is:",
                "difficulty": "medium",
                "options": [
                    "Calendar method",
                    "Basal body temperature",
                    "Cervical mucus method",
                    "Symptothermal method"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Natural family planning"],
                    "find": "Temperature tracking method",
                    "principle": "The basal body temperature (BBT) method involves tracking morning body temperature, which rises slightly after ovulation due to progesterone and remains elevated until the next menstrual period.",
                    "steps": [
                        {
                            "step": "Analyze natural methods",
                            "work": "Calendar uses dates; cervical mucus monitors secretions; symptothermal combines methods. Only BBT specifically tracks temperature.",
                            "result": "Basal body temperature is correct"
                        }
                    ],
                    "answer": "Basal body temperature",
                    "concept": "Natural family planning"
                }
            },
            {
                "problem": "Which is a recommended prenatal screening test?",
                "difficulty": "medium",
                "options": [
                    "HIV test",
                    "Syphilis test",
                    "Group B Strep test",
                    "All of the above"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Prenatal care"],
                    "find": "Prenatal screening tests",
                    "principle": "Comprehensive prenatal screening includes HIV testing (to prevent mother-to-child transmission), syphilis testing (to prevent congenital syphilis), and Group B Streptococcus testing (to prevent neonatal infection) among other important screenings.",
                    "steps": [
                        {
                            "step": "Analyze prenatal guidelines",
                            "work": "All listed tests are standard components of recommended prenatal screening protocols to ensure maternal and fetal health.",
                            "result": "All of the above is correct"
                        }
                    ],
                    "answer": "All of the above",
                    "concept": "Prenatal care"
                }
            },
            {
                "problem": "The most effective reversible contraception is:",
                "difficulty": "hard",
                "options": [
                    "Oral pills",
                    "IUD",
                    "Condoms",
                    "Diaphragm"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Contraceptive efficacy"],
                    "find": "Most effective reversible method",
                    "principle": "IUDs (both hormonal and copper) have the highest effectiveness rates among reversible contraceptive methods, with failure rates less than 1% due to their 'set-and-forget' nature that doesn't depend on user compliance.",
                    "steps": [
                        {
                            "step": "Analyze effectiveness data",
                            "work": "While all are reversible, IUDs have the lowest failure rates due to not requiring user action after insertion.",
                            "result": "IUD is correct"
                        }
                    ],
                    "answer": "IUD",
                    "concept": "Contraceptive efficacy"
                }
            }
        ]
    },

    "biomolecules": {
        "title": "Biomolecules",
        "weightage": "3–4%",
        "introduction": "Biomolecules are organic compounds that form the basis of life processes. This unit covers the structure, classification, properties, and biological functions of carbohydrates, proteins, lipids, nucleic acids, enzymes, and other essential biological molecules. NEET questions often focus on chemical structures, classification, metabolic roles, and identification tests of various biomolecules.",

        "topics": [
            {
                "name": "Carbohydrates",
                "description": "Study of sugars, starches, and cellulose - their classification, structure, properties, and biological functions.",
                "subtopics": [
                    {
                        "name": "Classification",
                        "explanation": "Monosaccharides (glucose, fructose), Disaccharides (sucrose, lactose), Oligosaccharides, Polysaccharides (starch, glycogen, cellulose). Based on number of sugar units and reducing properties."
                    },
                    {
                        "name": "Structure and Isomerism",
                        "explanation": "Open chain and ring structures, D and L isomers, alpha and beta anomers, epimers. Glycosidic bonds in disaccharides and polysaccharides."
                    },
                    {
                        "name": "Biological Functions",
                        "explanation": "Energy source (glucose), energy storage (starch in plants, glycogen in animals), structural support (cellulose in plants, chitin in arthropods)."
                    },
                    {
                        "name": "Tests and Properties",
                        "explanation": "Reducing sugars test (Benedict's test), iodine test for starch, osazone test, specific rotation. Hydrolysis reactions."
                    }
                ]
            },
            {
                "name": "Proteins",
                "description": "Study of amino acids, peptide bonds, and protein structure - from primary to quaternary organization.",
                "subtopics": [
                    {
                        "name": "Amino Acids",
                        "explanation": "20 standard amino acids, essential vs non-essential, classification based on R groups (nonpolar, polar, acidic, basic). Zwitterion nature, isoelectric point."
                    },
                    {
                        "name": "Protein Structure",
                        "explanation": "Primary (amino acid sequence), Secondary (alpha-helix, beta-pleated sheets), Tertiary (3D folding), Quaternary (multiple subunits). Bonds involved: peptide, hydrogen, disulfide, hydrophobic, ionic."
                    },
                    {
                        "name": "Classification",
                        "explanation": "Simple vs conjugated proteins, fibrous vs globular proteins. Examples: collagen (fibrous), hemoglobin (globular conjugated)."
                    },
                    {
                        "name": "Biological Functions",
                        "explanation": "Enzymes, structural proteins, transport proteins, antibodies, hormones, receptors. Denaturation and renaturation."
                    }
                ]
            },
            {
                "name": "Lipids",
                "description": "Study of fats, oils, phospholipids, and steroids - their structure, properties, and biological roles.",
                "subtopics": [
                    {
                        "name": "Classification",
                        "explanation": "Simple lipids (fats, waxes), Compound lipids (phospholipids, glycolipids), Derived lipids (steroids, terpenes). Saturated vs unsaturated fatty acids."
                    },
                    {
                        "name": "Structure and Properties",
                        "explanation": "Triglycerides structure, fatty acid chain length and saturation, emulsion formation, saponification value, iodine number."
                    },
                    {
                        "name": "Biological Functions",
                        "explanation": "Energy storage, membrane structure (phospholipid bilayer), insulation, protection, hormone precursors (steroids)."
                    },
                    {
                        "name": "Tests and Analysis",
                        "explanation": "Solubility tests, emulsion test, Sudan III test, acrolein test, saponification test."
                    }
                ]
            },
            {
                "name": "Nucleic Acids",
                "description": "Study of DNA and RNA - their structure, types, and role in genetic information storage and transfer.",
                "subtopics": [
                    {
                        "name": "DNA Structure",
                        "explanation": "Double helix model (Watson-Crick), base pairing (A-T, G-C), antiparallel strands, Chargaff's rules. Types: A, B, Z DNA."
                    },
                    {
                        "name": "RNA Types and Functions",
                        "explanation": "mRNA (message carrier), tRNA (adaptor molecule), rRNA (ribosomal component), snRNA, miRNA. Differences from DNA."
                    },
                    {
                        "name": "Nucleotides and Nucleosides",
                        "explanation": "Components: nitrogenous bases (purines and pyrimidines), pentose sugar, phosphate groups. ATP as energy currency."
                    },
                    {
                        "name": "Biological Significance",
                        "explanation": "Genetic information storage, protein synthesis, gene expression regulation, energy transfer (ATP)."
                    }
                ]
            },
            {
                "name": "Enzymes",
                "description": "Study of biological catalysts - their nature, classification, mechanism of action, and regulation.",
                "subtopics": [
                    {
                        "name": "Nature and Properties",
                        "explanation": "Protein nature (except ribozymes), specificity, catalytic efficiency, enzyme-substrate complex, active site. Cofactors and coenzymes."
                    },
                    {
                        "name": "Classification",
                        "explanation": "Six classes: oxidoreductases, transferases, hydrolases, lyases, isomerases, ligases. Examples of each class."
                    },
                    {
                        "name": "Mechanism of Action",
                        "explanation": "Lock and key model, induced fit model. Activation energy, transition state, enzyme kinetics (Michaelis-Menten equation)."
                    },
                    {
                        "name": "Factors Affecting Activity",
                        "explanation": "Temperature, pH, enzyme concentration, substrate concentration, inhibitors (competitive, non-competitive), activators."
                    }
                ]
            },
            {
                "name": "Vitamins and Minerals",
                "description": "Study of essential micronutrients - their classification, sources, functions, and deficiency diseases.",
                "subtopics": [
                    {
                        "name": "Vitamin Classification",
                        "explanation": "Fat-soluble (A, D, E, K) and water-soluble (B-complex, C). Functions, daily requirements, deficiency diseases."
                    },
                    {
                        "name": "Minerals",
                        "explanation": "Macrominerals (Ca, P, Na, K) and trace elements (Fe, I, Zn, Cu). Biological roles and deficiency conditions."
                    },
                    {
                        "name": "Coenzymes",
                        "explanation": "NAD, FAD, Coenzyme A, TPP. Relationship with vitamins and role in metabolic reactions."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Molecular Structure": [
                {
                    "name": "Chemical Bonding",
                    "description": "Different types of bonds stabilizing biomolecular structures: covalent, hydrogen, ionic, hydrophobic interactions"
                },
                {
                    "name": "Stereochemistry",
                    "description": "Importance of chiral centers, optical activity, and specific configurations in biological function"
                }
            ],
            "Metabolic Roles": [
                {
                    "name": "Energy Metabolism",
                    "description": "Carbohydrates and lipids as energy sources; ATP as energy currency"
                },
                {
                    "name": "Information Flow",
                    "description": "Nucleic acids in genetic information storage and transfer; proteins as functional molecules"
                }
            ],
            "Biological Recognition": [
                {
                    "name": "Specificity",
                    "description": "Enzyme-substrate specificity, antibody-antigen recognition, receptor-ligand interactions"
                },
                {
                    "name": "Molecular Interactions",
                    "description": "Non-covalent interactions determining molecular recognition and assembly"
                }
            ]
        },

        "problems": [
            {
                "problem": "Which of the following is a reducing sugar?",
                "difficulty": "easy",
                "options": [
                    "Sucrose",
                    "Lactose",
                    "Starch",
                    "Cellulose"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Carbohydrate properties"],
                    "find": "Reducing sugar",
                    "principle": "Reducing sugars have free aldehyde or ketone groups that can reduce oxidizing agents. Lactose has a free anomeric carbon, making it reducing, while sucrose (both anomeric carbons involved in glycosidic bond), starch, and cellulose are non-reducing.",
                    "steps": [
                        {
                            "step": "Analyze sugar structures",
                            "work": "Sucrose has both anomeric carbons bonded; starch and cellulose are polymers. Only lactose has free reducing end.",
                            "result": "Lactose is correct"
                        }
                    ],
                    "answer": "Lactose",
                    "concept": "Reducing sugars"
                }
            },
            {
                "problem": "The bond between amino acids in proteins is called:",
                "difficulty": "easy",
                "options": [
                    "Glycosidic bond",
                    "Peptide bond",
                    "Phosphodiester bond",
                    "Ester bond"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Protein structure"],
                    "find": "Amino acid linkage",
                    "principle": "Peptide bonds are amide linkages formed between the carboxyl group of one amino acid and the amino group of another, creating the backbone of proteins through dehydration synthesis.",
                    "steps": [
                        {
                            "step": "Analyze bond types",
                            "work": "Glycosidic bonds link sugars; phosphodiester bonds in nucleic acids; ester bonds in lipids. Only peptide bonds link amino acids.",
                            "result": "Peptide bond is correct"
                        }
                    ],
                    "answer": "Peptide bond",
                    "concept": "Protein structure"
                }
            },
            {
                "problem": "Which nitrogenous base is NOT found in DNA?",
                "difficulty": "medium",
                "options": [
                    "Adenine",
                    "Guanine",
                    "Uracil",
                    "Cytosine"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Nucleic acid composition"],
                    "find": "DNA base exclusion",
                    "principle": "Uracil is found only in RNA, where it replaces thymine. DNA contains adenine, guanine, cytosine, and thymine, but not uracil.",
                    "steps": [
                        {
                            "step": "Analyze base composition",
                            "work": "Adenine, guanine, and cytosine are in both DNA and RNA. Only uracil is specific to RNA.",
                            "result": "Uracil is correct answer"
                        }
                    ],
                    "answer": "Uracil",
                    "concept": "Nucleic acid bases"
                }
            },
            {
                "problem": "The enzyme that hydrolyzes starch is:",
                "difficulty": "medium",
                "options": [
                    "Pepsin",
                    "Amylase",
                    "Lipase",
                    "Trypsin"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Enzyme specificity"],
                    "find": "Starch-digesting enzyme",
                    "principle": "Amylase specifically hydrolyzes starch into smaller carbohydrate units (dextrins, maltose). It is produced in salivary glands and pancreas for carbohydrate digestion.",
                    "steps": [
                        {
                            "step": "Analyze enzyme substrates",
                            "work": "Pepsin and trypsin digest proteins; lipase digests fats. Only amylase acts on starch.",
                            "result": "Amylase is correct"
                        }
                    ],
                    "answer": "Amylase",
                    "concept": "Enzyme specificity"
                }
            },
            {
                "problem": "Which vitamin is fat-soluble?",
                "difficulty": "easy",
                "options": [
                    "Vitamin C",
                    "Vitamin B1",
                    "Vitamin D",
                    "Vitamin B12"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Vitamin classification"],
                    "find": "Fat-soluble vitamin",
                    "principle": "Vitamin D is fat-soluble along with vitamins A, E, and K. They are stored in body fat and require bile salts for absorption, unlike water-soluble vitamins (B-complex and C).",
                    "steps": [
                        {
                            "step": "Analyze vitamin properties",
                            "work": "Vitamin C, B1, and B12 are water-soluble. Only Vitamin D is fat-soluble.",
                            "result": "Vitamin D is correct"
                        }
                    ],
                    "answer": "Vitamin D",
                    "concept": "Vitamin classification"
                }
            },
            {
                "problem": "The secondary structure of proteins includes:",
                "difficulty": "medium",
                "options": [
                    "Amino acid sequence",
                    "Alpha-helix and beta-pleated sheets",
                    "Three-dimensional folding",
                    "Multiple polypeptide chains"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Protein structure levels"],
                    "find": "Secondary structure elements",
                    "principle": "Secondary structure refers to local folded structures stabilized by hydrogen bonds, primarily alpha-helices (coiled structures) and beta-pleated sheets (extended strands).",
                    "steps": [
                        {
                            "step": "Analyze structure hierarchy",
                            "work": "Amino acid sequence is primary; 3D folding is tertiary; multiple chains is quaternary. Only alpha-helix and beta-sheets are secondary.",
                            "result": "Alpha-helix and beta-pleated sheets is correct"
                        }
                    ],
                    "answer": "Alpha-helix and beta-pleated sheets",
                    "concept": "Protein structure"
                }
            },
            {
                "problem": "Which test is used for proteins?",
                "difficulty": "easy",
                "options": [
                    "Benedict's test",
                    "Iodine test",
                    "Biuret test",
                    "Sudan III test"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Biochemical tests"],
                    "find": "Protein detection test",
                    "principle": "Biuret test detects proteins by forming a violet color when peptide bonds react with copper ions in alkaline solution. It's specific for proteins and peptides with at least two peptide bonds.",
                    "steps": [
                        {
                            "step": "Analyze test specificities",
                            "work": "Benedict's tests reducing sugars; iodine tests starch; Sudan III tests lipids. Only Biuret tests proteins.",
                            "result": "Biuret test is correct"
                        }
                    ],
                    "answer": "Biuret test",
                    "concept": "Biochemical tests"
                }
            },
            {
                "problem": "The coenzyme derived from vitamin B3 is:",
                "difficulty": "hard",
                "options": [
                    "NAD",
                    "FAD",
                    "Coenzyme A",
                    "TPP"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Vitamin-coenzyme relationships"],
                    "find": "B3-derived coenzyme",
                    "principle": "NAD (Nicotinamide Adenine Dinucleotide) is derived from niacin (vitamin B3) and serves as a coenzyme in oxidation-reduction reactions, particularly in glycolysis and citric acid cycle.",
                    "steps": [
                        {
                            "step": "Analyze coenzyme origins",
                            "work": "FAD from B2; CoA from B5; TPP from B1. Only NAD comes from B3.",
                            "result": "NAD is correct"
                        }
                    ],
                    "answer": "NAD",
                    "concept": "Coenzymes"
                }
            },
            {
                "problem": "Which lipid is a major component of cell membranes?",
                "difficulty": "medium",
                "options": [
                    "Triglyceride",
                    "Phospholipid",
                    "Cholesterol",
                    "Wax"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Membrane structure"],
                    "find": "Membrane lipid component",
                    "principle": "Phospholipids are the major structural components of cell membranes, forming the lipid bilayer with their hydrophilic heads facing outward and hydrophobic tails inward, creating a barrier and framework for membrane proteins.",
                    "steps": [
                        {
                            "step": "Analyze lipid functions",
                            "work": "Triglycerides store energy; cholesterol modulates fluidity; waxes provide protection. Only phospholipids are primary membrane components.",
                            "result": "Phospholipid is correct"
                        }
                    ],
                    "answer": "Phospholipid",
                    "concept": "Membrane lipids"
                }
            },
            {
                "problem": "The sugar present in RNA is:",
                "difficulty": "easy",
                "options": [
                    "Deoxyribose",
                    "Ribose",
                    "Glucose",
                    "Fructose"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Nucleic acid composition"],
                    "find": "RNA sugar",
                    "principle": "RNA contains ribose sugar, which has a hydroxyl group at the 2' position, making it more reactive than deoxyribose in DNA which has only hydrogen at the 2' position.",
                    "steps": [
                        {
                            "step": "Analyze sugar components",
                            "work": "Deoxyribose is in DNA; glucose and fructose are energy sugars. Only ribose is in RNA.",
                            "result": "Ribose is correct"
                        }
                    ],
                    "answer": "Ribose",
                    "concept": "Nucleic acid structure"
                }
            },
            {
                "problem": "Which of the following is a non-reducing disaccharide?",
                "difficulty": "medium",
                "options": [
                    "Maltose",
                    "Lactose",
                    "Sucrose",
                    "Cellobiose"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Carbohydrate chemistry"],
                    "find": "Non-reducing disaccharide",
                    "principle": "Sucrose is a non-reducing disaccharide because both anomeric carbons (C1 of glucose and C2 of fructose) are involved in the glycosidic bond, leaving no free reducing ends.",
                    "steps": [
                        {
                            "step": "Analyze disaccharide structures",
                            "work": "Maltose, lactose, and cellobiose all have free anomeric carbons and are reducing sugars. Only sucrose has both anomeric carbons bonded.",
                            "result": "Sucrose is correct"
                        }
                    ],
                    "answer": "Sucrose",
                    "concept": "Reducing properties"
                }
            },
            {
                "problem": "The alpha-helix structure in proteins is stabilized by:",
                "difficulty": "medium",
                "options": [
                    "Disulfide bonds",
                    "Hydrogen bonds",
                    "Ionic bonds",
                    "Hydrophobic interactions"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Protein structure"],
                    "find": "Alpha-helix stabilization",
                    "principle": "The alpha-helix is stabilized by hydrogen bonds between the carbonyl oxygen of one amino acid and the amide hydrogen of another amino acid four residues away, running parallel to the helix axis.",
                    "steps": [
                        {
                            "step": "Analyze stabilizing forces",
                            "work": "Disulfide bonds stabilize tertiary structure; ionic and hydrophobic interactions are for tertiary/quaternary. Only hydrogen bonds specifically stabilize alpha-helices.",
                            "result": "Hydrogen bonds is correct"
                        }
                    ],
                    "answer": "Hydrogen bonds",
                    "concept": "Protein secondary structure"
                }
            },
            {
                "problem": "Which nitrogenous base is a purine?",
                "difficulty": "easy",
                "options": [
                    "Cytosine",
                    "Thymine",
                    "Adenine",
                    "Uracil"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Nucleic acid bases"],
                    "find": "Purine base",
                    "principle": "Adenine and guanine are purines, characterized by a double-ring structure (pyrimidine ring fused to imidazole ring). Cytosine, thymine, and uracil are pyrimidines with a single ring.",
                    "steps": [
                        {
                            "step": "Analyze base structures",
                            "work": "Cytosine, thymine, and uracil are pyrimidines. Only adenine is a purine.",
                            "result": "Adenine is correct"
                        }
                    ],
                    "answer": "Adenine",
                    "concept": "Purine vs pyrimidine"
                }
            },
            {
                "problem": "The enzyme class that catalyzes oxidation-reduction reactions is:",
                "difficulty": "medium",
                "options": [
                    "Transferases",
                    "Hydrolases",
                    "Oxidoreductases",
                    "Lyases"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Enzyme classification"],
                    "find": "Oxidation-reduction enzymes",
                    "principle": "Oxidoreductases catalyze oxidation-reduction reactions where electrons are transferred between molecules. Examples include dehydrogenases, oxidases, and peroxidases.",
                    "steps": [
                        {
                            "step": "Analyze enzyme classes",
                            "work": "Transferases transfer groups; hydrolases catalyze hydrolysis; lyases remove groups. Only oxidoreductases handle redox reactions.",
                            "result": "Oxidoreductases is correct"
                        }
                    ],
                    "answer": "Oxidoreductases",
                    "concept": "Enzyme classification"
                }
            },
            {
                "problem": "Which vitamin deficiency causes scurvy?",
                "difficulty": "easy",
                "options": [
                    "Vitamin A",
                    "Vitamin C",
                    "Vitamin D",
                    "Vitamin K"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Vitamin deficiencies"],
                    "find": "Scurvy-causing deficiency",
                    "principle": "Vitamin C (ascorbic acid) deficiency causes scurvy, characterized by bleeding gums, poor wound healing, and connective tissue abnormalities due to impaired collagen synthesis.",
                    "steps": [
                        {
                            "step": "Analyze deficiency diseases",
                            "work": "Vitamin A causes night blindness; D causes rickets; K causes bleeding. Only C deficiency causes scurvy.",
                            "result": "Vitamin C is correct"
                        }
                    ],
                    "answer": "Vitamin C",
                    "concept": "Vitamin deficiencies"
                }
            },
            {
                "problem": "The lipid used for long-term energy storage is:",
                "difficulty": "easy",
                "options": [
                    "Phospholipids",
                    "Triglycerides",
                    "Cholesterol",
                    "Glycolipids"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Lipid functions"],
                    "find": "Energy storage lipid",
                    "principle": "Triglycerides (triacylglycerols) are the primary lipids used for long-term energy storage in adipose tissue, providing more than twice the energy per gram compared to carbohydrates or proteins.",
                    "steps": [
                        {
                            "step": "Analyze lipid roles",
                            "work": "Phospholipids are for membranes; cholesterol for fluidity; glycolipids for recognition. Only triglycerides store energy.",
                            "result": "Triglycerides is correct"
                        }
                    ],
                    "answer": "Triglycerides",
                    "concept": "Lipid functions"
                }
            },
            {
                "problem": "Which level of protein structure is determined by the amino acid sequence?",
                "difficulty": "easy",
                "options": [
                    "Primary structure",
                    "Secondary structure",
                    "Tertiary structure",
                    "Quaternary structure"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Protein structure hierarchy"],
                    "find": "Amino acid sequence level",
                    "principle": "Primary structure is the linear sequence of amino acids in a polypeptide chain, determined by the genetic code and forming the foundation for all higher levels of protein structure.",
                    "steps": [
                        {
                            "step": "Analyze structure levels",
                            "work": "Secondary is local folding; tertiary is 3D structure; quaternary is multiple chains. Only primary is the sequence itself.",
                            "result": "Primary structure is correct"
                        }
                    ],
                    "answer": "Primary structure",
                    "concept": "Protein structure levels"
                }
            },
            {
                "problem": "The sugar found in DNA is:",
                "difficulty": "easy",
                "options": [
                    "Ribose",
                    "Deoxyribose",
                    "Glucose",
                    "Fructose"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Nucleic acid composition"],
                    "find": "DNA sugar",
                    "principle": "DNA contains 2'-deoxyribose sugar, which lacks a hydroxyl group at the 2' position compared to ribose in RNA, making DNA more chemically stable.",
                    "steps": [
                        {
                            "step": "Analyze sugar components",
                            "work": "Ribose is in RNA; glucose and fructose are monosaccharides. Only deoxyribose is in DNA.",
                            "result": "Deoxyribose is correct"
                        }
                    ],
                    "answer": "Deoxyribose",
                    "concept": "DNA structure"
                }
            },
            {
                "problem": "Which enzyme catalyzes the hydrolysis of lipids?",
                "difficulty": "medium",
                "options": [
                    "Amylase",
                    "Protease",
                    "Lipase",
                    "Nuclease"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Enzyme specificity"],
                    "find": "Lipid-digesting enzyme",
                    "principle": "Lipases catalyze the hydrolysis of triglycerides into fatty acids and glycerol, playing crucial roles in fat digestion and lipid metabolism.",
                    "steps": [
                        {
                            "step": "Analyze enzyme substrates",
                            "work": "Amylase digests carbs; protease digests proteins; nuclease digests nucleic acids. Only lipase acts on lipids.",
                            "result": "Lipase is correct"
                        }
                    ],
                    "answer": "Lipase",
                    "concept": "Enzyme specificity"
                }
            },
            {
                "problem": "The vitamin that acts as an antioxidant is:",
                "difficulty": "medium",
                "options": [
                    "Vitamin A",
                    "Vitamin C",
                    "Vitamin D",
                    "Vitamin K"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Vitamin functions"],
                    "find": "Antioxidant vitamin",
                    "principle": "Vitamin C (ascorbic acid) is a powerful water-soluble antioxidant that scavenges free radicals, protects against oxidative stress, and regenerates other antioxidants like vitamin E.",
                    "steps": [
                        {
                            "step": "Analyze antioxidant properties",
                            "work": "Vitamin A has some antioxidant role but less than C; D and K are not antioxidants. Vitamin C is the primary antioxidant vitamin.",
                            "result": "Vitamin C is correct"
                        }
                    ],
                    "answer": "Vitamin C",
                    "concept": "Antioxidant vitamins"
                }
            },
            {
                "problem": "Which bond is NOT involved in maintaining protein tertiary structure?",
                "difficulty": "hard",
                "options": [
                    "Peptide bond",
                    "Hydrogen bond",
                    "Disulfide bond",
                    "Hydrophobic interaction"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Protein stabilization"],
                    "find": "Non-tertiary structure bond",
                    "principle": "Peptide bonds form the primary structure (backbone) but do not contribute to maintaining tertiary structure, which is stabilized by hydrogen bonds, disulfide bonds, hydrophobic interactions, and ionic bonds.",
                    "steps": [
                        {
                            "step": "Analyze stabilizing forces",
                            "work": "Hydrogen bonds, disulfide bonds, and hydrophobic interactions all stabilize tertiary structure. Only peptide bonds are for primary structure.",
                            "result": "Peptide bond is correct answer"
                        }
                    ],
                    "answer": "Peptide bond",
                    "concept": "Protein stabilization"
                }
            },
            {
                "problem": "The polysaccharide used for energy storage in animals is:",
                "difficulty": "easy",
                "options": [
                    "Starch",
                    "Glycogen",
                    "Cellulose",
                    "Chitin"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Carbohydrate storage"],
                    "find": "Animal storage polysaccharide",
                    "principle": "Glycogen is the main polysaccharide used for energy storage in animals, stored primarily in liver and muscle tissues, with a highly branched structure similar to amylopectin but more extensively branched.",
                    "steps": [
                        {
                            "step": "Analyze storage polysaccharides",
                            "work": "Starch is plant storage; cellulose is plant structural; chitin is structural in arthropods. Only glycogen is animal storage.",
                            "result": "Glycogen is correct"
                        }
                    ],
                    "answer": "Glycogen",
                    "concept": "Storage polysaccharides"
                }
            },
            {
                "problem": "Which component is NOT part of a nucleotide?",
                "difficulty": "medium",
                "options": [
                    "Nitrogenous base",
                    "Amino acid",
                    "Pentose sugar",
                    "Phosphate group"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Nucleotide structure"],
                    "find": "Non-nucleotide component",
                    "principle": "A nucleotide consists of three components: a nitrogenous base (purine or pyrimidine), a pentose sugar (ribose or deoxyribose), and one or more phosphate groups. Amino acids are protein building blocks, not nucleotide components.",
                    "steps": [
                        {
                            "step": "Analyze nucleotide composition",
                            "work": "Nitrogenous base, pentose sugar, and phosphate are all nucleotide components. Only amino acids are not part of nucleotides.",
                            "result": "Amino acid is correct answer"
                        }
                    ],
                    "answer": "Amino acid",
                    "concept": "Nucleotide structure"
                }
            },
            {
                "problem": "The enzyme that follows Michaelis-Menten kinetics shows:",
                "difficulty": "hard",
                "options": [
                    "Linear relationship between rate and substrate",
                    "Hyperbolic relationship between rate and substrate",
                    "Sigmoidal relationship between rate and substrate",
                    "Exponential relationship between rate and substrate"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Enzyme kinetics"],
                    "find": "Michaelis-Menten curve shape",
                    "principle": "Enzymes following Michaelis-Menten kinetics show a hyperbolic relationship between reaction rate and substrate concentration, approaching maximum velocity (Vmax) asymptotically as substrate concentration increases.",
                    "steps": [
                        {
                            "step": "Analyze kinetic patterns",
                            "work": "Linear would be first-order; sigmoidal indicates cooperativity; exponential isn't typical. Only hyperbolic is Michaelis-Menten.",
                            "result": "Hyperbolic relationship between rate and substrate is correct"
                        }
                    ],
                    "answer": "Hyperbolic relationship between rate and substrate",
                    "concept": "Enzyme kinetics"
                }
            },
            {
                "problem": "Which vitamin is synthesized by intestinal bacteria?",
                "difficulty": "medium",
                "options": [
                    "Vitamin A",
                    "Vitamin C",
                    "Vitamin K",
                    "Vitamin D"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Vitamin synthesis"],
                    "find": "Bacteria-synthesized vitamin",
                    "principle": "Vitamin K (specifically K2) is synthesized by beneficial bacteria in the human intestine, contributing to the body's vitamin K requirements along with dietary sources.",
                    "steps": [
                        {
                            "step": "Analyze vitamin sources",
                            "work": "Vitamins A, C, and D are obtained from diet or sunlight. Only vitamin K is significantly produced by gut bacteria.",
                            "result": "Vitamin K is correct"
                        }
                    ],
                    "answer": "Vitamin K",
                    "concept": "Vitamin synthesis"
                }
            },
            {
                "problem": "The test that detects unsaturated lipids is:",
                "difficulty": "medium",
                "options": [
                    "Iodine test",
                    "Acrolein test",
                    "Sudan III test",
                    "Bromine water test"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Lipid tests"],
                    "find": "Unsaturated lipid test",
                    "principle": "The bromine water test detects unsaturation in lipids by the decolorization of bromine water, as bromine adds across double bonds in unsaturated fatty acids.",
                    "steps": [
                        {
                            "step": "Analyze test specificities",
                            "work": "Iodine tests for starch; acrolein tests for glycerol; Sudan III tests for lipids generally. Only bromine water tests unsaturation.",
                            "result": "Bromine water test is correct"
                        }
                    ],
                    "answer": "Bromine water test",
                    "concept": "Lipid tests"
                }
            },
            {
                "problem": "Which amino acid contains sulfur?",
                "difficulty": "medium",
                "options": [
                    "Glycine",
                    "Cysteine",
                    "Alanine",
                    "Serine"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Amino acid structure"],
                    "find": "Sulfur-containing amino acid",
                    "principle": "Cysteine contains a thiol (-SH) group in its side chain, and methionine contains a thioether group. Both are sulfur-containing amino acids important for protein structure and metabolism.",
                    "steps": [
                        {
                            "step": "Analyze amino acid compositions",
                            "work": "Glycine, alanine, and serine do not contain sulfur. Only cysteine has sulfur in its structure.",
                            "result": "Cysteine is correct"
                        }
                    ],
                    "answer": "Cysteine",
                    "concept": "Amino acid composition"
                }
            },
            {
                "problem": "The coenzyme derived from vitamin B2 is:",
                "difficulty": "hard",
                "options": [
                    "NAD",
                    "FAD",
                    "Coenzyme A",
                    "THF"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Vitamin-coenzyme relationships"],
                    "find": "B2-derived coenzyme",
                    "principle": "FAD (Flavin Adenine Dinucleotide) is derived from riboflavin (vitamin B2) and serves as a coenzyme in oxidation-reduction reactions, particularly in the electron transport chain and various dehydrogenase reactions.",
                    "steps": [
                        {
                            "step": "Analyze coenzyme origins",
                            "work": "NAD from B3; CoA from B5; THF from B9. Only FAD comes from B2.",
                            "result": "FAD is correct"
                        }
                    ],
                    "answer": "FAD",
                    "concept": "Coenzymes"
                }
            },
            {
                "problem": "Which carbohydrate is NOT a polysaccharide?",
                "difficulty": "easy",
                "options": [
                    "Starch",
                    "Glycogen",
                    "Cellulose",
                    "Maltose"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Carbohydrate classification"],
                    "find": "Non-polysaccharide",
                    "principle": "Maltose is a disaccharide composed of two glucose units, while starch, glycogen, and cellulose are all polysaccharides made of many glucose units with different linkages and structures.",
                    "steps": [
                        {
                            "step": "Analyze carbohydrate types",
                            "work": "Starch, glycogen, and cellulose are polysaccharides. Only maltose is a disaccharide.",
                            "result": "Maltose is correct answer"
                        }
                    ],
                    "answer": "Maltose",
                    "concept": "Carbohydrate classification"
                }
            },
            {
                "problem": "The enzyme that catalyzes the transfer of amino groups is:",
                "difficulty": "hard",
                "options": [
                    "Oxidoreductase",
                    "Transferase",
                    "Hydrolase",
                    "Lyase"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Enzyme classification"],
                    "find": "Amino group transfer enzyme",
                    "principle": "Transferases catalyze the transfer of functional groups (such as amino, methyl, or phosphate groups) from one molecule to another. Aminotransferases specifically transfer amino groups.",
                    "steps": [
                        {
                            "step": "Analyze enzyme functions",
                            "work": "Oxidoreductases handle redox; hydrolases catalyze hydrolysis; lyases remove groups. Only transferases transfer functional groups.",
                            "result": "Transferase is correct"
                        }
                    ],
                    "answer": "Transferase",
                    "concept": "Enzyme classification"
                }
            },
            {
                "problem": "Which vitamin deficiency causes beriberi?",
                "difficulty": "medium",
                "options": [
                    "Vitamin B1",
                    "Vitamin B2",
                    "Vitamin B3",
                    "Vitamin B6"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Vitamin deficiencies"],
                    "find": "Beriberi cause",
                    "principle": "Vitamin B1 (thiamine) deficiency causes beriberi, characterized by neurological symptoms, cardiovascular problems, and muscle weakness, particularly in populations relying on polished rice as a staple food.",
                    "steps": [
                        {
                            "step": "Analyze deficiency diseases",
                            "work": "B2 deficiency causes cheilosis; B3 causes pellagra; B6 causes neurological issues. Only B1 deficiency causes beriberi.",
                            "result": "Vitamin B1 is correct"
                        }
                    ],
                    "answer": "Vitamin B1",
                    "concept": "Vitamin deficiencies"
                }
            },
            {
                "problem": "The lipid that forms the basis of steroid hormones is:",
                "difficulty": "medium",
                "options": [
                    "Triglyceride",
                    "Phospholipid",
                    "Cholesterol",
                    "Fatty acid"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Lipid functions"],
                    "find": "Steroid hormone precursor",
                    "principle": "Cholesterol is the precursor for all steroid hormones, including cortisol, aldosterone, estrogen, progesterone, and testosterone, through various enzymatic modifications in endocrine glands.",
                    "steps": [
                        {
                            "step": "Analyze lipid roles",
                            "work": "Triglycerides store energy; phospholipids form membranes; fatty acids are components. Only cholesterol is steroid precursor.",
                            "result": "Cholesterol is correct"
                        }
                    ],
                    "answer": "Cholesterol",
                    "concept": "Lipid functions"
                }
            },
            {
                "problem": "Which structure is maintained by disulfide bonds in proteins?",
                "difficulty": "medium",
                "options": [
                    "Primary structure",
                    "Secondary structure",
                    "Tertiary structure",
                    "All of the above"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Protein stabilization"],
                    "find": "Disulfide bond role",
                    "principle": "Disulfide bonds between cysteine residues stabilize the tertiary and quaternary structures of proteins by creating covalent cross-links that help maintain the three-dimensional conformation.",
                    "steps": [
                        {
                            "step": "Analyze bond functions",
                            "work": "Primary structure is sequence; secondary is local folding. Only tertiary and quaternary structures are stabilized by disulfide bonds.",
                            "result": "Tertiary structure is correct"
                        }
                    ],
                    "answer": "Tertiary structure",
                    "concept": "Protein stabilization"
                }
            },
            {
                "problem": "The sugar that gives a positive seliwanoff's test is:",
                "difficulty": "hard",
                "options": [
                    "Glucose",
                    "Fructose",
                    "Galactose",
                    "Maltose"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Carbohydrate tests"],
                    "find": "Seliwanoff's test positive sugar",
                    "principle": "Seliwanoff's test is specific for ketoses like fructose, which form a cherry-red color when heated with resorcinol in acidic conditions, while aldoses react more slowly.",
                    "steps": [
                        {
                            "step": "Analyze test specificities",
                            "work": "Glucose, galactose, and maltose are aldoses. Only fructose is a ketose that gives rapid positive test.",
                            "result": "Fructose is correct"
                        }
                    ],
                    "answer": "Fructose",
                    "concept": "Carbohydrate tests"
                }
            },
            {
                "problem": "Which enzyme is NOT a proteolytic enzyme?",
                "difficulty": "medium",
                "options": [
                    "Pepsin",
                    "Trypsin",
                    "Amylase",
                    "Chymotrypsin"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Enzyme specificity"],
                    "find": "Non-proteolytic enzyme",
                    "principle": "Amylase catalyzes the hydrolysis of starch into sugars and is not a proteolytic enzyme. Pepsin, trypsin, and chymotrypsin are all proteases that digest proteins.",
                    "steps": [
                        {
                            "step": "Analyze enzyme functions",
                            "work": "Pepsin, trypsin, and chymotrypsin all digest proteins. Only amylase acts on carbohydrates.",
                            "result": "Amylase is correct answer"
                        }
                    ],
                    "answer": "Amylase",
                    "concept": "Enzyme specificity"
                }
            },
            {
                "problem": "The vitamin involved in blood clotting is:",
                "difficulty": "easy",
                "options": [
                    "Vitamin A",
                    "Vitamin D",
                    "Vitamin E",
                    "Vitamin K"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Vitamin functions"],
                    "find": "Blood clotting vitamin",
                    "principle": "Vitamin K is essential for the synthesis of several clotting factors (II, VII, IX, X) in the liver through its role in the carboxylation of glutamate residues to form gamma-carboxyglutamate.",
                    "steps": [
                        {
                            "step": "Analyze vitamin roles",
                            "work": "Vitamin A for vision; D for calcium; E as antioxidant. Only K is for blood clotting.",
                            "result": "Vitamin K is correct"
                        }
                    ],
                    "answer": "Vitamin K",
                    "concept": "Vitamin functions"
                }
            },
            {
                "problem": "Which is a saturated fatty acid?",
                "difficulty": "medium",
                "options": [
                    "Oleic acid",
                    "Linoleic acid",
                    "Stearic acid",
                    "Linolenic acid"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Fatty acid types"],
                    "find": "Saturated fatty acid",
                    "principle": "Stearic acid (18:0) is a saturated fatty acid with no double bonds, while oleic (18:1), linoleic (18:2), and linolenic (18:3) acids are unsaturated with one, two, and three double bonds respectively.",
                    "steps": [
                        {
                            "step": "Analyze fatty acid structures",
                            "work": "Oleic, linoleic, and linolenic are unsaturated. Only stearic acid is saturated.",
                            "result": "Stearic acid is correct"
                        }
                    ],
                    "answer": "Stearic acid",
                    "concept": "Fatty acid types"
                }
            },
            {
                "problem": "The process of protein denaturation involves loss of:",
                "difficulty": "medium",
                "options": [
                    "Primary structure",
                    "Secondary and tertiary structure",
                    "Amino acid sequence",
                    "Peptide bonds"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Protein denaturation"],
                    "find": "Denaturation effects",
                    "principle": "Denaturation involves the loss of secondary and tertiary structure through disruption of non-covalent bonds (hydrogen bonds, hydrophobic interactions), while the primary structure (amino acid sequence and peptide bonds) remains intact.",
                    "steps": [
                        {
                            "step": "Analyze denaturation process",
                            "work": "Primary structure and peptide bonds are covalent and not broken by denaturation. Only secondary/tertiary structures are lost.",
                            "result": "Secondary and tertiary structure is correct"
                        }
                    ],
                    "answer": "Secondary and tertiary structure",
                    "concept": "Protein denaturation"
                }
            },
            {
                "problem": "Which sugar is present in honey?",
                "difficulty": "easy",
                "options": [
                    "Sucrose",
                    "Lactose",
                    "Fructose",
                    "Maltose"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Natural sugar sources"],
                    "find": "Honey sugar",
                    "principle": "Honey contains primarily fructose and glucose in approximately equal amounts, along with small amounts of other sugars. The high fructose content gives honey its sweeter taste compared to sucrose.",
                    "steps": [
                        {
                            "step": "Analyze sugar compositions",
                            "work": "Sucrose is table sugar; lactose is milk sugar; maltose is malt sugar. Only fructose is a major component of honey.",
                            "result": "Fructose is correct"
                        }
                    ],
                    "answer": "Fructose",
                    "concept": "Natural sugars"
                }
            },
            {
                "problem": "The enzyme that follows sigmoidal kinetics typically shows:",
                "difficulty": "hard",
                "options": [
                    "Competitive inhibition",
                    "Non-competitive inhibition",
                    "Allosteric regulation",
                    "Michaelis-Menten behavior"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Enzyme regulation"],
                    "find": "Sigmoidal kinetics cause",
                    "principle": "Sigmoidal kinetics are characteristic of allosteric enzymes that have multiple subunits and show cooperative binding, where binding of substrate to one subunit affects the affinity of other subunits.",
                    "steps": [
                        {
                            "step": "Analyze kinetic patterns",
                            "work": "Competitive and non-competitive inhibition show different patterns; Michaelis-Menten is hyperbolic. Only allosteric regulation gives sigmoidal kinetics.",
                            "result": "Allosteric regulation is correct"
                        }
                    ],
                    "answer": "Allosteric regulation",
                    "concept": "Enzyme kinetics"
                }
            },
            {
                "problem": "Which vitamin is destroyed by heating?",
                "difficulty": "medium",
                "options": [
                    "Vitamin A",
                    "Vitamin C",
                    "Vitamin D",
                    "Vitamin K"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Vitamin stability"],
                    "find": "Heat-labile vitamin",
                    "principle": "Vitamin C (ascorbic acid) is heat-labile and easily destroyed by cooking, canning, and prolonged storage due to its susceptibility to oxidation, especially in the presence of heat and oxygen.",
                    "steps": [
                        {
                            "step": "Analyze vitamin stability",
                            "work": "Vitamins A, D, and K are relatively heat-stable. Only vitamin C is easily destroyed by heating.",
                            "result": "Vitamin C is correct"
                        }
                    ],
                    "answer": "Vitamin C",
                    "concept": "Vitamin stability"
                }
            },
            {
                "problem": "The lipid test that produces a pungent odor is:",
                "difficulty": "medium",
                "options": [
                    "Sudan III test",
                    "Acrolein test",
                    "Emulsion test",
                    "Saponification test"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Lipid tests"],
                    "find": "Pungent odor test",
                    "principle": "The acrolein test detects glycerol in lipids by heating with potassium bisulfate, producing acrolein which has a characteristic pungent, irritating odor, indicating the presence of fats or oils.",
                    "steps": [
                        {
                            "step": "Analyze test characteristics",
                            "work": "Sudan III stains; emulsion test forms emulsion; saponification makes soap. Only acrolein test produces pungent odor.",
                            "result": "Acrolein test is correct"
                        }
                    ],
                    "answer": "Acrolein test",
                    "concept": "Lipid tests"
                }
            }
        ]
    },

    "structural_organisation_in_animals": {
        "title": "Structural Organisation in Animals",
        "weightage": "3–4%",
        "introduction": "This unit deals with the study of animal tissues and their organization into organs and organ systems. It covers the four fundamental types of tissues - epithelial, connective, muscular, and neural - their structure, functions, and locations. A significant portion of NEET questions focuses on diagram-based identification, functional attributes, and specific examples of tissues and cells. The chapter also includes a comparative study of Earthworm, Cockroach, and Frog, emphasizing their morphology, anatomy, and physiology.",

        "topics": [
            {
                "name": "Animal Tissues",
                "description": "Study of the basic building blocks of the animal body - their structure, classification, and functions.",
                "subtopics": [
                    {
                        "name": "Epithelial Tissue",
                        "explanation": "Sheets of closely packed cells covering body surfaces, lining cavities, and forming glands. Classified based on layers (simple, stratified, pseudostratified) and cell shape (squamous, cuboidal, columnar)."
                    },
                    {
                        "name": "Connective Tissue",
                        "explanation": "Most abundant and widely distributed tissue. Characterized by few cells, abundant extracellular matrix, and fibers (collagen, elastin, reticular). Includes loose (areolar, adipose), dense (regular, irregular), specialized (cartilage, bone, blood) types."
                    },
                    {
                        "name": "Muscular Tissue",
                        "explanation": "Composed of elongated cells (fibers) specialized for contraction. Three types: Skeletal (voluntary, striated), Cardiac (involuntary, striated, branched with intercalated discs), Smooth (involuntary, non-striated, spindle-shaped)."
                    },
                    {
                        "name": "Neural Tissue",
                        "explanation": "The main component of the nervous system (brain, spinal cord, nerves). Comprises neurons (excitable cells for impulse transmission) and neuroglia (supporting cells)."
                    }
                ]
            },
            {
                "name": "Earthworm (Pheretima)",
                "description": "Detailed study of morphology, anatomy, and physiology of the earthworm as a representative of the Phylum Annelida.",
                "subtopics": [
                    {
                        "name": "Morphology",
                        "explanation": "Long, cylindrical, segmented body (metameres). Dorsal dark (blood vessel) and ventral pale. Clitellum (14th-16th segment) for cocoon formation. Setae for locomotion. Mouth (1st segment), anus (last segment)."
                    },
                    {
                        "name": "Anatomy and Physiology",
                        "explanation": "Alimentary canal (straight tube: pharynx, gizzard, stomach, intestine). Closed circulatory system (blood vessels, capillaries, dorsal and ventral vessels). Excretion by nephridia. Nervous system (nerve ring, ventral nerve cord). Reproduction (hermaphrodite but cross-fertilization)."
                    }
                ]
            },
            {
                "name": "Cockroach (Periplaneta americana)",
                "description": "Detailed study of morphology, anatomy, and physiology of the cockroach as a representative of the Phylum Arthropoda and Class Insecta.",
                "subtopics": [
                    {
                        "name": "Morphology",
                        "explanation": "Body divided into head, thorax, and abdomen. Head with compound eyes, antennae, and biting & chewing mouthparts. Thorax with three pairs of legs and two pairs of wings. Abdomen with 10 segments, cerci in both sexes, anal styles only in males."
                    },
                    {
                        "name": "Anatomy and Physiology",
                        "explanation": "Open circulatory system (haemocoel, haemolymph). Respiratory system (network of trachea, spiracles). Excretion by Malpighian tubules. Nervous system (ganglia, nerve cord). Reproduction (dioecious; male with phallomeres; female produces ootheca)."
                    }
                ]
            },
            {
                "name": "Frog (Rana tigrina)",
                "description": "Detailed study of morphology, anatomy, and physiology of the frog as a representative of the Phylum Amphibia.",
                "subtopics": [
                    {
                        "name": "Morphology",
                        "explanation": "Body divisible into head and trunk. Moist, slippery skin. Mucous and poison glands. Webbed digits in hind limbs. Male vs. female: vocal sacs and copulatory pad in males."
                    },
                    {
                        "name": "Anatomy and Physiology",
                        "explanation": "Alimentary canal (short, with liver and pancreas). Closed circulatory system (3-chambered heart, hepatic portal system, renal portal system). Respiration through skin (cutaneous), buccal cavity, and lungs. Well-developed nervous and sensory systems. Reproduction (dioecious, external fertilization)."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Tissue Specificity": [
                {
                    "name": "Structure-Function Correlation",
                    "description": "Relating the microscopic structure of each tissue type to its specific physiological role in the body (e.g., ciliated epithelium for movement, squamous epithelium for diffusion)."
                },
                {
                    "name": "Location and Identification",
                    "description": "Knowing where each tissue is found and identifying them from diagrams (e.g., hyaline cartilage in trachea, smooth muscle in blood vessels)."
                }
            ],
            "Organisation Hierarchy": [
                {
                    "name": "From Cells to Systems",
                    "description": "Understanding the progression: Cells -> Tissues -> Organs -> Organ Systems -> Organism."
                }
            ],
            "Comparative Anatomy": [
                {
                    "name": "Adaptive Features",
                    "description": "Comparing the anatomical and physiological systems (digestive, circulatory, excretory, reproductive, nervous) of earthworm, cockroach, and frog to understand adaptation."
                }
            ]
        },

        "problems": [
            {
                "problem": "Which type of epithelium forms the lining of blood vessels and air sacs of lungs?",
                "difficulty": "easy",
                "options": [
                    "Stratified squamous epithelium",
                    "Cuboidal epithelium",
                    "Columnar epithelium",
                    "Squamous epithelium"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Epithelial tissue types"],
                    "find": "Epithelium for lining blood vessels and alveoli",
                    "principle": "Simple squamous epithelium is composed of a single thin layer of flattened cells. This structure allows for easy passage of materials (like oxygen, CO2, nutrients) via diffusion and filtration, making it ideal for lining vessels and air sacs.",
                    "steps": [
                        {
                            "step": "Analyze function",
                            "work": "The function required is diffusion. Stratified is for protection, cuboidal/columnar for secretion/absorption. Only simple squamous is thin enough for efficient diffusion.",
                            "result": "Squamous epithelium is correct"
                        }
                    ],
                    "answer": "Squamous epithelium",
                    "concept": "Epithelial Tissue - Structure & Function"
                }
            },
            {
                "problem": "The cell responsible for the formation of cartilage matrix is:",
                "difficulty": "easy",
                "options": [
                    "Osteocyte",
                    "Chondroblast",
                    "Lymphocyte",
                    "Macrophage"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Connective tissue cells"],
                    "find": "Cell that forms cartilage matrix",
                    "principle": "Chondroblasts are the cells that secrete the extracellular matrix (chondrin) of cartilage. Once embedded in their own matrix, they mature into chondrocytes.",
                    "steps": [
                        {
                            "step": "Analyze cell functions",
                            "work": "Osteocytes form bone matrix; lymphocytes are blood cells for immunity; macrophages are phagocytic. Only chondroblasts are specific to cartilage formation.",
                            "result": "Chondroblast is correct"
                        }
                    ],
                    "answer": "Chondroblast",
                    "concept": "Specialized Connective Tissue - Cartilage"
                }
            },
            {
                "problem": "Intercalated discs are characteristic features of the muscles found in:",
                "difficulty": "medium",
                "options": [
                    "Limbs",
                    "Heart",
                    "Stomach",
                    "Ureter"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Muscular tissue types"],
                    "find": "Location of intercalated discs",
                    "principle": "Intercalated discs are complex junctional structures found only in cardiac muscle tissue. They allow the heart muscle to contract as a functional unit (syncytium) by providing strong adhesion and facilitating rapid electrical impulse transmission.",
                    "steps": [
                        {
                            "step": "Analyze muscle types",
                            "work": "Limbs have skeletal muscle (no discs); stomach and ureter have smooth muscle (no discs). Only the heart has cardiac muscle with intercalated discs.",
                            "result": "Heart is correct"
                        }
                    ],
                    "answer": "Heart",
                    "concept": "Muscular Tissue - Cardiac Muscle"
                }
            },
            {
                "problem": "Which of the following is NOT a component of areolar connective tissue?",
                "difficulty": "medium",
                "options": [
                    "Mast cells",
                    "Fibroblasts",
                    "Chondrocytes",
                    "Macrophages"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Loose connective tissue composition"],
                    "find": "Cell not found in areolar tissue",
                    "principle": "Areolar tissue is a loose connective tissue containing fibroblasts (that produce fibers), mast cells (involved in inflammation), and macrophages (for phagocytosis). Chondrocytes are cells found exclusively in cartilage.",
                    "steps": [
                        {
                            "step": "Analyze cell locations",
                            "work": "Mast cells, fibroblasts, and macrophages are all resident cells of areolar tissue. Chondrocytes are found in a different specialized connective tissue (cartilage).",
                            "result": "Chondrocytes is the correct answer"
                        }
                    ],
                    "answer": "Chondrocytes",
                    "concept": "Loose Connective Tissue - Areolar"
                }
            },
            {
                "problem": "In earthworm, the number of segments in which the clitellum is present is:",
                "difficulty": "easy",
                "options": [
                    "12th-13th-14th",
                    "13th-14th-15th",
                    "14th-15th-16th",
                    "15th-16th-17th"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Earthworm morphology"],
                    "find": "Clitellum segments",
                    "principle": "The clitellum is a prominent, smooth, girdle-like structure located in the 14th, 15th, and 16th segments of a mature earthworm. It secretes the cocoon which holds the fertilized eggs.",
                    "steps": [
                        {
                            "step": "Recall specific fact",
                            "work": "This is a specific morphological feature that must be memorized. The clitellum occupies segments 14, 15, and 16.",
                            "result": "14th-15th-16th is correct"
                        }
                    ],
                    "answer": "14th-15th-16th",
                    "concept": "Earthworm - Morphology"
                }
            },
            {
                "problem": "The respiratory system of cockroach consists of:",
                "difficulty": "easy",
                "options": [
                    "Gills",
                    "Lungs",
                    "Skin",
                    "Trachea"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Cockroach anatomy"],
                    "find": "Respiratory organ of cockroach",
                    "principle": "Cockroaches, like most insects, have a tracheal system for respiration. It is a network of air-filled tubes (tracheae) that open to the outside through small pores called spiracles, delivering oxygen directly to the tissues.",
                    "steps": [
                        {
                            "step": "Analyze respiratory adaptations",
                            "work": "Gills are for aquatic animals; lungs for vertebrates; skin for earthworms and frogs. Only trachea is the respiratory structure for cockroaches and insects.",
                            "result": "Trachea is correct"
                        }
                    ],
                    "answer": "Trachea",
                    "concept": "Cockroach - Respiratory System"
                }
            },
            {
                "problem": "Which of the following statements is true for frog?",
                "difficulty": "medium",
                "options": [
                    "Fertilization is internal",
                    "It has a four-chambered heart",
                    "Body is divisible into head, neck, and trunk",
                    "It has a dual mode of respiration"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Frog biology"],
                    "find": "Correct statement about frog",
                    "principle": "Frogs are amphibians and exhibit a dual mode of respiration: they can breathe through their moist skin (cutaneous respiration) when in water or hibernating, and through their lungs (pulmonary respiration) on land.",
                    "steps": [
                        {
                            "step": "Evaluate each option",
                            "work": "Fertilization is external. Heart is three-chambered. Body is divisible into head and trunk (no neck). The only correct statement is about dual respiration.",
                            "result": "It has a dual mode of respiration is correct"
                        }
                    ],
                    "answer": "It has a dual mode of respiration",
                    "concept": "Frog - Respiratory System & General Features"
                }
            },
            {
                "problem": "The type of epithelium found in the inner lining of the stomach and intestine is:",
                "difficulty": "easy",
                "options": [
                    "Ciliated epithelium",
                    "Squamous epithelium",
                    "Columnar epithelium",
                    "Cuboidal epithelium"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Epithelial tissue location"],
                    "find": "Epithelium of digestive tract lining",
                    "principle": "Simple columnar epithelium is found in the inner lining of the stomach and intestine. The tall, column-shaped cells provide a greater surface area for secretion (e.g., gastric juice) and absorption (e.g., nutrients). They often have microvilli.",
                    "steps": [
                        {
                            "step": "Analyze function and location",
                            "work": "Ciliated moves particles; squamous is for diffusion; cuboidal is for ducts and glands. Only columnar is specialized for secretion and absorption in the gut.",
                            "result": "Columnar epithelium is correct"
                        }
                    ],
                    "answer": "Columnar epithelium",
                    "concept": "Epithelial Tissue - Location"
                }
            },
            {
                "problem": "The blood cells that are involved in immune responses are:",
                "difficulty": "easy",
                "options": [
                    "Erythrocytes and Thrombocytes",
                    "Leucocytes and Thrombocytes",
                    "Erythrocytes and Leucocytes",
                    "Leucocytes only"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Fluid connective tissue - Blood"],
                    "find": "Cells for immunity",
                    "principle": "Leucocytes (White Blood Cells - WBCs) are the cells responsible for the body's immune defenses. They identify, attack, and destroy pathogens, produce antibodies, and coordinate the immune response. Erythrocytes carry oxygen and thrombocytes aid in clotting.",
                    "steps": [
                        {
                            "step": "Analyze blood cell functions",
                            "work": "Erythrocytes (RBCs) carry O2/CO2; thrombocytes (platelets) are for clotting. Only leucocytes (WBCs like lymphocytes, neutrophils) are involved in immunity.",
                            "result": "Leucocytes only is correct"
                        }
                    ],
                    "answer": "Leucocytes only",
                    "concept": "Blood - Functions of Cells"
                }
            },
            {
                "problem": "The excretory organs in earthworm are:",
                "difficulty": "easy",
                "options": [
                    "Nephridia",
                    "Malpighian tubules",
                    "Kidneys",
                    "Flame cells"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Earthworm anatomy"],
                    "find": "Excretory organ of earthworm",
                    "principle": "Nephridia are the segmentally arranged excretory organs in earthworms (and other annelids). They are coiled tubules that remove nitrogenous wastes (ammonia, urea) from the body fluid and discharge them to the outside.",
                    "steps": [
                        {
                            "step": "Match organism to excretory structure",
                            "work": "Malpighian tubules are in insects like cockroach; kidneys are in vertebrates; flame cells are in flatworms. Only nephridia are found in earthworms.",
                            "result": "Nephridia is correct"
                        }
                    ],
                    "answer": "Nephridia",
                    "concept": "Earthworm - Excretory System"
                }
            },
            {
                "problem": "The mouthparts of cockroach are of which type?",
                "difficulty": "medium",
                "options": [
                    "Siphoning type",
                    "Piercing and sucking type",
                    "Biting and chewing type",
                    "Sponging type"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Cockroach morphology"],
                    "find": "Type of mouthparts",
                    "principle": "The cockroach is a scavenger with mandibles designed for biting and chewing solid food. Its mouthparts include a labrum, a pair of mandibles, a pair of maxillae, a labium, and a hypopharynx, all adapted for cutting and grinding.",
                    "steps": [
                        {
                            "step": "Analyze feeding habit",
                            "work": "Siphoning is for butterflies; piercing/sucking for mosquitoes; sponging for houseflies. Cockroaches have primitive biting and chewing mouthparts.",
                            "result": "Biting and chewing type is correct"
                        }
                    ],
                    "answer": "Biting and chewing type",
                    "concept": "Cockroach - Morphology"
                }
            },
            {
                "problem": "In male frogs, a copulatory pad is present on:",
                "difficulty": "hard",
                "options": [
                    "The first digit of forelimb",
                    "The first digit of hind limb",
                    "The second digit of forelimb",
                    "The second digit of hind limb"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Frog - Sexual Dimorphism"],
                    "find": "Location of copulatory pad",
                    "principle": "During amplexus (mating), the male frog grips the female. To aid in this, mature male frogs develop a rough, nuptial or copulatory pad on the ventral side of the first digit (the 'thumb') of each forelimb.",
                    "steps": [
                        {
                            "step": "Recall specific anatomical detail",
                            "work": "This is a key feature to distinguish males from females. The pad is specifically on the first digit of the forelimb.",
                            "result": "The first digit of forelimb is correct"
                        }
                    ],
                    "answer": "The first digit of forelimb",
                    "concept": "Frog - Reproductive System"
                }
            },
            {
                "problem": "Tendons and ligaments are examples of:",
                "difficulty": "medium",
                "options": [
                    "Dense regular connective tissue",
                    "Dense irregular connective tissue",
                    "Loose connective tissue",
                    "Specialized connective tissue"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Connective tissue types"],
                    "find": "Tissue type for tendons/ligaments",
                    "principle": "Dense regular connective tissue has densely packed collagen fibers arranged in parallel bundles. This arrangement provides great tensile strength in one direction, making it perfect for tendons (connecting muscle to bone) and ligaments (connecting bone to bone).",
                    "steps": [
                        {
                            "step": "Analyze structure and function",
                            "work": "Dense irregular has random fibers for strength in all directions (e.g., dermis). Loose is areolar/adipose. Specialized is bone/cartilage/blood. The parallel fibers define dense regular tissue.",
                            "result": "Dense regular connective tissue is correct"
                        }
                    ],
                    "answer": "Dense regular connective tissue",
                    "concept": "Dense Connective Tissue"
                }
            },
            {
                "problem": "The body cavity of cockroach is called:",
                "difficulty": "medium",
                "options": [
                    "Coelom",
                    "Haemocoel",
                    "Pseudocoel",
                    "Blastocoel"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cockroach anatomy - Body cavity"],
                    "find": "Name of cockroach body cavity",
                    "principle": "Arthropods like the cockroach have an open circulatory system. The primary body cavity is called a haemocoel, which is filled with haemolymph (blood). The true coelom is reduced in these animals.",
                    "steps": [
                        {
                            "step": "Match phylum to body cavity type",
                            "work": "Coelom is for earthworms and vertebrates; pseudocoel for nematodes; blastocoel is an embryonic stage. The open circulatory system defines the haemocoel.",
                            "result": "Haemocoel is correct"
                        }
                    ],
                    "answer": "Haemocoel",
                    "concept": "Cockroach - Circulatory System"
                }
            },
            {
                "problem": "Chloragogen cells in earthworm are analogous to:",
                "difficulty": "hard",
                "options": [
                    "Kidney of vertebrates",
                    "Liver of vertebrates",
                    "Heart of vertebrates",
                    "Lung of vertebrates"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Earthworm physiology"],
                    "find": "Vertebrate analogue of chloragogen cells",
                    "principle": "Chloragogen cells, found in the coelomic fluid of earthworms, are involved in the storage of glycogen and fat, deamination of amino acids, and excretion of urea. Because of these multifunctional roles, they are often called the 'liver' of the earthworm.",
                    "steps": [
                        {
                            "step": "Analyze function",
                            "work": "The key functions are metabolism (glycogen/fat storage) and detoxification (deamination), which are primary functions of the vertebrate liver.",
                            "result": "Liver of vertebrates is correct"
                        }
                    ],
                    "answer": "Liver of vertebrates",
                    "concept": "Earthworm - Physiology"
                }
            },

            {
                "problem": "Which of the following is NOT a location for simple squamous epithelium?",
                "difficulty": "medium",
                "options": [
                    "Lining of blood vessels",
                    "Wall of alveoli",
                    "Lining of mouth",
                    "Bowman's capsule"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Epithelial tissue location"],
                    "find": "Incorrect location for simple squamous",
                    "principle": "Simple squamous epithelium is found where filtration or diffusion is needed: endothelium of blood vessels, alveoli of lungs, and Bowman's capsule in nephrons. The lining of the mouth is a mechanical abrasion area and is lined by stratified squamous epithelium for protection.",
                    "steps": [
                        {
                            "step": "Analyze each location",
                            "work": "Blood vessels, alveoli, and Bowman's capsule require thin layers for exchange. The mouth requires a protective, multi-layered epithelium.",
                            "result": "Lining of mouth is the incorrect location"
                        }
                    ],
                    "answer": "Lining of mouth",
                    "concept": "Epithelial Tissue - Location"
                }
            },
            {
                "problem": "The matrix of cartilage is secreted by:",
                "difficulty": "easy",
                "options": [
                    "Osteoblasts",
                    "Chondrocytes",
                    "Axons",
                    "Fibroblasts"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cartilage histology"],
                    "find": "Cells secreting cartilage matrix",
                    "principle": "Chondrocytes are the mature cells found in lacunae within the cartilage matrix. They are responsible for maintaining the extracellular matrix, which is primarily composed of chondroitin sulfate.",
                    "steps": [
                        {
                            "step": "Analyze cell functions",
                            "work": "Osteoblasts form bone; axons are part of neurons; fibroblasts form fibers in connective tissue. Chondrocytes are specific to cartilage.",
                            "result": "Chondrocytes is correct"
                        }
                    ],
                    "answer": "Chondrocytes",
                    "concept": "Connective Tissue - Cartilage"
                }
            },
            {
                "problem": "The type of neuron that carries impulses from the central nervous system to effectors is called:",
                "difficulty": "medium",
                "options": [
                    "Sensory neuron",
                    "Motor neuron",
                    "Interneuron",
                    "Afferent neuron"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Neural tissue - Neuron types"],
                    "find": "Neuron carrying CNS to effector",
                    "principle": "Motor neurons (efferent neurons) carry impulses away from the Central Nervous System (CNS) to effector organs like muscles or glands, resulting in a response. Sensory (afferent) neurons carry impulses from receptors to the CNS.",
                    "steps": [
                        {
                            "step": "Analyze direction of impulse",
                            "work": "Sensory/Afferent: towards CNS. Interneurons: within CNS. Only motor neurons carry impulses from CNS to effectors.",
                            "result": "Motor neuron is correct"
                        }
                    ],
                    "answer": "Motor neuron",
                    "concept": "Neural Tissue - Functional Types"
                }
            },
            {
                "problem": "The body of an earthworm is divided into segments called:",
                "difficulty": "easy",
                "options": [
                    "Septae",
                    "Metameres",
                    "Somites",
                    "Sclerites"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Earthworm morphology"],
                    "find": "Term for body segments",
                    "principle": "The body of an earthworm exhibits metameric segmentation, meaning it is divided into numerous ring-like segments called metameres or somites. This segmentation is both external and internal.",
                    "steps": [
                        {
                            "step": "Recall specific terminology",
                            "work": "Septae are internal partitions; somites are an alternative name but less specific; sclerites are cuticular plates in arthropods. Metameres is the precise term for annelid segments.",
                            "result": "Metameres is correct"
                        }
                    ],
                    "answer": "Metameres",
                    "concept": "Earthworm - Morphology"
                }
            },
            {
                "problem": "Which part of the cockroach's gut helps in grinding the food?",
                "difficulty": "medium",
                "options": [
                    "Crop",
                    "Gizzard",
                    "Hepatic caeca",
                    "Mesenteron"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cockroach digestive system"],
                    "find": "Structure for grinding food",
                    "principle": "The gizzard, or proventriculus, is a muscular and thick-walled part of the cockroach's foregut. Its inner lining has chitinous teeth and plates that mechanically grind the food before it passes to the midgut for digestion.",
                    "steps": [
                        {
                            "step": "Analyze function of gut parts",
                            "work": "Crop stores food; hepatic caeca secrete enzymes; mesenteron is midgut for digestion. Only the gizzard is specialized for grinding.",
                            "result": "Gizzard is correct"
                        }
                    ],
                    "answer": "Gizzard",
                    "concept": "Cockroach - Digestive System"
                }
            },
            {
                "problem": "The heart of a frog has how many chambers?",
                "difficulty": "easy",
                "options": [
                    "Two",
                    "Three",
                    "Four",
                    "One"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Frog anatomy - Circulatory system"],
                    "find": "Number of chambers in frog heart",
                    "principle": "Frogs, being amphibians, have a three-chambered heart: two atria (right and left) and one ventricle. This allows for some mixing of oxygenated and deoxygenated blood, which is sufficient for their ectothermic metabolism.",
                    "steps": [
                        {
                            "step": "Recall vertebrate heart anatomy",
                            "work": "Fish have 2; reptiles have 3 (incompletely separated); birds and mammals have 4. Frogs have a classic 3-chambered heart.",
                            "result": "Three is correct"
                        }
                    ],
                    "answer": "Three",
                    "concept": "Frog - Circulatory System"
                }
            },
            {
                "problem": "Goblet cells are a type of:",
                "difficulty": "medium",
                "options": [
                    "Unicellular gland",
                    "Multicellular gland",
                    "Connective tissue cell",
                    "Neuroglial cell"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Epithelial tissue - Glands"],
                    "find": "Classification of goblet cells",
                    "principle": "Goblet cells are modified columnar epithelial cells that function as unicellular glands. They synthesize and secrete mucus, which lubricates and protects the lining of the respiratory and digestive tracts.",
                    "steps": [
                        {
                            "step": "Analyze gland types",
                            "work": "Multicellular glands are structures like salivary glands. Goblet cells are single, specialized cells dispersed among other epithelial cells, making them unicellular glands.",
                            "result": "Unicellular gland is correct"
                        }
                    ],
                    "answer": "Unicellular gland",
                    "concept": "Epithelial Tissue - Glandular Epithelium"
                }
            },
            {
                "problem": "The fertilized eggs of an earthworm are deposited in a protective structure called a:",
                "difficulty": "easy",
                "options": [
                    "Ootheca",
                    "Cocoon",
                    "Cyst",
                    "Pupa"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Earthworm reproduction"],
                    "find": "Protective structure for eggs",
                    "principle": "The clitellum of the earthworm secretes a cocoon, which is a leathery case. The fertilized eggs are deposited into this cocoon, which is then shed into the soil where embryonic development occurs.",
                    "steps": [
                        {
                            "step": "Match structure to organism",
                            "work": "Ootheca is for cockroaches; cyst is a dormant stage; pupa is a stage in insect metamorphosis. Cocoon is specific to earthworms and some other annelids.",
                            "result": "Cocoon is correct"
                        }
                    ],
                    "answer": "Cocoon",
                    "concept": "Earthworm - Reproductive System"
                }
            },
            {
                "problem": "Sensory perception in cockroach is NOT performed by:",
                "difficulty": "medium",
                "options": [
                    "Antennae",
                    "Compound eyes",
                    "Anal cerci",
                    "Malpighian tubules"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Cockroach sensory system"],
                    "find": "Non-sensory structure",
                    "principle": "Antennae (touch, smell), compound eyes (sight), and anal cerci (detect air movements/vibrations) are all sensory structures. Malpighian tubules are excretory organs, involved in removing waste from the haemolymph.",
                    "steps": [
                        {
                            "step": "Analyze function of each organ",
                            "work": "All options except Malpighian tubules are involved in receiving stimuli from the environment.",
                            "result": "Malpighian tubules is the correct answer"
                        }
                    ],
                    "answer": "Malpighian tubules",
                    "concept": "Cockroach - Sensory and Excretory Systems"
                }
            },
            {
                "problem": "During hibernation, the frog respires mainly through:",
                "difficulty": "medium",
                "options": [
                    "Buccopharyngeal cavity",
                    "Lungs",
                    "Skin",
                    "Gills"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Frog respiration - Hibernation"],
                    "find": "Primary respiratory organ during hibernation",
                    "principle": "During hibernation (aestivation in summer), frogs burrow into mud and their metabolic rate drops. Their lungs are non-functional in this state. Cutaneous respiration (through moist skin) becomes the sole mode of gaseous exchange.",
                    "steps": [
                        {
                            "step": "Analyze adaptive strategy",
                            "work": "Buccopharyngeal and lung respiration require active ventilation, which is minimal during hibernation. Gills are absent in adult frogs. The skin is passive and efficient for low oxygen needs.",
                            "result": "Skin is correct"
                        }
                    ],
                    "answer": "Skin",
                    "concept": "Frog - Respiratory Adaptations"
                }
            },
            {
                "problem": "The protein present in the matrix of cartilage is:",
                "difficulty": "hard",
                "options": [
                    "Ossein",
                    "Chondrin",
                    "Collagen",
                    "Keratin"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cartilage biochemistry"],
                    "find": "Matrix protein of cartilage",
                    "principle": "The matrix of cartilage is firm but flexible due to a gel-like ground substance containing chondroitin sulfate proteins. This specific protein-carbohydrate complex is called chondrin. Collagen fibers are embedded within this matrix.",
                    "steps": [
                        {
                            "step": "Analyze tissue-specific matrices",
                            "work": "Ossein is for bone matrix; collagen is a fiber found in many tissues; keratin is for epidermis. Chondrin is the specific ground substance of cartilage.",
                            "result": "Chondrin is correct"
                        }
                    ],
                    "answer": "Chondrin",
                    "concept": "Connective Tissue - Cartilage Matrix"
                }
            },
            {
                "problem": "The blood gland in earthworm is present in which segments?",
                "difficulty": "hard",
                "options": [
                    "1st, 2nd, 3rd",
                    "4th, 5th, 6th",
                    "7th, 8th, 9th",
                    "10th, 11th, 12th"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Earthworm anatomy - Circulatory system"],
                    "find": "Location of blood gland",
                    "principle": "The blood gland is a specialized organ in earthworms responsible for producing blood cells and haemoglobin. It is located in the anterior region, specifically on the 4th, 5th, and 6th segments.",
                    "steps": [
                        {
                            "step": "Recall specific anatomical detail",
                            "work": "This is a precise fact. The blood gland is associated with the early segments involved in circulation.",
                            "result": "4th, 5th, 6th is correct"
                        }
                    ],
                    "answer": "4th, 5th, 6th",
                    "concept": "Earthworm - Circulatory System"
                }
            },
            {
                "problem": "Spermatheca in earthworm is used for:",
                "difficulty": "medium",
                "options": [
                    "Producing sperm",
                    "Storing received sperm",
                    "Producing ova",
                    "Grinding soil"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Earthworm reproduction"],
                    "find": "Function of spermatheca",
                    "principle": "Earthworms are hermaphrodites but practice cross-fertilization. During mating, sperm is exchanged and stored in organs called spermathecae (present in 6th-9th segments). This stored sperm is later used to fertilize the eggs when the cocoon is formed.",
                    "steps": [
                        {
                            "step": "Analyze reproductive process",
                            "work": "Sperm is produced by testes; ova are produced by ovaries. Spermatheca is specifically for storage of partner's sperm.",
                            "result": "Storing received sperm is correct"
                        }
                    ],
                    "answer": "Storing received sperm",
                    "concept": "Earthworm - Reproductive System"
                }
            },
            {
                "problem": "The vision in cockroach is referred to as mosaic vision because:",
                "difficulty": "hard",
                "options": [
                    "It can see multiple colors",
                    "It has multiple lenses forming multiple images",
                    "It can see in complete darkness",
                    "Its eyes are located on the side of the head"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cockroach sensory biology"],
                    "find": "Reason for mosaic vision",
                    "principle": "The compound eye of a cockroach is made of thousands of individual visual units called ommatidia. Each ommatidium forms a part of the entire image, like a tile in a mosaic. The brain integrates these partial images into a complete picture, providing a wide field of view and excellent detection of movement.",
                    "steps": [
                        {
                            "step": "Understand compound eye structure",
                            "work": "The key characteristic is the presence of multiple lenses (from each ommatidium), each contributing a piece of the total visual field.",
                            "result": "It has multiple lenses forming multiple images is correct"
                        }
                    ],
                    "answer": "It has multiple lenses forming multiple images",
                    "concept": "Cockroach - Compound Eye"
                }
            },
            {
                "problem": "Which of these is a difference between a male and female frog?",
                "difficulty": "easy",
                "options": [
                    " Presence of tympanum",
                    " Presence of webbed feet",
                    " Presence of vocal sacs",
                    " Presence of eyes"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Frog - Sexual Dimorphism"],
                    "find": "Feature present only in males",
                    "principle": "Male frogs possess vocal sacs, which are resonating chambers that amplify their mating calls to attract females. This is a secondary sexual characteristic not found in females. Tympanum (ear drum), webbed feet, and eyes are present in both sexes.",
                    "steps": [
                        {
                            "step": "Identify secondary sexual characteristics",
                            "work": "All other options are essential anatomical features common to both sexes. Only vocal sacs are a dimorphic feature specific to males.",
                            "result": "Presence of vocal sacs is correct"
                        }
                    ],
                    "answer": "Presence of vocal sacs",
                    "concept": "Frog - Reproductive System & Dimorphism"
                }
            },
            {
                "problem": "Areolar tissue is an example of:",
                "difficulty": "easy",
                "options": [
                    "Loose connective tissue",
                    "Dense connective tissue",
                    "Specialized connective tissue",
                    "Liquid connective tissue"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Connective tissue classification"],
                    "find": "Classification of areolar tissue",
                    "principle": "Areolar tissue is classified as loose connective tissue. It has a loose, irregular arrangement of collagen and elastin fibers with various cells (fibroblasts, macrophages, mast cells) embedded in a semi-fluid ground substance. It serves as a packing tissue and connects skin to underlying muscles.",
                    "steps": [
                        {
                            "step": "Analyze tissue structure",
                            "work": "Dense connective tissue has tightly packed fibers (tendons); specialized includes bone/cartilage; liquid is blood. Areolar's loose, open framework defines it as loose connective tissue.",
                            "result": "Loose connective tissue is correct"
                        }
                    ],
                    "answer": "Loose connective tissue",
                    "concept": "Connective Tissue - Classification"
                }
            },
            {
                "problem": "The typhlosole in earthworm is related to:",
                "difficulty": "hard",
                "options": [
                    "Respiration",
                    "Reproduction",
                    "Digestion",
                    "Excretion"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Earthworm anatomy - Digestive system"],
                    "find": "System associated with typhlosole",
                    "principle": "The typhlosole is a highly folded, internal median dorsal flap in the intestine of the earthworm (from the 26th segment to the end). It significantly increases the effective surface area for absorption of digested nutrients.",
                    "steps": [
                        {
                            "step": "Recall organ function",
                            "work": "It is an internal structure of the intestine, the primary organ of digestion and absorption.",
                            "result": "Digestion is correct"
                        }
                    ],
                    "answer": "Digestion",
                    "concept": "Earthworm - Digestive System"
                }
            },
            {
                "problem": "The nervous system of cockroach consists of a series of ganglia connected by:",
                "difficulty": "medium",
                "options": [
                    "A dorsal nerve cord",
                    "A ventral nerve cord",
                    "A lateral nerve cord",
                    "Nerve ring only"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cockroach nervous system"],
                    "find": "Structure connecting ganglia",
                    "principle": "The cockroach, like other arthropods, has a nervous system consisting of a brain (supraesophageal ganglion) and a chain of segmental ganglia on the ventral side of the body. These ganglia are connected by a double, solid ventral nerve cord.",
                    "steps": [
                        {
                            "step": "Compare invertebrate nervous systems",
                            "work": "Annelids also have a ventral nerve cord. Vertebrates have a dorsal nerve cord. The ventral location is characteristic of many invertebrates including cockroaches.",
                            "result": "A ventral nerve cord is correct"
                        }
                    ],
                    "answer": "A ventral nerve cord",
                    "concept": "Cockroach - Nervous System"
                }
            },
            {
                "problem": "The RBCs of frog are:",
                "difficulty": "medium",
                "options": [
                    " Nucleated and oval",
                    " Non-nucleated and circular",
                    " Nucleated and circular",
                    " Non-nucleated and biconcave"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Frog - Blood cells"],
                    "find": "Description of frog RBCs",
                    "principle": "Unlike mammalian erythrocytes which are non-nucleated and biconcave, frog erythrocytes (RBCs) are nucleated, oval, and flat. This is a common feature in non-mammalian vertebrates.",
                    "steps": [
                        {
                            "step": "Compare vertebrate RBCs",
                            "work": "Mammals: non-nucleated, biconcave, circular. Other vertebrates (like frogs): nucleated, oval.",
                            "result": "Nucleated and oval is correct"
                        }
                    ],
                    "answer": "Nucleated and oval",
                    "concept": "Frog - Circulatory System (Blood)"
                }
            },
            {
                "problem": "The cells that produce the fibers in areolar connective tissue are:",
                "difficulty": "easy",
                "options": [
                    "Mast cells",
                    "Macrophages",
                    "Fibroblasts",
                    "Plasma cells"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Connective tissue cells"],
                    "find": "Fiber-producing cells",
                    "principle": "Fibroblasts are the most common cells in connective tissue. They are responsible for synthesizing and secreting the precursors of collagen, elastin, and reticular fibers that form the extracellular matrix.",
                    "steps": [
                        {
                            "step": "Analyze cell functions",
                            "work": "Mast cells release histamine; macrophages are phagocytic; plasma cells produce antibodies. Only fibroblasts are involved in fiber production.",
                            "result": "Fibroblasts is correct"
                        }
                    ],
                    "answer": "Fibroblasts",
                    "concept": "Connective Tissue - Cell Functions"
                }
            },
            {
                "problem": "In which segment of earthworm is the female genital pore located?",
                "difficulty": "medium",
                "options": [
                    "14th",
                    "16th",
                    "18th",
                    "20th"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Earthworm reproduction - Morphology"],
                    "find": "Segment of female genital pore",
                    "principle": "The female genital pore is a single opening located mid-ventrally on the 14th segment. It is through which eggs are laid.",
                    "steps": [
                        {
                            "step": "Recall specific segment numbers",
                            "work": "The clitellum is on 14-16. The female pore is precisely on the 14th segment. The male pores are on the 18th segment.",
                            "result": "14th is correct"
                        }
                    ],
                    "answer": "14th",
                    "concept": "Earthworm - Reproductive Morphology"
                }
            },
            {
                "problem": "The fat body in cockroach is associated with:",
                "difficulty": "hard",
                "options": [
                    "Digestion",
                    "Respiration",
                    "Storage and excretion",
                    "Neural control"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Cockroach physiology"],
                    "find": "Function of fat body",
                    "principle": "The fat body is a loose, lobular tissue found in the haemocoel of cockroaches. It is analogous to the vertebrate liver and adipose tissue. It serves multiple functions: storage of nutrients (glycogen, fat), excretion (storage of uric acid), and synthesis of haemolymph proteins.",
                    "steps": [
                        {
                            "step": "Analyze multifunctional organ",
                            "work": "While it is not primarily for digestion, respiration, or neural control, its roles in storing energy and handling waste products are paramount.",
                            "result": "Storage and excretion is correct"
                        }
                    ],
                    "answer": "Storage and excretion",
                    "concept": "Cockroach - Physiology (Fat Body)"
                }
            },
            {
                "problem": "The pigment cells in the frog's skin are called:",
                "difficulty": "medium",
                "options": [
                    "Melanocytes",
                    "Chromatophores",
                    "Erythrocytes",
                    "Leucophores"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Frog integumentary system"],
                    "find": "Pigment cells in skin",
                    "principle": "Chromatophores are specialized pigment-containing cells in the skin of frogs (and other amphibians, reptiles, fish) that are responsible for color change and camouflage. Melanocytes are a type of chromatophore containing melanin.",
                    "steps": [
                        {
                            "step": "Use precise biological term",
                            "work": "While melanocytes are specific for black/brown pigment, the general term for all color-changing cells is chromatophore. Erythrocytes are red blood cells; leucophores are a specific type of chromatophore but 'chromatophores' is the broader, correct term.",
                            "result": "Chromatophores is correct"
                        }
                    ],
                    "answer": "Chromatophores",
                    "concept": "Frog - Integumentary System"
                }
            },
            {
                "problem": "Striated muscles are called 'striated' because:",
                "difficulty": "easy",
                "options": [
                    "They are voluntary",
                    "They are found in the heart",
                    "They have dark and light bands",
                    "They are spindle-shaped"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Muscular tissue - Histology"],
                    "find": "Reason for the name 'striated'",
                    "principle": "Skeletal and cardiac muscle fibers appear striped or striated under a microscope. This striation is due to the organized arrangement of actin (light I-bands) and myosin (dark A-bands) filaments within the sarcomeres, the functional units of the muscle.",
                    "steps": [
                        {
                            "step": "Relate name to microscopic appearance",
                            "work": "The term 'striated' refers solely to the visual appearance of alternating bands, not to voluntariness, location, or cell shape.",
                            "result": "They have dark and light bands is correct"
                        }
                    ],
                    "answer": "They have dark and light bands",
                    "concept": "Muscular Tissue - Structure"
                }
            },
            {
                "problem": "The septal nephridia of earthworm discharge waste into:",
                "difficulty": "hard",
                "options": [
                    "The coelomic fluid",
                    "The lumen of the gut",
                    "The exterior directly",
                    "The blood vessels"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Earthworm excretion - Nephridial types"],
                    "find": "Discharge site of septal nephridia",
                    "principle": "Earthworms have three types of nephridia. Septal nephridia (attached to septa) are the largest and most numerous. They are enteronephric, meaning their nephridiopores open into the lumen of the intestine, allowing discharged wastes to be ejected from the body with the feces.",
                    "steps": [
                        {
                            "step": "Recall nephridial physiology",
                            "work": "This is a specific adaptation for conserving water by adding wastes to the digestive tract for elimination. They do not discharge into coelom, blood, or directly to the exterior.",
                            "result": "The lumen of the gut is correct"
                        }
                    ],
                    "answer": "The lumen of the gut",
                    "concept": "Earthworm - Excretory System"
                }
            }
        ]
    },

    "human_health_and_disease": {
        "title": "Human Health and Disease",
        "weightage": "3–5%",
        "introduction": "This unit explores the concepts of health, the various types of diseases that affect humans, and the body's defense mechanisms. It covers common infectious diseases (bacterial, viral, protozoan, helminthic), their causative agents, symptoms, and prevention. A significant portion is dedicated to the immune system, including innate and acquired immunity, antibodies, and vaccination. The chapter also addresses non-infectious diseases like cancer and lifestyle disorders (alcohol, drug abuse) and their implications for public health.",

        "topics": [
            {
                "name": "Common Diseases in Humans",
                "description": "Study of major infectious diseases caused by different pathogens, their transmission, and control.",
                "subtopics": [
                    {
                        "name": "Bacterial Diseases",
                        "explanation": "Diseases caused by pathogenic bacteria. Examples: Typhoid (Salmonella typhi, affects intestine), Pneumonia (Streptococcus pneumoniae, affects alveoli), Dysentery, Plague. Symptoms include high fever, weakness, vomiting, and organ-specific issues."
                    },
                    {
                        "name": "Viral Diseases",
                        "explanation": "Diseases caused by viruses. Examples: Common Cold (Rhino viruses, affect nose and respiratory passage), Influenza (Flu), Dengue Fever (Aedes mosquito vector), AIDS (HIV virus, targets immune system)."
                    },
                    {
                        "name": "Protozoan Diseases",
                        "explanation": "Diseases caused by protozoan parasites. Examples: Malaria (Plasmodium sp., transmitted by Anopheles mosquito, causes recurring fever), Amoebiasis (Entamoeba histolytica, causes amoebic dysentery), Kala-azar (Leishmania)."
                    },
                    {
                        "name": "Helminthic Diseases",
                        "explanation": "Diseases caused by parasitic worms. Examples: Ascariasis (Roundworm, Ascaris), Filariasis (Filarial worm, Wuchereria bancrofti, causes elephantiasis), Taeniasis (Tapeworm)."
                    },
                    {
                        "name": "Fungal Diseases",
                        "explanation": "Diseases caused by fungi. Examples: Ringworms (Microsporum, Trichophyton; cause dry, scaly lesions on skin, nails, scalp)."
                    }
                ]
            },
            {
                "name": "Immunity",
                "description": "Study of the body's defense system against pathogens, including types of immunity and immune responses.",
                "subtopics": [
                    {
                        "name": "Innate Immunity",
                        "explanation": "Non-specific, present from birth. Includes physical barriers (skin, mucus), physiological (stomach acid, saliva), cellular (natural killer cells, phagocytes), and cytokine barriers. Provides first line of defense."
                    },
                    {
                        "name": "Acquired Immunity",
                        "explanation": "Pathogen-specific immunity developed during lifetime. Characterized by memory. Two types: Humoral immunity (mediated by antibodies from B-lymphocytes) and Cell-mediated immunity (mediated by T-lymphocytes)."
                    },
                    {
                        "name": "Active and Passive Immunity",
                        "explanation": "Active: Developed by own immune system after infection or vaccination (long-lasting). Passive: Received readymade antibodies (e.g., from mother to fetus, antivenom injections; short-lived)."
                    },
                    {
                        "name": "Vaccination and Immunization",
                        "explanation": "Process of introducing a weakened or inactivated pathogen (vaccine) to stimulate the body's immune system to develop acquired immunity against that pathogen, providing protection before actual exposure."
                    },
                    {
                        "name": "Allergies and Autoimmunity",
                        "explanation": "Allergy: Exaggerated response of the immune system to certain antigens (allergens) releasing histamine. Autoimmunity: The immune system mistakenly attacks the body's own cells (e.g., Rheumatoid arthritis)."
                    },
                    {
                        "name": "Lymphoid Organs",
                        "explanation": "Organs where origin, maturation, and proliferation of lymphocytes occur. Primary: Bone marrow and Thymus (site of maturation). Secondary: Spleen, lymph nodes, tonsils (site of immune response)."
                    }
                ]
            },
            {
                "name": "AIDS and Cancer",
                "description": "Detailed study of two major disorders: AIDS, an infectious disease that compromises immunity, and Cancer, a non-infectious uncontrolled cell growth.",
                "subtopics": [
                    {
                        "name": "AIDS (Acquired Immuno Deficiency Syndrome)",
                        "explanation": "Caused by HIV (Human Immunodeficiency Virus). Transmission: Sexual contact, blood transfusion, contaminated needles, from infected mother to child. Virus attacks helper T-lymphocytes, weakening the immune system. ELISA test for diagnosis. Prevention: Awareness, use of disposable needles, protected sex, blood screening."
                    },
                    {
                        "name": "Cancer",
                        "explanation": "Characterized by uncontrolled division of cells leading to formation of tumors. Malignant tumors invade and metastasize to distant sites. Causes (Carcinogens): Physical (e.g., radiation), Chemical (e.g., tobacco smoke), Biological (e.g., oncogenic viruses). Diagnosis: Biopsy, imaging (CT, MRI). Treatment: Surgery, Radiation therapy, Chemotherapy, Immunotherapy."
                    }
                ]
            },
            {
                "name": "Drug and Alcohol Abuse",
                "description": "Study of the abuse of addictive substances, their adverse effects on health, and prevention.",
                "subtopics": [
                    {
                        "name": "Adolescence and Addiction",
                        "explanation": "Adolescence is a vulnerable phase for experimentation. Addiction: Psychological and physical dependence on a substance. Reasons: Curiosity, peer pressure, stress, excitement."
                    },
                    {
                        "name": "Commonly Abused Drugs",
                        "explanation": "Opioids (e.g., Heroin, smack – depressants), Cannabinoids (e.g., Marijuana, hashish – from Cannabis sativa), Coca alkaloid (Cocaine – stimulant). Also, tobacco (nicotine) and alcohol."
                    },
                    {
                        "name": "Effects and Prevention",
                        "explanation": "Effects: Reckless behavior, mental and emotional disturbances, financial loss, damage to organs (liver cirrhosis, heart failure, cancer), withdrawal symptoms. Prevention: Education, counseling, seeking professional and parental help, avoiding peer pressure."
                    }
                ]
            }
        ],

        "key_concepts": {
            "Pathogen-Host Interaction": [
                {
                    "name": "Causative Agent and Symptoms",
                    "description": "Linking specific pathogens (bacteria, virus, etc.) to the diseases they cause and the characteristic symptoms they produce."
                },
                {
                    "name": "Mode of Transmission",
                    "description": "Understanding how a disease spreads (e.g., air-borne, water-borne, vector-borne, sexual contact) is crucial for its prevention and control."
                }
            ],
            "Immune System Mechanics": [
                {
                    "name": "Innate vs. Acquired Immunity",
                    "description": "Distinguishing between the immediate, non-specific defenses and the slower, highly specific adaptive immune response with memory."
                },
                {
                    "name": "Antibody Structure and Function",
                    "description": "Understanding how antibodies (immunoglobulins) are produced by B-cells and how they neutralize pathogens through agglutination, precipitation, etc."
                }
            ],
            "Public Health and Prevention": [
                {
                    "name": "Vaccination Principle",
                    "description": "Understanding how vaccines prime the immune system to develop memory cells for a faster and stronger response upon future exposure."
                },
                {
                    "name": "Social Responsibility",
                    "description": "Recognizing that prevention of diseases (like AIDS) and substance abuse requires informed choices and awareness for the well-being of society."
                }
            ]
        },

        "problems": [
            {
                "problem": "The disease 'Amoebic dysentery' is caused by:",
                "difficulty": "easy",
                "options": [
                    "A bacterium",
                    "A virus",
                    "A protozoan",
                    "A helminth"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Common human diseases"],
                    "find": "Causative agent of amoebic dysentery",
                    "principle": "Amoebic dysentery is an intestinal infection characterized by severe diarrhea. It is specifically caused by the protozoan parasite Entamoeba histolytica, which is transmitted through contaminated food and water.",
                    "steps": [
                        {
                            "step": "Match disease to pathogen type",
                            "work": "Dysentery can be bacterial (Shigella) or protozoan. The prefix 'Amoebic' directly points to the protozoan amoeba, Entamoeba histolytica.",
                            "result": "A protozoan is correct"
                        }
                    ],
                    "answer": "A protozoan",
                    "concept": "Common Diseases - Protozoan"
                }
            },
            {
                "problem": "Which of the following is a secondary lymphoid organ?",
                "difficulty": "easy",
                "options": [
                    "Thymus",
                    "Bone marrow",
                    "Spleen",
                    "Liver"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Lymphoid organs"],
                    "find": "Secondary lymphoid organ",
                    "principle": "Lymphoid organs are classified as primary (where lymphocytes mature) and secondary (where mature lymphocytes interact with antigens and initiate immune response). The spleen filters blood and traps blood-borne antigens for immune response.",
                    "steps": [
                        {
                            "step": "Classify the organs",
                            "work": "Thymus (T-cell maturation) and Bone marrow (B-cell maturation) are primary lymphoid organs. The liver is not a lymphoid organ. The spleen is a major secondary lymphoid organ.",
                            "result": "Spleen is correct"
                        }
                    ],
                    "answer": "Spleen",
                    "concept": "Immunity - Lymphoid Organs"
                }
            },
            {
                "problem": "The 'Widal test' is used for the diagnosis of:",
                "difficulty": "medium",
                "options": [
                    "Malaria",
                    "Typhoid",
                    "AIDS",
                    "Pneumonia"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Disease diagnosis"],
                    "find": "Disease diagnosed by Widal test",
                    "principle": "The Widal test is a serological test that detects the presence of antibodies (agglutinins) against the Salmonella typhi bacteria in the patient's serum. A positive test indicates infection with typhoid fever.",
                    "steps": [
                        {
                            "step": "Recall diagnostic tests",
                            "work": "Malaria is diagnosed by blood smear; AIDS by ELISA; Pneumonia by sputum test and X-ray. Widal test is specific for Typhoid.",
                            "result": "Typhoid is correct"
                        }
                    ],
                    "answer": "Typhoid",
                    "concept": "Common Diseases - Diagnosis"
                }
            },
            {
                "problem": "Which of the following cells is the primary target for the Human Immunodeficiency Virus (HIV)?",
                "difficulty": "medium",
                "options": [
                    "B-Lymphocytes",
                    "Dendritic cells",
                    "Helper T-Lymphocytes (CD4)",
                    "Cytotoxic T-Lymphocytes (CD8)"
                ],
                "correct": 2,
                "solution": {
                    "given": ["AIDS pathogenesis"],
                    "find": "Primary target cell of HIV",
                    "principle": "HIV has a glycoprotein (gp120) on its envelope that has a high affinity for the CD4 receptor present on the surface of Helper T-lymphocytes. By entering and destroying these cells, HIV cripples the entire adaptive immune response.",
                    "steps": [
                        {
                            "step": "Analyze virus-host interaction",
                            "work": "While HIV can infect other cells, its primary and most devastating target is the CD4+ Helper T-cell, which is the conductor of the immune orchestra.",
                            "result": "Helper T-Lymphocytes (CD4) is correct"
                        }
                    ],
                    "answer": "Helper T-Lymphocytes (CD4)",
                    "concept": "AIDS - Mechanism"
                }
            },
            {
                "problem": "Metastasis is a term used to describe which characteristic of cancer cells?",
                "difficulty": "medium",
                "options": [
                    "Formation of a benign tumor",
                    "Rapid division of cells",
                    "Spread to distant sites",
                    "Response to chemotherapy"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Cancer biology"],
                    "find": "Meaning of metastasis",
                    "principle": "Metastasis is the most dangerous property of malignant tumors. It is the process where cancer cells detach from the primary tumor, travel through the blood or lymphatic system, and establish secondary tumors in other organs of the body.",
                    "steps": [
                        {
                            "step": "Define the term",
                            "work": "Benign tumors do not metastasize. Rapid division is hyperplasia. Response to treatment is not a defining characteristic. Metastasis specifically refers to the spreading of cancer.",
                            "result": "Spread to distant sites is correct"
                        }
                    ],
                    "answer": "Spread to distant sites",
                    "concept": "Cancer - Malignancy"
                }
            },
            {
                "problem": "The substance released by mast cells during an allergic reaction is:",
                "difficulty": "easy",
                "options": [
                    "Antibody",
                    "Antigen",
                    "Histamine",
                    "Interferon"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Allergy mechanism"],
                    "find": "Chemical released in allergy",
                    "principle": "During an allergic reaction, allergens cross-link IgE antibodies on the surface of mast cells. This triggers the mast cells to degranulate and release inflammatory mediators, the most significant being histamine, which causes symptoms like swelling, redness, and itching.",
                    "steps": [
                        {
                            "step": "Identify the key mediator",
                            "work": "Antibodies are produced by plasma cells; antigens trigger the response; interferon is for viral defense. Histamine is the direct cause of allergic symptoms.",
                            "result": "Histamine is correct"
                        }
                    ],
                    "answer": "Histamine",
                    "concept": "Immunity - Allergy"
                }
            },
            {
                "problem": "The vector responsible for the transmission of Dengue virus is:",
                "difficulty": "easy",
                "options": [
                    "Female Anopheles mosquito",
                    "Female Aedes mosquito",
                    "Sandfly",
                    "Tsetse fly"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Vector-borne diseases"],
                    "find": "Vector for Dengue",
                    "principle": "Dengue virus is transmitted to humans through the bite of an infected female Aedes aegypti mosquito. This mosquito is identifiable by its white bands on the legs and body and typically bites during the day.",
                    "steps": [
                        {
                            "step": "Match disease to its vector",
                            "work": "Anopheles transmits malaria; sandfly transmits kala-azar; tsetse fly transmits sleeping sickness. Aedes is specific for Dengue and Chikungunya.",
                            "result": "Female Aedes mosquito is correct"
                        }
                    ],
                    "answer": "Female Aedes mosquito",
                    "concept": "Common Diseases - Transmission"
                }
            },
            {
                "problem": "The immunity acquired by a baby from the mother through placenta is an example of:",
                "difficulty": "easy",
                "options": [
                    "Active immunity",
                    "Passive natural immunity",
                    "Passive artificial immunity",
                    "Innate immunity"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Types of immunity"],
                    "find": "Classification of placental immunity",
                    "principle": "Passive immunity is the transfer of readymade antibodies. When this transfer occurs naturally from mother to fetus via the placenta, or through colostrum, it is called 'Passive Natural Immunity'. It provides short-term protection to the newborn.",
                    "steps": [
                        {
                            "step": "Categorize based on source and means",
                            "work": "Active requires the body's own response. Artificial passive would be through an injection (e.g., antivenom). Innate is non-specific and present at birth but not transferred from mother. Natural passive fits perfectly.",
                            "result": "Passive natural immunity is correct"
                        }
                    ],
                    "answer": "Passive natural immunity",
                    "concept": "Immunity - Passive Natural"
                }
            },
            {
                "problem": "Which of the following is NOT a hallucinogen?",
                "difficulty": "medium",
                "options": [
                    "Morphine",
                    "LSD",
                    "Mescaline",
                    "Psilocybin"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Drug abuse - drug types"],
                    "find": "Non-hallucinogenic drug",
                    "principle": "Hallucinogens are psychoactive drugs that alter perception, thoughts, and feelings, causing hallucinations. LSD (Lysergic acid diethylamide), Mescaline (from cactus), and Psilocybin (from mushrooms) are classic hallucinogens. Morphine is an opioid analgesic (painkiller), not primarily a hallucinogen.",
                    "steps": [
                        {
                            "step": "Classify the drugs",
                            "work": "LSD, Mescaline, and Psilocybin are well-known for their potent hallucinogenic effects. Morphine is a depressant and pain reliever from the opioid family.",
                            "result": "Morphine is the correct answer"
                        }
                    ],
                    "answer": "Morphine",
                    "concept": "Drug Abuse - Types"
                }
            },
            {
                "problem": "The genetic material of HIV is:",
                "difficulty": "medium",
                "options": [
                    "Double-stranded DNA",
                    "Single-stranded DNA",
                    "Double-stranded RNA",
                    "Single-stranded RNA"
                ],
                "correct": 3,
                "solution": {
                    "given": ["HIV structure"],
                    "find": "Genetic material of HIV",
                    "principle": "HIV is a retrovirus. Its core contains two identical copies of single-stranded RNA (ssRNA) as its genetic material. It also carries the enzyme reverse transcriptase to convert its RNA into DNA inside the host cell.",
                    "steps": [
                        {
                            "step": "Recall virus classification",
                            "work": "The key identifier for retroviruses is that they have ssRNA as their genetic material and use reverse transcriptase.",
                            "result": "Single-stranded RNA is correct"
                        }
                    ],
                    "answer": "Single-stranded RNA",
                    "concept": "AIDS - Virology"
                }
            },
            {
                "problem": "Which type of immunity is provided by the colostrum secreted by the mother during the initial days of lactation?",
                "difficulty": "easy",
                "options": [
                    "Active natural immunity",
                    "Passive natural immunity",
                    "Active artificial immunity",
                    "Passive artificial immunity"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Types of immunity"],
                    "find": "Immunity from colostrum",
                    "principle": "Colostrum, the first milk produced by the mother after childbirth, is rich in antibodies (IgA). This provides the infant with readymade immunity against pathogens. Since it is transferred naturally from mother to child, it is classified as passive natural immunity.",
                    "steps": [
                        {
                            "step": "Categorize based on source and means",
                            "work": "The baby is not producing its own antibodies; it is receiving them. The transfer is natural (through milk), not artificial (via injection).",
                            "result": "Passive natural immunity is correct"
                        }
                    ],
                    "answer": "Passive natural immunity",
                    "concept": "Immunity - Passive Natural"
                }
            },
            {
                "problem": "The sporozoites that cause malaria are stored in which part of the female Anopheles mosquito?",
                "difficulty": "medium",
                "options": [
                    "Salivary glands",
                    "Gut",
                    "Haemocoel",
                    "Ovaries"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Malaria life cycle"],
                    "find": "Site of sporozoite storage in mosquito",
                    "principle": "The Plasmodium parasite undergoes sexual reproduction in the mosquito's gut, forming sporozoites. These sporozoites then migrate to and invade the mosquito's salivary glands. They are injected into the human host when the mosquito takes a blood meal.",
                    "steps": [
                        {
                            "step": "Recall the transmission stage",
                            "work": "For the parasite to be transmitted, it must be present in the mosquito's saliva, which is produced in the salivary glands.",
                            "result": "Salivary glands is correct"
                        }
                    ],
                    "answer": "Salivary glands",
                    "concept": "Common Diseases - Malaria Transmission"
                }
            },
            {
                "problem": "The cancer of the lining of the lungs is most commonly associated with:",
                "difficulty": "easy",
                "options": [
                    "Tobacco smoking",
                    "Alcohol consumption",
                    "Excess sugar intake",
                    "Vitamin deficiency"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Cancer causes"],
                    "find": "Primary cause of lung cancer",
                    "principle": "Tobacco smoke is the most significant risk factor for lung cancer. It contains numerous carcinogens (like benzopyrene) that cause mutations in the epithelial cells lining the bronchi of the lungs, leading to uncontrolled cell growth and carcinoma.",
                    "steps": [
                        {
                            "step": "Link carcinogen to cancer type",
                            "work": "While other factors can contribute, tobacco smoking is overwhelmingly the leading cause of lung cancer worldwide.",
                            "result": "Tobacco smoking is correct"
                        }
                    ],
                    "answer": "Tobacco smoking",
                    "concept": "Cancer - Causes"
                }
            },
            {
                "problem": "Which of the following immunoglobulins can cross the human placenta?",
                "difficulty": "hard",
                "options": [
                    "IgA",
                    "IgG",
                    "IgE",
                    "IgM"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Antibody types"],
                    "find": "Antibody that crosses placenta",
                    "principle": "IgG is the smallest and most abundant antibody in the blood. It is the only class of antibody that can actively cross the placental barrier from the mother to the fetus, providing passive immunity to the newborn against various infections.",
                    "steps": [
                        {
                            "step": "Recall properties of antibodies",
                            "work": "IgA is found in secretions; IgE is involved in allergies; IgM is a large pentamer and the first responder. IgG's size and structure allow it to cross the placenta.",
                            "result": "IgG is correct"
                        }
                    ],
                    "answer": "IgG",
                    "concept": "Immunity - Antibodies"
                }
            },
            {
                "problem": "The disease 'Kala-azar' is caused by:",
                "difficulty": "medium",
                "options": [
                    "Trypanosoma cruzi",
                    "Leishmania donovani",
                    "Plasmodium vivax",
                    "Wuchereria bancrofti"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Protozoan diseases"],
                    "find": "Causative agent of Kala-azar",
                    "principle": "Kala-azar, or Visceral Leishmaniasis, is a severe disease characterized by fever, weight loss, anemia, and enlargement of the liver and spleen. It is caused by the protozoan parasite Leishmania donovani, which is transmitted by the bite of infected sandflies.",
                    "steps": [
                        {
                            "step": "Match disease to pathogen",
                            "work": "Trypanosoma causes sleeping sickness; Plasmodium causes malaria; Wuchereria causes filariasis. Leishmania is specific for Kala-azar.",
                            "result": "Leishmania donovani is correct"
                        }
                    ],
                    "answer": "Leishmania donovani",
                    "concept": "Common Diseases - Protozoan"
                }
            },
            {
                "problem": "The drug 'Heroin' is synthesized by:",
                "difficulty": "hard",
                "options": [
                    "Acetylation of Morphine",
                    "Glycosylation of Codeine",
                    "Methylation of Cocaine",
                    "Phosphorylation of THC"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Drug abuse - opioids"],
                    "find": "Synthesis of Heroin",
                    "principle": "Heroin, also known as diacetylmorphine or smack, is a semi-synthetic opioid. It is produced by the chemical acetylation of morphine, which is derived from the opium poppy plant. This process makes it more potent and addictive.",
                    "steps": [
                        {
                            "step": "Recall biochemical derivation",
                            "work": "This is a specific fact in pharmacology. Heroin is a derivative of morphine through acetylation.",
                            "result": "Acetylation of Morphine is correct"
                        }
                    ],
                    "answer": "Acetylation of Morphine",
                    "concept": "Drug Abuse - Opioids"
                }
            },
            {
                "problem": "Which of the following is a correct pair of a disease and its symptom?",
                "difficulty": "medium",
                "options": [
                    "Typhoid - Intestinal perforation",
                    "Malaria - Rose spots",
                    "Pneumonia - Constipation",
                    "Common Cold - High fever (104°F)"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Disease symptoms"],
                    "find": "Correct disease-symptom pair",
                    "principle": "In severe cases of typhoid fever, caused by Salmonella typhi, the bacteria can erode the intestinal wall, leading to a life-threatening complication known as intestinal perforation.",
                    "steps": [
                        {
                            "step": "Evaluate each option",
                            "work": "Rose spots are a symptom of Typhoid, not Malaria. Pneumonia causes fever and cough, not constipation. Common cold causes mild fever, not high fever (104°F is typical of Typhoid). Only the first option is correct.",
                            "result": "Typhoid - Intestinal perforation is correct"
                        }
                    ],
                    "answer": "Typhoid - Intestinal perforation",
                    "concept": "Common Diseases - Symptoms"
                }
            },
            {
                "problem": "The body's first line of defense against pathogens is:",
                "difficulty": "easy",
                "options": [
                    "Phagocytosis by neutrophils",
                    "Skin and mucous membranes",
                    "Production of antibodies",
                    "Action of interferons"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Innate immunity"],
                    "find": "First line of defense",
                    "principle": "The innate immune system's first line of defense consists of physical and chemical barriers that prevent pathogens from entering the body. These include the skin (physical barrier), mucous membranes (traps pathogens), and secretions like stomach acid and lysozyme in tears (chemical barriers).",
                    "steps": [
                        {
                            "step": "Order of defense mechanisms",
                            "work": "Phagocytosis, antibodies, and interferons are secondary responses that come into play only after a pathogen has breached the initial physical and chemical barriers.",
                            "result": "Skin and mucous membranes is correct"
                        }
                    ],
                    "answer": "Skin and mucous membranes",
                    "concept": "Immunity - Innate (Barriers)"
                }
            },
            {
                "problem": "Which of the following is a psychoactive drug that is also used to treat ADHD (Attention Deficit Hyperactivity Disorder)?",
                "difficulty": "hard",
                "options": [
                    "Amphetamine",
                    "Barbiturate",
                    "Benzodiazepine",
                    "Cannabinoid"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Drug abuse - medical use"],
                    "find": "Drug used for ADHD",
                    "principle": "Amphetamines are powerful stimulants of the central nervous system and are highly addictive (psychoactive). However, in controlled, prescribed doses (e.g., Adderall, Dexedrine), they are used medically to treat ADHD by helping to improve focus and reduce impulsivity.",
                    "steps": [
                        {
                            "step": "Link drug to its medical application",
                            "work": "Barbiturates and Benzodiazepines are depressants (sedatives). Cannabinoids are used for nausea in chemotherapy but not primarily for ADHD. Amphetamines have a recognized, though careful, use in ADHD management.",
                            "result": "Amphetamine is correct"
                        }
                    ],
                    "answer": "Amphetamine",
                    "concept": "Drug Abuse - Stimulants"
                }
            },
            {
                "problem": "The 'Memory cells' formed during the first encounter with a pathogen are part of:",
                "difficulty": "medium",
                "options": [
                    "Innate immunity",
                    "Acquired immunity",
                    "Physical barrier",
                    "Cytokine barrier"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Acquired immunity features"],
                    "find": "Immunity type with memory",
                    "principle": "The formation of memory cells (both B-memory and T-memory cells) is a hallmark of acquired (adaptive) immunity. These cells persist long-term and allow for a much faster and stronger immune response upon subsequent exposure to the same pathogen.",
                    "steps": [
                        {
                            "step": "Differentiate immunity types",
                            "work": "Innate immunity provides a non-specific response with no memory. Acquired immunity is characterized by specificity and memory.",
                            "result": "Acquired immunity is correct"
                        }
                    ],
                    "answer": "Acquired immunity",
                    "concept": "Immunity - Acquired (Memory)"
                }
            },
            {
                "problem": "Elephantiasis, a symptom of filariasis, is caused by the blockage of:",
                "difficulty": "medium",
                "options": [
                    "Arteries",
                    "Veins",
                    "Lymphatic vessels",
                    "Bile ducts"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Filariasis pathology"],
                    "find": "Structures blocked in elephantiasis",
                    "principle": "Filariasis is caused by the filarial worm Wuchereria bancrofti. The adult worms live in the lymphatic vessels and lymph nodes, causing severe inflammation and blockage. This blockage prevents drainage of lymph fluid, leading to the massive swelling (lymphedema) of limbs, scrotum, etc., known as elephantiasis.",
                    "steps": [
                        {
                            "step": "Understand the disease mechanism",
                            "work": "The worms have a specific tropism for the lymphatic system, not the blood circulatory system (arteries/veins) or the biliary system.",
                            "result": "Lymphatic vessels is correct"
                        }
                    ],
                    "answer": "Lymphatic vessels",
                    "concept": "Common Diseases - Filariasis"
                }
            },
            {
                "problem": "Which of the following is NOT a function of the spleen?",
                "difficulty": "hard",
                "options": [
                    "Production of lymphocytes",
                    "Storage of RBCs",
                    "Destruction of old RBCs",
                    "Production of bile"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Lymphoid organs - Spleen"],
                    "find": "Non-function of the spleen",
                    "principle": "The spleen is a secondary lymphoid organ. Its functions include: housing lymphocytes and macrophages (immune surveillance), acting as a reservoir for red blood cells, and filtering the blood to remove old and damaged erythrocytes. Bile is produced by the liver, not the spleen.",
                    "steps": [
                        {
                            "step": "Assign function to correct organ",
                            "work": "The first three options are well-established functions of the spleen. Bile production is exclusively a function of hepatocytes in the liver.",
                            "result": "Production of bile is the correct answer"
                        }
                    ],
                    "answer": "Production of bile",
                    "concept": "Immunity - Lymphoid Organs (Spleen)"
                }
            },
            {
                "problem": "The 'Ringworm' infection is not caused by a worm but by a:",
                "difficulty": "easy",
                "options": [
                    "Bacterium",
                    "Virus",
                    "Fungus",
                    "Protozoan"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Fungal diseases"],
                    "find": "Causative agent of ringworm",
                    "principle": "Despite its name, ringworm is a common fungal infection of the skin, hair, or nails. It is caused by various dermatophytic fungi of the genera Microsporum, Trichophyton, and Epidermophyton. The name comes from the characteristic ring-like red rash it produces.",
                    "steps": [
                        {
                            "step": "Correct the misconception",
                            "work": "The name is a misnomer. It is not caused by any helminth (worm) but by a group of fungi.",
                            "result": "Fungus is correct"
                        }
                    ],
                    "answer": "Fungus",
                    "concept": "Common Diseases - Fungal"
                }
            },
            {
                "problem": "The process of a tumor spreading from the breast to the bones is an example of:",
                "difficulty": "easy",
                "options": [
                    "Hyperplasia",
                    "Metastasis",
                    "Benign growth",
                    "Oncogenesis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Cancer terminology"],
                    "find": "Term for cancer spread",
                    "principle": "Metastasis is defined as the spread of cancer cells from the place where they first formed (the primary site, e.g., breast) to a new location in the body (a secondary site, e.g., bones). This is a key feature of malignant tumors.",
                    "steps": [
                        {
                            "step": "Apply the definition",
                            "work": "Hyperplasia is increased cell number; benign growths do not spread; oncogenesis is the process of cancer formation. The spread to a distant site is specifically metastasis.",
                            "result": "Metastasis is correct"
                        }
                    ],
                    "answer": "Metastasis",
                    "concept": "Cancer - Malignancy"
                }
            },
            {
                "problem": "The virus responsible for AIDS has which type of structure?",
                "difficulty": "medium",
                "options": [
                    "Icosahedral",
                    "Helical",
                    "Complex",
                    "Spherical"
                ],
                "correct": 3,
                "solution": {
                    "given": ["HIV virology"],
                    "find": "Structure of HIV",
                    "principle": "HIV is an enveloped virus. Its core (containing RNA and enzymes) has a conical shape, but the overall virus particle, surrounded by its lipid bilayer envelope (with glycoprotein spikes like gp120), is spherical in morphology.",
                    "steps": [
                        {
                            "step": "Recall viral morphology",
                            "work": "While many viruses are classified as icosahedral or helical, HIV is typically described as having a spherical or rounded structure due to its envelope.",
                            "result": "Spherical is correct"
                        }
                    ],
                    "answer": "Spherical",
                    "concept": "AIDS - Virology"
                }
            },
            {
                "problem": "Which of the following is a matching pair of a drug and its category?",
                "difficulty": "medium",
                "options": [
                    "Cocaine – Opiate narcotic",
                    "Heroin – Psychotropic",
                    "Marijuana – Stimulant",
                    "Barbiturate – Depressant"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Drug categories"],
                    "find": "Correct drug-category pair",
                    "principle": "Barbiturates are central nervous system (CNS) depressants. They are sedative-hypnotic drugs that induce sleep, reduce anxiety, and can be used as anticonvulsants. They are highly addictive and depress brain function.",
                    "steps": [
                        {
                            "step": "Evaluate each option",
                            "work": "Cocaine is a stimulant, not an opiate. Heroin is an opiate narcotic (depressant). Marijuana is a hallucinogen, not a pure stimulant. Only the last option is correctly matched.",
                            "result": "Barbiturate – Depressant is correct"
                        }
                    ],
                    "answer": "Barbiturate – Depressant",
                    "concept": "Drug Abuse - Categories"
                }
            },
            {
                "problem": "The disease 'Ascariasis' is diagnosed by the microscopic examination of:",
                "difficulty": "easy",
                "options": [
                    "Blood smear",
                    "Sputum",
                    "Stool",
                    "Urine"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Helminthic disease diagnosis"],
                    "find": "Sample for Ascariasis diagnosis",
                    "principle": "Ascariasis is caused by the roundworm Ascaris lumbricoides. The adult worms live in the intestine and release eggs that are passed out of the body in the feces. Therefore, diagnosis is confirmed by identifying these characteristic eggs under a microscope in a stool sample.",
                    "steps": [
                        {
                            "step": "Link parasite life cycle to diagnosis",
                            "work": "The eggs are not found in blood, sputum, or urine. They are exclusively excreted in stool.",
                            "result": "Stool is correct"
                        }
                    ],
                    "answer": "Stool",
                    "concept": "Common Diseases - Diagnosis"
                }
            },
            {
                "problem": "The cells that actually produce and secrete antibodies are called:",
                "difficulty": "medium",
                "options": [
                    "Memory B-cells",
                    "Plasma cells",
                    "Helper T-cells",
                    "Cytotoxic T-cells"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Humoral immunity"],
                    "find": "Antibody-producing cells",
                    "principle": "When B-lymphocytes are activated by an antigen (often with help from T-cells), they proliferate and differentiate into two types of cells: Memory B-cells (for future response) and Plasma cells. Plasma cells are antibody factories, dedicated to producing and secreting large quantities of a specific antibody.",
                    "steps": [
                        {
                            "step": "Identify the effector cell",
                            "work": "Memory cells are for memory, not immediate secretion. T-cells are involved in cell-mediated immunity, not antibody production. Plasma cells are the terminal, antibody-secreting cells.",
                            "result": "Plasma cells is correct"
                        }
                    ],
                    "answer": "Plasma cells",
                    "concept": "Immunity - Humoral Response"
                }
            },
            {
                "problem": "Which of the following is a physical carcinogen?",
                "difficulty": "easy",
                "options": [
                    "Tobacco smoke",
                    "UV Radiation",
                    "Asbestos",
                    "Aflatoxin"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Carcinogen types"],
                    "find": "Physical carcinogen",
                    "principle": "Carcinogens are classified as physical, chemical, or biological. Physical carcinogens include various types of radiation. Ultraviolet (UV) radiation from the sun is a well-known physical carcinogen that can cause skin cancer by damaging the DNA in skin cells.",
                    "steps": [
                        {
                            "step": "Classify the agents",
                            "work": "Tobacco smoke and asbestos are chemical carcinogens. Aflatoxin (from fungus) is a biological carcinogen. UV radiation is a physical agent.",
                            "result": "UV Radiation is correct"
                        }
                    ],
                    "answer": "UV Radiation",
                    "concept": "Cancer - Causes"
                }
            },
            {
                "problem": "The initial symptoms of HIV infection may include:",
                "difficulty": "hard",
                "options": [
                    "Severe immune deficiency",
                    "Pneumocystis pneumonia",
                    "Kaposi's sarcoma",
                    "Mononucleosis-like symptoms"
                ],
                "correct": 3,
                "solution": {
                    "given": ["AIDS progression"],
                    "find": "Initial symptom of HIV infection",
                    "principle": "Within 2-4 weeks after HIV infection, many people (but not all) develop an acute retroviral syndrome. This resembles infectious mononucleosis or flu, with symptoms like fever, sore throat, rash, and swollen lymph nodes. This occurs as the virus replicates rapidly before the immune system brings it under control.",
                    "steps": [
                        {
                            "step": "Understand the disease stages",
                            "work": "Severe immune deficiency, pneumonia, and sarcoma are symptoms of full-blown AIDS, which occurs years later after the immune system is severely damaged. The initial phase is much milder.",
                            "result": "Mononucleosis-like symptoms is correct"
                        }
                    ],
                    "answer": "Mononucleosis-like symptoms",
                    "concept": "AIDS - Symptoms"
                }
            },
            {
                "problem": "The 'Hansen's disease' is another name for:",
                "difficulty": "easy",
                "options": [
                    "Tuberculosis",
                    "Leprosy",
                    "Tetanus",
                    "Syphilis"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Bacterial diseases - names"],
                    "find": "Alternate name for Leprosy",
                    "principle": "Hansen's disease is the modern and less stigmatizing name for Leprosy. It is caused by the bacterium Mycobacterium leprae. The name honors the Norwegian physician Gerhard Armauer Hansen, who discovered the bacterium in 1873.",
                    "steps": [
                        {
                            "step": "Recall disease nomenclature",
                            "work": "This is a specific alternate name that must be remembered. Tuberculosis is caused by Mycobacterium tuberculosis.",
                            "result": "Leprosy is correct"
                        }
                    ],
                    "answer": "Leprosy",
                    "concept": "Common Diseases - Bacterial"
                }
            },
            {
                "problem": "The interferons are a type of:",
                "difficulty": "medium",
                "options": [
                    "Antibody",
                    "Antigen",
                    "Cytokine",
                    "Phagocyte"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Innate immunity - molecules"],
                    "find": "Classification of interferons",
                    "principle": "Interferons (IFNs) are signaling proteins released by host cells (especially lymphocytes and macrophages) in response to the presence of pathogens like viruses. As signaling molecules that mediate communication between cells, they are classified as cytokines.",
                    "steps": [
                        {
                            "step": "Classify the molecule",
                            "work": "They are not antibodies (produced by plasma cells), antigens (foreign molecules), or cells (phagocytes). They are soluble protein messengers.",
                            "result": "Cytokine is correct"
                        }
                    ],
                    "answer": "Cytokine",
                    "concept": "Immunity - Innate (Interferons)"
                }
            },
            {
                "problem": "Which of the following is a bacterial disease that is transmitted by contaminated water?",
                "difficulty": "easy",
                "options": [
                    "Amoebiasis",
                    "Dengue",
                    "Cholera",
                    "Malaria"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Disease transmission"],
                    "find": "Water-borne bacterial disease",
                    "principle": "Cholera is a severe diarrheal disease caused by the bacterium Vibrio cholerae. It is typically transmitted through the ingestion of water contaminated with the feces of an infected person. It is a major water-borne disease.",
                    "steps": [
                        {
                            "step": "Match pathogen to transmission route",
                            "work": "Amoebiasis is protozoan and water-borne. Dengue is viral and vector-borne. Malaria is protozoan and vector-borne. Only Cholera is both bacterial and transmitted via contaminated water.",
                            "result": "Cholera is correct"
                        }
                    ],
                    "answer": "Cholera",
                    "concept": "Common Diseases - Transmission"
                }
            },
            {
                "problem": "The 'OTSI' program run by the Government of India is related to:",
                "difficulty": "hard",
                "options": [
                    "Prevention of vector-borne diseases",
                    "Tobacco cessation",
                    "Organ transplantation",
                    "Blood donation"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Public health initiatives"],
                    "find": "Purpose of OTSI program",
                    "principle": "The OTSI (Outreach Tobacco Cessation Services Initiative) is a program by the National Health Mission. It aims to provide tobacco cessation services at the community level to help people quit tobacco use, which is a leading cause of cancer and other diseases.",
                    "steps": [
                        {
                            "step": "Recall public health programs",
                            "work": "This is a specific initiative focused on tackling the root cause of many cancers and respiratory diseases—tobacco addiction.",
                            "result": "Tobacco cessation is correct"
                        }
                    ],
                    "answer": "Tobacco cessation",
                    "concept": "Cancer & Drug Abuse - Prevention"
                }
            },
            {
                "problem": "A person who has recovered from a disease like chickenpox is unlikely to get it again because of:",
                "difficulty": "easy",
                "options": [
                    "Innate immunity",
                    "Passive immunity",
                    "Active immunity with memory",
                    "Artificial immunity"
                ],
                "correct": 2,
                "solution": {
                    "given": ["Acquired immunity"],
                    "find": "Reason for long-term protection after infection",
                    "principle": "Recovering from an infection is a form of active natural immunity. The first infection activates the adaptive immune system, leading to the production of antibodies and, crucially, memory cells. These memory cells provide long-lasting protection against reinfection by the same pathogen.",
                    "steps": [
                        {
                            "step": "Identify the protective mechanism",
                            "work": "Innate immunity is non-specific and has no memory. Passive immunity is short-term. Artificial immunity comes from vaccination. Natural active immunity from infection provides memory.",
                            "result": "Active immunity with memory is correct"
                        }
                    ],
                    "answer": "Active immunity with memory",
                    "concept": "Immunity - Active Natural"
                }
            },
            {
                "problem": "The 'BCG' vaccine is used to develop immunity against:",
                "difficulty": "easy",
                "options": [
                    "Tuberculosis",
                    "Cholera",
                    "Tetanus",
                    "Pertussis"
                ],
                "correct": 0,
                "solution": {
                    "given": ["Vaccination"],
                    "find": "Disease prevented by BCG vaccine",
                    "principle": "The BCG (Bacille Calmette-Guérin) vaccine is a vaccine primarily used against tuberculosis (TB). It is made from a weakened strain of Mycobacterium bovis, which is related to the TB bacterium. It provides some protection against severe forms of TB in children.",
                    "steps": [
                        {
                            "step": "Match vaccine to disease",
                            "work": "This is a standard vaccine given at birth in many countries, including India. It is specific for Tuberculosis.",
                            "result": "Tuberculosis is correct"
                        }
                    ],
                    "answer": "Tuberculosis",
                    "concept": "Immunity - Vaccination"
                }
            },
            {
                "problem": "Which of the following is a pair of diseases caused by viruses?",
                "difficulty": "medium",
                "options": [
                    "Typhoid and Tuberculosis",
                    "Common Cold and AIDS",
                    "Malaria and Amoebiasis",
                    "Ringworm and Athlete's foot"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Pathogen types"],
                    "find": "Pair of viral diseases",
                    "principle": "The Common Cold is most often caused by Rhinoviruses. AIDS is caused by the Human Immunodeficiency Virus (HIV). Both are viral diseases.",
                    "steps": [
                        {
                            "step": "Evaluate each pair",
                            "work": "Typhoid (bacterial), TB (bacterial). Malaria (protozoan), Amoebiasis (protozoan). Ringworm (fungal), Athlete's foot (fungal). Only the second option contains two viral diseases.",
                            "result": "Common Cold and AIDS is correct"
                        }
                    ],
                    "answer": "Common Cold and AIDS",
                    "concept": "Common Diseases - Viral"
                }
            },
            {
                "problem": "The addictive substance found in tobacco is:",
                "difficulty": "easy",
                "options": [
                    "Caffeine",
                    "Nicotine",
                    "Cocaine",
                    "Heroin"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Tobacco abuse"],
                    "find": "Addictive agent in tobacco",
                    "principle": "Nicotine is the primary addictive component of tobacco products. It is a stimulant that rapidly reaches the brain, activating reward pathways and leading to strong physical dependence and addiction.",
                    "steps": [
                        {
                            "step": "Identify the specific alkaloid",
                            "work": "Caffeine is in coffee/tea; Cocaine is from coca plant; Heroin is an opiate. Nicotine is specific to the tobacco plant (Nicotiana tabacum).",
                            "result": "Nicotine is correct"
                        }
                    ],
                    "answer": "Nicotine",
                    "concept": "Drug Abuse - Tobacco"
                }
            },
            {
                "problem": "The type of immunity provided by injecting antivenom against snake bite is:",
                "difficulty": "easy",
                "options": [
                    "Active natural immunity",
                    "Active artificial immunity",
                    "Passive natural immunity",
                    "Passive artificial immunity"
                ],
                "correct": 3,
                "solution": {
                    "given": ["Types of immunity"],
                    "find": "Immunity from antivenom injection",
                    "principle": "Antivenom contains pre-formed antibodies against snake venom. It is injected into the body to immediately neutralize the toxin. Since readymade antibodies are introduced artificially (via an injection), it is classified as passive artificial immunity.",
                    "steps": [
                        {
                            "step": "Categorize based on source and means",
                            "work": "The body is not making its own antibodies (not active). The antibodies are not from a natural source like the mother (not natural). It is an artificial transfer of antibodies.",
                            "result": "Passive artificial immunity is correct"
                        }
                    ],
                    "answer": "Passive artificial immunity",
                    "concept": "Immunity - Passive Artificial"
                }
            },
            {
                "problem": "The disease 'Syphilis' is caused by a:",
                "difficulty": "medium",
                "options": [
                    "Virus",
                    "Bacterium",
                    "Fungus",
                    "Protozoan"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Sexually Transmitted Diseases (STDs)"],
                    "find": "Causative agent of Syphilis",
                    "principle": "Syphilis is a sexually transmitted infection caused by the spiral-shaped bacterium Treponema pallidum. It progresses through distinct stages (primary, secondary, latent, tertiary) and can cause serious complications if left untreated.",
                    "steps": [
                        {
                            "step": "Match STD to pathogen",
                            "work": "While many STDs are viral (e.g., HIV, HPV), Syphilis is a classic example of a bacterial STD.",
                            "result": "Bacterium is correct"
                        }
                    ],
                    "answer": "Bacterium",
                    "concept": "Common Diseases - Bacterial (STD)"
                }
            },
            {
                "problem": "The 'MALT' constitutes about _____ percent of the lymphoid tissue in the human body.",
                "difficulty": "hard",
                "options": [
                    "20%",
                    "50%",
                    "70%",
                    "90%"
                ],
                "correct": 1,
                "solution": {
                    "given": ["Lymphoid tissue - MALT"],
                    "find": "Percentage of lymphoid tissue as MALT",
                    "principle": "MALT (Mucosa-Associated Lymphoid Tissue) is the diffuse lymphoid tissue associated with the mucosa of major tracts (e.g., gut-GALT, bronchus-BALT). It is a significant component of the immune system, estimated to constitute about 50% of the total lymphoid tissue in the body, as it is the first line of defense at common entry points for pathogens.",
                    "steps": [
                        {
                            "step": "Recall specific anatomical fact",
                            "work": "This highlights the importance of the immune system at mucosal surfaces. The figure is a standard estimate in immunology.",
                            "result": "50% is correct"
                        }
                    ],
                    "answer": "50%",
                    "concept": "Immunity - Lymphoid Tissue"
                }
            }
        ]
    },


}


// Export the data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NEET_BIOLOGY_DATA;
}

