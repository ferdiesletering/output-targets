/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, Component, ElementRef, effect, input, output } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from 'component-library/components';

import { defineCustomElement as defineMyButton } from 'component-library/components/my-button.js';
import { defineCustomElement as defineMyButtonScoped } from 'component-library/components/my-button-scoped.js';
import { defineCustomElement as defineMyCheckbox } from 'component-library/components/my-checkbox.js';
import { defineCustomElement as defineMyComplexProps } from 'component-library/components/my-complex-props.js';
import { defineCustomElement as defineMyComplexPropsScoped } from 'component-library/components/my-complex-props-scoped.js';
import { defineCustomElement as defineMyComponent } from 'component-library/components/my-component.js';
import { defineCustomElement as defineMyComponentDelegatesFocus } from 'component-library/components/my-component-delegates-focus.js';
import { defineCustomElement as defineMyComponentScoped } from 'component-library/components/my-component-scoped.js';
import { defineCustomElement as defineMyCounter } from 'component-library/components/my-counter.js';
import { defineCustomElement as defineMyInput } from 'component-library/components/my-input.js';
import { defineCustomElement as defineMyInputScoped } from 'component-library/components/my-input-scoped.js';
import { defineCustomElement as defineMyList } from 'component-library/components/my-list.js';
import { defineCustomElement as defineMyListItem } from 'component-library/components/my-list-item.js';
import { defineCustomElement as defineMyListItemScoped } from 'component-library/components/my-list-item-scoped.js';
import { defineCustomElement as defineMyListScoped } from 'component-library/components/my-list-scoped.js';
import { defineCustomElement as defineMyPopover } from 'component-library/components/my-popover.js';
import { defineCustomElement as defineMyRadio } from 'component-library/components/my-radio.js';
import { defineCustomElement as defineMyRadioGroup } from 'component-library/components/my-radio-group.js';
import { defineCustomElement as defineMyRange } from 'component-library/components/my-range.js';
import { defineCustomElement as defineMyToggle } from 'component-library/components/my-toggle.js';
import { defineCustomElement as defineMyToggleContent } from 'component-library/components/my-toggle-content.js';
import { defineCustomElement as defineMyTransformTest } from 'component-library/components/my-transform-test.js';
@ProxyCmp({
  defineCustomElementFn: defineMyButton
})
@Component({
  selector: 'my-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyButton {
  protected el: HTMLMyButtonElement;
  readonly buttonType = input<Components.MyButton['buttonType']>();
  readonly color = input<Components.MyButton['color']>();
  readonly disabled = input<Components.MyButton['disabled']>();
  readonly download = input<Components.MyButton['download']>();
  readonly expand = input<Components.MyButton['expand']>();
  readonly fill = input<Components.MyButton['fill']>();
  readonly href = input<Components.MyButton['href']>();
  readonly mode = input<Components.MyButton['mode']>();
  readonly rel = input<Components.MyButton['rel']>();
  readonly shape = input<Components.MyButton['shape']>();
  readonly size = input<Components.MyButton['size']>();
  readonly strong = input<Components.MyButton['strong']>();
  readonly target = input<Components.MyButton['target']>();
  readonly type = input<Components.MyButton['type']>();
  readonly myFocus = output<CustomEvent<void>>();
  readonly myBlur = output<CustomEvent<void>>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['buttonType'] = this.buttonType() as Components.MyButton['buttonType']; });
    effect(() => { this.el['color'] = this.color() as Components.MyButton['color']; });
    effect(() => { this.el['disabled'] = this.disabled() as Components.MyButton['disabled']; });
    effect(() => { this.el['download'] = this.download() as Components.MyButton['download']; });
    effect(() => { this.el['expand'] = this.expand() as Components.MyButton['expand']; });
    effect(() => { this.el['fill'] = this.fill() as Components.MyButton['fill']; });
    effect(() => { this.el['href'] = this.href() as Components.MyButton['href']; });
    effect(() => { this.el['mode'] = this.mode() as Components.MyButton['mode']; });
    effect(() => { this.el['rel'] = this.rel() as Components.MyButton['rel']; });
    effect(() => { this.el['shape'] = this.shape() as Components.MyButton['shape']; });
    effect(() => { this.el['size'] = this.size() as Components.MyButton['size']; });
    effect(() => { this.el['strong'] = this.strong() as Components.MyButton['strong']; });
    effect(() => { this.el['target'] = this.target() as Components.MyButton['target']; });
    effect(() => { this.el['type'] = this.type() as Components.MyButton['type']; });
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyButtonScoped
})
@Component({
  selector: 'my-button-scoped',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyButtonScoped {
  protected el: HTMLMyButtonScopedElement;
  readonly buttonType = input<Components.MyButtonScoped['buttonType']>();
  readonly color = input<Components.MyButtonScoped['color']>();
  readonly disabled = input<Components.MyButtonScoped['disabled']>();
  readonly download = input<Components.MyButtonScoped['download']>();
  readonly expand = input<Components.MyButtonScoped['expand']>();
  readonly fill = input<Components.MyButtonScoped['fill']>();
  readonly href = input<Components.MyButtonScoped['href']>();
  readonly mode = input<Components.MyButtonScoped['mode']>();
  readonly rel = input<Components.MyButtonScoped['rel']>();
  readonly shape = input<Components.MyButtonScoped['shape']>();
  readonly size = input<Components.MyButtonScoped['size']>();
  readonly strong = input<Components.MyButtonScoped['strong']>();
  readonly target = input<Components.MyButtonScoped['target']>();
  readonly type = input<Components.MyButtonScoped['type']>();
  readonly myFocus = output<CustomEvent<void>>();
  readonly myBlur = output<CustomEvent<void>>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['buttonType'] = this.buttonType() as Components.MyButtonScoped['buttonType']; });
    effect(() => { this.el['color'] = this.color() as Components.MyButtonScoped['color']; });
    effect(() => { this.el['disabled'] = this.disabled() as Components.MyButtonScoped['disabled']; });
    effect(() => { this.el['download'] = this.download() as Components.MyButtonScoped['download']; });
    effect(() => { this.el['expand'] = this.expand() as Components.MyButtonScoped['expand']; });
    effect(() => { this.el['fill'] = this.fill() as Components.MyButtonScoped['fill']; });
    effect(() => { this.el['href'] = this.href() as Components.MyButtonScoped['href']; });
    effect(() => { this.el['mode'] = this.mode() as Components.MyButtonScoped['mode']; });
    effect(() => { this.el['rel'] = this.rel() as Components.MyButtonScoped['rel']; });
    effect(() => { this.el['shape'] = this.shape() as Components.MyButtonScoped['shape']; });
    effect(() => { this.el['size'] = this.size() as Components.MyButtonScoped['size']; });
    effect(() => { this.el['strong'] = this.strong() as Components.MyButtonScoped['strong']; });
    effect(() => { this.el['target'] = this.target() as Components.MyButtonScoped['target']; });
    effect(() => { this.el['type'] = this.type() as Components.MyButtonScoped['type']; });
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyCheckbox
})
@Component({
  selector: 'my-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyCheckbox {
  protected el: HTMLMyCheckboxElement;
  readonly alignment = input<Components.MyCheckbox['alignment']>();
  readonly checked = input<Components.MyCheckbox['checked']>();
  readonly color = input<Components.MyCheckbox['color']>();
  readonly disabled = input<Components.MyCheckbox['disabled']>();
  readonly indeterminate = input<Components.MyCheckbox['indeterminate']>();
  readonly justify = input<Components.MyCheckbox['justify']>();
  readonly labelPlacement = input<Components.MyCheckbox['labelPlacement']>();
  readonly mode = input<Components.MyCheckbox['mode']>();
  readonly name = input<Components.MyCheckbox['name']>();
  readonly value = input<Components.MyCheckbox['value']>();
  readonly ionChange = output<CustomEvent<IMyCheckboxCheckboxChangeEventDetail>>();
  readonly ionChangeNested = output<CustomEvent<IMyCheckboxCheckboxChangeNestedEventDetail>>();
  readonly ionFocus = output<CustomEvent<void>>();
  readonly ionBlur = output<CustomEvent<void>>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['alignment'] = this.alignment() as Components.MyCheckbox['alignment']; });
    effect(() => { this.el['checked'] = this.checked() as Components.MyCheckbox['checked']; });
    effect(() => { this.el['color'] = this.color() as Components.MyCheckbox['color']; });
    effect(() => { this.el['disabled'] = this.disabled() as Components.MyCheckbox['disabled']; });
    effect(() => { this.el['indeterminate'] = this.indeterminate() as Components.MyCheckbox['indeterminate']; });
    effect(() => { this.el['justify'] = this.justify() as Components.MyCheckbox['justify']; });
    effect(() => { this.el['labelPlacement'] = this.labelPlacement() as Components.MyCheckbox['labelPlacement']; });
    effect(() => { this.el['mode'] = this.mode() as Components.MyCheckbox['mode']; });
    effect(() => { this.el['name'] = this.name() as Components.MyCheckbox['name']; });
    effect(() => { this.el['value'] = this.value() as Components.MyCheckbox['value']; });
  }
}


