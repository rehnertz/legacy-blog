---
title: 可测空间和可测映射
math: true
---

《测度论与概率论基础》第一章题解。

<!-- more -->

## 1

::: exercise
证明下列指示函数的性质：

1. $I_{A \cap B} = I_A I_B$；
2. 如果 $A \cap B = \varnothing$，则 $I_{A \cup B} = I_A + I_B$；
3. 如果 $A \supset B$，则 $I_{A \setminus B} = I_A - I_B$；
4. $I_{A \Delta B} = I_A(1 - I_B) + I_B(1 - I_A)$；
5. 如果 $\{A_n, n = 1, 2, \cdots\}$ 单调，则 $\displaystyle{I_{\lim\limits_{n \to \infty} A_n} = \lim_{n \to \infty} I_{A_n} }$；
6. $\displaystyle{I_{\liminf\limits_{n \to \infty} A_n} = \liminf_{n \to \infty} I_{A_n} }$，$\displaystyle{I_{\limsup\limits_{n \to \infty} A_n} = \limsup_{n \to \infty} I_{A_n} }$。
:::

1. 只需枚举各种情形。

|                           |  $I_A$  |  $I_B$  | $I_{A \cap B}$ | $I_A I_B$ |
| :-----------------------: | :-----: | :-----: | :------------: | :-------: |
| $x \notin A, x \notin B$  |   $0$   |   $0$   |      $0$       |    $0$    |
| $x \notin A, x \in B$     |   $0$   |   $1$   |      $0$       |    $0$    |
| $x \in A, x \notin B$     |   $1$   |   $0$   |      $0$       |    $0$    |
| $x \in A, x \in B$        |   $1$   |   $1$   |      $1$       |    $1$    |

2. 只需枚举各种情形。

|                           |  $I_A$  |  $I_B$  | $I_{A \cup B}$ | $I_A + I_B$ |
| :-----------------------: | :-----: | :-----: | :------------: | :---------: |
| $x \notin A, x \notin B$  |   $0$   |   $0$   |      $0$       |      $0$    |
| $x \notin A, x \in B$     |   $0$   |   $1$   |      $1$       |      $1$    |
| $x \in A, x \notin B$     |   $1$   |   $0$   |      $1$       |      $1$    |

3. 只需枚举各种情形。

|                           |  $I_A$  |  $I_B$  | $I_{A \setminus B}$ | $I_A - I_B$ |
| :-----------------------: | :-----: | :-----: | :-----------------: | :---------: |
| $x \notin A, x \notin B$  |   $0$   |   $0$   |         $0$         |     $0$     |
| $x \in A, x \notin B$     |   $1$   |   $0$   |         $1$         |     $1$     |
| $x \in A, x \in B$        |   $1$   |   $1$   |         $0$         |     $0$     |

4. 由 1.、2.、3. 可得

$$
\begin{aligned}
  I_{A \Delta B}
  &= I_{(A \setminus B) \cup (B \setminus A)} \\
  &= I_{(A \setminus (A \cap B)) \cup (B \setminus (A \cap B))} \\
  &= I_{A \setminus (A \cap B)} + I_{B \setminus (A \cap B)} \\
  &= I_{A} - I_{A \cap B} + I_{B} - I_{A \cap B} \\
  &= I_A - I_A I_B + I_B - I_A I_B \\
  &= I_A(1 - I_B) + I_B(1 - I_A)。
\end{aligned}
$$

5. 由于指示函数的值域是 $\{ 0, 1 \}$，
$$
\begin{aligned}
  \lim_{n \to \infty} I_{A_n}(x) = 1
  &\iff \forall \varepsilon > 0 : \exists N > 0 : \forall n > N : |I_{A_n}(x) - 1| < \varepsilon \\
  &\iff \exists N > 0 : \forall n > N : I_{A_n}(x) = 1 \\
  &\iff \exists N > 0 : \forall n > N : x \in A_n \\
  &\iff x \in \liminf_{n \to \infty} A_n = \lim_{n \to \infty} A_n \\
  &\iff I_{\lim\limits_{n \to \infty} A_n}(x) = 1。
\end{aligned}
$$

6. 首先验证 $\displaystyle{I\left( \bigcup_{k = n}^\infty A_k \right) = \sup_{k \ge n} I(A_k)}$，这只需要证明等号两侧同时取 $0$ 或同时取 $1$：
$$
\begin{aligned}
  I\left( \bigcup_{k = n}^\infty A_k \right)(x) = 0
  &\iff \forall k \ge n : x \notin A_k \\
  &\iff \forall k \ge n : I_{A_k}(x) = 0 \\
  &\iff \sup_{k \ge n} I_{A_k}(x) = 0。
