<template>
  <header class="header">
    <div class="header--min-height">
      <div class="header--center">
        <div class="header__name name--font">
          <div style="padding-left: 5vw; padding-right: 5vw">
            FRONT END
            <span class="header__name--small">(JS, HTML, CSS)</span>
          </div>
          <div style="padding-left: 7vw; padding-right: 7vw">
            SOFTWARE DEVELOPER
          </div>
          <div style="padding-left: 5vw; padding-right: 5vw">
            <span class="header__name--small">(based in)</span>
            SYDNEY, AUSTRALIA
          </div>
        </div>
        <div class="header__adrian name--font">Adrian Hong</div>
        <div class="header__coot">
          <svg
            :width="vw > vh ? `15vw` : `15vh`"
            length="auto"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="coot"
          >
            <path
              d="M9.24624 42C-2.25379 61.5 18.7462 88.7229 41.7462 90C64.7462 91.2771 80.7462 73.5 71.2462 49L53.7462 46C52.2462 52.6667 39.5 55.5 9.24624 42Z"
              fill="#0d0e0e"
              stroke="#0d0e0e"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M83.8129 34.3283C86.7963 36.2956 91.587 36.2812 93.8599 38.2621C93.2724 44.1653 84.2345 44.3813 79.7462 43.5278L83.8129 34.3283Z"
              fill="#fff"
            />
            <circle
              cx="64.7462"
              cy="31"
              r="19.5"
              fill="#0d0e0e"
              stroke="#0d0e0e"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="74.7462" cy="35" r="3" fill="white" />
          </svg>
        </div>
      </div>
      <div id="header__scroll">
        <a
          onClick="document.getElementById('main__section').scrollIntoView({ block: 'start',  behavior: 'smooth'});"
          class="mdi mdi__contact mdi-arrow-down"
          style="cursor: pointer"
        >
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted: function () {
    var tl = gsap.timeline();
    tl.from(".header__name", { y: 100, opacity: 0, duration: 0.5 });
    tl.from(".header__adrian", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
    });
    tl.from("#header__scroll", {
      y: -100,
      opacity: 0,
      duration: 0.3,
    });
    tl.from(".header__coot", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });
    tl.play();
  },
};
</script>

<style scoped>
/* Header */
.header {
  min-height: 100vh;
  width: calc(100vw - (100vw - 100%));
  color: var(--secondary-color);
  -webkit-animation: gradient 10s ease infinite;
  animation: gradient 10s ease infinite;
  background: radial-gradient(
    var(--accent1-color),
    var(--accent2-color),
    var(--accent3-color),
    var(--accent4-color)
  );
  background-size: 200% 200%;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 70% 30%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 20% 70%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes color-animate {
  0% {
    color: var(--accent1-color);
  }
  50% {
    color: var(--accent2-color);
  }
  100% {
    color: var(--accent1-color);
  }
}

.header--min-height {
  min-height: 100%;
}

.header--center {
  text-align: center;
  padding: 3vw;
}

.header__name {
  font-size: clamp(20px, 4vw, 90px);
  letter-spacing: -0.2vw;
  line-height: 100%;
  margin-top: 5vh;
}

.header__name--small {
  font-size: clamp(10px, 2vw, 70px);
}

.header__adrian {
  margin-top: 9vh;
  font-size: clamp(40px, 14vw, 130px);
  font-weight: 700;
  margin-bottom: 10vh;
  line-height: 100%;
  letter-spacing: -0.2vw;
}

.header__subtitle {
  font-size: clamp(15px, 2vw, 40px);
  letter-spacing: 2px;
  margin-bottom: 5vh;
}

.header__coot {
  margin-bottom: 5vh;
}

#header__scroll {
  position: absolute;
  right: 5%;
  bottom: 2vh;
  z-index: 1;
}

.coot {
  animation-name: bounce;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes bounce {
  0% {
    transform: translateY(0px);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  50% {
    transform: translateY(50px);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
