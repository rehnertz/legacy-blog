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
  = \lim_{n \to \infty} \inf_{k \ge n} I_{A_k} 
  = \liminf_{n \to \infty} I_{A_k}，\\
  I_{\limsup\limits_{n \to \infty} A_n}
  &= I_{\lim\limits_{n \to \infty} \bigcup\limits_{k = n}^\infty A_k} 
  = \lim_{n \to \infty} I_{\bigcup\limits_{k = n}^\infty A_k} 
  = \lim_{n \to \infty} \sup_{k \ge n} I_{A_k}
  = \limsup_{n \to \infty} I_{A_k}。
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


## 13

::: exercise
设 $A$ 是 $X$ 中的非空集合，$\mathscr{F}$ 是 $X$ 上的 $\sigma$ 域。试证明：$(A, A \cap \mathscr{F})$ 是一个可测空间，这里，对任意集合系 $\mathscr{E}$记
$$
  A \cap \mathscr{E} = \set{ A \cap E }{ E \in \mathscr{E} }。
$$
:::

1. $A = A \cap X \in A \cap \mathscr{F}$。

2. 设 $B \in A \cap \mathscr{F}$，则存在 $C \in \mathscr{F}$ 使得 $B = A \cap C$，从而
$$
  A \setminus B = A \setminus (A \cap C) = A \setminus C = A \cap C^c \in A \cap \mathscr{F}，
$$
即 $B$ 相对于 $A$ 的补集在 $A \cap \mathscr{F}$ 中。

3. 设 $B_1, B_2, \cdots \in A \cap \mathscr{F}$，则存在 $C_1, C_2, \cdots \in \mathscr{F}$ 使得 $B_n = A \cap C_n$，从而
$$
\begin{aligned}
  \bigcup_{n = 1}^\infty B_n
  &= \bigcup_{n = 1}^\infty (A \cap C_n) \\
  &= A \cap \bigcup_{n = 1}^\infty C_n \\
  &\in A \cap \mathscr{F}。
\end{aligned}
$$

## 14

::: exercise
设 $\varnothing \not= A \subset X$，$\mathscr{E}$ 是 $X$ 上的集合系。试问 $m(A \cap \mathscr{E}) = A \cap m(\mathscr{E})$ 是否成立？
:::

不一定成立。设 $A = \left( \dfrac{1}{2}, 2 \right)$，
$$
  \mathscr{E} = \set{ \left( \frac{1}{n}, 1 + \frac{1}{n} \right) }{ n = 1, 2, \cdots }。
$$
由于 $\mathscr{E}$ 中的单调集合列只可能是常列，$\mathscr{E}$ 本身平凡成为单调系，即 $\mathscr{E} = \sigma(\mathscr{E})$。一方面
$$
  \left( \frac{1}{2}, 1 \right]
  = A \cap \bigcup_{n = 1}^\infty \left( \frac{1}{n}, 1 + \frac{1}{n} \right)
  \in m(A \cap \mathscr{E})，
$$
另一方面
$$
  A \cap m(\mathscr{E}) = \left\{ \left(\frac{1}{2}, 2\right) \right\} \cup \set{ \left( \frac{1}{n}, 1 + \frac{1}{n} \right) }{ n = 2, 3, \cdots }
  \not\ni \left( \frac{1}{2}, 1 \right]，
$$
故 $m(A \cap \mathscr{E}) \not= A \cap m(\mathscr{E})$。

## 15

::: exercise
证明：定理 1.3.3 等价于推论 1.3.4；定理 1.3.5 等价于推论 1.3.6。

定理 1.3.3：如果 $\mathscr{A}$ 是域，则 $\sigma(\mathscr{A}) = m(\mathscr{A})$。

推论 1.3.4：如果 $\mathscr{A}$ 是域，$\mathscr{M}$ 是单调系，则
$$
  \mathscr{A} \subset \mathscr{M} \implies \sigma(\mathscr{A}) \subset \mathscr{M}。
$$

定理 1.3.5：如果 $\mathscr{P}$ 是 $\pi$ 系，则 $\sigma(\mathscr{P}) = \ell(\mathscr{P})$。

推论 1.3.6：如果 $\mathscr{P}$ 是 $\pi$ 系，$\mathscr{L}$ 是 $\lambda$ 系，则
$$
  \mathscr{P} \subset \mathscr{L} \implies \sigma(\mathscr{P}) \subset \mathscr{L}。
$$
:::

