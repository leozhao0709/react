const NavUtils = {
  navItems: () => [
    { title: '发现音乐', path: '/discover' },
    { title: '我的音乐', path: '/mine' },
    { title: '朋友', path: '/friend' },
    {
      title: '商城',
      path: 'https://music.163.com/store/product',
      isLink: true,
    },
    {
      title: '音乐人',
      path: 'https://music.163.com/nmusician/web/index#/',
      isLink: true,
    },
    {
      title: '下载客户端',
      path: 'https://music.163.com/#/download',
      isLink: true,
    },
  ],
};

export default NavUtils;