import type { CheckboxChangeEventDetail as IMyCheckboxCheckboxChangeEventDetail } from 'component-library/components';
import type { CheckboxChangeNestedEventDetail as IMyCheckboxCheckboxChangeNestedEventDetail } from 'component-library/components';


@ProxyCmp({
  defineCustomElementFn: defineMyComplexProps
})
@Component({
  selector: 'my-complex-props',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyComplexProps {
  protected el: HTMLMyComplexPropsElement;
  readonly baz = input<Components.MyComplexProps['baz']>();
  readonly foo = input<Components.MyComplexProps['foo']>();
  readonly grault = input<Components.MyComplexProps['grault']>();
  readonly quux = input<Components.MyComplexProps['quux']>();
  readonly waldo = input<Components.MyComplexProps['waldo']>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['baz'] = this.baz() as Components.MyComplexProps['baz']; });
    effect(() => { this.el['foo'] = this.foo() as Components.MyComplexProps['foo']; });
    effect(() => { this.el['grault'] = this.grault() as Components.MyComplexProps['grault']; });
    effect(() => { this.el['quux'] = this.quux() as Components.MyComplexProps['quux']; });
    effect(() => { this.el['waldo'] = this.waldo() as Components.MyComplexProps['waldo']; });
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyComplexPropsScoped
})
@Component({
  selector: 'my-complex-props-scoped',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyComplexPropsScoped {
  protected el: HTMLMyComplexPropsScopedElement;
  readonly baz = input<Components.MyComplexPropsScoped['baz']>();
  readonly foo = input<Components.MyComplexPropsScoped['foo']>();
  readonly grault = input<Components.MyComplexPropsScoped['grault']>();
  readonly quux = input<Components.MyComplexPropsScoped['quux']>();
  readonly waldo = input<Components.MyComplexPropsScoped['waldo']>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['baz'] = this.baz() as Components.MyComplexPropsScoped['baz']; });
    effect(() => { this.el['foo'] = this.foo() as Components.MyComplexPropsScoped['foo']; });
    effect(() => { this.el['grault'] = this.grault() as Components.MyComplexPropsScoped['grault']; });
    effect(() => { this.el['quux'] = this.quux() as Components.MyComplexPropsScoped['quux']; });
    effect(() => { this.el['waldo'] = this.waldo() as Components.MyComplexPropsScoped['waldo']; });
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyComponent
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyComponent {
  protected el: HTMLMyComponentElement;
  readonly first = input<Components.MyComponent['first']>();
  readonly last = input<Components.MyComponent['last']>();
  readonly middleName = input<Components.MyComponent['middleName']>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['first'] = this.first() as Components.MyComponent['first']; });
    effect(() => { this.el['last'] = this.last() as Components.MyComponent['last']; });
    effect(() => { this.el['middleName'] = this.middleName() as Components.MyComponent['middleName']; });
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyComponentDelegatesFocus
})
@Component({
  selector: 'my-component-delegates-focus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyComponentDelegatesFocus {
  protected el: HTMLMyComponentDelegatesFocusElement;
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyComponentScoped
})
@Component({
  selector: 'my-component-scoped',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyComponentScoped {
  protected el: HTMLMyComponentScopedElement;
  readonly first = input<Components.MyComponentScoped['first']>();
  readonly last = input<Components.MyComponentScoped['last']>();
  readonly middleName = input<Components.MyComponentScoped['middleName']>();
  readonly myCustomEvent = output<CustomEvent<IMyComponentScopedIMyComponent.someVar>>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['first'] = this.first() as Components.MyComponentScoped['first']; });
    effect(() => { this.el['last'] = this.last() as Components.MyComponentScoped['last']; });
    effect(() => { this.el['middleName'] = this.middleName() as Components.MyComponentScoped['middleName']; });
  }
}