1.3.3 $\implies$ 1.3.4：因 $m(\mathscr{A})$ 是包含 $\mathscr{A}$ 最小的单调系，$\mathscr{M} \supset \mathscr{A}$，故而 $\sigma(\mathscr{A}) = m(\mathscr{A}) \subset \mathscr{M}$。

1.3.4 $\implies$ 1.3.3：$\sigma$ 域是单调系，故而 $\sigma(\mathscr{A}) \supset m(\mathscr{A})$。又由假设 $\mathscr{A} \subset m(\mathscr{A}) \implies \sigma(\mathscr{A}) \subset m(\mathscr{A})$。

1.3.5 $\iff$ 1.3.6 与上述证明步骤完全一致，只需将单调系改成 $\lambda$ 系。

## 16

::: exercise
证明命题 1.4.1：集合的原像有下列性质（其中 $f : X \to Y$，$T$ 是任意指标集）：
$$
\begin{aligned}
  & f^{-1}\varnothing = \varnothing；\quad f^{-1} Y = X；\\
  & B_1 \subset B_2 \implies f^{-1} B_1 \subset f^{-1} B_2；\\
  & (f^{-1} B)^c =f^{-1} B^c，\forall B \subset Y；\\
  & f^{-1} \bigcup_{t \in T} A_t = \bigcup_{t \in T} f^{-1} A_t，\forall \{ A_t \subset Y, t \in T \}；\\
  & f^{-1} \bigcap_{t \in T} A_t = \bigcap_{t \in T} f^{-1} A_t，\forall \{ A_t \subset Y, t \in T \}。
\end{aligned}
$$
:::

$f^{-1}\varnothing = \varnothing$ 与 $f^{-1} Y = X$ 平凡成立。

当 $B_1 \subset B_2$ 时，对任意 $x \in f^{-1}B_1$，存在对应的 $y \in B_1$ 使得 $f(x) = y$。又 $y \in B_2$，故而 $x \in f^{-1}B_2$，即 $f^{-1}B_1 \subset f^{-1}B_2$。

$$
\begin{aligned}
  (f^{-1} B)^c
  &= \set{x \in X}{ f(x) \not= y, y \in B }，\\
  &= \set{x \in X}{f(x) = y', y' \in B^c}，\\
  &= f^{-1} B^c。
\end{aligned}
$$

$$
\begin{aligned}
  f^{-1} \bigcup_{t \in T} A_t
  &= \set{x \in X}{ f(x) = y, y \in \bigcup_{t \in T} A_t } \\
  &= \set{x \in X}{\exists t \in T : f(x) \in A_t } \\
  &= \set{x \in X}{\exists t \in T : x \in f^{-1} A_t} \\
  &= \bigcup_{t \in T} f^{-1}A_t。
\end{aligned}
$$

$$
\begin{aligned}
  f^{-1} \bigcap_{t \in T} A_t
  &= \set{x \in X}{ f(x) = y, y \in \bigcap_{t \in T} A_t } \\
  &= \set{x \in X}{\forall t \in T : f(x) \in A_t } \\
  &= \set{x \in X}{\forall t \in T : x \in f^{-1} A_t} \\
  &= \bigcap_{t \in T} f^{-1}A_t。
\end{aligned}
$$

## 17

::: exercise
设 $D$ 是 $\R$ 中的可数稠集。证明定理 1.4.6 中把“$\forall a \in \R$”改为“$\forall a \in D$”以后，结论依然成立，即下列说法等价：

1. $f$ 是 $(X, \mathscr{F})$ 上的可测函数（或随机变量）；
2. $\{ f < a \} \in \mathscr{F}, \forall a \in D$；
3. $\{ f \le a \} \in \mathscr{F}, \forall a \in D$；
4. $\{ f > a \} \in \mathscr{F}, \forall a \in D$；
5. $\{ f \ge a \} \in \mathscr{F}, \forall a \in D$。
:::

只需证明
$$
\begin{aligned}
  \mathscr{B}_{\R}
  &= \sigma\set{(-\infty, a)}{a \in D} \\
  &= \sigma\set{(-\infty, a]}{a \in D} \\
  &= \sigma\set{(a, \infty)}{a \in D} \\
  &= \sigma\set{[a, \infty)}{a \in D}，
\end{aligned}
$$
其中 $a \in D$。

本教材对实数集上的 Borel 集定义为 $\mathscr{B}_{\R} = \sigma(\mathscr{Q}_{\R})$，其中半环 $\mathscr{Q}_{\R}$ 为
$$
  \mathscr{Q}_{\R} = \set{ (a, b] }{a, b \in \R}。
