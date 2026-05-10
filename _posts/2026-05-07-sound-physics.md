---
layout: post
title: "从声速到超声波成像：A-Level 声波物理背后的完整故事"
date: 2026-05-07 15:58:00
description: 本文由理想气体的绝热过程出发，导出声波的波动方程与传播速度，推导声波的强度以及在穿过介质交界面时的强度反射系数
tags: physics a-level thermodynamics mechanics
categories: physics a-level 
---

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
    * { box-sizing: border-box; } /* Essential for perfect alignment */

    body { 
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        background: #f0f2f5; 
        margin: 0;
        padding: 40px 0;
    }
    
    .dashboard-container {
        width: 800px; /* Matches Canvas width exactly */
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }
    
    .legend { 
        margin-bottom: 20px; 
        font-size: 0.85em; 
        color: #666; 
        text-align: center; 
        line-height: 1.5; 
    }

    canvas#mainCanvas { 
        background: white; 
        border: 1px solid #ccc; 
        box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
        border-radius: 4px;
        display: block; /* Removes bottom whitespace */
    }

    .charts-grid { 
        display: grid; 
        grid-template-columns: repeat(3, 1fr); 
        gap: 10px; 
        width: 100%; /* Spans the full 800px of the container */
        height: 220px; 
        margin-top: 15px;
    }

    .chart-wrapper { 
        background: white; 
        padding: 8px; 
        border-radius: 8px; 
        border: 1px solid #ddd; 
        box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        min-width: 0; /* Prevents chart blowout */
    }
</style>

声音是我们日常生活中最熟悉的物理现象之一，却也是一个值得细细推敲的波动力学问题。几天前刚新出炉的 A-Level 物理2026年3月印度区 Paper 5 碰着了一个探究声速和温度关系的数据处理题，前阵子又有学生问到 Paper 4 理论卷里为什么超声波的反射系数公式长成 $$\frac{I_r}{I_i} = \left(\frac{Z_2 - Z_1}{Z_2 + Z_1} \right)^2$$ 这么幅模样。我一盘声波这故事叙事从头到尾好像能串成一条线么，索性就来写一篇文章来细细掰扯吧。

本文试图从第一性原理出发，按照以下的主线脉络逐一梳理声波物理的核心结果：

- 由理想气体的绝热过程出发，导出声波的波动方程与传播速度
- 探讨粒子速度与声压的关系，引入声阻抗的概念
- 推导声波的能量密度与强度
- 讨论声波垂直入射至两种介质交界面时的反射与透射系数

## 声波的波动方程与声速

当我们谈论声音在空气中的传播，我们实际上是在描述气体分子在平衡位置附近的集体振动。作为典型的**纵波**（longitudinal wave），声波中的粒子位移方向与能量传播方向平行。考虑 $$x$$ 至 $$x+\Delta x$$ 范围内的一段横截面积为 $$A$$ 的空气柱。假定气体压强在平衡压强 $$p_0$$ 附近波动，从而导致空气柱不同位置处的截面产生纵向的位移 $$y(x,t)$$。我们先试着导出 $$y(x,t)$$ 需遵从的波动方程，并由此导出声波的速度。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sound-wave-volume-unit.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

由于声波的频率通常很高，空气的压缩和膨胀过程会非常迅速，空气柱没有足够的时间与其周围的气体进行热交换，因此可以将其作为**绝热过程**（adiabatic process）来处理。理想气体的绝热过程符合方程（不熟悉绝热过程的读者不妨参阅[这篇文章]({{site.baseurl}}/blog/2022/adiabatic-process/)）：

$$
pV^\gamma = \text{constant}
$$

其中绝热指数 $$\gamma$$ 是由气体粒子的运动自由度所决定的常数。对于主要由氮气和氧气这样的双原子粒子构成的空气，有 $$\gamma = \frac{7}{5}$$. 

当然，如果声波的频率很低，压缩和膨胀过程足够缓慢，气体将有更充分的时间与外界交换热量，过程会更偏向等温过程（isothermal process），此时理想气体符合 Boyle 定律 $$pV = \text{contant}$$，也可以视作取 $$\gamma = 1$$。这节的最后我们将导出声速 $$v \propto \sqrt{\gamma}$$ 的结果，而历史上，牛顿最初采用了等温假设来处理常规的、频率较高的声波，这导致了计算结果仅是实际值的 $$\sqrt{\frac{5}{7}} \approx 85\%$$，直到后来 Laplace 引入了绝热近似进行修正，才得到了与实际值符合的非常好的结果。

对绝热方程的两边取对数后再作微分：