\end{aligned}
$$
类似地可证明 $\displaystyle{I\left( \bigcap_{k = n}^\infty A_k \right) = \inf_{k \ge n} I(A_k)}$。

由于 $\displaystyle{\left\{ \bigcup_{k = n}^\infty A_k，n = 1, 2, \cdots \right\}}$ 与 $\displaystyle{\left\{ \bigcap_{k = n}^\infty A_k，n = 1, 2, \cdots \right\}}$ 均为单调列，依 5. 可得

$$
\begin{aligned}
  I_{\liminf\limits_{n \to \infty} A_n}
  &= I_{\lim\limits_{n \to \infty} \bigcap\limits_{k = n}^\infty A_k} 
  = \lim_{n \to \infty} I_{\bigcap\limits_{k = n}^\infty A_k} 
  = \lim_{n \to \infty} \inf_{k \ge n} I(A_k) 
  = \liminf_{n \to \infty} I(A_k)，\\
  I_{\limsup\limits_{n \to \infty} A_n}
  &= I_{\lim\limits_{n \to \infty} \bigcup\limits_{k = n}^\infty A_k} 
  = \lim_{n \to \infty} I_{\bigcup\limits_{k = n}^\infty A_k} 
  = \lim_{n \to \infty} \sup_{k \ge n} I(A_k)
  = \limsup_{n \to \infty} I(A_k)。
\end{aligned}
$$

## 2

::: exercise
设 $\{ A_n, n = 1, 2, \cdots \}$ 两两不交，证明：$\lim\limits_{n \to \infty} A_n = \varnothing$。
:::

反设存在 $x \in \limsup\limits_{n \to \infty} A_n$，则
$$
  \forall n \ge 1 : \exists k \ge n : x \in A_k。
$$
当 $n = 1$ 时，存在 $k_1 \ge 1$ 使得 $x \in A_{k_1}$。当 $n = k_1 + 1$ 时，存在 $k_2 \ge k_1 + 1$ 使得 $x \in A_{k_2}$，因此 $x \in A_{k_1} \cap A_{k_2} = \varnothing$，矛盾。

## 3

::: exercise
证明空集属于半环。
:::

设 $\mathscr{Q}$ 为半环。任取 $A \in \mathscr{Q}$，则 $A \supset \varnothing$ 且 $A \setminus \varnothing = A$ 是“有限个两两不交得集合”，因此 $\varnothing \in \mathscr{Q}$。

## 4

::: exercise
证明：如果 $\mathscr{Q}$ 是一个半环且 $A, B \in \mathscr{Q}$，则 $A \setminus B$ 可表示成 $\mathscr{Q}$ 中有限个不交集之并。
:::

因半环是 $\pi$ 系，$A \cap B \in \mathscr{Q}$。又 $A \supset A \cap B$，故而依半环定义可知 $A \setminus B = A \setminus (A \cap B)$ 能写成 $\mathscr{Q}$ 中有限个不交集之并。

## 5

::: exercise
定义
$$
  \mathscr{R}_{\R} = \bigcup_{n = 1}^\infty \set{ \bigcup_{k = 1}^n (a_k, b_k] }{ a_k, b_k \in \R, k = 1, 2, \cdots, n }。
$$
证明：$\mathscr{R}_{\R}$ 是 $\R$ 上的环。
:::

只需依次证明 $\mathscr{R}_{\R}$ 对有限并与差封闭。

任取
$$
  A = \bigcup_{i = 1}^n (a_i, b_i] \in \mathscr{R}_{\R}，
  B = \bigcup_{j = 1}^m (c_j, d_j] \in \mathscr{R}_{\R}。
$$
显然
$$
  A \cup B = \bigcup_{i = 1}^n (a_i, b_i] \cup \bigcup_{j = 1}^m (c_j, d_j]
$$
是 $n + m$ 个左开右闭区间之并，故 $A \cup B \in \mathscr{R}_{\R}$。

对于 $A \setminus B$，先考虑 $m = 1$ 的情形。对任意 $(a_i, b_i]$ 有
$$
\begin{aligned}
  (a_i, b_i] \setminus (c_1, d_1]
  &= (a_i, b_i] \cap \Bigl( (-\infty, c_1] \cup (d_1, \infty) \Bigr) \\
  &= \Bigl( (a_i, b_i] \cap (-\infty, c_1] \Bigr) \cup \Bigl( (a_i, b_i] \cap (d_1, \infty) \Bigr) \\
  &= \Bigl( a_i, \min(b_i, c_1) \Bigr] \cup \Bigl( \max(a_i, d_1), b_i \Bigr]
