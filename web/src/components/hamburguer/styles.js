import { createGlobalStyle } from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
  
/*Global style*/
export default createGlobalStyle` 
.nav {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #fff;

}

.button {
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
}

ul { 
  position: absolute;
  top: 100px;
}


.icon-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
}

.text-placeholder {
  border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
}

.refresh {
  padding: 10px;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}


@media (min-with:320px) and (max-width: 480px) {
      .background {
        background: #333;

        }
  }

`

