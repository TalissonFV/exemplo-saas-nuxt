import { _ as _sfc_main$2 } from './Header-Czhi0YJu.mjs';
import { _ as _export_sfc, k as __nuxt_component_4, e as __nuxt_component_0$1, n as __nuxt_component_5, m as mergeConfig, b as useUI, l as useInjectButtonGroup, t as twMerge, c as twJoin, d as appConfig } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, defineComponent, toRef, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './Card-uMj8kYMd.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../nitro/nitro.mjs';
import 'mongoose';
import '@iconify/utils';
import 'consola/core';
import 'pinia';
import 'unhead';
import 'vue-router';

const badge = {
  base: "inline-flex items-center",
  rounded: "rounded-md",
  font: "font-medium",
  size: {
    xs: "text-xs px-1.5 py-0.5",
    sm: "text-xs px-2 py-1",
    md: "text-sm px-2 py-1",
    lg: "text-sm px-2.5 py-1.5"
  },
  gap: {
    xs: "gap-0.5",
    sm: "gap-1",
    md: "gap-1",
    lg: "gap-1.5"
  },
  color: {
    white: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
    },
    gray: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"
    },
    black: {
      solid: "text-white dark:text-gray-900 bg-gray-900 dark:bg-white"
    }
  },
  variant: {
    solid: "bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",
    outline: "text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",
    soft: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",
    subtle: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"
  },
  icon: {
    base: "flex-shrink-0",
    size: {
      xs: "h-4 w-4",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-5 w-5"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.badge, badge);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("badge", toRef(props, "ui"), config);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.trailing || props.trailingIcon;
    });
    const badgeClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? undefined : _a[props.color]) == null ? undefined : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        variant == null ? undefined : variant.replaceAll("{color}", props.color)
      ), props.class);
    });
    const leadingIconName = computed(() => {
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value]
      );
    });
    return {
      attrs,
      isLeading,
      isTrailing,
      badgeClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$1;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.badgeClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
    if (_ctx.isLeading && _ctx.leadingIconName) {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    if (_ctx.label) {
      _push(`<span>${ssrInterpolate(_ctx.label)}</span>`);
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
    if (_ctx.isTrailing && _ctx.trailingIconName) {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.21.0_change-case@5.4.4_magicast@0.3.5_rollup@4.34.3_typescript@5.7.3_vite@6.1.0_@t_jtn3etlbmqcfj3yvrcugcocwte/node_modules/@nuxt/ui/dist/runtime/components/elements/Badge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const customNavigation = [
      { name: "Features", href: "#features", icon: "i-heroicons-sparkles" },
      { name: "Pricing", href: "#pricing", icon: "i-heroicons-currency-dollar" },
      { name: "Blog", href: "#blog", icon: "i-heroicons-newspaper" },
      { name: "Contact", href: "#contact", icon: "i-heroicons-envelope" }
    ];
    const features = [
      {
        icon: "i-heroicons-chart-bar",
        title: "Advanced Analytics",
        description: "Get deep insights into your business metrics"
      },
      {
        icon: "i-heroicons-scale",
        title: "Scalable Infrastructure",
        description: "Grow without worrying about technical limits"
      },
      {
        icon: "i-heroicons-bolt",
        title: "Real-time Processing",
        description: "Instant updates and lightning-fast responses"
      }
    ];
    const pricing = [
      {
        title: "Starter",
        price: "$29",
        interval: "/month",
        features: ["Up to 5 users", "Basic analytics", "24/7 support", "1GB storage"],
        highlight: false
      },
      {
        title: "Professional",
        price: "$99",
        interval: "/month",
        features: ["Up to 20 users", "Advanced analytics", "Priority support", "10GB storage"],
        highlight: true
      },
      {
        title: "Enterprise",
        price: "Custom",
        interval: "/month",
        features: ["Unlimited users", "Custom solutions", "Dedicated support", "Unlimited storage"],
        highlight: false
      }
    ];
    const footerLinks = [
      {
        title: "Product",
        links: ["Features", "Pricing", "Documentation", "Status"]
      },
      {
        title: "Company",
        links: ["About", "Blog", "Careers", "Contact"]
      },
      {
        title: "Legal",
        links: ["Privacy", "Terms", "Security", "GDPR"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$2;
      const _component_UBadge = __nuxt_component_1;
      const _component_UButton = __nuxt_component_4;
      const _component_UCard = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_0$1;
      const _component_ULink = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white dark:bg-gray-900" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, { navigation: customNavigation }, null, _parent));
      _push(`<section class="relative bg-gradient-to-br from-indigo-600 to-purple-500 py-20 mt-24"><div class="container mx-auto px-4 text-center">`);
      _push(ssrRenderComponent(_component_UBadge, {
        variant: "solid",
        color: "white",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Version 2.0 is here!`);
          } else {
            return [
              createTextVNode("Version 2.0 is here!")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-5xl font-bold text-white mb-6"> Simplify Your Workflow with Smart Automation </h1><p class="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto"> Transform your business processes with our AI-powered automation platform. Focus on what matters while we handle the rest. </p><div class="flex justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "xl",
        color: "white",
        variant: "solid",
        class: "px-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get Started Free `);
          } else {
            return [
              createTextVNode(" Get Started Free ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        size: "xl",
        color: "white",
        variant: "outline",
        class: "px-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Watch Demo `);
          } else {
            return [
              createTextVNode(" Watch Demo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="py-20 bg-gray-50 dark:bg-gray-800" id="features"><div class="container mx-auto px-4"><div class="text-center mb-16">`);
      _push(ssrRenderComponent(_component_UBadge, {
        variant: "subtle",
        color: "primary",
        class: "mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Why choose us`);
          } else {
            return [
              createTextVNode("Why choose us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4"> Everything You Need to Succeed </h2><p class="text-gray-600 dark:text-gray-300 max-w-xl mx-auto"> Powerful features designed to help you work smarter, not harder </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(ssrRenderComponent(_component_UCard, {
          key: feature.title,
          class: "hover:shadow-lg transition-shadow"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: feature.icon,
                class: "w-12 h-12 text-primary-500 mb-4"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-xl font-semibold mb-2"${_scopeId}>${ssrInterpolate(feature.title)}</h3><p class="text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(feature.description)}</p>`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: feature.icon,
                  class: "w-12 h-12 text-primary-500 mb-4"
                }, null, 8, ["name"]),
                createVNode("h3", { class: "text-xl font-semibold mb-2" }, toDisplayString(feature.title), 1),
                createVNode("p", { class: "text-gray-600 dark:text-gray-300" }, toDisplayString(feature.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-20" id="pricing"><div class="container mx-auto px-4"><div class="text-center mb-16">`);
      _push(ssrRenderComponent(_component_UBadge, {
        variant: "subtle",
        color: "primary",
        class: "mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pricing`);
          } else {
            return [
              createTextVNode("Pricing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4"> Simple, Transparent Pricing </h2><p class="text-gray-600 dark:text-gray-300 max-w-xl mx-auto"> Start for free and scale as you grow. No hidden fees, ever. </p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(pricing, (plan) => {
        _push(ssrRenderComponent(_component_UCard, {
          key: plan.title,
          class: ["relative border-2 dark:border-gray-700", { "border-primary-500": plan.highlight }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center"${_scopeId}><h3 class="text-2xl font-bold mb-2"${_scopeId}>${ssrInterpolate(plan.title)}</h3><p class="text-4xl font-bold mb-4"${_scopeId}>${ssrInterpolate(plan.price)} <span class="text-lg text-gray-500"${_scopeId}>${ssrInterpolate(plan.interval)}</span></p>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                variant: "outline",
                class: "w-full mb-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Get Started `);
                  } else {
                    return [
                      createTextVNode(" Get Started ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<ul class="space-y-3 text-left"${_scopeId}><!--[-->`);
              ssrRenderList(plan.features, (item) => {
                _push2(`<li class="flex items-center gap-2 text-gray-600 dark:text-gray-300"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-check-circle",
                  class: "w-5 h-5 text-green-500"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(item)}</li>`);
              });
              _push2(`<!--]--></ul></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createVNode("h3", { class: "text-2xl font-bold mb-2" }, toDisplayString(plan.title), 1),
                  createVNode("p", { class: "text-4xl font-bold mb-4" }, [
                    createTextVNode(toDisplayString(plan.price) + " ", 1),
                    createVNode("span", { class: "text-lg text-gray-500" }, toDisplayString(plan.interval), 1)
                  ]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    variant: "outline",
                    class: "w-full mb-6"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Get Started ")
                    ]),
                    _: 1
                  }),
                  createVNode("ul", { class: "space-y-3 text-left" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (item) => {
                      return openBlock(), createBlock("li", {
                        key: item,
                        class: "flex items-center gap-2 text-gray-600 dark:text-gray-300"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-check-circle",
                          class: "w-5 h-5 text-green-500"
                        }),
                        createTextVNode(" " + toDisplayString(item), 1)
                      ]);
                    }), 128))
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><footer class="bg-gray-900 text-gray-300 py-12"><div class="container mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-4 gap-8"><div><div class="flex items-center gap-2 mb-4">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chart-bar",
        class: "w-8 h-8 text-primary-500"
      }, null, _parent));
      _push(`<span class="text-xl font-bold text-white">SaaSify</span></div><p class="text-sm">Making work easier since 2023</p></div><!--[-->`);
      ssrRenderList(footerLinks, (section) => {
        _push(`<div><h4 class="text-white font-semibold mb-4">${ssrInterpolate(section.title)}</h4><ul class="space-y-2"><!--[-->`);
        ssrRenderList(section.links, (link) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_ULink, { class: "hover:text-white transition-colors" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div><div class="border-t border-gray-800 mt-12 pt-8 text-center text-sm"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} SaaSify. All rights reserved. </div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
