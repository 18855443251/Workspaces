<!--卡片跑马灯组件-->
<template>
  <div class="marquee-container">
    <div class="marquee-wrapper">
      <div 
        class="marquee-track" 
        :class="{ 'animate': isHovered === false }"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <div 
          v-for="(item, index) in repeatedItems" 
          :key="index" 
          class="card"
        >
          <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityCarousel",
  data() {
    return {
      isHovered: false,
      items: [
        { title: 'Card 1', content: 'First card content' },
        { title: 'Card 2', content: 'Second card content' },
        { title: 'Card 3', content: 'Third card content' },
        { title: 'Card 4', content: 'Fourth card content' },
        { title: 'Card 5', content: 'Fifth card content' }
      ]
    }
  },
  computed: {
    repeatedItems() {
      return [...this.items, ...this.items, ...this.items];
    }
  }
}
</script>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
}

.marquee-wrapper {
  width: 100%;
  position: relative;
}

.marquee-track {
  display: flex;
  gap: 20px;
  width: max-content;
}

.marquee-track.animate {
  animation: marquee 15s linear infinite;
}

.card {
  min-width: 100px;
  height: 250px;
  background: blue;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-content {
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-content h3 {
  margin: 0 0 10px 0;
  font-size: 1.2em;
}

.card-content p {
  margin: 0;
  font-size: 0.9em;
  opacity: 0.9;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.3333%);
  }
}
</style>