\end{aligned}
$$
因此
$$
  A \setminus B
  = \bigcup_{i = 1}^n \Bigl( (a_i, b_i] \setminus (c_1, d_1] \Bigr)
$$
为至多 $2n$ 个左开右闭区间之并，故而 $A \setminus B \in \mathscr{Q}_{\R}$。

对一般情形，
$$
\begin{aligned}
  A \setminus B
  &= \bigcup_{i = 1}^n \Bigl(
    (a_i, b_i] \setminus (c_1, d_1] \setminus (c_2, d_2] \setminus \cdots
  \Bigr)
\end{aligned}
$$
为至多 $2^m \cdot n$ 个左开右闭区间之并，故而 $A \setminus B \in \mathscr{Q}_{\R}$。

## 6

::: exercise
证明：如果 $\mathscr{R}$ 是一个环（或 $\sigma$ 环）而且 $X \in \mathscr{R}$，则它也是域（或 $\sigma$ 域）。
:::

环是 $\pi$ 系，故而对有限交封闭。环对差封闭，故对任意 $A \in \mathscr{R}$ 有 $A^c = X \setminus A \in \mathscr{R}$，即对补封闭，于是成为域。

将上述描述中的“环”替换为“$\sigma$ 环”依然成立。

## 7

::: exercise
证明：如果 $\mathscr{R}$ 是一个环，则 $\mathscr{F} = \mathscr{R} \cup \set{A^c}{A \in \mathscr{R}}$ 是域。
:::

显然 $\mathscr{F}$ 对补封闭。又 $X = A \cup A^c \in \mathscr{F}$，只需证明 $\mathscr{F}$ 对有限交封闭。

对任意 $A, B \in \mathscr{F}$，做分类讨论：

- 若 $A, B \in \mathscr{R}$，因环对有限交封闭，$A \cap B \in \mathscr{R} \subset \mathscr{F}$；
- 若 $A \in \mathscr{R}$ 且 $B^c \in \mathscr{R}$，因环对差运算封闭，$A \cap B = A \setminus B^c \in \mathscr{R} \subseteq \mathscr{F}$；
- 若 $A^c, B^c \in \mathscr{R}$，因环对有限并封闭，$A^c \cup B^c \in \mathscr{R}$，故而 $A \cap B = (A^c \cup B^c)^c \in \set{A^c}{A \in \mathscr{F}} \subset \mathscr{F}$。

## 8

::: exercise
证明：如果域对可列不交运算是封闭的，则它是 $\sigma$ 域。
:::

欲证域是 $\sigma$ 域，只需证明其对可列交封闭。对任意一列域中的集合 $\{A_n, n = 1, 2, \cdots\}$，定义
$$
  A^*_n = \begin{cases}
    A_1，& n = 1，\\
    A_n \cap A_{n - 1}^c \cap A_{n - 2}^c \cap \cdots \cap A_1^c，& n \ge 2。
  \end{cases}
$$
只需证明 $\bigcup\limits_{n = 1}^\infty A_n = \bigcup\limits_{n = 1}^\infty A^*_n$ 且 $i \not= j \implies A_i \cap A_j = \varnothing$。

$A_n^* \subset A_n$ 是显然的，故而 $\bigcup\limits_{n = 1}^\infty A_n^* \subset \bigcup\limits_{n = 1}^\infty A_n$，下面证明反向的包含关系。

对任意 $x \in \bigcup\limits_{n = 1}^\infty A_n$，存在某个指标 $k$ 使得 $x \in A_k$。若 $x \in A_1$ 则 $x \in A_1 \subset \bigcup\limits_{n = 1}^\infty A_n^*$。若 $x \notin A_1$，取
$$
  k_0 = \min_k\set{k}{x \in A_k} \ge 2，
$$
则 $x \in A_{k_0}$ 且 $x \notin A_1, A_2, \cdots, A_{k_0 - 1}$，即 $x \in A_{k_0}^* \subset \bigcup\limits_{n = 1}^\infty A_n^*$。

对任意指标 $i \not= j$，不妨设 $i < j$，则
$$
  A_i^* \cap A_j^* = A_i \cap A_1 \cap A_2^c \cap \cdots \cap A_i^c \cap \cdots \cap A_j^c = \varnothing。
