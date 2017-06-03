package
{
	[JSModule]
	/**
	 * @externs
	 */
	public class chalk
	{
		public function chalk()
		{
		}

		public static function get reset():ChalkStyle
		{
			return null;
		}

		public static function get bold():ChalkStyle
		{
			return null;
		}

		public static function get dim():ChalkStyle
		{
			return null;
		}

		public static function get italic():ChalkStyle
		{
			return null;
		}

		public static function get underline():ChalkStyle
		{
			return null;
		}

		public static function get inverse():ChalkStyle
		{
			return null;
		}

		public static function get hidden():ChalkStyle
		{
			return null;
		}

		public static function get strikethrough():ChalkStyle
		{
			return null;
		}

		public static function get black():ChalkStyle
		{
			return null;
		}

		public static function get red():ChalkStyle
		{
			return null;
		}

		public static function get green():ChalkStyle
		{
			return null;
		}

		public static function get yellow():ChalkStyle
		{
			return null;
		}

		public static function get blue():ChalkStyle
		{
			return null;
		}

		public static function get magenta():ChalkStyle
		{
			return null;
		}

		public static function get cyan():ChalkStyle
		{
			return null;
		}

		public static function get white():ChalkStyle
		{
			return null;
		}

		public static function get gray():ChalkStyle
		{
			return null;
		}

		public static function get grey():ChalkStyle
		{
			return null;
		}

		public static function get bgBlack():ChalkStyle
		{
			return null;
		}

		public static function get bgRed():ChalkStyle
		{
			return null;
		}

		public static function get bgGreen():ChalkStyle
		{
			return null;
		}

		public static function get bgYellow():ChalkStyle
		{
			return null;
		}

		public static function get bgBlue():ChalkStyle
		{
			return null;
		}

		public static function get bgMagenta():ChalkStyle
		{
			return null;
		}

		public static function get bgCyan():ChalkStyle
		{
			return null;
		}

		public static function get bgWhite():ChalkStyle
		{
			return null;
		}
	}
}

interface ChalkStyle
{
	// General
	function get reset():ChalkStyle;
	function get bold():ChalkStyle;
	function get dim():ChalkStyle;
	function get italic():ChalkStyle;
	function get underline():ChalkStyle;
	function get inverse():ChalkStyle;
	function get hidden():ChalkStyle;
	function get strikethrough():ChalkStyle;

	// Text colors
	function get black():ChalkStyle;
	function get red():ChalkStyle;
	function get green():ChalkStyle;
	function get yellow():ChalkStyle;
	function get blue():ChalkStyle;
	function get magenta():ChalkStyle;
	function get cyan():ChalkStyle;
	function get white():ChalkStyle;
	function get gray():ChalkStyle;
	function get grey():ChalkStyle;

	// Background colors
	function get bgBlack():ChalkStyle;
	function get bgRed():ChalkStyle;
	function get bgGreen():ChalkStyle;
	function get bgYellow():ChalkStyle;
	function get bgBlue():ChalkStyle;
	function get bgMagenta():ChalkStyle;
	function get bgCyan():ChalkStyle;
	function get bgWhite():ChalkStyle;
}