<%\*

const clip = await tp.system.clipboard();

const lines = clip.split('\\n');

const wrapped = lines.map(1 => '> > ' + 1).join('\\n');

const b = String.fromCharCode(96);

const fence = b+b+b;

tR += '> > ' + fence + 'matlab\\n' + wrapped + '\\n> > ' + fence;

%>

