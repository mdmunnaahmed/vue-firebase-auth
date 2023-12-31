<template>
  <span class="badge" :class="mode + color">{{ text }}</span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: null,
    },
    mode: {
      type: String,
      required: false,
      default: "fill",
    },
    color: {
      type: String,
      required: false,
      default: "base",
    },
  },
};
</script>

<style lang="scss" scoped>
.badge--base {
  background-color: hsl(var(--base) / 0.15);
  border: 1px solid hsl(var(--base));
  color: hsl(var(--base));
}
.badge--accent {
  background-color: hsl(var(--accent) / 0.15);
  border: 1px solid hsl(var(--accent));
  color: hsl(var(--accent));
}
.badge--primary {
  background-color: hsl(var(--primary) / 0.15);
  border: 1px solid hsl(var(--primary));
  color: hsl(var(--primary));
}
.badge--secondary {
  background-color: hsl(var(--secondary) / 0.15);
  border: 1px solid hsl(var(--secondary));
  color: hsl(var(--secondary));
}
.badge--success {
  background-color: hsl(var(--success) / 0.15);
  border: 1px solid hsl(var(--success));
  color: hsl(var(--success));
}
.badge--danger {
  background-color: hsl(var(--danger) / 0.15);
  border: 1px solid hsl(var(--danger));
  color: hsl(var(--danger));
}
.badge--warning {
  background-color: hsl(var(--warning) / 0.15);
  border: 1px solid hsl(var(--warning));
  color: hsl(var(--warning));
}
.badge--info {
  background-color: hsl(var(--info) / 0.15);
  border: 1px solid hsl(var(--info));
  color: hsl(var(--info));
}
.badge--dark {
  background-color: hsl(var(--dark) / 0.15);
  border: 1px solid hsl(var(--dark));
  color: hsl(var(--dark));
}
.badge--white {
  background-color: hsl(var(--white) / 0.15);
  border: 1px solid hsl(var(--white));
  color: hsl(var(--white));
}

.badge {
  border-radius: 18px;
  padding: 4px 15px;
  &.badge--icon {
    padding: 6px;
    border-radius: 5px;
  }
  &.badge--lg {
    padding: 6px 16px;
  }
  &.badge--md {
    padding: 4px 12px;
  }
  &.badge--sm {
    padding: 3px 10px;
  }
}

// Badge Fill
$colors: "primary" hsl(var(--primary)), "secondary" hsl(var(--secondary)),
  "success" hsl(var(--success)), "danger" hsl(var(--danger)),
  "warning" hsl(var(--warning)), "info" hsl(var(--info)),
  "white" hsl(var(--white)), "dark" hsl(var(--dark)), "base" hsl(var(--base));

@each $name, $color in $colors {
  .badge--fill-#{$name} {
    background-color: $color;
    border: 1px solid $color;
    color: hsl(var(--white));
    &:hover {
      color: hsl(var(--white));
    }
  }
}
</style>
