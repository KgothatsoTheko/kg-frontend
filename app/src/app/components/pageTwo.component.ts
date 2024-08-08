// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-pageTwo',
  templateUrl: './pageTwo.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class pageTwoComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_Hp2FaRpndCs8TPuv(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Hp2FaRpndCs8TPuv(bh) {
    try {
      bh = this.sd_gNqh1nxNGCeZAdYj(bh);
      //appendnew_next_sd_Hp2FaRpndCs8TPuv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Hp2FaRpndCs8TPuv');
    }
  }

  goBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_hyFl3vFwrycEgVYv(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LjyeviYhzyVLiQBC');
    }
  }
  //appendnew_flow_pageTwoComponent_start

  sd_gNqh1nxNGCeZAdYj(bh) {
    try {
      this.page.result = undefined;
      bh = this.sd_DcqIVmusiCRihzhq(bh);
      //appendnew_next_sd_gNqh1nxNGCeZAdYj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gNqh1nxNGCeZAdYj');
    }
  }

  sd_DcqIVmusiCRihzhq(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_BJpEYcERajKdbURj(bh);
      //appendnew_next_sd_DcqIVmusiCRihzhq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DcqIVmusiCRihzhq');
    }
  }

  sd_BJpEYcERajKdbURj(bh) {
    try {
      const page = this.page;
      bh.url1 = page.ssdUrl + 'get-all';

      bh = this.sd_onz3qHVcXFgeyifG(bh);
      //appendnew_next_sd_BJpEYcERajKdbURj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BJpEYcERajKdbURj');
    }
  }

  async sd_onz3qHVcXFgeyifG(bh) {
    try {
      let requestOptions = {
        url: bh.url1,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.body,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_brdrPcUEZaDLIo6s(bh);
      //appendnew_next_sd_onz3qHVcXFgeyifG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_onz3qHVcXFgeyifG');
    }
  }

  sd_brdrPcUEZaDLIo6s(bh) {
    try {
      const page = this.page;
      page.result = bh.result;
      //appendnew_next_sd_brdrPcUEZaDLIo6s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_brdrPcUEZaDLIo6s');
    }
  }

  sd_hyFl3vFwrycEgVYv(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_6T3bRYmxqkKynpzK(bh);
      //appendnew_next_sd_hyFl3vFwrycEgVYv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hyFl3vFwrycEgVYv');
    }
  }

  sd_6T3bRYmxqkKynpzK(bh) {
    try {
      const page = this.page;
      page.location.back();
      //appendnew_next_sd_6T3bRYmxqkKynpzK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6T3bRYmxqkKynpzK');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_pageTwoComponent_Catch
}
