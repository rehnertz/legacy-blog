---
title: 测度空间
math: true
order: 2
---

《测度论与概率论基础》第二章题解。

<!-- more -->

## 1

::: exercise
证明命题 2.1.1：测度具有有限可加性和可减性。
:::

任取测度空间 $(X, \mathscr{F}, \mu)$。对任意两两不交的 $A_1, A_2 \cdots, A_n \in \mathscr{F}$，定义 $A_{n + 1} = A_{n + 2} = \cdots = \varnothing$，则依测度的可列可加性
$$
\begin{aligned}
  \mu\left( \bigcup_{i = 1}^n A_i \right)
  &= \mu\left( \bigcup_{i = 1}^\infty A_i \right) \\
  &= \sum_{i = 1}^\infty \mu(A_i) \\
  &= \sum_{i = 1}^n \mu(A_i)，
\end{aligned}
$$
即测度具有有限可加性。

任取 $A, B \in \mathscr{F}$ 以及 $A \subset B$。注意到 $A$ 与 $B \setminus A$ 不交，若 $\mu(A) < \infty$，则
$$
\begin{aligned}
  \mu(B)
  &= \mu(A \cup (B \setminus A)) \\
  &= \mu(A) + \mu(B \setminus A)，\\
  \mu(B) - \mu(A) &= \mu(B \setminus A)，
\end{aligned}
$$
即测度具有可减性。

## 2

::: exercise
验证例 1、例 2 和例 3 的结论。
:::

::: tip
例 1：设 $X$ 是一非空集合而 $\mathscr{F}$ 是由 $X$ 的一切子集组成的集合系。以 $\#(A)$ 记集合 $A$ 中元素的个数并令 $\mu(A) = \#(A), \forall A \in \mathscr{F}$，则 $\mu$ 是 $\mathscr{F}$ 上的测度。如果 $X$ 是有限集，则 $\mu$ 是有限测度；如 $X$ 是可列集，则 $\mu$ 是 $\sigma$ 有限测度。
:::

> $\mu$ 是测度感觉平凡成立，不知道怎么写，下面随便写点。

$\mu(\varnothing) = 0$ 是显然的。

对任意一列两两不交的 $A_1, A_2, \cdots, \in \mathscr{F}$，若存在任一 $\mu(A_i) = \infty$，则
$$
\begin{aligned}
  &\mu\left(\bigcup_{n = 1}^\infty A_n \right) \\
  ={}& \infty \\
  ={}& \mu(A_1) + \mu(A_2) + \cdots + \mu(A_i) + \cdots。
\end{aligned}
$$
若所有 $A_i$ 均为有限集 $\{ a_{i1}, a_{i2}, \cdots, a_{i n_i} \}$，则
$$
\begin{aligned}
  \mu\left( \bigcup_{k = 1}^\infty A_k \right)
  &= \mu(\{ a_{11}, a_{12}, \cdots, a_{1 n_1}, a_{21}, a_{22}, \cdots, a_{2 n_2}, \cdots \}) \\
  &= \sum_{k = 1}^\infty n_k \\
  &= \sum_{k = 1}^\infty \mu(A_k)。
\end{aligned}
$$
故 $\mu$ 是测度。

当 $X$ 是有限集时，对任意 $A \subset X$ 有 $A$ 是有限集，$\mu(A) < \infty$。

当 $X$ 是可列集时，对任意 $A \subset X$ 要么为有限集，要么为可列集，故
$$
  A = \bigcup_{a \in A} \{ a \}
$$
是可列或有限并，且 $\mu(\{a\}) = 1$，$\mu$ 是 $\sigma$ 有限的。

::: tip
例 2：设 $(X, \mathscr{E})$ 是可测空间。如果 $x$ 是 $X$ 的一个给定元素，对每个 $A \in \mathscr{E}$，令
$$
  \delta_x(A) = I_A(x) =
  \begin{cases}
    1，& x \in A，
    0，& x \notin A，
  \end{cases}
$$
则 $\delta_x$ 是 $\mathscr{E}$ 上的测度。更进一步，如果 $x_1, \cdots, x_n \in X$，则
$$
  \mu = \sum_{i = 1}^n \delta_{x_i}
$$
还是 $\mathscr{E}$ 上的测度。这类测度称为**点测度**。
:::