$$
\begin{align*}
\ln p + \gamma \ln V &= \text{constant} \\
\frac{\mathrm{d} p}{p} + \gamma \frac{\mathrm{d} V}{V} &= 0 \\
\Rightarrow \; \mathrm{d} p &= -\gamma p \frac{\mathrm{d} V}{V} \tag{1}
\end{align*}
$$

我们所考察的空气柱在平衡态下的体积为 $$V = A \Delta x$$，由于扰动产生的体积变化量为 $$\Delta V = A [y(x+\Delta x) - y(x)] \approx A \frac{\partial y}{\partial x} \Delta x$$，于是 $$\frac{\Delta V}{V} = \frac{\partial y}{\partial x}$$. 又由于假定了压强仅仅是在平衡压强附近小幅波动，可以作线性化处理 $$p\approx p_0$$，如此得到：

$$
\mathrm{d} p = -\gamma p_0 \frac{\partial y}{\partial x} \tag{2}
$$

空气柱左右两个截面处的压强分别可以写成：

$$
\begin{align*}
p(x) &= p_0 + \delta p(x) = p_0 - \gamma p_0 \frac{\partial y}{\partial x} \Bigg\vert_x \\
p(x+\Delta x) &= p_0 + \delta p(x+\Delta x) = p_0 - \gamma p_0 \frac{\partial y}{\partial x} \Bigg\vert_{x+\Delta x} \\
\end{align*}
$$

此段空气柱所受的合力为：

$$
\begin{align*}
F &= p(x) A - p(x+\Delta x) A \\
& = \gamma p_0 \left[ \frac{\partial y}{\partial x} \Bigg\vert_{x+\Delta x} - \frac{\partial y}{\partial x} \Bigg\vert_{x}\right] \\
\Rightarrow \; F & \approx \gamma p_0 \frac{\partial^2 y}{\partial x^2} \Delta x
\end{align*}
$$

空气柱的质量写作 $$\rho_0 A \Delta x$$，由牛顿定律可以得到运动方程：

$$
\begin{align*}
\gamma p_0 \frac{\partial^2 y}{\partial x^2} \Delta x &= \rho_0 A \Delta x \frac{\partial^2 y}{\partial t^2} \\
\Rightarrow \; \frac{\partial^2 y}{\partial t^2} &= \frac{\gamma p_0}{\rho_0} \frac{\partial^2 y}{\partial x^2} \tag{3}
\end{align*}
$$

此即声波的波动方程。本着所有微小扰动在理论物理学家眼里都是简谐振动的精神，立刻可以写出波动方程的解的形式：

$$
y(x,t) = y_0 \cos (kx - \omega t) \tag{4}
$$

代回 $$(3)$$ 式后不难得到：

$$
\omega^2 = \frac{\gamma p_0}{\rho_0} \times k^2
$$

由此得到声波的传播速度为：

$$
c = \frac{\omega}{k} = \sqrt{\frac{\gamma p_0}{\rho_0}} \tag{5}
$$

代入空气的绝热指数 ，标准大气压 $$p_0 = 1.01\times10^5 \text{ Pa}$$ 以及空气密度 $$\rho_0 = 1.29 \text{ kg/m}^3$$：

$$
c = \sqrt{\frac{\frac{7}{5} \times 1.01\times10^5}{1.29}} \approx 331 \text{ m/s}
$$

和我们所熟悉的空气中的声速数值相符。

我们还可以对声速的公式作进一步改写。同时将 $$(5)$$ 式根式下的粒子分母乘以气体的摩尔体积 $$V_m$$，利用理想气体方程 $$pV = nRT$$，再注意到空气粒子的摩尔质量为 $$M = \rho_0 V_m$$，我们有：

$$
c = \sqrt{\frac{\gamma RT}{M}} \tag{6}
$$

从中可以清楚地看到声速随温度的升高而变快的结论，在某些精密的声纳测距的技术应用里这也是必须要考虑的影响因素。代入空气的绝热指数 $$\gamma = \frac{7}{5}$$，摩尔气体常数 $$R = 8.31 \text{J/(K mol)}$$，标准大气压对应的温度 $$T=273 \text{ K}$$，以及空气粒子的摩尔质量 $$M=0.029 \text{ kg/mol}$$，同样地很容易验证：

$$
c = \sqrt{\frac{\frac{7}{5} \times 8.31 \times 273}{0.029}} \approx 331 \text{ m/s}
$$



## 粒子速度与声波压强

基于已经导出的声波方程和其行波解，粒子的速度和声波压强的关系式就变得手到擒来了。