$$
在后文提到 $\mathscr{B}_{\R} = \sigma(\mathscr{O}_{\R})$，其中 $\mathscr{O}_{\R}$ 由 $\R$ 的标准拓扑中的开集组成（故 $\mathscr{B}_{\R}$ 由全体开区间生成）。这里我们选择基于半环的定义，证明 $(a, b]$ 可由上述四种无穷区间得到。

-----

对任意 $a \in \R$ 和正整数 $n$，因 $D$ 在 $\R$ 中稠密，存在 $d_n \in D$ 使得
$$
  \left| d_n - \left( a - \frac{1}{n} \right) \right| < \frac{1}{2n}
  \implies -\frac{3}{2n} < d_n - a < -\frac{1}{n}。
$$
如此可取得数列 $\{ d_n \in D, n = 1, 2, \cdots \}$ 使得 $d_n \to a$ 且 $d_n < a$。定义 $d_n^* = \max\limits_{1 \le k \le n} d_n$，则得到 $d_n^* \uparrow a$ 且 $d_n^* \not= a$。

类似地，依
$$
  \left| d_n - \left( a + \frac{1}{n} \right) \right| < \frac{1}{2n}
  \implies \frac{1}{2n} < d_n - a < \frac{3}{2n}
$$
可取得数列 $d_n^* \downarrow a$ 且 $d_n^* \not= a$。

-----

