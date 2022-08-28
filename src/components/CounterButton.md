```jsx
<div>
  <CounterButton ref="count"/>
  <button @click="() => {this.$refs.count.set(0)}">
    Reset
  </button>
</div>
```
