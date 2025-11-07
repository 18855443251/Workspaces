<!-- src/views/router/contactDetail.vue -->
<template>
  <div class="contact-list">
    <div class="breadcrumb" v-if="currentPath.length > 0">
      <span @click="goToRoot">Home</span>
      <span v-for="(item, index) in currentPath" :key="index" @click="goToLevel(index)">
        > {{ item.name }}
      </span>
    </div>
    
    <h2>{{ currentLevelName }}</h2>
    
    <div class="contact-items">
      <div 
        v-for="item in currentItems" 
        :key="item.id" 
        class="contact-item"
        @click="handleItemClick(item)"
      >
        <div class="contact-avatar">
          {{ item.name.charAt(0) }}
        </div>
        <div class="contact-info">
          <h3>{{ item.name }}</h3>
          <p v-if="item.phone">{{ item.phone }}</p>
          <p v-else>{{ item.type === 'group' ? `${item.children.length} items` : 'Contact' }}</p>
        </div>
        <div class="item-arrow" v-if="item.type === 'group'">
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: '部门',
          type: 'group',
          children: [
            {
              id: 11,
              name: '小虎队',
              type: 'group',
              children: [
                {
                  id: 111,
                  name: '张三',
                  type: 'group',
                  children: [
                    { id: 1111, name: '传参', phone: '+1 234 567 890', type: 'contact' },
                    { id: 1112, name: '发', phone: '+1 987 654 321', type: 'contact' }
                  ]
                },
                {
                  id: 112,
                  name: '野花',
                  type: 'group',
                  children: [
                    { id: 1121, name: 'Robert Johnson', phone: '+1 456 789 123', type: 'contact' },
                    { id: 1122, name: 'Emily Davis', phone: '+1 321 654 987', type: 'contact' }
                  ]
                }
              ]
            },
            {
              id: 12,
              name: '从',
              type: 'group',
              children: [
                { id: 121, name: '传参', phone: '+1 123 456 789', type: 'contact' },
                { id: 122, name: '单点', phone: '+1 987 654 321', type: 'contact' }
              ]
            }
          ]
        },
        {
          id: 2,
          name: '歌名',
          type: 'group',
          children: [
            {
              id: 21,
              name: '全是爱',
              type: 'group',
              children: [
                { id: 211, name: '爱你', phone: '+1 555 123 456', type: 'contact' },
                { id: 212, name: '哎呀', phone: '+1 555 987 654', type: 'contact' }
              ]
            },
            {
              id: 22,
              name: '火苗',
              type: 'group',
              children: [
                { id: 221, name: '苗就', phone: '+1 555 456 789', type: 'contact' },
                { id: 222, name: '喵喵', phone: '+1 555 321 987', type: 'contact' }
              ]
            }
          ]
        }
      ],
      currentPath: []
    }
  },
  computed: {
    currentItems() {
      if (this.currentPath.length === 0) {
        return this.contacts;
      }
      
      let current = this.contacts;
      for (const pathItem of this.currentPath) {
        const found = current.find(item => item.id === pathItem.id);
        if (found && found.children) {
          current = found.children;
        } else {
          return [];
        }
      }
      return current;
    },
    currentLevelName() {
      if (this.currentPath.length === 0) {
        return 'Contact Directory';
      }
      return this.currentPath[this.currentPath.length - 1].name;
    }
  },
  methods: {
    handleItemClick(item) {
      if (item.type === 'group') {
        this.currentPath.push({ id: item.id, name: item.name });
      } else {
        this.$router.push(`/contactDetail/${item.id}`);
      }
    },
    goToRoot() {
      this.currentPath = [];
    },
    goToLevel(index) {
      this.currentPath = this.currentPath.slice(0, index + 1);
    }
  }
}
</script>

<style scoped>
.contact-list {
  padding: 20px;
}

.breadcrumb {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.breadcrumb span {
  cursor: pointer;
  color: #42b983;
  margin-right: 10px;
}

.breadcrumb span:hover {
  text-decoration: underline;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.2s;
  position: relative;
}

.contact-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.contact-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #42b983;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-right: 15px;
}

.contact-info {
  flex: 1;
}

.contact-info h3 {
  margin: 0 0 5px 0;
}

.contact-info p {
  margin: 0;
  color: #666;
}

.item-arrow {
  color: #999;
  font-size: 20px;
}
</style>