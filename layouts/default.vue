<template>
  <header>
    <div class="head-top">
      <LayoutHeaderTop />
    </div>
    <div class="head-content">
      <LayoutHeaderContent />
    </div>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <LayoutFooter />
  </footer>
</template>
