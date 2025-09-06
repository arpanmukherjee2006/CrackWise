// Comprehensive JEE Physics Data
const PHYSICS_DATA = {
    // MECHANICS CHAPTERS

    "kinematics": {
        "title": "Kinematics",
        "weightage": "5-7%",
        "introduction": "Kinematics is the branch of mechanics that describes the motion of objects without considering the forces that cause the motion. It forms the foundation for understanding more complex mechanical systems and is crucial for solving JEE-level problems.",

        "topics": [
            {
                "name": "Motion in One Dimension",
                "description": "Analysis of objects moving along a straight line, using position, displacement, velocity, and acceleration.",
                "subtopics": [
                    {
                        "name": "Position, Displacement, and Distance",
                        "explanation": "Position refers to the location of an object, displacement is the change in position (a vector quantity), and distance is the total path length traveled (a scalar quantity)."
                    },
                    {
                        "name": "Velocity and Speed",
                        "explanation": "Velocity is the rate of change of displacement (a vector), while speed is the rate of change of distance (a scalar)."
                    },
                    {
                        "name": "Acceleration",
                        "explanation": "The rate of change of velocity with respect to time. Acceleration can be positive, negative, or zero."
                    },
                    {
                        "name": "Equations of Motion",
                        "explanation": "The three standard equations of motion for constant acceleration: v = u + at, s = ut + (1/2)at², v² = u² + 2as."
                    }
                ]
            },
            {
                "name": "Motion in Two Dimensions",
                "description": "Analysis of objects moving in a plane, including projectile motion and relative motion.",
                "subtopics": [
                    {
                        "name": "Vectors in Two Dimensions",
                        "explanation": "Representation of position, displacement, velocity, and acceleration as vectors in a plane."
                    },
                    {
                        "name": "Projectile Motion",
                        "explanation": "Motion of an object thrown into the air subject only to the acceleration of gravity. The path followed is a parabola."
                    },
                    {
                        "name": "Relative Motion",
                        "explanation": "Analysis of how motion appears to different observers moving relative to each other."
                    }
                ]
            }
        ],

        "formulas": [
            "v = u + at",
            "s = ut + (1/2)at²",
            "v² = u² + 2as",
            "For projectile motion: Range = (u² sin 2θ)/g",
            "For projectile motion: Maximum height = (u² sin² θ)/(2g)"
        ],

        "keywords": [
            "Kinematics", "Motion", "Displacement", "Velocity", "Acceleration", "Equations of Motion", 
            "Projectile Motion", "Relative Motion", "Vectors", "Trajectory", "Parabolic Path"
        ]
    },

    "laws-of-motion": {
        "title": "Laws of Motion",
        "weightage": "5-7%",
        "introduction": "Newton's Laws of Motion form the foundation of classical mechanics, describing the relationship between the motion of an object and the forces acting on it. These laws are essential for solving problems involving forces and motion in JEE Physics.",

        "topics": [
            {
                "name": "Newton's First Law",
                "description": "An object remains at rest or in uniform motion unless acted upon by an external force.",
                "subtopics": [
                    {
                        "name": "Inertia",
                        "explanation": "The resistance of an object to changes in its state of motion. Mass is a measure of inertia."
                    },
                    {
                        "name": "Equilibrium",
                        "explanation": "A state where the net force on an object is zero, resulting in no acceleration."
                    }
                ]
            },
            {
                "name": "Newton's Second Law",
                "description": "The acceleration of an object is directly proportional to the net force and inversely proportional to its mass.",
                "subtopics": [
                    {
                        "name": "Force and Acceleration",
                        "explanation": "F = ma, where F is the net force, m is the mass, and a is the acceleration."
                    },
                    {
                        "name": "Weight",
                        "explanation": "The force of gravity on an object, given by W = mg, where g is the acceleration due to gravity."
                    }
                ]
            },
            {
                "name": "Newton's Third Law",
                "description": "For every action, there is an equal and opposite reaction.",
                "subtopics": [
                    {
                        "name": "Action-Reaction Pairs",
                        "explanation": "Forces always occur in pairs, with each force acting on a different object."
                    },
                    {
                        "name": "Applications",
                        "explanation": "Examples include rocket propulsion, walking, and swimming."
                    }
                ]
            },
            {
                "name": "Friction",
                "description": "The force that opposes the relative motion or tendency of motion between two surfaces in contact.",
                "subtopics": [
                    {
                        "name": "Static Friction",
                        "explanation": "The friction force that must be overcome to start moving an object at rest."
                    },
                    {
                        "name": "Kinetic Friction",
                        "explanation": "The friction force that acts on an object in motion."
                    },
                    {
                        "name": "Rolling Friction",
                        "explanation": "The friction force that acts on a rolling object."
                    }
                ]
            }
        ],

        "formulas": [
            "F = ma",
            "W = mg",
            "Fs ≤ μs N (Static friction)",
            "Fk = μk N (Kinetic friction)",
            "Fr = μr N (Rolling friction)"
        ],

        "keywords": [
            "Newton's Laws", "Force", "Inertia", "Mass", "Weight", "Friction", "Equilibrium", 
            "Action-Reaction", "Free-body Diagram", "Contact Forces", "Non-contact Forces"
        ]
    },

    "work-energy-power": {
        "title": "Work, Energy, and Power",
        "weightage": "5-7%",
        "introduction": "This chapter explores the concepts of work, energy, and power, which are fundamental to understanding how forces cause changes in motion and how energy is transferred and transformed in physical systems.",

        "topics": [
            {
                "name": "Work",
                "description": "The transfer of energy that occurs when a force moves an object through a distance.",
                "subtopics": [
                    {
                        "name": "Definition of Work",
                        "explanation": "W = F·d·cosθ, where F is the force, d is the displacement, and θ is the angle between them."
                    },
                    {
                        "name": "Positive, Negative, and Zero Work",
                        "explanation": "Work is positive when the force component is in the direction of displacement, negative when opposite, and zero when perpendicular."
                    },
                    {
                        "name": "Work by Variable Forces",
                        "explanation": "Calculated using integration: W = ∫F·dx."
                    }
                ]
            },
            {
                "name": "Energy",
                "description": "The capacity to do work or produce heat.",
                "subtopics": [
                    {
                        "name": "Kinetic Energy",
                        "explanation": "The energy of motion, given by KE = (1/2)mv²."
                    },
                    {
                        "name": "Potential Energy",
                        "explanation": "Energy stored due to position or configuration. Gravitational PE = mgh, Elastic PE = (1/2)kx²."
                    },
                    {
                        "name": "Conservation of Energy",
                        "explanation": "In an isolated system, the total energy remains constant, though it may transform between different forms."
                    }
                ]
            },
            {
                "name": "Power",
                "description": "The rate at which work is done or energy is transferred.",
                "subtopics": [
                    {
                        "name": "Definition of Power",
                        "explanation": "P = W/t or P = F·v, where t is time and v is velocity."
                    },
                    {
                        "name": "Units of Power",
                        "explanation": "The SI unit of power is the watt (W), equal to one joule per second (J/s)."
                    }
                ]
            },
            {
                "name": "Collisions",
                "description": "Interactions between objects that involve the exchange of momentum and energy.",
                "subtopics": [
                    {
                        "name": "Elastic Collisions",
                        "explanation": "Collisions in which both momentum and kinetic energy are conserved."
                    },
                    {
                        "name": "Inelastic Collisions",
                        "explanation": "Collisions in which momentum is conserved but kinetic energy is not."
                    },
                    {
                        "name": "Coefficient of Restitution",
                        "explanation": "A measure of the elasticity of a collision, defined as the ratio of the relative speed after collision to the relative speed before collision."
                    }
                ]
            }
        ],

        "formulas": [
            "W = F·d·cosθ",
            "KE = (1/2)mv²",
            "PE (gravitational) = mgh",
            "PE (elastic) = (1/2)kx²",
            "P = W/t or P = F·v",
            "For elastic collisions: m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂' and (1/2)m₁v₁² + (1/2)m₂v₂² = (1/2)m₁v₁'² + (1/2)m₂v₂'²",
            "For inelastic collisions: m₁v₁ + m₂v₂ = (m₁ + m₂)v'",
            "Coefficient of restitution: e = |v₂' - v₁'|/|v₁ - v₂|"
        ],

        "keywords": [
            "Work", "Energy", "Power", "Kinetic Energy", "Potential Energy", "Conservation of Energy", 
            "Collisions", "Elastic", "Inelastic", "Coefficient of Restitution", "Work-Energy Theorem"
        ]
    }
};