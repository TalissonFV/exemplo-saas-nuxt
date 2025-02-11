import { _ as _sfc_main$2 } from './Header-Czhi0YJu.mjs';
import { ref, withCtx, createVNode, createTextVNode, withModifiers, createBlock, createCommentVNode, openBlock, toDisplayString, defineComponent, resolveDynamicComponent, mergeProps, renderSlot, toRef, computed, useSSRContext } from 'vue';
import { _ as _export_sfc, i as useAuthStore, k as __nuxt_component_4, b as useUI, m as mergeConfig, t as twMerge, c as twJoin, d as appConfig } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './Card-uMj8kYMd.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3 } from './Input-CK4Q3JWu.mjs';
import { useRouter } from 'vue-router';
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

const container = {
  base: "mx-auto",
  padding: "px-4 sm:px-6 lg:px-8",
  constrained: "max-w-7xl"
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.container, container);
const _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
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
    const { ui, attrs } = useUI("container", toRef(props, "ui"), config);
    const containerClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.padding,
        ui.value.constrained
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      containerClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({ class: _ctx.containerClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.21.0_change-case@5.4.4_magicast@0.3.5_rollup@4.34.3_typescript@5.7.3_vite@6.1.0_@t_jtn3etlbmqcfj3yvrcugcocwte/node_modules/@nuxt/ui/dist/runtime/components/layout/Container.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const authStore = useAuthStore();
    const router = useRouter();
    const handleLogin = async () => {
      try {
        await authStore.login({
          email: email.value,
          password: password.value
        });
        router.push("/dashboard");
      } catch (err) {
        error.value = "Invalid email or password";
      }
    };
    const navigateToRegister = () => {
      router.push("/register");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$2;
      const _component_UContainer = __nuxt_component_1;
      const _component_UCard = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_2;
      const _component_UInput = __nuxt_component_3;
      const _component_UButton = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9ebbe7a6>`);
      _push(ssrRenderComponent(_component_Header, { navigation: _ctx.customNavigation }, null, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "flex items-center justify-center min-h-screen" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { class: "w-full max-w-md" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-2xl font-bold text-center" data-v-9ebbe7a6${_scopeId2}>Login</h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-2xl font-bold text-center" }, "Login")
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (error.value) {
                    _push3(`<p class="text-red-500 text-center" data-v-9ebbe7a6${_scopeId2}>${ssrInterpolate(error.value)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="text-center mt-4" data-v-9ebbe7a6${_scopeId2}><p data-v-9ebbe7a6${_scopeId2}>Don&#39;t have an account?</p>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    variant: "outline",
                    color: "primary",
                    onClick: navigateToRegister,
                    class: "mt-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Register `);
                      } else {
                        return [
                          createTextVNode(" Register ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    error.value ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-red-500 text-center"
                    }, toDisplayString(error.value), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "text-center mt-4" }, [
                      createVNode("p", null, "Don't have an account?"),
                      createVNode(_component_UButton, {
                        variant: "outline",
                        color: "primary",
                        onClick: navigateToRegister,
                        class: "mt-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Register ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form data-v-9ebbe7a6${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Email",
                    name: "email",
                    class: "mb-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: email.value,
                          "onUpdate:modelValue": ($event) => email.value = $event,
                          type: "email",
                          placeholder: "Enter your email",
                          required: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: email.value,
                            "onUpdate:modelValue": ($event) => email.value = $event,
                            type: "email",
                            placeholder: "Enter your email",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Password",
                    name: "password",
                    class: "mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: password.value,
                          "onUpdate:modelValue": ($event) => password.value = $event,
                          type: "password",
                          placeholder: "Enter your password",
                          required: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: password.value,
                            "onUpdate:modelValue": ($event) => password.value = $event,
                            type: "password",
                            placeholder: "Enter your password",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    type: "submit",
                    block: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Login`);
                      } else {
                        return [
                          createTextVNode("Login")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form>`);
                } else {
                  return [
                    createVNode("form", {
                      onSubmit: withModifiers(handleLogin, ["prevent"])
                    }, [
                      createVNode(_component_UFormGroup, {
                        label: "Email",
                        name: "email",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: email.value,
                            "onUpdate:modelValue": ($event) => email.value = $event,
                            type: "email",
                            placeholder: "Enter your email",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Password",
                        name: "password",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: password.value,
                            "onUpdate:modelValue": ($event) => password.value = $event,
                            type: "password",
                            placeholder: "Enter your password",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        type: "submit",
                        block: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Login")
                        ]),
                        _: 1
                      })
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { class: "w-full max-w-md" }, {
                header: withCtx(() => [
                  createVNode("h1", { class: "text-2xl font-bold text-center" }, "Login")
                ]),
                footer: withCtx(() => [
                  error.value ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-red-500 text-center"
                  }, toDisplayString(error.value), 1)) : createCommentVNode("", true),
                  createVNode("div", { class: "text-center mt-4" }, [
                    createVNode("p", null, "Don't have an account?"),
                    createVNode(_component_UButton, {
                      variant: "outline",
                      color: "primary",
                      onClick: navigateToRegister,
                      class: "mt-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Register ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("form", {
                    onSubmit: withModifiers(handleLogin, ["prevent"])
                  }, [
                    createVNode(_component_UFormGroup, {
                      label: "Email",
                      name: "email",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: email.value,
                          "onUpdate:modelValue": ($event) => email.value = $event,
                          type: "email",
                          placeholder: "Enter your email",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, {
                      label: "Password",
                      name: "password",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: password.value,
                          "onUpdate:modelValue": ($event) => password.value = $event,
                          type: "password",
                          placeholder: "Enter your password",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UButton, {
                      type: "submit",
                      block: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Login")
                      ]),
                      _: 1
                    })
                  ], 32)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ebbe7a6"]]);

export { login as default };
