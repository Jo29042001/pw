import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { SellersComponent } from './admin/sellers/sellers.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { TrackingComponent } from './tracking/tracking.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { UsersUpdateComponent } from './admin/users-update/users-update.component';
import { ProductsUpdateComponent } from './admin/products-update/products-update.component';
import { OrdersUpdateComponent } from './admin/orders-update/orders-update.component';
import { SellersUpdateComponent } from './admin/sellers-update/sellers-update.component';
import { ShipperLoginComponent } from './shipper-login/shipper-login.component';
import { ShipperHomeComponent } from './shipper-home/shipper-home.component';
import { ShippersComponent } from './admin/shippers/shippers.component';
import { ShippersUpdateComponent } from './admin/shippers-update/shippers-update.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignupComponent } from './shipper-signup/signup.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'seller-home', component:SellerHomeComponent},
    {path:'seller-addProduct', component:SellerAddProductComponent},
    {path:'seller-updateProduct/:id',component:SellerUpdateProductComponent},
    {path:'search/:productName',component:SearchComponent},
    {path:'details/:productId', component:ProductDetailsComponent},
    {path:'cart-page', component:CartPageComponent},
    {path:'checkout', component:CheckoutComponent},
    {path:'my-orders', component:MyOrdersComponent},
    {path:'about', component:AboutComponent},
    {path:'contact-us', component:ContactUsComponent},
    {path:'payment-gateway',component:PaymentGatewayComponent},
    {path:'tracking', component:TrackingComponent},

    // {path:'', children:[
    //     {path:'seller-signup', component:SellerSignupComponent},
    //     {path:'seller-login', component:SellerLoginComponent},
    // ]},
    {path:'', children:[
        {path:'user-signup', component:UserSignupComponent},
        {path:'user-login', component:UserLoginComponent},
    ]},
    {path:'', children:[
        {path:'signup', component:SignupComponent},
        {path:'shipper-login', component:ShipperLoginComponent},
        {path:'seller-login', component:SellerLoginComponent},
    ]},
    {path:'shipper-home', component:ShipperHomeComponent},
    {path:'', children:[
        {path:'admin-login', component:AdminLoginComponent}
    ]},
    {path:'', children:[
        {path:'admin/users', component:UsersComponent},
        {path:'admin/products', component:ProductsComponent},
        {path:'admin/sellers', component:SellersComponent},
        {path:'admin/orders', component:OrdersComponent},
        {path:'admin/shippers', component:ShippersComponent},
        {path:'admin/users-update/:id', component:UsersUpdateComponent},
        {path:'admin/sellers-update/:id', component:SellersUpdateComponent},
        {path:'admin/products-update/:id', component:ProductsUpdateComponent},
        {path:'admin/orders-update/:id', component:OrdersUpdateComponent},
        {path:'admin/shippers-update/:id', component:ShippersUpdateComponent}
    ]}  
];