$$

::: tip
我们称集合列 $\{A_n^*\}$ 为 $\{A_n\}$ 的**不交化**。
:::

## 9

::: exercise
定义
$$
  \mathscr{Q}_{\R} = \set{ (a, b] }{ a, b, \in \R }。
$$
证明：

1. $\mathscr{Q}_{\R}$ 是 $\R$ 上的半环；
2. $\mathscr{Q} = \set{ (a, b), (a, b], [a, b), [a, b] }{ a, b \in \R, a \le b}$ 是 $\R$ 上的半环；
3. 所有开区间组成的集合系 $\mathscr{O}_{\R} = \set{(a, b)}{a, b \in \R, a \le b}$ 不是 $\R$ 上的半环；
4. $\sigma(\mathscr{Q}_{\R}) = \sigma(\mathscr{O}_{\R})$
:::

1. 对任意 $(a, b], (c, d] \in \mathscr{Q}_{\R}$，
$$
  (a, b] \cap (c, d] = \Bigl( \max(a, c), \min(b, d) \Bigr] \in \mathscr{Q}_{\R}。
$$
若 $(a, b] \supset (c, d]$，则
$$
  (a, b] \setminus (c, d] = (a, c] \cup (d, b]。
$$
故 $\mathscr{Q}_{\R}$ 是 $\R$ 上的半环。

2. 对任意类型的区间 $\langle a, b \rangle$ 与 $\langle c, d \rangle$ 有
$$
  \langle a, b \rangle \cap \langle c, d \rangle = \Bigl\langle \max(a, c), \min(b, d) \Bigr\rangle \in \mathscr{Q}，
$$
其中等号右侧的 $\langle \cdot, \cdot \rangle$ 区间取决于等号左侧的区间（无论如何都存在这样的区间）。

若 $\langle a, b \rangle \supset \langle c, d \rangle$，则同样存在区间使得
$$
  \langle a, b \rangle \setminus \langle c, d \rangle = \langle a, c \rangle \cup \langle d, b \rangle。
$$

3. $(0, 4), (1, 2) \in \mathscr{O}_{\R}$，但
$$
  (0, 4) \setminus (1, 2) = (0, 1] \cup [2, 4)
$$
不是开区间之并。

4. 显然 $\mathscr{O}_{\R} \subset \mathscr{Q}_{\R}$，故 $\sigma(\mathscr{O}_{\R}) \subset \sigma(\mathscr{Q}_{\R})$。为证明 $\sigma(\mathscr{Q}_{\R}) \subset \sigma(\mathscr{O}_{\R})$，只需证明 $\mathscr{Q}_{\R} \subset \sigma(\mathscr{O}_{\R})$。我们对区间类型做讨论。

对任意 $(a, b) \in \mathscr{Q}_{\R}$ 有 $(a, b) \in \sigma(\mathscr{O}_{\R})$。

对任意 $(a, b] \in \mathscr{Q}_{\R}$ 有
$$
  (a, b] = \bigcap_{n = 1}^\infty \left( a, b + \frac{1}{n} \right) \in \sigma(\mathscr{O}_{\R})。
$$

对任意 $[a, b) \in \mathscr{Q}_{\R}$ 有
$$
  [a, b) = \bigcap_{n = 1}^\infty \left( a - \frac{1}{n}, b \right) \in \sigma(\mathscr{O}_{\R})。
$$

对任意 $[a, b] \in \mathscr{Q}_{\R}$ 有
$$
  [a, b] = \bigcap_{n = 1}^\infty \left( a - \frac{1}{n}, b + \frac{1}{n} \right) \in \sigma(\mathscr{O}_{\R})。
$$

## 10

::: exercise
设 $\{\varnothing, E_n, n = 1, 2, \cdots\}$ 是 $X$ 中两两不交的集合。证明它是一个半环。求这个半环生成的 $\sigma$ 域。
:::

::: tip
本题的题目疑似有误，解题步骤仅供参考。
:::

记 $\mathscr{Q} = \{\varnothing, E_n, n = 1, 2, \cdots\}$。对任意 $E_i, E_j \in \mathscr{Q}$，
$$
E_i \cap E_j = \begin{cases}
  E_i，& i = j，\\
  \varnothing，& i \not= j
\end{cases}
\in \mathscr{Q}。
$$
若 $E_i \supset E_j$，则
$$
E_i \setminus E_j = \begin{cases}
  \varnothing，& i = j，\\
  E_i，& i \not= j
