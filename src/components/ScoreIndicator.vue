<template>
  <div class="display">
    <div class="circle">
      <svg :width="size" :height="size" class="circle__svg">
        <circle
          :cx="center"
          :cy="center"
          :r="radius"
          class="circle__progress circle__progress--path"
          :style="strokePathStyles"
        />
        <circle
          :cx="center"
          :cy="center"
          :r="radius"
          class="circle__progress circle__progress--fill"
          :style="strokeFillStyles"
        />
      </svg>

      <div class="percent">
        <span class="percent__int">{{ valueInt }}</span>
        <span class="percent__dec">{{ valueDec }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoreIndicator',
  props: [
    'score', 'size', 'strokeWidth', 'strokeColor'
  ],
  data() {
    return {
      strokeDasharray: 0,
      strokeDashoffset: 0,
      transitionDuration: 0,
      valueInt: '0.',
      valueDec: '00'
    };
  },
  computed: {
    center(){
      return Math.floor(this.size / 2)
    },
    radius(){
      return this.center - this.strokeWidth
    },
    strokePathStyles() {
      return {
        stroke: this.strokeColor,
        'stroke-width': this.strokeWidth
      };
    },
    strokeFillStyles() {
      return {
        stroke: this.strokeColor,
        'stroke-width': this.strokeWidth,
        'stroke-dasharray': this.strokeDasharray,
        'stroke-dashoffset': this.strokeDashoffset,
        transition: `stroke-dashoffset ${this.transitionDuration}ms ease`
      };
    }
  },
  created() {
    this.animateCircle();
    this.animateValue();
  },
  methods: {
    animateCircle() {
      const circumference = 2 * Math.PI * this.radius;
      const score = parseFloat(this.score);
      const offset = circumference * ((10 - score) / 10);

      this.strokeDasharray = circumference;
      this.strokeDashoffset = circumference;
      this.transitionDuration = 900;
      setTimeout(() => (this.strokeDashoffset = offset), 100);
    },
    animateValue() {
      let [int, dec] = String(this.score).split('.');
      [int, dec] = [Number(int), Number(dec)];
      if (dec < 10) dec = dec * 10;
      const decPoint = (dec > 0) ? '.' : '';

      this.increaseValue(int, 'int', decPoint);
      (dec > 0) ? this.increaseValue(dec, 'dec') : this.valueDec = '';
    },
    increaseValue(value, type, decPoint=''){
      let interval = this.transitionDuration / value,
          counter = 0;

      let increaseInterval = setInterval(() => {
        if (counter === value) { window.clearInterval(increaseInterval); }
        (type == 'int') ? this.valueInt = counter + decPoint : this.valueDec = counter;
        counter++;
      }, interval)
    }
  }
};
</script>

<style lang="scss" scoped>
.display {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.circle {
  position: relative;
}
.circle__svg {
  transform: rotate(-90deg);
}
.circle__progress {
  fill: none;
  stroke-opacity: 0.3;
  stroke-linecap: round;
}
.circle__progress--fill {
  stroke-opacity: 1;
}
.percent {
  width: 100%;
  top: 50%;
  left: 50%;
  position: absolute;
  font-weight: bold;
  text-align: center;
  line-height: 2em;
  transform: translate(-50%, -50%);
}

.percent__int {
  font-size: 1.8em;
}
.percent__dec {
  font-size: 1.4em;
}
</style>