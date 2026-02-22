---
layout: post
title: "理想气体的绝热方程"
date: 2022-03-29 17:07:00
description: "在 A-Level 物理知识基础上推导理想气体在绝热过程中符合的状态方程"
tags: physics a-level thermodynamics
categories: physics a-level
---

## 理想气体的内能

统计力学里有一个能均分定理（equipartition theorem），说的是理想气体分子的每一个运动自由度（degree of freedom），都对应于一份 $\frac{1}{2}kT$ 的能量。所有气体分子都有3个空间平动（translation）的自由度，以及或多或少的转动（rotation）自由度，具体而言：

- 单原子分子（例如 $\text{He}$、$\text{Ar}$ 等稀有气体），没有转动自由度，总共3个运动自由度，因此内能 $U = \frac{3}{2}NkT$
- 线型分子（例如 $\text{O}_2$、$\text{N}_2$ 等双原子分子，及 $\text{CO}_2$ 等线性的多原子分子），有2个转动自由度，总共5个运动自由度，因此内能 $U = \frac{5}{2}NkT$
- 非线型的复杂分子（例如 $\text{H}_2\text{O}、$$\text{CH}_4$  等），有3个转动自由度，总共6个运动自由度，因此内能 $U = 3NkT$

上述不同情况的内能表达式仅仅是一个常数的区别，我们暂且统一记为

$$
U = \frac{1}{\gamma-1}NkT \tag{1}
$$

不难验证，取 $\gamma = \frac{5}{3}, \frac{7}{5}, \frac{4}{3}$ 就可以给出三种情况下的内能表达式。我们之后可以看到 $\gamma$ 的意义。

## 等压比热与等容比热

对于等压过程，气体压强不变，则体积变化与温度变化成正比：

$$
pV = NkT \quad \Rightarrow \quad dV = \frac{Nk \, dT}{p}
$$

由热力学第一定律

$$
dU = dQ - p\,dV
$$

可以写出气体在等压过程中的吸热为

$$
dQ_p = dU + p \, dV = \frac{1}{\gamma-1}Nk \,dT + Nk \, dT = \frac{\gamma}{\gamma -1} Nk \, dT
$$

因此等压比热

$$
C_p = \frac{dQ_p}{dT} = \frac{\gamma}{\gamma-1}Nk \tag{2}
$$

若气体体积不变，则外力对气体做功为零，内能变化完全由气体吸热的多少决定

$$
dQ_V = dU = \frac{1}{\gamma-1}Nk \,dT
$$

因此等容比热

$$
C_V = \frac{dQ_V}{dT} = \frac{1}{\gamma-1}Nk \tag{3}
$$

比较 $(2)$ 和 $(3)$ 可以得到

$$
\frac{C_p}{C_V} = \gamma \tag{4} 
$$

事实上热力学中我们经常直接用等压比热和等容比热之间的比值作为参数 $\gamma$ 的定义。

## 理想气体的绝热方程

现在考虑理想气体进行绝热压缩或者绝热膨胀的变化，即体系与外界没有热量交换 $dQ = 0$，此时的热力学第一定律告诉我们

$$
dU = -p\, dV
$$

代入 $(1)$ 及理想气体方程，有

$$
\begin{aligned}
\frac{1}{\gamma - 1} Nk \, dT &= - \frac{NkT}{V}dV \\
-\frac{dT}{T} &= (\gamma - 1) \frac{dV}{V} \\
\end{aligned}
$$

两边同时从初态到末态积分，稍作化简，可以得到

$$
\begin{aligned}
-\ln \frac{T_f}{T_i} &= (\gamma -1)\ln\frac{V_f}{V_i} \\
\ln \frac{T_i}{T_f} &= \ln \left(\frac{V_f}{V_i}\right)^{\gamma - 1} \\
T_i V_i^{\gamma - 1}  &= T_f V_f^{\gamma - 1} 
\end{aligned}
$$

最后注意到理想气体有 $T \propto pV$，于是

$$
\begin{aligned}
(p_i V_i) \times V_i^{\gamma - 1}  &= (p_f V_f) \times V_f^{\gamma - 1} \\
p_i V_i^\gamma &= p_f V_f^\gamma
\end{aligned} \tag{5}
$$

即为理想气体的绝热方程。