import type { IMyComponent as IMyComponentScopedIMyComponent } from 'component-library/components';


@ProxyCmp({
  defineCustomElementFn: defineMyCounter
})
@Component({
  selector: 'my-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyCounter {
  protected el: HTMLMyCounterElement;
  readonly startValue = input<Components.MyCounter['startValue']>();
  readonly count = output<CustomEvent<number>>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['startValue'] = this.startValue() as Components.MyCounter['startValue']; });
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyInput
})
@Component({
  selector: 'my-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyInput {
  protected el: HTMLMyInputElement;
  readonly accept = input<Components.MyInput['accept']>();
  readonly autocapitalize = input<Components.MyInput['autocapitalize']>();
  readonly autocomplete = input<Components.MyInput['autocomplete']>();
  readonly autocorrect = input<Components.MyInput['autocorrect']>();
  readonly autofocus = input<Components.MyInput['autofocus']>();
  readonly clearInput = input<Components.MyInput['clearInput']>();
  readonly clearOnEdit = input<Components.MyInput['clearOnEdit']>();
  readonly color = input<Components.MyInput['color']>();
  readonly disabled = input<Components.MyInput['disabled']>();
  readonly enterkeyhint = input<Components.MyInput['enterkeyhint']>();
  readonly inputmode = input<Components.MyInput['inputmode']>();
  readonly max = input<Components.MyInput['max']>();
  readonly maxlength = input<Components.MyInput['maxlength']>();
  readonly min = input<Components.MyInput['min']>();
  readonly minlength = input<Components.MyInput['minlength']>();
  readonly mode = input<Components.MyInput['mode']>();
  readonly multiple = input<Components.MyInput['multiple']>();
  readonly name = input<Components.MyInput['name']>();
  readonly pattern = input<Components.MyInput['pattern']>();
  readonly placeholder = input<Components.MyInput['placeholder']>();
  readonly readonly = input<Components.MyInput['readonly']>();
  readonly required = input<Components.MyInput['required']>();
  readonly size = input<Components.MyInput['size']>();
  readonly spellcheck = input<Components.MyInput['spellcheck']>();
  readonly step = input<Components.MyInput['step']>();
  readonly type = input<Components.MyInput['type']>();
  readonly value = input<Components.MyInput['value']>();
  readonly myInput = output<CustomEvent<KeyboardEvent>>();
  readonly myChange = output<CustomEvent<IMyInputInputChangeEventDetail>>();
  readonly myBlur = output<CustomEvent<void>>();
  readonly myFocus = output<CustomEvent<void>>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['accept'] = this.accept() as Components.MyInput['accept']; });
    effect(() => { this.el['autocapitalize'] = this.autocapitalize() as Components.MyInput['autocapitalize']; });
    effect(() => { this.el['autocomplete'] = this.autocomplete() as Components.MyInput['autocomplete']; });
    effect(() => { this.el['autocorrect'] = this.autocorrect() as Components.MyInput['autocorrect']; });
    effect(() => { this.el['autofocus'] = this.autofocus() as Components.MyInput['autofocus']; });
    effect(() => { this.el['clearInput'] = this.clearInput() as Components.MyInput['clearInput']; });
    effect(() => { this.el['clearOnEdit'] = this.clearOnEdit() as Components.MyInput['clearOnEdit']; });
    effect(() => { this.el['color'] = this.color() as Components.MyInput['color']; });
    effect(() => { this.el['disabled'] = this.disabled() as Components.MyInput['disabled']; });
    effect(() => { this.el['enterkeyhint'] = this.enterkeyhint() as Components.MyInput['enterkeyhint']; });
    effect(() => { this.el['inputmode'] = this.inputmode() as Components.MyInput['inputmode']; });
    effect(() => { this.el['max'] = this.max() as Components.MyInput['max']; });
    effect(() => { this.el['maxlength'] = this.maxlength() as Components.MyInput['maxlength']; });
    effect(() => { this.el['min'] = this.min() as Components.MyInput['min']; });
    effect(() => { this.el['minlength'] = this.minlength() as Components.MyInput['minlength']; });
    effect(() => { this.el['mode'] = this.mode() as Components.MyInput['mode']; });
    effect(() => { this.el['multiple'] = this.multiple() as Components.MyInput['multiple']; });
    effect(() => { this.el['name'] = this.name() as Components.MyInput['name']; });
    effect(() => { this.el['pattern'] = this.pattern() as Components.MyInput['pattern']; });
    effect(() => { this.el['placeholder'] = this.placeholder() as Components.MyInput['placeholder']; });
    effect(() => { this.el['readonly'] = this.readonly() as Components.MyInput['readonly']; });
    effect(() => { this.el['required'] = this.required() as Components.MyInput['required']; });
    effect(() => { this.el['size'] = this.size() as Components.MyInput['size']; });
    effect(() => { this.el['spellcheck'] = this.spellcheck() as Components.MyInput['spellcheck']; });
    effect(() => { this.el['step'] = this.step() as Components.MyInput['step']; });
    effect(() => { this.el['type'] = this.type() as Components.MyInput['type']; });
    effect(() => { this.el['value'] = this.value() as Components.MyInput['value']; });
  }
}


