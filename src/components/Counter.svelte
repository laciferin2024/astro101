<script lang="ts">
  let count = $state(0) ;


  const increment = () => {
    console.log("count: " + count)
    count += 1;
  };
</script>

<button onclick={increment}>
  Count: {count}
</button>
