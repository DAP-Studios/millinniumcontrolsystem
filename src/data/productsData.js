export const productsData = [
  {
    id: 'goc',
    name: 'Graphic Operation Controller (GOC)',
    folderName: 'GOC',
    shortDesc: 'Compact PLC integrated with HMI, designed for cost-effective customized control.',
    overview: 'Graphic Operation Controller (GOC) is an innovative concept combining PLC logic control and HMI visualization in a single compact device. Specifically designed for cost-sensitive markets, GOC provides high utility with integrated digital/analog I/Os, serial and Ethernet communications, and user-friendly graphic programming.',
    features: [
      'Monochrome and Color graphic display options with custom screen designing.',
      'Built-in digital and analog I/Os supporting diverse sensor and actuator connections.',
      'Integrated communication ports including RS232, RS485, and Ethernet.',
      'Flexible mounting options with IP65 front panel protection.',
      'Simplified programming via a unified software platform.'
    ],
    subProducts: [
      { name: 'GOC35', desc: 'Compact monochrome display (3.5") controller with 128x64 pixels, built-in buttons, and analog capability.' },
      { name: 'GOC43', desc: 'Touchscreen color display (4.3") with 480x272 resolution, supporting custom graphics, recipe management, and serial/Ethernet communications.' }
    ],
    specs: [
      { key: 'Input Voltage', value: '24V DC (+/- 10%)' },
      { key: 'Digital Inputs/Outputs', value: 'Up to 28 I/Os built-in (expandable via extension modules)' },
      { key: 'Analog Inputs/Outputs', value: '10-bit / 12-bit Analog I/Os built-in' },
      { key: 'Communication Protocols', value: 'Modbus RTU, Modbus TCP/IP, Proprietary' },
      { key: 'Programming Software', value: 'GOC Creator (Ladder logic + screen design)' }
    ],
    downloads: [
      { title: 'GOC Catalog', size: '3.4 MB', type: 'PDF' },
      { title: 'GOC User Manual', size: '8.2 MB', type: 'PDF' },
      { title: 'GOC Programming Guide', size: '5.1 MB', type: 'PDF' }
    ]
  },
  {
    id: 'melhmi-got',
    name: 'Human Machine Interfaces MELHMI-GOT',
    folderName: 'Human Machine Interfaces MELHMI-GOT',
    shortDesc: 'High-performance operators panels and touchscreens for intuitive plant visualization.',
    overview: 'Mitsubishi Graphic Operation Terminals (GOT) represent the pinnacle of visualization technology. Seamlessly connecting to PLCs, VFDs, and Servos, the GOT series offers high-resolution screens, multi-touch controls, gesture operations, and extensive connectivity to bring complete clarity to complex plant processes.',
    features: [
      'Multi-touch gestures (zoom/scroll) for intuitive control.',
      'Premium high-resolution displays (TFT LCD) with up to 16 million colors.',
      'Built-in Ethernet, USB, SD Card, and Serial interfaces for flexible connectivity.',
      'Advanced remote monitoring via mobile devices and web browsers.',
      'Integrates seamlessly with GX Works3 for debug-free data tag sharing.'
    ],
    subProducts: [
      { name: 'GOT2000 Series (GT27 / GT25)', desc: 'Flagship series with high-speed performance, extensive network support, and gesture controls.' },
      { name: 'GOT Simple Series (GS21)', desc: 'Cost-effective widescreen models offering essential features and reliable performance.' },
      { name: 'Handheld GOT', desc: 'Mobile touchscreen units with safety switches for setup and maintenance on the move.' }
    ],
    specs: [
      { key: 'Display Size Range', value: '3.8 inches to 15 inches' },
      { key: 'Resolution', value: 'VGA, SVGA, XGA, WXGA' },
      { key: 'Interface Options', value: 'Ethernet, RS-232, RS-422/485, USB Host/Device, SD Card' },
      { key: 'Memory Capacity', value: 'Up to 32MB user memory + SD Card support' },
      { key: 'Protection Class', value: 'IP67F front panel dust-proof / water-proof' }
    ],
    downloads: [
      { title: 'GOT2000 Series General Catalog', size: '12.4 MB', type: 'PDF' },
      { title: 'GOT Simple Selection Guide', size: '4.8 MB', type: 'PDF' },
      { title: 'GT Works3 Screen Design Manual', size: '15.6 MB', type: 'PDF' }
    ]
  },
  {
    id: 'industrial-robots',
    name: 'Industrial Robots (MELFA)',
    folderName: 'Industrial Robots',
    shortDesc: 'Intelligent SCARA and Articulated robots for high-speed precision handling and assembly.',
    overview: 'Mitsubishi Electric\'s MELFA industrial robots offer state-of-the-art technology, high precision, speed, and collaborative safety. From compact high-speed SCARA robots to flexible 6-axis articulated arms, these systems are equipped with dedicated controllers, advanced torque sensors, and vision sensors to optimize smart production lines.',
    features: [
      'Class-leading speed and positioning accuracy (up to +/-0.01 mm repeatability).',
      'Compact footprint and slim arm design to fit into narrow workspaces.',
      'Intelligent features: 3D vision sensors, force sensors, and dynamic compliance.',
      'Collaborative operation mode (MELFA ASSISTA) with hand guidance.',
      'Direct connection and coordinated operation with MELSEC PLCs and Servos.'
    ],
    subProducts: [
      { name: 'RV Series (Articulated Robots)', desc: '6-axis articulated robots offering long reach and flexible movement for complex assembly and sorting.' },
      { name: 'RH Series (SCARA Robots)', desc: '4-axis high-speed SCARA robots optimized for pick-and-place, packaging, and sorting.' },
      { name: 'MELFA ASSISTA', desc: 'Collaborative robot (Cobot) designed to work safely alongside humans without safety fences.' }
    ],
    specs: [
      { key: 'Payload Capacity', value: '1 kg to 20 kg' },
      { key: 'Reach Radius', value: '504 mm to 1503 mm' },
      { key: 'Repeatability', value: '+/- 0.01 mm to +/- 0.02 mm' },
      { key: 'Degrees of Freedom', value: '4-axis (SCARA), 6-axis (Articulated)' },
      { key: 'Controller Compatibility', value: 'CR800-D / CR800-R (iQ Platform)' }
    ],
    downloads: [
      { title: 'MELFA Robots Selection Catalog', size: '18.2 MB', type: 'PDF' },
      { title: 'MELFA ASSISTA Cobot Brochure', size: '3.9 MB', type: 'PDF' },
      { title: 'RT ToolBox3 User Guide', size: '9.5 MB', type: 'PDF' }
    ]
  },
  {
    id: 'inverters-vfd',
    name: 'Inverters - VFD- Ac Drive',
    folderName: 'Inverters - VFD- Ac Drive',
    shortDesc: 'Advanced Variable Frequency Drives (VFD) for maximum motor efficiency and precise speed control.',
    overview: 'Mitsubishi Electric Variable Frequency Drives (FREQROL) set the industry standard for reliability, energy efficiency, and high-performance motor control. From micro-drives for simple fan/pump speed control to heavy-duty sensorless vector drives for cranes and extruders, FREQROL delivers intelligent power.',
    features: [
      'Advanced magnetic flux vector control and real-time auto-tuning.',
      'Built-in functional safety (STO, SS1, SLS) compliance.',
      'Advanced predictive diagnostics: lifetime check for capacitors, fans, and relays.',
      'Embedded PLC functionality for customized logic and distributed control.',
      'Comprehensive network support: CC-Link IE TSN, EtherNet/IP, PROFINET, Modbus.'
    ],
    subProducts: [
      { name: 'FR-A800 Series', desc: 'High-performance flagship inverter with sensorless vector control for heavy-duty applications.' },
      { name: 'FR-F800 Series', desc: 'Energy-saving inverter optimized for fan, pump, and HVAC systems.' },
      { name: 'FR-E800 Series', desc: 'Next-generation compact smart drive featuring CC-Link IE TSN connectivity and AI diagnostics.' },
      { name: 'FR-D700 Series', desc: 'Simple, compact micro-drive offering reliability and ease of use for general machinery.' }
    ],
    specs: [
      { key: 'Power Range', value: '0.1 kW to 630 kW' },
      { key: 'Voltage Classes', value: '1-Phase 200V, 3-Phase 200V / 400V / 600V' },
      { key: 'Overload Capacity', value: '150% for 60s, 200% for 3s (Heavy Duty)' },
      { key: 'Control Modes', value: 'V/F control, Advanced Flux Vector, Real Sensorless Vector, Closed-loop Vector' },
      { key: 'Built-in Safety', value: 'SIL2 / SIL3 (STO) depending on model' }
    ],
    downloads: [
      { title: 'FREQROL Inverter General Catalog', size: '14.5 MB', type: 'PDF' },
      { title: 'FR-E800 Smart Inverter Brochure', size: '5.2 MB', type: 'PDF' },
      { title: 'Inverter Setup Software Guide', size: '3.1 MB', type: 'PDF' }
    ]
  },
  {
    id: 'low-voltage-breakers',
    name: 'Low-voltage Circuit Breakers',
    folderName: 'Low-voltage Circuit Breakers',
    shortDesc: 'Reliable power protection and safety with MCCBs, ELCBs, and Air Circuit Breakers.',
    overview: 'Safeguard your industrial installations and machinery with Mitsubishi Electric\'s comprehensive low-voltage switchgear. Featuring Moulded Case Circuit Breakers (MCCB), Earth Leakage Circuit Breakers (ELCB), and Air Circuit Breakers (ACB), our devices offer extreme electrical durability, smart coordination, and embedded power monitoring functionalities.',
    features: [
      'WS-V series breakers featuring advanced Arc-extinguishing technology for compact size.',
      'Built-in energy and power measuring capabilities for energy management.',
      'High breaking capacities up to 150kA to secure robust installations.',
      'Global standards compliance: IEC, UL, CSA, JIS, GB.',
      'Modular accessories: auxiliary switches, shunt trips, motor operators.'
    ],
    subProducts: [
      { name: 'NF Series (Moulded Case Circuit Breakers - MCCB)', desc: 'Standard power circuit protection against overloads and short circuits.' },
      { name: 'NV Series (Earth Leakage Circuit Breakers - ELCB)', desc: 'Dual protection combining overload safety with advanced earth leakage detection.' },
      { name: 'AE-SW Series (Air Circuit Breakers - ACB)', desc: 'High-current main distribution breakers with intelligent electronic trips.' },
      { name: 'BH-D Series (Miniature Circuit Breakers - MCB)', desc: 'Din-rail breakers for control panels and small branch circuit protection.' }
    ],
    specs: [
      { key: 'Rated Current Range', value: '3A to 6300A' },
      { key: 'Rated Operating Voltage', value: 'Up to 690V AC' },
      { key: 'Short-Circuit Breaking Capacity', value: '10kA to 150kA (at 415V)' },
      { key: 'Trip Units', value: 'Thermal-Magnetic, Hydraulic-Magnetic, Electronic Trip' },
      { key: 'Mounting Style', value: 'Fixed, Plug-in, Draw-out (ACB)' }
    ],
    downloads: [
      { title: 'Low Voltage Circuit Breakers Catalog', size: '16.8 MB', type: 'PDF' },
      { title: 'WS-V Series MCCB/ELCB Brochure', size: '6.5 MB', type: 'PDF' },
      { title: 'Air Circuit Breakers AE-SW Catalog', size: '9.2 MB', type: 'PDF' }
    ]
  },
  {
    id: 'melsec-fx3u',
    name: 'MELSEC FX3U Series PLCs',
    folderName: 'MELSEC FX3U Series',
    shortDesc: 'The global standard high-speed micro controller for compact control systems.',
    overview: 'The MELSEC FX3U is the 3rd generation of Mitsubishi Electric\'s successful family of micro programmable logic controllers. Featuring outstanding speed, expandable memory, specialized positioning modules, and extensive communications adapters, the FX3U continues to be a trusted workhorse in compact industrial control.',
    features: [
      'High-speed execution: 0.065 microseconds per basic instruction.',
      'Large program memory: 64,000 steps of built-in RAM.',
      'Expandable up to 384 local and networked I/O points.',
      'Dual bus architecture: high-speed adapter bus and standard expansion bus.',
      'Built-in high-speed counters and multi-axis positioning outputs.'
    ],
    subProducts: [
      { name: 'FX3U Main Units', desc: 'Base controller units with 16 to 128 points, Relay or Transistor outputs.' },
      { name: 'FX3U Extension Blocks', desc: 'Compact digital and analog expansion blocks to scale I/O channels.' },
      { name: 'FX3U Special Function Modules', desc: 'Dedicated adapters for RS-232, RS-485, Modbus, Ethernet, and positioning.' }
    ],
    specs: [
      { key: 'Execution Speed', value: '0.065 µs / basic instruction' },
      { key: 'Program Capacity', value: '64,000 Steps RAM / Flash' },
      { key: 'Max I/O Points', value: '384 points (local + network)' },
      { key: 'Built-in Positioning', value: '3-axis independent pulse outputs (100kHz)' },
      { key: 'Programming Software', value: 'GX Works2 / GX Developer' }
    ],
    downloads: [
      { title: 'MELSEC FX3U Catalog', size: '7.8 MB', type: 'PDF' },
      { title: 'FX3U Programming Manual', size: '11.4 MB', type: 'PDF' },
      { title: 'FX3U Hardware Reference', size: '5.6 MB', type: 'PDF' }
    ]
  },
  {
    id: 'melsec-fx5u',
    name: 'MELSEC FX5U Series PLCs (iQ-F)',
    folderName: 'MELSEC FX5U Series',
    shortDesc: 'Next-generation high-speed compact PLC with built-in Ethernet, analog, and motion controls.',
    overview: 'The MELSEC iQ-F series is the next evolution of compact controllers, spearheaded by the flagship FX5U PLC. Offering a brand-new high-speed processor, built-in analog inputs/outputs, built-in Ethernet, SD card slot, and specialized positioning, the FX5U brings powerful enterprise-level features into a compact form factor.',
    features: [
      'Outstanding processing speed: 34 nanoseconds per basic instruction.',
      'Built-in Ethernet port for network integration, Modbus TCP, and web server functions.',
      'Built-in Analog I/Os (2 inputs, 1 output) with diagnostic resolution.',
      'Built-in 4-axis positioning control (200kHz pulse outputs).',
      'Advanced security functions with program execution password protection.'
    ],
    subProducts: [
      { name: 'FX5U Main Units', desc: 'High-speed compact PLCs with built-in CPU, power supply, and I/Os.' },
      { name: 'FX5 Expansion Modules', desc: 'Analog I/O, temperature control, serial communication, and CC-Link IE TSN expansion.' },
      { name: 'FX5-SSC Simple Motion', desc: 'Multi-axis positioning via SSCNET III/H for precise servo synchronous control.' }
    ],
    specs: [
      { key: 'Execution Speed', value: '0.034 µs / basic instruction' },
      { key: 'Program Capacity', value: '64,000 Steps / 128,000 Steps' },
      { key: 'Built-in Ethernet', value: '1 Port (supports Socket, Web Server, FTP, Modbus TCP)' },
      { key: 'Built-in Analog', value: '2 Inputs (0-10V DC), 1 Output (0-10V DC)' },
      { key: 'Built-in Positioning', value: '4-axis pulse output (200kHz)' }
    ],
    downloads: [
      { title: 'MELSEC iQ-F FX5U Catalog', size: '9.6 MB', type: 'PDF' },
      { title: 'FX5U Hardware User Manual', size: '12.8 MB', type: 'PDF' },
      { title: 'FX5 Programming Manual', size: '14.2 MB', type: 'PDF' }
    ]
  },
  {
    id: 'melsec-q',
    name: 'MELSEC Q Series PLCs',
    folderName: 'MELSEC Q Series',
    shortDesc: 'High-performance modular PLCs for complex plant control and multi-CPU systems.',
    overview: 'The MELSEC Q Series modular controller is the industry benchmark for flexibility, scale, and high-speed multi-CPU processing. Designed for large-scale automation, Q Series allows the integration of PLC, Motion, Process, and PC CPU modules onto a single backplane, delivering high-speed data exchanges and comprehensive control.',
    features: [
      'Multi-CPU architecture: mount up to 4 CPUs on a single base rack.',
      'Sub-millisecond high-speed data bus sharing between multiple CPUs.',
      'Redundant system capability for high-availability process control.',
      'Extensive module lineup: Analog, High-Speed Counter, Positioning, Network, Serial.',
      'Connects directly to industrial MES database systems.'
    ],
    subProducts: [
      { name: 'Q Series CPU Modules (Universal)', desc: 'High-speed processors with built-in Ethernet, USB, and memory ports.' },
      { name: 'Q Series Analog & Temp Modules', desc: 'High-accuracy analog input/output and temperature controllers.' },
      { name: 'Q Series Network Modules', desc: 'CC-Link IE Control, CC-Link IE Field TSN, Ethernet, Profibus, DeviceNet.' }
    ],
    specs: [
      { key: 'Execution Speed', value: '0.0098 µs (9.8 ns) / basic instruction' },
      { key: 'Max Local I/O Points', value: '4096 local points (8192 networked)' },
      { key: 'Multi-CPU Support', value: 'Up to 4 CPUs (PLC, Motion, CNC, C-Controller)' },
      { key: 'Program Memory', value: 'Up to 290k steps built-in' },
      { key: 'Hot-Swap Capability', value: 'Supported (change modules while running)' }
    ],
    downloads: [
      { title: 'MELSEC Q Series General Catalog', size: '15.4 MB', type: 'PDF' },
      { title: 'Q Series CPU User Manual', size: '8.9 MB', type: 'PDF' },
      { title: 'Q Series Analog Module Manual', size: '6.7 MB', type: 'PDF' }
    ]
  },
  {
    id: 'melservo-servo',
    name: 'MELSERVO - Ac Servo',
    folderName: 'MELSERVO - Ac Servo',
    shortDesc: 'Ultra-high precision AC Servo Motors and amplifiers with advanced auto-tuning.',
    overview: 'Mitsubishi Electric MELSERVO systems are designed to maximize machine performance through ultra-fast frequency response, extreme resolution, and intelligent tuning. The MELSERVO MR-J5 and MR-J4 series offer industry-leading performance for packaging, semiconductors, automotive, and printing machinery.',
    features: [
      'Industry-leading speed frequency response (up to 3.5 kHz).',
      'High-resolution encoders: up to 26-bit (67,108,864 pulses per revolution).',
      'Advanced One-Touch Tuning: automatically adjusts filters and gains in seconds.',
      'Predictive maintenance using AI to detect mechanical wear and tear.',
      'TSN (Time Sensitive Networking) support via CC-Link IE TSN for synchronous control.'
    ],
    subProducts: [
      { name: 'MR-J5 Series', desc: 'Next-generation flagship servos featuring CC-Link IE TSN, 3.5kHz response, and advanced safety.' },
      { name: 'MR-J4 Series', desc: 'Proven high-performance servos with SSCNET III/H high-speed communication.' },
      { name: 'Rotary Servo Motors (HK / HG)', desc: 'Low, medium, and high-inertia motors ranging from 50W to 22kW.' }
    ],
    specs: [
      { key: 'Power Output Range', value: '50W to 22 kW' },
      { key: 'Encoder Resolution', value: '22-bit to 26-bit absolute' },
      { key: 'Velocity Frequency Response', value: '2.5 kHz (MR-J4) to 3.5 kHz (MR-J5)' },
      { key: 'Communication Networks', value: 'CC-Link IE TSN, SSCNET III/H, EtherCAT, Modbus, Pulse/Analog' },
      { key: 'Safety Functions', value: 'STO, SS1, SS2, SOS, SBC, SLS, SDI, SSM (up to SIL3/PL e)' }
    ],
    downloads: [
      { title: 'MELSERVO MR-J5 General Catalog', size: '19.8 MB', type: 'PDF' },
      { title: 'MELSERVO MR-J4 General Catalog', size: '16.5 MB', type: 'PDF' },
      { title: 'HG/HK Servo Motor Dimensions Guide', size: '8.4 MB', type: 'PDF' }
    ]
  },
  {
    id: 'motion-unit',
    name: 'Motion Unit',
    folderName: 'Motion Unit',
    shortDesc: 'Multi-axis synchronous motion controllers for absolute tracking and precision speed-torque control.',
    overview: 'Mitsubishi Motion Units and Controllers manage complex multi-axis synchronization, cam operations, interpolation, and speed-torque control. Designed to mount directly on the MELSEC iQ-R or iQ-F backplane or communicate via TSN, these controllers deliver precise alignment for multi-axis production systems.',
    features: [
      'High-speed synchronous control via CC-Link IE TSN or SSCNET III/H.',
      'Simple programming using virtual mechanical models and electronic cams.',
      'Advanced interpolation: linear, circular, helical, and 3D path controls.',
      'Direct connection with servo amplifiers for real-time monitoring.',
      'Advanced safety motion control: limit-protection, speed guarding, zone checks.'
    ],
    subProducts: [
      { name: 'iQ-R Series Motion Controllers', desc: 'High-end modular motion CPUs capable of controlling up to 256 axes synchronously.' },
      { name: 'Simple Motion Modules (iQ-F / iQ-R)', desc: 'Compact modules for positioning, camming, and multi-axis synchronizations.' },
      { name: 'Stand-alone Motion Controllers', desc: 'Dedicated controllers for specialized multi-axis machinery.' }
    ],
    specs: [
      { key: 'Control Axes Capacity', value: 'Up to 256 axes per system' },
      { key: 'Operation Cycle', value: '0.0625 ms / axis minimum cycle' },
      { key: 'Communication Network', value: 'CC-Link IE TSN (Gigabit Ethernet), SSCNET III/H (Fibre Optic)' },
      { key: 'Control Modes', value: 'Position, Speed, Torque, Continuous Trajectory, Electronic Cam, Synchronous' },
      { key: 'Interpolation', value: 'Linear (up to 4 axes), Circular (2 axes), Helical (3 axes)' }
    ],
    downloads: [
      { title: 'Motion Controllers General Catalog', size: '14.2 MB', type: 'PDF' },
      { title: 'iQ-R Motion CPU User Manual', size: '10.8 MB', type: 'PDF' },
      { title: 'Simple Motion Module Programming Manual', size: '8.9 MB', type: 'PDF' }
    ]
  },
  {
    id: 'software',
    name: 'SOFTWARE (MELSOFT)',
    folderName: 'SOFTWARE',
    shortDesc: 'Integrated engineering suite for seamless logic programming, GOT screen design, and robot setup.',
    overview: 'The MELSOFT engineering software suite provides a complete design environment for Mitsubishi Electric factory automation systems. Combining PLC programming, GOT screen creation, motion configuration, and robot simulation into unified suites like MELSOFT iQ Works, it reduces engineering costs, simplifies commissioning, and speeds up diagnostics.',
    features: [
      'Unified data tag sharing across PLC, HMI, and Motion software.',
      'Intuitive 3D simulation for robotic trajectories and physical cycles.',
      'Pre-built function blocks (FBs) and templates for quick programming.',
      'Advanced diagnostics and real-time trace for fast troubleshooting.',
      'Structured text (ST), ladder diagram (LD), and SFC programming support.'
    ],
    subProducts: [
      { name: 'GX Works3', desc: 'The next-generation PLC programming and configuration software for MELSEC iQ-R and iQ-F.' },
      { name: 'GT Works3', desc: 'Comprehensive screen design software for all GOT touchscreens.' },
      { name: 'MT Works3', desc: 'Motion controller programming and maintenance software.' },
      { name: 'RT ToolBox3', desc: 'Robot programming, editing, simulation, and commissioning software.' }
    ],
    specs: [
      { key: 'Supported OS', value: 'Windows 11 / Windows 10 (64-bit)' },
      { key: 'Suite Packages', value: 'MELSOFT iQ Works, MELSOFT Navigator' },
      { key: 'Languages Supported', value: 'Ladder (LD), Structured Text (ST), Sequential Function Chart (SFC), FBD' },
      { key: 'Compliance', value: 'IEC 61131-3 standard programming' },
      { key: 'Simulation Mode', value: 'Built-in offline simulator for PLC, GOT, Motion, and Robot' }
    ],
    downloads: [
      { title: 'MELSOFT Software Suite Brochure', size: '8.4 MB', type: 'PDF' },
      { title: 'GX Works3 Programming Manual', size: '16.9 MB', type: 'PDF' },
      { title: 'GT Works3 Screen Creator Guide', size: '12.1 MB', type: 'PDF' }
    ]
  }
];