import type { InputChangeEventDetail as IMyInputInputChangeEventDetail } from 'component-library/components';


@ProxyCmp({
  defineCustomElementFn: defineMyInputScoped
})
@Component({
  selector: 'my-input-scoped',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyInputScoped {
  protected el: HTMLMyInputScopedElement;
  readonly accept = input<Components.MyInputScoped['accept']>();
  readonly autocapitalize = input<Components.MyInputScoped['autocapitalize']>();
  readonly autocomplete = input<Components.MyInputScoped['autocomplete']>();
  readonly autocorrect = input<Components.MyInputScoped['autocorrect']>();
  readonly autofocus = input<Components.MyInputScoped['autofocus']>();
  readonly clearInput = input<Components.MyInputScoped['clearInput']>();
  readonly clearOnEdit = input<Components.MyInputScoped['clearOnEdit']>();
  readonly color = input<Components.MyInputScoped['color']>();
  readonly disabled = input<Components.MyInputScoped['disabled']>();
  readonly enterkeyhint = input<Components.MyInputScoped['enterkeyhint']>();
  readonly inputmode = input<Components.MyInputScoped['inputmode']>();
  readonly max = input<Components.MyInputScoped['max']>();
  readonly maxlength = input<Components.MyInputScoped['maxlength']>();
  readonly min = input<Components.MyInputScoped['min']>();
  readonly minlength = input<Components.MyInputScoped['minlength']>();
  readonly mode = input<Components.MyInputScoped['mode']>();
  readonly multiple = input<Components.MyInputScoped['multiple']>();
  readonly name = input<Components.MyInputScoped['name']>();
  readonly pattern = input<Components.MyInputScoped['pattern']>();
  readonly placeholder = input<Components.MyInputScoped['placeholder']>();
  readonly readonly = input<Components.MyInputScoped['readonly']>();
  readonly required = input<Components.MyInputScoped['required']>();
  readonly size = input<Components.MyInputScoped['size']>();
  readonly spellcheck = input<Components.MyInputScoped['spellcheck']>();
  readonly step = input<Components.MyInputScoped['step']>();
  readonly type = input<Components.MyInputScoped['type']>();
  readonly value = input<Components.MyInputScoped['value']>();
  readonly myInput = output<CustomEvent<KeyboardEvent>>();
  readonly myChange = output<CustomEvent<IMyInputScopedInputChangeEventDetail>>();
  readonly myBlur = output<CustomEvent<void>>();
  readonly myFocus = output<CustomEvent<void>>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['accept'] = this.accept() as Components.MyInputScoped['accept']; });
    effect(() => { this.el['autocapitalize'] = this.autocapitalize() as Components.MyInputScoped['autocapitalize']; });
    effect(() => { this.el['autocomplete'] = this.autocomplete() as Components.MyInputScoped['autocomplete']; });
    effect(() => { this.el['autocorrect'] = this.autocorrect() as Components.MyInputScoped['autocorrect']; });
    effect(() => { this.el['autofocus'] = this.autofocus() as Components.MyInputScoped['autofocus']; });
    effect(() => { this.el['clearInput'] = this.clearInput() as Components.MyInputScoped['clearInput']; });
    effect(() => { this.el['clearOnEdit'] = this.clearOnEdit() as Components.MyInputScoped['clearOnEdit']; });
    effect(() => { this.el['color'] = this.color() as Components.MyInputScoped['color']; });
    effect(() => { this.el['disabled'] = this.disabled() as Components.MyInputScoped['disabled']; });
    effect(() => { this.el['enterkeyhint'] = this.enterkeyhint() as Components.MyInputScoped['enterkeyhint']; });
    effect(() => { this.el['inputmode'] = this.inputmode() as Components.MyInputScoped['inputmode']; });
    effect(() => { this.el['max'] = this.max() as Components.MyInputScoped['max']; });
    effect(() => { this.el['maxlength'] = this.maxlength() as Components.MyInputScoped['maxlength']; });
    effect(() => { this.el['min'] = this.min() as Components.MyInputScoped['min']; });
    effect(() => { this.el['minlength'] = this.minlength() as Components.MyInputScoped['minlength']; });
    effect(() => { this.el['mode'] = this.mode() as Components.MyInputScoped['mode']; });
    effect(() => { this.el['multiple'] = this.multiple() as Components.MyInputScoped['multiple']; });
    effect(() => { this.el['name'] = this.name() as Components.MyInputScoped['name']; });
    effect(() => { this.el['pattern'] = this.pattern() as Components.MyInputScoped['pattern']; });
    effect(() => { this.el['placeholder'] = this.placeholder() as Components.MyInputScoped['placeholder']; });
    effect(() => { this.el['readonly'] = this.readonly() as Components.MyInputScoped['readonly']; });
    effect(() => { this.el['required'] = this.required() as Components.MyInputScoped['required']; });
    effect(() => { this.el['size'] = this.size() as Components.MyInputScoped['size']; });
    effect(() => { this.el['spellcheck'] = this.spellcheck() as Components.MyInputScoped['spellcheck']; });
    effect(() => { this.el['step'] = this.step() as Components.MyInputScoped['step']; });
    effect(() => { this.el['type'] = this.type() as Components.MyInputScoped['type']; });
    effect(() => { this.el['value'] = this.value() as Components.MyInputScoped['value']; });
  }
}


