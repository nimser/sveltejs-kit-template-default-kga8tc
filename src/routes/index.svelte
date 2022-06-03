
<script>
  export let data
</script>
<form method="post">
  <input type="text" name="firstname" placeholder="First name" />
	<input type="text" name="lastname" placeholder="Last name" />
	<input type="submit" value="send" />
</form>
<div>
	{#if data}
    <p>Posted data:</p>
	  <pre>{JSON.stringify(data)}</pre>
	{/if}
</div>