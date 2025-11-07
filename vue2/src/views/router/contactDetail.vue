<!-- src/views/router/ContactDetailView.vue -->
<template>
  <div class="contact-detail" v-if="contact">
    <div class="contact-header">
      <div class="contact-avatar">
        {{ contact.name.charAt(0) }}
      </div>
      <h2>{{ contact.name }}</h2>
    </div>
    
    <div class="contact-details">
      <div class="detail-item">
        <label>Phone:</label>
        <span>{{ contact.phone }}</span>
      </div>
      <div class="detail-item">
        <label>Email:</label>
        <span>{{ contact.email || 'N/A' }}</span>
      </div>
      <div class="detail-item">
        <label>Department:</label>
        <span>{{ contact.department || 'N/A' }}</span>
      </div>
      <div class="detail-item">
        <label>Position:</label>
        <span>{{ contact.position || 'N/A' }}</span>
      </div>
    </div>
    
    <div class="actions">
      <button class="back-button" @click="goBack">Back</button>
      <button class="call-button">Call</button>
      <button class="message-button">Message</button>
    </div>
  </div>
  
  <div class="contact-not-found" v-else>
    <h3>Contact not found</h3>
    <button @click="goBack">Back to Directory</button>
  </div>
</template>

<script>
export default {
  name: 'ContactDetailView',
  data() {
    return {
      allContacts: [
        { id: 1111, name: 'John Doe', phone: '+1 234 567 890', email: 'john.doe@company.com', department: 'Frontend Team', position: 'Senior Developer' },
        { id: 1112, name: 'Jane Smith', phone: '+1 987 654 321', email: 'jane.smith@company.com', department: 'Frontend Team', position: 'UI Designer' },
        { id: 1121, name: 'Robert Johnson', phone: '+1 456 789 123', email: 'robert.johnson@company.com', department: 'Backend Team', position: 'Backend Engineer' },
        { id: 1122, name: 'Emily Davis', phone: '+1 321 654 987', email: 'emily.davis@company.com', department: 'Backend Team', position: 'Database Specialist' },
        { id: 121, name: 'Alice Brown', phone: '+1 123 456 789', email: 'alice.brown@company.com', department: 'Marketing', position: 'Marketing Manager' },
        { id: 122, name: 'Bob Wilson', phone: '+1 987 654 321', email: 'bob.wilson@company.com', department: 'Marketing', position: 'Content Specialist' },
        { id: 211, name: 'Global Corp', phone: '+1 555 123 456', email: 'contact@globalcorp.com', department: 'Enterprise Clients', position: 'Client' },
        { id: 212, name: 'Tech Solutions', phone: '+1 555 987 654', email: 'info@techsolutions.com', department: 'Enterprise Clients', position: 'Client' },
        { id: 221, name: 'Local Shop', phone: '+1 555 456 789', email: 'shop@localstore.com', department: 'Small Business', position: 'Client' },
        { id: 222, name: 'Family Store', phone: '+1 555 321 987', email: 'family@store.com', department: 'Small Business', position: 'Client' }
      ]
    }
  },
  computed: {
    contact() {
      const contactId = parseInt(this.$route.params.id);
      return this.allContacts.find(contact => contact.id === contactId);
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.contact-detail {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 30px;
}

.contact-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #42b983;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  margin: 0 auto 15px;
}

.contact-details {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.detail-item {
  display: flex;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.detail-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.detail-item label {
  font-weight: bold;
  width: 120px;
  color: #333;
}

.detail-item span {
  flex: 1;
  color: #666;
}

.actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.back-button, .call-button, .message-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.back-button {
  background-color: #f0f0f0;
  color: #333;
}

.back-button:hover {
  background-color: #e0e0e0;
}

.call-button {
  background-color: #42b983;
  color: white;
}

.call-button:hover {
  background-color: #359c6d;
}

.message-button {
  background-color: #409eff;
  color: white;
}

.message-button:hover {
  background-color: #337ecc;
}

.contact-not-found {
  text-align: center;
  padding: 50px 20px;
}
</style>