import type { InputChangeEventDetail as IMyInputScopedInputChangeEventDetail } from 'component-library/components';


@ProxyCmp({
  defineCustomElementFn: defineMyList
})
@Component({
  selector: 'my-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyList {
  protected el: HTMLMyListElement;
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyListItem
})
@Component({
  selector: 'my-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyListItem {
  protected el: HTMLMyListItemElement;
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyListItemScoped
})
@Component({
  selector: 'my-list-item-scoped',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyListItemScoped {
  protected el: HTMLMyListItemScopedElement;
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyListScoped
})
@Component({
  selector: 'my-list-scoped',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyListScoped {
  protected el: HTMLMyListScopedElement;
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyPopover
})
@Component({
  selector: 'my-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyPopover {
  protected el: HTMLMyPopoverElement;
  readonly animated = input<Components.MyPopover['animated']>();
  readonly backdropDismiss = input<Components.MyPopover['backdropDismiss']>();
  readonly component = input.required<Components.MyPopover['component']>();
  readonly componentProps = input<Components.MyPopover['componentProps']>();
  readonly cssClass = input<Components.MyPopover['cssClass']>();
  readonly event = input<Components.MyPopover['event']>();
  readonly keyboardClose = input<Components.MyPopover['keyboardClose']>();
  readonly mode = input<Components.MyPopover['mode']>();
  readonly showBackdrop = input<Components.MyPopover['showBackdrop']>();
  readonly translucent = input<Components.MyPopover['translucent']>();
  readonly myPopoverDidPresent = output<CustomEvent<void>>();
  readonly myPopoverWillPresent = output<CustomEvent<void>>();
  readonly myPopoverWillDismiss = output<CustomEvent<IMyPopoverOverlayEventDetail>>();
  readonly myPopoverDidDismiss = output<CustomEvent<IMyPopoverOverlayEventDetail>>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['animated'] = this.animated() as Components.MyPopover['animated']; });
    effect(() => { this.el['backdropDismiss'] = this.backdropDismiss() as Components.MyPopover['backdropDismiss']; });
    effect(() => { this.el['component'] = this.component() as Components.MyPopover['component']; });
    effect(() => { this.el['componentProps'] = this.componentProps() as Components.MyPopover['componentProps']; });
    effect(() => { this.el['cssClass'] = this.cssClass() as Components.MyPopover['cssClass']; });
    effect(() => { this.el['event'] = this.event() as Components.MyPopover['event']; });
    effect(() => { this.el['keyboardClose'] = this.keyboardClose() as Components.MyPopover['keyboardClose']; });
    effect(() => { this.el['mode'] = this.mode() as Components.MyPopover['mode']; });
    effect(() => { this.el['showBackdrop'] = this.showBackdrop() as Components.MyPopover['showBackdrop']; });
    effect(() => { this.el['translucent'] = this.translucent() as Components.MyPopover['translucent']; });
  }
}


