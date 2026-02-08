// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bio",
          title: "bio",
          description: "In learning you will teach, and in teaching you will learn.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-posts",
          title: "posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "A collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-neural-style-transfer-deep-learning-notes-c4w4",
        
          title: "Neural Style Transfer (Deep Learning Notes C4W4)",
        
        description: "generation of an image that blends the content from one image and the style of the other",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/deep-C4W4-NST/";
          
        },
      },{id: "post-face-recognition-deep-learning-notes-c4w4",
        
          title: "Face Recognition (Deep Learning Notes C4W4)",
        
        description: "training a Siamese network for face recognition tasks with a triplet loss function",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/deep-C4W4-face-recognition/";
          
        },
      },{id: "post-image-semantic-segmentation-deep-learning-notes-c4w3",
        
          title: "Image Semantic Segmentation (Deep Learning Notes C4W3)",
        
        description: "labelling and colouring the pixels of an image into a set of predefined classes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/deep-C4W3-segmentation/";
          
        },
      },{id: "post-object-detection-deep-learning-notes-c4w3",
        
          title: "Object Detection (Deep Learning Notes C4W3)",
        
        description: "object detection and the YOLO algorithm",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/deep-C4W3-object-detection/";
          
        },
      },{id: "post-training-deeper-cnns-deep-learning-notes-c4w2",
        
          title: "Training Deeper CNNs (Deep Learning Notes C4W2)",
        
        description: "residual networks (ResNets), depthwise separable convolutions and further advices",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/deep-C4W2-deeper-CNN/";
          
        },
      },{id: "post-圆周率是无理数的最短证明",
        
          title: "圆周率是无理数的最短证明",
        
        description: "大半页纸就证明完了圆周率是无理数，就说秀不秀？",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/why-pi-is-irrational/";
          
        },
      },{id: "post-潮汐力与洛希极限",
        
          title: "潮汐力与洛希极限",
        
        description: "蹭个流浪地球的热度，聊一聊电影里提到的洛希极限",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tidal-forces/";
          
        },
      },{id: "post-霍尔效应-hall-effect",
        
          title: "霍尔效应 Hall Effect",
        
        description: "A-Level 物理中不少熊孩纸学不明白的霍尔效应，一篇文章讲个通透",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/hall-effect/";
          
        },
      },{id: "post-sir-传染病模型",
        
          title: "SIR 传染病模型",
        
        description: "用数学模型来探究传染病在人群中的传播规律",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/SIR-model/";
          
        },
      },{id: "post-无人机轨迹规划",
        
          title: "无人机轨迹规划",
        
        description: "飞行器的轨迹规划问题，依然是自娱自乐学习 Coursera 公开课的流水报告",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/traj-planning/";
          
        },
      },{id: "post-lotka-volterra-猎食者-猎物模型",
        
          title: "Lotka-Volterra 猎食者-猎物模型",
        
        description: "数学模型的视角来理解生态系统中的两个物种的数量变化规律",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/lotka-volterra/";
          
        },
      },{id: "post-二维-pd-控制器",
        
          title: "二维 PD 控制器",
        
        description: "来自 Coursera 的一门关于飞行器基础理论和应用的公开课笔记",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/2D-PD-controller/";
          
        },
      },{id: "post-一维-pd-控制器",
        
          title: "一维 PD 控制器",
        
        description: "来自 Coursera 的一门关于飞行器基础理论和应用的公开课笔记",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/1D-PD-controller/";
          
        },
      },{id: "post-分析力学读书笔记-bertrand-定理",
        
          title: "分析力学读书笔记：Bertrand 定理",
        
        description: "why does the gravitational force obey inverse square law?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/bertrand-theorem/";
          
        },
      },{id: "post-从勾股数到费马大定理",
        
          title: "从勾股数到费马大定理",
        
        description: "受西蒙·辛格的数学科普《费马大定理》启发，写写费马大定理的故事，然后写写 $$n=4$$ 和 $$n=3$$ 时费马大定理的证明",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/fermat-last-theorem/";
          
        },
      },{id: "post-lorentz-变换的推导以及钟慢效应-尺缩效应-速度叠加公式",
        
          title: "Lorentz 变换的推导以及钟慢效应、尺缩效应、速度叠加公式",
        
        description: "从第一性原理推导狭义相对论的 Lorentz Transformation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/lorentz-transfrom/";
          
        },
      },{id: "post-从最速降曲线谈起-浅谈变分大法",
        
          title: "从最速降曲线谈起：浅谈变分大法",
        
        description: "a minimal introduction to the variational principle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/variational-principle/";
          
        },
      },{id: "post-受迫阻尼振动与共振",
        
          title: "受迫阻尼振动与共振",
        
        description: "如果一个简谐振子同时受到阻力和一个周期性的驱动力的作用，那么它会做怎样的运动？",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/resonance/";
          
        },
      },{id: "post-无阻尼受迫振动-振幅-相位及共振",
        
          title: "无阻尼受迫振动：振幅、相位及共振",
        
        description: "我们讨论一个简谐振子在一个周期性的外加驱动力影响下，受迫振动行为会有如何的响应",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/forced-oscillation/";
          
        },
      },{id: "post-简谐振动之阻尼振动",
        
          title: "简谐振动之阻尼振动",
        
        description: "数学上推导欠阻尼、过阻尼和临界阻尼的判据和运动方程",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/damped-oscillator/";
          
        },
      },{id: "post-简谐振动之运动方程推导",
        
          title: "简谐振动之运动方程推导",
        
        description: "从简谐振动的定义出发，用两种方法推导简谐振子的位移-时间关系式",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/simple-harmonics/";
          
        },
      },{id: "books-on-gravity",
          title: 'On Gravity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_on_gravity/";
            },},{id: "books-we-have-no-idea",
          title: 'We Have No Idea',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_no_idea/";
            },},{id: "books-mathematics-a-very-short-introduction",
          title: 'Mathematics: A Very Short Introduction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_vsi_mathematics/";
            },},{id: "books-applied-mathematics-a-very-short-introduction",
          title: 'Applied Mathematics: A Very Short Introduction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_vsi_applied_maths/";
            },},{id: "books-接触-contact",
          title: '接触 Contact',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_contact/";
            },},{id: "books-量子怪才-保罗-狄拉克传",
          title: '量子怪才：保罗·狄拉克传',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_dirac/";
            },},{id: "books-杨振宁传-规范与对称之美",
          title: '杨振宁传：规范与对称之美',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_yang/";
            },},{id: "books-所罗门王的指环",
          title: '所罗门王的指环',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_solomon/";
            },},{id: "books-随椋鸟飞行",
          title: '随椋鸟飞行',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_parisi/";
            },},{id: "books-数学大师-men-of-mathematics",
          title: '数学大师 Men of Mathematics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_men_of_mathematics/";
            },},{id: "books-feynman-39-s-lost-lectures",
          title: 'Feynman&amp;#39;s Lost Lectures',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_lost_lectures/";
            },},{id: "books-解码者-the-code-breaker",
          title: '解码者 The Code Breaker',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_code_breaker/";
            },},{id: "books-地磁简史",
          title: '地磁简史',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_spinning_magnet/";
            },},{id: "books-上帝粒子-the-god-particle",
          title: '上帝粒子（The God Particle）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_god_particle/";
            },},{id: "books-双螺旋-the-double-helix",
          title: '双螺旋 The Double Helix',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2025_double_helix/";
            },},{id: "books-hands-on-machine-learning-volume-1",
          title: 'Hands-On Machine Learning (Volume 1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2025_hands_on_ml/";
            },},{id: "books-an-immense-world",
          title: 'An Immense World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2025_immense_world/";
            },},{id: "books-step-mat-tmua-skills-for-success-in-university-admissions-tests-for-mathematics",
          title: 'STEP, MAT, TMUA: Skills for Success in University Admissions Tests for Mathematics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2025_step_mat_tmua/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-a2-physics-notes",
          title: 'A2 Physics Notes',
          description: "lecture notes on A-Level physics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/a2physics_notes/";
            },},{id: "projects-as-physics-notes",
          title: 'AS Physics Notes',
          description: "lecture notes on AS-Level physics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/asphysics_notes/";
            },},{id: "projects-sir-modelling",
          title: 'SIR Modelling',
          description: "a short course on the mathematical modelling of epidemics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/epidemic-modelling/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yuhao-yang-cy", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yuhao-yang-cy", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zhihu.com/people/phycolin", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