对任意 $a, b \in \R$，取 $D$ 中的序列 $d_n \downarrow a$、$d_n' \downarrow b$ 且 $d_n \not= a$，$d_n' \not= b$，则
$$
\begin{aligned}
  (a, b]
  &= \Bigl( (-\infty, a] \cup (b, \infty) \Bigr)^c \\
  &= \Bigl( (-\infty, a] \cup (-\infty, b]^c \Bigr)^c \\
  &= \left( \bigcap_{n = 1}^\infty (-\infty, d_n) \cup \left( \bigcap_{n = 1}^\infty (-\infty, d_n') \right)^c \right)^c \\
  &\in \sigma\set{(-\infty, a)}{a \in D}，
\end{aligned}
$$
于是
$$
\begin{aligned}
  \mathscr{Q}_{\R} &\subset \sigma\set{(-\infty, a)}{a \in D}，\\
  \mathscr{B}_{\R} = \sigma(\mathscr{Q}_{\R}) &\subset \sigma\set{(-\infty, a)}{a \in D}。
\end{aligned}
$$
对于 $a \in D$，
$$
\begin{aligned}
  (-\infty, a)
  = \bigcup_{n = 1}^\infty \left( -n, a - \frac{1}{n} \right]
  &\in \mathscr{B}_{\R}，\\
  \sigma\set{(-\infty, a)}{a \in D} &\subset \mathscr{B}_{\R}，
\end{aligned}
$$
综上所述 $\sigma\set{(-\infty, a)}{a \in D} = \mathscr{B}_{\R}$。

类似地有
$$
\begin{aligned}
  (a, b] &= \left( \bigcap_{n = 1}^\infty (-\infty, d_n] \cup \left( \bigcap_{n = 1}^\infty (-\infty, d_n'] \right)^c \right)^c \in \sigma\set{(-\infty, a]}{a \in D}，\\
  (a, b] &= \left( \left( \bigcup_{n = 1}^\infty (d_n, \infty) \right)^c \cup \bigcup_{n = 1}^\infty (d_n', \infty) \right)^c \in \sigma\set{(a, \infty)}{a \in D}，\\
  (a, b] &= \left( \left( \bigcup_{n = 1}^\infty [d_n, \infty) \right)^c \cup \bigcup_{n = 1}^\infty [d_n', \infty) \right)^c \in \sigma\set{[a, \infty)}{a \in D}，
\end{aligned}
$$
可证其余等式。

## 18

::: exercise
证明：对任何 $a, b \in \overline{\R}$ 和任何 $A, B \in \mathscr{F}$，只要 $a + b$ 有意义，则 $a I_A + b I_B$ 是可测函数。
:::

$$
  f := a I_A + b I_B = a I_{A \setminus B} + b I_{B \setminus A} + (a + b) I_{A \cap B}，
$$

右侧表达式是有意义的，而所有形如 $a I_A$ 的函数都是可测函数，故而 $f$ 为有限个可测函数之和是可测函数。

## 19

::: exercise
如果 $f$ 是可测空间 $(X, \mathscr{F})$ 上的可测函数，则它是简单函数当且仅当其值域是有限个实数组成之集。
:::

若 $f$ 是简单函数
$$
  f = \sum_{i = 1}^n a_i I_{A_i}，
$$
其中 $A_1, A_2, \cdots, A_n$ 是 $X$ 的有限可测分割，则 $f$ 的值域是 $\{ a_1, a_2, \cdots, a_n \}$ 是有限个实数组之集。

若 $f$ 的值域是 $\{ a_1, a_2, \cdots, a_n \}$，则
$$
  f = \sum_{i = 1}^n a_i I_{ \{ f = a_i \} }
$$
是简单函数，这里有限可测分割集为
$$
  \{ f = a_1 \}, \{ f = a_2 \}, \cdots, \{ f = a_n \}, X \setminus \bigcup_{i = 1}^n \{ f = a_i \}。
$$

## 20

::: exercise
设 $A_1, \cdots, A_n$ 是空间 $X$ 的一个有限分割。令 $\mathscr{F} = \sigma(A_1, \cdots, A_n)$，求 $(X, \mathscr{F})$ 上的全体可测函数。
:::

依 11 题的证明，
$$
  \mathscr{F} = \set{ \bigcup_{i = 1}^m A_i }{ m = 1, 2, \cdots, n}。
$$
易证对任意 $A \in \mathscr{F}$，要么 $A \cap A_i = A_i$，要么 $A \cap A_i = \varnothing$。

若 $f$ 是 $(X, \mathscr{F})$ 上的可测函数，我们证明其在 $A_i$ 上为常值函数。

若存在 $a_1, a_2 \in A_i$ 使得 $f(a_1) \not= f(a_2)$，不妨设 $f(a_1) < f(a_2)$，则对任意 $\alpha \in \bigl( f(a_1), f(a_2) \bigr)$ 有
$$
\begin{aligned}
  a_1 &\in \{ f \le \alpha \}，\\
  a_2 &\notin \{ f \le \alpha \}，
\end{aligned}
$$
因此 $a_1 \in \{ f \le \alpha \} \cap A_i \not= A_i$，从而 $\{ f \le \alpha \} \notin \mathscr{F}$，这与 $f$ 可测矛盾。

综上所述，任何可测函数在 $A_i$ 上都是常值函数，设为常值 $a_i$，于是
$$
  f = \sum_{i = 1}^n a_i I_{A_i} \tag{$*$}，
$$
这是简单函数。

反之，任何具有 $(*)$ 形式的简单函数都是可测函数，因为
$$
  \{ f \le \alpha \}
  = \set{ \bigcup_{i \in I} A_i }{ I \subset \{ 1, 2, \cdots, n \}, \forall i \in I : a_i \le \alpha } \in \mathscr{F}，
$$
故 $\mathscr{F}$ 上的可测函数由全体形如 $(*)$ 的简单函数构成。

## 21

::: exercise
证明：实轴上的实值单调函数是 $(\R, \mathscr{B}_{\R})$ 上的随机变量。
:::


对任意 $a \in \R$，$\{ f \le a \} = \varnothing$ 时 $\{ f \le a \} \in \mathscr{B}_{\R}$。下设 $\{f \le a \} \not= \varnothing$。

令 $x_0 = \sup\{ f \le a \}$，则对任意 $x < x_0$ 有 $x \in \{ f \le a\}$，对任意 $x > x_0$ 有 $x \notin \{ f \le a\}$，于是
$$
\{ f \le a \} =
\begin{cases}
  (-\infty, x_0)，& x_0 \notin \{ f \le a \}，\\
  (-\infty, x_0]，& x_0 \in \{ f \le a\}
\end{cases}
\in \mathscr{B}_{\R}。
$$

## 22

::: exercise
证明：实轴上的实值连续函数是 $(\R, \mathscr{B}_{\R})$ 上的随机变量。
:::

连续函数将开集逆映射为开集，故而对任意 $a \in \R$ 有 $\{ f < a\} = f^{-1}(-\infty, a)$ 是开集，属于 $\mathscr{B}_{\R}$。

## 23

::: exercise
设 $(X, \mathscr{F})$ 和 $(Y, \mathscr{S})$ 是两可测空间，$f$ 是 $X$ 到 $Y$ 的映射，$A_1, \cdots, A_n$ 是 $(X, \mathscr{F})$ 的一个有限可测分割。定义 $A_i$ 到 $Y$ 的映射
$$
  f_i(x) = f(x)，\forall x \in A_i。
$$
证明：$f$ 是 $(X, \mathscr{F})$ 到 $(Y, \mathscr{S})$ 的可测映射当且仅当对每个 $i = 1, \cdots, n$，$f_i$ 都是 $(A_i, A_i \cap \mathscr{F})$ 到 $(Y, \mathscr{S})$ 的可测映射。
:::

对任意 $S \in \mathscr{S}$，易证
$$
  f^{-1}S
  = \bigcup_{i = 1}^n f_i^{-1} S。
$$
这里 $f_i^{-1}S \subset A_i$，上述并是不交并。

若 $f$ 可测，$f^{-1}S \in \mathscr{F}$，从而对任意 $i$ 有
$$
\begin{aligned}
  A_i \cap \mathscr{F}
  &\ni A_i \cap f^{-1}S \\
  &= \bigcup_{i = 1}^n (A_i \cap f_i^{-1} S) \\
  &= f_i^{-1}S，
\end{aligned}
$$
即 $f_i$ 可测。

若对任意 $i$ 均有 $f_i$ 可测，即 $f_i^{-1}S \in A_i \cap \mathscr{F}$，则
$$
  f^{-1}S
  \in \bigcup_{i = 1}^n (A_i \cap \mathscr{F})
  = \mathscr{F}，
$$
即 $f$ 可测。

## 24

::: exercise
设 $\{ f_n, n = 1, 2, \cdots \}$ 是可测空间 $(X, \mathscr{F})$ 上的可测函数列。证明：$\left\{ \lim\limits_{n \to \infty} f_n \,\exists \right\} \in \mathscr{F}$；又对 $(X, \mathscr{F})$ 上的任一可测函数 $f$，$\left\{ \lim\limits_{n \to \infty} f_n = f \right\} \in \mathscr{F}$。
:::

$$
  \left\{ \lim_{n \to \infty} f_n \,\exists \right\}
  = \left\{ \limsup_{n \to \infty} f_n = \liminf_{n \to \infty} f_n \right\}。
$$
因 $\limsup\limits_{n \to \infty} f_n$ 与 $\liminf\limits_{n \to \infty} f_n$ 均为可测函数，故而 $\left\{ \lim\limits_{n \to \infty} f_n \,\exists \right\} \in \mathscr{F}$。

$$
\begin{aligned}
  \left\{ \lim_{n \to \infty} f_n = f \right\} \cap \{ f = -\infty \}
  &= \left\{ \lim_{n \to \infty} f_n = -\infty \right\} \in \mathscr{F}，\\
  \left\{ \lim_{n \to \infty} f_n = f \right\} \cap \{ f = \infty \}
  &= \left\{ \lim_{n \to \infty} f_n = \infty \right\} \in \mathscr{F}，\\
  \left\{ \lim_{n \to \infty} f_n = f \right\} \cap \{ |f| < \infty \}
  &= \bigcap_{k = 1}^\infty \bigcup_{N = 1}^\infty \bigcap_{n = N}^\infty \left\{ |f_n - f| < \frac{1}{k} \right\} \in \mathscr{F}，
\end{aligned}
$$
故而 $\left\{ \lim\limits_{n \to \infty} f_n = f \right\} \in \mathscr{F}$。

## 25

::: exercise
设 $f_1, \cdots, f_n$ 是可测空间 $(X, \mathscr{F})$ 上的随机变量。对每个 $x \in X$，把 $f_1(x), \cdots, f_n(x)$ 按从小到大的顺序排列成 $f_{(1)}(x) \le \cdots \le f_{(n)}(x)$（如果有两个相等的，那就随便规定它们的顺序）。这样定义出来的函数 $f_{(1)}, \cdots, f_{(n)}$ 称为 $f_1, \cdots, f_n$ 的**次序统计量**。证明：对任何 $k = 1, \cdots, n$，$f_{(k)}$ 还是可测空间 $(X, \mathscr{F})$ 上的随机变量。
:::


依 $f_{(k)}$ 的定义，对任意 $a \in \R$，$f_{(k)}(x) \le a$ 意味着 $f_1(x), \cdots, f_n(x)$ 中第 $k$ 小的变量不超过 $a$，故其中不超过 $a$ 的量至少有 $k$ 个，可得
$$
  \{ f_{(k)} \le a \}
  = \left\{ \sum_{i = 1}^n I_{\{ f_i \le a \}} \ge k \right\}.
$$
简单函数是可测的，故 $f_{(k)}$ 可测。