import type { OverlayEventDetail as IMyPopoverOverlayEventDetail } from 'component-library/components';


@ProxyCmp({
  defineCustomElementFn: defineMyRadio
})
@Component({
  selector: 'my-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyRadio {
  protected el: HTMLMyRadioElement;
  readonly alignment = input<Components.MyRadio['alignment']>();
  readonly color = input<Components.MyRadio['color']>();
  readonly disabled = input<Components.MyRadio['disabled']>();
  readonly justify = input<Components.MyRadio['justify']>();
  readonly labelPlacement = input<Components.MyRadio['labelPlacement']>();
  readonly mode = input<Components.MyRadio['mode']>();
  readonly name = input<Components.MyRadio['name']>();
  readonly value = input<Components.MyRadio['value']>();
  readonly ionFocus = output<CustomEvent<void>>();
  readonly ionBlur = output<CustomEvent<void>>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['alignment'] = this.alignment() as Components.MyRadio['alignment']; });
    effect(() => { this.el['color'] = this.color() as Components.MyRadio['color']; });
    effect(() => { this.el['disabled'] = this.disabled() as Components.MyRadio['disabled']; });
    effect(() => { this.el['justify'] = this.justify() as Components.MyRadio['justify']; });
    effect(() => { this.el['labelPlacement'] = this.labelPlacement() as Components.MyRadio['labelPlacement']; });
    effect(() => { this.el['mode'] = this.mode() as Components.MyRadio['mode']; });
    effect(() => { this.el['name'] = this.name() as Components.MyRadio['name']; });
    effect(() => { this.el['value'] = this.value() as Components.MyRadio['value']; });
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyRadioGroup
})
@Component({
  selector: 'my-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyRadioGroup {
  protected el: HTMLMyRadioGroupElement;
  readonly allowEmptySelection = input<Components.MyRadioGroup['allowEmptySelection']>();
  readonly compareWith = input<Components.MyRadioGroup['compareWith']>();
  readonly name = input<Components.MyRadioGroup['name']>();
  readonly value = input<Components.MyRadioGroup['value']>();
  readonly myChange = output<CustomEvent<IMyRadioGroupRadioGroupChangeEventDetail>>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['allowEmptySelection'] = this.allowEmptySelection() as Components.MyRadioGroup['allowEmptySelection']; });
    effect(() => { this.el['compareWith'] = this.compareWith() as Components.MyRadioGroup['compareWith']; });
    effect(() => { this.el['name'] = this.name() as Components.MyRadioGroup['name']; });
    effect(() => { this.el['value'] = this.value() as Components.MyRadioGroup['value']; });
  }
}


