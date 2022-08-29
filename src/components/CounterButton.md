```jsx
<div>
  <CounterButton ref="count"/>
  <button v-focus @click="() => {this.$refs.count.set(0)}">
    Reset
  </button>
</div>
```
