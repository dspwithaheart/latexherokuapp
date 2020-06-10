<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

import * as jsPDF from 'jspdf'

var doc = new jsPDF()

doc.text('Hello world!', 10, 10)
doc.save('a4.pdf')
export default {
  
}
</script>