import type { RadioGroupChangeEventDetail as IMyRadioGroupRadioGroupChangeEventDetail } from 'component-library/components';


@ProxyCmp({
  defineCustomElementFn: defineMyRange
})
@Component({
  selector: 'my-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyRange {
  protected el: HTMLMyRangeElement;
  readonly color = input<Components.MyRange['color']>();
  readonly debounce = input<Components.MyRange['debounce']>();
  readonly disabled = input<Components.MyRange['disabled']>();
  readonly dualKnobs = input<Components.MyRange['dualKnobs']>();
  readonly max = input<Components.MyRange['max']>();
  readonly min = input<Components.MyRange['min']>();
  readonly mode = input<Components.MyRange['mode']>();
  readonly name = input<Components.MyRange['name']>();
  readonly pin = input<Components.MyRange['pin']>();
  readonly snaps = input<Components.MyRange['snaps']>();
  readonly step = input<Components.MyRange['step']>();
  readonly ticks = input<Components.MyRange['ticks']>();
  readonly value = input<Components.MyRange['value']>();
  readonly myChange = output<CustomEvent<IMyRangeRangeChangeEventDetail>>();
  readonly myFocus = output<CustomEvent<void>>();
  readonly myBlur = output<CustomEvent<void>>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['color'] = this.color() as Components.MyRange['color']; });
    effect(() => { this.el['debounce'] = this.debounce() as Components.MyRange['debounce']; });
    effect(() => { this.el['disabled'] = this.disabled() as Components.MyRange['disabled']; });
    effect(() => { this.el['dualKnobs'] = this.dualKnobs() as Components.MyRange['dualKnobs']; });
    effect(() => { this.el['max'] = this.max() as Components.MyRange['max']; });
    effect(() => { this.el['min'] = this.min() as Components.MyRange['min']; });
    effect(() => { this.el['mode'] = this.mode() as Components.MyRange['mode']; });
    effect(() => { this.el['name'] = this.name() as Components.MyRange['name']; });
    effect(() => { this.el['pin'] = this.pin() as Components.MyRange['pin']; });
    effect(() => { this.el['snaps'] = this.snaps() as Components.MyRange['snaps']; });
    effect(() => { this.el['step'] = this.step() as Components.MyRange['step']; });
    effect(() => { this.el['ticks'] = this.ticks() as Components.MyRange['ticks']; });
    effect(() => { this.el['value'] = this.value() as Components.MyRange['value']; });
  }
}


import type { RangeChangeEventDetail as IMyRangeRangeChangeEventDetail } from 'component-library/components';


@ProxyCmp({
  defineCustomElementFn: defineMyToggle
})
@Component({
  selector: 'my-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyToggle {
  protected el: HTMLMyToggleElement;
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyToggleContent
})
@Component({
  selector: 'my-toggle-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyToggleContent {
  protected el: HTMLMyToggleContentElement;
  readonly visible = input<Components.MyToggleContent['visible']>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['visible'] = this.visible() as Components.MyToggleContent['visible']; });
  }
}


@ProxyCmp({
  defineCustomElementFn: defineMyTransformTest
})
@Component({
  selector: 'my-transform-test',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class MyTransformTest {
  protected el: HTMLMyTransformTestElement;
  readonly message = input<Components.MyTransformTest['message']>();
  constructor(r: ElementRef) {
    this.el = r.nativeElement;
    effect(() => { this.el['message'] = this.message() as Components.MyTransformTest['message']; });
  }
}


