import { ac as Event, ab as Dispatcher, o as openBlock, M as createElementBlock, E as createVNode, f as withCtx, b as resolveComponent, L as createTextVNode } from "./_plugin-vue_export-helper-38a22d9e.js";
const _hoisted_1 = { class: "d-flex align-center justify-center fill-height" };
const _sfc_main = {
  __name: "Tools",
  setup(__props) {
    const event = Event.create("center", "add", {
      template: "<h1 data-id='title' style='font-size: 10vh'>Louvor JA</h1>",
      animate: {
        cssClass: "animate__animated animate__fadeIn animate__faster"
      }
    });
    const dispatcher = new Dispatcher();
    dispatcher.register();
    window.addEventListener(
      "beforeunload",
      function(e) {
        dispatcher == null ? void 0 : dispatcher.unregister();
      },
      false
    );
    const add = () => {
      dispatcher.send(event);
    };
    const clear = () => {
      dispatcher.send(
        event.with({
          layer: "*",
          command: "clear",
          args: {
            animate: {
              cssClass: "animate__animated animate__fadeOut animate__faster"
            },
            delay: 500
          }
        })
      );
    };
    const rm = () => {
      dispatcher.send(
        event.with({
          layer: "center",
          command: "remove",
          args: {
            dataId: "title",
            animate: {
              cssClass: "animate__animated animate__fadeOut animate__faster"
            },
            delay: 500
          }
        })
      );
    };
    return (_ctx, _cache) => {
      const _component_v_btn = resolveComponent("v-btn");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_v_btn, {
          onClick: _cache[0] || (_cache[0] = ($event) => add())
        }, {
          default: withCtx(() => [
            createTextVNode("add")
          ]),
          _: 1
        }),
        createVNode(_component_v_btn, {
          onClick: _cache[1] || (_cache[1] = ($event) => rm())
        }, {
          default: withCtx(() => [
            createTextVNode("rm")
          ]),
          _: 1
        }),
        createVNode(_component_v_btn, {
          onClick: _cache[2] || (_cache[2] = ($event) => clear())
        }, {
          default: withCtx(() => [
            createTextVNode("clear")
          ]),
          _: 1
        })
      ]);
    };
  }
};
export {
  _sfc_main as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHMtZjMwMjQwMjQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9Ub29scy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmaWxsLWhlaWdodFwiPlxuICAgIDx2LWJ0biBAY2xpY2s9XCJhZGQoKVwiPmFkZDwvdi1idG4+XG4gICAgPHYtYnRuIEBjbGljaz1cInJtKClcIj5ybTwvdi1idG4+XG4gICAgPHYtYnRuIEBjbGljaz1cImNsZWFyKClcIj5jbGVhcjwvdi1idG4+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmNvbnN0IGRlYnVnID0gdHJ1ZTtcblxuaW1wb3J0IHsgRGlzcGF0Y2hlciwgRXZlbnQgfSBmcm9tIFwiQGxvdXZvcmphL3NoYXJlZFwiO1xuLypcbiAqICBESVNQQUNUSEVSXG4gKi9cblxuY29uc3QgZXZlbnQgPSBFdmVudC5jcmVhdGUoXCJjZW50ZXJcIiwgXCJhZGRcIiwge1xuICB0ZW1wbGF0ZTogXCI8aDEgZGF0YS1pZD0ndGl0bGUnIHN0eWxlPSdmb250LXNpemU6IDEwdmgnPkxvdXZvciBKQTwvaDE+XCIsXG4gIGFuaW1hdGU6IHtcbiAgICBjc3NDbGFzczogXCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW4gYW5pbWF0ZV9fZmFzdGVyXCIsXG4gIH0sXG59KTtcblxuY29uc3QgZGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKCk7XG5kaXNwYXRjaGVyLnJlZ2lzdGVyKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICBcImJlZm9yZXVubG9hZFwiLFxuICBmdW5jdGlvbiAoZSkge1xuICAgIGRpc3BhdGNoZXI/LnVucmVnaXN0ZXIoKTtcbiAgfSxcbiAgZmFsc2Vcbik7XG5cbmNvbnN0IGFkZCA9ICgpID0+IHtcbiAgZGlzcGF0Y2hlci5zZW5kKGV2ZW50KTtcbn07XG5jb25zdCBjbGVhciA9ICgpID0+IHtcbiAgZGlzcGF0Y2hlci5zZW5kKFxuICAgIGV2ZW50LndpdGgoe1xuICAgICAgbGF5ZXI6IFwiKlwiLFxuICAgICAgY29tbWFuZDogXCJjbGVhclwiLFxuICAgICAgYXJnczoge1xuICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgY3NzQ2xhc3M6IFwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZU91dCBhbmltYXRlX19mYXN0ZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAgZGVsYXk6IDUwMCxcbiAgICAgIH0sXG4gICAgfSlcbiAgKTtcbn07XG5jb25zdCBybSA9ICgpID0+IHtcbiAgZGlzcGF0Y2hlci5zZW5kKFxuICAgIGV2ZW50LndpdGgoe1xuICAgICAgbGF5ZXI6IFwiY2VudGVyXCIsXG4gICAgICBjb21tYW5kOiBcInJlbW92ZVwiLFxuICAgICAgYXJnczoge1xuICAgICAgICBkYXRhSWQ6IFwidGl0bGVcIixcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgIGNzc0NsYXNzOiBcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVPdXQgYW5pbWF0ZV9fZmFzdGVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICB9LFxuICAgIH0pXG4gICk7XG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFnQkEsVUFBTSxRQUFRLE1BQU0sT0FBTyxVQUFVLE9BQU87QUFBQSxNQUMxQyxVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWDtBQUFBLElBQ0gsQ0FBQztBQUVELFVBQU0sYUFBYSxJQUFJO0FBQ3ZCLGVBQVcsU0FBUTtBQUVuQixXQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0EsU0FBVSxHQUFHO0FBQ1gsaURBQVk7QUFBQSxNQUNiO0FBQUEsTUFDRDtBQUFBLElBQ0Y7QUFFQSxVQUFNLE1BQU0sTUFBTTtBQUNoQixpQkFBVyxLQUFLLEtBQUs7QUFBQSxJQUN2QjtBQUNBLFVBQU0sUUFBUSxNQUFNO0FBQ2xCLGlCQUFXO0FBQUEsUUFDVCxNQUFNLEtBQUs7QUFBQSxVQUNULE9BQU87QUFBQSxVQUNQLFNBQVM7QUFBQSxVQUNULE1BQU07QUFBQSxZQUNKLFNBQVM7QUFBQSxjQUNQLFVBQVU7QUFBQSxZQUNYO0FBQUEsWUFDRCxPQUFPO0FBQUEsVUFDUjtBQUFBLFFBQ1AsQ0FBSztBQUFBLE1BQ0w7QUFBQSxJQUNBO0FBQ0EsVUFBTSxLQUFLLE1BQU07QUFDZixpQkFBVztBQUFBLFFBQ1QsTUFBTSxLQUFLO0FBQUEsVUFDVCxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsVUFDVCxNQUFNO0FBQUEsWUFDSixRQUFRO0FBQUEsWUFDUixTQUFTO0FBQUEsY0FDUCxVQUFVO0FBQUEsWUFDWDtBQUFBLFlBQ0QsT0FBTztBQUFBLFVBQ1I7QUFBQSxRQUNQLENBQUs7QUFBQSxNQUNMO0FBQUEsSUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
