# Tính đo được

> [!def] ($\mathfrak{A}$-measureable)
> Let $(X,\mathfrak{A})$ be an arbitrary measureable space and let $D \in \mathfrak{A}$. An extended real-valued function $f$ defined on $D$ is said to be $\mathfrak{A}$-measureable on $D$ if it satisfies the condition that $\{ x \in D: f(x) \le \alpha\} \in \mathfrak{A}$, that is, $f^{-1}([-\infty, \alpha]) \in \mathfrak{A}$ for every $\alpha \in \mathbb{R}$.

> [!def] ($\mathfrak{A /B}$-measureable)
> Let $(X, \mathfrak{A})$ and $(Y, \mathfrak{B})$ be measureable spaces. A mapping $f$ of a set $D \subset X$ into $Y$ is $\mathfrak{A}/\mathfrak{B}$-measureable if $f^{-1}(\mathfrak{B})\subset \mathfrak{A}$. This implies that $D = f^{-1}(Y) \in \mathfrak{A}$. 

> [!rem] (Core properties of $\sigma$-algebra)
> 1. Closure under complementation: If $A \in \mathfrak{A}$, then its complement $D \setminus A \in \mathfrak{A}$.
> 2. Closure under countable intersection: If a sequence $A_{n} \in \mathfrak{A}$, then their countable intersection $\bigcap_{n \in \mathbb{N}} A_{n} \in \mathfrak{A}$.

> [!lem]
>Let $(X, \mathfrak{A})$ be a measurable space and $f$ be an extended real-valued function defined on $D \in \mathfrak{A}$. Then the following conditions are all equivalent: 
>
> (i) $\{x \in D : f(x) \le \alpha\} \in \mathfrak{A}$, that is, $f^{-1}([-\infty, \alpha]) \in \mathfrak{A}$, for every $\alpha \in \mathbb{R}$,
> (ii) $\{x \in D : f(x) > \alpha\} \in \mathfrak{A}$, that is, $f^{-1}((\alpha, \infty]) \in \mathfrak{A}$, for every $\alpha \in \mathbb{R}$,
> (iii) $\{x \in D : f(x) \ge \alpha\} \in \mathfrak{A}$, that is, $f^{-1}([\alpha, \infty]) \in \mathfrak{A}$, for every $\alpha \in \mathbb{R}$,
> (iv) $\{x \in D : f(x) < \alpha\} \in \mathfrak{A}$, that is, $f^{-1}([-\infty, \alpha)) \in \mathfrak{A}$, for every $\alpha \in \mathbb{R}$.

> [!prf]
> Ta sẽ chứng minh 4 điều kiện này theo sơ đồ (iv) $\implies$ (i) $\iff$ (ii) $\implies$ (iii) $\iff$ (iv), có hai cách (nhóm) chứng minh chính:
> 1. Dùng phần bù (mệnh đề (i) và (ii))

> [!thm]
> Let $(X,\mathfrak{A})$ be a measure space and let $f$ be a real-valued function on a set $D \in \mathfrak{A}$. Consider the measureable space $(\mathbb{R}, \mathfrak{B}(\mathbb{R}))$.
> 
> a) $f: D \to \mathbb{R}$ is $\mathfrak{A}$-measureable on $D$ if and only if $f$ is a $\mathfrak{A} /\mathfrak{B}(\mathbb{R})$-measureable mapping of $D$ into $\mathbb{R}$, that is, $f^{-1}(\mathfrak{B}(\mathbb{R}))\subset \mathfrak{A}$.











$\pi$
