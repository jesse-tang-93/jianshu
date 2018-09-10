import { injectGlobal } from 'styled-components'
injectGlobal `
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1536548732661'); /* IE9*/
    src: url('./iconfont.eot?t=1536548732661#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAVQAAsAAAAAB8gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8lUhSY21hcAAAAYAAAABeAAABnLO5G5RnbHlmAAAB4AAAAWwAAAGM1pQ7+mhlYWQAAANMAAAALwAAADYSl0TJaGhlYQAAA3wAAAAeAAAAJAfeBC5obXR4AAADnAAAABAAAAAQEKkAAGxvY2EAAAOsAAAACgAAAAoBEACEbWF4cAAAA7gAAAAeAAAAIAESADxuYW1lAAAD2AAAAUUAAAJtPlT+fXBvc3QAAAUgAAAALwAAAEDqBE5HeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk0WKcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeyT8zY27438AQw9zA0AAUZgTJAQDxUAxieJztkLENgDAMBM9JQBFiB5qUlCgDpWLyrBEcm4IheOss+2W5eGABonIqCeRGmGrqivmRzfxE1T1rBehHL72O8Z1MYhdZp+AfZOXXbv16tzhTcyzL4phfHeQBjzkTDgAAeJwlkE9LAmEQh2fe2T/WphamS7FK7rq7eXFFbVeCtMAg6FrSqSCowI518KLHPoSH0ksFHboWXSwI7FaePPc57LW3hOFhBgae+Q1IAJMJ9QlAhShkwANIW25atbAYI8e1FJVkv1hIorVmKZbprJWqWLJMVY9gfDFRLPgbyPqnO3y0fYLR49q5rDBZbeAoX7koY3orFzQON9e9o9XkyrKdHw4JeBar844V46+ycfnu+flsPTK3ax/IxlLcKNgpAEBx05DG7BrEhI5EEdT9jK2AaIoVDKbleKhXkMYL3BkzFpLxABdTP09vjGnhL9PoXNTqKHn7j1qHXekufyCNad97jD/xEc1qN1Gm2sZZODSfDM/0AcQDJh/0TBpooIMJYOfQFZYUiqTCq6b+bEEO0XTR8XVMqAq+tO+I7totwdt2s0fUaza7RF1sMcYHFJKwTEQvdN9q3dM/WZW60x3B8SfDQAoRH0iyyPwLeLBYXnicY2BkYGAA4sN+gSvi+W2+MnCzMIDA9T0MNQj6/0kWBmZuIJeDgQkkCgAh4Am9AHicY2BkYGBu+N/AEMOykgEIWBgYGBlQAQsAV4sDFgAABAAAAAQAAAAEqQAABAAAAAAAAAAASgCEAMYAAHicY2BkYGBgYTAAYhBgAmIuIGRg+A/mMwAADcIBTwAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAhZGJkZmRhZGVgckxkSU1NzGfKy0xLz0lMSszL52BAQBJygaAAA==') format('woff'),
    url('./iconfont.ttf?t=1536548732661') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1536548732661#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
