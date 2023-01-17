<template>
  <header class="sticky -mt-1 top-0 z-30 bg-zinc-900 transition-all duration-[0.4s] ease border-b border-gray-200/25">
    <div class="mx-auto px-4 max-w-screen-lg relative items-center grid-cols-2 gap-3 sm:px-6 lg:px-3 lg:grid lg:h-20 lg:justify-center">
      <NuxtLink to="/"  class="flex justify-center col-span-4 lg:col-span-1 lg:justify-start">
      <div class="flex justify-center items-center space-x-1 bg-white rounded px-2 text-2xl">
        <div class="stack" style="--stacks: 3;">
          <span style="--index: 0;">FRAN</span>
          <span style="--index: 1;">FRAN</span>
          <span style="--index: 2;">FRAN</span>
        </div>
        <Icon name="heroicons:code-bracket-solid" size="25" class="text-green-400"/> 
        <span class="text-black">JS</span>
      </div>
      </NuxtLink>
      <div class="flex justify-center mt-3 mb-2 lg:mt-0 lg:mb-0 lg:justify-end">
        <div class="flex flex-row space-x-8 mt-0 text-sm font-medium ">
          <Navigation />
        </div>
      </div>
    </div>
  </header>
</template>

<style>

.stack {
  display: grid;
  grid-template-columns: 1fr;
}

.stack span {
  color: black;
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
  font-size: 1.5rem;
  --stack-height: calc(100% / var(--stacks) - 1px);
  --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
  --clip-top: calc(var(--stack-height) * var(--index));
  --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
  clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
  animation: stack 340ms cubic-bezier(.46,.29,0,1.24) 1 backwards calc(var(--index) * 120ms), glitch 2s ease infinite 2s alternate-reverse;
}

.stack span:nth-child(odd) { --glitch-translate: 4px; }
.stack span:nth-child(even) { --glitch-translate: -4px; }

@keyframes stack {
  0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow: -2px 3px 0 #4ade80, 2px -3px 0 #2dd4bf;
  };
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    text-shadow: 2px -3px 0 #4ade80, -2px 3px 0 #2dd4bf;
  }
  100% {
    text-shadow: none;
  }
}

@keyframes glitch {
  0% {
    text-shadow: -2px 3px 0 #4ade80, 2px -3px 0 #2dd4bf;
    transform: translate(var(--glitch-translate));
  }
  2% {
    text-shadow: 2px -3px 0 #4ade80, -2px 3px 0 #2dd4bf;
  }
  4%, 100% {  text-shadow: none; transform: none; }
}
</style>