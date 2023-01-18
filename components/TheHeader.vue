<template>
  <header class="ease sticky top-0 z-30 -mt-1 border-b border-gray-200/25 bg-zinc-900 transition-all duration-[0.4s]">
    <div class="relative mx-auto grid h-20 max-w-screen-lg grid-cols-2 items-center justify-center gap-3 px-5">
      <NuxtLink to="/" class="col-span-1 mt-0 flex justify-start">
        <div class="flex items-center justify-center space-x-1 rounded bg-white px-2 text-2xl">
          <div class="stack" style="--stacks: 3">
            <span style="--index: 0">FRAN</span>
            <span style="--index: 1">FRAN</span>
            <span style="--index: 2">FRAN</span>
          </div>
          <Icon name="heroicons:code-bracket-solid" size="25" class="text-green-400" />
          <span class="text-black">JS</span>
        </div>
      </NuxtLink>
      <div class="mt-3 mb-2 flex justify-end lg:mt-0 lg:mb-0">
        <div class="mt-0 flex flex-row space-x-8 text-2xl font-medium lg:text-base">
          <MainNavigation />
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
  animation: stack 340ms cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards calc(var(--index) * 120ms),
    glitch 2s ease infinite 2s alternate-reverse;
}

.stack span:nth-child(odd) {
  --glitch-translate: 4px;
}
.stack span:nth-child(even) {
  --glitch-translate: -4px;
}

@keyframes stack {
  0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow: -2px 3px 0 #4ade80, 2px -3px 0 #2dd4bf;
  }
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
  4%,
  100% {
    text-shadow: none;
    transform: none;
  }
}
</style>
