// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5GAkXaJ2X7qEVGyLW6URkW
// Component: 6UL6L3862Hyg

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { AntdMenu } from "@plasmicpkgs/antd5/skinny/registerMenu";
import { AntdMenuItem } from "@plasmicpkgs/antd5/skinny/registerMenu";
import Button from "../../Button"; // plasmic-import: -LisnOPJofcL/component
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import Card from "../../Card"; // plasmic-import: AEwQa5n9bvp8/component
import { CmsRowField } from "@plasmicpkgs/plasmic-cms";
import BotonLugares from "../../BotonLugares"; // plasmic-import: 4spuvqDqcbmi/component
import { ParallaxWrapper } from "@plasmicpkgs/react-scroll-parallax";

import { useScreenVariants as useScreenVariantseFkgQ5Oo74U } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: e-fkgQ5OO74u/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5GAkXaJ2X7qEVGyLW6URkW/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: 6UL6L3862Hyg/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 6YQ-s3QiGNsF/icon
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: uZPcVb-BA-6n/icon
import SquareMinusSvgIcon from "./icons/PlasmicIcon__SquareMinusSvg"; // plasmic-import: wFP_NiOwExPb/icon
import personajesAltoNatijotaPngFrWgai2GciiY from "./images/personajesAltoNatijotaPng.png"; // plasmic-import: FrWgai2GciiY/picture
import mesaOlgaRemovebgPreviewPngDsAq82Khaq7N from "./images/mesaOlgaRemovebgPreviewPng.png"; // plasmic-import: dsAQ82Khaq7N/picture
import mesaOlgaJpgG6LPdfZGkZno from "./images/mesaOlgaJpg.jpg"; // plasmic-import: G6lPdfZGkZNO/picture

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  menu?: Flex__<typeof AntdMenu>;
  personajes?: Flex__<typeof CmsQueryRepeater>;
  botonLugares?: Flex__<typeof BotonLugares>;
  conductores?: Flex__<"section">;
  personajesSeleccionados?: Flex__<"div">;
  mesa?: Flex__<"section">;
  mesaza?: Flex__<"div">;
  form?: Flex__<"section">;
  columns?: Flex__<"div">;
  introBloqueShoWs?: Flex__<"section">;
  scrollParallax?: Flex__<typeof ParallaxWrapper>;
  bloqueShoWs?: Flex__<"section">;
  programas?: Flex__<typeof CmsQueryRepeater>;
  link?: Flex__<"a">;
};

export interface DefaultHomepageProps {
  className?: string;
}

