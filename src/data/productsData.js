<<<<<<< HEAD
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
=======
// Millennium Control System Pvt. Ltd. Pune
// Categories and Products database generated and SEO-optimized automatically.

export const initialCategories = [
  {
    "id": "goc",
    "name": "Graphic Operation Controllers (GOC)",
    "description": "Compact Graphic Operation Controllers merging PLC control and HMI screen interface in a single unit.",
    "image": "/images/products/goc_goc43_image_media_image1.png"
  },
  {
    "id": "human-machine-interfaces-melhmi-got",
    "name": "HMIs & Display Terminals (GOT HMI)",
    "description": "Mitsubishi GOT HMI touchscreen operation terminals with high-definition display panels and remote control.",
    "image": "/images/products/human-machine-interfaces-melhmi-got_got-hmi_hmi-png.png"
  },
  {
    "id": "industrial-robots",
    "name": "MELFA Industrial Robots",
    "description": "Mitsubishi vertical multi-joint and SCARA industrial robotic arms for pick-and-place, assembly, and sorting.",
    "image": "/images/products/industrial-robots_robot-image-png.png"
  },
  {
    "id": "inverters-vfd-ac-drive",
    "name": "VFD Inverter AC Drives",
    "description": "High-performance Variable Frequency Drives (VFD) and inverter drives for precise speed and torque control.",
    "image": "/images/products/inverters-vfd-ac-drive_a800_a840-png.png"
  },
  {
    "id": "low-voltage-circuit-breakers",
    "name": "Low-voltage Switchgears & Breakers",
    "description": "Molded Case Circuit Breakers (MCCB), Air Circuit Breakers (ACB), and magnetic contactors for electrical protection.",
    "image": "/images/products/low-voltage-circuit-breakers_image-png.png"
  },
  {
    "id": "melsec-fx3u-series",
    "name": "MELSEC FX3U Series PLC",
    "description": "High-speed classic modular PLC supporting up to 384 I/O points and independent simple positioning control.",
    "image": "/images/products/melsec-fx3u-series_fx3u-series-png.png"
  },
  {
    "id": "melsec-fx5u-series",
    "name": "MELSEC FX5U Series Next-Gen PLC",
    "description": "Next-generation Mitsubishi iQ-F series micro PLC with integrated analog capability, Ethernet interface, and high-speed positioning.",
    "image": "/images/products/melsec-fx5u-series_fx5u-image-png.png"
  },
  {
    "id": "melsec-q-series",
    "name": "MELSEC Q Series Modular PLC",
    "description": "High-performance modular programmable logic controllers (PLCs) supporting multi-CPU racks and advanced process control.",
    "image": "/images/products/melsec-q-series_q-series-plc-png.png"
  },
  {
    "id": "melservo-ac-servo",
    "name": "MELSERVO AC Servo Motors & Drives",
    "description": "Precision AC Servo Motors and Servo Drives with high-resolution encoders and network communications.",
    "image": "/images/products/melservo-ac-servo_melservo-j4_product-image-png.png"
  },
  {
    "id": "motion-unit",
    "name": "Multi-Axis Motion Controllers",
    "description": "Dedicated motion controllers and positioning modules for multi-axis synchronous speed, electronic cams, and path tracking.",
    "image": "/images/products/motion-unit_image-jpg.jpg"
  },
  {
    "id": "software",
    "name": "MELSOFT Industrial Software",
    "description": "Engineering software suite (GX Works3, GT Works3, MT Developer2) for PLC, HMI, and motion design.",
    "image": "/images/products/software_software_media_image1.png"
  }
];