$\delta_{x}(\varnothing) = I_{\varnothing}(x) = 0$ 是显然的。

对任意一列两两不交的 $A_1, A_2, \cdots \in \mathscr{E}$，
$$
  \delta_x\left( \bigcup_{n = 1}^\infty A_n \right)
  = I_{\bigcup\limits_{n = 1}^\infty A_n}(x) 
  = \sum_{n = 1}^\infty I_{A_n}(x)
  = \sum_{n = 1}^\infty \delta_x(A_n)，
$$
即 $\delta_x$ 是测度。

$$
\begin{aligned}
  \mu\left( \bigcup_{j = 1}^\infty A_j \right)
  &= \sum_{i = 1}^n \delta_{x_i}\left( \bigcup_{j = 1}^\infty A_j \right) \\
  &= \sum_{i = 1}^n \sum_{j = 1}^\infty \delta_{x_i}(A_j) \\
  &= \sum_{j = 1}^\infty \sum_{i = 1}^n \delta_{x_i}(A_j) \\
  &= \sum_{j = 1}^\infty \mu(A_j)，
\end{aligned}
$$
即 $\mu$ 是测度。

::: tip
例 3：设 $X = \{ 1, 2, \cdots \}$ 和 $\mathscr{E} = \set{A \subset X}{\#(A) < \infty \text{ 或 } \#(A^c) < \infty}$。令
$$
  \mu(A) =
  \begin{cases}
    0，& \#(A) < \infty，\\
    \infty，& \#(A^c) < \infty，
  \end{cases}
$$
则 $\mu$ 具有有限可加性但无可列可加性，因而不是测度。
:::

任取一列两两不交的 $A_1, A_2, \cdots, A_n \in \mathscr{E}$，则存在由指标集 $I \subset \{ 1, 2, \cdots, n \}$ 确定的有限集 $\{ \#(A_i) < \infty, i \in I\}$。令 $J = \{ 1, 2, \cdots, n\} \setminus I$，则 $J$ 确定的补集是有限集 $\{ \#(A_j^c) < \infty, j \in J \}$。

若 $J = \varnothing$，则 $\bigcup\limits_{i = 1}^n A_i$ 是有限集，故
$$
  \mu\left( \bigcup_{i = 1}^n A_i \right)
  = 0
  = \sum_{i = 1}^n \mu(A_i)。
$$
若 $J \not= \varnothing$，则 $\bigcap\limits_{j \in J} A_j^c$ 是有限集，从而
$$
\begin{aligned}
  \left( \bigcup_{i = 1}^n A_i \right)^c
  &= \left( \bigcup_{i \in I} A_i \cup \bigcup_{j \in J} A_j \right)^c \\
  &= \bigcap_{i \in I} A_i^c \cap \bigcap_{i \in J} A_j^c
\end{aligned}
$$
是有限集，从而
$$
  \mu\left( \bigcup_{i = 1}^n A_i \right) = \infty。
$$
此外，
$$
\begin{aligned}
  \sum_{i \in I} \mu(A_i) = \sum_{i \in I} 0 &= 0，
  \sum_{j \in J} \mu(A_j) = \sum_{j \in J} \infty &= \infty，
\end{aligned}
$$
故而
$$
  \mu\left( \bigcup_{i = 1}^n A_i \right)
  = \sum_{i = 1}^\infty \mu(A_i) = \infty，
$$
即 $\mu$ 具有有限可加性。

取 $A_n = \{n\}$，则
$$
  \sum_{n = 1}^\infty \mu(A_n) = \sum_{n = 1}^\infty 0 = 0，
$$
但
$$
  \mu\left( \bigcup_{n = 1}^\infty A_n \right)
  = \mu(X)
  = \infty，
$$
因此 $\mu$ 不具有可列可加性。

## 3

::: exercise
记 $\N = \{ 1, 2, \cdots \}$ 并以 $\mathscr{T}$ 表由 $\N$ 的所有子集组成的 $\sigma$ 域。对给定的实数列 $\{a_n\}$，令
$$
  \mu(A) = \sum_{n \in A} a_n，\forall A \in \mathscr{}。
$$
试问：

1. 何时 $\mu$ 是一个测度？
2. 何时 $\mu$ 是一个 $\sigma$ 有限测度？
3. 何时 $\mu$ 是一个有限测度？
4. 何时 $\mu$ 是一个概率测度？
:::

$\mu(\varnothing) = 0$ 平凡成立（可视为 $\mu$ 的定义）。

若 $\mu$ 成为测度，$\mu(A) \ge 0$，故而需要对任意求和 $\sum\limits_{n \in A} a_n \ge 0$。当 $A$ 是单元素集时可得必要条件 $\forall n \in \N : a_n \ge 0$。容易验证这是 $\mu \ge 0$ 的充要条件。此时对任意两两不交的 $A_1, A_2, \cdots \in \mathscr{T}$，
$$
  \mu\left( \bigcup_{k = 1}^\infty A_k \right)
  = \sum_{n \in \bigcup\limits_{k = 1}^\infty A_k} a_n
  = \sum_{n \in A_1} a_n + \sum_{n \in A_2} a_n + \cdots
  = \sum_{k = 1}^\infty \mu(A_k)。
$$
因此当 $a_n \ge 0$ 时 $\mu$ 是测度。

对任意 $A \in \mathscr{E}$ 以及 $\bigcup\limits_{n = 1}^\infty A_n \supset A$，欲使得 $\mu(A_n) < \infty$，只需取 $A_n$ 为单元素集合 $\{a_n \in A\}$ 且 $a_n < \infty$。因此当 $0 \le a_n < \infty$ 时 $\mu$ 是 $\sigma$ 有限测度。

欲使 $\mu$ 有限，特别地有 $\mu(X) < \infty$，即 $\sum\limits_{n = 1}^\infty a_n < \infty$。又 $a_n \ge 0$，故而任意求和均收敛。因此当 $a_n \ge 0$ 且 $\sum\limits_{n = 1}^\infty a_n < \infty$ 时 $\mu$ 是有限测度。

有限测度只需限制全集 $X$ 的测度为 $1$ 即为概率测度，故而当 $a_n \ge 0$ 且 $\sum\limits_{n = 1}^\infty a_n = 1$ 时 $\mu$ 是概率测度。

## 4

::: exercise
设 $\mathscr{Q}$ 是一个半环且 $X \in \mathscr{Q}$。证明：$\mathscr{Q}$ 上的测度 $\mu$ 是 $\sigma$ 有限的当且仅当存在两两不交的 $\{ A_n \in \mathscr{Q}, n = 1, 2, \cdots \}$ 使 $\mu(A_n) < \infty$ 且 $\bigcup\limits_{n = 1}^\infty A_n = X$。
:::

充分性是显然的。

假设 $\mu$ 是 $\sigma$ 有限的，则存在 $A_1, A_2, \cdots \in \mathscr{Q}$ 使得 $\mu(A_n) < \infty$ 且 $X = \bigcup\limits_{n = 1}^\infty A_n$。令 $\{A_n^*\}$ 是 $\{A_n\}$ 的[不交化](./01-measurable-spaces-and-measurable-functions.md#_8)，即
$$
  A^*_n = \begin{cases}
    A_1，& n = 1，\\
    A_n \cap A_{n - 1}^c \cap A_{n - 2}^c \cap \cdots \cap A_1^c，& n \ge 2。
  \end{cases}
$$
$A_n^* \subset A_n$ 且 $\bigcup\limits_{n = 1}^\infty A_n^* = X$。

生成环 $r(\mathscr{Q})$ 由 $\mathscr{Q}$ 中有限个两两不交集合的并构成，且环对差运算封闭，故 $n \ge 2$ 时
$$
  A_n^* = A_n \setminus A_{n - 1}^c \setminus A_{n - 2}^c \setminus \cdots \setminus A_1 \in r(\mathscr{Q})，
$$
即 $A_n^*$ 可写成 $\mathscr{Q}$ 中有限个两两不交集合的并，不妨设为
$$
  A_n^* = \bigcup_{i = 1}^{m_n} C_{n, i}。
$$
因 $A_n^* \subset A_n$，自然有 $C_{n, i} \subset A_n$，故由测度单调性 $\mu(C_{n, i}) < \infty$。因此
$$
  X = \bigcup_{n = 1}^\infty A_n
  = \bigcup_{n = 1}^\infty \bigcup_{i = 1}^{m_n} C_{n, i}
$$
是可数个两两不交、测度为有限值的 $\mathscr{Q}$ 中的集合之并。

## 5

::: exercise
设 $\mu$ 是半环 $\mathscr{Q}$ 上的非负有限可加集函数。证明：如果 $\{ A_n \in \mathscr{Q}, n = 1, 2, \cdots \}$ 两两不交，$A \in \mathscr{Q}$ 且 $\bigcup\limits_{n = 1}^\infty A_n \subset A$，则 $\sum\limits_{n = 1}^\infty \mu(A_n) \le \mu(A)$。
:::

> 基本思路：有限可加性能处理 $\bigcup\limits_{i = 1}^n A_i$ 的单调性（使用集合不交化）。我们的重点是缩放余下的部分 $A \setminus \bigcup\limits_{i = 1}^n A_i$。

与上一题类似，$A \setminus \bigcup\limits_{i = 1}^n A_i \in r(\mathscr{Q})$ 可以写成 $\mathscr{Q}$ 中有限个两两不交集合的并，不妨设为
$$
  A \setminus \bigcup\limits_{i = 1}^n A_i
  = \bigcup_{j = 1}^{m_n} C_{nj}。
$$
于是
$$
\begin{aligned}
  \mu(A)
  &= \mu\left( \bigcup_{i = 1}^n A_i \cup \left( A \setminus \bigcup\limits_{i = 1}^n A_i \right) \right) \\
  &= \mu\left( \bigcup_{i = 1}^n A_i \cup \bigcup_{j = 1}^{m_n} C_{nj} \right) \\
  &= \sum_{i = 1}^n \mu(A_i) + \sum_{j = 1}^{m_n} C_{nj} \\
  &\ge \sum_{i = 1}^n \mu(A_i)。
\end{aligned}
$$

> 这里需要分解 $A \setminus \bigcup\limits_{i = 1}^n A_i$ 是因为 $\mu$ 的定义域是半环 $\mathscr{Q}$，$A \setminus \bigcup\limits_{i = 1}^n A_i$ 并不一定属于 $\mathscr{Q}$。

## 6

::: exercise
设 $\mu$ 是域 $\mathscr{A}$ 上的非负有限可加集函数。证明：如果对每个 $i = 1, \cdots, n$ 有 $A_i \in \mathscr{A}$ 和 $\mu(A_i) < \infty$，则
$$
\begin{aligned}
  \mu\left( \bigcup_{i = 1}^n A_i \right)
  &= \sum_{i = 1}^n \mu(A_i) + \cdots + (-1)^{k + 1} \sum_{1 \le i_1 < \cdots < i_k \le n} \mu\left( \bigcap_{l = 1}^k A_{i_l} \right) \\
  &\phantom{=} + \cdots + (-1)^{n + 1} \mu\left( \bigcap_{i = 1}^n A_i \right)
\end{aligned}
$$
及 $\mu\left( \bigcup\limits_{i = 1}^n A_i \right) \le \sum\limits_{i = 1}^n \mu(A_i)$。
:::

> 参考答案提示使用数学归纳法。诚然这是可行的，但写出来的式子太长，基本只有自己写自己的才能看得懂。这里我们选择一种基于积分的思路，使用代数方法，更加清晰可读。

对任意简单函数 $f = \sum\limits_{i = 1}^n a_i I_{A_i}$（其中 $A_1, \cdots, A_n$ 两两不交），定义其积分为
$$
  \int f = \sum_{i = 1}^n a_i \cdot \mu(A_i)。
$$
参考第三章的第 1 部分可证明：对任意简单函数 $f, g$ 有
$$
  \int (f + g) = \int f + \int g。
$$
显然，指示函数的积分为
$$
  \int I_A = \mu(A)。
$$

欲证等式可写为
$$
  \mu\left( \bigcup_{i = 1}^n A_i \right)
  = \sum_{k = 1}^n (-1)^{k + 1} \sum_{J \subset \{ 1, 2, \cdots, n \}, |J| = k} \mu\left( \bigcap_{j \in J} A_j \right)。
$$
这只需证明
$$
  I_{ \bigcup\limits_{i = 1}^n A_i }
  = \sum_{k = 1}^n (-1)^{k + 1} \sum_{j \subset \{ 1, 2, \cdots, n \}, |J| = k} I_{ \bigcap\limits_{j \in J} A_j } \tag{$*$}，
$$
该等式两侧都是指示函数的线性组合，在两侧取积分值后即为待证等式。

对任意 $x \in \bigcup\limits_{i = 1}^n A_i$，设 $x$ 恰属于其中 $m$ 个集合 $A_{j_1}, A_{j_2}, \cdots, A_{j_m}$，则将 $x$ 代入 $(*)$ 式的左右两侧，左侧为 $1$，右侧为
$$
  \sum_{k = 1}^m (-1)^{k + 1} \sum_{J \subset \{ j_1, j_2, \cdots, j_m \}, |J| = k} 1
  = \sum_{k = 1}^m (-1)^{k + 1} \binom{m}{k}。
$$
考虑 $(1 - 1)^m$ 的二项式展开：
$$
\begin{aligned}
  0 &= 1 + \sum_{k = 1}^m (-1)^{k} \binom{m}{k}，\\
  1 &= \sum_{k = 1}^m (-1)^{k + 1} \binom{m}{k}。
\end{aligned}
$$
这意味着对任意 $x \in \bigcup\limits_{i = 1}^n A_i$，$(*)$ 式恒成立。对任意 $x \notin \bigcup\limits_{i = 1}^n A_i$，左右两侧均为 $0$ 是显然的，于是 $(*)$ 式成立。

单调性由 $n = 2$ 情形的上述等式以及数学归纳法可证。$n = 1$ 时不等式两侧都是 $\mu(A_1)$。假设不等式对 $n$ 成立，则对于 $n + 1$ 有
$$
\begin{aligned}
  \mu\left( \bigcup_{i = 1}^{n + 1} A_i \right)
  &= \mu\left(\bigcup_{i = 1}^n A_i \right) + \mu(A_{n + 1}) - \mu\left( \bigcup_{i = 1}^n A_i \setminus A_{n + 1} \right) \\
  &\le \sum_{i = 1}^n \mu(A_i) + \mu(A_{n + 1}) \\
  &= \sum_{i = 1}^{n + 1} \mu(A_i)。
\end{aligned}
$$

> 事实上，记 $A = \bigcup\limits_{i = 1}^n A_i$，则
> $$
>   0 = (I_A - I_{A_1})(I_A - I_{A_2}) \cdots (I_A - I_{A_n})，
> $$
> 其展开式就是 $(*)$ 式。

## 7

::: exercise
设 $\mu$ 是 $\sigma$ 域 $\mathscr{F}$ 上的测度，对每个 $n = 1, 2, \cdots$ 有 $A_n \in \mathscr{F}$。证明：
$$
  \mu\left( \liminf_{n \to \infty} A_n \right) \le \liminf_{n \to \infty} \mu(A_n)。
$$
如果 $\mu\left( \bigcup\limits_{n = 1}^\infty A_n \right) < \infty$，则还有
$$
  \mu\left( \limsup_{n \to \infty} A_n \right) \ge \limsup_{n \to \infty} \mu(A_n)。
$$
:::

由测度的下连续性，
$$
\begin{aligned}
  \mu\left( \liminf_{n \to \infty} A_n \right)
  &= \mu\left( \lim_{n \to \infty} \bigcap_{m = n}^\infty A_m \right) \\
  &= \lim_{n \to \infty} \mu\left( \bigcap_{m = n}^\infty A_m \right) \\
  &\le \lim_{n \to \infty} \inf_{m \ge n} \mu(A_m) \\
  &= \liminf_{n \to \infty} \mu(A_n)。
\end{aligned}
$$
这里不等号成立是因为对任意 $m \ge n$ 有 $A_m \supset \bigcap\limits_{m = n}^\infty A_m$，故 $\mu(A_m) \ge \mu\left( \bigcap\limits_{m = n}^\infty A_m \right)$，再取下确界即得。

如果 $\mu\left( \bigcup\limits_{n = 1}^\infty A_n \right) < \infty$，则对任意正整数 $n$ 有 $\mu\left( \bigcup\limits_{m = n}^\infty A_m \right) < \infty$，由测度的上连续性，
$$
\begin{aligned}
  \mu\left( \limsup_{n \to \infty} A_n \right)
  &= \mu\left( \lim_{n \to \infty} \bigcup_{m = n}^\infty A_m \right) \\
  &= \lim_{n \to \infty} \mu\left( \bigcup_{m = n}^\infty A_m \right) \\
  &\ge \lim_{n \to \infty} \sup_{m \ge n} \mu(A_m) \\
  &= \limsup_{n \to \infty} \mu(A_n)。
\end{aligned}
$$

## 8

::: exercise
称集合系 $\mathscr{E}$ 是紧的，如对每个 $\{ A_i \in \mathscr{E}, i = 1, 2, \cdots \}$，只要 $\bigcap\limits_{i = 1}^n A_i \not= \varnothing$ 对每个 $n = 1, 2, \cdots$ 都成立，就一定可以推出 $\bigcap\limits_{i = 1}^\infty A_i \not= \varnothing$。证明：如果对域 $\mathscr{A}$ 上的非负有限可加集函数 $\mu$，存在紧集合系 $\mathscr{E} \subset \mathscr{A}$ 使对任意的 $\varepsilon > 0$ 和任给 $A \in \mathscr{A}$，存在 $B \in \mathscr{E}$ 满足 $B \subset A$ 和 $\mu(A \setminus B) < \varepsilon$，则 $\mu$ 是一个测度。
:::

紧集合系可等价表示为：若其中任意一列集合之交为空，则存在有限个集合之交为空。

> 教材的题解给出了证明步骤，这里主要做一些细节添补。主要思路：有限可加非负函数是测度，当且仅当其具有下连续性，故我们需要证明对任意 $A_n \uparrow A$ 有 $\mu(A_n) \uparrow \mu(A)$，这需要估计 $A \setminus A_n$。在紧集 $\mathscr{E}$ 上总存在元素逼近 $\mathscr{A}$ 中的元素（测度意义上），故有 $B_n$ 去逼近 $A \setminus A_n$。


对于任意 $\varnothing \not= A \in \mathscr{A}$，任取 $A_n \uparrow A$。

对任意 $\varepsilon_1 > 0$，存在 $B_1 \in \mathscr{E}$ 满足
$$
  B_1 \subset A \setminus A_1，
  \mu\bigl( (A \setminus A_1) \setminus B_1 ) < \varepsilon_1。
$$
此时有
$$
  \mu(A) = \mu(A_1 \cup B_1) + \mu\bigl( A \setminus (A_1 \cup B_1) \bigr)
  < \mu(A_1 \cup B_1) + \varepsilon_1。
$$

> $B_1$ 是对 $A \setminus A_1$ 的近似，上式表明这一近似是略微扩大的。我们希望 $B_n$ 是 $A \setminus A_n$ 的近似，如此 $B_n \downarrow \varnothing$，且由紧性可从其中抽出有限个 $B_i$ 之交为空。
> 
> 然而，上式放缩到 $A_1 \cup B_1$ 后很难再凑出一个 $A$。由于 $A_1 \cup B_1$ 是 $A$ 的近似，我们不妨直接寻找 $B_2$ 近似 $(A_1 \cup B_1) \setminus A_2$。因 $A_1 \subset A_2 \implies A_1 \subset A_2 = \varnothing$，我们只需令 $B_2$ 近似 $B_1 \setminus A_2$。

对任意 $k \ge 2$ 以及 $\varepsilon_k > 0$，存在 $B_k \in \mathscr{E}$ 满足
$$
  B_k \subset B_{k - 1} \setminus A_k，
  \mu\bigl( (B_{k - 1} \setminus A_k) \setminus B_k) < \varepsilon_k，
$$
于是
$$
\begin{aligned}
  \mu(A)
  &< \mu(A_1 \cup B_1) + \varepsilon_1 \\
  &= \mu(A_2 \cup B_2) + \mu\bigl( B_1 \setminus (A_2 \cup B_2) ) + \varepsilon_1 \\
  &< \mu(A_2 \cup B_2) + \varepsilon_1 + \varepsilon_2 \\
  &= \cdots \\
  &< \mu(A_n \cup B_n) + \varepsilon_1 + \varepsilon_2 + \cdots + \varepsilon_n。
\end{aligned}
$$
由 $B_k$ 的定义可知 $A \supset B_1 \supset B_2 \supset \cdots$，$A_k \cap B_k = \varnothing$。因 $A = \bigcup\limits_{n = 1}^\infty A_n \not= \varnothing$，对任意 $x \in A$ 至少存在一个 $k$ 使得 $x \in A_k$，因此 $x \notin B_k$，即 $x \notin B_k \supset B_{k + 1} \supset \cdots$。$x$ 是任意的，故 $\bigcap\limits_{k = 1}^\infty B_k = \varnothing$。由紧集合系定义，存在正整数 $n_0$ 使得 $\bigcap\limits_{k = 1}^{n_0} B_k = \varnothing$，进而对任意 $n \ge n_0$ 都有 $\bigcap\limits_{k = 1}^n B_k = B_n = \varnothing$。

取 $\varepsilon_n = \varepsilon / 2^n$，其中 $\varepsilon$ 是任意正数，则当 $n \ge n_0$ 时
$$
  \mu(A) < \mu(A_n) + \varepsilon。
$$
由 $A_n \supset A \implies \mu(A_n) \le \mu(A)$ 得 $0 \le \mu(A) - \mu(A_n) < \varepsilon$，故 $\mu(A_n) \to \mu(A)$。


## 9

::: exercise
设 $(X, \mathscr{F}, \mu)$ 是一测度空间。$A \in \mathscr{F}$ 称为 $\mu$ 的一个**原子**，如果 $0 < \mu(A) < \infty$ 且对任何 $B \subset A$ 和 $B \in \mathscr{F}$，或有 $\mu(B) = 0$，或有 $\mu(B) = \mu(A)$。如果测度 $\mu$ 无任何原子，称之为**缺原子的**。证明：$L$ 测度是缺原子的。
:::

> 教材的题解给出了证明步骤，这里做简要补充。$L$ 测度由基本的长度概念扩张而来，要计算 $L$ 测度，免不了将可测集拆为区间。为此，可直接将 $\R$ 拆成区间。

假设 $L$ 测度存在原子 $A$，则 $0 < \lambda(A) < \infty$。对任意正整数 $n$ 有 $\R = \bigcup\limits_{i = -\infty}^\infty (i / n, (i + 1) / n ]$，可取 $1/n < \lambda(A)$。
$$
\begin{aligned}
  \lambda(A)
  &= \lambda(A \cap \R) \\
  &= \sum_{i = -\infty}^\infty \lambda\left( A \cap \left( \frac{i}{n}, \frac{i + 1}{n} \right] \right)。
\end{aligned}
$$
因 $A \cap (i / n, (i + 1) / n] \subset A$，其 $L$ 测度值要么为 $\lambda(A)$，要么为 $0$。因 $\lambda(A) < \infty$，其中取值 $\lambda(A)$ 的集合必为有限个，不妨设为 $k$ 个。此时 $\lambda(A) = k \lambda(A)$。若 $k \ge 2$，则 $\lambda(A) = 0$，矛盾，故 $k = 1$，即恰有一个 $i_0 \in \Z$ 使得
$$
  \lambda\left( A \cap \left( \frac{i_0}{n}, \frac{i_0 + 1}{n} \right] \right) = \lambda(A)。
$$
于是
$$
\begin{aligned}
  \frac{1}{n}
  &< \lambda(A) \\
  &= \lambda\left( A \cap \left( \frac{i_0}{n}, \frac{i_0 + 1}{n} \right] \right) \\
  &\le \lambda\left( \frac{i_0}{n}, \frac{i_0 + 1}{n} \right] \\
  &= \frac{1}{n}，
\end{aligned}
$$
矛盾。

## 10

::: exercise
设 $\tau$ 是 $X$ 上的外测度。对任意给定的 $A \subset X$，令
$$
  \tau_A(D) = \tau(D \cap A), \forall D \in \mathscr{T}。
$$
证明：$\tau_A$ 还是 $X$ 上的外测度。
:::


$\tau_A(\varnothing) = \tau(\varnothing \cap A) = 0$。

设 $C, D \in \mathscr{T}$ 且 $C \subset D$，则 $C \cap A \subset D \cap A$，
$$
  \tau_A(C) = \tau(C \cap A) \le \tau(D \cap A) = \tau_A(D)。
$$

任取一列两两不交的 $D_1, D_2, \cdots \in \mathscr{T}$，
$$
\begin{aligned}
  \tau_A\left( \bigcup_{n = 1}^\infty D_n \right)
  &= \tau\left( \bigcup_{n = 1}^\infty D_n \cap A \right) \\
  &\le \sum_{n = 1}^\infty \tau(D_n \cap A) \\
  &= \sum_{n = 1}^\infty \tau_A(D_n)。
\end{aligned}
$$

综上所述 $\tau_A$ 是外测度。