const $$ = {};

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "listaConductores",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantseFkgQ5Oo74U()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <AntdMenu
            data-plasmic-name={"menu"}
            data-plasmic-override={overrides.menu}
            className={classNames("__wab_instance", sty.menu)}
            mode={"horizontal"}
          >
            <AntdMenuItem
              className={classNames("__wab_instance", sty.menuItem__tDrt8)}
              danger={false}
              key={"menuItemKey1"}
              onClick={async () => {
                const $steps = {};

                $steps["updateListaConductores"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["listaConductores"]
                        },
                        operation: 0,
                        value: 1
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateListaConductores"] != null &&
                  typeof $steps["updateListaConductores"] === "object" &&
                  typeof $steps["updateListaConductores"].then === "function"
                ) {
                  $steps["updateListaConductores"] = await $steps[
                    "updateListaConductores"
                  ];
                }
              }}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gx50O
                )}
              >
                {"CONDUCTORES"}
              </div>
            </AntdMenuItem>
            <AntdMenuItem
              className={classNames("__wab_instance", sty.menuItem__fYo1G)}
              key={"menuItemKey2"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wn4V
                )}
              >
                {"SHOWS"}
              </div>
            </AntdMenuItem>
          </AntdMenu>
          {(() => {
            try {
              return $state.listaConductores;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <div className={classNames(projectcss.all, sty.freeBox__kkpMn)}>
              <Button
                className={classNames("__wab_instance", sty.button__qnOtc)}
                color={"blue"}
                onClick={async event => {
                  const $steps = {};

                  $steps["updateListaConductores"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["listaConductores"]
                          },
                          operation: 0,
                          value: 0
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          $stateSet(objRoot, variablePath, value);
                          return value;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateListaConductores"] != null &&
                    typeof $steps["updateListaConductores"] === "object" &&
                    typeof $steps["updateListaConductores"].then === "function"
                  ) {
                    $steps["updateListaConductores"] = await $steps[
                      "updateListaConductores"
                    ];
                  }
                }}
                shape={"rounded"}
                showStartIcon={true}
                startIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__yRnSy)}
                    role={"img"}
                  />
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cCfn8
                  )}
                >
                  {""}
                </div>
              </Button>
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__aOi5D
                )}
              >
                {"Selecciona la FORMACI\u00d3N\nde CONDUCTORES"}
              </h1>
              <section
                className={classNames(projectcss.all, sty.section__pLc4)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__dv1Pw)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2SYho
                    )}
                  >
                    {"limpiar seleccionados"}
                  </div>
                </Button>
              </section>
              <CmsQueryRepeater
                data-plasmic-name={"personajes"}
                data-plasmic-override={overrides.personajes}
                className={classNames("__wab_instance", sty.personajes)}
                desc={false}
                emptyMessage={
                  <DataCtxReader__>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___4MDzJ
                        )}
                      >
                        {"No matching published entries found."}
                      </div>
                    )}
                  </DataCtxReader__>
                }
                forceEmptyState={false}
                forceLoadingState={false}
                limit={0}
                loadingMessage={
                  <DataCtxReader__>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___4JcSy
                        )}
                      >
                        {"Loading..."}
                      </div>
                    )}
                  </DataCtxReader__>
                }
                noAutoRepeat={false}
                noLayout={false}
                orderBy={"nombre"}
                table={"personajes"}
                useDraft={false}
              >
                <DataCtxReader__>
                  {$ctx => (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ld7LB)}
                    >
                      <Card
                        className={classNames(
                          "__wab_instance",
                          sty.card__rxMBj
                        )}
                        title={
                          <CmsRowField
                            className={classNames(
                              "__wab_instance",
                              sty.cmsEntryField___0PISo
                            )}
                            themeResetClassName={classNames(
                              projectcss.root_reset,
                              projectcss.root_reset_tags,
                              projectcss.plasmic_default_styles,
                              projectcss.plasmic_mixins,
                              projectcss.plasmic_tokens,
                              plasmic_antd_5_hostless_css.plasmic_tokens,
                              plasmic_plasmic_rich_components_css.plasmic_tokens
                            )}
                          />
                        }
                      >
                        <PlasmicImg__
                          alt={""}
                          className={classNames(sty.img__mP2JO)}
                          displayHeight={"112px"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"100%"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"235px"}
                          loading={"lazy"}
                          src={(() => {
                            try {
                              return $ctx.plasmicCmsPersonajesItem.data.imagen
                                .url;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                        />
                      </Card>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__kqn7M
                        )}
                      >
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__bKbDc
                          )}
                        >
                          {(_par =>
                            !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                            (() => {
                              try {
                                return [1, 2, 3, 4];
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return [];
                                }
                                throw e;
                              }
                            })()
                          ).map((__plasmic_item_0, __plasmic_idx_0) => {
                            const currentItem = __plasmic_item_0;
                            const currentIndex = __plasmic_idx_0;
                            return (
                              <BotonLugares
                                data-plasmic-name={"botonLugares"}
                                data-plasmic-override={overrides.botonLugares}
                                className={classNames(
                                  "__wab_instance",
                                  sty.botonLugares
                                )}
                                key={currentIndex}
                              />
                            );
                          })}
                        </Stack__>
                      </div>
                    </div>
                  )}
                </DataCtxReader__>
              </CmsQueryRepeater>
            </div>
          ) : null}
          <section
            data-plasmic-name={"conductores"}
            data-plasmic-override={overrides.conductores}
            className={classNames(projectcss.all, sty.conductores)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"personajesSeleccionados"}
              data-plasmic-override={overrides.personajesSeleccionados}
              hasGap={true}
              className={classNames(
                projectcss.all,
                sty.personajesSeleccionados
              )}
            >
              <div className={classNames(projectcss.all, sty.column___4D8Jd)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__iSI1)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: personajesAltoNatijotaPngFrWgai2GciiY,
                    fullWidth: 209,
                    fullHeight: 382,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__woQpW)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__k4P7Z)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: personajesAltoNatijotaPngFrWgai2GciiY,
                    fullWidth: 209,
                    fullHeight: 382,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__fs51B)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__avIuy)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: personajesAltoNatijotaPngFrWgai2GciiY,
                    fullWidth: 209,
                    fullHeight: 382,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__fmVdZ)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__fGjly)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: personajesAltoNatijotaPngFrWgai2GciiY,
                    fullWidth: 209,
                    fullHeight: 382,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </Stack__>
          </section>
          <section
            data-plasmic-name={"mesa"}
            data-plasmic-override={overrides.mesa}
            className={classNames(projectcss.all, sty.mesa)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"mesaza"}
              data-plasmic-override={overrides.mesaza}
              hasGap={true}
              className={classNames(projectcss.all, sty.mesaza)}
            >
              <div className={classNames(projectcss.all, sty.column__wVn7G)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__kjQ1)}
                  displayHeight={
                    hasVariant(globalVariants, "screen", "mobile")
                      ? "210px"
                      : hasVariant(globalVariants, "screen", "tablet")
                      ? "424px"
                      : "644px"
                  }
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={
                    hasVariant(globalVariants, "screen", "mobile")
                      ? "436px"
                      : hasVariant(globalVariants, "screen", "tablet")
                      ? "603px"
                      : "auto"
                  }
                  loading={"lazy"}
                  src={{
                    src: mesaOlgaRemovebgPreviewPngDsAq82Khaq7N,
                    fullWidth: 626,
                    fullHeight: 398,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </Stack__>
          </section>
          <section
            data-plasmic-name={"form"}
            data-plasmic-override={overrides.form}
            className={classNames(projectcss.all, sty.form)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qZyJj
              )}
            >
              {"ESTA COMBINACI\u00d3N:"}
            </div>
            <section className={classNames(projectcss.all, sty.section__vHdLy)}>
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column___8Xc1C)}>
                  <Button
                    className={classNames("__wab_instance", sty.button___80Qqo)}
                    color={"green"}
                    shape={"rounded"}
                    showStartIcon={true}
                    startIcon={
                      <CheckSvgIcon
                        className={classNames(projectcss.all, sty.svg__dqdXq)}
                        role={"img"}
                      />
                    }
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xbSKd
                      )}
                    >
                      {"SUCEDI\u00d3 ALGUNA VEZ"}
                    </div>
                  </Button>
                </div>
                <div className={classNames(projectcss.all, sty.column__li2H)}>
                  <Button
                    className={classNames("__wab_instance", sty.button__ki1CT)}
                    color={"red"}
                    shape={"rounded"}
                    showStartIcon={true}
                    startIcon={
                      <SquareMinusSvgIcon
                        className={classNames(projectcss.all, sty.svg___6DpGx)}
                        role={"img"}
                      />
                    }
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__vkY7
                      )}
                    >
                      {"NUNCA SUCEDI\u00d3"}
                    </div>
                  </Button>
                </div>
              </div>
            </section>
          </section>
          <section
            data-plasmic-name={"introBloqueShoWs"}
            data-plasmic-override={overrides.introBloqueShoWs}
            className={classNames(projectcss.all, sty.introBloqueShoWs)}
          >
            <ParallaxWrapper
              data-plasmic-name={"scrollParallax"}
              data-plasmic-override={overrides.scrollParallax}
              className={classNames("__wab_instance", sty.scrollParallax)}
              previewInEditor={true}
              speed={20}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___2B3X5)}
                displayHeight={"915px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={{
                  src: mesaOlgaJpgG6LPdfZGkZno,
                  fullWidth: 1131,
                  fullHeight: 720,
                  aspectRatio: undefined
                }}
              />

              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__bX1Sk
                )}
              >
                {"SHOWS EN LOS QUE PARTICIP\u00d3 ESA FORMACION"}
              </h1>
            </ParallaxWrapper>
          </section>
          <section
            data-plasmic-name={"bloqueShoWs"}
            data-plasmic-override={overrides.bloqueShoWs}
            className={classNames(projectcss.all, sty.bloqueShoWs)}
          >
            <CmsQueryRepeater
              data-plasmic-name={"programas"}
              data-plasmic-override={overrides.programas}
              className={classNames("__wab_instance", sty.programas)}
              desc={false}
              emptyMessage={null}
              forceEmptyState={false}
              forceLoadingState={false}
              limit={0}
              loadingMessage={
                <DataCtxReader__>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tmhXk
                      )}
                    >
                      {"Loading..."}
                    </div>
                  )}
                </DataCtxReader__>
              }
              noAutoRepeat={false}
              noLayout={false}
              useDraft={false}
            >
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__j0OJi)}
                  >
                    {(_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return $ctx.plasmicCmsTableSchema.fields;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <Card
                          className={classNames(
                            "__wab_instance",
                            sty.card__flhDh
                          )}
                          key={currentIndex}
                          title={
                            <CmsRowField
                              className={classNames(
                                "__wab_instance",
                                sty.cmsEntryField__luhR
                              )}
                              themeResetClassName={classNames(
                                projectcss.root_reset,
                                projectcss.root_reset_tags,
                                projectcss.plasmic_default_styles,
                                projectcss.plasmic_mixins,
                                projectcss.plasmic_tokens,
                                plasmic_antd_5_hostless_css.plasmic_tokens,
                                plasmic_plasmic_rich_components_css.plasmic_tokens
                              )}
                            />
                          }
                        >
                          <CmsRowField
                            className={classNames(
                              "__wab_instance",
                              sty.cmsEntryField__hGukd
                            )}
                            dateFormat={"dddd, MMMM D, YYYY"}
                            field={"fecha"}
                            themeResetClassName={classNames(
                              projectcss.root_reset,
                              projectcss.root_reset_tags,
                              projectcss.plasmic_default_styles,
                              projectcss.plasmic_mixins,
                              projectcss.plasmic_tokens,
                              plasmic_antd_5_hostless_css.plasmic_tokens,
                              plasmic_plasmic_rich_components_css.plasmic_tokens
                            )}
                          />

                          <PlasmicLink__
                            data-plasmic-name={"link"}
                            data-plasmic-override={overrides.link}
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              projectcss.__wab_text,
                              sty.link
                            )}
                            href={(() => {
                              try {
                                return currentIndex;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "https://www.plasmic.app/";
                                }
                                throw e;
                              }
                            })()}
                            platform={"react"}
                          >
                            {"VER CAPITULO"}
                          </PlasmicLink__>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </DataCtxReader__>
            </CmsQueryRepeater>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "menu",
    "personajes",
    "botonLugares",
    "conductores",
    "personajesSeleccionados",
    "mesa",
    "mesaza",
    "form",
    "columns",
    "introBloqueShoWs",
    "scrollParallax",
    "bloqueShoWs",
    "programas",
    "link"
  ],
  menu: ["menu"],
  personajes: ["personajes", "botonLugares"],
  botonLugares: ["botonLugares"],
  conductores: ["conductores", "personajesSeleccionados"],
  personajesSeleccionados: ["personajesSeleccionados"],
  mesa: ["mesa", "mesaza"],
  mesaza: ["mesaza"],
  form: ["form", "columns"],
  columns: ["columns"],
  introBloqueShoWs: ["introBloqueShoWs", "scrollParallax"],
  scrollParallax: ["scrollParallax"],
  bloqueShoWs: ["bloqueShoWs", "programas", "link"],
  programas: ["programas", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  menu: typeof AntdMenu;
  personajes: typeof CmsQueryRepeater;
  botonLugares: typeof BotonLugares;
  conductores: "section";
  personajesSeleccionados: "div";
  mesa: "section";
  mesaza: "div";
  form: "section";
  columns: "div";
  introBloqueShoWs: "section";
  scrollParallax: typeof ParallaxWrapper;
  bloqueShoWs: "section";
  programas: typeof CmsQueryRepeater;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menu: makeNodeComponent("menu"),
    personajes: makeNodeComponent("personajes"),
    botonLugares: makeNodeComponent("botonLugares"),
    conductores: makeNodeComponent("conductores"),
    personajesSeleccionados: makeNodeComponent("personajesSeleccionados"),
    mesa: makeNodeComponent("mesa"),
    mesaza: makeNodeComponent("mesaza"),
    form: makeNodeComponent("form"),
    columns: makeNodeComponent("columns"),
    introBloqueShoWs: makeNodeComponent("introBloqueShoWs"),
    scrollParallax: makeNodeComponent("scrollParallax"),
    bloqueShoWs: makeNodeComponent("bloqueShoWs"),
    programas: makeNodeComponent("programas"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "jugar",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
