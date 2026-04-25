[
    // Math mode
    {trigger: "mk", replacement: "$$0$", options: "tA"},
    {trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
    {trigger: /(?<=\S.*)dm/, replacement: "\n$$\n$0\n$$", options: "tAw", priority: 1},
    {trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA"},
    {trigger: "al", replacement: "\\begin{align*}\n$0\n\\end{align*}", options: "m"},
    {trigger: "aal", replacement: "\\begin{align}\n$0\n\\end{align}", options: "m"},
    {trigger: "==", replacement: "&= ", options: "mA"},
    {
        trigger: "tag", 
        replacement: "\\tag{$0}$1", 
        options: "mA", 
        description: "Tag equation natively"
    },

    // Greek letters
    { trigger: ";a", replacement: "\\alpha", options: "mA" },
    { trigger: ";b", replacement: "\\beta", options: "mA" },
    { trigger: ";g", replacement: "\\gamma", options: "mA" },
    { trigger: ";G", replacement: "\\Gamma", options: "mA" },
    { trigger: ";d", replacement: "\\delta", options: "mA" },
    { trigger: ";D", replacement: "\\Delta", options: "mA" },
    { trigger: ";e", replacement: "\\epsilon", options: "mA" },
    { trigger: ":e", replacement: "\\varepsilon", options: "mA" },
    { trigger: ";z", replacement: "\\zeta", options: "mA" },
    { trigger: ";t", replacement: "\\theta", options: "mA" },
    { trigger: ";T", replacement: "\\Theta", options: "mA" },
    { trigger: ":t", replacement: "\\vartheta", options: "mA" },
    { trigger: ";i", replacement: "\\iota", options: "mA" },
    { trigger: ";k", replacement: "\\kappa", options: "mA" },
    { trigger: ";l", replacement: "\\lambda", options: "mA" },
    { trigger: ";L", replacement: "\\Lambda", options: "mA" },
    { trigger: ";s", replacement: "\\sigma", options: "mA" },
    { trigger: ";S", replacement: "\\Sigma", options: "mA" },
    { trigger: ";u", replacement: "\\upsilon", options: "mA" },
    { trigger: ";U", replacement: "\\Upsilon", options: "mA" },
    { trigger: ";o", replacement: "\\omega", options: "mA" },
    { trigger: ";O", replacement: "\\Omega", options: "mA" },
    { trigger: "ome", replacement: "\\omega", options: "mA" },
    { trigger: "Ome", replacement: "\\Omega", options: "mA" },

    // Text environment
    {trigger: "text", replacement: "\\text{$0}$1", options: "mA"},
    {trigger: "\"", replacement: "\\text{$0}$1", options: "mA"},
    {trigger: ";q", replacement: "\\quad ", options: "mA"},
    {trigger: ";qq", replacement: "\\qquad ", options: "mA"},
    {trigger: ";s", replacement: "\\; ", options: "mA"},
    
    // Basic operations
    {trigger: "sr", replacement: "^{2}", options: "mA"},
    {trigger: "cb", replacement: "^{3}", options: "mA"},
    {trigger: "pp", replacement: "^{$0}$1", options: "mA"},
    {trigger: "_", replacement: "_{$0}$1", options: "mA"},
    {trigger: "sts", replacement: "_\\text{$0}", options: "mA"},
    {trigger: "sqrt", replacement: "\\sqrt{ $0 }$1", options: "mA"},
    {trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA"},
    {trigger: "ee", replacement: "e^{ $0 }$1", options: "mA"},
    {trigger: "invs", replacement: "^{-1}", options: "mA"},
    {trigger: "^", replacement: "^{$0}$1", options: "mA", description: "Auto superscript"},
    {trigger: /([A-Za-z])(\d)/, replacement: "[[0]]_{[[1]]}", options: "rmA", description: "Auto letter subscript", priority: -1},

    {trigger: /([^\\])(exp|log|ln)/, replacement: "[[0]]\\[[1]]", options: "rmA"},
    {trigger: "conj", replacement: "^{*}", options: "mA"},
    {trigger: "Re", replacement: "\\mathrm{Re}", options: "mA"},
    {trigger: "Im", replacement: "\\mathrm{Im}", options: "mA"},
    {trigger: "bf", replacement: "\\mathbf{$0}", options: "mA"},
    {trigger: "bb", replacement: "\\mathbb{$0}", options: "mA"},
    {trigger: "cl", replacement: "\\mathcal{$0}", options: "mA"},
    {trigger: "fk", replacement: "\\mathfrak{$0}", options: "mA"},
    {trigger: "ds", replacement: "\\mathds{$0}", options: "mA"},
    {trigger: "rm", replacement: "\\mathrm{$0}$1", options: "mA"},

    // Linear algebra
    {trigger: /([^\\])(det)/, replacement: "[[0]]\\[[1]]", options: "rmA"},
    {trigger: "trace", replacement: "\\mathrm{Tr}", options: "mA"},

    // More operations
    {trigger: "([a-zA-Z])hat", replacement: "\\hat{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])bar", replacement: "\\bar{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])dot", replacement: "\\dot{[[0]]}", options: "rmA", priority: -1},
    {trigger: "([a-zA-Z])ddot", replacement: "\\ddot{[[0]]}", options: "rmA", priority: 1},
    {trigger: "([a-zA-Z])tilde", replacement: "\\tilde{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])und", replacement: "\\underline{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])ovl", replacement: "\\overline{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])vec", replacement: "\\vec{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z]),\\.", replacement: "\\mathbf{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])\\.,", replacement: "\\mathbf{[[0]]}", options: "rmA"},
    
    // Auto-backslash symbols
    {trigger: "([^\\\\])(${GREEK})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before Greek"},
    {trigger: "([^\\\\])(${SYMBOL})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before symbols"},

    // Bold greek
    {trigger: "\\\\(${GREEK}),\\.", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK})\\.,", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA"},

    {trigger: "hat", replacement: "\\hat{$0}$1", options: "mA"},
    {trigger: "bar", replacement: "\\bar{$0}$1", options: "mA"},
    {trigger: "dot", replacement: "\\dot{$0}$1", options: "mA", priority: -1},
    {trigger: "ddot", replacement: "\\ddot{$0}$1", options: "mA"},
    {trigger: "cdot", replacement: "\\cdot", options: "mA"},
    {trigger: "tilde", replacement: "\\tilde{$0}$1", options: "mA"},
    {trigger: "und", replacement: "\\underline{$0}$1", options: "mA"},
    {trigger: "ovl", replacement: "\\overline{$0}$1", options: "mA"},
    {trigger: "vec", replacement: "\\vec{$0}$1", options: "mA"},

    // Auto letter subscript — chained accent support
    {trigger: /([A-Za-z])_(\d\d)/, replacement: "[[0]]_{[[1]]}", options: "rmA"},
    // \dot{x}3 -> \dot{x}_{3}, \dot{\alpha}3 -> \dot{\alpha}_{3}
    {trigger: "\\\\(${ACCENT})\\{(\\\\${GREEK}|[A-Za-z])\\}(\\d)", replacement: "\\[[0]]{[[1]]}_{[[2]]}", options: "rmA", priority: -1},
    // \dot{x}_{3}4 -> \dot{x}_{34}
    {trigger: "\\\\(${ACCENT})\\{(\\\\${GREEK}|[A-Za-z])\\}_\\{(\\d+)\\}(\\d)", replacement: "\\[[0]]{[[1]]}_{[[2]][[3]]}", options: "rmA", priority: -1},
    // \dot{\vec{a}}3 -> \dot{\vec{a}}_{3}
    {trigger: "\\\\(${ACCENT})\\{\\\\(${ACCENT})\\{(\\\\${GREEK}|[A-Za-z])\\}\\}(\\d)", replacement: "\\[[0]]{\\[[1]]{[[2]]}}_{[[3]]}", options: "rmA", priority: -1},
    // \dot{\vec{a}}_{3}4 -> \dot{\vec{a}}_{34}
    {trigger: "\\\\(${ACCENT})\\{\\\\(${ACCENT})\\{(\\\\${GREEK}|[A-Za-z])\\}\\}_\\{(\\d+)\\}(\\d)", replacement: "\\[[0]]{\\[[1]]{[[2]]}}_{[[3]][[4]]}", options: "rmA", priority: -1},
    {trigger: /\\hat{([A-Za-z])}(\d)/, replacement: "\\hat{[[0]]}_{[[1]]}", options: "rmA"},
    {trigger: /\\vec{([A-Za-z])}(\d)/, replacement: "\\vec{[[0]]}_{[[1]]}", options: "rmA"},
    {trigger: /\\mathbf{([A-Za-z])}(\d)/, replacement: "\\mathbf{[[0]]}_{[[1]]}", options: "rmA"},

    {trigger: "xnn", replacement: "x_{n}", options: "mA"},
    {trigger: "\\xii", replacement: "x_{i}", options: "mA", priority: 1}, 
    {trigger: "xjj", replacement: "x_{j}", options: "mA"},
    {trigger: "xp1", replacement: "x_{n+1}", options: "mA"},
    {trigger: "ynn", replacement: "y_{n}", options: "mA"},
    {trigger: "yii", replacement: "y_{i}", options: "mA"},
    {trigger: "yjj", replacement: "y_{j}", options: "mA"},

    // Symbols
    {trigger: "ooo", replacement: "\\infty", options: "mA"},
    {trigger: "sum", replacement: "\\sum", options: "mA"},
    {trigger: "prod", replacement: "\\prod", options: "mA"},
    {trigger: "\\sum", replacement: "\\sum_{${0:i}=${1:1}}^{${2:N}} $3", options: "m"},
    {trigger: "\\prod", replacement: "\\prod_{${0:i}=${1:1}}^{${2:N}} $3", options: "m"},
    {trigger: "lim", replacement: "\\lim_{ ${0:n} \\to ${1:\\infty} } $2", options: "mA"},
    {trigger: "+-", replacement: "\\pm", options: "mA"},
    {trigger: "-+", replacement: "\\mp", options: "mA"},
    {trigger: "...", replacement: "\\dots", options: "mA"},
    {trigger: "nabl", replacement: "\\nabla", options: "mA"},
    {trigger: "del", replacement: "\\nabla", options: "mA"},
    {trigger: "xx", replacement: "\\times", options: "mA"},
    {trigger: "**", replacement: "\\cdot", options: "mA"},
    {trigger: "para", replacement: "\\parallel", options: "mA"},

    // Relations
    { trigger: "==", replacement: "&=", options: "mA", description: "Align Equals" },
    { trigger: "!=", replacement: "\\neq", options: "mA", description: "Not Equal" },
    { trigger: "<=", replacement: "\\le", options: "mA", description: "Less Eq" },
    { trigger: ">=", replacement: "\\ge", options: "mA", description: "Greater Eq" },
    { trigger: "~~", replacement: "\\approx", options: "mA", description: "Approx" },
    { trigger: "~=", replacement: "\\cong", options: "mA", description: "Congruent" },
    { trigger: "sim", replacement: "\\sim", options: "mAw", description: "Similar" },
    { trigger: "eqv", replacement: "\\equiv", options: "mAw", description: "Equiv" },
    { trigger: "prop", replacement: "\\propto", options: "mAw", description: "Proportional" },
    { trigger: "perp", replacement: "\\perp", options: "mA" },
    { trigger: "span", replacement: "\\operatorname{span}", options: "mA" },
    
    // Sets
    { trigger: "set", replacement: "\\{ $0 \\}$1", options: "mA" },
    { trigger: "cc", replacement: "\\subset", options: "mAw", description: "Subset" },
    { trigger: "cq", replacement: "\\subseteq", options: "mAw", description: "Subset Eq" },
    { trigger: "rcc", replacement: "\\supset", options: "mAw", description: "Supset" },
    { trigger: "rcq", replacement: "\\supseteq", options: "mAw", description: "Supset Eq" },
    { trigger: "inn", replacement: "\\in", options: "mAw", description: "Element Of" },
    { trigger: "nin", replacement: "\\notin", options: "mAw", description: "Not Element" },
    { trigger: "uu", replacement: "\\cup", options: "mAw", description: "Union" },
    { trigger: "nn", replacement: "\\cap", options: "mAw", description: "Intersect" },
    { trigger: "UU", replacement: "\\bigcup", options: "mAw", description: "Big Union" },
    { trigger: "rUU", replacement: "\\bigcap", options: "mAw", description: "Big Intersect" },
    { trigger: "squu", replacement: "\\sqcup", options: "mAw", description: "Union" },
    { trigger: "sqUU", replacement: "\\bigsqcup", options: "mAw", description: "Union" },
    { trigger: "OO", replacement: "\\emptyset", options: "mAw", description: "Empty Set" },
    { trigger: "niset", replacement: "\\setminus", options: "mAw", description: "Set minus" },

    // Quantifiers
    { trigger: "VV", replacement: "\\forall", options: "mAw", description: "For All" },
    { trigger: "EE", replacement: "\\exists", options: "mAw", description: "Exists" },
    { trigger: "!E", replacement: "\\nexists", options: "mAw", description: "Not Exists" },

    // Logic Arrows
    { trigger: "=>", replacement: "\\implies", options: "mA", description: "Implies" },
    { trigger: "=<", replacement: "\\impliedby", options: "mA", description: "Implied By" },
    { trigger: "iff", replacement: "\\iff", options: "mAw", description: "If and only if" },
    { trigger: "->", replacement: "\\to", options: "mA", description: "To" },
    { trigger: "!>", replacement: "\\mapsto", options: "mA", description: "Maps To" },
    { trigger: "<->", replacement: "\\leftrightarrow", options: "mA", description: "Left Right Arrow" },

    { trigger: "LL", replacement: "\\mathcal{L}", options: "mA" },
    { trigger: "HH", replacement: "\\mathcal{H}", options: "mA" },
    { trigger: "CC", replacement: "\\mathbb{C}", options: "mA" },
    { trigger: "RR", replacement: "\\mathbb{R}", options: "mA" },
    { trigger: "ZZ", replacement: "\\mathbb{Z}", options: "mA" },
    { trigger: "NN", replacement: "\\mathbb{N}", options: "mA" },

    // Insert spaces
    {trigger: "\\\\(${GREEK}|${SYMBOL}|${MORE_SYMBOLS})([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) sr", replacement: "\\[[0]]^{2}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) cb", replacement: "\\[[0]]^{3}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) rd", replacement: "\\[[0]]^{$0}$1", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) hat", replacement: "\\hat{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) dot", replacement: "\\dot{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) bar", replacement: "\\bar{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) vec", replacement: "\\vec{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) tilde", replacement: "\\tilde{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) und", replacement: "\\underline{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) ovl", replacement: "\\overline{\\[[0]]}", options: "rmA"},
    
    // Upright Greek
    {
        trigger: "U(${GREEK})",
        replacement: "\\Up[[0]]",
        options: "rmA", 
        priority: 2,
        description: "Upright Greek Hoa",
    },
    {
        trigger: "u(${GREEK})",
        replacement: "\\up[[0]]",
        options: "rmA",
        priority: 2,
        description: "Upright Greek thường",
    },

    // Derivatives and integrals
    {trigger: "par", replacement: "\\frac{ \\partial ${0:y} }{ \\partial ${1:x} } $2", options: "m"},
    {trigger: /pa([A-Za-z])([A-Za-z])/, replacement: "\\frac{ \\partial [[0]] }{ \\partial [[1]] } ", options: "rm"},
    {trigger: "ddt", replacement: "\\frac{d}{dt} ", options: "mA"},

    {trigger: /([^\\])int/, replacement: "[[0]]\\int", options: "mA", priority: -1},
    {trigger: "\\int", replacement: "\\int $0 \\, d${1:x} $2", options: "m"},
    {trigger: "dint", replacement: "\\int_{${0:0}}^{${1:1}} $2 \\, d${3:x} $4", options: "mA"},
    {trigger: "oint", replacement: "\\oint", options: "mA"},
    {trigger: "iint", replacement: "\\iint", options: "mA"},
    {trigger: "iiint", replacement: "\\iiint", options: "mA"},
    {trigger: "oinf", replacement: "\\int_{0}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
    {trigger: "infi", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},

    // Trigonometry
    {trigger: /([^\\])(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)/, replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before trig funcs"},
    {trigger: /\\(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)([A-Za-gi-z])/, replacement: "\\[[0]] [[1]]", options: "rmA", description: "Add space after trig funcs."},
    {trigger: /\\(sinh|cosh|tanh|coth)([A-Za-z])/, replacement: "\\[[0]] [[1]]", options: "rmA", description: "Add space after hyperbolic trig funcs"},
    {trigger: /(arccsc|arcsec|arccot)/, replacement: "\\operatorname{[[0]]}$0", options: "mA", priority: 1, description: "Inverse trig không có trong MathJax"},

    // Visual operations
    {trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA"},
    {trigger: "O", replacement: "\\overbrace{ ${VISUAL} }^{ $0 }", options: "mA"},
    {trigger: "B", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA"},
    {trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "mA"},
    {trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA"},
    {trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA"},

    // Physics
    {trigger: "kbt", replacement: "k_{B}T", options: "mA"},
    {trigger: "msun", replacement: "M_{\\odot}", options: "mA"},

    // Quantum mechanics
    {trigger: "dag", replacement: "^{\\dagger}", options: "mA"},
    {trigger: "o+", replacement: "\\oplus ", options: "mA"},
    {trigger: "ox", replacement: "\\otimes ", options: "mA"},
    {trigger: "bra", replacement: "\\bra{$0} $1", options: "mA"},
    {trigger: "ket", replacement: "\\ket{$0} $1", options: "mA"},
    {trigger: "brk", replacement: "\\braket{ $0 | $1 } $2", options: "mA"},
    {trigger: "outer", replacement: "\\ket{${0:\\psi}} \\bra{${0:\\psi}} $1", options: "mA"},

    // Chemistry
    {trigger: "pu", replacement: "\\pu{ $0 }", options: "mA"},
    {trigger: "cee", replacement: "\\ce{ $0 }", options: "mA"},
    {trigger: "he4", replacement: "{}^{4}_{2}He ", options: "mA"},
    {trigger: "he3", replacement: "{}^{3}_{2}He ", options: "mA"},
    {trigger: "iso", replacement: "{}^{${0:4}}_{${1:2}}${2:He}", options: "mA"},

    // Environments
    {trigger: "pmat", replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", options: "MA"},
    {trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "MA"},
    {trigger: "Bmat", replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}", options: "MA"},
    {trigger: "vmat", replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}", options: "MA"},
    {trigger: "Vmat", replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}", options: "MA"},
    {trigger: "matrix", replacement: "\\begin{matrix}\n$0\n\\end{matrix}", options: "MA"},

    {trigger: "pmat", replacement: "\\begin{pmatrix}$0\\end{pmatrix}", options: "nA"},
    {trigger: "bmat", replacement: "\\begin{bmatrix}$0\\end{bmatrix}", options: "nA"},
    {trigger: "Bmat", replacement: "\\begin{Bmatrix}$0\\end{Bmatrix}", options: "nA"},
    {trigger: "vmat", replacement: "\\begin{vmatrix}$0\\end{vmatrix}", options: "nA"},
    {trigger: "Vmat", replacement: "\\begin{Vmatrix}$0\\end{Vmatrix}", options: "nA"},
    {trigger: "matrix", replacement: "\\begin{matrix}$0\\end{matrix}", options: "nA"},
    {trigger: "array", replacement: "\\begin{array}\n$0\n\\end{array}", options: "mA"},

    // Brackets
    {trigger: "avg", replacement: "\\langle $0 \\rangle $1", options: "mA"},
    {trigger: "norm", replacement: "\\lvert $0 \\rvert $1", options: "mA", priority: 1},
    {trigger: "Norm", replacement: "\\lVert $0 \\rVert $1", options: "mA", priority: 1},
    {trigger: "ceil", replacement: "\\lceil $0 \\rceil $1", options: "mA"},
    {trigger: "floor", replacement: "\\lfloor $0 \\rfloor $1", options: "mA"},
    {trigger: "abs", replacement: "|$0|$1", options: "mA"},
    {trigger: "pmod", replacement: "\\pmod{${0:n}}$1", options: "mA", description: "Parenthesized modulo (\\pmod{n})"},
    {trigger: "(", replacement: "(${VISUAL})", options: "mA"},
    {trigger: "[", replacement: "[${VISUAL}]", options: "mA"},
    {trigger: "{", replacement: "{${VISUAL}}", options: "mA"},
    {trigger: "(", replacement: "($0)$1", options: "mA"},
    {trigger: "{", replacement: "{$0}$1", options: "mA"},
    {trigger: "[", replacement: "[$0]$1", options: "mA"},
    {trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA"},
    {trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA"},
    {trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA"},
    {trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA"},
    {trigger: "lra", replacement: "\\left< $0 \\right> $1", options: "mA"},

    // Snippet functions
    {trigger: "tayl", replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "mA", description: "Taylor expansion"},

    {
        trigger: /iden(\d)/, 
        replacement: (match) => {
            const n = match[1];
            let arr = [];
            for (let j = 0; j < n; j++) {
                arr[j] = [];
                for (let i = 0; i < n; i++) {
                    arr[j][i] = (i === j) ? 1 : 0;
                }
            }
            let output = arr.map(el => el.join(" & ")).join(" \\\\\n");
            output = `\\begin{pmatrix}\n${output}\n\\end{pmatrix}`;
            return output;
        }, 
        options: "mA", 
        description: "N x N identity matrix"
    },  

    // Piecewise function with N cases
    {
        trigger: /ifcase(\d)/, 
        replacement: (match) => {
            const n = parseInt(match[1], 10);
            let lines = [];
            for (let i = 0; i < n; i++) {
                lines.push(`\${${2 * i}:val}, & \\text{if } \${${2 * i + 1}:cond}`);
            }
            return `\\begin{cases}\n${lines.join(" \\\\\n")}\n\\end{cases}$${2 * n}`;
        },
        options: "MA",
        description: "N-case piecewise function",
    },

    // Left brace grouping for N lines (without conditions)
    {
        trigger: /case(\d)/, 
        replacement: (match) => {
            const n = parseInt(match[1], 10);
            let lines = [];
            for (let i = 0; i < n; i++) {
                // Tab stops from 0 to n-1
                lines.push(`\${${i}:val}`);
            }
            // Exit point is $n
            return `\\begin{cases}\n${lines.join(" \\\\\n")}\n\\end{cases}$${n}`;
        },
        options: "mA",
        description: "N-line grouped equations (left brace)",
    },

    // Display math bên trong Markdown list — giữ đúng indent
    {
        trigger: /(?<=(?:\n|^)[ \t]*>*)(?<marker>\d+[.)]|[-*+])(?<whitespace>[ \t]+)(?<text>.*)dm/,
        replacement: (m) => {
            const { whitespace, text, marker } = m.groups;
            const firstLine = marker + whitespace + text;
            const indent = " ".repeat(marker.length) + whitespace;
            return `${firstLine}\n${indent}$$\n${indent}\t$0\n${indent}$$`;
        },
        options: "rtA",
        priority: 2,
        description: "Display math khi đang trong list, giữ indent",
    },
]