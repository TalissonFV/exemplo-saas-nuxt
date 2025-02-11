import { n as __nuxt_component_5, e as __nuxt_component_0$1, k as __nuxt_component_4 } from './server.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    navigation: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULink = __nuxt_component_5;
      const _component_UIcon = __nuxt_component_0$1;
      const _component_UButton = __nuxt_component_4;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800" }, _attrs))}><div class="container mx-auto px-4"><div class="flex items-center justify-between h-16"><div>`);
      _push(ssrRenderComponent(_component_ULink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-chart-bar",
              class: "w-8 h-8 text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-xl font-bold"${_scopeId}>SaaSify</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-chart-bar",
                  class: "w-8 h-8 text-primary-500"
                }),
                createVNode("span", { class: "text-xl font-bold" }, "SaaSify")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-4"><!--[-->`);
      ssrRenderList(__props.navigation, (link) => {
        _push(ssrRenderComponent(_component_UButton, {
          key: link.name,
          variant: "ghost",
          color: "gray",
          to: link.href
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: link.icon,
                class: "w-5 h-5 mr-2"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(link.name)}`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: link.icon,
                  class: "w-5 h-5 mr-2"
                }, null, 8, ["name"]),
                createTextVNode(" " + toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/login",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-arrow-right",
              class: "w-5 h-5 mr-2"
            }, null, _parent2, _scopeId));
            _push2(` Get Started `);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "i-heroicons-arrow-right",
                class: "w-5 h-5 mr-2"
              }),
              createTextVNode(" Get Started ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