export const initialProducts = [
  {
    "id": "goc-goc35",
    "name": "Graphic Operation Controller GOC35",
    "categorySlug": "goc",
    "summary": "Compact 3.5-inch monochrome Graphic Operation Controller merging logic control and HMI screen interface, ideal for Pune automation panels.",
    "description": "The Mitsubishi Electric GOC35 is a space-saving, all-in-one controller featuring a 3.5\" monochrome LCD (128x64 pixels) and 10 functional key membranes. Widely integrated by Millennium Control System in water treatment, pump control, and HVAC systems across Maharashtra, it features an integrated logic controller and dual serial communication ports (RS-232 and RS-485) to eliminate complex cabinet wiring.",
    "features": [
      "3.5-inch monochrome display (128 x 64 pixels) with backlight",
      "10 rugged membrane tactile functional buttons",
      "Built-in logic controller with micro PLC programming capabilities",
      "Integrated high-speed counters and pulse train routing",
      "Dual serial communication ports supporting RS-232 & RS-485 protocols",
      "Space-saving DIN rail or panel mounting design"
    ],
    "specifications": {
      "Display": "3.5\" Monochrome HMI screen",
      "Keypad": "10 Functional tactile keys",
      "Communication Ports": "RS-232 & RS-485",
      "PLC Memory": "Logic controller capacity built-in",
      "Mounting": "DIN rail or Panel mount",
      "Voltage": "24V DC operating input"
    },
    "imageUrl": "/images/products/goc_goc35_image_media_image1.png",
    "youtubeUrl": "https://www.youtube.com/embed/4OVCmdxR6y0",
    "catalogUrl": "/brochures/goc_goc35_catalogue-pdf.pdf"
  },
  {
    "id": "goc-goc43",
    "name": "Graphic Operation Controller GOC43",
    "categorySlug": "goc",
    "summary": "Advanced 4.3-inch color touch Graphic Operation Controller with built-in digital/analog I/Os and multi-language support.",
    "description": "The Mitsubishi Electric GOC43 is a premier 4.3-inch color TFT touchscreen Graphic Operation Controller that combines high-speed PLC control with a rich visual screen. Configured and programmed in Pune by Millennium Control System, the GOC43 features 65k colors, modular extension capabilities, and extensive built-in digital and analog inputs/outputs. It offers regional language support (Hindi, Marathi, Tamil, etc.) for local shop-floor operations.",
    "features": [
      "4.3-inch color TFT touchscreen displaying 65,536 colors",
      "All-in-one design (combines logic CPU and operator panel)",
      "Supports up to 28 digital I/O points (16 inputs / 12 outputs)",
      "Supports analog slots (voltage, current, and temperature sensor inputs)",
      "Integrated RS-232, RS-485, and optional Ethernet communication",
      "Multi-language support for regional operator displays"
    ],
    "specifications": {
      "Screen": "4.3\" TFT Color Touch Panel",
      "Resolution": "480 x 272 pixels",
      "I/O Capacity": "16 Digital Inputs / 12 Digital Outputs",
      "Analog Inputs": "Voltage/Current & RTD/TC temperature support",
      "Memory": "512 KB Program Memory",
      "Languages": "Multi-language support (Hindi, Marathi, etc.)"
    },
    "imageUrl": "/images/products/goc_goc43_image_media_image1.png",
    "youtubeUrl": "https://www.youtube.com/embed/4OVCmdxR6y0",
    "catalogUrl": "/brochures/goc_goc43_goc-43-catalogue-pdf.pdf"
  },
  {
    "id": "human-machine-interfaces-melhmi-got-got-hmi",
    "name": "Mitsubishi GOT2000 Series HMI",
    "categorySlug": "human-machine-interfaces-melhmi-got",
    "summary": "Premium Human-Machine Interface GOT panel supporting multi-touch gestures, Ethernet connectivity, and remote VNC control.",
    "description": "The Mitsubishi Electric GOT2000 series sets the industry standard for operator control panels. Featuring high-resolution crystal-clear TFT displays, tablet-like pinch-to-zoom and swipe gestures, and robust Ethernet/USB communications. Millennium Control System Pune provides custom HMI screen development, remote VNC diagnostics setup, and SCADA database integrations, enabling managers to mirror screens on mobile devices.",
    "features": [
      "Vibrant high-resolution TFT LCD display supporting multi-touch gestures",
      "Integrated VNC server for remote monitoring via tablet or mobile devices",
      "Direct driver support for major industrial controllers (PLC, CNC, Robot)",
      "Integrated SD memory card slot, USB ports, and dual Ethernet ports",
      "FTP Server/Client compatibility for dynamic recipes and reports transfer"
    ],
    "specifications": {
      "Screen Sizes": "7\", 10.4\", 12.1\", 15\" display sizes available",
      "Color Grid": "65,536 colors TFT matrix",
      "Touch Type": "Analog resistive / Projective capacitive",
      "Interfaces": "Ethernet, USB, RS-232, RS-422/485",
      "Data Logging": "SD Card storage for CSV alerts and alarms"
    },
    "imageUrl": "/images/products/human-machine-interfaces-melhmi-got_got-hmi_feature-png.png",
    "youtubeUrl": "https://www.youtube.com/embed/iMCk2mJAq14",
    "catalogUrl": "/brochures/human-machine-interfaces-melhmi-got_catalogue.pdf"
  },
  {
    "id": "industrial-robots-series",
    "name": "MELFA Articulated & SCARA Robots",
    "categorySlug": "industrial-robots",
    "summary": "High-speed Mitsubishi vertical multi-joint and SCARA industrial robotic arms for pick-and-place, assembly, and sorting in India.",
    "description": "Mitsubishi MELFA industrial robots represent the peak of high-speed mechanical precision. Offering a lineup of vertically articulated 6-axis arms and SCARA 4-axis arms, they execute operations down to \u00b10.02 mm repeatability. Millennium Control System Pune provides complete robotic cell integration, gripper design, safety fence configuration, and teach-pendant programming for automotive and electronic assembly lines.",
    "features": [
      "Vertically articulated 6-axis and SCARA 4-axis arm designs",
      "Ultra-high speed cycles (up to 120 cycles per minute)",
      "Repeatability accuracy down to +/- 0.02 mm",
      "Advanced CR800 controller supporting CC-Link IE TSN connectivity",
      "Optional integrated force sensors and 2D/3D vision tracking systems"
    ],
    "specifications": {
      "Reach Range": "500 mm to 1500 mm arm reach",
      "Payload Capacity": "3 kg, 6 kg, 12 kg, 20 kg payload configurations",
      "Accuracy": "\u00b10.02 mm positioning repeatability",
      "Controller": "SSCNET III/H / CC-Link IE TSN CR800 controller",
      "Protection": "IP67 dust/water resistant models available"
    },
    "imageUrl": "/images/products/industrial-robots_products_media_image1.png",
    "youtubeUrl": "https://www.youtube.com/embed/iMCk2mJAq14",
    "catalogUrl": "#"
  },
  {
    "id": "inverters-vfd-ac-drive-a800",
    "name": "FR-A800 High-Performance VFD Inverter",
    "categorySlug": "inverters-vfd-ac-drive",
    "summary": "Mitsubishi Electric premium VFD AC drive offering vector control, STO safety, and built-in PLC functions in Maharashtra.",
    "description": "The Mitsubishi Electric FR-A800 series is a heavy-duty, high-performance Variable Frequency Drive. It provides exceptional speed and torque control for complex loads such as cranes, hoists, extruders, and winding machines. Engineered with real sensorless vector control, built-in PLC sequence logic, and functional safety standard STO (Safe Torque Off), it is Pune's leading choice for premium drive applications.",
    "features": [
      "Real sensorless vector control for precise torque and speed loop",
      "Integrated functional safety: STO (Safe Torque Off) SIL2/PLd standard",
      "Built-in mini PLC programming logic for localized drive tasks",
      "Dual channel USB port connectivity for simple tuning and diagnostics",
      "Wide range of communication protocols: CC-Link, Modbus RTU, Ethernet"
    ],
    "specifications": {
      "Power Range": "0.4 kW to 630 kW capacity",
      "Output Frequency": "0.2 to 590 Hz frequency output",
      "Control Loop": "V/f, Closed-loop Vector, Sensorless Vector",
      "Overload": "150% overload for 60 seconds (Heavy Duty)",
      "Network Link": "CC-Link IE TSN, Ethernet, Profibus-DP, Modbus"
    },
    "imageUrl": "/images/products/inverters-vfd-ac-drive_a800_a840-png.png",
    "youtubeUrl": "https://www.youtube.com/embed/jl-SiwAbb_U",
    "catalogUrl": "/brochures/inverters-vfd-ac-drive_a800_fr-a800-pdf.pdf"
  },
  {
    "id": "inverters-vfd-ac-drive-c800",
    "name": "FR-C800 Compact VFD Inverter",
    "categorySlug": "inverters-vfd-ac-drive",
    "summary": "Energy-saving compact AC drive VFD for fans, pumps, and general purpose speed regulation in Pune.",
    "description": "The Mitsubishi Electric FR-C800 is an ultra-compact, cost-effective Variable Frequency Drive designed for energy-saving speed regulation. Ideal for general-purpose applications such as conveyor belts, industrial fans, water pumps, and mixing equipment, it features advanced flux vector control, high-efficiency motor tuning, and a user-friendly parameter dial for easy installation.",
    "features": [
      "Ultra-compact DIN rail mountable frame design",
      "Advanced flux vector control for reliable motor starting torque",
      "Energy-saving mode optimizer for fan and pump loads",
      "Built-in parameter setting dial for quick commissioning",
      "Integrated RS-485 Modbus communication interface"
    ],
    "specifications": {
      "Power Range": "0.1 kW to 7.5 kW capacity",
      "Voltage Class": "1-Phase 200V / 3-Phase 400V inputs",
      "Starting Torque": "150% torque at 1 Hz",
      "Communication": "Modbus RTU via RS-485 serial port",
      "Protection": "Overcurrent, overvoltage, and thermal protection"
    },
    "imageUrl": "/images/products/inverters-vfd-ac-drive_c800_image-png.png",
    "youtubeUrl": "https://www.youtube.com/embed/7NduPbE8ggk",
    "catalogUrl": "#"
  },
  {
    "id": "inverters-vfd-ac-drive-d800",
    "name": "FR-D700 / D800 Compact Smart VFD",
    "categorySlug": "inverters-vfd-ac-drive",
    "summary": "Micro VFD AC drive with high starting torque, safety stop function, and compact space-saving dimensions.",
    "description": "The Mitsubishi Electric FR-D700/D800 series is the standard micro-drive solution for factory machinery. Combining compact space-saving dimensions with high starting torque (150% at 1Hz), it is equipped with integrated STO safety stops, spring-clamp terminals for fast wiring, and automatic tuning capabilities, making it Pune's preferred micro inverter for textile and packaging machinery.",
    "features": [
      "Compact space-saving design with side-by-side mounting",
      "High starting torque of 150% at 1 Hz with auto tuning",
      "Integrated STO (Safe Torque Off) safety shutdown capability",
      "Spring-clamp terminals for vibration-resistant wiring",
      "Simple setup and monitoring with FR Configurator software"
    ],
    "specifications": {
      "Power Class": "0.1 kW to 15 kW capacities",
      "Voltage Options": "1-Phase 200V / 3-Phase 400V input grids",
      "Control Method": "General-purpose magnetic flux vector control",
      "Safety standard": "EN ISO 13849-1 Cat. 3 / PLd, IEC 60204-1",
      "Enclosure": "IP20 rating standard"
    },
    "imageUrl": "/images/products/inverters-vfd-ac-drive_d800_image-png.png",
    "youtubeUrl": "https://www.youtube.com/embed/jl-SiwAbb_U",
    "catalogUrl": "/brochures/inverters-vfd-ac-drive_d800_d800-pdf.pdf"
  },
  {
    "id": "inverters-vfd-ac-drive-e800",
    "name": "FR-E800 Compact Smart Ethernet VFD",
    "categorySlug": "inverters-vfd-ac-drive",
    "summary": "Smart compact Ethernet-enabled VFD drive featuring AI diagnostics and multi-protocol network communication.",
    "description": "The Mitsubishi Electric FR-E800 is a next-generation smart compact drive. It features built-in dual Ethernet ports that support multiple network protocols simultaneously (CC-Link IE TSN, Modbus/TCP, EtherNet/IP, PROFINET). Programmed and integrated by Millennium Control System Pune, it features AI-based predictive maintenance, identifying motor insulation faults and fan degradation before they cause failure.",
    "features": [
      "Built-in dual Ethernet ports for daisy-chained network topologies",
      "Multi-protocol fieldbus communication (TSN, EtherNet/IP, PROFINET)",
      "AI-driven diagnostic indicators for predictive maintenance",
      "Corrosive gas environment resistant conformal circuit board coating",
      "Integrated STO safety functions (Safe Torque Off)"
    ],
    "specifications": {
      "Power Range": "0.1 kW to 30 kW capacity",
      "Voltage Class": "3-Phase 400V / 1-Phase 200V",
      "Starting Torque": "200% torque at 0.5 Hz",
      "AI Diagnostics": "Predictive diagnostic engine for fan and capacitors",
      "Temp Window": "-20\u00b0C to +60\u00b0C operating window"
    },
    "imageUrl": "/images/products/inverters-vfd-ac-drive_e800_image-png.png",
    "youtubeUrl": "https://www.youtube.com/embed/jl-SiwAbb_U",
    "catalogUrl": "/brochures/inverters-vfd-ac-drive_e800_e800-pdf.pdf"
  },
  {
    "id": "low-voltage-circuit-breakers-series",
    "name": "Low-voltage Switchgears & Breakers",
    "categorySlug": "low-voltage-circuit-breakers",
    "summary": "Molded Case Circuit Breakers (MCCB) and Air Circuit Breakers (ACB) for factory electrical panels Pune.",
    "description": "Mitsubishi Electric low-voltage circuit breakers, including Molded Case Circuit Breakers (MCCB), Air Circuit Breakers (ACB), and magnetic contactors, are engineered for safe and reliable power distribution. Millennium Control System Pune integrates these switchgears into automation control panels, providing complete electrical short-circuit protection and overload safety compliance for industrial machines.",
    "features": [
      "Advanced arc extinguishing design for high breaking capacity",
      "Compact frame sizes to minimize electrical cabinet footprint",
      "Adjustable electronic trip units for precise overload parameters",
      "Wide range of accessories: auxiliary switches, shunt trips, motor operators",
      "Fully compliant with international standards IEC 60947-2"
    ],
    "specifications": {
      "Breaker Types": "Molded Case Circuit Breaker (MCCB) / Air Circuit Breaker (ACB)",
      "Current Rating": "10A to 6300A current ranges",
      "Breaking Capacity": "Up to 100kA breaking capacities",
      "Tripping Unit": "Thermal-magnetic or Electronic trip units",
      "Standards": "IEC, JIS, EN compliance"
    },
    "imageUrl": "/images/products/low-voltage-circuit-breakers_image-png.png",
    "youtubeUrl": "https://www.youtube.com/embed/iMCk2mJAq14",
    "catalogUrl": "#"
  },
  {
    "id": "melsec-fx3u-series-series",
    "name": "MELSEC FX3U Series PLC",
    "categorySlug": "melsec-fx3u-series",
    "summary": "High-speed classic modular PLC supporting up to 384 I/O points and independent 3-axis simple positioning control Pune.",
    "description": "The Mitsubishi Electric MELSEC FX3U is a high-speed, classic expandable PLC. Featuring a basic instruction processing speed of 0.065 \u00b5s, it supports up to 384 inputs and outputs through modular expansion blocks. Preferred by Pune machinery manufacturers for packaging, textile, and SPM automation, it features built-in high-speed counters and independent 3-axis pulse output positioning.",
    "features": [
      "High speed processing of 0.065 \u00b5s per basic instruction",
      "Expandable from 16 to 384 total inputs/outputs",
      "Large memory capability of 64,000 steps program capacity",
      "Independent 3-axis positioning pulse output trains (100 kHz)",
      "Dual system-bus architecture for communication & analog modules"
    ],
    "specifications": {
      "Instruction Speed": "0.065 \u00b5s / basic instruction",
      "Memory": "64,000 Steps RAM Memory built-in",
      "Max I/O Points": "384 I/O points expansion",
      "Positioning Control": "Built-in 3 axes simple positioning",
      "Software": "GX Works2 / GX Developer compatible"
    },
    "imageUrl": "/images/products/melsec-fx3u-series_cc-link_media_image1.png",
    "youtubeUrl": "https://www.youtube.com/embed/iMCk2mJAq14",
    "catalogUrl": "/brochures/melsec-fx3u-series_fx3u-catalogue-pdf.pdf"
  },
  {
    "id": "melsec-fx5u-series-series",
    "name": "MELSEC FX5U Series PLC",
    "categorySlug": "melsec-fx5u-series",
    "summary": "Next-generation iQ-F series micro PLC with integrated analog inputs/outputs, Ethernet port, and TSN motion control.",
    "description": "The Mitsubishi Electric iQ-F series MELSEC FX5U is a next-generation micro PLC. It features high-speed processing (0.034 \u00b5s/instruction), built-in Ethernet, analog controls, and multi-axis positioning. Millennium Control System Pune integrates the FX5U for smart factories, leveraging its integrated analog channels and Ethernet interface to connect seamlessly to SCADA dashboards and local factory networks.",
    "features": [
      "High speed processing of 0.034 \u00b5s per basic instruction",
      "Built-in 2-channel analog inputs and 1-channel analog output",
      "Built-in Ethernet port and RS-485 serial communication port",
      "SD card slot for simple program loading and CSV data logging",
      "Supports up to 4-axis positioning control (200 kHz pulse trains)"
    ],
    "specifications": {
      "Instruction Speed": "0.034 \u00b5s / basic instruction",
      "Memory capacity": "64,000 Steps logic program capacity",
      "Integrated I/O": "32 points local (expandable to 512)",
      "Analog Control": "Built-in (2 inputs / 1 output)",
      "Network Links": "Ethernet, RS-485 serial communication"
    },
    "imageUrl": "/images/products/melsec-fx5u-series_analog-control-module_media_image1.png",
    "youtubeUrl": "https://www.youtube.com/embed/iMCk2mJAq14",
    "catalogUrl": "/brochures/melsec-fx5u-series_catalogue-pdf.pdf"
  },
  {
    "id": "melsec-q-series-series",
    "name": "MELSEC Q Series Modular PLC",
    "categorySlug": "melsec-q-series",
    "summary": "High-performance modular PLC platform supporting multi-CPU configurations for Pune manufacturing lines.",
    "description": "The MELSEC Q Series modular controller is a multi-discipline automation platform. It supports multi-CPU architectures, allowing PLC, Motion, Robot, and CNC modules to reside on a single base rack. Often integrated by Millennium Control System Pune for automobile body shops and large process water treatment utilities, the Q Series provides high-speed backplane routing and hot-swappable modules.",
    "features": [
      "Multi-CPU architecture (up to 4 CPUs on a single rack base)",
      "Ultra-high speed backplane bus and high-density I/O routing",
      "Hot-swapping capability of modules without shutting down systems",
      "Seamless connection to CC-Link IE high-speed industrial networks",
      "Redundant CPU option for mission-critical uninterrupted automation"
    ],
    "specifications": {
      "Instruction Speed": "9.5 ns / basic instruction",
      "Program Capacity": "Up to 1,000,000 steps memory capacity",
      "Max Local I/O": "4,096 I/O points local capacity",
      "Multi-CPU Support": "Up to 4 CPUs (PLC, Motion, CNC, Robot)",
      "Network Links": "CC-Link, CC-Link IE TSN, Ethernet, Profibus"
    },
    "imageUrl": "/images/products/melsec-q-series_cpu-unit-png.png",
    "youtubeUrl": "https://www.youtube.com/embed/iMCk2mJAq14",
    "catalogUrl": "/brochures/melsec-q-series_catalogue-pdf.pdf"
  },
  {
    "id": "melservo-ac-servo-melservo-j4",
    "name": "MELSERVO-J4 AC Servo System",
    "categorySlug": "melservo-ac-servo",
    "summary": "High-performance AC Servo motor and amplifier drive with 22-bit absolute encoders and vibration control in Pune.",
    "description": "The Mitsubishi Electric MELSERVO-J4 series represents a premium AC Servo drive. Equipped with high-resolution 22-bit absolute encoders (4,194,304 pulses/rev) and advanced one-touch real-time auto-tuning, it minimizes cycle times. Millennium Control System Pune integrates J4 servos in rotary fillers, packaging machines, and precision printing presses for absolute position synchronization.",
    "features": [
      "Industry leading speed frequency response of 2.5 kHz",
      "22-bit high-resolution absolute encoders built-in",
      "Advanced one-touch real-time auto tuning for complex mechanical loads",
      "Built-in machine resonance suppression filters and vibration control",
      "Fully compatible with SSCNET III/H high-speed fiber optic network"
    ],
    "specifications": {
      "Amplifier Type": "MR-J4 Series drives",
      "Encoder Resolution": "22-bit absolute (4,194,304 pulses/rev)",
      "Velocity Response": "2.5 kHz frequency response",
      "Safety Standard": "STO (Safe Torque Off) SIL2 standard",
      "Network Link": "SSCNET III/H fiber optic link"
    },
    "imageUrl": "/images/products/melservo-ac-servo_melservo-j4_product-image-png.png",
    "youtubeUrl": "https://www.youtube.com/embed/iMCk2mJAq14",
    "catalogUrl": "/brochures/melservo-ac-servo_melservo-j4_catalogue-pdf.pdf"
  },
  {
    "id": "melservo-ac-servo-melservo-j5",
    "name": "MELSERVO-J5 AC Servo System",
    "categorySlug": "melservo-ac-servo",
    "summary": "Next-generation AC Servo drive supporting CC-Link IE TSN, 3.5 kHz response rate, and predictive AI maintenance.",
    "description": "The Mitsubishi Electric MELSERVO-J5 is a next-generation high-end AC Servo system. Supporting the ultra-fast CC-Link IE TSN ethernet network, it boasts a speed response rate of 3.5 kHz. Backed by predictive AI diagnostic algorithms, it detects mechanical degradation before failure. Millennium Control System Pune integrates J5 drives for multi-axis coordinated motion systems.",
    "features": [
      "Next-generation velocity response of 3.5 kHz frequency",
      "26-bit high-resolution absolute encoders (67,108,864 pulses/rev)",
      "CC-Link IE TSN fieldbus compatibility for sub-millisecond sync",
      "AI-based mechanical predictive diagnostics for drive & machine",
      "Multi-axis amplifier modules (1-axis, 2-axis, and 3-axis versions)"
    ],
    "specifications": {
      "Amplifier Type": "MR-J5 Series TSN drives",
      "Encoder Resolution": "26-bit absolute resolution",
      "Velocity Response": "3.5 kHz frequency response",
      "Safety Rating": "STO / SS1 / SLS functional safety SIL3",
      "Network Link": "CC-Link IE TSN / Ethernet TSN"
    },
    "imageUrl": "/images/products/melservo-ac-servo_melservo-ac-servo-png.png",
    "youtubeUrl": "https://www.youtube.com/embed/iMCk2mJAq14",
    "catalogUrl": "/brochures/melservo-ac-servo_melservo-j5_catalogue-pdf.pdf"
  },
  {
    "id": "melservo-ac-servo-melservo-je",
    "name": "MELSERVO-JE AC Servo System",
    "categorySlug": "melservo-ac-servo",
    "summary": "Reliable and easy-to-use AC Servo drive with absolute encoders and pulse/analog control interfaces Pune.",
    "description": "The Mitsubishi Electric MELSERVO-JE series is a reliable, cost-effective AC Servo system. Equipped with a 17-bit absolute encoder (131,072 pulses/rev) and advanced vibration suppression, it provides smooth motor operation. millennium Control System Pune integrates the JE series in standard material handlers, pick-and-place robots, and cut-to-length systems.",
    "features": [
      "Reliable speed frequency response of 2.0 kHz",
      "17-bit absolute encoder interface built-in",
      "Advanced one-touch tuning dial for simple load adaptation",
      "Built-in machine vibration suppression control algorithm",
      "Supports Pulse Train control and Analog speed/torque control"
    ],
    "specifications": {
      "Amplifier Type": "MR-JE Series drives",
      "Encoder Resolution": "17-bit absolute resolution",
      "Velocity Response": "2.0 kHz response frequency",
      "Control Type": "Pulse Train / Analog input control",
      "Voltage Options": "3-Phase 200V / 1-Phase 200V inputs"
    },
    "imageUrl": "/images/products/melservo-ac-servo_melservo-je_lineup_media_image1.png",
    "youtubeUrl": "https://www.youtube.com/embed/iMCk2mJAq14",
    "catalogUrl": "/brochures/melservo-ac-servo_melservo-je_catalogue-pdf.pdf"
  },
  {
    "id": "melservo-ac-servo-melservo-jet",
    "name": "MELSERVO-JET AC Servo System",
    "categorySlug": "melservo-ac-servo",
    "summary": "Ultra-fast response AC Servo drive supporting CC-Link IE TSN and high resolution absolute encoders.",
    "description": "The Mitsubishi Electric MELSERVO-JET AC Servo series delivers outstanding velocity response and precision control. Operating on the high-speed CC-Link IE TSN network, it supports multi-axis synchronization for packaging and electronic assembly lines. Configured and tuned in Pune by Millennium Control System, it features a one-touch tuning algorithm to match machinery loads in minutes.",
    "features": [
      "High speed frequency response rate of 2.5 kHz",
      "High resolution 22-bit absolute encoders built-in",
      "CC-Link IE TSN high speed network communication",
      "One-touch real-time tuning simplifies load matching",
      "Integrated machine resonance filter suppression"
    ],
    "specifications": {
      "Amplifier Type": "MR-JET Series TSN drives",
      "Speed Frequency": "2.5 kHz response rate",
      "Encoder Feedback": "22-bit absolute resolution",
      "Safety Standards": "STO (Safe Torque Off) SIL3",
      "Network Interface": "CC-Link IE TSN / Pulse Train"
    },
    "imageUrl": "/images/products/melservo-ac-servo_melservo-jet_products_media_image1.png",
    "youtubeUrl": "https://www.youtube.com/embed/iMCk2mJAq14",
    "catalogUrl": "/brochures/melservo-ac-servo_melservo-jet_catalogue-pdf.pdf"
  },
  {
    "id": "motion-unit-series",
    "name": "Multi-Axis Motion Controller CPU",
    "categorySlug": "motion-unit",
    "summary": "Dedicated motion controller CPU supporting up to 96 axes of synchronized tracking and electronic cams.",
    "description": "The Mitsubishi Electric Multi-Axis Motion CPU is designed to sit alongside the MELSEC PLC CPU on the system rack. Offloading complex mathematical tracking logic from the main PLC, it coordinates up to 96 servo axes in real-time. Configured in Pune by Millennium Control System, it features electronic cam curves, virtual axes, and advanced positioning profiles for packaging machines.",
    "features": [
      "Synchronized control of up to 96 servo axes",
      "Advanced electronic cam, gear, and differential gear configurations",
      "Pre-loaded software libraries for winding, flying shears, and rotary cutters",
      "Runs on high-speed fiber-optic SSCNET III/H network standard",
      "Synchronous program simulation tools within MT Developer2"
    ],
    "specifications": {
      "Max Axis Sync": "96 axes synchrony",
      "Communication Link": "SSCNET III/H / CC-Link IE TSN",
      "Control Cycle": "0.22 ms (for 16 axes)",
      "Programming": "Structured text, SFC, and ladder diagrams",
      "Module Form": "MELSEC Q / iQ-R series rack compatible"
    },
    "imageUrl": "/images/products/motion-unit_features_media_image1.png",
    "youtubeUrl": "https://www.youtube.com/embed/iMCk2mJAq14",
    "catalogUrl": "/brochures/motion-unit_catalogue-pdf.pdf"
  },
  {
    "id": "software-series",
    "name": "MELSOFT Industrial Software",
    "categorySlug": "software",
    "summary": "MELSOFT engineering software suite (GX Works3, GT Works3, MT Developer2) for PLC, HMI, and motion design.",
    "description": "The Mitsubishi Electric MELSOFT software suite provides the essential tools for factory automation design, programming, and diagnostics. It includes GX Works3 for PLC programming, GT Works3 for HMI screens, and MT Developer2 for motion systems. Millennium Control System Pune provides authorized licenses, software commissioning, training, and troubleshooting support for Maharashtra industries.",
    "features": [
      "GX Works3: High-efficiency ladder, structured text, and SFC PLC editor",
      "GT Works3: WYSIWYG screen designer for GOT2000 HMI interfaces",
      "MT Developer2: Coordinated multi-axis motion planning and cam design",
      "Built-in simulation tools for logic testing without hardware",
      "Dynamic diagnostics and trace monitoring for troubleshooting"
    ],
    "specifications": {
      "Software Suite": "MELSOFT Suite (GX3, GT3, MT2)",
      "OS Compatibility": "Windows 10 / Windows 11",
      "Languages": "Structured Text, Ladder, Function Block, SFC",
      "Simulation": "Off-line PLC / HMI simulation engine",
      "License Options": "Single User / Multi-User Network licenses"
    },
    "imageUrl": "/images/products/software_software_media_image1.png",
    "youtubeUrl": "https://www.youtube.com/embed/iMCk2mJAq14",
    "catalogUrl": "#"
>>>>>>> 62f6dfa92f9f3ccf87b34b788d1351a315fb0636
  }
];
