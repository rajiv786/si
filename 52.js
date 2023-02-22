import React from 'react'
import { Typography,Grid} from '@mui/material';
import Footer from '../footer'
import ResponsiveAppBar from './menu'

import useMediaQuery from '@mui/material/useMediaQuery';
function TermsandCondition () {
  const mobile = useMediaQuery('(max-width:600px)');
  return (
   <>
       <ResponsiveAppBar />
      <Grid container md={12} xs={12}>
        <Grid item md={8} xs={12} sx={{margin:"auto"}}>
       <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'20px':'24px',marginTop:mobile?'35px':'35px'}}><b>Terms and Conditions</b></Typography> 
        </Grid>
        <Grid container md={12} xs={12}>
        <Grid item md={8} xs={12} sx={{margin:"auto"}}>
       <Typography variant='h3' sx={{textAlign:'initial',fontSize:mobile?'20px':'24px',marginTop:mobile?'35px':'64px'}}><b>Hubhawks’ Payment Terms</b></Typography> 
        </Grid>
        <Grid item md={8} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'28px':"18px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            The following terms (these “Payment Terms”) govern payments you (User/Collaborator) make or receive through __________ (the “Platform”), operated by Hubhawks Marketing India Private Limited (hereinafter, “Hubhawks”).
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            Hubhawks (Address) processes payments from India and from outside India. Hubhawks. and its affiliates/subsidiaries are collectively referred hereto as “Hubhawks” “we” or “us”.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            Please read these Payment Terms carefully before making or receiving payments through the Platform. By making or receiving payments through the Platform, you accept and agree, on behalf of yourself or on behalf of your employer or any other entity (if applicable), to be bound and abide by these Payment Terms. These Terms are supplemental to Hubhawks’s User Subscription Terms and Hubhawks Collaborator Agreement as applicable (collectively, the “Terms of Service”).
            </Typography>
            <Grid container md={12} xs={12}>
        <Grid item md={10} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            I.   &nbsp; &nbsp;<b>Definitions:</b> Capitalized terms used but not defined herein shall have the respective meanings given to them in the Terms of Service of Users and Collaborators.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            a.   &nbsp; &nbsp;Affiliate: Entity that, directly or indirectly, controls, or is under the control of, or is under common control with Hubhawks, where control means having more than fifty per cent (50%) voting stock or other ownership interest or the majority of voting rights of such entity.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;Hubhawks Balance: The aggregated amount of your Revenue as a Collaborator and/or returned payments from cancelled orders as a User.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            c.   &nbsp; &nbsp;Payment Services Provider(s): Service providers that provide payment services to Users and Collaborators in connection with the Hubhawks Platform, including with respect to the collection of funds from Users in connection with purchases, remittance and withdrawal of funds to Collaborators, currency exchange services in connection with payments and withdrawals in local currencies, and the holding of funds in connection with Hubhawks Balances.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            d.   &nbsp; &nbsp;Revenue: Money that Collaborators earn from completed orders subject to these Terms.
            </Typography>
            </Grid>
            <Grid container md={12} xs={12}>
        <Grid item md={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            II.   &nbsp; &nbsp;<b>Payment options:</b>  The following payment options are available for Business Account: a) Saved Payment Method - saved payment method, as made available from time to time by Hubhawks; and b) Hubhawks Balance.
            </Typography>
            <Grid container md={12} xs={12}>
        <Grid item md={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            III.   &nbsp; &nbsp;<b>Unused Hubhawks Balance:</b>  
										  </Typography>
			<Grid container xs={12}
											  md={12}>
											  <Grid item md={10} xs={12} sx={{ margin: "auto" }}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            a.   &nbsp; &nbsp;Hubhawks will refund unused funds available on the Hubhawks Balance within 30 days following the end of the month in which the User/Collaborator requested the refund[SB1] [SB2] following a deduction of any cost and fee that may apply on Hubhawks in the course of processing the refund. Hubhawks will refund the same payment method used to deposit funds to the Account, or otherwise used to make payments via the Account unless requested otherwise. Hubhawks reserves the right to request such authentication information as it may deem necessary to process the refund request.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;Unused funds in the Hubhawks Balance will expire after 2 years of inactivity in the Business Account.
											  </Typography>
											  </Grid>
											  </Grid>
                     <Grid container md={12} xs={12}>
        <Grid item md={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            IV. &nbsp;<b>Invoice:</b> Invoices for purchases made by Users will be issued in the name of the Users.
            </Typography>
            <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            V. &nbsp;<b>Non-Circumvention:</b> 
													  </Typography>
													  <Grid container md={12} xs={12}>
														  <Grid item xs={12} md={10} sx={{ margin: "auto" }}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            a.   &nbsp; &nbsp;You agree to use Hubhawks as your exclusive method to make payments for any Service ordered from Collaborators, and not to circumvent the payment methods offered on Hubhawks. This non-circumvention requirement applies to all Users. Without derogating from the generality of the above, you may not offer or solicit (or accept any offer or solicitation from) any parties introduced through Hubhawks to contract, engage with, or pay outside of Hubhawks. You agree to notify Hubhawks immediately if a Collaborator proposes that you make payments other than through the Platform.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp; You acknowledge and agree that a violation of this non-circumvention requirement is a material breach of the Hubhawks Terms and may lead to a permanent suspension of the violating Account.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            c.   &nbsp; &nbsp; In light of the difficulties in measuring or estimating the damage which may be incurred by Hubhawks as a consequence of any non-circumvention breach, you hereby agree to pay Hubhawks liquidated damages in the amount of ____________ (the “Liquidated Damages “) if Hubhawks determines, in its sole discretion, that you have violated this Non-Circumvention Section. You acknowledge and agree that the Liquidated Damages are a reasonable approximation of such damages and do not constitute a penalty.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            d.   &nbsp; &nbsp; Hubhawks may, to the maximum extent permitted by law (i) charge your Hubhawks Balance and/or payment method the Liquidated Damages or send you an invoice for the Liquidated Damages, which you agree to pay within 30 days, and (ii) charge you (in the same manner) for all reasonable expenses, including legal fees, related to investigating such breach and collecting such fees.
                     </Typography>
													  </Grid>
													  </Grid>
                     <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
															  VI. &nbsp;<b>Receiving Payments by Collaborators</b> 
													  
									
														  </Typography>
						 </Grid>
			<Grid item xs={12} md={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            a.   &nbsp; &nbsp;Each Service you provide and successfully complete, accredits your account with revenue equal to 80% of the purchase amount.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;Hubhawks accredits Collaborators once a service has been provided and completed at the end of the Collaborator.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            c.   &nbsp; &nbsp;If an order is cancelled (for any reason), the funds paid will be returned to the User’s Hubhawks Balance subject to any cancellation fee at the sole discretion of Hubhawks;
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            d.   &nbsp; &nbsp;Collaborators are responsible for paying any direct or indirect taxes, including any GST, VAT or income tax, which may apply to them depending on residency, location or otherwise, under provisions of their jurisdiction. Collaborators represent and warrant that they comply, and will comply at all times, with their obligations under income tax provisions in their jurisdiction. The prices shown in the Rate Schedule for the available Services are inclusive of all such taxes and charges that may apply to the Collaborators.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            e.   &nbsp; &nbsp;Appointment as Payment Collection Agent: Collaborator hereby appoints Hubhawks as Collaborator’s limited authorized payment collection agent solely for the purpose of accepting payments (via its Payment Services Provider, if applicable) from User, and remitting those payments to Collaborator. Collaborator agrees that payment from User to Hubhawks shall be considered the same as made directly to Collaborator. User’s payment obligation to Collaborator will be satisfied upon receipt of payment by Hubhawks (or its Payment Services Provider, as applicable), and Hubhawks (via its Payment Services Provider, as applicable) is responsible for remitting the funds to the Collaborator in the manner described in these Payment Terms. Collaborator agrees that Hubhawks may describe or otherwise reflect the terms contained herein in any Terms of Service, receipts, disclosures, or notices including, but not limited to, receipts provided to Users that Hubhawks may deem necessary or prudent.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            f.   &nbsp; &nbsp;Hubhawks partners with Payment Services Providers for purposes of collecting payments from Users, transferring such payments from Users to Collaborators, and holding funds in connection with Hubhawks Balances. All payment services in connection with the withdrawal of funds on the Hubhawks platform are performed by Hubhawks’ Payment Services Providers.
                     </Typography>
                     </Grid>
                     <Grid container md={12} xs={12}>
            <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            VII. &nbsp;<b>Withdrawing Revenues by Collaborators</b> 
															  </Typography>
														  </Grid>
                              </Grid>
			 <Grid item md={10} xs={10} sx={{margin:"auto"}}>									  
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            a.   &nbsp; &nbsp;To withdraw your Revenue, you must have an account with at least one of Hubhawks's Payment Service Providers for the withdrawal methods listed below. All funds eligible for withdrawal will be held on your behalf in an account with Hubhawks’ Payment Services Provider. All payment services, including withdrawal services, will be provided by Hubhawks’ Payment Services Provider.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;Your Hubhawks profile can be associated with only one account from each Hubhawks withdrawal method. A Payment Service Provider withdrawal account can be associated with only one Hubhawks profile.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            c.   &nbsp; &nbsp;Revenues are only made available for withdrawal from the Revenue page following a safety clearance period of 14 days after the order is marked as complete.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            d.   &nbsp; &nbsp;Collaborators may withdraw their Revenues using one of Hubhawks’ withdrawal options (see Withdrawal Section below regarding payment terms).
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            e.   &nbsp; &nbsp;For security concerns, Hubhawks may temporarily disable a Collaborator’s ability to withdraw Revenue to prevent fraudulent or illicit activity. This may come as a result of security issues, improper behaviour reported by other users, or associating multiple Hubhawks accounts to a single withdrawal provider.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            f.   &nbsp; &nbsp;Withdrawals can only be made in the amount available to you.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            g.   &nbsp; &nbsp;Withdrawal fees vary depending on the withdrawal method.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            h.   &nbsp; &nbsp;Withdrawals are final and cannot be undone. We will not be able to reverse this process once it has begun.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            i.   &nbsp; &nbsp;Collaborators will be able to withdraw their revenues from disabled accounts after a safety period of 90 days following full verification of ownership of the account in question, from the day of the last cleared payment received in their account and subject to Hubhawks' approval.
														  </Typography>
														  </Grid>
                     <Grid container md={12} xs={12}>
                     <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            VIII. &nbsp;<b>Withdrawal Methods</b> 
				</Typography>
                                  </Grid>
                                  </Grid>
         <Grid container md={12} xs={12}>										  
				<Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            IX. &nbsp;<b>Purchasing Terms for Users</b> 
																	  </Typography>
																	  </Grid>
                                    </Grid>
                                   
             <Grid item md={10} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            a.   &nbsp; &nbsp;Users pay Hubhawks to avail a Service from a Collaborator. Hubhawks partners with Payment Services Providers for the purposes of collecting all payments from Users, transferring such payments from Users to Collaborators, and holding funds in connection with Hubhawks Balances. All payment services in connection with the collection of funds on the Hubhawks platform are performed by Hubhawks’ Payment Services Providers.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;Hubhawks serves as the Collaborator’s limited authorized payment collection agent solely for the purpose of accepting payments (via its Payment Services Provider, if applicable) from the User, and remitting those payments to Collaborator. User’s payment obligation to Collaborator will be satisfied upon receipt of payment by Hubhawks (or its Payment Services Provider, as applicable), and Hubhawks (via its Payment Service Provider, as applicable) is responsible for remitting the funds to the Collaborator in the manner described in these Payment Terms.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            c.   &nbsp; &nbsp;In most locations, purchases on Hubhawks can be made by using one of the following payment methods: Credit Card, _________, Hubhawks Credits or existing Hubhawks Balance. Additional payment methods may apply in certain locations. More information on available payment methods is available here.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            d.   &nbsp; &nbsp;Your existing Hubhawks Balance will be automatically applied to your next purchase.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            e.   &nbsp; &nbsp;You may not offer Collaborators to pay, or make payment using any method other than through the Hubhawks.com Platform. In case you have been asked to use an alternative payment method, please report it immediately to Customer Support here.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            f.   &nbsp; &nbsp;You agree to receive invoices and/or payment receipts from Hubhawks in electronic form as PDF documents, by email or through the Platform.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            g.   &nbsp; &nbsp;To protect against fraud, unauthorized transactions (such as money laundering), claims, or other liabilities, payment information in connection with withdrawals is collected by either Hubhawks or Hubhawks’s Payment Services Providers. Payment Services Providers may also collect such other information as necessary for the purpose of processing withdrawal payments. Hubhawks is not exposed to the payment information provided to Payment Services Providers, and this information is subject to the privacy policy applicable to the Payment Service Provider. Please see our Privacy Policy for more information here.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            h.   &nbsp; &nbsp;By using any payment method and/or providing payment details for making purchases on Hubhawks, you represent and warrant that: (a) you are legally authorized to provide such information; (b) you are legally authorized or have permission to make payments using the payment method(s); (c) if you are an employee or agent of a company or person that owns the payment method, you are authorized by that company or person to use the payment method to make payments on Hubhawks; and (d) such actions do not violate any applicable law.
															  </Typography>
															  </Grid>
            <Grid container md={12} xs={12}>	
            <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            X. &nbsp;<b>Local Currencies</b> 
            </Typography>
			  </Grid>
        </Grid>	
        <Grid item md={10} xs={10} sx={{margin:"auto"}}>									  
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            a.   &nbsp; &nbsp;Users pay Hubhawks to avail a Service from a Collaborator. Hubhawks partners with Payment Services Providers for the purposes of collecting all payments from Users, transferring such payments from Users to Collaborators, and holding funds in connection with Hubhawks Balances. All payment services in connection with the collection of funds on the Hubhawks platform are performed by Hubhawks’ Payment Services Providers.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;If you paid in a currency other than Indian Rupees and your order was later cancelled for any reason, the amount returned to your Hubhawks Balance would be based on the exchange rate as of the date of cancellation.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            c.   &nbsp; &nbsp;Your Hubhawks Balance is always valued in INR, even if it is displayed in a non-INR currency. Therefore, should you choose to view your Hubhawks Balance in any currency other than INR, it may change daily in accordance with exchange rate fluctuations, while always maintaining the same INR value.
            </Typography>
            </Grid>
            <Grid container md={12} xs={12}>	
            <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XI. &nbsp;<b>Hubhawks Credits</b> 
            </Typography>
            </Grid>
            </Grid>
            <Grid item md={10} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            In certain instances, Hubhawks may offer you credits (“Hubhawks Credits” or “Credits”), either for promotional purposes or otherwise, to be used for purchasing Gigs and/or other services offered on the Platform. Your available Credit balance will appear in your account. Your valid Hubhawks Credits will be automatically applied to your next purchase and can be viewed in your order summary after you place the order. Unless stated otherwise, Hubhawks Credits expire following three months after their receipt. Hubhawks Credits serve only as an incentive to use Hubhawks, and, therefore, are not redeemable for cash, have no cash value and are non-refundable. Once used, Hubhawks Credits may not be returned to your account even if your Order gets cancelled. Hubhawks Credits may be subject to additional conditions and restrictions as will be disclosed to you upon receipt of the Credits. Credits may be voided in the event of fraud, misuse, or violation of these Terms. Hubhawks reserves the right to modify or cancel the Hubhawks Credits program at any time. If you or Hubhawks deactivate or suspend your Hubhawks account, any unused Hubhawks Credits in your account will be forfeited.
            </Typography>
            </Grid>
            <Grid container md={12} xs={12}>
            <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XII. &nbsp;<b>Promo Codes</b> 
            </Typography>
            </Grid>
            </Grid>
            <Grid item md={10} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            From time to time, we may offer you promo codes for purchasing services offered on the Platform, at special discounts. Promo Codes are valid only for purchases on Hubhawks and are subject to different time limitations and will expire after their predefined term. To exercise your promo code, simply enter the code on the checkout page. If you fail to do so, your purchase will not be eligible for the discount. Promo codes are limited to one use per user and may not be used or combined with any other promotion. Hubhawks reserves the right to modify or cancel promo codes at any time.
            </Typography>
            </Grid>
            <Grid container md={12} xs={12}>
            <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XIII. &nbsp;<b>Taxes</b> 
            
            </Typography>
            </Grid>
            </Grid>
            <Grid item md={10} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            a.   &nbsp; &nbsp;Hubhawks may be required by applicable laws to charge users with indirect taxes (such as Sales Tax, VAT or GST) or to withhold taxes. Any amount Hubhawks will be required to collect will be in addition to the purchase amount and any other fees payable by the User, and any amount Hubhawks will be required to withhold will be deducted from the Collaborator’s revenue, as required by applicable laws.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;Indirect taxes are in addition to the price shown on the Platform, and in any event, any such taxes will always be displayed to the User before payment.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            c.   &nbsp; &nbsp;Users are responsible for paying any direct or indirect taxes, including any GST, VAT, or income tax, which may apply to them depending on residency, location or otherwise, under provisions of their jurisdiction.
            </Typography>
            </Grid>
            <Grid container md={12} xs={12}>
            <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XIV. &nbsp;<b>Disputes and Cancellations</b> 
            </Typography>
            </Grid>
            </Grid>
            <Grid item md={10} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            We encourage our Users and Collaborators to try and settle conflicts amongst themselves. If for any reason this fails after using the resolution center or if you encounter non-permitted usage on the Platform, Users can contact Hubhawks' Customer Support department for assistance here.
            </Typography>
            </Grid>
            <Grid container md={12} xs={12}>
            <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XV. &nbsp;<b>Basics</b> 
            </Typography>
            </Grid>
            </Grid>
            <Grid item md={10} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            a.   &nbsp; &nbsp;Order cancellations can be performed on Hubhawks, when eligible, by Customer Support or through the resolution center per order.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;Filing a transaction dispute or reversing a payment through your payment provider or your bank is a violation of these Payment Terms. Doing so may get your account temporarily or permanently disabled. Note: Once you have filed a dispute with your payment provider, the funds will be ineligible for a refund due to our obligations towards the payment provider.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            c.   &nbsp; &nbsp;In the event that you encounter an issue related to the service provided in an order, you are encouraged to use the Platform's dispute resolution tools to attempt to resolve the matter.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            d.   &nbsp; &nbsp;Hubhawks, through its Payment Services Provider, reserves the right to cancel orders or place funds on hold for any suspected fraudulent transactions made on the Platform.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            e.   &nbsp; &nbsp;If an order is cancelled (for any reason), the funds paid will be returned to the User’s Hubhawks Balance.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            f.   &nbsp; &nbsp;Requesting to gain more services from Collaborators beyond the agreed requirements by using the request revisions button is not allowed.
            </Typography>
            </Grid>
            <Grid container md={12} xs={12}>
            <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XVI. &nbsp;<b>Order Cancellations</b> 
            </Typography>
            </Grid>
            </Grid>
            <Grid item md={10} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            a.   &nbsp; &nbsp;Hubhawks encourages Users and Collaborators to resolve service disputes mutually using the resolution center.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;Eligibility for requests to Hubhawks to cancel an order will be assessed by our Customer Support team based on a number of factors, including violations of our Terms of Service and/or our Community Standards, general misconduct, and improper usage of the Hubhawks delivery system.
            </Typography>
            </Grid>
            <Grid container md={12} xs={12}>
            <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XVII. &nbsp;<b>Refunds</b> 
            </Typography>
            </Grid>
            </Grid>
            <Grid item md={10} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            a.   &nbsp; &nbsp;Hubhawks does not automatically refund payments made for cancelled orders back to your payment provider. Funds from order cancellations are returned to the User's Hubhawks Balance and are available for future purchases on Hubhawks.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;You understand and agree that a refund for cancellation shall be credited to the User’s Hubhwaks Balance after deduction of the processing fee for the transaction payable by Hubhawks to the payment provider.
            </Typography>
            </Grid>
            <Grid container md={12} xs={12}>
            <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XVIII. &nbsp;<b>Modifications</b> 
            </Typography>
            </Grid>
            </Grid>
            <Grid item md={10} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            a.   &nbsp; &nbsp;Hubhawks may make changes to these Payment Terms from time to time. When these changes are made, Hubhawks will make a new copy of the terms available on this page.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;You understand and agree that if you use Hubhawks after the date on which the Payment Terms have changed, Hubhawks will treat your use as acceptance of the updated Payment Terms.
            </Typography>
            </Grid>
            <Grid container md={12} xs={12}>
            <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XIX. &nbsp;<b>Disclaimer of Warranties</b> 
            </Typography>
            </Grid>
            </Grid>
            <Grid item md={10} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            YOUR USE OF THE PLATFORM, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE PLATFORM ARE AT YOUR OWN RISK. THE PLATFORM, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE PLATFORM ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER HUBHAWKS NOR ANY PERSON ASSOCIATED WITH HUBHAWKS MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE PLATFORM.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </Typography>
            </Grid>
            <Grid container md={12} xs={12}>
            <Grid item md={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XX. &nbsp;<b>Limitation on Liability</b> 
            </Typography>
            </Grid>
            </Grid>
            <Grid item md={10} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            IN NO EVENT WILL HUBHAWKS, ITS AFFILIATES OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE PLATFORM, ANY WEB PLATFORMS LINKED TO IT, ANY CONTENT ON THE PLATFORM OR SUCH OTHER PLATFORMS OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE PLATFORM OR SUCH OTHER PLATFORMS, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            IN ACCEPTING LIABILITY AS THE LIMITED AUTHORIZED PAYMENT COLLECTION AGENT OF THE COLLABORATOR, HUBHAWKS AND ITS AFFILIATES ASSUME NO LIABILITY FOR ANY ACTS OR OMISSIONS OF THE COLLABORATOR.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </Typography>
            </Grid>
            <Grid container md={10} xs={10}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'24px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"40px",marginTop:mobile?'36px':'80px'}}>Hubhawks Collaborator Agreement</Typography> 
       </Grid>
       </Grid>
       <Grid container md={9} xs={10}>
       <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> I.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Introduction</b></Typography> 
       </Grid>
       </Grid>
       <Grid item md={11}xs={10}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       Hubhawks Marketing India Private Limited (hereinafter, “Hubhawks”) provides services as displayed on its website or mobile application (hereinafter, “Platform”) which can be accessed at https:/s/hubhawks.com/. This agreement comprises the terms of use (hereinafter, “Agreement”) for service providers affiliated with HubHawks to render services catalogued on the Platform (hereinafter, “Collaborator”), and governs your use of this Platform as a provider of such services. The terms “we”, “our” and “us” refers to the Platform, while the term “you” refers to you, as a Collaborator for our Platform.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            Please review the following terms carefully. By way of this Agreement, you signify your consent to be bound by these Terms of Use and warrant that you have the legal capacity to enter into and perform your obligations under this Agreement. If you do not agree to be bound by the terms under this Agreement in their entirety, you may not opt to be affiliated with us as a collaborator for the platform.
            </Typography>
            </Grid>
            
            <Grid container md={9} xs={10}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':'36px'}}> II.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>About the Service</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={10}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"36px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       Among others, the Platform allows the Collaborator to provide available on the Platform (hereinafter, “Services”) based on the individual interests and requirements of the users. For an exhaustive list of Services that may be provided by the Collaborator(s) kindly visit the main web page. Against the Services provided by the Collaborator, the HubHawks will charge_______________. The rate schedule vis-à-vis the respective Services (hereinafter, Rate/Rates/Rate Schedule”) provided by the Platform is displayed here. The terms and conditions of payment in respect of the rate schedule for the Services availed are referenced here.
            </Typography>
            </Grid>
            <Grid container md={9} xs={10}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':'36px'}}> III.&nbsp;&nbsp;&nbsp;&nbsp; <b>Payment and Consideration</b>
       </Typography>
       </Grid> 
       </Grid>
       <Grid item md={11}xs={10}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       The Collaborator understands and agrees that for every order completed and service provided to the users of the Platform, the Collaborator shall receive _______ in terms of the Rate Schedule after deduction of ___ % commission on the total Rate of the Service rendered by the Collaborator.
            </Typography>
            
            </Grid></Grid>
            <Grid container md={9} xs={10}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':'36px'}}> IV.&nbsp;&nbsp; <b>Onboarding of Collaborator</b>
       </Typography> 
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       1. &nbsp; Any person including an individual, company, firm, association of persons or any other business entity may register an account with the Platform (hereinafter, Account”) for rendering the catalogued Services.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       2. &nbsp; The person shall register through ________ and provide all the necessary details as may be requested by the Platform for processing their registration as a Collaborator. In registering for an Account, the Collaborator undertakes and agrees to provide us with true, accurate, complete and updated information and must not create an Account for fraudulent or misleading purposes.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       3. &nbsp; Every person who applies through the registration link to become a Collaborator understands and agrees that Hubhawks/Platform has the sole discretion to approve or reject such registration, as it may deem fit.
            </Typography>
            </Grid>
            <Grid container md={9} xs={10}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> V.&nbsp;&nbsp; <b>Provisioning of Services</b>
       </Typography> 
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       1. &nbsp; The Collaborator understands and agrees that they shall provide Services, as deemed fit by the Platform, via the Account registered with the Platform. You may not allow others to use your Account or password. In an event where the Collaborator allows any third party to provide Services through the registered Account, the Collaborator shall be solely responsible for any damages, indemnities and harm that may result as a consequence. Additionally, the Platform may, at its sole discretion, take action against such Collaborator for allowing a third party to use the registered Account for providing the catalogued Services by terminating the registration of the Collaborator with the Platform or take any other steps, as it may deem fit.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       2. &nbsp; The Collaborator understands and agrees that the system through which Services are provided, which may include the computer software(s) used, the end user interface, the documentation and databases relating to the Platform, belong to HubHawks. HubHawks owns the intellectual property associated with the Platform and the information, if any, accessed through the Platform.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       3. &nbsp; As a Collaborator, you agree that you shall not post, copy, modify, communicate, transmit, redistribute, display, disclose, create any derivative works from, make commercial use of, or reproduce in any way any copyrighted material, trademarks and other content belonging to the user of Services or the Platform, accessible during the provisioning of Services, without obtaining the prior written consent of such user or the Platform, respectively, through its authorised representative. The Collaborator understands and agrees that in an event of a breach of this Clause, the Collaborator solely shall bear unlimited liability towards the user or the Platform, as the case may be.
            </Typography>
            </Grid>
            <Grid container md={9} xs={12}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':'36px'}}> VI.&nbsp;&nbsp;&nbsp;&nbsp; <b>Security</b>
       </Typography> 
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       1. &nbsp; The Collaborator understands and agrees that the system through which Services are provided, which may include the computer software(s) used, the end user interface, the documentation and databases relating to the Platform, belong to HubHawks. HubHawks owns the intellectual property associated with the Platform and the information, if any, accessed through the Platform.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       2. &nbsp; If you allow a third party to access your Account, we will have the right to hold you liable for all unauthorized use of your Account;
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       3. &nbsp; You understand and agree that in an event of any loss of information from your Account due to unauthorised use, the Platform shall not be held liable; and
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       4. &nbsp; If any loss of information like passwords, user names, saved content or other Account information occurs while making the authorised use of the Account, the Collaborator shall immediately inform the authorised representative of the Platform and the Platform shall take all reasonable measures to retrieve the Account information. However, the Platform cannot be and shall not be held responsible for the loss of Account information in terms of this clause.
            </Typography>
            </Grid>
            <Grid container md={9} xs={12}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"28px",marginTop:mobile?'36px':'36px'}}> VII.&nbsp;&nbsp;&nbsp;&nbsp;<b>Warranties and Liabilities</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       You acknowledge that your access to the Platform for the provisioning of Services is at your own risk. You agree that you shall make all reasonable efforts to ensure that the Services provided are in line with acceptable industry practices and standards. The foregoing does not affect any warranties which cannot be excluded or limited under applicable law. You also agree to indemnify, defend and hold harmless Hubhawks, its shareholders, officers, directors, employees, agents, affiliates and successors from and against any and all claims, demands, losses, liabilities, damages or expenses of any nature whatsoever incurred or suffered by us, in so far as such losses (or actions in respect thereof) arise out of, are related to, or are based on or reasonably related to the breach of any representation, warranty, obligation or covenant agreed to by you in this agreement. This clause shall also be effective against your heirs, assigns, or representatives. In no event will HubHawks, its affiliates or users, employees or agents be liable for damages of any kind, arising out of or in connection with your use, or your inability to use the platform.
            </Typography>
            </Grid>
            <Grid container md={9} xs={12}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> VIII.&nbsp;&nbsp;&nbsp;&nbsp; <b>Privacy</b>
       </Typography> 
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       We respect the privacy of the Collaborators affiliated to the Platform. Please refer to HubHawks’ Privacy Policy on the main web page, which explains how we collect, use, and disclose information that pertains to your privacy.
            </Typography>
            </Grid>
            <Grid container md={9} xs={12}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> IX.&nbsp;&nbsp;&nbsp;&nbsp;<b>Indemnification</b>
       </Typography> 
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       In addition to indemnification or liability provisions in other sections of this Agreement, you hereby agree to indemnify, defend and hold harmless Hubhawks, its shareholders, officers, directors, employees, agents, affiliates, successors and assigns, from and against any and all claims, demands, losses, liabilities, damages or expenses (including legal fees and costs) of any nature whatsoever incurred or suffered by us (collectively the "losses"), in so far as such losses (or actions in respect thereof) arise out of, are related to, or are based on or reasonably related to the breach of any representation, warranty, obligation or covenant agreed to by you in this agreement. This clause shall also be effective against your heirs, assignees, or representatives.
            </Typography>
            </Grid>
            <Grid container md={9} xs={12}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> X.&nbsp;&nbsp;&nbsp; <b>Non- Solicitation:</b>
       </Typography> 
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       During the Term of this Agreement, you shall ensure that you shall not, directly or indirectly:
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       1. &nbsp;    Solicit, canvass, entice, induce or engage with any user for the purpose of providing the catalogued Services beyond the scope of the terms of use, as indicated in clause V(1) of this agreement; and       
         </Typography>
         <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       2. &nbsp;    Solicit, induce, encourage or otherwise endeavour to cause or attempt to induce any users of Hubhawks to terminate their relationship with the Platform or refuse to extend the term of their relationship with the Platform.   
         </Typography>
         </Grid>
         <Grid container md={12} xs={12}>
         <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XI.&nbsp;&nbsp;&nbsp; <b>Conflict of Interest:</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}> 
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       You affirm that to the best of your knowledge there exists no actual or potential conflict between Platform's business or financial interests and the Services rendered by you under this Agreement, and in the event of a change in either private interests or service under this Agreement, any question regarding possible conflict of interest resulting from such change will be raised with the Platform or its representatives.
            </Typography>
            </Grid>
            <Grid container md={12} xs={12}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XII.&nbsp;&nbsp; <b>No Third-Party Beneficiaries:</b>
       </Typography> 
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       Nothing expressed or implied in this Agreement is intended to confer, nor shall anything herein confer, upon any person other than the Collaborator and Hubhawks hereto and their respective permitted successors and assigns, any rights, remedies, obligations or liabilities whatsoever.
            </Typography>
            </Grid>
            <Grid container md={12} xs={12}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XIII.&nbsp;&nbsp;&nbsp;&nbsp;<b>Modification clause</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       The terms of this Agreement, including the Eate schedule and available Services, are subject to change at Hubhawk’s discretion without prior notice. Notice of changes of terms will be provided by modification of this page or linked pages and updating the revision date for this page or linked pages. Continued use of the Platform after the revision date of this page or a linked page indicates agreement to the changes.
            </Typography>
            </Grid>
            <Grid container md={9} xs={12}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XIV.&nbsp;&nbsp;&nbsp;&nbsp;<b>Force Majeure Event</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       Hubhawks shall not be liable for any failure or delay on its part in performing its obligations under this Agreement, if such failure or delay is due to a force majeure event. A force majeure event is any event beyond Hubhawk’s reasonable control, including, without limitation, any act of war, epidemic, pandemic, act of god or nature, earthquake, hurricane, tornados, flood, fire or another similar casualty, embargo, riot, terrorism, sabotage, strike or labour difficulty, change in applicable laws, governmental act, law or regulation, insurrections, terrorism, epidemic, pandemic, quarantine, inability to procure materials or transportation facilities, failure of power, court order, condemnation, failure of the internet, failure of a supplier or other event similar to the foregoing, which Hubhawk’s is unable to overcome by the exercise of reasonable diligence (s).
            </Typography>
            </Grid>
            <Grid container md={9} xs={12}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XV.&nbsp;&nbsp;&nbsp;&nbsp; <b>Term and Termination</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       You may change or discontinue your Account at any time by submitting the appropriate form available on the webpage that can be accessed here. The Platform reserves its right to suspend, deactivate or cancel your Account at any time for any reason. The Platform also reserves the right to delete any information related to your Account on its system. Termination of the Agreement shall not (a) relieve the Collaborator of any obligation or liability accrued prior to termination, and (b) shall not relieve either party of continuing rights and obligations.
            </Typography>
          </Grid>
          <Grid container md={9} xs={12}>
            <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XVI.&nbsp;&nbsp;&nbsp;&nbsp; <b>Dispute Resolution</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       We encourage our Collaborators to try and settle conflicts amicably by addressing the claims and queries through the grievance redressal process by filling out the form or writing an email to ______ ; however, if for any reason the same is not possible, then, any controversy or claim arising out of this Agreement shall be settled through mediation. However, if the disputes are not resolved by the mediation within 30 (thirty) days, then the same shall be referred to binding arbitration before a Sole Arbitrator appointed by Delhi International Arbitration Centre (“DIAC”). The arbitration shall be governed in accordance with the provisions of the Arbitration and Conciliation Act, 1996 as amended from time to time or any statutory amendments thereof. The arbitration proceedings shall be conducted in accordance with the DIAC Arbitration Rules, with seat of arbitration at New Delhi with the venue being online mode or in New Delhi as agreed between the Parties. The award given by the sole arbitrator shall be binding upon both Parties.
      </Typography>
      </Grid>
      <Grid container md={9} xs={12}>
       <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XVII.&nbsp;&nbsp;&nbsp; <b>User Conduct and Protection</b>
       </Typography> 
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       Hubhawks provides an innovative and safe space for users and Collaborators to create, share, sell and purchase Services on the Platform at value. Hubhawks maintains a friendly, community-spirited, and professional environment and the Collaborators should keep to that spirit while participating in any activity or extension of Hubhawks. This clause relates to the expected conduct users should adhere to while rendering the Services on the Platform. Please contact our customer support team here to report a violation of the terms and conditions under this Agreement and/or community standards, user misconduct, or inquiries regarding your Account.
                   </Typography>  
                   </Grid>
      <Grid container md={9} xs={12}>
      <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XVIII.&nbsp;&nbsp;&nbsp;&nbsp; <b>Non-Permitted Usage</b>
       </Typography>  
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       The Collaborator understands and agrees that the itemised list of conduct below is not permitted on the Platform and the breach of this obligation may result in immediate termination of the Agreement between the Collaborator and Hubhawks. The list of items that are not permitted on the Platform is as follows: -
      </Typography>  
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     1. &nbsp; &nbsp;Adult Services & Pornography - Hubhawks does not allow any exchange of adult-oriented or pornographic materials and services.
     </Typography>   
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     2. &nbsp; &nbsp;Inappropriate Behaviour & Language - Communication on Hubhawks should be friendly, constructive, and professional. Hubhawks condemns bullying, harassment, and hate speech towards others.
     </Typography>  
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     3. &nbsp; &nbsp;Inappropriate Behaviour & Language - Communication on Hubhawks should be friendly, constructive, and professional. Hubhawks condemns bullying, harassment, and hate speech towards others.
     </Typography>  
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     4. &nbsp; &nbsp;Inappropriate Behaviour & Language - Communication on Hubhawks should be friendly, constructive, and professional. Hubhawks condemns bullying, harassment, and hate speech towards others.
     </Typography>   
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     5. &nbsp; &nbsp;Authentic Hubhawks Profile - You may not create a false identity on Hubhawks, misrepresent your identity, create a Hubhawks profile for anyone other than yourself (a real person), or use or attempt to use another user’s account or information; Your profile information, including your description, skills, location, etc., while may be kept anonymous, must be accurate and complete and may not be misleading, illegal, offensive or otherwise harmful. Hubhawks reserves the right to require users to go through a verification process in order to use the Platform (whether by using ID, phone, camera, etc.).
     </Typography>   
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     6. &nbsp; &nbsp;Fraud / Unlawful Use - You may not use Hubhawks for any unlawful purposes or to conduct illegal activities.
     </Typography>  
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     7. &nbsp; &nbsp;Targeted Abuse - We do not tolerate Collaborators who engage in targeted abuse or harassment towards other users/Collaborators on Hubhawks.
     </Typography>  
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     8. &nbsp; &nbsp;Selling Accounts - You may not buy or sell Hubhawks accounts.
     </Typography>  
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XIX.&nbsp;&nbsp;&nbsp;&nbsp; <b>Construction of this Agreement</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     1. &nbsp; &nbsp;The terms and conditions included or incorporated by reference in this Agreement constitute the entire agreement between the parties on the subjects covered by this agreement.;
     </Typography> 
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     2. &nbsp; &nbsp;Agreement shall be binding upon the original parties, and their successors. However, you may not assign your subscription to a third party;
     </Typography> 
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     3. &nbsp; &nbsp;This Agreement shall be construed as a whole and not in favour of either party. For example, no provision shall be construed against the party responsible for the language of the provision. Each provision shall be given its fair meaning.
     </Typography> 
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     4. &nbsp; &nbsp;The rights, remedies and obligations under this Agreement are cumulative. The exercise of any rights and remedies under this agreement or any other Agreement shall not preclude or waive the right to exercise any and all other rights and remedies. A failure of a party, intentional or otherwise, to exercise any rights under this Agreement or law does not constitute a waiver of any rights related to any other instance; and
     </Typography> 
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     5. &nbsp; &nbsp;If any part of this Agreement is determined to be invalid or unenforceable, including but not limited to, the warranty disclaimer and liability limitations, the remainder of the Agreement shall continue in effect and the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision.
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={10}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':'120px'}}>Service Subscription Agreement</Typography> 
       </Grid> 
       </Grid>
       <Grid container md={9} xs={12}>
       <Grid item md={12}xs={10}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> I.&nbsp;&nbsp;&nbsp;&nbsp; <b>Introduction</b></Typography> 
       </Grid>
       </Grid>
       <Grid item md={11}xs={10}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       Hubhawks Marketing India Private Limited (hereinafter, “Hubhawks”) provides services as displayed on its website or mobile application (hereinafter, “Platform”) which can be accessed at https:/s/hubhawks.com/. This agreement comprises the terms of use (hereinafter, “Agreement”) for the users of services (hereinafter, “User/s”) provided by way of subscription to its Platform and governs your use of this Platform as a subscriber of our services. The terms “we”, “our” and “us” refers to the Platform, while the term “you” refers to you, as a User of our Platform.
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       Please review the following terms carefully. By clicking the “I Agree” button, you signify your Agreement to these Terms of Use and warrant that you have the legal capacity to enter into and perform your obligations under this Agreement. If you do not agree to be bound by the terms under this Agreement in their entirety, you may not use the services offered by us.
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> II.&nbsp;&nbsp;&nbsp;&nbsp; <b>About the Service</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={10}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       Among others, the services provided by us allow you to design, edit and market your manuscripts (hereinafter, “Services”) based on individual interests and requirements to ultimately transform such manuscripts into publications. For an exhaustive list of Services provided by us, kindly visit the main web page. In exchange for the Services provided by us, we will charge you according to the services that you wish to avail yourself. The rate schedule vis-à-vis the respective Services provided by the Platform is displayed here. The terms and conditions of payment in respect of the rate schedule for the Services availed are referenced here. 
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={10}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> III.&nbsp;&nbsp;&nbsp;&nbsp; <b>Access</b></Typography> 
       </Grid>
       </Grid>
       <Grid item md={11}xs={10}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     1. &nbsp; &nbsp;Access to our Services through your account is limited to you personally as a single User. You may not allow others to use your account or password.
     </Typography> 
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     2. &nbsp; &nbsp;The system through which services are provided, which may include the computer software(s) used, the end User interface, the documentation and databases relating to the Platform belong to HubHawks. HubHawks owns the intellectual property associated with the Platform and the information, if any, accessed through the Platform. You acknowledge that we do not retain ownership of intellectual property rights of any kind related to the products delivered to you by availing the Services provided by us, including any copyrights, patents, trademarks and other proprietary rights.
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     3. &nbsp; &nbsp;As a subscriber, you are granted a limited, non-assignable and non-transferable license to access and use the Services provided by us. Hubhawks agrees that Hubhawks shall not post, copy, modify, communicate, transmit, redistribute, display, disclose, create any derivative works from, make commercial use of, or reproduce in any way any the copyrighted material, trademarks and other content owned by the Users, without first obtaining the prior written consent of the User.
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     4. &nbsp; &nbsp;Notwithstanding anything in this Clause, the User understands and agrees that Hubhawks may display, transmit and disclose the services availed by the Users from Hubhwaks under this Agreement for the sole purposes of marketing and outreach. Im doing so, Hubhwaks undertakes to disclose the title, author and the true nature of services provided by Hubhawks through this Platform.
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> IV.&nbsp;&nbsp; <b>Security</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     1. &nbsp; &nbsp;You are responsible for maintaining the confidentiality of passwords, User names, and other account information provided in connection with the Services provided by us;
     </Typography> 
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     2. &nbsp; &nbsp;You are responsible for maintaining the confidentiality of passwords, User names, and other account information provided in connection with the Services provided by us;
     </Typography> 
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     3. &nbsp; &nbsp;You understand and agree that in an event of any loss of information to your account due to unauthorised use, the Platform shall not be held liable;
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     4. &nbsp; &nbsp;If any loss of information like passwords, User names, saved content or other account information occurs while making the authorised use of the account, the User shall immediately inform the authorised representative of the Platform and the Platform shall take all reasonable measures to retrieve the account information. However, the Platform cannot be and shall not be held responsible for the loss of account information in terms of this clause.
     </Typography>
     </Grid> 
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> V.&nbsp;&nbsp;&nbsp;&nbsp; <b>Warranties and Liabilities</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       You acknowledge that your access to the Platform and use of the services provided by it is at your own risk. The services availed through the use of the Platform are provided on an “as is” and “as available” basis, without any warranties of any kind, either express or implied. Neither Hubhawks nor any person associated with Hubhawks makes any warranty or representation with respect to the completeness, security, reliability, quality, accuracy or availability of the services provided. The foregoing does not affect any warranties which cannot be excluded or limited under applicable law. [SB1] You also agree to indemnify, defend and hold harmless Hubhawks, its shareholders, officers, directors, employees, agents, affiliates and successors from and against any and all claims, demands, losses, liabilities, damages or expenses of any nature whatsoever incurred or suffered by us, in so far as such losses (or actions in respect thereof) arise out of, are related to, or are based on or reasonably related to the breach of any representation, warranty, obligation or covenant agreed to by you in this agreement. This clause shall also be effective against your heirs, assigns, or representatives. In no event will HubHawks, its affiliates or service providers (hereinafter, “Collaborator/s”), employees or agents be liable for damages of any kind, arising out of or in connection with your use, or your inability to use the platform. You understand and agree that any liability, loss or damage that occurs as a result of the use of the services provided by us is solely your responsibility.
     </Typography> 
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> VI.&nbsp;&nbsp;&nbsp;&nbsp; <b>Privacy</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       We respect the privacy of the Users of the services provided by us. Please refer to HubHawks’ Privacy Policy on the main web page, which explains how we collect, use, and disclose information that pertains to your privacy.
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> VII.&nbsp;&nbsp;&nbsp;&nbsp; <b>Indemnification</b>
       </Typography>
       </Grid>
        </Grid>
        <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       In addition to indemnification or liability provisions in other sections of this Agreement, you hereby agree to indemnify, defend and hold harmless Hubhawks, its shareholders, officers, directors, employees, agents, affiliates, successors and assigns, from and against any and all claims, demands, losses, liabilities, damages or expenses (including legal fees and costs) of any nature whatsoever incurred or suffered by us (collectively the "losses"), in so far as such losses (or actions in respect thereof) arise out of, are related to, or are based on or reasonably related to the breach of any representation, warranty, obligation or covenant agreed to by you in this agreement. This clause shall also be effective against your heirs, assignees, or representatives.
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> VII.&nbsp;&nbsp;&nbsp;&nbsp; <b>Non- Solicitation:</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       During the Term of this Agreement, you shall ensure that your affiliates, servants, employees, agents, subsidiaries, successors and assignees shall not, directly or indirectly:
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     Solicit, canvass, entice, employ, hire, induce or engage any consultant or person employed by Hubhawks or providing services to you through the Platform for the purpose of this Agreement; and
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     Solicit, canvass, entice, employ, hire, induce or engage any consultant or person employed by Hubhawks or providing services to you through the Platform for the purpose of this Agreement; and
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> IX.&nbsp;&nbsp;&nbsp;&nbsp; <b>Conflict of Interest:</b>
       </Typography> 
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       You affirm that to the best of your knowledge there exists no actual or potential conflict between Platform's business or financial interests and the Services sought by you under this Agreement, and in the event of change in either private interests or service under this Agreement, any question regarding possible conflict of interest resulting from such change will be raised with the Platform or its representatives.
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> X.&nbsp;&nbsp; <b>No Third-Party Beneficiaries:</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       Nothing expressed or implied in this Agreement is intended to confer, nor shall anything herein confer, upon any person other than the User and Hubhawks hereto and their respective permitted successors and assigns, any rights, remedies, obligations or liabilities whatsoever.
													  </Typography>
													  </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XI.&nbsp;&nbsp;&nbsp;&nbsp; <b>Modification clause</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       The terms of this Agreement, including the rate schedule and available services, are subject to change at Hubhawk’s discretion without prior notice. Notice of changes of terms will be provided by modification of this page or linked pages and updating the revision date for this page or linked pages. Continued use of the Services provided through the Platform after the revision date of this page or a linked page indicates agreement to the changes.
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XII.&nbsp;&nbsp;&nbsp;&nbsp; <b>Force Majeure Event</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       Hubhawks shall not be liable for any failure or delay on its part in performing its obligations under this Agreement if such failure or delay is due to a force majeure event. A force majeure event is any event beyond Hubhawk’s reasonable control, including, without limitation, any act of war, epidemic, pandemic, the act of god or nature, earthquake, hurricane, tornados, flood, fire or another similar casualty, embargo, riot, terrorism, sabotage, strike or labour difficulty, change in applicable laws, governmental act, law or regulation, insurrections, terrorism, epidemic, pandemic, quarantine, inability to procure materials or transportation facilities, failure of power, court order, condemnation, failure of the internet, failure of a supplier or other event similar to the foregoing, which Hubhawk’s is unable to overcome by the exercise of reasonable diligence (s).
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XIII.&nbsp;&nbsp;&nbsp;&nbsp; <b>Term and Termination</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       You may change or discontinue your account at any time by submitting the appropriate cancellation form available on the webpage that can be accessed here. The Platform reserves its right to suspend, deactivate or cancel your account at any time for any reason. The Platform also reserves the right to delete any information related to your account on its system. Termination of the Agreement shall not (a) relieve the User of any obligation or liability accrued prior to termination, and (b) shall not relieve either party of continuing rights and obligations.
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XIV.&nbsp;&nbsp;&nbsp;&nbsp; <b>Dispute Resolution</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       We encourage our Users to try and settle conflicts amicably by addressing the claims and queries through the grievance redressal process by filling out the form or writing an email to ______ ; however, if for any reason the dispute remains unresolved then any controversy or claim arising out of this agreement shall be settled through mediation. However, if the disputes are not resolved by the mediation within 30 (thirty) days, then the same shall be referred to binding arbitration before a Sole Arbitrator appointed by Delhi International Arbitration Centre (“DIAC”). The arbitration shall be governed in accordance with the provisions of the Arbitration and Conciliation Act, 1996 as amended from time to time or any statutory amendments thereof. The arbitration proceedings shall be conducted in accordance with the DIAC Arbitration Rules, with seat of arbitration at New Delhi with venue being online mode or in New Delhi as agreed between the Parties. The award given by the sole arbitrator shall be binding upon both Parties.
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XV.&nbsp;&nbsp;&nbsp;&nbsp; <b>User Conduct and Protection</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       Hubhawks provides an innovative and safe space for Users and Collaborators to create, share, sell and purchase Services on the Platform at value. Hubhawks maintains a friendly, community-spirited, and professional environment and the Users should keep to that spirit while participating in any activity or extension of Hubhawks. This section relates to the expected conduct Users should adhere to while using the Services on the Platform. Please contact our customer support team here[SB1] to report a violation of the terms and conditions under this Agreement and/or community standards, User misconduct, or inquiries regarding your account.
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XVI.&nbsp;&nbsp;&nbsp;&nbsp; <b>Non-Permitted Usage</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
       The User understands and agrees that the itemised list of conduct below is not permitted on the Platform and the breach of this obligation may result in immediate termination of the Agreement between the User and Hubhawks. The list of items that are not permitted on the Platform is as follows:
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     1. &nbsp; &nbsp;Adult Services & Pornography - Hubhawks does not allow any exchange of adult-oriented or pornographic materials and services.
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     2. &nbsp; &nbsp;Inappropriate Behaviour & Language - Communication on Hubhawks should be friendly, constructive, and professional. Hubhawks condemns bullying, harassment, and hate speech towards others.
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     3. &nbsp; &nbsp;Phishing and Spam – User’s and Collaborator’s (together, “Member/s”) security is a top priority. Any attempts to publish or send malicious content with the intent to compromise another Member’s account or computer environment is strictly prohibited. Please respect our Members’ privacy by not contacting them with offers, questions, suggestions or anything which is not directly related to the Service being offered or provided by them.
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     4. &nbsp; &nbsp;Privacy & Identity - You may not publish or post other people's private and confidential information. Any exchange of personal information required for the completion of a Service must be provided on the _____ Page. Any Users who engage and communicate off of Hubhawks with the Collaborator/s shall not be protected by this Agreement.
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     5. &nbsp; &nbsp;Authentic Hubhawks Profile - You may not create a false identity on Hubhawks, misrepresent your identity, create a Hubhawks profile for anyone other than yourself (a real person), or use or attempt to use another User’s account or information; Your profile information, including your description, skills, location, etc., while may be kept anonymous, must be accurate and complete and may not be misleading, illegal, offensive or otherwise harmful. Hubhawks reserves the right to require Users to go through a verification process in order to use the Platform (whether by using ID, phone, camera, etc.).
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     6. &nbsp; &nbsp;ntellectual Property Claims - Hubhawks will respond to clear and complete notices of alleged copyright or trademark infringement, and/or violation of third party’s terms of service. Our Intellectual Property claims procedures can be reviewed here.
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     7. &nbsp; &nbsp;Fraud / Unlawful Use - You may not use Hubhawks for any unlawful purposes or to conduct illegal activities.
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     8. &nbsp; &nbsp;Targeted Abuse - We do not tolerate Users who engage in targeted abuse or harassment towards other Users on Hubhawks. This includes creating new multiple accounts to harass Members through our message or ordering system.
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     9. &nbsp; &nbsp;Selling Accounts - You may not buy or sell Hubhawks accounts.
     </Typography>
     </Grid>
     <Grid container md={9} xs={12}>
     <Grid item md={12}xs={12}sx={{margin:"auto"}}>
       <Typography  sx={{textAlign:'initial',FontSize:mobile?'16px':'18px',fontWeight:mobile?'600':"600",lineHeight:mobile?'24px':"24px",marginTop:mobile?'36px':"36px"}}> XIX.&nbsp;&nbsp; <b>Construction of this Agreement</b>
       </Typography>
       </Grid>
       </Grid>
       <Grid item md={11}xs={12}sx={{margin:"auto"}}>
       <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     1. &nbsp; &nbsp;The terms and conditions included or incorporated by reference in this Agreement constitute the entire agreement between the parties on the subjects covered by this agreement.;
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     2. &nbsp; &nbsp;This Agreement shall be binding upon the original parties, and their successors. However. you may not assign your subscription to a third party;
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     3. &nbsp; &nbsp;This Agreement shall be construed as a whole and not in favour of either party. For example, no provision shall be construed against the party responsible for the language of the provision. Each provision shall be given its fair meaning.
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     4. &nbsp; &nbsp;The rights, remedies and obligations under this Agreement are cumulative. The exercise of any rights and remedies under this agreement or any other Agreement shall not preclude or waive the right to exercise any and all other rights and remedies. A failure of a party, intentional or otherwise, to exercise any rights under this Agreement or law does not constitute a waiver of any rights related to any other instance; and
     </Typography>
     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
     5. &nbsp; &nbsp;If any part of this Agreement is determined to be invalid or unenforceable, including but not limited to, the warranty disclaimer and liability limitations, the remainder of the Agreement shall continue in effect and the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision.
     </Typography>
       </Grid>
      
       </Grid>
       </Grid>
       </Grid>
       </Grid>
       </Grid>
       </Grid>
       </Grid>
       </Grid>
       </Grid>
       </Grid>
       
     
           
            
           
            
           
           
           
           
           
            
           
            
           
           
            
           
            
           
          
           
           
           
           
          
           
           
            


                     
                     
                    
                      
           
            
            
            
       
       
       
        
      
      
     
    
      
    </>
  )
}

export default TermsandCondition;
