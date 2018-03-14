# Nativescript Slider
  It's a fork of https://github.com/NativeScript/NativeScript/tree/master/tns-core-modules/ui/slider (tns core module) with dragged event.

## What's the difference?
    Added dragged event that fires when the user drags the slider.
    currently this event added just for android.
    
## Why should I use this event when I can use two-way binding for value property of slider?
    It is usefull when the value can change programmatically and by user for example when creating player.

## Installation
    
    tns plugin add nativescript-slider

## Usage
    
    <Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:seekbar="nativescript-slider"
      loaded="pageLoaded">
      <StackLayout>
        <seekbar:Slider value="50" maxValue="100" dragged="{{dragged}}" />
      </StackLayout>
    </Page>

    dragged(args){
       let newValue = args.newValue;
       let object = args.object;
    }
    
## How to use with Angular2

    import {registerElement} from "nativescript-angular/element-registry";
    
    registerElement("TNSSlider", () => require("nativescript-slider").Slider);
    
    <TNSSlider [value]="currentPosition" [maxValue]="movieLength" (dragged)="fromUser($event)"  ></TNSSlider>

   


  
