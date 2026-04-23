imap jk <Esc>

nmap j gj
nmap k gk
nmap 0 g0
nmap $ g$
vmap 0 g0
vmap $ g$
nmap H ^
vmap H ^
nmap L $
vmap L $
nmap w W
vmap w W
nmap b B
vmap b B
nmap e E
vmap e E

set clipboard=unnamed

nmap U <C-r>

nmap <Esc><Esc> :nohl<CR>

" bold 
exmap toggleBoldCommand obcommand vim-marker-sharpener:toggle-bold
map <Space>efb :toggleBoldCommand<CR>
vmap <Space>b :toggleBoldCommand<CR>
vmap !b :toggleBoldCommand<CR>

" highlight
exmap toggleHighlightCommand obcommand vim-marker-sharpener:toggle-highlight
map <Space>efh :toggleHighlightCommand<CR>
vmap !h :toggleHighlightCommand<CR>
vmap <Space>h :toggleHighlightCommand<CR>

" italic
exmap toggleItalicCommand obcommand vim-marker-sharpener:toggle-italic
map <Space>efi :toggleItalicCommand<CR>
vmap !i :toggleItalicCommand<CR>
vmap <Space>i :toggleItalicCommand<CR>

" strikethrough
exmap toggleStrikethroughCommand  obcommand vim-marker-sharpener:toggle-strikethrough
map <Space>efs :toggleStrikethroughCommand<CR>
vmap !s :toggleStrikethroughCommand<CR>
vmap <Space>s :toggleStrikethroughCommand<CR>

" code 
exmap toggleCodeCommand obcommand vim-marker-sharpener:toggle-code
map <Space>efc :toggleCodeCommand<CR>
vmap !c :toggleCodeCommand<CR>
vmap <Space>c :toggleCodeCommand<CR>

" comments
exmap toggleCommentComment obcommand vim-marker-sharpener:toggle-comment
map <Space>efm :toggleCommentComment<CR>
vmap !m :toggleCommentComment<CR>
vmap <Space>m :toggleCommentComment<CR>