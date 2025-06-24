// components/Bear.jsx
export default function Bear() {
    return (
      <div className="main">
        <div className="dog">
          <div className="dog__paws">
            <div className="dog__bl-leg leg">
              <div className="dog__bl-paw paw"></div>
              <div className="dog__bl-top top"></div>
            </div>
            <div className="dog__fl-leg leg">
              <div className="dog__fl-paw paw"></div>
              <div className="dog__fl-top top"></div>
            </div>
            <div className="dog__fr-leg leg">
              <div className="dog__fr-paw paw"></div>
              <div className="dog__fr-top top"></div>
            </div>
          </div>
  
          <div className="dog__body">
            <div className="dog__tail"></div>
          </div>
  
          <div className="dog__head">
            <div className="dog__snout">
              <div className="dog__eyes">
                <div className="dog__eye-l"></div>
                <div className="dog__eye-r"></div>
              </div>
            </div>
          </div>
  
          <div className="dog__head-c">
            <div className="dog__ear-r"></div>
            <div className="dog__ear-l"></div>
          </div>
        </div>
  
        <style>{`
          .main {
            position: relative;
            width: 150px;       /* was 23.5vmax */
            height: 150px;      /* was 23.5vmax */
            display: flex;
            justify-content: center;
            align-items: center;
          }
  
          .leg {
            position: absolute;
            bottom: 0;
            width: 13px;        /* was 2vmax */
            height: 14px;       /* was 2.125vmax */
          }
  
          .paw {
            position: absolute;
            bottom: 2px;
            left: 0;
            width: 12.5px;      /* was 1.95vmax */
            height: 11.5px;     /* was 1.8vmax */
            overflow: hidden;
          }
  
          .paw::before {
            content: "";
            position: absolute;
            width: 32px;        /* was 5vmax */
            height: 19px;       /* was 3vmax */
            border-radius: 50%;
          }
  
          .top {
            position: absolute;
            bottom: 0;
            left: 5px;          /* was 0.75vmax */
            height: 29px;       /* was 4.5vmax */
            width: 17px;        /* was 2.625vmax */
            border-top-left-radius: 9px;   /* was 1.425vmax */
            border-top-right-radius: 9px;  /* was 1.425vmax */
            transform-origin: bottom right;
            transform: rotateZ(90deg) translateX(-0.6px) translateY(10px);
            z-index: -1;
            background-image: linear-gradient(70deg, transparent 20%, #deac80 20%);
          }
  
          .dog {
            position: relative;
            width: 128px;       /* was 20vmax */
            height: 51px;       /* was 8vmax */
          }
  
          .dog::before {
            content: "";
            position: absolute;
            bottom: -5px;       /* was -0.75vmax */
            right: -1px;        /* was -0.15vmax */
            width: 100%;
            height: 10px;       /* was 1.5vmax */
            background-color: #b5c18e;
            border-radius: 50%;
            z-index: -1000;
            animation: shadow 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;
          }
  
          .dog__head {
            position: absolute;
            left: 29px;         /* was 4.5vmax */
            bottom: 0;
            width: 51px;        /* was 8vmax */
            height: 32px;       /* was 5vmax */
            border-top-left-radius: 26px;  /* was 4.05vmax */
            border-top-right-radius: 26px; /* was 4.05vmax */
            border-bottom-right-radius: 21px; /* was 3.3vmax */
            border-bottom-left-radius: 21px;  /* was 3.3vmax */
            background-color: #deac80;
            animation: head 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;
          }
  
          .dog__head-c {
            position: absolute;
            left: 10px;         /* was 1.5vmax */
            bottom: 0;
            width: 62px;        /* was 9.75vmax */
            height: 53px;       /* was 8.25vmax */
            animation: head 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;
            z-index: -1;
          }
  
          .dog__snout {
            position: absolute;
            left: -10px;        /* was -1.5vmax */
            bottom: 0;
            width: 48px;        /* was 7.5vmax */
            height: 24px;       /* was 3.75vmax */
            border-top-right-radius: 19px;   /* was 3vmax */
            border-bottom-right-radius: 19px; /* was 3vmax */
            border-bottom-left-radius: 29px;  /* was 4.5vmax */
            background-color: #f7dcb9;
            animation: snout 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;
          }
  
          .dog__snout::before {
            content: "";
            position: absolute;
            left: -1px;         /* was -0.1125vmax */
            top: -1px;          /* was -0.15vmax */
            width: 12px;        /* was 1.875vmax */
            height: 7px;        /* was 1.125vmax */
            border-top-right-radius: 19px;    /* was 3vmax */
            border-bottom-right-radius: 19px; /* was 3vmax */
            border-bottom-left-radius: 29px;  /* was 4.5vmax */
            background-color: #6c4e31;
            animation: snout-b 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;
          }
  
          .dog__nose {
            position: absolute;
            top: -12px;         /* was -1.95vmax */
            left: 40%;
            width: 5px;         /* was 0.75vmax */
            height: 15px;       /* was 2.4vmax */
            border-radius: 4px; /* was 0.525vmax */
            transform-origin: bottom;
            transform: rotateZ(10deg);
            background-color: #d7dbd2;
          }
  
          .dog__eye-l,
          .dog__eye-r {
            position: absolute;
            top: -6px;          /* was -0.9vmax */
            width: 4px;         /* was 0.675vmax */
            height: 2.5px;      /* was 0.375vmax */
            border-radius: 50%;
            background-color: #1c3130;
            animation: eye 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;
          }
  
          .dog__eye-l {
            left: 27%;
          }
  
          .dog__eye-r {
            left: 65%;
          }
  
          .dog__ear-l,
          .dog__ear-r {
            position: absolute;
            width: 32px;        /* was 5vmax */
            height: 21px;       /* was 3.3vmax */
            border-top-left-radius: 21px;  /* was 3.3vmax */
            border-top-right-radius: 19px; /* was 3vmax */
            border-bottom-right-radius: 32px; /* was 5vmax */
            border-bottom-left-radius: 32px;  /* was 5vmax */
            background-color: #deac80;
          }
  
          .dog__ear-l {
            top: 10px;          /* was 1.5vmax */
            left: 64px;         /* was 10vmax */
            transform-origin: bottom left;
            transform: rotateZ(-50deg);
            z-index: -1;
            animation: ear-l 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;
          }
  
          .dog__ear-r {
            top: 10px;          /* was 1.5vmax */
            right: 19px;        /* was 3vmax */
            transform-origin: bottom right;
            transform: rotateZ(25deg);
            z-index: -2;
            animation: ear-r 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;
          }
  
          .dog__body {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            position: absolute;
            bottom: 2px;        /* was 0.3vmax */
            left: 38px;         /* was 6vmax */
            width: 115px;       /* was 18vmax */
            height: 26px;       /* was 4vmax */
            border-top-left-radius: 19px;   /* was 3vmax */
            border-top-right-radius: 38px;  /* was 6vmax */
            border-bottom-right-radius: 10px; /* was 1.5vmax */
            border-bottom-left-radius: 38px;  /* was 6vmax */
            background-color: #914f1e;
            z-index: -2;
            animation: body 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;
          }
  
          .dog__tail {
            position: absolute;
            top: 20px;
            right: -10px;       /* was -1.5vmax */
            height: 19px;       /* was 3vmax */
            width: 26px;        /* was 4vmax */
            background-color: #914f1e;
            border-radius: 19px; /* was 1.5vmax */
          }
  
          .dog__paws {
            position: absolute;
            bottom: 0;
            left: 48px;         /* was 7.5vmax */
            width: 64px;        /* was 10vmax */
            height: 19px;       /* was 3vmax */
          }
  
          .dog__bl-leg {
            left: -19px;        /* was -3vmax */
            z-index: -10;
          }
  
          .dog__bl-paw::before {
            background-color: #fffbe6;
          }
  
          .dog__bl-top {
            background-image: linear-gradient(80deg, transparent 20%, #deac80 20%);
          }
  
          .dog__fl-leg {
            z-index: 10;
            left: 0;
          }
  
          .dog__fl-paw::before {
            background-color: #fffbe6;
          }
  
          .dog__fr-leg {
            right: 0;
          }
  
          .dog__fr-paw::before {
            background-color: #fffbe6;
          }
  
          /*==============================*/
  
          @keyframes head {
            0%,10%,20%,26%,28%,90%,100% {
              height: 53px;     /* was 8.25vmax */
              bottom: 0;
              transform-origin: bottom right;
              transform: rotateZ(0);
            }
            5%,15%,22%,24%,30% {
              height: 52px;     /* was 8.1vmax */
            }
            32%,50% {
              height: 53px;     /* was 8.25vmax */
            }
            55%,60% {
              bottom: 5px;      /* was 0.75vmax */
              transform-origin: bottom right;
              transform: rotateZ(0);
            }
            70%,80% {
              bottom: 5px;      /* was 0.75vmax */
              transform-origin: bottom right;
              transform: rotateZ(10deg);
            }
          }
  
          @keyframes body {
            0%,10%,20%,26%,28%,32%,100% {
              height: 46px;     /* was 7.2vmax */
            }
            5%,15%,22%,24%,30% {
              height: 45px;     /* was 7.05vmax */
            }
          }
  
          @keyframes ear-l {
            0%,10%,20%,26%,28%,82%,100% {
              transform: rotateZ(-50deg);
            }
            5%,15%,22%,24% {
              transform: rotateZ(-48deg);
            }
            30%,31% {
              transform: rotateZ(-30deg);
            }
            32%,80% {
              transform: rotateZ(-60deg);
            }
          }
  
          @keyframes ear-r {
            0%,10%,20%,26%,28% {
              transform: rotateZ(20deg);
            }
            5%,15%,22%,24% {
              transform: rotateZ(18deg);
            }
            30%,31% {
              transform: rotateZ(10deg);
            }
            32% {
              transform: rotateZ(25deg);
            }
          }
  
          @keyframes snout {
            0%,10%,20%,26%,28%,82%,100% {
              height: 24px;    /* was 3.75vmax */
            }
            5%,15%,22%,24% {
              height: 22px;    /* was 3.45vmax */
            }
          }
  
          @keyframes snout-b {
            0%,10%,20%,26%,28%,98%,100% {
              width: 12px;     /* was 1.875vmax */
            }
            5%,15%,22%,24% {
              width: 11.5px;   /* was 1.8vmax */
            }
            34%,98% {
              width: 8px;      /* was 1.275vmax */
            }
          }
  
          @keyframes shadow {
            0%,10%,20%,26%,28%,30%,84%,100% {
              width: 99%;
            }
            5%,15%,22%,24% {
              width: 101%;
            }
            34%,81% {
              width: 96%;
            }
          }
  
          @keyframes eye {
            0%,30% {
              width: 4px;      /* was 0.675vmax */
              height: 2px;     /* was 0.3vmax */
            }
            32%,59%,90%,100% {
              width: 3.3px;    /* was 0.525vmax */
              height: 3.3px;   /* was 0.525vmax */
              transform: translateY(0);
            }
            60%,75% {
              transform: translateY(-1.9px); /* was -0.3vmax */
            }
            80%,85% {
              transform: translateY(1px);    /* was 0.15vmax */
            }
          }
        `}</style>
      </div>
    );
  }
  