依旧考察体积元 $$\Delta V = A \Delta x$$ 内的空气柱。粒子的速度为：

$$
v = \frac{\partial y}{\partial t} = \omega y_0 \sin(kx - \omega t) \tag{7}
$$

同样不断波动的声波压强有：

$$
\begin{align*}
p(x) &= p_0 - \gamma p_0 \frac{\partial y}{\partial x} \Bigg\vert_x \\
& = p_0 + \gamma p_0 \times k y_0 \sin(kx - \omega t) \\
& = p_0 + \rho_0 c^2  \times k y_0 \sin(kx - \omega t) \\
\Rightarrow \; \delta p &= \rho_0 c \omega y_0 \sin(kx - \omega t) \tag{8}
\end{align*}
$$

上面倒数第二行用到了之前得到的声速公式 $$c =\sqrt{\frac{\gamma p_0}{\rho_0}}$$，最后一行用到了 $$c=\frac{\omega}{k}$$.

对比粒子速度和声波压强的结果，不难看出行波中的声压波动和粒子速度始终同相（in phase），并且有：

$$
\delta p = \rho_0 c v \tag{9}
$$

类比于电路中电压和电流之间的关系，引入**介质声阻抗**（specific acoustic impedance）$$Z$$，其定义为介质密度与介质中声波传播速度的乘积，即

$$
Z \equiv \rho_0 c \tag{10}
$$

声波压强和粒子速度的关系可以写成更简明的形式：

$$
v = \frac{\delta p}{Z} \tag{11}
$$

## 声波动画演示

下面是借助 Gemini 生成的一个动画演示，展示了介质中的分子们如何像交谊舞般和谐地跳动形成行进的压力波。

动画中的红色线条追踪了某处的分子振动，并在下方同步展示了其位移（绿色）、速度（红色）和所在位置的压强（蓝色）随时间的动态变化。

<div class="dashboard-container">
    <canvas id="mainCanvas" width="800" height="150"></canvas>

    <div class="charts-grid">
        <div class="chart-wrapper">
            <canvas id="displacementChart"></canvas>
        </div>
        <div class="chart-wrapper">
            <canvas id="velocityChart"></canvas>
        </div>
        <div class="chart-wrapper">
            <canvas id="pressureChart"></canvas>
        </div>
    </div>
</div>

<script>
    const canvas = document.getElementById('mainCanvas');
    const ctx = canvas.getContext('2d');
    
    // Physics
    const numParticles = 45; 
    const spacing = canvas.width / numParticles;
    const amplitude = 35;       
    const frequency = 0.0015;  
    const waveSpeed = 0.04;     
    let time = 0;

    // Data
    const maxDataPoints = 150;
    let labels = Array(maxDataPoints).fill('');
    let displacementData = Array(maxDataPoints).fill(0);
    let velocityData = Array(maxDataPoints).fill(0);
    let pressureData = Array(maxDataPoints).fill(0);

    const chartConfig = (label, color, minMax) => ({
        type: 'line',
        data: {
            labels: labels,
            datasets: [{ 
                label: label, 
                data: [], 
                borderColor: color, 
                borderWidth: 2, 
                fill: false, 
                pointRadius: 0,
                tension: 0.4
            }]
        },
        options: {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { labels: { boxWidth: 10, font: { size: 10 } } } },
            scales: { 
                y: { min: -minMax, max: minMax, ticks: { font: { size: 9 } } },
                x: { display: true }
            }
        }
    });

    const dChart = new Chart(document.getElementById('displacementChart'), chartConfig('位移 (y)', 'green', 40));
    const vChart = new Chart(document.getElementById('velocityChart'), chartConfig('速度 (v)', 'red', 0.1));
    const pChart = new Chart(document.getElementById('pressureChart'), chartConfig('压强 (δp)', 'blue', 1.5));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        time += 16; 

        const targetIndex = 15; 
        let tDisp, tVel, tPres;

        for (let i = 0; i < numParticles; i++) {
            const x0 = i * spacing + spacing / 2;
            const phase = (x0 * waveSpeed) - (time * frequency);
            const displacement = amplitude * Math.cos(phase);
            const velocity = amplitude * frequency * Math.sin(phase);

            const currentX = x0 + displacement;

            ctx.beginPath();
            if (i === targetIndex) {
                ctx.strokeStyle = '#e74c3c';
                ctx.lineWidth = 4;
                tDisp = displacement;
                tVel = velocity;
                tPres = Math.sin(phase); 
            } else {
                ctx.strokeStyle = '#34495e';
                ctx.lineWidth = 1;
            }
            
            ctx.moveTo(currentX, 20);
            ctx.lineTo(currentX, 130);
            ctx.stroke();
        }

        displacementData.push(tDisp);
        velocityData.push(tVel);
        pressureData.push(tPres);

        if (displacementData.length > maxDataPoints) {
            displacementData.shift();
            velocityData.shift();
            pressureData.shift();
        }

        dChart.data.datasets[0].data = displacementData;
        vChart.data.datasets[0].data = velocityData;
        pChart.data.datasets[0].data = pressureData;

        dChart.update();
        vChart.update();
        pChart.update();

        requestAnimationFrame(animate);
    }

    animate();