\end{cases}
\in \mathscr{Q}。
$$
故 $\mathscr{Q}$ 是半环。

定义
$$
  \mathscr{F} = \set{ \bigcup_{i \in I} E_i, \left( \bigcup_{i \in I} E_i \right)^c }{ I \subset \{ 1, 2, 3, \cdots \}  } \cup \{ \varnothing, X \}，
$$
我们证明 $\sigma(\mathscr{Q}) = \mathscr{F}$。由于 $\sigma$ 域对有限与可列并与补封闭，$\mathscr{F} \subset \sigma(\mathscr{Q})$。欲证 $\sigma(\mathscr{Q}) \subset \mathscr{F}$，由于显然有 $\mathscr{Q} \subset \mathscr{F}$，只需证 $\mathscr{F}$ 是 $\sigma$ 域。

对任意 $A \in \mathscr{F}$，$A^c \in \mathscr{F}$ 是显然的。

对任意一列 $A_1, A_2, \cdots \in \mathscr{F}$，下证 $\bigcup\limits_{n = 1}^\infty A_n \in \mathscr{F}$。若存在 $A_n = X$ 则结论显然。若存在 $A_n = \varnothing$ 则删去之不影响结论，故可设 $A_n \not= \varnothing，X$。

若 $A_n$ 均具有形式 $A_n = \bigcup\limits_{i \in I_n} E_i$，则
$$
  \bigcup_{n = 1}^\infty A_n
  = \bigcup_{i \in I_1 \cup I_2 \cup \cdots} E_i
  \in \mathscr{F}。
$$

若 $A_n$ 均具有形式 $A_n = \left( \bigcup\limits_{i \in I_n} E_i \right)^c$，则
$$
    \bigcup_{n = 1}^\infty A_n
    = \left( \bigcup_{i \in I_1 \cap I_2 \cap \cdots} E_i \right)^c
$$

若 $A_n$ 中包含了两种形式，由上可知只需要证明
$$
  \left( \bigcup_{i \in I} E_i \right) \cup \left( \bigcup_{j \in J} E_j \right)^c \in \mathscr{F}。
$$
而
$$
  \left( \bigcup_{i \in I} E_i \right) \cup \left( \bigcup_{j \in J} E_j \right)^c
  = \left( \bigcup_{i \in J \setminus I} E_i \right)^c \in \mathscr{F}。
$$

## 11

::: exercise
设 $X$ 是一可列集。令 $\mathscr{E} = \set{ \{ x \} }{ x \in X}$。求 $\sigma(\mathscr{E})$。
:::

设 $\mathscr{P}(X)$ 为 $X$ 的幂集，我们证明 $\mathscr{P}(X) = \sigma(\mathscr{E})$。$\sigma(\mathscr{E}) \subset \mathscr{P}(X)$ 平凡成立，我们只需证明 $\mathscr{P}(X) \subset \sigma(\mathscr{E})$。

不妨设 $X = \{ x_1, x_2, \cdots \}$。由于可列集的子集或为有限集，或为可列集，因此任意 $A \in \mathscr{P}(X)$ 均具有形式
$$
  A = \bigcup_{i \in I} \{ x_i \}，I \subset \{ 1, 2, \cdots \}。
$$
因此 $A \in \sigma(\mathscr{E})$。

## 12

::: exercise
设 $\mathscr{Q}$ 是一个半环。证明 $\sigma(\mathscr{Q}) = \sigma(r(\mathscr{Q}))$。
:::

显然 $\mathscr{Q} \subset r(\mathscr{Q})$，取 $\sigma$ 域后得 $\sigma(\mathscr{Q}) \subset \sigma(r(\mathscr{Q}))$。

教材中定理 $1.3.2$ 证明了
$$
  r(\mathscr{Q}) = \bigcup_{n = 1}^\infty \set{ \bigcup_{k = 1}^n A_k }{ A_k \in \mathscr{Q}，k = 1, 2, \cdots \text{ 两两不交} }。
$$
因此 $r(\mathscr{Q})$ 中的元素是 $\mathscr{Q}$ 中元素的有限并，而 $\sigma$ 域对有限并封闭，因此 $r(\mathscr{Q}) \subset \sigma(\mathscr{Q})$。两侧取 $\sigma$ 域得 $\sigma(r(\mathscr{Q})) \subset \sigma(\mathscr{Q})$。

<!-- 
## 13

::: exercise
设 $A$ 
::: -->
