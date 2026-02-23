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
            window.location.href = "/bio/";
          },
        },{id: "nav-posts",
          title: "posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A collection of my teaching resources and cool projects.",
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
        },{id: "nav-logs",
          title: "logs",
          description: "Yearly records of all sorts of my insignificant activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
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
      },{id: "post-cie-a2-physics-paper-5-实验设计-范文-8",
        
          title: "CIE A2 Physics Paper 5 实验设计 + 范文×8",
        
        description: "介绍下 CIE A-Level 物理 Paper 5 实验技能卷中 Question 1 关于实验方案设计（Planning）题的考察内容和答题策略",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/a2phy-planning/";
          
        },
      },{id: "post-cie-as-物理实验技能考试套路一波流",
        
          title: "CIE AS 物理实验技能考试套路一波流",
        
        description: "这文章已经是炒了快10年的冷饭了，每两三年添油加醋补一点，保证不过保质期，好歹还能端上桌来，接着喂给各位有需要的同学",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/asphy-practicals/";
          
        },
      },{id: "post-跨国旅游-乘坐引力快车-去哪里都仅需42分钟",
        
          title: "跨国旅游？乘坐引力快车，去哪里都仅需42分钟！",
        
        description: "一个有趣的结论：设想有一条穿过地球内部的超级隧道，那么在地心引力的作用下，单程仅需要大约42分钟就可以直通地球上的任何地方",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/gravitational-express/";
          
        },
      },{id: "post-论如何利用概率论科学地谈恋爱",
        
          title: "论如何利用概率论科学地谈恋爱",
        
        description: "简单粗暴的数学模型，确定最大概率找到此生真爱的那一位的最优策略",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/fiancee-problem/";
          
        },
      },{id: "post-线性代数读书笔记-可逆矩阵定理大串烧",
        
          title: "线性代数读书笔记：可逆矩阵定理大串烧",
        
        description: "那些年我大约是没太整明白的问题之——判定一个矩阵是否可逆的一大长串等价命题",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/inverse-matrix-theorem/";
          
        },
      },{id: "post-线性代数读书笔记-为什么可逆矩阵必须是方阵",
        
          title: "线性代数读书笔记：为什么可逆矩阵必须是方阵？",
        
        description: "那些年我大约是没太整明白的问题之——为什么可逆矩阵必须是方阵？",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/square-matrix/";
          
        },
      },{id: "post-浅说-newton-raphson-方法-从一道-step-ii-2023-的真题说起",
        
          title: "浅说 Newton-Raphson 方法——从一道 STEP II 2023 的真题说起",
        
        description: "启发于 STEP II 2023 的卷子中出现的一个设计非常惊艳的大题，来水一点 Newton-Raphson 方法的科普",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/newton-raphson/";
          
        },
      },{id: "post-2021-step-ii-q8-e-的近似分数值",
        
          title: "2021 STEP II Q8 —— e 的近似分数值",
        
        description: "本篇介绍一种巧妙地利用积分构造的递推关系，找到数学常数 $\mathrm{e}$ 的分式近似表达式的方法",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/STEP2-2021-Q8/";
          
        },
      },{id: "post-圆周率是无理数的最短证明",
        
          title: "圆周率是无理数的最短证明",
        
        description: "大半页纸就证明完了圆周率是无理数，就说秀不秀？",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/why-pi-is-irrational/";
          
        },
      },{id: "post-霍尔效应-hall-effect",
        
          title: "霍尔效应 Hall Effect",
        
        description: "A-Level 物理中不少熊孩纸学不明白的霍尔效应，一篇文章讲个通透",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/hall-effect/";
          
        },
      },{id: "post-潮汐力与洛希极限",
        
          title: "潮汐力与洛希极限",
        
        description: "蹭个流浪地球的热度，聊一聊电影里提到的洛希极限",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tidal-forces/";
          
        },
      },{id: "post-1997-step-i-q6-π-的近似分数值",
        
          title: "1997 STEP I Q6 —— π 的近似分数值",
        
        description: "一个很有意思的关于圆周率 $\pi$ 的近似有理分式表达式的结果",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/STEP1-1997-Q6/";
          
        },
      },{id: "post-单变量线性回归模型",
        
          title: "单变量线性回归模型",
        
        description: "一篇写给小小白们的线性回归入门教程",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/linear-regression/";
          
        },
      },{id: "post-二维-haar-变换在图像处理中的应用",
        
          title: "二维 Haar 变换在图像处理中的应用",
        
        description: "本篇中，我们要解决这样一个问题：如果图像传输过程中出现部分数据丢失，仅利用剩余的部分数据是否能尽可能保证图像的还原度？",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/haar-basis/";
          
        },
      },{id: "post-为什么病毒倾向于往传播力更强-致死率更低的趋势变异",
        
          title: "为什么病毒倾向于往传播力更强、致死率更低的趋势变异？",
        
        description: "用数学模型来探究病毒变异的大体方向",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/virus-mutation/";
          
        },
      },{id: "post-论封控政策的可行性-一个奥米克戎的传播模型模拟",
        
          title: "论封控政策的可行性——一个奥米克戎的传播模型模拟",
        
        description: "封控在家闭门造车瞎捣鼓的疫情模型",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/seqir-model/";
          
        },
      },{id: "post-sir-传染病模型",
        
          title: "SIR 传染病模型",
        
        description: "用数学模型来探究传染病在人群中的传播规律",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/SIR-model/";
          
        },
      },{id: "post-并联电池的等效电动势",
        
          title: "并联电池的等效电动势",
        
        description: "一堆并联的电池的等效电动势和等效内阻会是什么样子的？",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/parallel-cells/";
          
        },
      },{id: "post-理想气体的绝热方程",
        
          title: "理想气体的绝热方程",
        
        description: "在 A-Level 物理知识基础上推导理想气体在绝热过程中符合的状态方程",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/adiabatic-process/";
          
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
      },{id: "post-反应动力学-连续两个一级反应的产物生成率",
        
          title: "反应动力学——连续两个一级反应的产物生成率",
        
        description: "这次没有披着物理的外皮来写数学了，我这次披了个化学的外衣……",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/consecutive-reactions/";
          
        },
      },{id: "post-分析力学读书笔记-bertrand-定理",
        
          title: "分析力学读书笔记：Bertrand 定理",
        
        description: "why does the gravitational force obey inverse square law?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/bertrand-theorem/";
          
        },
      },{id: "post-分析力学读书笔记-限制性三体问题及拉格朗日点",
        
          title: "分析力学读书笔记：限制性三体问题及拉格朗日点",
        
        description: "简化版的限制性三体问题的6000字长文笔记",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/three-body-problem/";
          
        },
      },{id: "post-分析力学读书笔记-阻尼振子的-lagrangian",
        
          title: "分析力学读书笔记：阻尼振子的 Lagrangian",
        
        description: "受 Herbert Goldstein 的经典力学第2章的一个习题的启发，对阻尼振动奇怪的理解又增加了",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/damped-oscillator-lagrangian/";
          
        },
      },{id: "post-2020-step-ii-q2-夹逼思想画隐函数图像",
        
          title: "2020 STEP II Q2 —— 夹逼思想画隐函数图像",
        
        description: "一种利用夹逼的思想来画复杂隐函数图像的精彩问题",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/STEP2-2020-Q2/";
          
        },
      },{id: "post-2020-step-ii-q12-巧用概率证明代数不等式",
        
          title: "2020 STEP II Q12 —— 巧用概率证明代数不等式",
        
        description: "本篇的问题提供了一种巧用概率论来证明一个代数不等式的思路",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/STEP2-2020-Q12/";
          
        },
      },{id: "post-从勾股数到费马大定理",
        
          title: "从勾股数到费马大定理",
        
        description: "受西蒙·辛格的数学科普《费马大定理》启发，写写费马大定理的故事，然后写写 $$n=4$$ 和 $$n=3$$ 时费马大定理的证明",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/fermat-last-theorem/";
          
        },
      },{id: "post-2015-step-ii-q1-全体自然数的倒数和-倒数平方和",
        
          title: "2015 STEP II Q1 —— 全体自然数的倒数和、倒数平方和",
        
        description: "本篇通过放缩法证明两个大家熟悉的结论：1、全体自然数的倒数和发散；2、全体自然数的倒数平方和收敛",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/STEP2-2015-Q1/";
          
        },
      },{id: "post-续浅谈变分原理-运动常数-拉格朗日乘子法",
        
          title: "续浅谈变分原理：运动常数、拉格朗日乘子法",
        
        description: "further discussions on constant of motion and Lagrangian multipliers",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/variational-principle-continued/";
          
        },
      },{id: "post-lorentz-变换的推导以及钟慢效应-尺缩效应-速度叠加公式",
        
          title: "Lorentz 变换的推导以及钟慢效应、尺缩效应、速度叠加公式",
        
        description: "从第一性原理推导狭义相对论的 Lorentz Transformation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/lorentz-transfrom/";
          
        },
      },{id: "post-平方反比律推导开普勒三定律",
        
          title: "平方反比律推导开普勒三定律",
        
        description: "从引力的平方反比律来推导行星椭圆轨道定律",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/keplers-laws/";
          
        },
      },{id: "post-极坐标下的牛顿定律",
        
          title: "极坐标下的牛顿定律",
        
        description: "从引力的平方反比律来推导行星椭圆轨道的预备工作",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/polar-coordinates/";
          
        },
      },{id: "post-2002-step-ii-q3-质数有无穷多个的一种证明",
        
          title: "2002 STEP II Q3 —— 质数有无穷多个的一种证明",
        
        description: "本篇介绍一种利用费马数（Fermat number）来证明质数有无穷多个的巧妙构思",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/STEP2-2002-Q3/";
          
        },
      },{id: "post-1999-step-ii-q8-两个正弦函数级数的近似公式的推导",
        
          title: "1999 STEP II Q8 —— 两个正弦函数级数的近似公式的推导",
        
        description: "曾经在算一个啥啥温度场下面的散射过程里有用上过，没想到在整理 STEP 考题时见到了这个级数的推导证明",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/STEP2-1999-Q8/";
          
        },
      },{id: "post-分析力学读书笔记-对称性与守恒律",
        
          title: "分析力学读书笔记：对称性与守恒律",
        
        description: "来自 Tom Kibble 经典力学教材的摘抄：利用 Hamiltonian Formalism 巧妙揭示对称性和守恒量之间的深刻关联",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/conservation-laws/";
          
        },
      },{id: "post-两体弹性碰撞问题-暴算与讨论",
        
          title: "两体弹性碰撞问题：暴算与讨论",
        
        description: "不作质心系的变换硬算两体碰撞后的角度偏转和动能传递问题",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/2D-collision/";
          
        },
      },{id: "post-从最速降曲线谈起-浅谈变分大法",
        
          title: "从最速降曲线谈起：浅谈变分大法",
        
        description: "a minimal introduction to the variational principle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/variational-principle/";
          
        },
      },{id: "post-单摆周期的公式推导",
        
          title: "单摆周期的公式推导",
        
        description: "单摆周期的积分表达式及逐级近似计算",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/simple-pendulum/";
          
        },
      },{id: "post-2019-step-ii-q11-挑棍子游戏拼出三角形的概率问题",
        
          title: "2019 STEP II Q11 —— 挑棍子游戏拼出三角形的概率问题",
        
        description: "一个趣味游戏引出的概率问题",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/STEP2-2019-Q11/";
          
        },
      },{id: "post-2017-step-i-q8-2-的有理分式近似",
        
          title: "2017 STEP I Q8 —— √2 的有理分式近似",
        
        description: "通过递推来构造一个数列，逼近 $\sqrt{2}$ 的近似值。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/STEP1-2017-Q8/";
          
        },
      },{id: "post-2012-step-iii-q11-a-gt-g-的自由下落运动",
        
          title: "2012 STEP III Q11 —— $a&gt;g$ 的自由下落运动",
        
        description: "一个神奇的模型：当一个物体栓在一根绳子的尾端作自由下落运动时，其加速度可以大于重力加速度 $a&gt;g$",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/STEP3-2012-Q11/";
          
        },
      },{id: "post-2018-step-iii-q7-全体自然数的倒数平方和",
        
          title: "2018 STEP III Q7 —— 全体自然数的倒数平方和",
        
        description: "构造的夹逼不等式证明巴塞尔问题的巧妙思路",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/STEP3-2018-Q7/";
          
        },
      },{id: "post-2018-step-ii-q2-利用凹函数性质证明三角不等式",
        
          title: "2018 STEP II Q2 —— 利用凹函数性质证明三角不等式",
        
        description: "一种求解三角形三个内角的正弦和与正弦积的极值问题的巧妙方法",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/STEP2-2018-Q2/";
          
        },
      },{id: "post-riemann-sum-求和法蛮力推导积分基本公式",
        
          title: "Riemann Sum 求和法蛮力推导积分基本公式",
        
        description: "通过求一系列矩形的面积和，来估计某个函数曲线下的面积，然后考虑无穷分割的极限，证明几个简单初等函数的定积分结果",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/riemann-sum/";
          
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
      },{id: "books-人体简史",
          title: '人体简史',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2020_the_body/";
            },},{id: "books-大灭绝时代",
          title: '大灭绝时代',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2020_sixth_extinction/";
            },},{id: "books-时间的秩序",
          title: '时间的秩序',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2020_order_of_time/";
            },},{id: "books-费马大定理",
          title: '费马大定理',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2020_fermat_last_theorem/";
            },},{id: "books-码书-编码与解码的战争",
          title: '码书：编码与解码的战争',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2020_code_book/";
            },},{id: "books-物理世界的数学奇迹",
          title: '物理世界的数学奇迹',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2020_universe_in_numbers/";
            },},{id: "books-深度学习的数学",
          title: '深度学习的数学',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2020_deep_learning_maths/";
            },},{id: "books-复杂",
          title: '复杂',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2020_complexity/";
            },},{id: "books-坏血-一个硅谷巨头的秘密与谎言",
          title: '坏血 : 一个硅谷巨头的秘密与谎言',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2020_bad_blood/";
            },},{id: "books-永恒的终结",
          title: '永恒的终结',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2020_end_of_eternity/";
            },},{id: "books-上帝掷骰子吗-量子物理史话",
          title: '上帝掷骰子吗？：量子物理史话',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2021_does_god_play_dice/";
            },},{id: "books-月背征途",
          title: '月背征途',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2021_moon_project/";
            },},{id: "books-小岛经济学-鱼-美元和经济的故事",
          title: '小岛经济学：鱼、美元和经济的故事',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2021_island_economy/";
            },},{id: "books-目光",
          title: '目光',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2021_muguang/";
            },},{id: "books-我的几何人生-丘成桐自传",
          title: '我的几何人生：丘成桐自传',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2021_yau_bio/";
            },},{id: "books-科学的历程",
          title: '科学的历程',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2021_journey_of_science/";
            },},{id: "books-地球的故事",
          title: '地球的故事',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2021_story_of_earth/";
            },},{id: "books-恩里科-费米传-原子时代的诞生",
          title: '恩里科·费米传：原子时代的诞生',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2022_pope_fermi/";
            },},{id: "books-仿制药的真相",
          title: '仿制药的真相',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2022_bottle_of_lies/";
            },},{id: "books-复杂生命的起源",
          title: '复杂生命的起源',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2022_vital_question/";
            },},{id: "books-fly-by-night-physics",
          title: 'Fly by Night Physics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2022_fly_by_night/";
            },},{id: "books-on-gravity",
          title: 'On Gravity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_on_gravity/";
            },},{id: "books-数学女孩",
          title: '数学女孩',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_math_girl_B1/";
            },},{id: "books-数学女孩2-费马大定理",
          title: '数学女孩2 : 费马大定理',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_math_girl_B2/";
            },},{id: "books-we-have-no-idea",
          title: 'We Have No Idea',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_no_idea/";
            },},{id: "books-最后的观星人-天文探险家的不朽故事",
          title: '最后的观星人 : 天文探险家的不朽故事',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_last_stargazers/";
            },},{id: "books-战斗细胞-人体免疫系统奇妙之旅",
          title: '战斗细胞 : 人体免疫系统奇妙之旅',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_immune/";
            },},{id: "books-深度学习入门-基于-python-的理论与实现",
          title: '深度学习入门：基于 Python 的理论与实现',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_fish_book/";
            },},{id: "books-超越想象的gpt医疗",
          title: '超越想象的GPT医疗',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_gpt_med/";
            },},{id: "books-深海浅说",
          title: '深海浅说',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_deep_sea/";
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
            },},{id: "books-how-to-think-like-a-mathematician",
          title: 'How to Think Like a Mathematician',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_think_like_mathematician/";
            },},{id: "books-量子怪才-保罗-狄拉克传",
          title: '量子怪才：保罗·狄拉克传',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_dirac_bio/";
            },},{id: "books-素数之恋-黎曼和数学中最大的未解之谜",
          title: '素数之恋：黎曼和数学中最大的未解之谜',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_prime_obsession/";
            },},{id: "books-献给阿尔吉侬的花束",
          title: '献给阿尔吉侬的花束',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_algernon/";
            },},{id: "books-杨振宁传-规范与对称之美",
          title: '杨振宁传：规范与对称之美',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_chenning_yang/";
            },},{id: "books-所罗门王的指环",
          title: '所罗门王的指环',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_solomon/";
            },},{id: "books-神经的逻辑",
          title: '神经的逻辑',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_neuro_logic/";
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
            },},{id: "books-一个女人的自传-杂记赵家",
          title: '一个女人的自传/杂记赵家',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_yang_buwei/";
            },},{id: "books-数学女孩4-随机算法",
          title: '数学女孩4 : 随机算法',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_math_girl_B4/";
            },},{id: "books-大医",
          title: '大医',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_dayi/";
            },},{id: "books-classical-mechanics-the-theoretical-minimum",
          title: 'Classical Mechanics : The Theoretical Minimum',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_theoretical_minimum/";
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
            },},{id: "books-seventeen-equations-that-changed-the-world",
          title: 'Seventeen Equations That Changed the World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_equations/";
            },},{id: "books-双螺旋-the-double-helix",
          title: '双螺旋 The Double Helix',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_double_helix/";
            },},{id: "books-巴黎圣母院",
          title: '巴黎圣母院',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2025_notre_dame/";
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
            },},{id: "books-the-elegant-universe",
          title: 'The Elegant Universe',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2025_elegant_universe/";
            },},{id: "books-我包罗万象",
          title: '我包罗万象',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2025_multitudes/";
            },},{id: "books-step-mat-tmua-skills-for-success-in-admissions-tests-for-mathematics",
          title: 'STEP, MAT, TMUA: Skills for Success in Admissions Tests for Mathematics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2025_step_mat_tmua/";
            },},{id: "books-迷人的对称",
          title: '迷人的对称',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2025_beauty_is_truth/";
            },},{id: "books-linear-algebra-and-its-applications-3e",
          title: 'Linear Algebra and Its Applications (3E)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2025_linear_algebra/";
            },},{id: "news-流水账的2022年终总结-学习资源推荐",
          title: '流水账的2022年终总结 + 学习资源推荐',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022_log/";
            },},{id: "news-烂尾的2023年终盘点-应该是不会写完了",
          title: '烂尾的2023年终盘点，应该是不会写完了。。。',
          description: "",
          section: "News",},{id: "news-流水账的2024年度盘点",
          title: '流水账的2024年度盘点',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024_log/";
            },},{id: "news-流水账的2025年度盘点",
          title: '流水账的2025年度盘点',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025_log/";
            },},{id: "projects-a2-physics-notes",
          title: 'A2 Physics Notes',
          description: "Lecture Notes on CIE A-Level Physics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/a2physics_notes/";
            },},{id: "projects-as-physics-notes",
          title: 'AS Physics Notes',
          description: "Lecture Notes on CIE AS-Level Physics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/asphysics_notes/";
            },},{id: "projects-written-solutions-to-cie-as-amp-a-level-physics-papers",
          title: 'Written Solutions to CIE AS &amp;amp; A-Level Physics Papers',
          description: "Handwritten Solutions to CIE A-Level Physics Past Exam Papers",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cie_physics_solutions/";
            },},{id: "projects-decision-maths-algorithms",
          title: 'Decision Maths Algorithms',
          description: "Implementation of decision mathematics algorithms with Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/decision_algorithms/";
            },},{id: "projects-written-solutions-to-edexcel-a-level-maths-papers",
          title: 'Written Solutions to Edexcel A-Level Maths Papers',
          description: "Handwritten solutions to Edexcel International A-Level Mathematics and Further Mathematics Exam Papers",
          section: "Projects",handler: () => {
              window.location.href = "/projects/edexcel_maths_solutions/";
            },},{id: "projects-sir-modelling",
          title: 'SIR Modelling',
          description: "A short course on the mathematical modelling of epidemics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/epidemic-modelling/";
            },},{id: "projects-further-mechanics-notes-dated",
          title: 'Further Mechanics Notes (Dated)',
          description: "Lecture Notes on Cambridge International A-Level Further Mechanics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fm_notes/";
            },},{id: "projects-jigsaw-puzzles",
          title: 'Jigsaw Puzzles',
          description: "A collection of jigsaw puzzles that I have completed over the years",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jigsaw_puzzles/";
            },},{id: "projects-oscillators-and-pd-controllers",
          title: 'Oscillators and PD Controllers',
          description: "A mixed introductory course on scientific computing and simulations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/oscillators/";
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
