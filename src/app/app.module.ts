import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { Dashboard } from '../pages/dashboard/dashboard';
import { MyAccount} from '../pages/my-account/my-account';
import { Invoices} from '../pages/invoices/invoices';
import { About} from '../pages/about/about';
import { Help} from '../pages/help/help';
import { LogOut} from '../pages/log-out/log-out';
import { Settings} from '../pages/settings/settings';
import { ChangePassword} from '../pages/change-password/change-password';
import { TermsOfUse} from '../pages/terms-of-use/terms-of-use';
import { Acknowledgements } from '../pages/acknowledgements/acknowledgements';
import { HelpAnswer } from '../pages/help-answer/help-answer';
import { ContactUs } from '../pages/contact-us/contact-us';
import { Employee } from '../pages/employee/employee';
import { EditEmployee } from '../pages/edit-employee/edit-employee';
import { EmpAddress } from '../pages/emp-address/emp-address';
import { EmpBankDetails } from '../pages/emp-bank-details/emp-bank-details';
import { EmpWorkingRights } from '../pages/emp-working-rights/emp-working-rights';
import { EmpAdmin } from '../pages/emp-admin/emp-admin';
import { EmpCir } from '../pages/emp-cir/emp-cir';
import { EmpSites } from '../pages/emp-sites/emp-sites';
import { EmpInduction } from '../pages/emp-induction/emp-induction';
import { Audit } from '../pages/audit/audit';
import { Quotations } from '../pages/quotations/quotations';
import { EditQuot } from '../pages/edit-quot/edit-quot';
import {CostingBreakdown} from '../pages/costing-breakdown/costing-breakdown';
import {QuoteBreakdown} from '../pages/quote-breakdown/quote-breakdown';
import {QuoteBuildingType} from '../pages/quote-building-type/quote-building-type';
import {QquoteSelectBuildingType} from '../pages/qquote-select-building-type/qquote-select-building-type';
import {QuoteRoomType} from '../pages/quote-room-type/quote-room-type';
import {QuoteSeletcRoomType} from '../pages/quote-seletc-room-type/quote-seletc-room-type';
import {QuoteTaksType} from '../pages/quote-taks-type/quote-taks-type';
import {QuoteSummary} from '../pages/quote-summary/quote-summary';





@NgModule({
  declarations: [
    MyApp,
    Login,
    ForgotPassword,
    Dashboard,
    MyAccount,
    Invoices,
    About,
    Help,
    LogOut,
    Settings,
    ChangePassword,
    TermsOfUse,
    Acknowledgements,
    HelpAnswer,
    ContactUs,
    Employee,
    EditEmployee,
    EmpAddress,
    EmpBankDetails,
    EmpWorkingRights,
    EmpAdmin,
    EmpCir,
    EmpSites,
    EmpInduction,
    Audit,
    Quotations,
    EditQuot,
    CostingBreakdown,
    QuoteBreakdown,
    QuoteBuildingType,
    QquoteSelectBuildingType,
    QuoteRoomType,
    QuoteSeletcRoomType,
    QuoteTaksType,
    QuoteSummary

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    ForgotPassword,
    Dashboard,
    MyAccount,
    Invoices,
    About,
    Help,
    LogOut,
    Settings,
    ChangePassword,
    TermsOfUse,
    Acknowledgements,
    HelpAnswer,
    ContactUs,
    Employee,
    EditEmployee,
    EmpAddress,
    EmpBankDetails,
    EmpWorkingRights,
    EmpAdmin,
    EmpCir,
    EmpSites,
    EmpInduction,
    Audit,
    Quotations,
    EditQuot,
    CostingBreakdown,
    QuoteBreakdown,
    QuoteBuildingType,
    QquoteSelectBuildingType,
    QuoteRoomType,
    QuoteSeletcRoomType,
    QuoteTaksType,
    QuoteSummary
  ],
  providers: []
})
export class AppModule {}
