// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-pageOne',
  templateUrl: './pageOne.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class pageOneComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_tGe8RENK8a3EiH3q(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_tGe8RENK8a3EiH3q(bh) {
    try {
      bh = this.sd_UfR086ZxqmZLnVx1(bh);
      //appendnew_next_sd_tGe8RENK8a3EiH3q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tGe8RENK8a3EiH3q');
    }
  }

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_dgjeYT95OS05KBqW(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3eHTVlZH5ij3sNIY');
    }
  }

  cancel(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_cbI8mQtDSWs6k8AU(bh);
      //appendnew_next_cancel
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1Je3oypAfCjvkQy6');
    }
  }

  upload(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_RKBco2Z7o7II2LGx(bh);
      //appendnew_next_upload
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XwLrXbMaxLsI1eHf');
    }
  }

  goToBackend(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_41ZTrsTpkqz0LOUL(bh);
      //appendnew_next_goToBackend
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qTAVfHVj7IkU9F6k');
    }
  }

  getFromBackend(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_lRiBBU7sJvHWT9Hg(bh);
      //appendnew_next_getFromBackend
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KQyYllxRZq49yHoP');
    }
  }

  sd_OAjwCoY4iw4xnq9q(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_NcjEpxIozm1vObYO(bh);
      //appendnew_next_sd_OAjwCoY4iw4xnq9q
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OAjwCoY4iw4xnq9q');
    }
  }
  //appendnew_flow_pageOneComponent_start

  sd_UfR086ZxqmZLnVx1(bh) {
    try {
      bh = this.sd_q2xIbB12lBObbt0w(bh);
      //appendnew_next_sd_UfR086ZxqmZLnVx1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UfR086ZxqmZLnVx1');
    }
  }

  sd_q2xIbB12lBObbt0w(bh) {
    try {
      this.page.image = bh.result;
      bh = this.sd_hnE8aqoxzSSOYDPV(bh);
      //appendnew_next_sd_q2xIbB12lBObbt0w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q2xIbB12lBObbt0w');
    }
  }

  sd_hnE8aqoxzSSOYDPV(bh) {
    try {
      const page = this.page;
      page.fileForm = new FormGroup({
        _id: new FormControl(''),
        filename: new FormControl(''),
        chunkSize: new FormControl(''),
        length: new FormControl(''),
      });

      page.sendForm = new FormGroup({
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(18),
          Validators.maxLength(25),
        ]),
        description: new FormControl('', [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(80),
        ]),
        file: page.fileForm,
      });
      //appendnew_next_sd_hnE8aqoxzSSOYDPV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hnE8aqoxzSSOYDPV');
    }
  }

  sd_dgjeYT95OS05KBqW(bh) {
    try {
      const page = this.page;
      page.sendForm.value.file._id = page.userFile._id;
      page.sendForm.value.file.filename = page.userFile.filename;
      page.sendForm.value.file.length = page.userFile.length;
      page.sendForm.value.file.chunkSize = page.userFile.chunkSize;
      bh.body = page.sendForm.value;

      bh = this.sd_zdh8ae8pN8eKnyT4(bh);
      //appendnew_next_sd_dgjeYT95OS05KBqW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dgjeYT95OS05KBqW');
    }
  }

  sd_zdh8ae8pN8eKnyT4(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_UmgxtqGwZdqRyD57(bh);
      //appendnew_next_sd_zdh8ae8pN8eKnyT4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zdh8ae8pN8eKnyT4');
    }
  }

  sd_UmgxtqGwZdqRyD57(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'add';

      bh = this.sd_BWqrRbBBtEiHHt2k(bh);
      //appendnew_next_sd_UmgxtqGwZdqRyD57
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UmgxtqGwZdqRyD57');
    }
  }

  async sd_BWqrRbBBtEiHHt2k(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_u4xhpi25sSlW1iaH(bh);
      //appendnew_next_sd_BWqrRbBBtEiHHt2k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BWqrRbBBtEiHHt2k');
    }
  }

  sd_u4xhpi25sSlW1iaH(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Submitted Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_u4xhpi25sSlW1iaH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u4xhpi25sSlW1iaH');
    }
  }

  sd_cbI8mQtDSWs6k8AU(bh) {
    try {
      const page = this.page;
      page.sendForm.reset();
      //appendnew_next_sd_cbI8mQtDSWs6k8AU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cbI8mQtDSWs6k8AU');
    }
  }

  sd_RKBco2Z7o7II2LGx(bh) {
    try {
      const page = this.page;
      bh.upload = document.getElementById('upload') as HTMLInputElement;
      if (bh.upload) {
        bh.upload.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            bh.file = input.files[0];
            page.uploadedFile = new FormData();
            page.uploadedFile.append('file', bh.file);
            this.goToBackend();
          }
        });
      }

      //appendnew_next_sd_RKBco2Z7o7II2LGx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RKBco2Z7o7II2LGx');
    }
  }

  sd_41ZTrsTpkqz0LOUL(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_ZKDRoMN0GxWwgAeT(bh);
      //appendnew_next_sd_41ZTrsTpkqz0LOUL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_41ZTrsTpkqz0LOUL');
    }
  }

  sd_ZKDRoMN0GxWwgAeT(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_pPrT8ZcsKGlZ7Y0F(bh);
      //appendnew_next_sd_ZKDRoMN0GxWwgAeT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZKDRoMN0GxWwgAeT');
    }
  }

  async sd_pPrT8ZcsKGlZ7Y0F(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_TrcP89t2rHfyFu4R(bh);
      //appendnew_next_sd_pPrT8ZcsKGlZ7Y0F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pPrT8ZcsKGlZ7Y0F');
    }
  }

  sd_TrcP89t2rHfyFu4R(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('file', JSON.stringify(bh.result));
      this.getFromBackend();
      bh = this.sd_7eDAdrRHz8kAqszA(bh);
      //appendnew_next_sd_TrcP89t2rHfyFu4R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TrcP89t2rHfyFu4R');
    }
  }

  sd_7eDAdrRHz8kAqszA(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Submitted Successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_7eDAdrRHz8kAqszA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7eDAdrRHz8kAqszA');
    }
  }

  sd_lRiBBU7sJvHWT9Hg(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_8gWoJmK5b1UZUFh1(bh);
      //appendnew_next_sd_lRiBBU7sJvHWT9Hg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lRiBBU7sJvHWT9Hg');
    }
  }

  sd_8gWoJmK5b1UZUFh1(bh) {
    try {
      this.page.userFile = JSON.parse(sessionStorage.getItem('file'));
      bh = this.sd_pBvWN6xN6NqskwnZ(bh);
      //appendnew_next_sd_8gWoJmK5b1UZUFh1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8gWoJmK5b1UZUFh1');
    }
  }

  sd_pBvWN6xN6NqskwnZ(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + `get-file/${page.userFile.filename}`;

      // console.log("page 2",page)
      console.log('bh 2', bh);

      bh = this.sd_Z4zQyE8RAthYHxI0(bh);
      //appendnew_next_sd_pBvWN6xN6NqskwnZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pBvWN6xN6NqskwnZ');
    }
  }

  async sd_Z4zQyE8RAthYHxI0(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'blob',
        headers: {},
        params: {},
        body: bh.body,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_EIFDuuR5b8UTveVv(bh);
      //appendnew_next_sd_Z4zQyE8RAthYHxI0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z4zQyE8RAthYHxI0');
    }
  }

  sd_EIFDuuR5b8UTveVv(bh) {
    try {
      const page = this.page;
      page.image = bh.url;
      //appendnew_next_sd_EIFDuuR5b8UTveVv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EIFDuuR5b8UTveVv');
    }
  }

  async sd_NcjEpxIozm1vObYO(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/page-two');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_NcjEpxIozm1vObYO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NcjEpxIozm1vObYO');
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
  //appendnew_flow_pageOneComponent_Catch
}