</script>



## 能量密度和声波强度

声波的能量由粒子的动能和气体在膨胀和压缩过程中的弹性势能两部分构成。

其中，**动能密度**：

$$
\begin{align*}
u_k & = \frac{\frac{1}{2}\Delta m \cdot v^2}{\Delta V} \\
& = \frac{1}{2}\rho v^2 \\
\Rightarrow \; u_k &= \frac{1}{2}\rho_0 \omega^2 y_0^2 \sin^2 (kx-\omega t) \tag{12}
\end{align*}
$$

**弹性势能密度**：

$$
\begin{align*}
u_p & = \frac{-\frac{1}{2} \delta p \cdot \delta V}{\Delta V} \\
& = \frac{1}{2}\delta p \cdot \frac{\delta p}{\gamma p_0} \\
& = \frac{1}{2} \frac{(\delta p)^2}{\rho_0 c^2} \\
& = \frac{1}{2} \frac{\rho_0^2 c^2 \omega^2 y_0^2 \sin^2(kx - \omega t)}{\rho_0 c^2} \\
\Rightarrow \; u_p &= \frac{1}{2} \rho_0 \omega ^2 y_0^2 \sin^2 (kx-\omega t) \tag{13}
\end{align*}
$$

注意第一行中的负号，这是由于气体被压缩时 $$\delta V <0$$，外界对气体作正功，弹性势能增大，但此时压强因被压缩也增大即 $$\delta p > 0$$，因此弹性势能项需引入负号。后续几行的推导中，我们又分别在第二行用到了 $$\mathrm{d} p = -\gamma p_0 \frac{\mathrm{d} V}{V}$$，在第三行再次用到了 $$c =\sqrt{\frac{\gamma p_0}{\rho_0}}$$，并在倒数第二行代入了 $$(8)$$ 式的结果。

很有意思的，可以注意到粒子动能的能量密度和弹性势能能量密度是完全一样的。容易写出**总能量密度**：

$$
u(x,t) = u_k + u_p = \rho_0 \omega ^2 y_0^2 \sin^2 (kx-\omega t) \tag{14}
$$

对时间求平均：

$$
\begin{align*}
\bar{u}(x) & = \frac{1}{T} \int_0^T u(x,t) \, \mathrm{d} t \\
& = \rho_0 \omega ^2 y_0^2 \times \frac{1}{T} \int_0^T \sin^2 (kx-\omega t) \, \mathrm{d} t \\
& = \rho_0 \omega ^2 y_0^2 \times \frac{1}{T} \int_0^T \frac{1}{2}\left[ 1 - 2\cos(kx-\omega t)\right]  \, \mathrm{d} t \\
\Rightarrow \; \bar{u}(x) &= \frac{1}{2} \rho_0 \omega ^2 y_0^2 \tag{15}
\end{align*}
$$

对于横截面积为 $$A$$、体积为 $$\Delta V$$ 的空气柱，声波传播的功率为

$$
P = \frac{\bar{u} \Delta V}{\Delta t} = \bar{u}Ac
$$

于是声波的**强度**（intensity）：

$$
I = \frac{P}{A} = \bar{u} c \; \Rightarrow \; I= \frac{1}{2} \rho_0 c \omega ^2 y_0^2 \tag{16}
$$

从 $$(8)$$ 式我们可以看出压强波动的振幅为：

$$
\delta p_\text{max} = \rho_0 c \omega y_0
$$

因此声波强度还可以被改写成：

$$
I = \frac{(\delta p_\text{max})^2}{2\rho_0 c}
$$

注意到上式分母部分又出现了可以打包进声阻抗 $$Z = \rho_0 c$$ 的乘积组合，于是有：

$$
I = \frac{(\delta p_\text{max})^2}{2 Z} \tag{17}
$$

这说明**声波的强度正比于压强振幅的平方**，这也是 A-Level 物理考纲中需要学生知道、但是其实得来需要费不少功夫的一个结论。



## 反射系数与透射系数

声波从一种介质向另一种介质入射时，在两种介质的交界面上，部分声波发生反射，部分声波会透射。我们接下来分析最简单的垂直入射的情况下，反射和透射的声波强度占比分别是多少。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sound-wave-boundary.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

我们选用下标 $$i$$，$$r$$ 和 $$t$$ 分别代表入射（incident）、反射（reflected）和透射（transmitted）。

首先，**在交界面上应有连续的声压**。若声压不连续，则界面两侧存在不为零的压强差，这将导致界面处极薄的质量层产生无限大的加速度，这在稳定的物理系统中是不可能发生的。声压的连续性条件可以写作：

$$
\delta p_i + \delta p_r = \delta p_t \tag{18}
$$

另一方面，**交界面上粒子的法向速度也必须连续**。如果界面一侧的粒子以不同于另一侧的速度运动，那么界面两侧的介质要么被拉扯开分出间隙，要么挤到一起互相重叠，这对于连续介质也是不能发生的。由粒子速度的连续性条件，我们有：

$$
v_i - v_r = v_t \tag{19}
$$

注意 $$v_r$$ 前面的负号，这是因为反射波的传播方向发生了翻转。

利用 $$(10)$$ 式 $$v = \frac{\delta p}{Z}$$，我们可以把以上两组连续性边界条件的方程联立写成：

$$
\begin{align*}
\delta p_t - \delta p_r &= \delta p_i \\
\displaystyle \frac{\delta p_t}{Z_2} + \frac{\delta p_r}{Z_1} &= \frac{\delta p_i}{Z_1}
\end{align*}
$$

从中可以解出反射波和透射波的压强：

$$
\delta p_r = \frac{Z_2 - Z_1}{Z_2 + Z_1} \delta p_i \qquad \delta p_t = \frac{2Z_2}{Z_2 + Z_1} \delta p_i \tag{20}
$$

利用 $$(17)$$ 式有关声波强度的结果，我们可以算出**反射系数**：

$$
\begin{align*}
\frac{I_r}{I_i} &= \frac{\frac{(\delta p_r)^2}{2Z_1}}{\frac{(\delta p_i)^2}{2Z_1}} \\
&= \left(\frac{\delta p_r}{\delta p_i} \right)^2 \\
\Rightarrow \frac{I_r}{I_i} &= \left(\frac{Z_2 - Z_1}{Z_2 + Z_1} \right)^2 \tag{21}
\end{align*}
$$

以及类似地计算出**透射系数**：

$$
\begin{align*}
\frac{I_t}{I_i} &= \frac{\frac{(\delta p_t)^2}{2Z_2}}{\frac{(\delta p_i)^2}{2Z_1}} \\
&= \left(\frac{\delta p_t}{\delta p_i} \right)^2 \times \frac{Z_1}{Z_2} \\
&= \frac{4Z_2^2}{(Z_2 + Z_1)^2}  \times \frac{Z_1}{Z_2} \\
\Rightarrow \frac{I_t}{I_i} &= \frac{4 Z_1Z_2}{(Z_2 + Z_1)^2}  \tag{22}
\end{align*}
$$

这正是 A-Level 物理中超声波成像版块中的核心结论。

不难验证 $$(21)$$、$$(22)$$ 式满足 $$\frac{I_r}{I_i} + \frac{I_t}{I_i} = 1$$，这也是能量守恒的必然结果。从这两式也不难得出，若两种介质的声阻抗相差很大，$$Z_1 \gg Z_2$$ 或 $$Z_1 \ll Z_2$$，则反射很强，透射很弱；反之，若两种介质的声阻抗十分接近，$$Z_1 \approx Z_2$$，则反射很弱，可以达到几乎完全透射。


## 小结

本文我们基于理想气体的绝热过程导出了声波的波动方程，进而推导了声波波速、能量密度、声波强度的公式，最后讨论了声波垂直入射至两种不同介质交界面时的反射强度、透射强度。

贯穿全文的核心量是在 A-Level 物理课程中很突兀就登场亮相的声阻抗 $$Z=\rho_0c$$. 但我们看到，声阻抗不仅将声压与粒子速度联系在了一起，又决定了介质界面处的能量分配比例。

最后给有心的读者留一个练习题：参考本文的推导，试从 Maxwell 方程组出发，导出电磁波的波动方程，并推导出电磁波能量密度、强度的公式，并证明电磁波垂直入射至两种不同介质交界面时，其反射系数和透射系数的结果在形式上与 $$(21)$$、$$(22)$$ 式有非常类似的形式。（手动狗头）

